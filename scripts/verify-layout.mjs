import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { chromium } from 'playwright';

const target = process.argv[2] ?? 'http://127.0.0.1:4321';
const captures = process.argv[3];
const widths = [320, 390, 768, 1024, 1440];
const browser = await chromium.launch();

if (captures) await mkdir(captures, { recursive: true });

try {
  for (const width of widths) {
    const page = await browser.newPage({ viewport: { width, height: 960 } });
    const errors = [];
    page.on('response', response => {
      if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`);
    });
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => {
      if (message.type() === 'error') errors.push(message.text());
    });

    const response = await page.goto(target, { waitUntil: 'load' });
    assert.ok(response?.ok(), `Respuesta de la página a ${width}px`);

    const { overflow, coverOrder, sides, bodyOrder, lastId, p20Tag } = await page.evaluate(() => {
      function position(copy, photo) {
        const a = copy.getBoundingClientRect();
        const b = photo.getBoundingClientRect();
        if (b.bottom <= a.top + 1 || b.top >= a.bottom - 1) return b.top >= a.bottom - 1 ? 'below' : 'above';
        return b.right <= a.left + 1 ? 'left' : b.left >= a.right - 1 ? 'right' : 'overlap';
      }

      const cover = document.querySelector('.cover');
      const scenes = [...document.querySelectorAll('.scene')];
      const photographed = scenes.filter(scene => scene.querySelector('figure'));
      return {
        overflow: document.documentElement.scrollWidth > innerWidth + 1,
        coverOrder: position(cover.firstElementChild, cover.querySelector('figure')),
        sides: photographed.map(scene => position(scene.firstElementChild, scene.querySelector('figure'))),
        bodyOrder: photographed.every(scene => scene.firstElementChild.matches('.scene__copy')),
        lastId: scenes.at(-1).querySelector('.scene__copy').lastElementChild.dataset.storyParagraph,
        p20Tag: document.querySelector('[data-story-paragraph="p20"]').tagName,
      };
    });
    assert.equal(overflow, false, `Desbordamiento a ${width}px`);
    assert.equal(coverOrder, width >= 1024 ? 'left' : 'below', `Portada a ${width}px`);
    assert.deepEqual(sides, width >= 1024 ? ['left', 'right', 'left', 'right', 'left'] : Array(5).fill('below'));
    assert.equal(bodyOrder, true, 'Texto antes de la figura en el DOM');
    assert.equal(lastId, 'p32');
    assert.equal(p20Tag, 'P');

    const images = await page.locator('article img').all();
    assert.equal(images.length, 6);
    for (const image of images) {
      await image.scrollIntoViewIfNeeded();
      const ready = await image.evaluate(async img => {
        await img.decode();
        const preserved = img.closest('.cover') ||
          Math.abs(img.clientWidth / img.clientHeight - img.naturalWidth / img.naturalHeight) < 0.02;
        return Boolean(preserved && img.alt && img.naturalWidth && img.width && img.height && img.srcset);
      });
      assert.equal(ready, true, `Foto adaptable a ${width}px`);
    }
    assert.deepEqual(errors, [], `Recursos y consola a ${width}px`);

    if (width === 1440) {
      await page.evaluate(() => scrollTo(0, 0));
      await page.keyboard.press('Tab');
      const skip = page.locator('.skip-link');
      assert.equal(await skip.evaluate(el => el === document.activeElement && el.getBoundingClientRect().top >= 0 && getComputedStyle(el).outlineStyle === 'solid'), true);
      await page.keyboard.press('Enter');
      assert.equal(await page.locator('#cronica').evaluate(el => el === document.activeElement), true);
      await page.keyboard.press('Tab');
      const back = page.locator('.footer a');
      assert.equal(await back.evaluate(el => el === document.activeElement && getComputedStyle(el).outlineStyle === 'solid'), true);
      await page.keyboard.press('Enter');
      assert.equal(await page.locator('#inicio').evaluate(el => el === document.activeElement && scrollY === 0), true);

      await page.evaluate(() => { document.documentElement.style.fontSize = '200%'; });
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), true, 'Texto al 200 %');
      await page.evaluate(() => { document.documentElement.style.removeProperty('font-size'); });

      await page.emulateMedia({ media: 'print' });
      assert.equal(await page.locator('.story').evaluate(el => getComputedStyle(el).display), 'block');
      assert.equal(await page.locator('[data-story-paragraph]:visible').count(), 32);
      await page.emulateMedia({ media: 'screen' });
    }

    if (captures && [390, 1440].includes(width)) {
      await page.evaluate(() => { document.activeElement?.blur(); scrollTo(0, 0); });
      await page.screenshot({ path: join(captures, `${width}-portada.png`) });
      for (const id of ['p04', 'p07', 'p20', 'p31']) {
        await page.locator(`[data-story-paragraph="${id}"]`).evaluate(el => el.scrollIntoView({ block: 'center' }));
        await page.screenshot({ path: join(captures, `${width}-${id}.png`) });
      }
    }

    const assets = await page.evaluate(() => {
      const coverPath = document.querySelector('.cover img').currentSrc;
      const resources = performance.getEntriesByType('resource');
      const coverBytes = resources.find(entry => entry.name === coverPath)?.encodedBodySize;
      return { coverBytes, imagesBytes: resources.filter(entry => entry.initiatorType === 'img').reduce((sum, entry) => sum + entry.encodedBodySize, 0) };
    });
    console.log(`${width}px · portada ${coverOrder} · escenas ${sides.join('/')} · portada ${assets.coverBytes ?? '?'} B · fotos recorridas ${assets.imagesBytes} B`);
    await page.close();
  }

  console.log('Composición, recursos, teclado, texto al 200 % e impresión verificados.');
} finally {
  await browser.close();
}
