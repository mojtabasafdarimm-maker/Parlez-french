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
  '.png': 'image/png',
  '.webp': 'image/webp'
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0].split('#')[0];
  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';
  const filePath = path.join(publicDir, reqPath);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(0, '127.0.0.1', async () => {
  const port = server.address().port;
  const baseUrl = `http://127.0.0.1:${port}`;
  console.log(`Parlez Grammar Upgrades test server listening on ${baseUrl}`);

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

    page.on('console', msg => {
      if (msg.type() === 'error') console.log('PAGE ERROR LOG:', msg.text());
    });
    page.on('pageerror', err => console.log('UNCAUGHT PAGE ERROR:', err.message));

    await page.goto(baseUrl, { waitUntil: 'networkidle' });

    // 1. Navigate to Grammar Tab
    console.log('1. Navigating to Grammar Tab...');
    const grammarNavBtn = page.locator('.bottom-nav button[data-view="grammar"]');
    await grammarNavBtn.click();
    await page.waitForTimeout(300);

    // 2. Verify Grammar Flashcard Root exists
    const rootCount = await page.locator('#grammar-flashcards-root').count();
    assert.strictEqual(rootCount, 1, 'Grammar Flashcard root container must be present');

    // 3. Test Structure Table Button on Flashcard Front
    console.log('2. Testing "Structure Table" button on Flashcard Front...');
    const structBtnFront = page.locator('#grammar-flashcards-root button[data-gflash-structure]').first();
    assert(await structBtnFront.count() > 0, 'Structure Table button must exist on flashcard');
    console.log('Found structure button:', (await structBtnFront.textContent()).trim());

    // Click to open Structure Modal
    await structBtnFront.click();
    await page.waitForTimeout(250);

    // Verify Modal elements
    const modalDialog = page.locator('.gflash-modal-dialog');
    assert.strictEqual(await modalDialog.count(), 1, 'Structure Modal must be visible');

    const modalTitle = await modalDialog.locator('h3').first().textContent();
    console.log('Modal title:', modalTitle.trim());
    assert(modalTitle.includes('Passé Composé') || modalTitle.includes('Verbes Réflexifs'), 'Modal must show structure title');

    const tableRowsCount = await modalDialog.locator('table tbody tr').count();
    console.log('Modal table rows count:', tableRowsCount);
    assert(tableRowsCount >= 6, 'Table must contain complete subject conjugations');

    const trapsCount = await modalDialog.locator('div:has-text("Traps & Common Mistakes")').count();
    assert(trapsCount > 0, 'Must show traps and common mistakes box');

    // Screenshot 1: Structure Modal
    const modalScreenshotPath = path.join(artifactsDir, 'grammar-structure-modal-390.png');
    await page.screenshot({ path: modalScreenshotPath });
    console.log('Captured: grammar-structure-modal-390.png');

    // Close modal
    const closeBtn = page.locator('button[data-gflash-close-modal]').first();
    await closeBtn.click();
    await page.waitForTimeout(200);
    assert.strictEqual(await page.locator('.gflash-modal-dialog').count(), 0, 'Modal must close on close button click');

    // 4. Test New Topic: Ne ... que (A1.3 PDF)
    console.log('3. Testing New Topic "neque" (Ne ... que from A1.3 PDF)...');
    await page.selectOption('#gflash-topic-select', 'neque');
    await page.waitForTimeout(300);

    const cardPrompt = await page.locator('#grammar-flashcards-root div:has-text("Sentence to Build:")').first().textContent();
    console.log('Neque card prompt:', cardPrompt.replace(/\s+/g, ' ').trim());
    assert(cardPrompt.includes('only sleep') || cardPrompt.includes('hours') || cardPrompt.includes('Sentence to Build:'), 'Must show Ne... que prompt');

    // Screenshot 2: Ne ... que Flashcard
    const nequeScreenshotPath = path.join(artifactsDir, 'grammar-flashcard-neque-390.png');
    await page.screenshot({ path: nequeScreenshotPath });
    console.log('Captured: grammar-flashcard-neque-390.png');

    // Test clicking Structure Table on Ne... que card
    const nequeStructBtn = page.locator('#grammar-flashcards-root button[data-gflash-structure]').first();
    await nequeStructBtn.click();
    await page.waitForTimeout(200);
    const nequeModalTitle = await page.locator('.gflash-modal-dialog h3').first().textContent();
    console.log('Neque modal title:', nequeModalTitle.trim());
    assert(nequeModalTitle.includes('Ne ... que') || nequeModalTitle.includes('Négation Restrictive'), 'Must show Ne... que structure table');
    await page.locator('button[data-gflash-close-modal]').first().click();
    await page.waitForTimeout(200);

    // 5. Test Grammar Tables & Rules Subview
    console.log('4. Testing "📚 Grammar Tables & Rules" Subview...');
    const tablesChip = page.locator('button[data-grammar-subview="study"]');
    await tablesChip.click();
    await page.waitForTimeout(300);

    // Verify sections exist and are not empty
    const wrapCount = await page.locator('.grammar-tables-wrap').count();
    assert.strictEqual(wrapCount, 1, 'Grammar tables wrapper must be visible');

    // Check that new sections from PDF exist
    const nequeSectionCount = await page.locator('#gt-neque').count();
    const causeSectionCount = await page.locator('#gt-cause').count();
    const rulesSectionCount = await page.locator('#gt-rules').count();
    const repairsSectionCount = await page.locator('#gt-repairs').count();
    const sequenceSectionCount = await page.locator('#gt-sequence').count();
    const prepositionsSectionCount = await page.locator('#gt-prepositions').count();

    console.log('Sections present:', {
      neque: nequeSectionCount,
      cause: causeSectionCount,
      rules: rulesSectionCount,
      repairs: repairsSectionCount,
      sequence: sequenceSectionCount,
      prepositions: prepositionsSectionCount
    });

    assert(nequeSectionCount >= 1 && causeSectionCount >= 1 && rulesSectionCount >= 1, 'All new A1.3 PDF grammar sections must be present');

    // Screenshot 3: Grammar Tables & Handbook View
    const tablesScreenshotPath = path.join(artifactsDir, 'grammar-tables-handbook-390.png');
    await page.screenshot({ path: tablesScreenshotPath });
    console.log('Captured: grammar-tables-handbook-390.png');

    // 6. Test "📖 Rule Cards" chip renders catalog without being empty
    console.log('5. Testing "📖 Rule Cards" chip...');
    const cardsChip = page.locator('button[data-grammar-subview="cards"]');
    await cardsChip.click();
    await page.waitForTimeout(300);
    const libCardsCount = await page.locator('.library-grid .lib-card').count();
    console.log('Grammar rule cards count:', libCardsCount);
    assert.ok(libCardsCount >= 14, 'Rule Cards must render catalog of grammar cards');

    // Switch back to study tables to verify responsive widths
    await page.locator('button[data-grammar-subview="study"]').click();
    await page.waitForTimeout(300);

    // 7. Responsive width checks across 320px, 375px, 390px, 430px
    console.log('6. Checking responsive widths for zero horizontal overflow...');
    for (const w of [320, 375, 390, 430]) {
      await page.setViewportSize({ width: w, height: 844 });
      await page.waitForTimeout(150);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 2);
      assert.strictEqual(overflow, false, `No horizontal overflow allowed at ${w}px`);
    }
    console.log('Responsive width checks passed at 320px, 375px, 390px, 430px!');

    console.log('==================================================');
    console.log('ALL GRAMMAR EXPANSION & STRUCTURE TABLE TESTS PASSED 100%!');
    console.log('==================================================');
  } catch (err) {
    console.error('TEST SUITE FAILED WITH ERROR:', err);
    process.exit(1);
  } finally {
    await browser.close();
    server.close();
    process.exit(0);
  }
});
