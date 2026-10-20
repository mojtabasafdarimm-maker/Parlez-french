const { chromium } = require('playwright');
const path = require('node:path');
const fs = require('node:fs');
const http = require('node:http');

const publicDir = path.resolve(__dirname, '../public');
const brainDir = 'C:/Users/msafdari/.gemini/antigravity/brain/9c3c71ea-75c1-4320-bec8-91a99466a968';
fs.mkdirSync(brainDir, { recursive: true });

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.webmanifest': 'application/manifest+json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png'
};

function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let reqPath = req.url.split('?')[0];
      if (reqPath === '/') reqPath = '/index.html';
      const filePath = path.join(publicDir, reqPath);
      fs.readFile(filePath, (err, data) => {
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
      resolve({ server, port: server.address().port });
    });
  });
}

(async () => {
  const { server, port } = await startServer();
  const url = `http://127.0.0.1:${port}`;

  const browser = await chromium.launch({
    headless: true,
    channel: process.env.PARLEZ_BROWSER_CHANNEL || 'msedge'
  });
  const page = await browser.newPage({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2
  });

  await page.goto(url);
  await page.waitForTimeout(300);

  // 1. Vocab tab deck catalog with SRS pills
  await page.locator('.bottom-nav [data-view="vocab"]').click();
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(brainDir, 'srs-deck-catalog-390.png') });

  // 2. Start deck session (front)
  await page.locator('button[data-start-deck="A1.2 · Séances 7–8"]').click();
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(brainDir, 'srs-vocab-card-front-390.png') });

  // 3. Reveal card back with dynamic intervals
  await page.click('button[data-action="vocab-reveal"]');
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(brainDir, 'srs-vocab-card-back-390.png') });

  // 4. Open 3-dot details modal
  await page.click('button[data-action="card-details"]');
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(brainDir, 'srs-details-modal-390.png') });

  await browser.close();
  server.close();
  console.log('Screenshots captured successfully in brain artifact dir!');
})();
