// Serve public/ on localhost:8000. NODE_PATH must include Playwright.
const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const out=path.resolve(__dirname,'../artifacts');
fs.mkdirSync(out,{recursive:true});
(async()=>{
 const browser=await chromium.launch({headless:true,channel:process.env.PARLEZ_BROWSER_CHANNEL||'msedge'});
 try{
  const context=await browser.newContext({viewport:{width:390,height:844}});
  const page=await context.newPage(),errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.goto(process.env.PARLEZ_URL||'http://127.0.0.1:8000');
  const cards=await page.evaluate(()=>starter.map(c=>({id:c.id,example:c.frenchExample,translation:c.exampleEnglish,meaning:c.englishPrompt,svg:sceneSVG(c.scene)})));
  assert.equal(cards.length,50);
  for(const c of cards){
   assert.ok(c.example&&c.translation&&c.meaning,c.id+' incomplete vocabulary');
   assert.ok(!/<text\b/.test(c.svg),c.id+' image contains text');
   await page.evaluate(id=>startPracticeCard(id),c.id);
   assert.equal(await page.locator('.answer').count(),0);
   assert.equal(await page.locator('[data-action*="hint"],.hint-card,.answer-memory').count(),0);
   await page.locator('[data-action="reveal"]').click();
   assert.equal(await page.locator('.answer .english').textContent(),c.meaning);
   assert.equal(await page.locator('.example [lang="fr"]').textContent(),c.example);
   assert.equal(await page.locator('.example-meaning').textContent(),c.translation);
  }
  for(const width of [320,375,390,430,768,1280]){
   await page.setViewportSize({width,height:844});
   for(const id of ['a3','a6','a11','b5','b9','w2','t3','g2']){
    await page.evaluate(id=>startPracticeCard(id),id);
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,width+'/'+id+' front overflow');
    await page.locator('[data-action="reveal"]').click();
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,width+'/'+id+' back overflow');
    if(width===390)await page.screenshot({path:path.join(out,'vocab-'+id+'-390.png'),fullPage:true});
   }
  }
  await page.evaluate(()=>{
   document.body.innerHTML='<div style="display:grid;grid-template-columns:repeat(5,1fr);gap:8px;padding:12px">'+starter.map(c=>'<div>'+sceneSVG(c.scene)+'<p>'+c.id+' '+c.englishPrompt+'</p></div>').join('')+'</div>';
  });
  await page.setViewportSize({width:1600,height:1000});
  await page.screenshot({path:path.join(out,'vocabulary-images.png'),fullPage:true});
  await page.reload();
  // Old saved cards receive revised built-in examples, without losing personal edits or profiles.
  await page.evaluate(()=>{
   const other=makeProfile('Second learner');other.progress.a6={interval:21,reviews:8,dueAt:9999999999999};state.profiles.push(other);
   Object.assign(state.cards.find(c=>c.id==='a1'),originalStarterContent.a1);
   const edited=state.cards.find(c=>c.id==='a6');edited.frenchExample='Je me coiffe à midi.';edited.exampleEnglish='I do my hair at noon.';
   edited.customImage='data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><circle cx="10" cy="10" r="8"/></svg>');
   persist();
  });
  await page.reload();
  assert.equal(await page.evaluate(()=>state.cards.find(c=>c.id==='a1').exampleEnglish),'I wake up at seven.');
  assert.equal(await page.evaluate(()=>state.cards.find(c=>c.id==='a6').frenchExample),'Je me coiffe à midi.');
  await page.evaluate(()=>startPracticeCard('a6'));
  assert.equal(await page.locator('.review-scene img').count(),1);
  await page.locator('[data-action="reveal"]').click();
  await page.locator('[data-rate="good"]').click();
  assert.equal(await page.evaluate(()=>state.profiles[1].progress.a6.reviews),8);
  assert.equal(await page.evaluate(()=>state.profiles[0].progress.a6.reviews),1);
  await page.evaluate(()=>cardModal(state.cards.find(c=>c.id==='a6')));
  assert.equal(await page.locator('#ed-mnemonic,#ed-sceneHint,#ed-startHint').count(),0);
  await page.locator('#ed-frenchExample').fill('Je me coiffe le soir.');
  await page.locator('#ed-exampleEnglish').fill('I do my hair in the evening.');
  await page.locator('[data-action="save-card"]').click();
  await page.reload();
  assert.equal(await page.evaluate(()=>state.cards.find(c=>c.id==='a6').exampleEnglish),'I do my hair in the evening.');
  const migrated=await page.evaluate(()=>migrate({version:2,cards:[{...starter[0],interval:7,reviews:4}],history:[{id:'a1',time:123}]}));
  assert.equal(migrated.profiles[0].progress.a1.interval,7);
  assert.equal(migrated.profiles[0].history.length,1);
  await page.evaluate(()=>navigator.serviceWorker.ready);
  await page.reload();
  await page.waitForFunction(()=>!!navigator.serviceWorker.controller);
  await context.setOffline(true);
  await page.reload();
  await page.evaluate(()=>startPracticeCard('g2'));
  await page.locator('[data-action="reveal"]').click();
  assert.equal(await page.locator('.example-meaning').textContent(),'I am eating right now.');
  assert.ok((await page.evaluate(()=>caches.keys())).includes('parlez-v11-vocabulary'));
  assert.deepEqual(errors,[]);
  console.log('PASS: 50 cards with meanings/examples/translations; no hints; 6 widths; editor save; content upgrade; custom edits/images; separate profiles; v2 migration; offline reload.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
