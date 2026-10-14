/* Parlez helpful hints: scene-led retrieval, then an optional French phrase starter.
   No language translation is used by default on the flashcard front.
   This file can be updated without touching a learner's local deck or review progress. */
(function(){
  'use strict';
  const BUILTIN_HINTS={
  "a1": [
    "The alarm rings; the person's eyes open, but they are still lying in bed. This happens before getting up.",
    "Start with a reflexive phrase: Je me ré…",
    "Eyes opening when an alarm rings: Je me réveille. Save 'Je me lève' for actually leaving the bed."
  ],
  "a2": [
    "The person lifts their body and feet OUT of bed. Their eyes were already open.",
    "Begin: Je me lè…",
    "Going upright and leaving the mattress means Je me lève, rather than the earlier moment of waking."
  ],
  "a3": [
    "A toothbrush moves across the teeth; this isn't washing the face or taking a shower.",
    "Start: Je me br… les d…",
    "Picture the brush moving across the teeth as you say Je me brosse les dents. The phrase uses les, not mes."
  ],
  "a4": [
    "A person is under running water to wash their body, not sitting in a bath.",
    "Start: Je me dou…",
    "As the water falls from the showerhead, say Je me douche. The verb is reflexive."
  ],
  "a5": [
    "The person pulls clothes onto their body. Focus on dressing, not choosing or buying clothes.",
    "Start with Je m’… (zhuh mah…)",
    "Clothes going onto your body: Je m’habille. The 'me' becomes m’ before the vowel sound."
  ],
  "a6": [
    "Someone uses a brush or comb to arrange their hair before going out. No scissors!",
    "Start: Je me coi… (zhuh muh kwah…)",
    "Think of fixing your hairstyle in the mirror: Je me coiffe."
  ],
  "a7": [
    "A relaxed stroll along a path, not a fast run or bicycle ride.",
    "Start: Je me pro…",
    "Imagine your feet slowly following the park path: Je me promène."
  ],
  "a8": [
    "The person is moving into bed for the night, but may not have fallen asleep yet.",
    "Start: Je me cou… (zhuh muh koo…)",
    "Getting into bed = Je me couche. Actually falling asleep later = Je m’endors."
  ],
  "a9": [
    "The moment the eyes close and the person drifts into sleep, AFTER going to bed.",
    "Start: Je m’en… (zhuh mahn…)",
    "The transition from awake to asleep is Je m’endors. Sleeping for several hours is Je dors."
  ],
  "a10": [
    "Morning food and coffee on the table. Say what you do when you eat the first meal of the day.",
    "Start: Je prends mon petit-dé…",
    "Picture taking your breakfast at the table: Je prends mon petit-déjeuner. Use prends, not mange."
  ],
  "a11": [
    "Someone straightens the blanket and pillow after leaving bed in the morning.",
    "Start: Je fais mon l…",
    "The sheet becomes neat as you say Je fais mon lit. This is making the bed, not sleeping."
  ],
  "a12": [
    "Dirty plates are being cleaned at the sink AFTER a meal.",
    "Start: Je fais la vais…",
    "See the plates becoming clean: Je fais la vaisselle. It is one fixed speaking chunk."
  ],
  "a13": [
    "Someone is tending and watering plants; they are responsible for keeping them healthy.",
    "Start: Je m’oc… de mes pl…",
    "The person is occupied caring for the plants: Je m’occupe de mes plantes."
  ],
  "a14": [
    "A workday is beginning: the laptop opens and tasks start NOW.",
    "Start: Je commence à tra…",
    "The starting moment matters: Je commence à travailler (commencer à + infinitive)."
  ],
  "a15": [
    "A worker stops for a short break and holds a cup of coffee; not an entire lunch.",
    "Start: Je fais une p… café",
    "See the work stopping for coffee: Je fais une pause café. Say it as one expression."
  ],
  "a16": [
    "A person is pedaling a bicycle outdoors, not walking beside it.",
    "Start: Je fais du vé…",
    "Pedaling the wheels means Je fais du vélo. Sports activities often use faire du."
  ],
  "b1": [
    "A knitted winter item covers the HEAD; it is not a scarf or a hood.",
    "Masculine singular: un bo…",
    "Hold the warm hat on your head in your imagination: un bonnet."
  ],
  "b2": [
    "A long piece of fabric wraps around someone's NECK.",
    "Feminine singular: une é…",
    "Picture winding fabric around your neck: une écharpe."
  ],
  "b3": [
    "One complete, one-piece garment is worn from shoulders down, rather than a top and separate skirt.",
    "Feminine singular: une ro…",
    "Picture the entire garment in one piece: une robe."
  ],
  "b4": [
    "Comfortable athletic shoes with soles for running or training; a PAIR.",
    "Plural article: des ba…",
    "Picture two sports shoes tied before a run: des baskets."
  ],
  "b5": [
    "An everyday top with a collar and buttons down the front.",
    "Feminine singular: une che…",
    "Picture fastening the buttons one by one: une chemise."
  ],
  "b6": [
    "A long garment covering both legs from waist to ankles.",
    "Masculine singular: un pan…",
    "Two legs inside one pair of trousers: un pantalon (singular in French)."
  ],
  "b7": [
    "One garment wraps around the waist and hangs down. The legs aren't divided as in trousers.",
    "Feminine singular: une ju…",
    "Picture a skirt moving around the waist: une jupe."
  ],
  "b8": [
    "Soft fabric covering each foot before putting shoes on; show both feet.",
    "Plural article: des chau…",
    "Pull a sock over each foot: des chaussettes."
  ],
  "b9": [
    "Winter handwear with fingers grouped together, unlike individual-finger gloves.",
    "Plural article: des mou…",
    "Picture both hands enclosed inside mittens: des moufles, not des gants."
  ],
  "b10": [
    "A woman is wearing a RED dress. Describe what SHE is wearing in a complete sentence.",
    "Start: Elle porte une robe rou…",
    "Point at the red fabric and describe it: Elle porte une robe rouge. The colour goes after robe."
  ],
  "b11": [
    "You're watching a film. It is GOOD, and it comes from MEXICO. Include both adjectives in the right positions.",
    "Start: C’est un bon film mex…",
    "Say the opinion before the noun (bon film), then the origin after it (film mexicain)."
  ],
  "w1": [
    "Actual drops of water are FALLING from the sky now, not just clouds.",
    "Start: Il pl… (eel pl…)",
    "Watch the raindrops fall as you say Il pleut. This weather uses a verb."
  ],
  "w2": [
    "White snowflakes are falling FROM THE SKY right now, not just lying on the ground.",
    "Start: Il nei…",
    "Follow a falling flake: Il neige. This is a weather verb, not il fait."
  ],
  "w3": [
    "Outdoor air makes a person shiver and wrap up; they're cold.",
    "Start with weather phrase: Il fait fr…",
    "Feel the icy air on your cheeks: Il fait froid. Use il fait + adjective."
  ],
  "w4": [
    "The sun's heat makes the person sweat or fan themselves.",
    "Start with weather phrase: Il fait ch…",
    "Feel heat on your skin: Il fait chaud. This describes temperature, not sunshine alone."
  ],
  "w5": [
    "The sun is visible and the sky is bright. Describe the presence of SUNSHINE.",
    "Start with: Il y a du sol…",
    "Picture the yellow sun above you: Il y a du soleil. Use il y a + du."
  ],
  "w6": [
    "Air is moving strongly enough to bend trees and blow hair.",
    "Start with: Il y a du ve…",
    "Watch the leaves blow sideways: Il y a du vent. Use il y a + du."
  ],
  "w7": [
    "Several clouds cover the sky; they may not be releasing rain.",
    "Start with: Il y a des nua…",
    "Imagine counting the clouds: Il y a des nuages. Use plural des."
  ],
  "o1": [
    "Look at a PEN MAKING LETTERS. Answer: what is this object FOR?",
    "Start: Ça sert à écr…",
    "Think of the function, not the material: Ça sert à écrire = it is used for writing."
  ],
  "o2": [
    "Look closely at the pen's shiny metal body. Describe what it is MADE OF, not its function.",
    "Start: Il est en mé…",
    "Point to the material of the pen: Il est en métal. Materials follow en."
  ],
  "o3": [
    "A person USES a pen to jot ideas onto paper. Explain the activity it is used for.",
    "Start: On l’utilise pour prendre des no…",
    "See a notebook filling with notes: On l’utilise pour prendre des notes."
  ],
  "g1": [
    "Food is ready; the person has NOT started eating. The next moment is the first bite.",
    "Near-future opening: Je vais man…",
    "Before the first bite, the action is coming next: Je vais manger."
  ],
  "g2": [
    "The person is ACTIVELY eating at this very instant. The fork is moving.",
    "Ongoing-action opening: Je suis en train de man…",
    "Freeze the scene during the action: Je suis en train de manger."
  ],
  "g3": [
    "The food is GONE, and the meal has JUST ended. It's not happening now.",
    "Just-finished opening: Je viens de man…",
    "See an empty plate moments after eating: Je viens de manger."
  ],
  "g4": [
    "The person is preparing to work soon; it's a PLAN, not a task they already started.",
    "Start: Je vais travai…",
    "The upcoming workday is still ahead: Je vais travailler (near future)."
  ],
  "g5": [
    "Walking shoes stay unused; the person is NOT taking the planned stroll.",
    "Negative reflexive opening: Je ne me pro… pas",
    "Imagine a crossed-out walking plan: Je ne me promène pas. Place pas after the verb."
  ],
  "g6": [
    "Someone plans to climb into bed later; they're not in bed YET.",
    "Near future + reflexive: Je vais me cou…",
    "Planning bedtime: Je vais me coucher. With two verbs, me stays before coucher."
  ],
  "g7": [
    "Someone wants to JOIN a group working on a project, not lead it.",
    "Start: Il veut participer au pro…",
    "Picture joining the group: Il veut participer au projet. The à + le becomes au."
  ],
  "t1": [
    "Read the hands: long minute hand on 3, short hour hand just past 2.",
    "Start: Il est deux heures et q…",
    "The minute hand on the 3 means a quarter PAST: deux heures et quart."
  ],
  "t2": [
    "Read the hands: long minute hand on 6, hour hand halfway between 2 and 3.",
    "Start: Il est deux heures et de…",
    "The minute hand on 6 means half PAST: deux heures et demie."
  ],
  "t3": [
    "Read the hands: long minute hand on 9, hour hand approaching 3.",
    "Start: Il est trois heures moins le q…",
    "The hand on 9 means a quarter TO the next hour: trois heures moins le quart."
  ],
  "s1": [
    "Tell a TWO-ACTION MORNING STORY: first waking up, then having breakfast. Link the actions.",
    "Start: Le matin, je me… puis je…",
    "Describe a sequence with puis: Le matin, je me réveille, puis je prends mon petit-déjeuner."
  ],
  "s2": [
    "Imagine someone asking what clothes you wear while exercising. Describe the shorts AND sports shoes.",
    "Start: Je porte un short et des…",
    "Point to each item you're wearing: Je porte un short et des baskets."
  ],
  "s3": [
    "Someone asks about your plans for THIS EVENING. The cinema trip hasn't happened yet.",
    "Start: Ce soir, je vais…",
    "Visualize entering the cinema later tonight: Je vais aller au cinéma ce soir."
  ]
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
    const unedited=Boolean(seed && seed.frenchAnswer===card.frenchAnswer);
    const built=unedited?BUILTIN_HINTS[card.id]:null;
    const scene=clean(card.sceneHint) || built?.[0] || (clean(card.englishPrompt)?'Focus on the picture. What does this scene communicate? '+clean(card.englishPrompt):'Focus on the main action or object, and say one specific French phrase.');
    const starter=clean(card.startHint) || built?.[1] || smallStart(card.frenchAnswer);
    const customMemory=clean(card.mnemonic) && (!seed || card.mnemonic!==seed.mnemonic)?clean(card.mnemonic):'';
    const memory=customMemory || built?.[2] || clean(card.mnemonic) || clean(card.grammarNote) || 'Say the French answer while picturing the action once more.';
    return {scene,starter,memory};
  }
  window.ParlezHints={forCard,count:Object.keys(BUILTIN_HINTS).length,ids:Object.keys(BUILTIN_HINTS)};
})();
