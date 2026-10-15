// Run against public/ served on port 8000, with Playwright in NODE_PATH.
const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const out=path.resolve(__dirname,'../artifacts');fs.mkdirSync(out,{recursive:true});
(async()=>{
 const browser=await chromium.launch({headless:true,channel:process.env.PARLEZ_BROWSER_CHANNEL||'msedge'});
 try{
  const context=await browser.newContext({viewport:{width:390,height:844}}),page=await context.newPage(),errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.goto(process.env.PARLEZ_URL||'http://127.0.0.1:8000/#grammar');
  const content=await page.evaluate(()=>ParlezGrammarGame.forms.map(f=>({id:f.id,answers:ParlezGrammarGame.verbs.map(v=>ParlezGrammarGame.sentence(f.id,v.id))})));
  assert.deepEqual(content,[
   {id:'present',answers:['Je mange tous les jours.','Je travaille tous les jours.','Je regarde un film tous les jours.']},
   {id:'continuous',answers:['Je suis en train de manger.','Je suis en train de travailler.','Je suis en train de regarder un film.']},
   {id:'recent',answers:['Je viens de manger.','Je viens de travailler.','Je viens de regarder un film.']},
   {id:'perfect',answers:['J’ai mangé.','J’ai travaillé.','J’ai regardé un film.']},
   {id:'future',answers:['Je vais manger.','Je vais travailler.','Je vais regarder un film.']}
  ]);
  await page.screenshot({path:path.join(out,'game-intro-390.png'),fullPage:true});
  await page.locator('[data-game="start"]').click();
  const initial=await page.evaluate(()=>structuredClone(activeProfile().grammarGame));
  assert.equal(initial.questions.length,10);
  for(const f of content){
   const questions=initial.questions.filter(q=>q.form===f.id);
   assert.deepEqual(questions.map(q=>q.type),['choose','build']);
   assert.notEqual(questions[0].verb,questions[1].verb);
   if(f.id==='continuous')assert.ok(!questions[0].options.includes('present'));
  }
  // Make one mistake: it must be scored once and return as a later build question.
  const wrong=initial.questions[0].options.find(f=>f!==initial.questions[0].form);
  await page.locator(`[data-game="choose"][data-form="${wrong}"]`).click();
  assert.equal(await page.locator('.game-feedback.incorrect').count(),1);
  assert.equal(await page.evaluate(()=>activeProfile().grammarHistory.length),1);
  assert.equal(await page.evaluate(()=>activeProfile().grammarGame.questions.length),11);
  await page.screenshot({path:path.join(out,'game-feedback-390.png'),fullPage:true});
  await page.reload();
  assert.equal(await page.locator('.game-feedback.incorrect').count(),1);
  await page.locator('[data-game="next"]').click();
  const answerCurrent=async()=>{
   const q=await page.evaluate(()=>structuredClone(activeProfile().grammarGame.questions[activeProfile().grammarGame.index]));
   if(q.type==='choose')await page.locator(`[data-game="choose"][data-form="${q.form}"]`).click();
   else{
    const indices=await page.evaluate(()=>{
     const s=activeProfile().grammarGame,q=s.questions[s.index];
     return ParlezGrammarGame.chunks(q.form,q.verb).map(t=>q.tiles.indexOf(t));
    });
    for(const index of indices)await page.locator(`[data-game="tile"][data-index="${index}"]`).click();
    await page.locator('[data-game="check"]').click();
   }
   assert.equal(await page.locator('.game-feedback.correct').count(),1);
   await page.locator('[data-game="next"]').click();
  };
  for(let i=1;i<11;i++)await answerCurrent();
  assert.equal(await page.locator('.game-score').textContent(),'9 / 10');
  assert.equal(await page.evaluate(()=>activeProfile().grammarHistory.length),11);
  // Tile removal, reload-resume, profile isolation and completed score persistence.
  await page.locator('[data-game="start"]').click();
  for(let i=0;i<5;i++)await answerCurrent();
  await page.locator('[data-game="tile"]').first().click();
  assert.equal(await page.locator('[data-game="remove"]').count(),1);
  await page.locator('[data-game="remove"]').click();
  assert.equal(await page.locator('[data-game="remove"]').count(),0);
  const firstProfile=await page.evaluate(()=>activeProfile().id);
  await page.locator('[data-game="tile"]').first().click();
  await page.reload();
  assert.equal(await page.locator('[data-game="remove"]').count(),1);
  await page.evaluate(()=>{const p=makeProfile('Game second learner');state.profiles.push(p);persist();switchProfile(p.id);navigate('grammar');});
  assert.equal(await page.locator('[data-game="start"]').textContent(),'Play ');
  assert.equal(await page.evaluate(()=>activeProfile().grammarHistory.length),0);
  await page.locator('[data-game="start"]').click();
  await answerCurrent();
  await page.evaluate(id=>{switchProfile(id);navigate('grammar');},firstProfile);
  assert.equal(await page.locator('[data-game="remove"]').count(),1);
  assert.equal(await page.evaluate(()=>activeProfile().grammarGame.index),5);
  await page.locator('[data-game="remove"]').click();
  for(const width of [320,375,390,430,768,1280]){
   await page.setViewportSize({width,height:844});
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,width+' game overflow');
   for(const button of await page.locator('.game-tile').all())assert.ok((await button.boundingBox()).height>=44);
   await page.screenshot({path:path.join(out,`game-build-${width}.png`),fullPage:true});
  }
  await page.locator('[data-game="mode"][data-mode="practice"]').click();
  await page.locator('#gr-0').fill('vais');
  await page.locator('[data-check-grammar="0"]').click();
  assert.match(await page.locator('#res-0').textContent(),/Correct!/);
  await page.locator('[data-game="mode"][data-mode="game"]').click();
  // Finish the resumed game entirely without network.
  await page.evaluate(()=>navigator.serviceWorker.ready);await page.reload();
  await page.waitForFunction(()=>!!navigator.serviceWorker.controller);
  await context.setOffline(true);await page.reload();
  assert.equal(await page.locator('.game-build').count(),1);
  for(let i=5;i<10;i++)await answerCurrent();
  assert.equal(await page.locator('.game-score').textContent(),'10 / 10');
  await page.reload();assert.equal(await page.locator('.game-score').textContent(),'10 / 10');
  assert.deepEqual(errors,[]);
  console.log('PASS: 15 French/English verb forms; balanced rounds; choose/build; feedback; repeat missed form; scoring; tile removal; reload-resume; profile isolation; six widths; legacy practice; offline completion.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
