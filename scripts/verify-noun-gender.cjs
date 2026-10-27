const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const assert = require('assert');

const publicDir = path.join(__dirname, '..', 'public');
const artifactsDir = path.resolve(__dirname, '..', '..', '..', '.gemini', 'antigravity', 'brain', '9c3c71ea-75c1-4320-bec8-91a99466a968');
if (!fs.existsSync(artifactsDir)) fs.mkdirSync(artifactsDir, { recursive: true });

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png'
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0].split('#')[0];
  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';
  const filePath = path.join(publicDir, reqPath);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath);
    res.writeHead(200, {
      'Content-Type': mimeTypes[ext] || 'application/octet-stream',
      'Cache-Control': 'no-cache'
    });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(0, '127.0.0.1', async () => {
  const port = server.address().port;
  const baseUrl = `http://127.0.0.1:${port}`;
  console.log(`Noun Gender test server listening on ${baseUrl}`);

  const browser = await chromium.launch({
    headless: true,
    channel: process.env.PARLEZ_BROWSER_CHANNEL || 'msedge'
  });

  try {
    const context = await browser.newContext({
      viewport: { width: 390, height: 844 },
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148'
    });
    const page = await context.newPage();

    await page.goto(baseUrl, { waitUntil: 'networkidle' });

    // 1. Direct Unit Tests on window.ParlezGender
    console.log('Testing window.ParlezGender engine...');
    const unitRes = await page.evaluate(() => {
      const PG = window.ParlezGender;
      if (!PG) return { error: 'ParlezGender missing' };

      const bonnet = state.cards.find(c => c.id === 'b1');
      const echarpe = state.cards.find(c => c.id === 'b2');
      const baskets = state.cards.find(c => c.id === 'b4');
      const manteau = state.cards.find(c => c.id === 'c2_manteau');

      return {
        bonnetGender: PG.getCardGender(bonnet)?.gender,
        bonnetHTML: PG.formatAnswerHTML(bonnet),
        echarpeGender: PG.getCardGender(echarpe)?.gender,
        echarpeHTML: PG.formatAnswerHTML(echarpe),
        basketsInfo: PG.getCardGender(baskets),
        manteauTip: PG.getCardGender(manteau)?.tip
      };
    });

    console.log('Engine unit results:', unitRes);
    assert.strictEqual(unitRes.bonnetGender, 'm', 'un bonnet must be Masculine (m)');
    assert(unitRes.bonnetHTML.includes('gender-art-m'), 'un bonnet must highlight article with gender-art-m');
    assert.strictEqual(unitRes.echarpeGender, 'f', 'une écharpe must be Feminine (f)');
    assert(unitRes.echarpeHTML.includes('gender-art-f'), 'une écharpe must highlight article with gender-art-f');
    assert.strictEqual(unitRes.basketsInfo.gender, 'f', 'des baskets must reveal underlying Feminine gender');
    assert.strictEqual(unitRes.basketsInfo.isPlural, true, 'des baskets must be marked plural');
    assert(unitRes.manteauTip.includes('-eau'), 'manteau must include -eau ending pattern rule');

    // 2. Test Masculine & Feminine Flashcards in Practice Mode
    console.log('Testing Masculine noun flashcard (un bonnet)...');
    await page.evaluate(() => {
      startPracticeCard('b1');
    });
    await page.waitForTimeout(200);

    // Check front prompt badge exists and doesn't leak answer
    const frontPromptCount = await page.locator('.gender-front-prompt').count();
    assert.strictEqual(frontPromptCount, 1, 'Front of noun card must show active-recall gender prompt pill');
    const frontPromptText = await page.locator('.gender-front-prompt').textContent();
    console.log('Front gender prompt:', frontPromptText);
    assert(frontPromptText.includes('un/le') && frontPromptText.includes('une/la'), 'Front prompt must show both un/le and une/la without leaking answer');

    // Reveal masculine card
    await page.locator('[data-action="reveal"]').click();
    await page.waitForTimeout(200);

    const isMascCard = await page.locator('.review-card.revealed.gender-card-m').count();
    assert.strictEqual(isMascCard, 1, 'Revealed masculine card must have .gender-card-m class');
    const mascPillText = await page.locator('.quiet-card-top .gender-pill-m').textContent();
    console.log('Masculine card pill:', mascPillText);
    assert(mascPillText.includes('Masculin'), 'Masculine card must show Masculin pill');

    await page.screenshot({ path: path.join(artifactsDir, 'gender-card-masculine-390.png') });
    console.log('Captured: gender-card-masculine-390.png');

    // Test Feminine noun flashcard (une écharpe)
    console.log('Testing Feminine noun flashcard (une écharpe)...');
    await page.evaluate(() => {
      startPracticeCard('b2');
    });
    await page.waitForTimeout(200);
    await page.locator('[data-action="reveal"]').click();
    await page.waitForTimeout(200);

    const isFemCard = await page.locator('.review-card.revealed.gender-card-f').count();
    assert.strictEqual(isFemCard, 1, 'Revealed feminine card must have .gender-card-f class');
    const femPillText = await page.locator('.quiet-card-top .gender-pill-f').textContent();
    console.log('Feminine card pill:', femPillText);
    assert(femPillText.includes('Féminin'), 'Feminine card must show Féminin pill');

    await page.screenshot({ path: path.join(artifactsDir, 'gender-card-feminine-390.png') });
    console.log('Captured: gender-card-feminine-390.png');

    // 3. Test Vocab Tab Gender Filter Bar
    console.log('Navigating to Vocab tab to test Gender Filter & Reflex Quiz...');
    await page.locator('.bottom-nav button[data-view="vocab"]').click();
    await page.waitForTimeout(200);

    const filterBtns = await page.locator('.gender-filter-bar .gender-filter-btn').count();
    assert.strictEqual(filterBtns, 4, 'Must have 4 gender filter buttons in Vocab tab');

    // Filter by Feminine (une / la)
    await page.locator('[data-gender-filter="f"]').click();
    await page.waitForTimeout(200);

    const femCardsFound = await page.locator('.library-grid .lib-card').count();
    console.log('Feminine cards filtered in Vocab:', femCardsFound);
    assert(femCardsFound >= 15, 'Should find at least 15 feminine noun cards');

    await page.screenshot({ path: path.join(artifactsDir, 'gender-filter-catalog-390.png') });
    console.log('Captured: gender-filter-catalog-390.png');

    // 4. Test Interactive Gender Reflex Quiz (un/le vs une/la)
    console.log('Launching Gender Reflex Quiz...');
    await page.locator('[data-gender-filter="reflex"]').click();
    await page.waitForTimeout(200);

    const reflexWord = await page.locator('.gender-reflex-word').textContent();
    console.log('Gender Reflex Round 1 prompt:', reflexWord.trim());
    assert(reflexWord.includes('?'), 'Gender Reflex must show blank slot before noun');

    // Click Masculine choice button
    await page.locator('.gender-choice-btn.choice-m').click();
    await page.waitForTimeout(200);

    const feedbackBanner = await page.locator('.gender-feedback-banner').count();
    assert.strictEqual(feedbackBanner, 1, 'Gender feedback banner with pattern rule must appear after choosing');
    const feedbackText = await page.locator('.gender-feedback-banner').textContent();
    console.log('Gender Reflex feedback:', feedbackText.trim().replace(/\s+/g, ' '));

    await page.screenshot({ path: path.join(artifactsDir, 'gender-reflex-quiz-390.png') });
    console.log('Captured: gender-reflex-quiz-390.png');

    // 5. Verify zero horizontal overflow across mobile widths (320, 375, 390, 430 px)
    for (const w of [320, 375, 390, 430]) {
      await page.setViewportSize({ width: w, height: 844 });
      await page.waitForTimeout(100);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
      assert.strictEqual(overflow, false, `Must have zero horizontal overflow at ${w}px width`);
    }
    console.log('Verified zero horizontal overflow at 320px, 375px, 390px, and 430px!');

    console.log('==================================================');
    console.log('ALL VISUAL NOUN GENDER CUES & REFLEX TESTS PASSED 100%!');
    console.log('==================================================');
  } finally {
    await browser.close();
    server.close();
  }
});
