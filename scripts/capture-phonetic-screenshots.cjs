const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
const http = require('http');

const publicDir = path.resolve(__dirname, '../public');
const brainDir = 'C:/Users/msafdari/.gemini/antigravity/brain/9c3c71ea-75c1-4320-bec8-91a99466a968';

const server = http.createServer((req, res) => {
  let p = req.url.split('?')[0];
  if (p === '/') p = '/index.html';
  fs.readFile(path.join(publicDir, p), (err, data) => {
    res.writeHead(200); res.end(data);
  });
}).listen(0, '127.0.0.1', async () => {
  const port = server.address().port;
  const browser = await chromium.launch({ headless: true, channel: 'msedge' });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
  await page.goto('http://127.0.0.1:' + port);
  await page.waitForTimeout(300);

  // 1. Open review page and reveal (starter card)
  await page.locator('.bottom-nav [data-view="review"]').click();
  await page.waitForTimeout(200);
  await page.click('button[data-action="reveal"]');
  await page.waitForTimeout(200);
  await page.screenshot({ path: path.join(brainDir, 'phonetic-starter-card-back-390.png') });

  // 2. Open 3-dot details modal
  await page.click('button[data-action="card-details"]');
  await page.waitForTimeout(200);
  await page.screenshot({ path: path.join(brainDir, 'phonetic-card-details-modal-390.png') });
  await page.click('button[data-action="close-modal"]');
  await page.waitForTimeout(200);

  // 3. Open Vocab deck and reveal
  await page.locator('.bottom-nav [data-view="vocab"]').click();
  await page.waitForTimeout(200);
  await page.locator('.vocab-deck-card button.btn-primary').first().click();
  await page.waitForTimeout(200);
  await page.click('button[data-action="vocab-reveal"]');
  await page.waitForTimeout(200);
  await page.screenshot({ path: path.join(brainDir, 'phonetic-vocab-card-back-390.png') });

  await browser.close();
  server.close();
  console.log('Phonetic screenshots captured successfully!');
});
