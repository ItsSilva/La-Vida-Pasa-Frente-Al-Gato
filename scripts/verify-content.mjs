import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const source = JSON.parse(
  await readFile(resolve('src/content/cronica.json'), 'utf8')
);
const expectedHash =
  'a8de0d605e2b0f8d4706397037b5b140ddd48eb0cdf15cb6e1c20ecb95444c83';
const expectedIds = Array.from(
  { length: 34 }, (_, i) => `p${String(i + 1).padStart(2, '0')}`
);
const expectedVoices = ['p10', 'p28', 'p33'];
const expectedLead = "Le estábamos viendo el culo a todas las gatas. Una detrás de otra, hasta que empezó a parecernos extraño.";
assert.equal(source.paragraphs.length, expectedIds.length, 'Cantidad de párrafos');
assert.deepEqual(source.paragraphs.map(p => p.id), expectedIds, 'Orden de párrafos');
assert.deepEqual(
  source.paragraphs.filter(p => p.voice === 'gato').map(p => p.id),
  expectedVoices,
  'Intervenciones del Gato'
);
const payload = JSON.stringify([
  source.title,
  source.byline,
  source.paragraphs.map(p => [p.id, p.voice, p.runs])
]);
const actualHash = createHash('sha256').update(payload, 'utf8').digest('hex');
assert.equal(actualHash, expectedHash, 'La fuente canónica fue modificada');
console.log(`Fuente íntegra: ${expectedIds.length} párrafos y SHA-256 correcto.`);

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
      await page.locator('[data-story-paragraph]').count(), expectedIds.length,
      'Párrafos ausentes o duplicados'
    );

    const actual = await page.locator('#cronica').evaluate(root => {
      const titles = root.querySelectorAll('[data-story-title]');
      const bylines = root.querySelectorAll('[data-story-byline]');
      const paragraphs = [...root.querySelectorAll('[data-story-paragraph]')];
      const leads = root.querySelectorAll('strong');
      const lead = leads[0];
      const copy = root.cloneNode(true);
      copy.querySelectorAll(
        '[data-story-title], [data-story-byline], [data-story-paragraph], figure'
      ).forEach(el => el.remove());

      return {
        titleCount: titles.length,
        bylineCount: bylines.length,
        title: titles[0]?.textContent,
        byline: bylines[0]?.textContent,
        leadCount: leads.length,
        lead: lead?.textContent,
        leadParagraph: lead?.parentElement.dataset.storyParagraph,
        leadWeight: lead && Number(getComputedStyle(lead).fontWeight),
        leadFontSize: lead && parseFloat(getComputedStyle(lead).fontSize),
        bodyFontSize: lead && parseFloat(getComputedStyle(lead.parentElement).fontSize),
        description: document.querySelector('meta[name="description"]')?.content,
        paragraphs: paragraphs.map(el => {
          const style = getComputedStyle(el);
          return {
            id: el.getAttribute('data-story-paragraph'),
            voice: el.getAttribute('data-voice'),
            text: el.textContent,
            emphasis: [...el.querySelectorAll('em')].map(em => ({
              text: em.textContent,
              italic: getComputedStyle(em).fontStyle === 'italic',
            })),
            fontStyle: style.fontStyle,
            fontWeight: Number(style.fontWeight),
            displayed: el.getClientRects().length > 0 &&
              style.visibility !== 'hidden' && style.display !== 'none'
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
    assert.equal(actual.leadCount, 1, 'Solo el gancho en negrita');
    assert.equal(actual.lead, expectedLead, 'El gancho debe contener las dos frases indicadas');
    assert.equal(actual.leadParagraph, 'p01', 'El gancho debe abrir el primer párrafo');
    assert.ok(actual.leadWeight >= 600, `Gancho sin negrita a ${width}px`);
    assert.ok(actual.leadFontSize > actual.bodyFontSize, `Gancho sin jerarquía a ${width}px`);
    assert.equal(actual.description, expectedLead, 'Descripción de la página desactualizada');
    assert.equal(actual.paragraphs.length, source.paragraphs.length);
    assert.equal(actual.extraText, '', 'Texto adicional dentro del artículo');
    assert.equal(actual.horizontalOverflow, false, `Desbordamiento a ${width}px`);

    for (let i = 0; i < source.paragraphs.length; i++) {
      const expected = source.paragraphs[i];
      const rendered = actual.paragraphs[i];
      const label = `${expected.id} a ${width}px`;
      assert.equal(rendered.id, expected.id, `Orden incorrecto: ${label}`);
      assert.equal(rendered.voice, expected.voice, `Voz incorrecta: ${label}`);
      assert.equal(rendered.text, expected.runs.map(run => run.text).join(''), `Texto alterado: ${label}`);
      assert.equal(rendered.displayed, true, `Párrafo oculto: ${label}`);
      assert.deepEqual(
        rendered.emphasis, expected.runs.filter(run => run.italic).map(run => ({ text: run.text, italic: true })),
        `Énfasis incorrecto: ${label}`
      );
      assert.equal(rendered.fontStyle, 'normal', `Cursiva fuera de los pasajes de la fuente: ${label}`);
      assert.ok(rendered.fontWeight < 600, `Negrita fuera del gancho: ${label}`);
    }
    console.log(`HTML íntegro a ${width}px, con JavaScript del sitio desactivado.`);
  }
} finally {
  await browser.close();
}
