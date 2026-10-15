// Run with NODE_PATH pointing to a Playwright install and a server on localhost:8000.
const {chromium} = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const out = path.resolve(__dirname, '../artifacts');
fs.mkdirSync(out, {recursive:true});
(async () => {
  const browser = await chromium.launch({headless:true, ...(process.env.PARLEZ_BROWSER_CHANNEL ? {channel:process.env.PARLEZ_BROWSER_CHANNEL} : {})});
  try {
    const context = await browser.newContext({viewport:{width:390,height:844}});
    const page = await context.newPage();
    const errors=[];
    page.on('pageerror',error=>errors.push(error.message));
    await page.goto('http://localhost:8000');
    await page.evaluate(()=>startPracticeCard('a6'));
    await page.screenshot({path:path.join(out,'hair-phone.png'),fullPage:true});
    await page.evaluate(()=>{
      document.body.innerHTML='<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;padding:20px">'+['wake','rise','bedtime','sleep','brush','hair','eat-before','eat-now','eat-after','shirt','red-dress','gloves','morning','sport','snow'].map(s=>'<div>'+sceneSVG(s)+'<p>'+s+'</p></div>').join('')+'</div>';
    });
    await page.setViewportSize({width:1400,height:1050});
    await page.screenshot({path:path.join(out,'scene-contact-sheet.png'),fullPage:true});
    await page.reload();
    const coverage=await page.evaluate(()=>starter.map(c=>({id:c.id,hints:cardHints(c),french:c.frenchAnswer,svg:sceneSVG(c.scene)})));
    assert.equal(coverage.length,50);
    for(const c of coverage){
      for(const field of ['scene','starter','memory'])assert.ok(c.hints[field],`${c.id}: missing ${field}`);
      assert.equal(typeof c.hints.mnemonic,'string');
      assert.ok(!c.hints.starter.includes(c.french.replace(/[.!?]+$/,'')),`${c.id}: full answer in starter`);
      assert.ok(!/<text\b/.test(c.svg),`${c.id}: language on artwork`);
    }
    assert.match(coverage.find(c=>c.id==='a3').hints.mnemonic,/برس/);
    assert.match(coverage.find(c=>c.id==='a6').hints.mnemonic,/کوافور/);
    assert.equal(coverage.filter(c=>c.hints.mnemonic).length,19);
    assert.equal(coverage.find(c=>c.id==='a8').hints.mnemonic,'');
    assert.equal(coverage.find(c=>c.id==='a11').hints.mnemonic,'');
    assert.match(coverage.find(c=>c.id==='a14').hints.mnemonic,/commence/);
    const custom=await page.evaluate(()=>{
      const seed=starter.find(c=>c.id==='a6');
      return {personal:cardHints({...seed,mnemonic:'My personal cue'}), changed:cardHints({...seed,scene:'sun'}), answer:cardHints({...seed,frenchAnswer:'Le soleil.'})};
    });
    assert.equal(custom.personal.mnemonic,'My personal cue');
    assert.ok(!custom.changed.mnemonic.includes('کوافور'));
    assert.ok(!custom.answer.starter.includes('coi'));
    const widths=[320,375,390,430,768,1280];
    for(const width of widths){
      await page.setViewportSize({width,height:844});
      for(const id of ['a1','a2','a3','a6','b5','b9','g1','g2','g3','w2','t3','s1','s2']){
        await page.evaluate(id=>startPracticeCard(id),id);
        assert.equal(await page.locator('.hint-card').count(),0);
        assert.equal(await page.locator('.answer').count(),0);
        assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,`${width}/${id} front overflow`);
        if(width===390)await page.screenshot({path:path.join(out,`${id}-390.png`),fullPage:true});
        assert.equal(await page.locator('[data-action="toggle-hint"]').textContent(),'Hint');
        await page.locator('[data-action="toggle-hint"]').click();
        assert.equal(await page.locator('.hint-card').count(),1);
        assert.equal(await page.locator('.hint-card').textContent(),`Picture clue${coverage.find(c=>c.id===id).hints.scene}`);
        assert.ok(!(await page.locator('.hint-card').textContent()).includes(coverage.find(c=>c.id===id).french));
        assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,`${width}/${id} hint overflow`);
        if(width<=430)assert.equal(await page.evaluate(()=>{const button=document.querySelector('[data-action="reveal"]')?.getBoundingClientRect(),nav=document.querySelector('.bottom-nav')?.getBoundingClientRect();return Boolean(button&&nav&&button.top<nav.top);}),true,`${width}/${id} reveal button obscured`);
        if(width===320 && id==='a3')await page.screenshot({path:path.join(out,'hints-320.png'),fullPage:true});
        await page.locator('[data-action="toggle-hint"]').click();
        assert.equal(await page.locator('.hint-card').count(),0);
        await page.locator('[data-action="reveal"]').click();
        assert.ok(await page.locator('.answer h2').textContent());
        assert.equal(await page.locator('.answer-memory').count(),coverage.find(x=>x.id===id).hints.mnemonic?1:0);
      }
    }
    // Synthetic v3 state: preserve two learners, a custom image and personal hints on reload.
    await page.evaluate(()=>{
      const other=makeProfile('Second learner');
      other.progress.a6={interval:21,reviews:8,dueAt:9999999999999};
      state.profiles.push(other);
      const c=state.cards.find(c=>c.id==='a6');
      c.mnemonic='Personal hair cue';
      c.customImage='data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><circle cx="10" cy="10" r="8"/></svg>');
      persist();
    });
    assert.equal(await page.evaluate(()=>cardHints(state.cards.find(c=>c.id==='a6')).mnemonic),'Personal hair cue');
    const snapshot=await page.evaluate(()=>localStorage.getItem(STORE));
    await page.reload();
    assert.equal(await page.evaluate(()=>localStorage.getItem(STORE)),snapshot);
    await page.evaluate(()=>startPracticeCard('a6'));
    assert.equal(await page.locator('.review-scene img').count(),1);
    await page.locator('[data-action="reveal"]').click();
    await page.locator('[data-rate="good"]').click();
    assert.equal(await page.evaluate(()=>state.profiles[1].progress.a6.reviews),8);
    assert.equal(await page.evaluate(()=>state.profiles[0].progress.a6.reviews),1);
    assert.equal(await page.evaluate(()=>cardHints(state.cards.find(c=>c.id==='a6')).mnemonic),'Personal hair cue');
    const migration=await page.evaluate(()=>{
      const migrated=migrate({version:2,cards:[{...starter[0],interval:7,reviews:4}],history:[{id:'a1',time:123}]});
      return {interval:migrated.profiles[0].progress.a1.interval,history:migrated.profiles[0].history.length};
    });
    assert.deepEqual(migration,{interval:7,history:1});
    // Real cache: all revised assets must load without network.
    await page.evaluate(()=>navigator.serviceWorker.ready);
    await page.reload();
    await page.waitForFunction(()=>!!navigator.serviceWorker.controller);
    await context.setOffline(true);
    await page.reload();
    await page.evaluate(()=>startPracticeCard('g2'));
    assert.equal(await page.locator('.review-scene svg').count(),1);
    assert.equal(await page.evaluate(()=>typeof window.ParlezIllustrations.scene),'function');
    assert.deepEqual(errors,[]);
    console.log('PASS: 50-card hints and word-free SVG audit; 6 widths × 13 cards; hint/reveal flow; custom content; profile isolation; v2 migration; offline reload.');
  } finally { await browser.close(); }
})().catch(error=>{console.error(error);process.exitCode=1;});
