/* Parlez · Sentence Production Challenge (Option 2)
   Active construction challenge: Prompt -> Active Production -> 3-Point Anatomy Audit & Memory Rule.
*/
window.ParlezChallenge = (function () {
  'use strict';

  const categories = [
    { id: 'all', label: 'All Challenges' },
    { id: 'reflexive', label: '🛏️ Reflexive Passé (Se...)' },
    { id: 'maison', label: '🏠 Maison d’Être (Movement)' },
    { id: 'avoir', label: '🍎 Avoir Verbs (Regular & Irregular)' },
    { id: 'negation', label: '🚫 Negation in Past' },
    { id: 'tenses', label: '⏱️ Tense Contrasts' }
  ];

  const challenges = [
    // 1. REFLEXIVE PASSÉ COMPOSÉ (ÊTRE + AGREEMENT)
    {
      id: 'sc_refl_1',
      category: 'reflexive',
      scene: 'wake',
      tense: 'Passé composé',
      subject: 'Elle (fem. sing.)',
      verb: 'se lever',
      verbEnglish: 'to get out of bed',
      complement: 'tôt ce matin',
      complementEnglish: 'early this morning',
      sentence: 'Elle s’est levée tôt ce matin.',
      fullAudio: 'Elle s’est levée tôt ce matin.',
      blocks: [
        { label: 'Sujet', val: 'Elle', cl: 'bg-blue-100 text-blue-900 border-blue-300' },
        { label: 'Se + Être', val: 's’est', cl: 'bg-purple-100 text-purple-900 border-purple-300' },
        { label: 'Participe', val: 'levé', cl: 'bg-emerald-100 text-emerald-900 border-emerald-300' },
        { label: 'Accord', val: '+e', cl: 'bg-amber-100 text-amber-900 border-amber-300' },
        { label: 'Complément', val: 'tôt ce matin.', cl: 'bg-slate-100 text-slate-800 border-slate-200' }
      ],
      rubric: [
        { title: '1. Auxiliary & Reflexive', text: 'Used <b>s’est</b> (ÊTRE).', rule: 'All verbs with "se..." 100% take ÊTRE!' },
        { title: '2. Participle', text: 'Formed <b>levé</b> (-er → -é).', rule: 'Regular -er verbs end in -é.' },
        { title: '3. Agreement Mirror', text: 'Added <b>+e</b> to make <b>levée</b>.', rule: 'With Être, the ending mirrors the subject. "Elle" is feminine singular → +e!' }
      ]
    },
    {
      id: 'sc_refl_2',
      category: 'reflexive',
      scene: 'bedtime',
      tense: 'Passé composé',
      subject: 'Elles (fem. pl.)',
      verb: 'se coucher',
      verbEnglish: 'to go to bed',
      complement: 'à minuit hier soir',
      complementEnglish: 'at midnight last night',
      sentence: 'Elles se sont couchées à minuit hier soir.',
      fullAudio: 'Elles se sont couchées à minuit hier soir.',
      blocks: [
        { label: 'Sujet', val: 'Elles', cl: 'bg-blue-100 text-blue-900 border-blue-300' },
        { label: 'Se + Être', val: 'se sont', cl: 'bg-purple-100 text-purple-900 border-purple-300' },
        { label: 'Participe', val: 'couché', cl: 'bg-emerald-100 text-emerald-900 border-emerald-300' },
        { label: 'Accord', val: '+es', cl: 'bg-amber-100 text-amber-900 border-amber-300' },
        { label: 'Complément', val: 'à minuit hier soir.', cl: 'bg-slate-100 text-slate-800 border-slate-200' }
      ],
      rubric: [
        { title: '1. Auxiliary & Reflexive', text: 'Used <b>se sont</b> (ÊTRE).', rule: 'Reflexive plural takes "se sont".' },
        { title: '2. Participle', text: 'Formed <b>couché</b>.', rule: '-er → -é.' },
        { title: '3. Agreement Mirror', text: 'Added <b>+es</b> (couchées).', rule: 'Subject is "Elles" (feminine plural) → +es!' }
      ]
    },
    {
      id: 'sc_refl_3',
      category: 'reflexive',
      scene: 'wake',
      tense: 'Passé composé',
      subject: 'Je (female speaker)',
      verb: 'se réveiller',
      verbEnglish: 'to wake up',
      complement: 'à sept heures',
      complementEnglish: 'at seven o’clock',
      sentence: 'Je me suis réveillée à sept heures.',
      fullAudio: 'Je me suis réveillée à sept heures.',
      blocks: [
        { label: 'Sujet', val: 'Je', cl: 'bg-blue-100 text-blue-900 border-blue-300' },
        { label: 'Me + Être', val: 'me suis', cl: 'bg-purple-100 text-purple-900 border-purple-300' },
        { label: 'Participe', val: 'réveillé', cl: 'bg-emerald-100 text-emerald-900 border-emerald-300' },
        { label: 'Accord', val: '+e', cl: 'bg-amber-100 text-amber-900 border-amber-300' },
        { label: 'Complément', val: 'à sept heures.', cl: 'bg-slate-100 text-slate-800 border-slate-200' }
      ],
      rubric: [
        { title: '1. Auxiliary & Reflexive', text: 'Used <b>me suis</b>.', rule: 'Je + me suis.' },
        { title: '2. Participle', text: 'Formed <b>réveillé</b>.', rule: '-er → -é.' },
        { title: '3. Agreement Mirror', text: 'Added <b>+e</b> (réveillée).', rule: 'When a woman says "Je", Être requires feminine agreement +e!' }
      ]
    },
    {
      id: 'sc_refl_4',
      category: 'reflexive',
      scene: 'walk',
      tense: 'Passé composé',
      subject: 'Nous (plural)',
      verb: 'se promener',
      verbEnglish: 'to go for a walk',
      complement: 'dans le parc',
      complementEnglish: 'in the park',
      sentence: 'Nous nous sommes promenés dans le parc.',
      fullAudio: 'Nous nous sommes promenés dans le parc.',
      blocks: [
        { label: 'Sujet', val: 'Nous', cl: 'bg-blue-100 text-blue-900 border-blue-300' },
        { label: 'Nous + Être', val: 'nous sommes', cl: 'bg-purple-100 text-purple-900 border-purple-300' },
        { label: 'Participe', val: 'promené', cl: 'bg-emerald-100 text-emerald-900 border-emerald-300' },
        { label: 'Accord', val: '+s', cl: 'bg-amber-100 text-amber-900 border-amber-300' },
        { label: 'Complément', val: 'dans le parc.', cl: 'bg-slate-100 text-slate-800 border-slate-200' }
      ],
      rubric: [
        { title: '1. Auxiliary & Reflexive', text: 'Used <b>nous sommes</b>.', rule: 'Double nous: Nous nous sommes.' },
        { title: '2. Participle', text: 'Formed <b>promené</b>.', rule: 'Stem promen- + é.' },
        { title: '3. Agreement Mirror', text: 'Added <b>+s</b> (promenés).', rule: 'Plural subject with Être takes +s (or +es if all female).' }
      ]
    },
    {
      id: 'sc_refl_5',
      category: 'reflexive',
      scene: 'dress',
      tense: 'Passé composé',
      subject: 'Il (masc. sing.)',
      verb: 's’habiller',
      verbEnglish: 'to get dressed',
      complement: 'après la douche',
      complementEnglish: 'after the shower',
      sentence: 'Il s’est habillé après la douche.',
      fullAudio: 'Il s’est habillé après la douche.',
      blocks: [
        { label: 'Sujet', val: 'Il', cl: 'bg-blue-100 text-blue-900 border-blue-300' },
        { label: 'S’ + Être', val: 's’est', cl: 'bg-purple-100 text-purple-900 border-purple-300' },
        { label: 'Participe', val: 'habillé', cl: 'bg-emerald-100 text-emerald-900 border-emerald-300' },
        { label: 'Accord', val: '—', cl: 'bg-slate-100 text-slate-500 border-slate-200' },
        { label: 'Complément', val: 'après la douche.', cl: 'bg-slate-100 text-slate-800 border-slate-200' }
      ],
      rubric: [
        { title: '1. Auxiliary & Reflexive', text: 'Used <b>s’est</b> (s’ before vowel).', rule: 's’ + est.' },
        { title: '2. Participle', text: 'Formed <b>habillé</b>.', rule: '-er → -é.' },
        { title: '3. Agreement Mirror', text: 'No extra letter needed (—).', rule: 'Masculine singular is the base form.' }
      ]
    },
    {
      id: 'sc_refl_6',
      category: 'reflexive',
      scene: 'shower',
      tense: 'Passé composé',
      subject: 'Tu (speaking to a female friend)',
      verb: 'se doucher',
      verbEnglish: 'to take a shower',
      complement: 'hier soir ?',
      complementEnglish: 'yesterday evening?',
      sentence: 'Tu t’es douchée hier soir ?',
      fullAudio: 'Tu t’es douchée hier soir ?',
      blocks: [
        { label: 'Sujet', val: 'Tu', cl: 'bg-blue-100 text-blue-900 border-blue-300' },
        { label: 'T’ + Être', val: 't’es', cl: 'bg-purple-100 text-purple-900 border-purple-300' },
        { label: 'Participe', val: 'douché', cl: 'bg-emerald-100 text-emerald-900 border-emerald-300' },
        { label: 'Accord', val: '+e', cl: 'bg-amber-100 text-amber-900 border-amber-300' },
        { label: 'Complément', val: 'hier soir ?', cl: 'bg-slate-100 text-slate-800 border-slate-200' }
      ],
      rubric: [
        { title: '1. Auxiliary & Reflexive', text: 'Used <b>t’es</b>.', rule: 'Tu + te + es = Tu t’es.' },
        { title: '2. Participle', text: 'Formed <b>douché</b>.', rule: '-er → -é.' },
        { title: '3. Agreement Mirror', text: 'Added <b>+e</b> (douchée).', rule: 'Addressing a female friend with Être requires feminine +e.' }
      ]
    },

    // 2. MAISON D'ÊTRE (MOVEMENT & LIFE VERBS)
    {
      id: 'sc_mvt_1',
      category: 'maison',
      scene: 'transit-bus',
      tense: 'Passé composé',
      subject: 'Elle (fem. sing.)',
      verb: 'partir',
      verbEnglish: 'to leave',
      complement: 'pour Paris',
      complementEnglish: 'for Paris',
      sentence: 'Elle est partie pour Paris.',
      fullAudio: 'Elle est partie pour Paris.',
      blocks: [
        { label: 'Sujet', val: 'Elle', cl: 'bg-blue-100 text-blue-900 border-blue-300' },
        { label: 'Être', val: 'est', cl: 'bg-purple-100 text-purple-900 border-purple-300' },
        { label: 'Participe', val: 'parti', cl: 'bg-emerald-100 text-emerald-900 border-emerald-300' },
        { label: 'Accord', val: '+e', cl: 'bg-amber-100 text-amber-900 border-amber-300' },
        { label: 'Complément', val: 'pour Paris.', cl: 'bg-slate-100 text-slate-800 border-slate-200' }
      ],
      rubric: [
        { title: '1. Auxiliary', text: 'Used <b>est</b> (ÊTRE).', rule: 'Partir is in La Maison d’Être (movement pair: partir / arriver)!' },
        { title: '2. Participle', text: 'Formed <b>parti</b>.', rule: 'Regular -ir movement verb → -i.' },
        { title: '3. Agreement Mirror', text: 'Added <b>+e</b> (partie).', rule: 'With Être, subject "Elle" forces feminine +e!' }
      ]
    },
    {
      id: 'sc_mvt_2',
      category: 'maison',
      scene: 'market-all',
      tense: 'Passé composé',
      subject: 'Elles (fem. pl.)',
      verb: 'aller',
      verbEnglish: 'to go',
      complement: 'au marché',
      complementEnglish: 'to the market',
      sentence: 'Elles sont allées au marché.',
      fullAudio: 'Elles sont allées au marché.',
      blocks: [
        { label: 'Sujet', val: 'Elles', cl: 'bg-blue-100 text-blue-900 border-blue-300' },
        { label: 'Être', val: 'sont', cl: 'bg-purple-100 text-purple-900 border-purple-300' },
        { label: 'Participe', val: 'allé', cl: 'bg-emerald-100 text-emerald-900 border-emerald-300' },
        { label: 'Accord', val: '+es', cl: 'bg-amber-100 text-amber-900 border-amber-300' },
        { label: 'Complément', val: 'au marché.', cl: 'bg-slate-100 text-slate-800 border-slate-200' }
      ],
      rubric: [
        { title: '1. Auxiliary', text: 'Used <b>sont</b> (ÊTRE).', rule: 'Aller is in La Maison d’Être (aller / venir)!' },
        { title: '2. Participle', text: 'Formed <b>allé</b>.', rule: '-er → -é.' },
        { title: '3. Agreement Mirror', text: 'Added <b>+es</b> (allées).', rule: 'Elles is feminine plural → +es!' }
      ]
    },
    {
      id: 'sc_mvt_3',
      category: 'maison',
      scene: 'transit-bus',
      tense: 'Passé composé',
      subject: 'Nous (women speaking)',
      verb: 'arriver',
      verbEnglish: 'to arrive',
      complement: 'à la gare',
      complementEnglish: 'at the station',
      sentence: 'Nous sommes arrivées à la gare.',
      fullAudio: 'Nous sommes arrivées à la gare.',
      blocks: [
        { label: 'Sujet', val: 'Nous', cl: 'bg-blue-100 text-blue-900 border-blue-300' },
        { label: 'Être', val: 'sommes', cl: 'bg-purple-100 text-purple-900 border-purple-300' },
        { label: 'Participe', val: 'arrivé', cl: 'bg-emerald-100 text-emerald-900 border-emerald-300' },
        { label: 'Accord', val: '+es', cl: 'bg-amber-100 text-amber-900 border-amber-300' },
        { label: 'Complément', val: 'à la gare.', cl: 'bg-slate-100 text-slate-800 border-slate-200' }
      ],
      rubric: [
        { title: '1. Auxiliary', text: 'Used <b>sommes</b> (ÊTRE).', rule: 'Arriver is in La Maison d’Être.' },
        { title: '2. Participle', text: 'Formed <b>arrivé</b>.', rule: '-er → -é.' },
        { title: '3. Agreement Mirror', text: 'Added <b>+es</b> (arrivées).', rule: 'Female group saying "Nous" takes feminine plural +es.' }
      ]
    },
    {
      id: 'sc_mvt_4',
      category: 'maison',
      scene: 'chat-friends',
      tense: 'Passé composé',
      subject: 'Il (masc. sing.)',
      verb: 'sortir',
      verbEnglish: 'to go out / exit',
      complement: 'avec ses amis',
      complementEnglish: 'with his friends',
      sentence: 'Il est sorti avec ses amis.',
      fullAudio: 'Il est sorti avec ses amis.',
      blocks: [
        { label: 'Sujet', val: 'Il', cl: 'bg-blue-100 text-blue-900 border-blue-300' },
        { label: 'Être', val: 'est', cl: 'bg-purple-100 text-purple-900 border-purple-300' },
        { label: 'Participe', val: 'sorti', cl: 'bg-emerald-100 text-emerald-900 border-emerald-300' },
        { label: 'Accord', val: '—', cl: 'bg-slate-100 text-slate-500 border-slate-200' },
        { label: 'Complément', val: 'avec ses amis.', cl: 'bg-slate-100 text-slate-800 border-slate-200' }
      ],
      rubric: [
        { title: '1. Auxiliary', text: 'Used <b>est</b> (ÊTRE).', rule: 'Sortir is in La Maison d’Être (entrer / sortir).' },
        { title: '2. Participle', text: 'Formed <b>sorti</b>.', rule: '-ir → -i.' },
        { title: '3. Agreement Mirror', text: 'No change (masculine singular).', rule: 'Il est sorti.' }
      ]
    },

    // 3. AVOIR VERBS (THE ROCK: NO SUBJECT AGREEMENT!)
    {
      id: 'sc_avoir_1',
      category: 'avoir',
      scene: 'eat-before',
      tense: 'Passé composé',
      subject: 'Elle (fem. sing.)',
      verb: 'manger',
      verbEnglish: 'to eat',
      complement: 'une pomme',
      complementEnglish: 'an apple',
      sentence: 'Elle a mangé une pomme.',
      fullAudio: 'Elle a mangé une pomme.',
      blocks: [
        { label: 'Sujet', val: 'Elle', cl: 'bg-blue-100 text-blue-900 border-blue-300' },
        { label: 'Avoir', val: 'a', cl: 'bg-purple-100 text-purple-900 border-purple-300' },
        { label: 'Participe', val: 'mangé', cl: 'bg-emerald-100 text-emerald-900 border-emerald-300' },
        { label: 'Accord', val: '— (NONE!)', cl: 'bg-slate-100 text-slate-400 border-dashed border-slate-300' },
        { label: 'Objet', val: 'une pomme.', cl: 'bg-slate-100 text-slate-800 border-slate-200' }
      ],
      rubric: [
        { title: '1. Auxiliary', text: 'Used <b>a</b> (AVOIR).', rule: 'Standard verb (not reflexive, not Maison d’Être) → AVOIR!' },
        { title: '2. Participle', text: 'Formed <b>mangé</b>.', rule: '-er → -é.' },
        { title: '3. The Avoir Rule', text: '<b>ZERO AGREEMENT!</b>', rule: 'With Avoir, the participle is a rock: never add -e for the subject!' }
      ]
    },
    {
      id: 'sc_avoir_2',
      category: 'avoir',
      scene: 'finish-flag',
      tense: 'Passé composé',
      subject: 'Elles (fem. pl.)',
      verb: 'finir',
      verbEnglish: 'to finish',
      complement: 'leurs devoirs',
      complementEnglish: 'their homework',
      sentence: 'Elles ont fini leurs devoirs.',
      fullAudio: 'Elles ont fini leurs devoirs.',
      blocks: [
        { label: 'Sujet', val: 'Elles', cl: 'bg-blue-100 text-blue-900 border-blue-300' },
        { label: 'Avoir', val: 'ont', cl: 'bg-purple-100 text-purple-900 border-purple-300' },
        { label: 'Participe', val: 'fini', cl: 'bg-emerald-100 text-emerald-900 border-emerald-300' },
        { label: 'Accord', val: '— (NONE!)', cl: 'bg-slate-100 text-slate-400 border-dashed border-slate-300' },
        { label: 'Objet', val: 'leurs devoirs.', cl: 'bg-slate-100 text-slate-800 border-slate-200' }
      ],
      rubric: [
        { title: '1. Auxiliary', text: 'Used <b>ont</b> (AVOIR).', rule: 'Elles ont.' },
        { title: '2. Participle', text: 'Formed <b>fini</b>.', rule: '2e groupe (-ir) participle ends in -i.' },
        { title: '3. Trap Warning', text: 'Do <b>NOT</b> write "finies"!', rule: 'Because the auxiliary is Avoir, there is NO agreement with Elles!' }
      ]
    },
    {
      id: 'sc_avoir_3',
      category: 'avoir',
      scene: 'coffee',
      tense: 'Passé composé',
      subject: 'Nous',
      verb: 'prendre',
      verbEnglish: 'to have / take',
      complement: 'un café au bistro',
      complementEnglish: 'a coffee at the bistro',
      sentence: 'Nous avons pris un café au bistro.',
      fullAudio: 'Nous avons pris un café au bistro.',
      blocks: [
        { label: 'Sujet', val: 'Nous', cl: 'bg-blue-100 text-blue-900 border-blue-300' },
        { label: 'Avoir', val: 'avons', cl: 'bg-purple-100 text-purple-900 border-purple-300' },
        { label: 'Participe', val: 'pris', cl: 'bg-emerald-100 text-emerald-900 border-emerald-300' },
        { label: 'Accord', val: '— (NONE!)', cl: 'bg-slate-100 text-slate-400 border-dashed border-slate-300' },
        { label: 'Complément', val: 'un café au bistro.', cl: 'bg-slate-100 text-slate-800 border-slate-200' }
      ],
      rubric: [
        { title: '1. Auxiliary', text: 'Used <b>avons</b> (AVOIR).', rule: 'Prendre takes AVOIR.' },
        { title: '2. Irregular Participle', text: 'Used <b>pris</b> (-is family).', rule: 'prendre → pris (like apprendre → appris, mettre → mis).' },
        { title: '3. Agreement', text: 'No subject agreement.', rule: 'Fixed form: "pris".' }
      ]
    },
    {
      id: 'sc_avoir_4',
      category: 'avoir',
      scene: 'dishes',
      tense: 'Passé composé',
      subject: 'J’',
      verb: 'faire',
      verbEnglish: 'to do / make',
      complement: 'la vaisselle',
      complementEnglish: 'the dishes',
      sentence: 'J’ai fait la vaisselle.',
      fullAudio: 'J’ai fait la vaisselle.',
      blocks: [
        { label: 'Sujet', val: 'J’', cl: 'bg-blue-100 text-blue-900 border-blue-300' },
        { label: 'Avoir', val: 'ai', cl: 'bg-purple-100 text-purple-900 border-purple-300' },
        { label: 'Participe', val: 'fait', cl: 'bg-emerald-100 text-emerald-900 border-emerald-300' },
        { label: 'Accord', val: '—', cl: 'bg-slate-100 text-slate-400 border-dashed border-slate-300' },
        { label: 'Complément', val: 'la vaisselle.', cl: 'bg-slate-100 text-slate-800 border-slate-200' }
      ],
      rubric: [
        { title: '1. Auxiliary', text: 'Used <b>ai</b> (AVOIR).', rule: 'J’ai.' },
        { title: '2. Irregular Participle', text: 'Used <b>fait</b> (-it family).', rule: 'faire → fait (like dire → dit, écrire → écrit).' },
        { title: '3. Agreement', text: 'No agreement.', rule: 'Fixed form: "fait".' }
      ]
    },

    // 4. NEGATION IN COMPOUND TENSES (THE SANDWICH RULE)
    {
      id: 'sc_neg_1',
      category: 'negation',
      scene: 'wake',
      tense: 'Passé composé (NÉGATIF)',
      subject: 'Je (female speaker)',
      verb: 'se réveiller',
      verbEnglish: 'to wake up',
      complement: 'tôt ce matin',
      complementEnglish: 'early this morning',
      sentence: 'Je ne me suis pas réveillée tôt ce matin.',
      fullAudio: 'Je ne me suis pas réveillée tôt ce matin.',
      blocks: [
        { label: 'Sujet', val: 'Je', cl: 'bg-blue-100 text-blue-900 border-blue-300' },
        { label: 'Ne + Pronom + Être + Pas', val: 'ne me suis pas', cl: 'bg-rose-100 text-rose-900 border-rose-300 font-bold' },
        { label: 'Participe', val: 'réveillé', cl: 'bg-emerald-100 text-emerald-900 border-emerald-300' },
        { label: 'Accord', val: '+e', cl: 'bg-amber-100 text-amber-900 border-amber-300' },
        { label: 'Complément', val: 'tôt ce matin.', cl: 'bg-slate-100 text-slate-800 border-slate-200' }
      ],
      rubric: [
        { title: '1. The Negation Sandwich', text: 'Used <b>ne me suis pas</b>.', rule: 'In compound tenses, "ne ... pas" sandwiches the pronoun and auxiliary!' },
        { title: '2. Participle Placement', text: '<b>réveillée</b> goes AFTER "pas".', rule: 'Never say "ne me suis réveillée pas"!' },
        { title: '3. Agreement', text: 'Still added <b>+e</b> (réveillée).', rule: 'Negation does NOT remove the ÊTRE agreement.' }
      ]
    },
    {
      id: 'sc_neg_2',
      category: 'negation',
      scene: 'eat-now',
      tense: 'Passé composé (NÉGATIF)',
      subject: 'Elle',
      verb: 'manger',
      verbEnglish: 'to eat',
      complement: 'à midi',
      complementEnglish: 'at noon',
      sentence: 'Elle n’a pas mangé à midi.',
      fullAudio: 'Elle n’a pas mangé à midi.',
      blocks: [
        { label: 'Sujet', val: 'Elle', cl: 'bg-blue-100 text-blue-900 border-blue-300' },
        { label: 'N’ + Avoir + Pas', val: 'n’a pas', cl: 'bg-rose-100 text-rose-900 border-rose-300 font-bold' },
        { label: 'Participe', val: 'mangé', cl: 'bg-emerald-100 text-emerald-900 border-emerald-300' },
        { label: 'Accord', val: '—', cl: 'bg-slate-100 text-slate-400 border-dashed border-slate-300' },
        { label: 'Complément', val: 'à midi.', cl: 'bg-slate-100 text-slate-800 border-slate-200' }
      ],
      rubric: [
        { title: '1. Negation Sandwich', text: 'Used <b>n’a pas</b>.', rule: 'n’ + auxiliary + pas.' },
        { title: '2. Participle Placement', text: '<b>mangé</b> is outside the sandwich.', rule: 'Verb comes after "pas".' },
        { title: '3. Agreement', text: 'No agreement (Avoir).', rule: 'Fixed: "mangé".' }
      ]
    },

    // 5. OTHER TENSE CONTRASTS
    {
      id: 'sc_tenses_1',
      category: 'tenses',
      scene: 'eat-after',
      tense: 'Passé récent (venir de)',
      subject: 'Je',
      verb: 'se lever',
      verbEnglish: 'to get out of bed',
      complement: '(just now)',
      complementEnglish: 'I just got out of bed',
      sentence: 'Je viens de me lever.',
      fullAudio: 'Je viens de me lever.',
      blocks: [
        { label: 'Sujet', val: 'Je', cl: 'bg-blue-100 text-blue-900 border-blue-300' },
        { label: 'Venir de', val: 'viens de', cl: 'bg-indigo-100 text-indigo-900 border-indigo-300' },
        { label: 'Pronom + Infinitif', val: 'me lever', cl: 'bg-emerald-100 text-emerald-900 border-emerald-300 font-bold' },
        { label: 'Complément', val: '—', cl: 'bg-slate-100 text-slate-400 border-slate-200' }
      ],
      rubric: [
        { title: '1. Tense Structure', text: 'Used <b>venir de + infinitive</b>.', rule: 'Passé récent = venir (conjugated) + de + infinitive.' },
        { title: '2. Reflexive Pronoun', text: 'Kept <b>me</b> in front of the infinitive.', rule: 'Even with an infinitive, the pronoun matches the subject: "me lever"!' },
        { title: '3. No Participle', text: 'Used the infinitive <b>lever</b>.', rule: 'After "de", always use the raw infinitive.' }
      ]
    },
    {
      id: 'sc_tenses_2',
      category: 'tenses',
      scene: 'dress',
      tense: 'Présent continu (en train de)',
      subject: 'Elle',
      verb: 'se préparer',
      verbEnglish: 'to get ready',
      complement: 'dans sa chambre',
      complementEnglish: 'in her room',
      sentence: 'Elle est en train de se préparer dans sa chambre.',
      fullAudio: 'Elle est en train de se préparer dans sa chambre.',
      blocks: [
        { label: 'Sujet', val: 'Elle', cl: 'bg-blue-100 text-blue-900 border-blue-300' },
        { label: 'Être en train de', val: 'est en train de', cl: 'bg-indigo-100 text-indigo-900 border-indigo-300' },
        { label: 'Pronom + Infinitif', val: 'se préparer', cl: 'bg-emerald-100 text-emerald-900 border-emerald-300 font-bold' },
        { label: 'Complément', val: 'dans sa chambre.', cl: 'bg-slate-100 text-slate-800 border-slate-200' }
      ],
      rubric: [
        { title: '1. Continuous Formula', text: 'Used <b>est en train de</b>.', rule: 'Subject + être + en train de.' },
        { title: '2. Reflexive Pronoun', text: 'Used <b>se préparer</b>.', rule: 'Pronoun "se" attaches to the infinitive.' },
        { title: '3. Meaning', text: 'Action happening right now at this exact second.', rule: 'She is in the middle of getting ready.' }
      ]
    },
    {
      id: 'sc_tenses_3',
      category: 'tenses',
      scene: 'bedtime',
      tense: 'Futur proche (aller + inf)',
      subject: 'Nous',
      verb: 'se coucher',
      verbEnglish: 'to go to bed',
      complement: 'bientôt',
      complementEnglish: 'soon',
      sentence: 'Nous allons nous coucher bientôt.',
      fullAudio: 'Nous allons nous coucher bientôt.',
      blocks: [
        { label: 'Sujet', val: 'Nous', cl: 'bg-blue-100 text-blue-900 border-blue-300' },
        { label: 'Aller', val: 'allons', cl: 'bg-indigo-100 text-indigo-900 border-indigo-300' },
        { label: 'Pronom + Infinitif', val: 'nous coucher', cl: 'bg-emerald-100 text-emerald-900 border-emerald-300 font-bold' },
        { label: 'Complément', val: 'bientôt.', cl: 'bg-slate-100 text-slate-800 border-slate-200' }
      ],
      rubric: [
        { title: '1. Future Formula', text: 'Used <b>aller + infinitive</b>.', rule: 'Nous allons + verb.' },
        { title: '2. Double Pronoun Trap', text: 'Used <b>nous nous coucher</b>.', rule: 'The reflexive pronoun "nous" must still be used before "coucher"!' },
        { title: '3. Spoken Rhythm', text: 'Smooth flow without pause.', rule: 'Nous‿allons nous coucher.' }
      ]
    }
  ];

  let currentCategory = 'all';
  let queue = [];
  let currentIndex = 0;
  let revealed = false;
  let userDraft = '';
  let roundScore = { total: 0, fast: 0, hesitant: 0, missed: 0 };

  function initQueue() {
    let pool = challenges;
    if (currentCategory !== 'all') {
      pool = challenges.filter(c => c.category === currentCategory);
    }
    // Shuffle pool
    queue = [...pool].sort(() => Math.random() - 0.5);
    currentIndex = 0;
    revealed = false;
    userDraft = '';
  }

  function currentItem() {
    if (!queue.length) initQueue();
    return queue[currentIndex % queue.length];
  }

  function filterByCategory(catId) {
    currentCategory = catId;
    initQueue();
    if (typeof window.render === 'function') window.render();
  }

  function reveal() {
    revealed = true;
    if (typeof window.render === 'function') window.render();
  }

  function rate(grade) {
    const item = currentItem();
    roundScore.total++;
    if (grade === 'fast') roundScore.fast++;
    else if (grade === 'hesitant') roundScore.hesitant++;
    else {
      roundScore.missed++;
      // Re-insert missed item 3 positions later so user masters it
      queue.splice(Math.min(currentIndex + 3, queue.length), 0, item);
    }

    currentIndex++;
    revealed = false;
    userDraft = '';
    if (typeof window.render === 'function') window.render();
  }

  function restart() {
    roundScore = { total: 0, fast: 0, hesitant: 0, missed: 0 };
    initQueue();
    if (typeof window.render === 'function') window.render();
  }

  function page() {
    if (!queue.length) initQueue();
    const item = currentItem();
    const itemIndex = (currentIndex % queue.length) + 1;
    const totalCount = queue.length;

    return `
      <div class="challenge-container" style="max-width: 680px; margin: 0 auto;">
        <!-- Header -->
        <div class="section-head" style="margin-top: 4px; margin-bottom: 12px;">
          <div>
            <div class="eyebrow" style="color: var(--purple-dark, #515097)">PRODUCTION CHALLENGE · OPTION 2</div>
            <h1 style="font-size: 26px; margin-bottom: 4px;">Build & Speak the Full Sentence.</h1>
            <p class="small muted" style="margin: 0;">Say the complete French sentence aloud from the raw prompt, then audit the 3 structural rules.</p>
          </div>
        </div>

        <!-- Filter Chips -->
        <div class="tabline" style="margin-bottom: 16px; overflow-x: auto; padding-bottom: 4px; gap: 6px;">
          ${categories.map(c => `
            <button class="chip ${currentCategory === c.id ? 'active' : ''}" 
                    type="button" 
                    data-challenge-filter="${c.id}" 
                    style="white-space: nowrap; font-size: 12px; padding: 6px 12px;">
              ${c.label}
            </button>
          `).join('')}
        </div>

        <!-- Challenge Card -->
        <div class="panel hover-card" style="padding: 20px; border-radius: 20px; background: #fff; box-shadow: 0 4px 18px rgba(0,0,0,0.03);">
          
          <!-- Card Top Bar -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; gap: 8px;">
            <span class="mini-step" style="background: #f3f0fb; color: #5d4ea8; font-weight: 700;">
              ${esc(item.tense.toUpperCase())}
            </span>
            <span class="small muted" style="font-weight: 600;">Challenge ${itemIndex} / ${totalCount}</span>
          </div>

          <!-- Prompt Box (The Raw Building Blocks) -->
          <div style="background: #fbfaf8; border: 1.5px solid #ece7f6; border-radius: 16px; padding: 18px; margin-bottom: 18px;">
            <div class="small muted" style="text-transform: uppercase; letter-spacing: 0.6px; font-weight: 700; margin-bottom: 10px; color: #7a7593;">
              🎯 Your Target Building Blocks:
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 10px; margin-bottom: 14px;">
              <div style="background: #eff6ff; border: 1px solid #bfdbfe; padding: 10px 12px; border-radius: 12px;">
                <div style="font-size: 11px; text-transform: uppercase; font-weight: 700; color: #1e40af;">👤 Subject</div>
                <div style="font-size: 15px; font-weight: 700; color: #1e3a8a; margin-top: 2px;">${esc(item.subject)}</div>
              </div>

              <div style="background: #f5f3ff; border: 1px solid #ddd6fe; padding: 10px 12px; border-radius: 12px;">
                <div style="font-size: 11px; text-transform: uppercase; font-weight: 700; color: #6d28d9;">⚡ Action Verb</div>
                <div style="font-size: 15px; font-weight: 700; color: #4c1d95; margin-top: 2px;">${esc(item.verb)}</div>
                <div style="font-size: 11px; color: #7c3aed;">(${esc(item.verbEnglish)})</div>
              </div>

              <div style="background: #ecfdf5; border: 1px solid #a7f3d0; padding: 10px 12px; border-radius: 12px;">
                <div style="font-size: 11px; text-transform: uppercase; font-weight: 700; color: #047857;">📍 Context</div>
                <div style="font-size: 14px; font-weight: 700; color: #065f46; margin-top: 2px;">${esc(item.complement)}</div>
                <div style="font-size: 11px; color: #059669;">(${esc(item.complementEnglish)})</div>
              </div>
            </div>

            <!-- Active Speaking Prompt -->
            <div style="padding: 12px 14px; background: #fff; border: 1px dashed #d4cee4; border-radius: 12px; text-align: center;">
              <div style="font-size: 14px; font-weight: 700; color: #2d264b;">
                🎙️ Say the complete French sentence aloud now!
              </div>
              <div class="small muted" style="margin-top: 2px;">
                Combine subject, auxiliary, participle, and agreement in your mind before checking.
              </div>
            </div>

            <!-- Optional draft typing field -->
            <div style="margin-top: 12px;">
              <input type="text" 
                     id="challenge-draft-input" 
                     class="input" 
                     placeholder="Optional: draft here if you want to test your spelling..." 
                     value="${esc(userDraft)}" 
                     style="font-size: 14px; background: #fff;"
                     autocomplete="off"
                     autocapitalize="off" />
            </div>
          </div>

          <!-- Unrevealed State: Check Button -->
          ${!revealed ? `
            <div style="text-align: center; margin-top: 16px;">
              <button class="btn btn-primary btn-lg btn-block" type="button" data-challenge-action="reveal" style="font-size: 16px;">
                👁️ Check Sentence & Structural Rubric
              </button>
            </div>
          ` : `
            <!-- REVEALED STATE: 3-POINT AUDIT & SELF-CHECK -->
            <div class="revealed-section" style="animation: fadeIn 0.25s ease;">
              
              <!-- Correct French Answer Bar -->
              <div style="background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 16px; padding: 16px; margin-bottom: 16px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                  <span class="small muted" style="font-weight: 700; text-transform: uppercase; color: #64748b;">Correct Spoken French</span>
                  <div style="display: flex; gap: 6px;">
                    <button class="btn btn-secondary btn-sm" type="button" data-say="${esc(item.fullAudio)}">
                      🔊 Listen
                    </button>
                    <button class="btn btn-secondary btn-sm slow-btn" type="button" data-say-slow="${esc(item.fullAudio)}">
                      🐢 0.6x Slow
                    </button>
                  </div>
                </div>
                <div style="font-size: 20px; font-weight: 800; color: #1e1b4b; letter-spacing: -0.3px;">
                  ${esc(item.sentence)}
                </div>
              </div>

              <!-- Color-coded Formula Slots -->
              <div style="margin-bottom: 16px;">
                <div class="small muted" style="text-transform: uppercase; font-weight: 700; margin-bottom: 6px; font-size: 11px; color: #64748b;">
                  Formula Anatomy Breakdown:
                </div>
                <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                  ${item.blocks.map(b => `
                    <div style="padding: 6px 10px; border-radius: 10px; text-align: center; border: 1px solid #e2e8f0; background: #fff;" class="${b.cl}">
                      <div style="font-size: 9px; font-weight: 800; text-transform: uppercase; opacity: 0.8;">${esc(b.label)}</div>
                      <div style="font-size: 14px; font-weight: 700; margin-top: 1px;">${esc(b.val)}</div>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- 3-Point Structural Rubric Checklist -->
              <div style="background: #fffbeb; border: 1px solid #fef3c7; border-radius: 16px; padding: 14px 16px; margin-bottom: 18px;">
                <div style="font-weight: 800; font-size: 13px; color: #92400e; margin-bottom: 10px; display: flex; align-items: center; gap: 6px;">
                  <span>🔍</span> 3-Point Self-Check Audit: Did your brain catch each rule?
                </div>

                <div style="display: grid; gap: 8px;">
                  ${item.rubric.map(r => `
                    <div style="background: #fff; border: 1px solid #fde68a; padding: 8px 12px; border-radius: 10px; font-size: 13px;">
                      <div style="font-weight: 700; color: #78350f;">${r.title}</div>
                      <div style="color: #1f2937; margin-top: 2px;">${r.text}</div>
                      <div style="font-size: 11.5px; color: #b45309; margin-top: 3px;">💡 <i>${r.rule}</i></div>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Self-Rating Prompt -->
              <div style="text-align: center; margin-bottom: 8px;">
                <div class="small muted" style="font-weight: 700; margin-bottom: 8px;">
                  Be honest: how did you do constructing this sentence?
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px;">
                  <button class="btn btn-danger btn-sm" type="button" data-challenge-rate="missed" style="padding: 12px 6px;">
                    🔴 Missed a Rule
                  </button>
                  <button class="btn btn-secondary btn-sm" type="button" data-challenge-rate="hesitant" style="padding: 12px 6px;">
                    🟡 Hesitated
                  </button>
                  <button class="btn btn-primary btn-sm" type="button" data-challenge-rate="fast" style="padding: 12px 6px; background: #059669; border-color: #059669;">
                    🟢 Fast & Flawless
                  </button>
                </div>
              </div>

            </div>
          `}

        </div>

        <!-- Session Progress Bar / Scoreboard -->
        <div style="margin-top: 14px; display: flex; justify-content: space-between; align-items: center; padding: 0 4px;">
          <div class="small muted">
            Session: <b>${roundScore.total}</b> completed 
            (${roundScore.fast} 🟢, ${roundScore.hesitant} 🟡, ${roundScore.missed} 🔴)
          </div>
          <button class="link small" type="button" data-challenge-action="restart" style="color: #64748b;">
            Restart Queue
          </button>
        </div>
      </div>
    `;
  }

  // Delegated click listener for challenge actions
  document.addEventListener('click', function (e) {
    const el = e.target.closest('button');
    if (!el) return;

    if (el.dataset.challengeFilter) {
      filterByCategory(el.dataset.challengeFilter);
      return;
    }

    if (el.dataset.challengeAction === 'reveal') {
      const input = document.getElementById('challenge-draft-input');
      if (input) userDraft = input.value;
      reveal();
      return;
    }

    if (el.dataset.challengeAction === 'restart') {
      restart();
      return;
    }

    if (el.dataset.challengeRate) {
      rate(el.dataset.challengeRate);
      return;
    }
  });

  // Track draft input
  document.addEventListener('input', function (e) {
    if (e.target.id === 'challenge-draft-input') {
      userDraft = e.target.value;
    }
  });

  return {
    page,
    filterByCategory,
    reveal,
    rate,
    restart
  };
})();
