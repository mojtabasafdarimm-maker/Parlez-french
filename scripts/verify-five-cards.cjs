// Self-contained local review; requires Playwright and installed Edge (or another channel).
const {chromium}=require('playwright');
const fs=require('node:fs');
const path=require('node:path');
const http=require('node:http');
const assert=require('node:assert/strict');
const root=path.resolve(__dirname,'../public'),out=path.resolve(__dirname,'../artifacts');
fs.mkdirSync(out,{recursive:true});
const types={'.html':'text/html','.js':'application/javascript','.css':'text/css','.svg':'image/svg+xml','.png':'image/png','.webmanifest':'application/manifest+json'};
const server=http.createServer((req,res)=>{
  const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
  const file=path.resolve(root,'.'+(pathname==='/'?'/index.html':pathname));
  if(!file.startsWith(root+path.sep)){res.writeHead(403).end();return;}
  fs.readFile(file,(err,body)=>{if(err){res.writeHead(404).end();return;}res.setHeader('Content-Type',types[path.extname(file)]||'application/octet-stream');res.end(body);});
});
(async()=>{
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  let browser;
  try{
    browser=await chromium.launch({headless:true,channel:process.env.PARLEZ_BROWSER_CHANNEL||'msedge'});
    const context=await browser.newContext({viewport:{width:390,height:844}}),page=await context.newPage(),errors=[];
    page.on('pageerror',e=>errors.push(e.message));
    await page.goto('http://127.0.0.1:'+server.address().port);
    for(const width of [320,375,390,430,1280]){
      await page.setViewportSize({width,height:844});
      for(const id of ['a3','a4','a6','a8','a11']){
        await page.evaluate(id=>startPracticeCard(id),id);
        const hasMemory=!['a8','a11'].includes(id);
        assert.equal(await page.locator('.hint-card').count(),0);
        assert.equal(await page.locator('[data-action="next-hint"]').textContent(),hasMemory?'Memory hook':'Scene clue');
        for(let n=1;n<=(hasMemory?3:2);n++){
          await page.locator('[data-action="next-hint"]').click();
          assert.equal(await page.locator('.hint-card').count(),n);
          assert.equal(await page.locator('.mnemonic-card').count(),hasMemory?1:0);
          assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
        }
        if(width===390)await page.screenshot({path:path.join(out,`draft-${id}-390.png`),fullPage:true});
        await page.locator('[data-action="next-hint"]').click();
        assert.equal(await page.locator('.hint-card').count(),0);
        await page.locator('[data-action="reveal"]').click();
        assert.equal(await page.locator('.answer-memory>b').count(),hasMemory?1:0);
      }
    }
    const bed=await page.evaluate(()=>{
      const seed=starter.find(c=>c.id==='a11');
      return {default:cardHints(seed).mnemonic,personal:cardHints({...seed,mnemonic:'My own association'}).mnemonic};
    });
    assert.deepEqual(bed,{default:'',personal:'My own association'});
    await page.setViewportSize({width:1100,height:900});
    await page.evaluate(()=>{
      document.body.innerHTML='<main style="padding:24px"><h1 style="font-size:28px">Five cards · draft for review</h1><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:18px">'+['a3','a4','a6','a8','a11'].map(id=>{
        const c=starter.find(c=>c.id===id),h=cardHints(c);
        return '<article style="background:white;border:1px solid #e3deeb;border-radius:18px;padding:14px">'+visual(c)+'<h2 style="font-size:20px;margin:12px 0">'+esc(c.frenchAnswer)+'</h2><p style="font-size:15px;line-height:1.7">'+(h.mnemonic?mnemonicText(h.mnemonic):'No mnemonic. Practise from the picture and audio.')+'</p></article>';
      }).join('')+'</div></main>';
    });
    await page.screenshot({path:path.join(out,'five-card-review.png'),fullPage:true});
    assert.deepEqual(errors,[]);
    console.log('PASS: five cards at five widths; three supported hooks; two omitted hooks; progression, hiding, reveal and personal override. Review image saved.');
  }finally{if(browser)await browser.close();await new Promise(resolve=>server.close(resolve));}
})().catch(e=>{console.error(e);process.exitCode=1;});
