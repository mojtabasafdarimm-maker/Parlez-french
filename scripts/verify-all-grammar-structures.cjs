const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const assert = require('assert');

const publicDir = path.join(__dirname, '..', 'public');
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
  console.log(`Test server running on ${baseUrl}`);

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
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });

    await page.goto(baseUrl, { waitUntil: 'networkidle' });
    assert.strictEqual(errors.length, 0, 'Page must load with 0 console/runtime errors');
    console.log('✓ Home loaded with 0 errors');

    // 1. Verify 25 structures exist on window.ParlezGrammarStructures
    const structuresCount = await page.evaluate(() => {
      return Object.keys(window.ParlezGrammarStructures || {}).length;
    });
    console.log(`✓ Loaded structures count: ${structuresCount}`);
    assert.strictEqual(structuresCount, 25, 'Expected 25 grammar structures loaded in ParlezGrammarStructures');

    // 2. Test opening structure modal for an older grammar card: negation
    console.log('Testing openGrammarStructureModal("negation")...');
    await page.evaluate(() => {
      window.openGrammarStructureModal('negation');
    });
    await page.waitForTimeout(300);

    let modalVisible = await page.locator('.gflash-modal-dialog').isVisible();
    assert.ok(modalVisible, 'Structure modal should be visible');

    let modalTitle = await page.locator('.gflash-modal-dialog h3').textContent();
    console.log('Modal title:', modalTitle);
    assert.ok(modalTitle.includes('Négation Complète'), 'Modal should display negation title');

    let formulaText = await page.locator('.gflash-modal-dialog').textContent();
    assert.ok(formulaText.includes('ne ... pas'), 'Modal must contain formula and examples');
    assert.ok(formulaText.includes('Traps & Common Mistakes'), 'Modal must contain Traps box');

    // Close modal
    await page.locator('.gflash-modal-dialog button:has-text("✕")').click();
    await page.waitForTimeout(200);
    modalVisible = await page.locator('.gflash-modal-dialog').isVisible();
    assert.ok(!modalVisible, 'Modal should close cleanly on ✕ click');
    console.log('✓ Structure modal for negation verified & closed');

    // 3. Test older card: 1er groupe (-er)
    console.log('Testing openGrammarStructureModal("verbes_er")...');
    await page.evaluate(() => {
      window.openGrammarStructureModal('verbes_er');
    });
    await page.waitForTimeout(300);

    modalTitle = await page.locator('.gflash-modal-dialog h3').textContent();
    console.log('Modal title:', modalTitle);
    assert.ok(modalTitle.includes('1er Groupe (-ER)'), 'Modal should display 1er groupe title');
    
    // Check rows count in table
    const rowCount = await page.locator('.gflash-modal-dialog table tbody tr').count();
    console.log('Verbes -er rows count:', rowCount);
    assert.ok(rowCount >= 6, 'Table should contain at least 6 subject rows');

    // Close modal using bottom button
    await page.locator('.gflash-modal-dialog button:has-text("Got It")').click();
    await page.waitForTimeout(200);
    modalVisible = await page.locator('.gflash-modal-dialog').isVisible();
    assert.ok(!modalVisible, 'Modal should close on bottom Got It click');
    console.log('✓ Verbes -er modal verified & closed');

    // 4. Navigate to Rule Cards (Library View for Grammar)
    console.log('Navigating to Grammar -> Rule Cards...');
    await page.goto(`${baseUrl}/#grammar`, { waitUntil: 'networkidle' });
    const cardsTabBtn = page.locator('button[data-grammar-subview="cards"]');
    if (await cardsTabBtn.isVisible()) {
      await cardsTabBtn.click();
      await page.waitForTimeout(300);

      // Verify that "Table" buttons exist on grammar cards in the grid
      const tableBtnsCount = await page.locator('button:has-text("📊 Table")').count();
      console.log(`✓ Rule Cards library has ${tableBtnsCount} "📊 Table" buttons`);
      assert.ok(tableBtnsCount >= 20, 'Expected at least 20 grammar cards with Table buttons');

      // Click the first table button
      await page.locator('button:has-text("📊 Table")').first().click();
      await page.waitForTimeout(300);
      modalVisible = await page.locator('.gflash-modal-dialog').isVisible();
      assert.ok(modalVisible, 'Clicking 📊 Table in Rule Cards must open modal');

      await page.locator('.gflash-modal-dialog button:has-text("✕")').click();
      await page.waitForTimeout(200);
      console.log('✓ Rule Cards grid Table button interaction verified');
    }

    console.log('\n=============================================');
    console.log('✅ ALL VERIFICATIONS PASSED 100% SUCCESFULLY!');
    console.log('=============================================\n');

  } catch (err) {
    console.error('❌ Verification failed:', err);
    process.exitCode = 1;
  } finally {
    await browser.close();
    server.close();
  }
});
