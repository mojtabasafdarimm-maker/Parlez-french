const CHALLENGES = [
  // 1. Reflexive Verbs in Passé Composé (ÊTRE)
  {
    id: 'refl_lever_fem',
    topic: 'reflexive',
    structureId: 'reflexive',
    topicLabel: 'Passé Composé · Verbe Réflexif',
    scene: 'rise',
    english: 'She got up early this morning.',
    targetWords: ['Elle', 's’est', 'levée', 'tôt', 'ce', 'matin'],
    fullSentence: 'Elle s’est levée tôt ce matin.',
    distractors: [
      { word: 'a', trap: 'auxiliary', tip: 'Auxiliary Error: Reflexive verbs always take ÊTRE (est), never AVOIR (a)!' },
      { word: 'levé', trap: 'agreement', tip: 'Agreement Error: "Elle" is feminine singular, so ÊTRE reflects +e (levée)!' },
      { word: 'se', trap: 'elision', tip: 'Elision Error: "se" becomes "s’" before a vowel (s’est)!' }
    ],
    rule: 'All reflexive verbs use ÊTRE in the passé composé and agree with the subject in gender (+e) and number (+s).'
  },
  {
    id: 'refl_doucher_tu',
    topic: 'reflexive',
    structureId: 'reflexive',
    topicLabel: 'Passé Composé · Verbe Réflexif',
    scene: 'shower',
    english: 'Did you shower yesterday evening? (to a female friend)',
    targetWords: ['Tu', 't’es', 'douchée', 'hier', 'soir', '?'],
    fullSentence: 'Tu t’es douchée hier soir ?',
    distractors: [
      { word: 'as', trap: 'auxiliary', tip: 'Auxiliary Error: Reflexive verbs use ÊTRE (t’es), not AVOIR (tu as)!' },
      { word: 'douché', trap: 'agreement', tip: 'Agreement Error: When speaking to a female, ÊTRE reflects feminine +e (douchée)!' }
    ],
    rule: 'In questions with reflexive verbs, te + es becomes t’es, and the participle agrees with the listener (+e for female).'
  },
  {
    id: 'refl_negation_reveiller',
    topic: 'reflexive',
    structureId: 'reflexive',
    topicLabel: 'Négation & Verbe Réflexif',
    scene: 'wake',
    english: 'I did not wake up on time.',
    targetWords: ['Je', 'ne', 'me', 'suis', 'pas', 'réveillé', 'à', 'l’heure'],
    fullSentence: 'Je ne me suis pas réveillé à l’heure.',
    distractors: [
      { word: 'ai', trap: 'auxiliary', tip: 'Auxiliary Error: "se réveiller" uses ÊTRE (suis), never AVOIR (ai)!' },
      { word: 'me ne', trap: 'word_order', tip: 'Word Order Error: "ne" must be placed BEFORE the reflexive pronoun ("ne me suis pas")!' }
    ],
    rule: 'Reflexive negation formula: Sujet + ne + me/te/se + être + pas + participe.'
  },
  {
    id: 'refl_souvenir_vous',
    topic: 'reflexive',
    structureId: 'reflexive',
    topicLabel: 'Passé Composé · Se souvenir de',
    scene: 'past-remember-person',
    english: 'Did you remember me?',
    targetWords: ['Vous', 'vous', 'êtes', 'souvenu', 'de', 'moi', '?'],
    fullSentence: 'Vous vous êtes souvenu de moi ?',
    distractors: [
      { word: 'avez', trap: 'auxiliary', tip: 'Auxiliary Error: "se souvenir" is reflexive, so it uses ÊTRE (êtes), not AVOIR (avez)!' },
      { word: 'à', trap: 'preposition', tip: 'Preposition Error: We say "se souvenir DE quelqu’un", never "à quelqu’un"!' }
    ],
    rule: 'Se souvenir conjugates like venir (souvenu) and always takes the preposition "de" (souvenu de moi).'
  },
  {
    id: 'refl_souvenir_moi_tu',
    topic: 'reflexive',
    structureId: 'reflexive',
    topicLabel: 'Passé Composé · Se souvenir de',
    scene: 'past-remember-person',
    english: 'You remembered me. (to a male friend)',
    targetWords: ['Tu', 't’es', 'souvenu', 'de', 'moi'],
    fullSentence: 'Tu t’es souvenu de moi.',
    distractors: [
      { word: 'as', trap: 'auxiliary', tip: 'Auxiliary Error: "se souvenir" uses ÊTRE (t’es), not AVOIR (tu as)!' },
      { word: 'pour', trap: 'preposition', tip: 'Preposition Error: The fixed construction is "se souvenir DE", never "pour"!' }
    ],
    rule: 'PDF A1.3 page 194 : Tu t’es souvenu(e) de moi.'
  },
  {
    id: 'refl_invariable_cheveux',
    topic: 'reflexive',
    structureId: 'reflexive',
    topicLabel: 'Accord Réflexif (Piège Objet)',
    scene: 'se-faire-hair-nails',
    english: 'She cut her hair herself.',
    targetWords: ['Elle', 's’est', 'coupé', 'les', 'cheveux'],
    fullSentence: 'Elle s’est coupé les cheveux.',
    distractors: [
      { word: 'coupée', trap: 'agreement', tip: 'Trap Alert! When the body part / direct object ("les cheveux") follows the verb, the participle does NOT agree (+e is wrong here)!' },
      { word: 'a', trap: 'auxiliary', tip: 'Auxiliary Error: "se couper" is reflexive, so it uses ÊTRE (est)!' }
    ],
    rule: 'If a direct object (les cheveux, les mains) is placed AFTER a reflexive verb, the participle remains invariable (coupé, not coupée).'
  },
  {
    id: 'refl_rendre_compte',
    topic: 'reflexive',
    structureId: 'reflexive',
    topicLabel: 'Verbe Invariable · Se rendre compte',
    scene: 'past-mistake-realize',
    english: 'She realized her mistake.',
    targetWords: ['Elle', 's’est', 'rendu', 'compte', 'de', 'son', 'erreur'],
    fullSentence: 'Elle s’est rendu compte de son erreur.',
    distractors: [
      { word: 'rendue', trap: 'agreement', tip: 'Invariable Trap! In "se rendre compte", "compte" is the direct object following rendre, so "rendu" is ALWAYS invariable (never rendue)!' },
      { word: 'a', trap: 'auxiliary', tip: 'Auxiliary Error: Reflexive verbs always take ÊTRE (est)!' }
    ],
    rule: 'PDF A1.3 page 214 : "Elle s’est rendu compte" (rendu reste toujours invariable).'
  },
  {
    id: 'refl_amuser_fem',
    topic: 'reflexive',
    structureId: 'reflexive',
    topicLabel: 'Passé Composé · S’amuser',
    scene: 'past-fun-vs-bored',
    english: 'I had a really good time at the party. (female speaker)',
    targetWords: ['Je', 'me', 'suis', 'bien', 'amusée', 'à', 'la', 'fête'],
    fullSentence: 'Je me suis bien amusée à la fête.',
    distractors: [
      { word: 'amusé', trap: 'agreement', tip: 'Agreement Error: Female speaker with ÊTRE requires feminine agreement +e (amusée)!' },
      { word: 'ai', trap: 'auxiliary', tip: 'Auxiliary Error: "s’amuser" uses ÊTRE (suis), not AVOIR (ai)!' }
    ],
    rule: 'PDF A1.3 page 202 : "Je me suis bien amusée."'
  },
  {
    id: 'refl_tromper_numero',
    topic: 'reflexive',
    structureId: 'reflexive',
    topicLabel: 'Passé Composé · Se tromper',
    scene: 'past-mistake-realize',
    english: 'I dialed the wrong phone number.',
    targetWords: ['Je', 'me', 'suis', 'trompé', 'de', 'numéro'],
    fullSentence: 'Je me suis trompé de numéro.',
    distractors: [
      { word: 'ai', trap: 'auxiliary', tip: 'Auxiliary Error: "se tromper" uses ÊTRE (suis), never AVOIR (ai)!' },
      { word: 'du', trap: 'preposition', tip: 'Preposition Error: The fixed idiom is "se tromper de + nom" (de numéro), not "du"!' }
    ],
    rule: 'Se tromper de + nom (se tromper de numéro, de train, d’adresse).'
  },

  // 2. Maison d'Être & Movement Verbs (DR MRS VANDERTRAMP)
  {
    id: 'maison_arriver_dix_heures',
    topic: 'maison',
    structureId: 'maison',
    topicLabel: 'Passé Composé · Arriver (Être)',
    scene: 'clock-230',
    english: 'The girl arrived at ten o’clock.',
    targetWords: ['La', 'fille', 'est', 'arrivée', 'à', 'dix', 'heures'],
    fullSentence: 'La fille est arrivée à dix heures.',
    distractors: [
      { word: 'a', trap: 'auxiliary', tip: 'Auxiliary Error: "arriver" is a movement verb and always takes ÊTRE (est), not AVOIR (a)!' },
      { word: 'arrivé', trap: 'agreement', tip: 'Agreement Error: "La fille" is feminine singular, so ÊTRE requires +e (arrivée)!' }
    ],
    rule: 'PDF A1.3 page 148 : "La fille est arrivée à dix heures."'
  },
  {
    id: 'maison_enfants_partis',
    topic: 'maison',
    structureId: 'maison',
    topicLabel: 'Passé Composé · Partir (Être)',
    scene: 'chat-friends',
    english: 'The children have already left on vacation.',
    targetWords: ['Les', 'enfants', 'sont', 'déjà', 'partis', 'en', 'vacances'],
    fullSentence: 'Les enfants sont déjà partis en vacances.',
    distractors: [
      { word: 'ont', trap: 'auxiliary', tip: 'Auxiliary Error: "partir" is a DR MRS VANDERTRAMP verb and takes ÊTRE (sont), not AVOIR (ont)!' },
      { word: 'parti', trap: 'agreement', tip: 'Agreement Error: "Les enfants" is masculine plural, requiring +s (partis)!' }
    ],
    rule: 'PDF A1.3 page 150 : "Les enfants sont déjà partis en vacances."'
  },
  {
    id: 'maison_nee_1970',
    topic: 'maison',
    structureId: 'maison',
    topicLabel: 'Passé Composé · Naître (Être)',
    scene: 'feel-tired',
    english: 'Were you born in 1970? (to a female)',
    targetWords: ['Tu', 'es', 'née', 'en', '1970', '?'],
    fullSentence: 'Tu es née en 1970 ?',
    distractors: [
      { word: 'as', trap: 'auxiliary', tip: 'Auxiliary Error: "naître" takes ÊTRE (tu es), never AVOIR (tu as)!' },
      { word: 'né', trap: 'agreement', tip: 'Agreement Error: When addressing a female, the participle takes +e (née)!' }
    ],
    rule: 'PDF A1.3 page 152 : "Tu es née en 1970 ?"'
  },
  {
    id: 'maison_entres_porte',
    topic: 'maison',
    structureId: 'maison',
    topicLabel: 'Passé Composé · Entrer (Être)',
    scene: 'bldg-elevator',
    english: 'We entered through the main door.',
    targetWords: ['Nous', 'sommes', 'entrés', 'par', 'la', 'porte', 'principale'],
    fullSentence: 'Nous sommes entrés par la porte principale.',
    distractors: [
      { word: 'avons', trap: 'auxiliary', tip: 'Auxiliary Error: "entrer" takes ÊTRE (sommes), not AVOIR (avons)!' },
      { word: 'entré', trap: 'agreement', tip: 'Agreement Error: "Nous" is plural, requiring plural agreement +s (entrés)!' }
    ],
    rule: 'PDF A1.3 page 154 : "Nous sommes entrés par la porte principale."'
  },
  {
    id: 'maison_restees_hier',
    topic: 'maison',
    structureId: 'maison',
    topicLabel: 'Passé Composé · Rester (Être)',
    scene: 'chat-friends',
    english: 'Did you stay at your place yesterday evening? (to females)',
    targetWords: ['Vous', 'êtes', 'restées', 'chez', 'vous', 'hier', 'soir', '?'],
    fullSentence: 'Vous êtes restées chez vous hier soir ?',
    distractors: [
      { word: 'avez', trap: 'auxiliary', tip: 'Auxiliary Error: "rester" takes ÊTRE (êtes), not AVOIR (avez)!' },
      { word: 'resté', trap: 'agreement', tip: 'Agreement Error: Plural feminine subjects take +es (restées)!' }
    ],
    rule: 'PDF A1.3 page 156 : "Vous êtes restées chez vous hier soir ?"'
  },
  {
    id: 'maison_sarah_rentree',
    topic: 'maison',
    structureId: 'maison',
    topicLabel: 'Passé Composé · Rentrer (Être)',
    scene: 'clock-230',
    english: 'Yesterday evening, Sarah came home late.',
    targetWords: ['Hier', 'soir', 'Sarah', 'est', 'rentrée', 'tard'],
    fullSentence: 'Hier soir, Sarah est rentrée tard.',
    distractors: [
      { word: 'a', trap: 'auxiliary', tip: 'Auxiliary Error: "rentrer" takes ÊTRE (est), not AVOIR (a)!' },
      { word: 'rentré', trap: 'agreement', tip: 'Agreement Error: Sarah is feminine singular ➜ rentrée (+e)!' }
    ],
    rule: 'PDF A1.3 page 168 : "Hier soir, Sarah est rentrée tard."'
  },
  {
    id: 'maison_tomber_amoureuse',
    topic: 'maison',
    structureId: 'maison',
    topicLabel: 'Passé Composé · Tomber amoureux',
    scene: 'blush-face',
    english: 'I fell in love with Paris. (female speaker)',
    targetWords: ['Je', 'suis', 'tombée', 'amoureuse', 'de', 'Paris'],
    fullSentence: 'Je suis tombée amoureuse de Paris.',
    distractors: [
      { word: 'ai', trap: 'auxiliary', tip: 'Auxiliary Error: "tomber" uses ÊTRE (suis), not AVOIR (ai)!' },
      { word: 'tombé', trap: 'agreement', tip: 'Agreement Error: Female speaker with ÊTRE agrees with +e (tombée)!' }
    ],
    rule: 'PDF A1.3 page 131 : "Je suis tombée amoureuse (tomber amoureux / amoureuse)."'
  },
  {
    id: 'maison_parapluie_sortir',
    topic: 'maison',
    structureId: 'maison',
    topicLabel: 'Avoir vs Être Combinés',
    scene: 'past-rain-coat',
    english: 'He took his umbrella and he went out.',
    targetWords: ['Il', 'a', 'pris', 'son', 'parapluie', 'et', 'il', 'est', 'sorti'],
    fullSentence: 'Il a pris son parapluie et il est sorti.',
    distractors: [
      { word: 'est pris', trap: 'auxiliary', tip: 'Auxiliary Error: "prendre" takes AVOIR (a pris), never ÊTRE!' },
      { word: 'a sorti', trap: 'auxiliary', tip: 'Auxiliary Error: Movement "sortir" takes ÊTRE (est sorti), not AVOIR!' }
    ],
    rule: 'PDF A1.3 page 164 : "Il a pris son parapluie et il est sorti."'
  },

  // 3. Se faire + Infinitif (Causative & Passive)
  {
    id: 'sefaire_cheveux_pc',
    topic: 'se_faire',
    structureId: 'se_faire',
    topicLabel: 'Se faire + Infinitif · Cheveux',
    scene: 'se-faire-hair-nails',
    english: 'I got my hair cut.',
    targetWords: ['Je', 'me', 'suis', 'fait', 'couper', 'les', 'cheveux'],
    fullSentence: 'Je me suis fait couper les cheveux.',
    distractors: [
      { word: 'faite', trap: 'agreement', tip: 'Invariable Participle Trap! In "se faire + infinitif", the participle FAIT is ALWAYS invariable (never faite)!' },
      { word: 'ai', trap: 'auxiliary', tip: 'Auxiliary Error: Reflexive "se faire" takes ÊTRE (suis), not AVOIR (ai)!' }
    ],
    rule: 'PDF A1.3 page 225 : "Je me suis fait couper les cheveux !" (fait est invariable).'
  },
  {
    id: 'sefaire_ongles_present',
    topic: 'se_faire',
    structureId: 'se_faire',
    topicLabel: 'Se faire + Infinitif · Ongles',
    scene: 'se-faire-hair-nails',
    english: 'Hello, I am here to get my nails done.',
    targetWords: ['Bonjour', 'je', 'suis', 'là', 'pour', 'me', 'faire', 'faire', 'les', 'ongles'],
    fullSentence: 'Bonjour je suis là pour me faire faire les ongles.',
    distractors: [
      { word: 'pour faire', trap: 'structure', tip: 'Causative Error: "se faire faire" expresses having someone else do your nails!' },
      { word: 'fais', trap: 'infinitive', tip: 'Grammar Error: After preposition "pour", the verb must be in the infinitive (faire)!' }
    ],
    rule: 'PDF A1.3 page 224 : "Bonjour je suis là pour me faire faire les ongles."'
  },
  {
    id: 'sefaire_rembourser_pc',
    topic: 'se_faire',
    structureId: 'se_faire',
    topicLabel: 'Se faire + Infinitif · Rembourser',
    scene: 'se-faire-stolen',
    english: 'I got my train ticket refunded.',
    targetWords: ['Je', 'me', 'suis', 'fait', 'rembourser', 'mon', 'billet'],
    fullSentence: 'Je me suis fait rembourser mon billet.',
    distractors: [
      { word: 'faite', trap: 'agreement', tip: 'Invariable Participle Trap! "fait" remains invariable before an infinitive!' },
      { word: 'ai', trap: 'auxiliary', tip: 'Auxiliary Error: Reflexive verbs always take ÊTRE (suis)!' }
    ],
    rule: 'PDF A1.3 page 228 : "Se faire rembourser ➜ Je me suis fait rembourser."'
  },
  {
    id: 'sefaire_larguer_pc',
    topic: 'se_faire',
    structureId: 'se_faire',
    topicLabel: 'Se faire + Infinitif · Rupture',
    scene: 'se-faire-fired-dumped',
    english: 'He got dumped by Marie.',
    targetWords: ['Il', 's’est', 'fait', 'larguer', 'par', 'Marie'],
    fullSentence: 'Il s’est fait larguer par Marie.',
    distractors: [
      { word: 'a', trap: 'auxiliary', tip: 'Auxiliary Error: Reflexive structure takes ÊTRE (s’est), not AVOIR (a)!' },
      { word: 'faite', trap: 'agreement', tip: 'Invariable Trap: "fait" does not agree!' }
    ],
    rule: 'PDF A1.3 page 230 : "Il s’est fait larguer par Marie."'
  },
  {
    id: 'sefaire_virer_pc',
    topic: 'se_faire',
    structureId: 'se_faire',
    topicLabel: 'Se faire + Infinitif · Travail',
    scene: 'se-faire-fired-dumped',
    english: 'The manager got fired from the company.',
    targetWords: ['Le', 'directeur', 's’est', 'fait', 'virer', 'de', 'l’entreprise'],
    fullSentence: 'Le director s’est fait virer de l’entreprise.',
    distractors: [
      { word: 'a', trap: 'auxiliary', tip: 'Auxiliary Error: Reflexive takes ÊTRE (s’est)!' },
      { word: 'faite', trap: 'agreement', tip: 'Invariable Trap: "fait" is strictly invariable in se faire + infinitif!' }
    ],
    rule: 'PDF A1.3 page 219 : "Le directeur corrompu s’est fait virer de l’entreprise."'
  },
  {
    id: 'sefaire_operer_genoux',
    topic: 'se_faire',
    structureId: 'se_faire',
    topicLabel: 'Se faire + Infinitif · Santé',
    scene: 'se-faire-doctor-tooth',
    english: 'He had his knees operated on three years ago.',
    targetWords: ['Il', 's’est', 'fait', 'opérer', 'les', 'genoux', 'il', 'y', 'a', 'trois', 'ans'],
    fullSentence: 'Il s’est fait opérer les genoux il y a trois ans.',
    distractors: [
      { word: 'faits', trap: 'agreement', tip: 'Invariable Trap: Even with plural object "les genoux", "fait" remains invariable!' },
      { word: 'a', trap: 'auxiliary', tip: 'Auxiliary Error: Takes ÊTRE (s’est)!' }
    ],
    rule: 'PDF A1.3 page 232 : "Il s’est fait opérer les genoux il y a 3 ans."'
  },
  {
    id: 'sefaire_arracher_dent',
    topic: 'se_faire',
    structureId: 'se_faire',
    topicLabel: 'Se faire + Infinitif · Dentiste',
    scene: 'se-faire-doctor-tooth',
    english: 'She had her wisdom tooth pulled out.',
    targetWords: ['Elle', 's’est', 'fait', 'arracher', 'la', 'dent', 'de', 'sagesse'],
    fullSentence: 'Elle s’est fait arracher la dent de sagesse.',
    distractors: [
      { word: 'faite', trap: 'agreement', tip: 'Invariable Trap: Even though "Elle" and "la dent" are feminine, "fait" remains invariable!' },
      { word: 'a', trap: 'auxiliary', tip: 'Auxiliary Error: Reflexive verbs use ÊTRE (s’est)!' }
    ],
    rule: 'PDF A1.3 page 234 : "Elle s’est fait arracher la dent de sagesse."'
  },

  // 4. Négation Restrictive: Ne ... que (Only / Just)
  {
    id: 'neque_dormir_3h',
    topic: 'neque',
    structureId: 'neque',
    topicLabel: 'Négation Restrictive · Ne ... que',
    scene: 'past-sleep-in-11',
    english: 'I only sleep three hours per night.',
    targetWords: ['Je', 'ne', 'dors', 'que', 'trois', 'heures', 'par', 'nuit'],
    fullSentence: 'Je ne dors que trois heures par nuit.',
    distractors: [
      { word: 'pas', trap: 'negation', tip: 'Restriction Error: Do NOT use "pas" with "ne... que"! "ne... que" means only/just.' },
      { word: 'seulement', trap: 'redundancy', tip: 'Style Error: "ne... que" already means "seulement". Do not combine them.' }
    ],
    rule: 'PDF A1.3 page 239 : "Ne .. Que ➜ je ne dors que 3h ➜ I just sleep 3 hours."'
  },
  {
    id: 'neque_travailler_3j',
    topic: 'neque',
    structureId: 'neque',
    topicLabel: 'Négation Restrictive · Ne ... que',
    scene: 'work',
    english: 'She only works three days a week.',
    targetWords: ['Elle', 'ne', 'travaille', 'que', 'trois', 'jours', 'par', 'semaine'],
    fullSentence: 'Elle ne travaille que trois jours par semaine.',
    distractors: [
      { word: 'pas', trap: 'negation', tip: 'Grammar Trap: Do NOT add "pas"! "Elle ne travaille que" = she just works.' },
      { word: 'plus', trap: 'negation_type', tip: 'Meaning Error: "ne... plus" means no longer, while "ne... que" means only!' }
    ],
    rule: 'PDF A1.3 page 240 : "Elle ne travaille que trois jours par semaine."'
  },
  {
    id: 'neque_argent_20e',
    topic: 'neque',
    structureId: 'neque',
    topicLabel: 'Négation Restrictive · Ne ... que',
    scene: 'market-scale',
    english: 'He only has twenty euros in his wallet.',
    targetWords: ['Il', 'n’a', 'que', 'vingt', 'euros', 'dans', 'son', 'portefeuille'],
    fullSentence: 'Il n’a que vingt euros dans son portefeuille.',
    distractors: [
      { word: 'pas', trap: 'negation', tip: 'Trap Alert: Never add "pas" when expressing "only" with "ne... que"!' },
      { word: 'rien', trap: 'negation_type', tip: 'Meaning Error: "rien" means nothing!' }
    ],
    rule: 'Formula: Sujet + n’ + verbe + que + montant/quantité.'
  },
  {
    id: 'neque_legumes_manger',
    topic: 'neque',
    structureId: 'neque',
    topicLabel: 'Négation Restrictive · Ne ... que',
    scene: 'chore-cooking',
    english: 'My brother only eats fresh vegetables.',
    targetWords: ['Mon', 'frère', 'ne', 'mange', 'que', 'des', 'légumes', 'frais'],
    fullSentence: 'Mon frère ne mange que des légumes frais.',
    distractors: [
      { word: 'pas', trap: 'negation', tip: 'Trap Alert: "ne mange que" means only eats!' },
      { word: 'jamais', trap: 'negation_type', tip: 'Meaning Error: "ne... jamais" means never!' }
    ],
    rule: '"Que" is placed directly in front of the restricted item (que des légumes).'
  },
  {
    id: 'neque_parler_francais',
    topic: 'neque',
    structureId: 'neque',
    topicLabel: 'Négation Restrictive · Ne ... que',
    scene: 'chat-friends',
    english: 'In class, we only speak French.',
    targetWords: ['En', 'classe', 'nous', 'ne', 'parlons', 'que', 'français'],
    fullSentence: 'En classe nous ne parlons que français.',
    distractors: [
      { word: 'pas', trap: 'negation', tip: 'Grammar Trap: Do not use "pas" with restrictive "ne... que"!' },
      { word: 'plus', trap: 'negation_type', tip: 'Meaning Error: "ne... plus" means no longer!' }
    ],
    rule: 'Formula: Sujet + ne + verbe + que + langue.'
  },

  // 5. Exprimer la Cause: Parce que vs À cause de vs En raison de vs Grâce à
  {
    id: 'cause_balai_parce_que',
    topic: 'cause',
    structureId: 'cause',
    topicLabel: 'Exprimer la Cause · Parce que',
    scene: 'bldg-broom-ceiling',
    english: 'She bangs the ceiling because she is irritated by the noise.',
    targetWords: ['Elle', 'tape', 'au', 'plafond', 'parce', 'qu’elle', 'est', 'énervée'],
    fullSentence: 'Elle tape au plafond parce qu’elle est énervée.',
    distractors: [
      { word: 'à cause de', trap: 'connector_type', tip: 'Grammar Error: "À cause de" must be followed by a NOUN, not a full subject + verb clause!' },
      { word: 'grâce à', trap: 'sentiment', tip: 'Sentiment Error: "Grâce à" is for positive causes, not being irritated!' }
    ],
    rule: 'PDF A1.3 page 8 : "tape au plafond avec un balai parce qu’elle est énervée par le bruit."'
  },
  {
    id: 'cause_balai_a_cause_de',
    topic: 'cause',
    structureId: 'cause',
    topicLabel: 'Exprimer la Cause · À cause de',
    scene: 'bldg-broom-ceiling',
    english: 'She is angry because of the neighbors’ noise.',
    targetWords: ['Elle', 'est', 'furieuse', 'à', 'cause', 'du', 'bruit'],
    fullSentence: 'Elle est furieuse à cause du bruit.',
    distractors: [
      { word: 'parce que', trap: 'connector_type', tip: 'Grammar Error: "Parce que" requires a full clause (sujet + verbe), not a single noun!' },
      { word: 'grâce au', trap: 'sentiment', tip: 'Sentiment Error: Neighbor noise is a negative disturbance, so use "à cause du"!' }
    ],
    rule: 'PDF A1.3 page 9 : "à cause du bruit (à cause de + nom pour une cause négative)."'
  },
  {
    id: 'cause_train_en_raison_de',
    topic: 'cause',
    structureId: 'cause',
    topicLabel: 'Exprimer la Cause · En raison de',
    scene: 'pro-repair-work',
    english: 'The train is delayed due to construction works.',
    targetWords: ['Le', 'train', 'est', 'en', 'retard', 'en', 'raison', 'des', 'travaux'],
    fullSentence: 'Le train est en retard en raison des travaux.',
    distractors: [
      { word: 'parce que', trap: 'connector_type', tip: 'Grammar Error: "Parce que" cannot be followed directly by a noun ("des travaux")!' },
      { word: 'à cause que', trap: 'false_syntax', tip: 'Syntax Error: "À cause que" does not exist in standard French!' }
    ],
    rule: 'PDF A1.3 page 6 : "En raison de + nom" (formal, official, administrative cause).'
  },
  {
    id: 'cause_reussite_grace_a',
    topic: 'cause',
    structureId: 'cause',
    topicLabel: 'Exprimer la Cause · Grâce à',
    scene: 'thanks',
    english: 'I passed my exam thanks to your help.',
    targetWords: ['J’ai', 'réussi', 'mon', 'examen', 'grâce', 'à', 'ton', 'aide'],
    fullSentence: 'J’ai réussi mon examen grâce à ton aide.',
    distractors: [
      { word: 'à cause de', trap: 'sentiment', tip: 'Sentiment Error: Passing an exam is a positive outcome! Use "grâce à", never "à cause de"!' },
      { word: 'parce que', trap: 'connector_type', tip: 'Grammar Error: "ton aide" is a noun, so use "grâce à"!' }
    ],
    rule: '"Grâce à + nom" is strictly used for positive causes, benefits, or gratitude.'
  },
  {
    id: 'cause_retard_bouchons',
    topic: 'cause',
    structureId: 'cause',
    topicLabel: 'Exprimer la Cause · À cause de',
    scene: 'feel-tired',
    english: 'I am late because of traffic jams.',
    targetWords: ['Je', 'suis', 'en', 'retard', 'à', 'cause', 'des', 'bouchons'],
    fullSentence: 'Je suis en retard à cause des bouchons.',
    distractors: [
      { word: 'grâce aux', trap: 'sentiment', tip: 'Sentiment Error: Traffic jams are a nuisance (negative), so use "à cause des"!' },
      { word: 'parce que', trap: 'connector_type', tip: 'Grammar Error: "des bouchons" is a noun phrase!' }
    ],
    rule: 'à cause de + les bouchons ➜ à cause des bouchons.'
  },

  // 6. Obligation & Interdiction (Copropriété, Règlement & Voisins)
  {
    id: 'rules_tondre_pelouse',
    topic: 'rules',
    structureId: 'rules',
    topicLabel: 'Obligation · Tondre la pelouse',
    scene: 'bldg-lawn-mow',
    english: 'You must mow the lawn on Saturday morning.',
    targetWords: ['Il', 'faut', 'tondre', 'la', 'pelouse', 'le', 'samedi', 'matin'],
    fullSentence: 'Il faut tondre la pelouse le samedi matin.',
    distractors: [
      { word: 'tonds', trap: 'infinitive', tip: 'Infinitive Error: After "Il faut", the verb must be in the infinitive (tondre)!' },
      { word: 'à tondre', trap: 'preposition', tip: 'Preposition Error: "Il faut" is followed directly by an infinitive without "à"!' }
    ],
    rule: 'PDF A1.3 page 11 & 50 : "Tondre la pelouse / obligation : Il faut tondre."'
  },
  {
    id: 'rules_arroser_gazon',
    topic: 'rules',
    structureId: 'rules',
    topicLabel: 'Obligation · Arroser le gazon',
    scene: 'plants',
    english: 'You must water the lawn in the evening.',
    targetWords: ['Vous', 'devez', 'arroser', 'le', 'gazon', 'le', 'soir'],
    fullSentence: 'Vous devez arroser le gazon le soir.',
    distractors: [
      { word: 'arrosez', trap: 'infinitive', tip: 'Infinitive Error: After modal verb "devoir", use the infinitive (arroser)!' },
      { word: 'pour arroser', trap: 'preposition', tip: 'Preposition Error: Modal verbs take an infinitive directly without "pour"!' }
    ],
    rule: 'PDF A1.3 page 12 & 51 : "arroser le gazon / obligation : Vous devez arroser."'
  },
  {
    id: 'rules_interdit_bruit_22h',
    topic: 'rules',
    structureId: 'rules',
    topicLabel: 'Interdiction · Bruit après 22h',
    scene: 'bldg-neighbors',
    english: 'It is forbidden to make noise after ten PM.',
    targetWords: ['Il', 'est', 'interdit', 'de', 'faire', 'du', 'bruit', 'après', '22h'],
    fullSentence: 'Il est interdit de faire du bruit après 22h.',
    distractors: [
      { word: 'à faire', trap: 'preposition', tip: 'Preposition Error: "Il est interdit" requires "DE", never "à"!' },
      { word: 'fait', trap: 'infinitive', tip: 'Infinitive Error: Must use the infinitive (faire)!' }
    ],
    rule: 'PDF A1.3 page 49 : "Il est interdit de + infinitif."'
  },
  {
    id: 'rules_defense_fumer_hall',
    topic: 'rules',
    structureId: 'rules',
    topicLabel: 'Interdiction · Défense de fumer',
    scene: 'bldg-common-areas',
    english: 'Smoking is strictly forbidden in the building lobby.',
    targetWords: ['Défense', 'de', 'fumer', 'dans', 'le', 'hall', 'de', 'l’immeuble'],
    fullSentence: 'Défense de fumer dans le hall de l’immeuble.',
    distractors: [
      { word: 'à fumer', trap: 'preposition', tip: 'Preposition Error: The fixed sign phrase is "Défense DE + infinitif"!' },
      { word: 'fume', trap: 'infinitive', tip: 'Infinitive Error: Use the infinitive form (fumer)!' }
    ],
    rule: 'Formula: Défense de + infinitif (strict prohibition signage).'
  },
  {
    id: 'rules_priere_velos',
    topic: 'rules',
    structureId: 'rules',
    topicLabel: 'Interdiction Polie · Vélos',
    scene: 'bldg-bike-room',
    english: 'Please do not leave bicycles in the hallway.',
    targetWords: ['Prière', 'de', 'ne', 'pas', 'laisser', 'de', 'vélos', 'dans', 'le', 'couloir'],
    fullSentence: 'Prière de ne pas laisser de vélos dans le couloir.',
    distractors: [
      { word: 'pas laisser', trap: 'negation', tip: 'Negation Trap: Both "ne" and "pas" must precede the infinitive: "ne pas laisser"!' },
      { word: 'à laisser', trap: 'preposition', tip: 'Preposition Error: "Prière" takes "de"!' }
    ],
    rule: 'PDF A1.3 page 14 : "laisser quelque chose quelque part = mettre / prière de ne pas laisser."'
  },
  {
    id: 'rules_detritus_poubelle',
    topic: 'rules',
    structureId: 'rules',
    topicLabel: 'Obligation · Détritus & Ordures',
    scene: 'bldg-recycle-bins',
    english: 'You must throw trash into the bins.',
    targetWords: ['Il', 'faut', 'jeter', 'les', 'détritus', 'dans', 'les', 'poubelles'],
    fullSentence: 'Il faut jeter les détritus dans les poubelles.',
    distractors: [
      { word: 'jette', trap: 'infinitive', tip: 'Infinitive Error: "Il faut" requires the infinitive (jeter)!' },
      { word: 'à jeter', trap: 'preposition', tip: 'Preposition Error: No preposition after "Il faut"!' }
    ],
    rule: 'PDF A1.3 page 42-45 : "le détritus, l’ordure (f), le déchet / obligation de jeter."'
  },
  {
    id: 'rules_nuire_voisins',
    topic: 'rules',
    structureId: 'rules',
    topicLabel: 'Consigne · Nuire à autrui',
    scene: 'bldg-neighbors',
    english: 'You must not disturb the tranquility of the neighbors.',
    targetWords: ['Vous', 'ne', 'devez', 'pas', 'nuire', 'à', 'la', 'tranquillité', 'des', 'voisins'],
    fullSentence: 'Vous ne devez pas nuire à la tranquillité des voisins.',
    distractors: [
      { word: 'au voisins', trap: 'preposition', tip: 'Grammar Error: "les voisins" is plural, so à + les = des voisins!' },
      { word: 'nuire de', trap: 'verb_construction', tip: 'Construction Error: The verb is "nuire À quelqu’un", never "nuire de"!' }
    ],
    rule: 'PDF A1.3 page 47 : "Nuire à (nuire aux voisins / à la tranquillité)."'
  },
  {
    id: 'rules_interdit_baigner',
    topic: 'rules',
    structureId: 'rules',
    topicLabel: 'Interdiction · Se baigner',
    scene: 'bldg-balcony-lawn',
    english: 'It is strictly forbidden to swim here.',
    targetWords: ['Il', 'est', 'strictement', 'interdit', 'de', 'se', 'baigner', 'ici'],
    fullSentence: 'Il est strictement interdit de se baigner ici.',
    distractors: [
      { word: 'à se baigner', trap: 'preposition', tip: 'Preposition Error: "interdit DE", not "à"!' },
      { word: 'baigner', trap: 'reflexive', tip: 'Pronoun Error: "se baigner" is reflexive; do not omit "se"!' }
    ],
    rule: 'PDF A1.3 page 38 & 49 : "se baigner / interdiction : Il est interdit de se baigner."'
  },

  // 7. Logement, Pannes & Dépannage (PDF Dialogues Marie & Sophie)
  {
    id: 'repairs_evier_bouche',
    topic: 'repairs',
    structureId: 'repairs',
    topicLabel: 'Dépannage · Évier bouché',
    scene: 'pro-repair-work',
    english: 'I have a problem with my sink, it is clogged.',
    targetWords: ['J’ai', 'un', 'problème', 'avec', 'mon', 'évier', 'il', 'est', 'bouché'],
    fullSentence: 'J’ai un problème avec mon évier, il est bouché.',
    distractors: [
      { word: 'a bouché', trap: 'auxiliary', tip: 'Auxiliary Error: Passive state takes ÊTRE (est bouché), not AVOIR (a bouché)!' },
      { word: 'de mon évier', trap: 'preposition', tip: 'Preposition Error: "un problème avec", not "de"!' }
    ],
    rule: 'PDF A1.3 page 77 : "J’ai un problème avec mon évier. Il est bouché."'
  },
  {
    id: 'repairs_eau_ecouler',
    topic: 'repairs',
    structureId: 'repairs',
    topicLabel: 'Dépannage · Écoulement de l’eau',
    scene: 'pro-repair-work',
    english: 'Since yesterday evening, the water is not draining at all.',
    targetWords: ['Depuis', 'hier', 'soir', 'l’eau', 'ne', 's’écoule', 'plus', 'du', 'tout'],
    fullSentence: 'Depuis hier soir l’eau ne s’écoule plus du tout.',
    distractors: [
      { word: 'coule pas', trap: 'verb_choice', tip: 'Vocabulary Choice: Drainage is "s’écouler" (l’eau ne s’écoule plus)!' },
      { word: 'depuis que', trap: 'preposition', tip: 'Preposition Error: "Depuis + nom", not "depuis que"!' }
    ],
    rule: 'PDF A1.3 page 79 : "Depuis hier soir. L’eau ne s’écoule plus du tout."'
  },
  {
    id: 'repairs_fuite_lavabo',
    topic: 'repairs',
    structureId: 'repairs',
    topicLabel: 'Dépannage · Fuite d’eau',
    scene: 'pro-repair-work',
    english: 'Underneath the sink, there is a water leak.',
    targetWords: ['En', 'dessous', 'du', 'lavabo', 'il', 'y', 'a', 'une', 'fuite', 'd’eau'],
    fullSentence: 'En dessous du lavabo il y a une fuite d’eau.',
    distractors: [
      { word: 'en dessus', trap: 'preposition', tip: 'Preposition Error: "En dessous" means underneath, while "en dessus" means on top!' },
      { word: 'de fuite', trap: 'article', tip: 'Article Error: We say "il y a UNE fuite d’eau"!' }
    ],
    rule: 'PDF A1.3 page 90 : "En dessous de l’évier/du lavabo, il y a une fuite d’eau."'
  },
  {
    id: 'repairs_faire_venir_plombier',
    topic: 'repairs',
    structureId: 'repairs',
    topicLabel: 'Dépannage · Faire venir un plombier',
    scene: 'pro-repair-work',
    english: 'How can I have a plumber come over?',
    targetWords: ['Comment', 'est-ce', 'que', 'je', 'peux', 'faire', 'venir', 'un', 'plombier', '?'],
    fullSentence: 'Comment est-ce que je peux faire venir un plombier ?',
    distractors: [
      { word: 'faire aller', trap: 'causative', tip: 'Causative Error: Having a professional come to your home is "faire venir"!' },
      { word: 'faire un', trap: 'incomplete', tip: 'Grammar Error: Must include the verb "venir" (faire venir un plombier)!' }
    ],
    rule: 'PDF A1.3 page 91 : "Comment je peux faire venir un plombier ?"'
  },
  {
    id: 'repairs_chauffage_panne',
    topic: 'repairs',
    structureId: 'repairs',
    topicLabel: 'Dépannage · Chauffage en panne',
    scene: 'pro-repair-work',
    english: 'My heating is not working anymore, it is very cold in my place.',
    targetWords: ['Mon', 'chauffage', 'ne', 'fonctionne', 'plus', 'il', 'fait', 'très', 'froid', 'chez', 'moi'],
    fullSentence: 'Mon chauffage ne fonctionne plus il fait très froid chez moi.',
    distractors: [
      { word: 'marche pas plus', trap: 'syntax', tip: 'Negation Error: "ne fonctionne plus", not "pas plus"!' },
      { word: 'est froid', trap: 'weather_verb', tip: 'Weather Error: Ambient temperature uses "il fait froid", not "il est froid"!' }
    ],
    rule: 'PDF A1.3 page 83 : "Mon chauffage ne fonctionne plus. Il fait très froid chez moi."'
  },
  {
    id: 'repairs_radiateur_froid',
    topic: 'repairs',
    structureId: 'repairs',
    topicLabel: 'Dépannage · Radiateur froid',
    scene: 'pro-repair-work',
    english: 'The thermostat is set correctly, but the radiator remains cold.',
    targetWords: ['Le', 'thermostat', 'est', 'réglé', 'correctement', 'mais', 'le', 'radiateur', 'reste', 'froid'],
    fullSentence: 'Le thermostat est réglé correctement mais le radiateur reste froid.',
    distractors: [
      { word: 'est froidé', trap: 'adjective', tip: 'Adjective Error: The adjective is "froid", not "froidé"!' },
      { word: 'reste de froid', trap: 'preposition', tip: 'Preposition Error: "rester + adjectif" without preposition!' }
    ],
    rule: 'PDF A1.3 page 85 : "il est réglé correctement, mais le radiateur reste froid."'
  },

  // 8. Temps, Ordre Chronologique & Infinitifs
  {
    id: 'seq_avant_de_partir',
    topic: 'sequence',
    structureId: 'sequence',
    topicLabel: 'Ordre Chronologique · Avant de',
    scene: 'clock-230',
    english: 'Before leaving, I always turn off the light.',
    targetWords: ['Avant', 'de', 'partir', 'j’éteins', 'toujours', 'la', 'lumière'],
    fullSentence: 'Avant de partir, j’éteins toujours la lumière.',
    distractors: [
      { word: 'avant partir', trap: 'preposition', tip: 'Preposition Trap: Before an infinitive, "avant" MUST take "DE" (Avant de partir)!' },
      { word: 'avant que partir', trap: 'syntax', tip: 'Syntax Error: "avant que" takes the subjunctive with a different subject!' }
    ],
    rule: 'PDF A1.3 page 237 : "puis, ensuite, après ça, avant de + infinitif."'
  },
  {
    id: 'seq_dabord_puis_ensuite',
    topic: 'sequence',
    structureId: 'sequence',
    topicLabel: 'Ordre Chronologique · D’abord, puis',
    scene: 'clock-230',
    english: 'First I wake up, then I shower.',
    targetWords: ['D’abord', 'je', 'me', 'réveille', 'puis', 'je', 'me', 'douche'],
    fullSentence: 'D’abord je me réveille puis je me douche.',
    distractors: [
      { word: 'après de', trap: 'connector', tip: 'Connector Error: Use "puis" or "ensuite" to sequence actions!' },
      { word: 'que', trap: 'connector', tip: 'Syntax Error: "puis" connects sentences directly without "que"!' }
    ],
    rule: 'Formula: D’abord ➜ puis ➜ ensuite ➜ après ça.'
  },
  {
    id: 'seq_depuis_hier_soir',
    topic: 'sequence',
    structureId: 'sequence',
    topicLabel: 'Temps Continu · Depuis',
    scene: 'pro-repair-work',
    english: 'The bathroom sink has been leaking since yesterday evening.',
    targetWords: ['Le', 'lavabo', 'fuit', 'depuis', 'hier', 'soir'],
    fullSentence: 'Le lavabo fuit depuis hier soir.',
    distractors: [
      { word: 'pour', trap: 'preposition', tip: 'Preposition Trap: English "for/since" ongoing actions use DEPUIS + present tense in French, never "pour"!' },
      { word: 'pendant', trap: 'preposition', tip: 'Aspect Error: "Pendant" marks completed past actions, while "depuis" marks ongoing actions!' }
    ],
    rule: 'Formula: Présent + depuis + point de départ (action begun in past, continuing now).'
  },
  {
    id: 'seq_avant_de_dormir',
    topic: 'sequence',
    structureId: 'sequence',
    topicLabel: 'Ordre Chronologique · Avant de',
    scene: 'bedtime',
    english: 'Before sleeping, she reads a few pages.',
    targetWords: ['Avant', 'de', 'dormir', 'elle', 'lit', 'quelques', 'pages'],
    fullSentence: 'Avant de dormir, elle lit quelques pages.',
    distractors: [
      { word: 'avant dormir', trap: 'preposition', tip: 'Preposition Trap: Must have "DE" before the infinitive (avant de dormir)!' },
      { word: 'avant de lit', trap: 'infinitive', tip: 'Infinitive Error: Must use the infinitive (dormir), not conjugated verb!' }
    ],
    rule: 'Formula: Avant de + infinitif.'
  },

  // 9. Prépositions de Lieu (Pays, Villes, Bâtiments)
  {
    id: 'prep_en_france',
    topic: 'prepositions',
    structureId: 'prepositions',
    topicLabel: 'Prépositions de lieu · Pays féminin',
    scene: 'chat-friends',
    english: 'We are going on vacation to France.',
    targetWords: ['Nous', 'allons', 'partir', 'en', 'vacances', 'en', 'France'],
    fullSentence: 'Nous allons partir en vacances en France.',
    distractors: [
      { word: 'au', trap: 'gender', tip: 'Gender Error: "France" is feminine (la France), so it takes "en", not "au" (au is for masculine countries)!' },
      { word: 'à la', trap: 'preposition', tip: 'Preposition Error: Feminine countries take "en", never "à la"!' },
      { word: 'ou', trap: 'homophone', tip: 'Homophone Trap: "ou" means "or", not the preposition "en"!' }
    ],
    rule: 'Feminine countries (ending in -e) take "en" (en France, en Espagne, en Italie).'
  },
  {
    id: 'prep_au_canada',
    topic: 'prepositions',
    structureId: 'prepositions',
    topicLabel: 'Prépositions de lieu · Pays masculin',
    scene: 'chat-friends',
    english: 'My brother lives and works in Canada.',
    targetWords: ['Mon', 'frère', 'habite', 'et', 'travaille', 'au', 'Canada'],
    fullSentence: 'Mon frère habite et travaille au Canada.',
    distractors: [
      { word: 'en', trap: 'gender', tip: 'Gender Error: "Canada" is masculine consonant (le Canada), so it takes "au", not "en"!' },
      { word: 'à le', trap: 'contraction', tip: 'Contraction Error: "à + le" always contracts into "au"!' }
    ],
    rule: 'Masculine countries starting with a consonant take "au" (au Canada, au Japon, au Mexique).'
  },
  {
    id: 'prep_aux_etats_unis',
    topic: 'prepositions',
    structureId: 'prepositions',
    topicLabel: 'Prépositions de lieu · Pays pluriel',
    scene: 'chat-friends',
    english: 'They went to live in the United States.',
    targetWords: ['Ils', 'sont', 'partis', 'vivre', 'aux', 'États-Unis'],
    fullSentence: 'Ils sont partis vivre aux États-Unis.',
    distractors: [
      { word: 'en', trap: 'plural', tip: 'Plural Error: Plural countries take "aux" (aux États-Unis, aux Pays-Bas), not "en"!' },
      { word: 'à les', trap: 'contraction', tip: 'Contraction Error: "à + les" must contract to "aux"!' }
    ],
    rule: 'Plural countries take "aux" (aux États-Unis, aux Philippines).'
  },
  {
    id: 'prep_a_paris',
    topic: 'prepositions',
    structureId: 'prepositions',
    topicLabel: 'Prépositions de lieu · Ville',
    scene: 'chat-friends',
    english: 'She arrived in Paris yesterday morning.',
    targetWords: ['Elle', 'est', 'arrivée', 'à', 'Paris', 'hier', 'matin'],
    fullSentence: 'Elle est arrivée à Paris hier matin.',
    distractors: [
      { word: 'en', trap: 'city_preposition', tip: 'City Error: Cities always take "à" (à Paris, à Téhéran, à Rasht), NEVER "en"!' },
      { word: 'dans', trap: 'preposition', tip: 'Preposition Error: General location in a city is "à Paris", not "dans Paris"!' }
    ],
    rule: 'PDF A1.3 page 121 : "Mahsa est allée à Paris. / Cities always take "à".'
  },
  {
    id: 'prep_dans_le_hall',
    topic: 'prepositions',
    structureId: 'prepositions',
    topicLabel: 'Prépositions de lieu · Intérieur',
    scene: 'bldg-common-areas',
    english: 'Do not leave your shoes in the hallway.',
    targetWords: ['Ne', 'laissez', 'pas', 'vos', 'chaussures', 'dans', 'le', 'hall'],
    fullSentence: 'Ne laissez pas vos chaussures dans le hall.',
    distractors: [
      { word: 'en', trap: 'preposition', tip: 'Preposition Error: Enclosed rooms and buildings take "dans", not "en"!' },
      { word: 'au', trap: 'preposition', tip: 'Preposition Error: Hall is a closed indoor space, so we use "dans le hall"!' }
    ],
    rule: 'Indoor architectural spaces take "dans + article" (dans le hall, dans la cuisine, dans l’immeuble).'
  },

  // 10. Pronoms Compléments COD & COI
  {
    id: 'cod_coi_pomme_mange',
    topic: 'cod_coi',
    structureId: 'cod_coi',
    topicLabel: 'COD · Complément d’objet direct',
    scene: 'pronoun-cod-apple-eat',
    english: 'The apple is delicious, I eat it.',
    targetWords: ['La', 'pomme', 'est', 'délicieuse', 'je', 'la', 'mange'],
    fullSentence: 'La pomme est délicieuse, je la mange.',
    distractors: [
      { word: 'lui', trap: 'pronoun_choice', tip: 'Pronoun Error: "Manger" takes a direct object (COD: la), never indirect (lui)!' },
      { word: 'le', trap: 'gender', tip: 'Gender Error: "La pomme" is feminine, so use "la", not "le"!' }
    ],
    rule: 'Direct objects (COD) replace nouns without a preposition: le (masc.), la (fem.), les (plural).'
  },
  {
    id: 'cod_coi_mere_telephone',
    topic: 'cod_coi',
    structureId: 'cod_coi',
    topicLabel: 'COI · Complément d’objet indirect',
    scene: 'pronoun-coi-phone-mother',
    english: 'My mother is in France, I phone her every Sunday.',
    targetWords: ['Ma', 'mère', 'est', 'en', 'France', 'je', 'lui', 'téléphone', 'le', 'dimanche'],
    fullSentence: 'Ma mère est en France, je lui téléphone le dimanche.',
    distractors: [
      { word: 'la', trap: 'pronoun_choice', tip: 'Pronoun Error: "Téléphoner à quelqu’un" takes an indirect pronoun (COI: lui), never COD (la)!' },
      { word: 'leur', trap: 'number', tip: 'Number Error: Mother is singular, so use "lui", not "leur" (plural)!' }
    ],
    rule: 'COI pronouns (lui for singular m/f, leur for plural) replace "à + person".'
  },
  {
    id: 'cod_coi_voisins_parler',
    topic: 'cod_coi',
    structureId: 'cod_coi',
    topicLabel: 'COI · Pluriel (leur)',
    scene: 'bldg-neighbors',
    english: 'My neighbors are noisy, I spoke to them this morning.',
    targetWords: ['Mes', 'voisins', 'sont', 'bruyants', 'je', 'leur', 'ai', 'parlé', 'ce', 'matin'],
    fullSentence: 'Mes voisins sont bruyants, je leur ai parlé ce matin.',
    distractors: [
      { word: 'les', trap: 'pronoun_choice', tip: 'Pronoun Error: "Parler à quelqu’un" takes COI (leur), not COD (les)!' },
      { word: 'à eux', trap: 'placement', tip: 'Placement Error: In French, we say "je leur ai parlé", placed before the auxiliary!' }
    ],
    rule: 'COI replaces "à + persons" in the plural with "leur" (placed before the verb).'
  },
  {
    id: 'cod_coi_cles_chercher',
    topic: 'cod_coi',
    structureId: 'cod_coi',
    topicLabel: 'COD · Pluriel (les)',
    scene: 'past-lost-keys',
    english: 'Where are my keys? I am looking for them everywhere!',
    targetWords: ['Où', 'sont', 'mes', 'clés', '?', 'Je', 'les', 'cherche', 'partout', '!'],
    fullSentence: 'Où sont mes clés ? Je les cherche partout !',
    distractors: [
      { word: 'leur', trap: 'pronoun_choice', tip: 'Pronoun Error: "Chercher quelque chose" is direct (COD: les), not indirect (leur)!' },
      { word: 'lui', trap: 'number', tip: 'Number Error: "mes clés" is plural (les)!' }
    ],
    rule: 'Direct plural objects take "les" before the conjugated verb.'
  },

  // 11. Connaître vs Savoir
  {
    id: 'connaitre_ce_resto',
    topic: 'connaitre_savoir',
    structureId: 'connaitre_savoir',
    topicLabel: 'Connaître · Lieu ou Personne',
    scene: 'chat-friends',
    english: 'I know this restaurant very well.',
    targetWords: ['Je', 'connais', 'très', 'bien', 'ce', 'restaurant'],
    fullSentence: 'Je connais très bien ce restaurant.',
    distractors: [
      { word: 'sais', trap: 'verb_choice', tip: 'Verb Choice Error: Familiarity with a place, person, or thing uses CONNAÎTRE + NOM, never SAVOIR!' },
      { word: 'connaît', trap: 'conjugation', tip: 'Conjugation Error: For "Je", the ending is -s (Je connais), while il/elle takes -t (connaît)!' }
    ],
    rule: 'Use CONNAÎTRE directly with a noun (person, city, restaurant, book). Never use with a verb or clause.'
  },
  {
    id: 'savoir_parler_francais',
    topic: 'connaitre_savoir',
    structureId: 'connaitre_savoir',
    topicLabel: 'Savoir · Compétence & Infinitif',
    scene: 'chat-friends',
    english: 'I know how to speak French very well.',
    targetWords: ['Je', 'sais', 'très', 'bien', 'parler', 'français'],
    fullSentence: 'Je sais très bien parler français.',
    distractors: [
      { word: 'connais', trap: 'verb_choice', tip: 'Verb Choice Error: Knowing how to do an action (+ infinitive) uses SAVOIR, never CONNAÎTRE!' },
      { word: 'sait', trap: 'conjugation', tip: 'Conjugation Error: "Je" takes -s (Je sais), "Il/Elle" takes -t (sait)!' }
    ],
    rule: 'Use SAVOIR + infinitif to express knowing how to do something (skills).'
  },
  {
    id: 'savoir_ou_tu_habites',
    topic: 'connaitre_savoir',
    structureId: 'connaitre_savoir',
    topicLabel: 'Savoir · Fait ou Information',
    scene: 'chat-friends',
    english: 'I know where you live.',
    targetWords: ['Je', 'sais', 'où', 'tu', 'habites'],
    fullSentence: 'Je sais où tu habites.',
    distractors: [
      { word: 'connais', trap: 'verb_choice', tip: 'Verb Choice Error: Factual knowledge introduced by where/when/why/how/that uses SAVOIR (où, quand, pourquoi, que)!' },
      { word: 'sait', trap: 'conjugation', tip: 'Conjugation Error: "Je" takes -s (Je sais), "Il/Elle" takes -t (Elle sait)!' }
    ],
    rule: 'Use SAVOIR when followed by a subordinate clause (que, où, quand, comment, pourquoi).'
  },

  // 12. Passé Composé avec AVOIR (Invariable Participles)
  {
    id: 'avoir_licence_obtenu',
    topic: 'avoir',
    structureId: 'avoir',
    topicLabel: 'Passé Composé · Avoir (Études)',
    scene: 'reflect-think',
    english: 'I obtained a bachelor’s degree in software engineering.',
    targetWords: ['J’ai', 'obtenu', 'une', 'licence', 'en', 'génie', 'logiciel'],
    fullSentence: 'J’ai obtenu une licence en génie logiciel.',
    distractors: [
      { word: 'suis', trap: 'auxiliary', tip: 'Auxiliary Error: "obtenir" takes AVOIR (j’ai obtenu), never ÊTRE!' },
      { word: 'obtenue', trap: 'agreement', tip: 'Agreement Error: With AVOIR, the participle does NOT agree with the following object!' }
    ],
    rule: 'PDF A1.3 page 93-98 : "J’ai obtenu une licence en génie logiciel à l’uni Ferdowsi."'
  },
  {
    id: 'avoir_master_suivi',
    topic: 'avoir',
    structureId: 'avoir',
    topicLabel: 'Passé Composé · Avoir (Master)',
    scene: 'reflect-think',
    english: 'Have you taken a master’s degree?',
    targetWords: ['Avez-vous', 'suivi', 'un', 'master', '?'],
    fullSentence: 'Avez-vous suivi un master ?',
    distractors: [
      { word: 'Êtes-vous', trap: 'auxiliary', tip: 'Auxiliary Error: "suivre un master" takes AVOIR (Avez-vous suivi)!' },
      { word: 'suivie', trap: 'agreement', tip: 'Agreement Error: No agreement with masculine singular noun!' }
    ],
    rule: 'PDF A1.3 page 100 : "Avez-vous suivi un master ? Suivre un master / faire un master."'
  },
  {
    id: 'avoir_deux_masters',
    topic: 'avoir',
    structureId: 'avoir',
    topicLabel: 'Passé Composé · Avoir (Faire)',
    scene: 'reflect-think',
    english: 'I did two master’s degrees in education.',
    targetWords: ['J’ai', 'fait', 'deux', 'masters', 'en', 'éducation'],
    fullSentence: 'J’ai fait deux masters en éducation.',
    distractors: [
      { word: 'suis fait', trap: 'meaning', tip: 'Structure Error: "je me suis fait" is causative/passive. For simple completion, use "j’ai fait"!' },
      { word: 'faits', trap: 'agreement', tip: 'Agreement Error: With AVOIR, participle does not agree with following direct object!' }
    ],
    rule: 'PDF A1.3 page 104 : "J’ai fait deux masters. Le premier était en anglais..."'
  },
  {
    id: 'avoir_voulu_voir',
    topic: 'avoir',
    structureId: 'avoir',
    topicLabel: 'Passé Composé · Vouloir (Avoir)',
    scene: 'chat-friends',
    english: 'You wanted to see me.',
    targetWords: ['Tu', 'as', 'voulu', 'me', 'voir'],
    fullSentence: 'Tu as voulu me voir.',
    distractors: [
      { word: 'es', trap: 'auxiliary', tip: 'Auxiliary Error: "vouloir" takes AVOIR (tu as voulu), never ÊTRE!' },
      { word: 'voulue', trap: 'agreement', tip: 'Agreement Error: No subject agreement with AVOIR!' }
    ],
    rule: 'PDF A1.3 page 160 : "Tu as voulu me voir."'
  }
];

console.log('Total Challenges defined:', CHALLENGES.length);
module.exports = { CHALLENGES };
