/* Parlez helpful hints: memory association, scene clue, then a partial French starter.
   No language translation is used by default on the flashcard front.
   This file can be updated without touching a learner's local deck or review progress. */
(function(){
  'use strict';
  const BUILTIN_HINTS={
  "a1": [
    "Eyes open at the alarm. The person is still under the blanket.",
    "Start with a reflexive phrase: Je me ré…",
    "Eyes opening when an alarm rings: Je me réveille. Save 'Je me lève' for actually leaving the bed."
  ],
  "a2": [
    "Sitting on the edge of the bed, feet reaching the floor.",
    "Begin: Je me lè…",
    "Going upright and leaving the mattress means Je me lève, rather than the earlier moment of waking."
  ],
  "a3": [
    "The small brush touches the visible teeth.",
    "Start: Je me br… les d…",
    "Picture the brush moving across the teeth as you say Je me brosse les dents. The phrase uses les, not mes."
  ],
  "a4": [
    "Water falls from a showerhead onto the person.",
    "Start: Je me dou…",
    "As the water falls from the showerhead, say Je me douche. The verb is reflexive."
  ],
  "a5": [
    "Clothes are going onto the body.",
    "Start with Je m’… (zhuh mah…)",
    "Clothes going onto your body: Je m’habille. The 'me' becomes m’ before the vowel sound."
  ],
  "a6": [
    "A raised hand draws a comb through the hair.",
    "Start: Je me coi… (zhuh muh kwah…)",
    "Think of fixing your hairstyle in the mirror: Je me coiffe."
  ],
  "a7": [
    "A leisurely stroll in the park.",
    "Start: Je me pro…",
    "Imagine your feet slowly following the park path: Je me promène."
  ],
  "a8": [
    "At night, the person pulls the blanket over their legs, still awake.",
    "Start: Je me cou… (zhuh muh koo…)",
    "Getting into bed = Je me couche. Actually falling asleep later = Je m’endors."
  ],
  "a9": [
    "Open eyes fade into closed eyes: the moment sleep begins.",
    "Start: Je m’en… (zhuh mahn…)",
    "The transition from awake to asleep is Je m’endors. Sleeping for several hours is Je dors."
  ],
  "a10": [
    "The first meal of the day: bread and coffee.",
    "Start: Je prends mon petit-dé…",
    "Picture taking your breakfast at the table: Je prends mon petit-déjeuner. Prendre is a common choice with meals."
  ],
  "a11": [
    "A hand straightens the blanket after getting up.",
    "Start: Je fais mon l…",
    "The sheet becomes neat as you say Je fais mon lit. This is making the bed, not sleeping."
  ],
  "a12": [
    "Cleaning plates at the sink after a meal.",
    "Start: Je fais la vais…",
    "See the plates becoming clean: Je fais la vaisselle. It is one fixed speaking chunk."
  ],
  "a13": [
    "Caring for the plants to keep them healthy.",
    "Start: Je m’oc… de mes pl…",
    "The person is occupied caring for the plants: Je m’occupe de mes plantes."
  ],
  "a14": [
    "The workday is starting at the computer.",
    "Start: Je commence à tra…",
    "The starting moment matters: Je commence à travailler (commencer à + infinitive)."
  ],
  "a15": [
    "A short pause in the workday for coffee.",
    "Start: Je fais une p… café",
    "See the work stopping for coffee: Je fais une pause café. Say it as one expression."
  ],
  "a16": [
    "Pedaling a bicycle outdoors.",
    "Start: Je fais du vé…",
    "Pedaling the wheels means Je fais du vélo. Sports activities often use faire du."
  ],
  "b1": [
    "A knitted winter cap with a pom-pom.",
    "Masculine singular: un bo…",
    "Hold the warm hat on your head in your imagination: un bonnet."
  ],
  "b2": [
    "A long, warm wrap for the neck.",
    "Feminine singular: une é…",
    "Picture winding fabric around your neck: une écharpe."
  ],
  "b3": [
    "A single garment from shoulders to below the waist.",
    "Feminine singular: une ro…",
    "Picture the entire garment in one piece: une robe."
  ],
  "b4": [
    "A pair of athletic shoes.",
    "Plural article: des ba…",
    "Picture two sports shoes tied before a run: des baskets."
  ],
  "b5": [
    "A collar and buttons all the way down the front.",
    "Feminine singular: une che…",
    "Picture fastening the buttons one by one: une chemise."
  ],
  "b6": [
    "One garment with two long legs.",
    "Masculine singular: un pan…",
    "Two legs inside one pair of trousers: un pantalon (singular in French)."
  ],
  "b7": [
    "A garment from the waist down, without separate legs.",
    "Feminine singular: une ju…",
    "Picture a skirt moving around the waist: une jupe."
  ],
  "b8": [
    "A pair of soft coverings worn inside shoes.",
    "Plural article: des chau…",
    "Pull a sock over each foot: des chaussettes."
  ],
  "b9": [
    "Four fingers share one pocket; each thumb has its own.",
    "Plural article: des mou…",
    "Picture both hands enclosed inside mittens: des moufles, not des gants."
  ],
  "b10": [
    "Describe what she is wearing, including its red colour.",
    "Start: Elle porte une robe rou…",
    "Point at the red fabric and describe it: Elle porte une robe rouge. The colour goes after robe."
  ],
  "b11": [
    "A film from Mexico, with a thumbs-up for quality.",
    "Start: C’est un bon film mex…",
    "Say the opinion before the noun (bon film), then the origin after it (film mexicain)."
  ],
  "w1": [
    "Drops of water are falling from the cloud.",
    "Start: Il pl… (eel pl…)",
    "Watch the raindrops fall as you say Il pleut. This weather uses a verb."
  ],
  "w2": [
    "Snowflakes are falling through the air.",
    "Start: Il nei…",
    "Follow a falling flake: Il neige. This is a weather verb, not il fait."
  ],
  "w3": [
    "Describe the cold air that makes the person shiver.",
    "Start with weather phrase: Il fait fr…",
    "Feel the icy air on your cheeks: Il fait froid. Use il fait + adjective."
  ],
  "w4": [
    "Describe the hot air that makes the person sweat.",
    "Start with weather phrase: Il fait ch…",
    "Feel heat on your skin: Il fait chaud. This describes temperature, not sunshine alone."
  ],
  "w5": [
    "Sunshine in a bright sky.",
    "Start with: Il y a du sol…",
    "Picture the yellow sun above you: Il y a du soleil. Use il y a + du."
  ],
  "w6": [
    "Strong air currents blow across the scene.",
    "Start with: Il y a du ve…",
    "Watch the leaves blow sideways: Il y a du vent. Use il y a + du."
  ],
  "w7": [
    "Several clouds, without falling rain.",
    "Start with: Il y a des nua…",
    "Imagine counting the clouds: Il y a des nuages. Use plural des."
  ],
  "o1": [
    "The pen leaves marks on paper. Say what it is used for.",
    "Start: Ça sert à écr…",
    "Think of the function, not the material: Ça sert à écrire = it is used for writing."
  ],
  "o2": [
    "Focus on the shiny material of the pen.",
    "Start: Il est en mé…",
    "Point to the material of the pen: Il est en métal. Materials follow en."
  ],
  "o3": [
    "A pen and a list in a notebook. Explain the activity.",
    "Start: On l’utilise pour prendre des no…",
    "See a notebook filling with notes: On l’utilise pour prendre des notes."
  ],
  "g1": [
    "A full plate; cutlery still on the table. The first bite comes next.",
    "Near future: Je v… m…",
    "Before the first bite, the action is coming next: Je vais manger."
  ],
  "g2": [
    "A forkful reaches the open mouth. The meal is in progress.",
    "Right now: Je suis en t… de m…",
    "Freeze the scene during the action: Je suis en train de manger."
  ],
  "g3": [
    "Only crumbs remain; cutlery rests on the plate. The meal has just ended.",
    "Just finished: Je v… de m…",
    "See an empty plate moments after eating: Je viens de manger."
  ],
  "g4": [
    "Work is planned for later; it has not started.",
    "Start: Je vais travai…",
    "The upcoming workday is still ahead: Je vais travailler (near future)."
  ],
  "g5": [
    "The walking plan is crossed out. Make the sentence negative.",
    "Negative reflexive opening: Je ne me pro… pas",
    "Imagine a crossed-out walking plan: Je ne me promène pas. Place pas after the verb."
  ],
  "g6": [
    "Bedtime is planned for later.",
    "Near future + reflexive: Je vais me cou…",
    "Planning bedtime: Je vais me coucher. With two verbs, me stays before coucher."
  ],
  "g7": [
    "He wants to join the group working on a project.",
    "Start: Il veut participer au pro…",
    "Picture joining the group: Il veut participer au projet. The à + le becomes au."
  ],
  "t1": [
    "Long hand on 3; short hand just past 2.",
    "Start: Il est deux heures et q…",
    "The minute hand on the 3 means a quarter PAST: deux heures et quart."
  ],
  "t2": [
    "Long hand on 6; short hand halfway between 2 and 3.",
    "Start: Il est deux heures et de…",
    "The minute hand on 6 means half PAST: deux heures et demie."
  ],
  "t3": [
    "Long hand on 9; short hand approaching 3.",
    "Start: Il est trois heures moins le q…",
    "The hand on 9 means a quarter TO the next hour: trois heures moins le quart."
  ],
  "s1": [
    "Tell a morning sequence: waking up, then breakfast.",
    "Start: Le matin, je me… puis je…",
    "Describe a sequence with puis: Le matin, je me réveille, puis je prends mon petit-déjeuner."
  ],
  "s2": [
    "Describe both items you wear for sport: shorts and trainers.",
    "Start: Je porte un short et des…",
    "Point to each item you're wearing: Je porte un short et des baskets."
  ],
  "s3": [
    "Plan a cinema trip for this evening. It has not happened yet.",
    "Start: Ce soir, je vais…",
    "Visualize entering the cinema later tonight: Je vais aller au cinéma ce soir."
  ]
};
  // Curated links appear only after reveal. Weak or forced links are deliberately omitted.
  const MEMORY_CUES={
    "a3": "«برس» ↔ brosse; dentist ↔ dents.",
    "a4": "«دوش» ↔ douche.",
    "a6": "«کوافور» / coiffeur ↔ coiffe.",
    "a7": "promenade ↔ promène.",
    "a13": "occupied ↔ m’occupe.",
    "a14": "commence means “begin” in English too.",
    "b3": "robe is also an English word for a garment.",
    "b4": "basketball ↔ baskets (sports shoes).",
    "b5": "«شومیز» ↔ chemise.",
    "b6": "pantaloons ↔ pantalon.",
    "b10": "«رژ» ↔ rouge.",
    "b11": "bon appétit ↔ bon (good).",
    "w6": "Air flows through a vent; vent means wind.",
    "o2": "metal ↔ métal.",
    "o3": "notes ↔ notes.",
    "g7": "participate ↔ participer.",
    "t1": "quarter ↔ quart.",
    "t3": "minus ↔ moins; quarter ↔ quart.",
    "s3": "cinema / «سینما» ↔ cinéma."
  };
  const clean = value => String(value||'').trim();
  const smallStart = french => {
    const words=clean(french).replace(/[.!?]+$/,'').split(/\s+/).filter(Boolean);
    if(!words.length)return 'Say what you see as a short French phrase.';
    if(words.length===1)return 'The word begins with '+words[0].slice(0,2)+'…';
    const first=words[0];
    return 'French start: '+first+' '+words[1].slice(0,Math.min(2,words[1].length))+'…';
  };
  function forCard(card,seed){
    const unedited=Boolean(seed && seed.frenchAnswer===card.frenchAnswer && seed.scene===card.scene);
    const built=unedited?BUILTIN_HINTS[card.id]:null;
    const scene=clean(card.sceneHint) || built?.[0] || (clean(card.englishPrompt)?'Focus on the picture. What does this scene communicate? '+clean(card.englishPrompt):'Focus on the main action or object, and say one specific French phrase.');
    const starter=clean(card.startHint) || built?.[1] || smallStart(card.frenchAnswer);
    const customMemory=clean(card.mnemonic) && (!seed || card.mnemonic!==seed.mnemonic)?clean(card.mnemonic):'';
    const memory=customMemory || built?.[2] || (!seed?clean(card.mnemonic):'') || (unedited?clean(card.grammarNote):'') || ('Picture the action as you say '+clean(card.frenchAnswer)+' aloud. If the scene no longer matches, update its image and clues in Library.');
    const mnemonic=clean(card.memoryHint) || customMemory || (unedited?clean(MEMORY_CUES[card.id]):'') || (!seed?clean(card.mnemonic):'');
    return {scene,starter,memory,mnemonic};
  }
  window.ParlezHints={forCard,count:Object.keys(BUILTIN_HINTS).length,ids:Object.keys(BUILTIN_HINTS),memoryCount:Object.keys(MEMORY_CUES).length};
})();
