const http = require('http');
const fs = require('fs');
const path = require('path');
const assert = require('node:assert/strict');
const { chromium } = require('playwright');

const publicDir = path.resolve(__dirname, '../public');
const artifactDir = process.env.ARTIFACT_DIR || 'C:\\Users\\msafdari\\.gemini\\antigravity-cli\\brain\\47434ab4-530a-45cf-ae5c-9806d891b2bc';
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

    await page.goto(`http://127.0.0.1:${port}/#grammar`, { waitUntil: 'networkidle' });

    // 1. Click "📚 Grammar Tables & Rules" tab
    const studyTabBtn = page.locator('button[data-grammar-subview="study"]');
    assert.equal(await studyTabBtn.count(), 1, 'Grammar study tab must be present in grammar subview chips');
    await studyTabBtn.click();
    await page.waitForTimeout(300);

    // 2. Verify we navigated to grammar study tab
    const titleText = await page.locator('.gt-card-title, h1').allInnerTexts();
    console.log('Page titles found:', titleText.slice(0, 4));
    assert.ok(titleText.some(t => t.includes('Grammar Study Tables') || t.includes('How Every Subject Transforms')), 'Grammar Study title must be displayed');

    // 3. Take full page screenshot of Grammar Study on iPhone 14
    await page.screenshot({ path: path.join(artifactDir, 'grammar-study-overview-390.png'), fullPage: false });

    // 4. Test Section Switching (Pills)
    const pills = [
      { key: 'groups', check: '1er GROUPE (-ER)', id: '#gt-group1' },
      { key: 'passe', check: 'LES TEMPS DU PASSÉ', id: '#gt-passe' },
      { key: 'reflexive', check: 'LES VERBES EN SE / S’', id: '#gt-reflexive' },
      { key: 'faire', check: 'CONSTRUCTIONS AVEC "FAIRE"', id: '#gt-faire' },
      { key: 'matrix', check: 'TRANSFORMATION MATRIX', id: '#gt-matrix' }
    ];

    for (const pill of pills) {
      const btn = page.locator(`button[data-gt-section="${pill.key}"]`);
      await btn.click();
      await page.waitForTimeout(200);

      const isVisible = await page.locator(pill.id).isVisible();
      assert.ok(isVisible, `Section ${pill.key} (${pill.id}) must be visible when tab is clicked`);
      console.log(`✓ Section ${pill.key} verified visible`);
    }

    // 5. Test Past Tenses Content (Passé Récent & Passé Composé)
    await page.locator('button[data-gt-section="passe"]').click();
    await page.waitForTimeout(200);
    const passeHtml = await page.locator('#gt-passe').innerHTML();
    assert.ok(passeHtml.includes('Passé Récent'), 'Must contain Passé Récent section');
    assert.ok(passeHtml.includes('VENIR'), 'Must contain Venir formula');
    assert.ok(passeHtml.includes('Passé Composé'), 'Must contain Passé Composé section');
    assert.ok(passeHtml.includes('DR &amp; MRS VANDERTRAMP') || passeHtml.includes('DR & MRS VANDERTRAMP'), 'Must contain DR & MRS VANDERTRAMP table');
    assert.ok(passeHtml.includes('Elle a fini'), 'Must demonstrate Avoir with no agreement');
    assert.ok(passeHtml.includes('accord-badge') || passeHtml.includes('+e'), 'Must demonstrate subject agreement');
    await page.screenshot({ path: path.join(artifactDir, 'grammar-study-passe-tenses-390.png') });
    console.log('✓ Passé tenses content verified');

    // 6. Test Reflexive Verbs Content
    await page.locator('button[data-gt-section="reflexive"]').click();
    await page.waitForTimeout(200);
    const reflexHtml = await page.locator('#gt-reflexive').innerHTML();
    assert.ok(reflexHtml.includes('ALWAYS use ÊTRE') || reflexHtml.includes('ÊTRE'), 'Must emphasize ÊTRE rule for reflexives');
    assert.ok(reflexHtml.includes('s’est habillée') || reflexHtml.includes('s’est levée'), 'Must demonstrate feminine agreement (+e)');
    assert.ok(reflexHtml.includes('se sont levées'), 'Must demonstrate feminine plural agreement (+es)');
    assert.ok(reflexHtml.includes('Negation'), 'Must explain negation of reflexive verbs');
    await page.screenshot({ path: path.join(artifactDir, 'grammar-study-reflexive-390.png') });
    console.log('✓ Reflexive verbs content verified');

    // 7. Test "Faire" Sentences Content
    await page.locator('button[data-gt-section="faire"]').click();
    await page.waitForTimeout(200);
    const faireHtml = await page.locator('#gt-faire').innerHTML();
    assert.ok(faireHtml.includes('Il fait beau') && faireHtml.includes('Il fait chaud'), 'Must contain weather expressions with Il fait');
    assert.ok(faireHtml.includes('faire les courses') && faireHtml.includes('faire la vaisselle'), 'Must contain daily chores with faire');
    assert.ok(faireHtml.includes('faire + infinitif') || faireHtml.includes('Causative'), 'Must explain causative faire');
    await page.screenshot({ path: path.join(artifactDir, 'grammar-study-faire-sentences-390.png') });
    console.log('✓ Faire sentences content verified');

    // 8. Test Master Subject Transformation Matrix Spotlight
    await page.locator('button[data-gt-section="matrix"]').click();
    await page.waitForTimeout(200);

    // Switch subject to "Elle"
    await page.locator('button[data-gt-subject="elle"]').click();
    await page.waitForTimeout(200);
    let matrixText = await page.locator('.gt-spotlight-card').innerText();
    assert.ok(matrixText.includes('Subject: Elle'), 'Spotlight must display Subject: Elle');
    assert.ok(matrixText.includes('ACCORD OBLIGATOIRE : ajoute +e'), 'Spotlight for Elle must show +e agreement rule');
    assert.ok(matrixText.includes('son (m) · sa (f) · ses (pl)'), 'Spotlight for Elle must show possessive adjectives');
    assert.ok(matrixText.includes('Elle s’est réveillée'), 'Spotlight for Elle must show full sentence with +e agreement');

    // Switch subject to "Ils"
    await page.locator('button[data-gt-subject="ils"]').click();
    await page.waitForTimeout(200);
    matrixText = await page.locator('.gt-spotlight-card').innerText();
    assert.ok(matrixText.includes('Subject: Ils'), 'Spotlight must display Subject: Ils');
    assert.ok(matrixText.includes('ACCORD OBLIGATOIRE : ajoute +s'), 'Spotlight for Ils must show +s agreement rule');
    assert.ok(matrixText.includes('leur (sing) · leurs (pl)'), 'Spotlight for Ils must show possessives leur/leurs');

    // Switch subject to "Elles"
    await page.locator('button[data-gt-subject="elles"]').click();
    await page.waitForTimeout(200);
    matrixText = await page.locator('.gt-spotlight-card').innerText();
    assert.ok(matrixText.includes('Subject: Elles'), 'Spotlight must display Subject: Elles');
    assert.ok(matrixText.includes('DOUBLE ACCORD OBLIGATOIRE : ajoute +es'), 'Spotlight for Elles must show +es agreement rule');
    await page.screenshot({ path: path.join(artifactDir, 'grammar-study-subject-matrix-390.png') });
    console.log('✓ Subject Transformation Matrix spotlight verified');

    // 9. Test Audio Listen Buttons
    const audioBtns = page.locator('.gt-listen-btn');
    const audioCount = await audioBtns.count();
    console.log(`Found ${audioCount} audio listen buttons in grammar tables`);
    assert.ok(audioCount >= 10, 'Must have at least 10 audio listen buttons across tables');
    await audioBtns.first().click();
    await page.waitForTimeout(100);

    // 10. Responsive & Horizontal Overflow Check across Viewports
    const viewports = [
      { name: 'SE-320', width: 320, height: 740 },
      { name: 'iPhone-375', width: 375, height: 812 },
      { name: 'iPhone-390', width: 390, height: 844 },
      { name: 'Max-430', width: 430, height: 932 },
      { name: 'Desktop-1280', width: 1280, height: 800 }
    ];

    // Reset to "all" section
    await page.locator('button[data-gt-section="all"]').click();
    await page.waitForTimeout(200);

    for (const vp of viewports) {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.waitForTimeout(150);

      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      const overflow = scrollWidth - clientWidth;
      assert.ok(overflow <= 1, `Horizontal overflow detected at ${vp.width}px: scrollWidth=${scrollWidth}, clientWidth=${clientWidth}, overflow=${overflow}`);
      console.log(`✓ Zero horizontal overflow verified at ${vp.width}×${vp.height}`);
    }

    await page.screenshot({ path: path.join(artifactDir, 'grammar-study-desktop-1280.png') });

    // Assert zero page errors
    assert.deepEqual(errors, [], `Expected 0 page errors, found: ${errors.join('; ')}`);
    console.log('ALL GRAMMAR STUDY TABLES CHECKS PASSED!');

  } finally {
    await browser.close();
    server.close();
  }
})();
