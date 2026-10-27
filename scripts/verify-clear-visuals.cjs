// Comprehensive E2E & Mobile Visual QA for Hybrid Flashcard Illustrations + 1-Tap English Prompt Peek
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');

const publicDir = path.resolve(__dirname, '../public');
const artifactDir = process.env.ARTIFACT_DIR || path.resolve(__dirname, '../artifacts');
fs.mkdirSync(artifactDir, { recursive: true });

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.webmanifest': 'application/manifest+json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.webp': 'image/webp'
};

function startServer() {
  const imageRequests = [];
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let reqPath = req.url.split('?')[0];
      if (reqPath === '/') reqPath = '/index.html';
      const filePath = path.join(publicDir, reqPath);
      fs.readFile(filePath, (err, data) => {
        if (reqPath.includes('/assets/scenes/')) {
          imageRequests.push({ url: reqPath, status: err ? 404 : 200 });
        }
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('Not Found');
        } else {
          const ext = path.extname(filePath);
          res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
          res.end(data);
        }
      });
    });
    server.listen(0, '127.0.0.1', () => {
      resolve({ server, port: server.address().port, imageRequests });
    });
  });
}

(async () => {
  const { server, port, imageRequests } = await startServer();
  const url = `http://127.0.0.1:${port}`;
  console.log('Server running on', url);

  const browser = await chromium.launch({
    headless: true,
    channel: process.env.PARLEZ_BROWSER_CHANNEL || 'msedge'
  });

  try {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));

    await page.goto(url, { waitUntil: 'networkidle' });
    assert.equal(errors.length, 0, 'Page errors on load: ' + errors.join(', '));

    // 1. Verify all 192 cards have unique scene keys in live state
    const sceneAudit = await page.evaluate(() => {
      const seen = {};
      for (const c of state.cards) {
        (seen[c.scene] = seen[c.scene] || []).push(c.id);
      }
      const dups = Object.entries(seen).filter(([, ids]) => ids.length > 1);
      return { total: state.cards.length, dups };
    });
    console.log('Total cards in browser state:', sceneAudit.total);
    assert.equal(sceneAudit.total, 192, 'Expected 192 cards in state');
    assert.equal(sceneAudit.dups.length, 0, 'Expected 0 duplicate scene keys, got: ' + JSON.stringify(sceneAudit.dups));

    // 2. Open Review -> Card 1 ("wake" -> wake.webp) and verify Picture-Only + 1-Tap Peek button
    await page.locator('[data-action="start-review"]').first().click();
    await page.waitForTimeout(350);

    // Ensure Picture-Only by default: no .front-english-banner and no .answer
    assert.equal(await page.locator('.answer').count(), 0, 'French answer must be hidden on front');
    assert.equal(await page.locator('.front-english-banner').count(), 0, 'English banner must be hidden before tapping peek');
    assert.equal(await page.locator('[data-action="peek-prompt"]').count(), 1, '1-tap Show English prompt button must appear on front');

    await page.screenshot({ path: path.join(artifactDir, 'visual-upgrade-wake-front-390.png') });

    // 3. Jump to "c2_mettez_en" (market-scale.webp) and test tapping "Show English prompt"
    await page.evaluate(() => { startPracticeCard('c2_mettez_en'); });
    await page.waitForTimeout(350);
    assert.equal(await page.locator('[data-action="peek-prompt"]').count(), 1);
    await page.locator('[data-action="peek-prompt"]').click();
    await page.waitForTimeout(150);

    // Banner now shows English prompt WITHOUT revealing French answer!
    assert.equal(await page.locator('.front-english-banner').count(), 1, 'English prompt banner must appear after 1 tap');
    assert.equal(await page.locator('.answer').count(), 0, 'French answer must STILL stay hidden after peeking English prompt');
    const bannerText = await page.locator('.front-english-banner').textContent();
    console.log('Peeked English prompt banner:', bannerText.trim());
    assert.ok(bannerText.includes('Give me a kilo of it'), 'Banner should show c2_mettez_en English prompt');

    await page.screenshot({ path: path.join(artifactDir, 'visual-upgrade-peek-open-390.png') });

    // Reveal French -> banner gone, French back shown; rate good -> next card resets peek
    await page.locator('[data-action="reveal"]').click();
    await page.waitForTimeout(150);
    assert.equal(await page.locator('.answer').count(), 1, 'French answer revealed');
    assert.equal(await page.locator('.front-english-banner').count(), 0, 'Front banner removed on back');

    // 4. Screenshot Family Tree diagram (c1_oncle - "the uncle")
    await page.evaluate(() => { startPracticeCard('c1_oncle'); });
    await page.waitForTimeout(250);
    assert.equal(await page.locator('[data-action="peek-prompt"]').count(), 1, 'promptPeeked must reset on new card');
    assert.equal(await page.locator('.front-english-banner').count(), 0);
    await page.screenshot({ path: path.join(artifactDir, 'visual-upgrade-family-tree-390.png') });

    // 5. Screenshot Crisp Number diagram (c1_quatre_vingts - "80 / 4 x 20")
    await page.evaluate(() => { startPracticeCard('c1_quatre_vingts'); });
    await page.waitForTimeout(250);
    await page.screenshot({ path: path.join(artifactDir, 'visual-upgrade-number-80-390.png') });

    // 5b. Screenshot Phone Number diagram (c1_telephone - "le numéro de téléphone")
    await page.evaluate(() => { startPracticeCard('c1_telephone'); });
    await page.waitForTimeout(250);
    await page.screenshot({ path: path.join(artifactDir, 'visual-upgrade-phone-number-390.png') });

    // 6. Screenshot Distinct Grammar Negation diagram (gr_negation_jamais - "ne... jamais") in Grammar session
    await page.evaluate(() => {
      navigate('grammar');
      grammarSubView = 'cards';
      initGrammarSession(['gr_negation_jamais', 'gr_negation_plus'], 'all');
      render();
    });
    await page.waitForTimeout(250);
    assert.equal(await page.locator('[data-action="peek-prompt"]').count(), 1, 'Grammar flashcard front must also have 1-tap peek button');
    await page.screenshot({ path: path.join(artifactDir, 'visual-upgrade-grammar-jamais-390.png') });

    // 7. Test "mixed" ("Picture + English") frontMode in Settings
    await page.evaluate(() => {
      activeProfile().prefs.frontMode = 'mixed';
      persist();
      startPracticeCard('c2_reste_de_la_place');
    });
    await page.waitForTimeout(250);
    assert.equal(await page.locator('.front-english-banner').count(), 1, 'Mixed mode must automatically show English banner alongside picture');
    assert.equal(await page.locator('.review-scene > svg').count(), 1, 'Mixed mode must still show visual scene');

    // Restore visual mode
    await page.evaluate(() => {
      activeProfile().prefs.frontMode = 'visual';
      persist();
      startPracticeCard('a1');
    });
    await page.waitForTimeout(200);

    // 8. Verify zero 404s on any /assets/scenes/*.webp request
    const failedImgs = imageRequests.filter(r => r.status !== 200);
    assert.equal(failedImgs.length, 0, 'Failed WebP scene requests: ' + JSON.stringify(failedImgs));
    console.log('WebP scene HTTP requests verified (200 OK):', imageRequests.length);

    // 9. Test responsive viewports (320, 375, 390, 430, 1280 px) for zero horizontal overflow
    for (const width of [320, 375, 390, 430, 1280]) {
      await page.setViewportSize({ width, height: 844 });
      await page.waitForTimeout(80);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
      assert.equal(overflow, false, `Horizontal overflow at ${width}px`);
    }
    console.log('Responsive check passed at 320, 375, 390, 430, and 1280 px!');

    console.log('ALL CLEAR-VISUALS & 1-TAP PROMPT PEEK TESTS PASSED 100%!');
  } finally {
    await browser.close();
    server.close();
  }
})().catch(err => {
  console.error('VERIFY CLEAR VISUALS FAILED:', err);
  process.exit(1);
});
