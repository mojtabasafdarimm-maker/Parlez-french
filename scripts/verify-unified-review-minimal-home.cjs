const http = require('http');
const fs = require('fs');
const path = require('path');
const assert = require('node:assert/strict');
const { chromium } = require('playwright');

const publicDir = path.resolve(__dirname, '../public');
const artifactDir = process.env.ARTIFACT_DIR || 'C:\\Users\\msafdari\\.gemini\\antigravity-cli\\brain\\63b558ca-27f5-4da2-87fb-c531bf775bff';
fs.mkdirSync(artifactDir, { recursive: true });

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.webmanifest': 'application/manifest+json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.webp': 'image/webp'
};

function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let reqPath = req.url.split('?')[0].split('#')[0];
      if (reqPath === '/' || reqPath === '') reqPath = '/index.html';
      const filePath = path.join(publicDir, reqPath);
      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(404);
          res.end('Not found');
        } else {
          res.writeHead(200, { 'Content-Type': mimeTypes[path.extname(filePath)] || 'application/octet-stream' });
          res.end(data);
        }
      });
    });
    server.listen(0, '127.0.0.1', () => resolve({ server, port: server.address().port }));
  });
}

(async () => {
  const { server, port } = await startServer();
  const browser = await chromium.launch({
    headless: true,
    channel: process.env.PARLEZ_BROWSER_CHANNEL || 'msedge'
  });

  try {
    const context = await browser.newContext({
      viewport: { width: 390, height: 844 },
      deviceScaleFactor: 2
    });
    const page = await context.newPage();

    const errors = [];
    page.on('pageerror', err => errors.push(err.message));
    page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });

    await page.goto(`http://127.0.0.1:${port}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(250);

    // 1. Minimalistic Home Page checks
    const heroBtnCount = await page.locator('.home-minimal-hero .home-primary-cta button').count();
    assert.equal(heroBtnCount, 1, 'Home hero must have exactly 1 primary CTA button');
    const openDropdowns = await page.locator('.home-dropdown[open]').count();
    assert.equal(openDropdowns, 0, 'Home dropdowns must be collapsed by default');

    await page.screenshot({ path: path.join(artifactDir, 'home-minimal-390.png') });

    // Expand "More Tools & Library" dropdown and screenshot
    await page.locator('.home-dropdown').nth(1).locator('summary').click();
    await page.waitForTimeout(150);
    const toolCount = await page.locator('.home-tool-row').count();
    assert.equal(toolCount, 4, 'More tools dropdown must reveal 4 navigation options');
    await page.screenshot({ path: path.join(artifactDir, 'home-dropdown-open-390.png') });

    // 2. Simulate exact user scenario:
    //    4 new vocab cards + 3 new grammar flashcards studied and now due for Today's Review
    await page.evaluate(() => {
      const p = activeProfile();
      p.progress = {};
      p.grammarProgress = {};
      const now = Date.now();
      const yesterday = now - 26 * 3600 * 1000;
      const pastDue = now - 3600 * 1000;

      // 4 due vocab cards
      ['a1', 'a2', 'a3', 'a4'].forEach(id => {
        p.progress[id] = {
          reviews: 2,
          reps: 1,
          interval: 1,
          stability: 1.4,
          difficulty: 4.9,
          ease: 2.5,
          learningStep: 2,
          lastReviewed: yesterday,
          dueAt: pastDue,
          firstReviewedDay: '2026-11-11'
        };
      });

      // 3 due grammar flashcards
      ['refl_lever_fem', 'refl_doucher_tu', 'prep_en_france'].forEach(id => {
        p.grammarProgress[id] = {
          reviews: 2,
          reps: 1,
          interval: 1,
          stability: 1.4,
          difficulty: 4.9,
          ease: 2.5,
          learningStep: 2,
          lastReviewed: yesterday,
          dueAt: pastDue,
          firstReviewedDay: '2026-11-11'
        };
      });

      persist();
      navigate('home');
    });
    await page.waitForTimeout(200);

    const summaryText = await page.locator('.home-summary-line').innerText();
    console.log('Home summary with 4 vocab + 3 grammar due:', summaryText);
    assert(summaryText.includes('7 due now'), 'Home summary must show 7 due now');
    assert(summaryText.includes('4 vocab'), 'Home summary must show 4 vocab');
    assert(summaryText.includes('3 grammar'), 'Home summary must show 3 grammar');

    await page.screenshot({ path: path.join(artifactDir, 'home-7-due-390.png') });

    // 3. Click "Review only the 7 due items" (or Start Today's Review) -> Unified sitting!
    await page.click('button[data-action="start-due-only"]');
    await page.waitForTimeout(200);

    const queueCheck = await page.evaluate(() => ({
      len: reviewSession.ids.length,
      vocabCount: reviewSession.ids.filter(id => !id.startsWith('gflash:')).length,
      grammarCount: reviewSession.ids.filter(id => id.startsWith('gflash:')).length
    }));
    console.log('Unified due queue:', queueCheck);
    assert.equal(queueCheck.len, 7, 'Unified due sitting must have 7 items');
    assert.equal(queueCheck.vocabCount, 4, 'Unified due sitting must contain 4 vocab cards');
    assert.equal(queueCheck.grammarCount, 3, 'Unified due sitting must contain 3 grammar flashcards');

    // Review the 4 vocab cards
    for (let i = 0; i < 4; i++) {
      await page.click('button[data-action="reveal"]');
      await page.waitForTimeout(100);
      await page.click('button[data-rate="good"]');
      await page.waitForTimeout(120);
    }

    // Now card 5 of 7 should be the first Grammar Flashcard right inside the SAME Today's Review sitting!
    const embeddedVisible = await page.locator('#grammar-flashcards-root[data-gflash-embedded="true"]').count();
    assert.equal(embeddedVisible, 1, 'Grammar flashcard must render inline in the unified Today’s Review sitting');
    await page.screenshot({ path: path.join(artifactDir, 'unified-review-grammar-card-390.png') });

    // Solve the grammar flashcard (refl_lever_fem) right inside Today's Review
    for (const w of ['Elle', 's’est', 'levée', 'tôt', 'ce', 'matin']) {
      await page.locator(`#grammar-flashcards-root button[data-gflash-select]:text-is("${w}")`).first().click();
      await page.waitForTimeout(60);
    }
    await page.click('button[data-gflash-action="check-sentence"]');
    await page.waitForTimeout(150);
    await page.screenshot({ path: path.join(artifactDir, 'unified-review-grammar-rated-390.png') });

    // Rate 'good' on the grammar flashcard -> advances to next card in unified sitting
    await page.click('button[data-gflash-rate="good"]');
    await page.waitForTimeout(150);

    // Solve remaining 2 grammar flashcards
    for (const words of [
      ['Tu', 't’es', 'douchée', 'hier', 'soir', '?'],
      ['Nous', 'allons', 'en', 'vacances', 'en', 'France']
    ]) {
      for (const w of words) {
        await page.locator(`#grammar-flashcards-root button[data-gflash-select]:text-is("${w}")`).first().click();
        await page.waitForTimeout(40);
      }
      await page.click('button[data-gflash-action="check-sentence"]');
      await page.waitForTimeout(100);
      await page.click('button[data-gflash-rate="good"]');
      await page.waitForTimeout(120);
    }

    // Verify completion screen shows both 4 vocab and 3 grammar!
    const doneSubline = await page.locator('.empty .subline').innerText();
    console.log('Unified completion summary:', doneSubline);
    assert(doneSubline.includes('4 vocab'), 'Completion summary must show 4 vocab reviewed');
    assert(doneSubline.includes('3 grammar'), 'Completion summary must show 3 grammar reviewed');
    await page.screenshot({ path: path.join(artifactDir, 'unified-review-complete-390.png') });

    // 4. Check responsive widths (320, 375, 390, 430, 1280) for zero horizontal overflow
    await page.evaluate(() => navigate('home'));
    await page.waitForTimeout(150);
    for (const [w, h] of [[320, 740], [375, 812], [390, 844], [430, 932], [1280, 800]]) {
      await page.setViewportSize({ width: w, height: h });
      await page.waitForTimeout(120);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 2);
      assert.equal(overflow, false, `No horizontal overflow at ${w}x${h}`);
    }
    await page.screenshot({ path: path.join(artifactDir, 'home-minimal-desktop-1280.png') });

    assert.equal(errors.length, 0, `Unexpected page errors: ${errors.join('; ')}`);
    console.log('ALL UNIFIED REVIEW & MINIMAL HOME CHECKS PASSED!');
  } finally {
    await browser.close();
    server.close();
  }
})();
