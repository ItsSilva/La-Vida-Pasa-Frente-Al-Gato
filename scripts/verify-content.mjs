import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const source = JSON.parse(
  await readFile(resolve('src/content/cronica.json'), 'utf8')
);
const expectedHash =
  '7024736cc98dd50c84512e600aae345d8da0ada256dc5438ba6c73b05f44d9a0';
const expectedIds = Array.from(
  { length: 32 }, (_, i) => `p${String(i + 1).padStart(2, '0')}`
);
const expectedVoices = ['p09', 'p26', 'p31'];
assert.equal(source.paragraphs.length, 32, 'Cantidad de párrafos');
assert.deepEqual(source.paragraphs.map(p => p.id), expectedIds, 'Orden de párrafos');
assert.deepEqual(
  source.paragraphs.filter(p => p.voice === 'gato').map(p => p.id),
  expectedVoices,
  'Intervenciones del Gato'
);
const payload = JSON.stringify([
  source.title,
  source.byline,
  source.paragraphs.map(p => [p.id, p.voice, p.text])
]);
const actualHash = createHash('sha256').update(payload, 'utf8').digest('hex');
assert.equal(actualHash, expectedHash, 'La fuente canónica fue modificada');
console.log('Fuente íntegra: 32 párrafos y SHA-256 correcto.');

if (process.argv.includes('--source-only')) process.exit(0);

const target = process.argv[2] ?? 'http://127.0.0.1:4321';
assert.ok(/^https?:\/\//u.test(target), 'Indicar una URL HTTP o HTTPS');
const { chromium } = await import('playwright');
const browser = await chromium.launch();

try {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 1440, height: 1000 }
  });
  const page = await context.newPage();
  const response = await page.goto(target, { waitUntil: 'load' });
  assert.ok(response?.ok(), 'La página no respondió correctamente');

  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    assert.equal(await page.locator('#cronica').count(), 1, 'Artículo único');
    assert.equal(await page.locator('h1').count(), 1, 'Un solo título h1');
    assert.equal(
      await page.locator('[data-story-paragraph]').count(), 32,
      'Párrafos ausentes o duplicados'
    );

    const actual = await page.locator('#cronica').evaluate(root => {
      const titles = root.querySelectorAll('[data-story-title]');
      const bylines = root.querySelectorAll('[data-story-byline]');
      const paragraphs = [...root.querySelectorAll('[data-story-paragraph]')];
      const copy = root.cloneNode(true);
      copy.querySelectorAll(
        '[data-story-title], [data-story-byline], [data-story-paragraph], figure'
      ).forEach(el => el.remove());

      return {
        titleCount: titles.length,
        bylineCount: bylines.length,
        title: titles[0]?.textContent,
        byline: bylines[0]?.textContent,
        paragraphs: paragraphs.map(el => {
          const emphasis = el.querySelector('em');
          const style = getComputedStyle(emphasis ?? el);
          return {
            id: el.getAttribute('data-story-paragraph'),
            voice: el.getAttribute('data-voice'),
            text: el.textContent,
            emphasisCount: el.querySelectorAll('em').length,
            italic: style.fontStyle === 'italic',
            displayed: el.getClientRects().length > 0 &&
              getComputedStyle(el).visibility !== 'hidden' &&
              getComputedStyle(el).display !== 'none'
          };
        }),
        // Aquí solo se comprueba espacio estructural sobrante.
        // El texto de los párrafos se compara sin trim ni normalización.
        extraText: copy.textContent.trim(),
        horizontalOverflow:
          document.documentElement.scrollWidth > window.innerWidth + 1
      };
    });

    assert.equal(actual.titleCount, 1, 'Título único dentro del artículo');
    assert.equal(actual.bylineCount, 1, 'Autoría única dentro del artículo');
    assert.equal(actual.title, source.title, 'Título alterado');
    assert.equal(actual.byline, source.byline, 'Autoría alterada');
    assert.equal(actual.paragraphs.length, source.paragraphs.length);
    assert.equal(actual.extraText, '', 'Texto adicional dentro del artículo');
    assert.equal(actual.horizontalOverflow, false, `Desbordamiento a ${width}px`);

    for (let i = 0; i < source.paragraphs.length; i++) {
      const expected = source.paragraphs[i];
      const rendered = actual.paragraphs[i];
      const label = `${expected.id} a ${width}px`;
      assert.equal(rendered.id, expected.id, `Orden incorrecto: ${label}`);
      assert.equal(rendered.voice, expected.voice, `Voz incorrecta: ${label}`);
      assert.equal(rendered.text, expected.text, `Texto alterado: ${label}`);
      assert.equal(rendered.displayed, true, `Párrafo oculto: ${label}`);
      assert.equal(
        rendered.emphasisCount, expected.voice === 'gato' ? 1 : 0,
        `Énfasis incorrecto: ${label}`
      );
      assert.equal(
        rendered.italic, expected.voice === 'gato',
        `Cursiva incorrecta: ${label}`
      );
    }
    console.log(`HTML íntegro a ${width}px, con JavaScript del sitio desactivado.`);
  }
} finally {
  await browser.close();
}
