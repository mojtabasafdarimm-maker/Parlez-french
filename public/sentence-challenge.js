// Parlez Grammar Flashcard Sentence Builder with Tricky Distractors & Targeted Remediation (v31)
// Combines authentic visual flashcards (illustration + English meaning below photo)
// with scrambled word selection, mistake traps (auxiliary, agreement, prepositions),
// and end-of-session targeted practice for rules missed during the session.
(function () {
  const CHALLENGES = [
    // 1. Reflexive Verbs in Passé Composé
    {
      id: 'refl_lever_fem',
      topic: 'reflexive',
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
      id: 'refl_invariable_cheveux',
      topic: 'reflexive',
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
      id: 'refl_tromper_numero',
      topic: 'reflexive',
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

    // 2. Prepositions of Place (en vs au vs à vs dans)
    {
      id: 'prep_en_france',
      topic: 'prepositions',
      topicLabel: 'Prépositions de lieu (Pays)',
      scene: 'chat-friends',
      english: 'We are going on vacation to France.',
      targetWords: ['Nous', 'allons', 'en', 'vacances', 'en', 'France'],
      fullSentence: 'Nous allons en vacances en France.',
      distractors: [
        { word: 'ou', trap: 'preposition', tip: 'Spelling / Preposition Trap: "ou" means "or"! For the country destination, use "en France"!' },
        { word: 'au', trap: 'preposition', tip: 'Preposition Error: Countries ending in -e like "la France" are feminine and take "en", not "au" (au is for masculine countries like au Canada)!' },
        { word: 'à la', trap: 'preposition', tip: 'Preposition Error: Countries never use "à la", only "en" (feminine) or "au" (masculine)!' }
      ],
      rule: 'Feminine countries ending in -e (la France, l’Italie, l’Espagne) take "en". Masculine countries take "au" (au Canada, au Maroc).'
    },
    {
      id: 'prep_au_cinema',
      topic: 'prepositions',
      topicLabel: 'Prépositions de lieu (Lieux)',
      scene: 'cinema',
      english: 'They went to the cinema yesterday.',
      targetWords: ['Ils', 'sont', 'allés', 'au', 'cinéma', 'hier'],
      fullSentence: 'Ils sont allés au cinéma hier.',
      distractors: [
        { word: 'en', trap: 'preposition', tip: 'Preposition Error: Masculine places take "au" (à + le = au cinéma), never "en"!' },
        { word: 'ont', trap: 'auxiliary', tip: 'Auxiliary Error: "aller" is in the Maison d’Être, so it uses "sont", never "ont"!' },
        { word: 'allé', trap: 'agreement', tip: 'Agreement Error: "Ils" is plural, so ÊTRE requires plural agreement +s (allés)!' }
      ],
      rule: 'Contraction: à + le cinéma = au cinéma. "Aller" uses ÊTRE and agrees with the subject (+s).'
    },
    {
      id: 'prep_ville_rasht',
      topic: 'prepositions',
      topicLabel: 'Prépositions de lieu (Villes)',
      scene: 'uni-degrees',
      english: 'She was born in Paris.',
      targetWords: ['Elle', 'est', 'née', 'à', 'Paris'],
      fullSentence: 'Elle est née à Paris.',
      distractors: [
        { word: 'en', trap: 'preposition', tip: 'Preposition Error: Cities always take "à" (à Paris, à Rasht, à Téhéran), never "en"!' },
        { word: 'a', trap: 'auxiliary', tip: 'Auxiliary Error: "naître" uses ÊTRE (est), not AVOIR (a)!' },
        { word: 'né', trap: 'agreement', tip: 'Agreement Error: "Elle" is feminine singular, so ÊTRE requires +e (née)!' }
      ],
      rule: 'All cities take "à" (à Paris, à Montréal). "Naître" uses ÊTRE with agreement: né / née.'
    },
    {
      id: 'prep_dans_hall',
      topic: 'prepositions',
      topicLabel: 'Prépositions de lieu (Immeuble)',
      scene: 'bldg-common-areas',
      english: 'I open the door and I am in the lobby.',
      targetWords: ['J’ouvre', 'la', 'porte', 'et', 'je', 'suis', 'dans', 'le', 'hall'],
      fullSentence: 'J’ouvre la porte et je suis dans le hall.',
      distractors: [
        { word: 'en', trap: 'preposition', tip: 'Preposition Error: For rooms and enclosed common areas, use "dans le hall", not "en"!' },
        { word: 'au', trap: 'preposition', tip: 'Preposition Error: We say "dans le hall" to emphasize being inside the building hall.' }
      ],
      rule: 'Enclosed areas in buildings take "dans": dans le hall, dans le couloir, dans l’ascenseur.'
    },

    // 3. Se faire + Infinitif (A1.3 Passive & Invariable Fait)
    {
      id: 'se_faire_voler_lea',
      topic: 'se_faire',
      topicLabel: 'Se faire + infinitif (Passif)',
      scene: 'se-faire-stolen',
      english: 'Léa had her wallet stolen.',
      targetWords: ['Léa', 's’est', 'fait', 'voler', 'son', 'portefeuille'],
      fullSentence: 'Léa s’est fait voler son portefeuille.',
      distractors: [
        { word: 'faite', trap: 'invariable_fait', tip: 'Golden Rule Trap! In "se faire + infinitif", "fait" is strictly INVARIABLE! Never write "faite"!' },
        { word: 'a', trap: 'auxiliary', tip: 'Auxiliary Error: "se faire" is reflexive: it uses ÊTRE (s’est), not AVOIR (a)!' },
        { word: 'volé', trap: 'infinitive', tip: 'Structure Error: The second verb must be in the INFINITIVE (voler), not a participle!' }
      ],
      rule: 'Golden Rule: In "se faire + infinitif", "fait" NEVER changes (no +e, no +s). Elle s’est fait voler.'
    },
    {
      id: 'se_faire_cambrioler_touristes',
      topic: 'se_faire',
      topicLabel: 'Se faire + infinitif (Pluriel)',
      scene: 'se-faire-stolen',
      english: 'They got burgled.',
      targetWords: ['Ils', 'se', 'sont', 'fait', 'cambrioler'],
      fullSentence: 'Ils se sont fait cambrioler.',
      distractors: [
        { word: 'faits', trap: 'invariable_fait', tip: 'Trap Alert! In "se faire + infinitif", "fait" NEVER agrees even in the plural (never write "faits")!' },
        { word: 'ont', trap: 'auxiliary', tip: 'Auxiliary Error: Reflexive verbs always take ÊTRE (se sont), never AVOIR (ont)!' }
      ],
      rule: 'Even with plural subjects (Ils / Deux touristes), "fait" remains invariable before an infinitive: Ils se sont fait cambrioler.'
    },
    {
      id: 'se_faire_couper_cheveux',
      topic: 'se_faire',
      topicLabel: 'Se faire + infinitif (Services)',
      scene: 'se-faire-hair-nails',
      english: 'I am here to get my hair cut.',
      targetWords: ['Je', 'suis', 'là', 'pour', 'me', 'faire', 'couper', 'les', 'cheveux'],
      fullSentence: 'Je suis là pour me faire couper les cheveux.',
      distractors: [
        { word: 'fais', trap: 'infinitive', tip: 'Structure Error: After the preposition "pour", the verb must be in the infinitive: "pour me faire", not "fais"!' },
        { word: 'te', trap: 'pronoun', tip: 'Pronoun Error: With subject "Je", use the 1st person reflexive pronoun "me"!' }
      ],
      rule: 'Use "se faire + infinitif" when having someone provide a service: me faire couper les cheveux, me faire faire les ongles.'
    },
    {
      id: 'se_faire_virer_directeur',
      topic: 'se_faire',
      topicLabel: 'Se faire + infinitif (Familier)',
      scene: 'se-faire-fired-dumped',
      english: 'The director got fired from the company.',
      targetWords: ['Le', 'directeur', 's’est', 'fait', 'virer', 'de', 'l’entreprise'],
      fullSentence: 'Le directeur s’est fait virer de l’entreprise.',
      distractors: [
        { word: 'a', trap: 'auxiliary', tip: 'Auxiliary Error: Use ÊTRE (s’est), not AVOIR (a)!' },
        { word: 'viré', trap: 'infinitive', tip: 'Structure Error: "se faire" must be followed by an infinitive (virer), not a participle!' }
      ],
      rule: 'Se faire virer (informal) = se faire licencier (formal). Fait remains invariable.'
    },

    // 4. Maison d'Être Movement & State Verbs
    {
      id: 'maison_partir_enfants',
      topic: 'maison',
      topicLabel: 'La Maison d’Être (Accord)',
      scene: 'bldg-balcony-lawn',
      english: 'The children already left on vacation.',
      targetWords: ['Les', 'enfants', 'sont', 'déjà', 'partis', 'en', 'vacances'],
      fullSentence: 'Les enfants sont déjà partis en vacances.',
      distractors: [
        { word: 'ont', trap: 'auxiliary', tip: 'Auxiliary Error: "partir" is in the Maison d’Être, so it uses ÊTRE (sont), not AVOIR (ont)!' },
        { word: 'parti', trap: 'agreement', tip: 'Agreement Error: "Les enfants" is plural, so the participle must agree (+s)!' }
      ],
      rule: 'All 15 verbs in the Maison d’Être use ÊTRE and agree in gender and number with the subject: partis.'
    },
    {
      id: 'maison_descendre_ils',
      topic: 'maison',
      topicLabel: 'La Maison d’Être (Paires Opposées)',
      scene: 'bldg-elevator',
      english: 'They went down by the stairs.',
      targetWords: ['Ils', 'sont', 'descendus', 'par', 'les', 'escaliers'],
      fullSentence: 'Ils sont descendus par les escaliers.',
      distractors: [
        { word: 'ont', trap: 'auxiliary', tip: 'Auxiliary Error: "descendre" uses ÊTRE (sont), not AVOIR (ont)!' },
        { word: 'descendu', trap: 'agreement', tip: 'Agreement Error: "Ils" is plural: requires plural agreement +s (descendus)!' }
      ],
      rule: 'Opposite pair: monter ↔ descendre. Both use ÊTRE in intransitive movement.'
    },
    {
      id: 'maison_rentrer_tard',
      topic: 'maison',
      topicLabel: 'La Maison d’Être (Accord Féminin)',
      scene: 'bedtime',
      english: 'Yesterday evening, Sarah came home late.',
      targetWords: ['Hier', 'soir', 'Sarah', 'est', 'rentrée', 'tard'],
      fullSentence: 'Hier soir, Sarah est rentrée tard.',
      distractors: [
        { word: 'a', trap: 'auxiliary', tip: 'Auxiliary Error: "rentrer" uses ÊTRE (est), not AVOIR (a)!' },
        { word: 'rentré', trap: 'agreement', tip: 'Agreement Error: "Sarah" is female, so ÊTRE requires +e (rentrée)!' }
      ],
      rule: 'Rentrer uses ÊTRE. The past participle agrees with Sarah (+e).'
    },

    // 5. Avoir Verbs & Irregular Participles
    {
      id: 'avoir_prendre_parapluie',
      topic: 'avoir',
      topicLabel: 'Passé Composé avec Avoir (Famille -IS)',
      scene: 'rain',
      english: 'He took his umbrella.',
      targetWords: ['Il', 'a', 'pris', 'son', 'parapluie'],
      fullSentence: 'Il a pris son parapluie.',
      distractors: [
        { word: 'est', trap: 'auxiliary', tip: 'Auxiliary Error: "prendre" uses AVOIR (a), not ÊTRE (est)!' },
        { word: 'prendu', trap: 'participle', tip: 'Irregular Participle: "prendre" belongs to the -IS rhyme family: pris, not prendu!' },
        { word: 'sa', trap: 'gender', tip: 'Gender Error: "parapluie" is masculine: "son parapluie", not "sa"!' }
      ],
      rule: 'Prendre, apprendre, comprendre belong to the -IS past participle family (pris, appris, compris).'
    },
    {
      id: 'avoir_faire_grasse_matinee',
      topic: 'avoir',
      topicLabel: 'Passé Composé avec Avoir (Famille -IT)',
      scene: 'past-sleep-in-11',
      english: 'Last Sunday, I slept in until 11.',
      targetWords: ['Dimanche', 'dernier', 'j’ai', 'fait', 'la', 'grasse', 'matinée'],
      fullSentence: 'Dimanche dernier, j’ai fait la grasse matinée.',
      distractors: [
        { word: 'suis', trap: 'auxiliary', tip: 'Auxiliary Error: "faire" uses AVOIR (ai), not ÊTRE (suis)!' },
        { word: 'fais', trap: 'participle', tip: 'Participle Error: The past participle of "faire" is "fait", not present "fais"!' }
      ],
      rule: 'Faire → fait (-IT family). Expression: "faire la grasse matinée" (to sleep in late).'
    },
    {
      id: 'avoir_boire_vin',
      topic: 'avoir',
      topicLabel: 'Passé Composé avec Avoir (Famille -U)',
      scene: 'chore-cooking',
      english: 'They drank a little red wine.',
      targetWords: ['Ils', 'ont', 'bu', 'un', 'peu', 'de', 'vin', 'rouge'],
      fullSentence: 'Ils ont bu un peu de vin rouge.',
      distractors: [
        { word: 'sont', trap: 'auxiliary', tip: 'Auxiliary Error: "boire" uses AVOIR (ont), not ÊTRE (sont)!' },
        { word: 'boit', trap: 'participle', tip: 'Participle Error: The past participle of "boire" is "bu" (-U family)!' },
        { word: 'des', trap: 'preposition', tip: 'Preposition Error: After quantity expressions like "un peu", always use "de", not "des"!' }
      ],
      rule: 'Boire → bu (-U family). Fixed quantity preposition: un peu DE vin.'
    },
    {
      id: 'avoir_oublier_cles',
      topic: 'avoir',
      topicLabel: 'Passé Composé avec Avoir (1er Groupe)',
      scene: 'pro-locksmith',
      english: 'I forgot my keys inside!',
      targetWords: ['J’ai', 'oublié', 'mes', 'clés', 'à', 'l’intérieur', '!'],
      fullSentence: 'J’ai oublié mes clés à l’intérieur !',
      distractors: [
        { word: 'suis', trap: 'auxiliary', tip: 'Auxiliary Error: "oublier" uses AVOIR (ai), not ÊTRE (suis)!' },
        { word: 'mon', trap: 'plural', tip: 'Number Error: "clés" is plural, so it requires "mes", not "mon"!' }
      ],
      rule: '1st group verbs: -er → -é (oublié). Possession with plural noun: mes clés.'
    },

    // 6. Rules, Obligations & Interdictions (A1.3)
    {
      id: 'rule_interdit_fumer',
      topic: 'rules',
      topicLabel: 'Règlements & Interdiction (A1.3)',
      scene: 'sign-swim-fish-no',
      english: 'It is forbidden to smoke or vape.',
      targetWords: ['Il', 'est', 'interdit', 'de', 'fumer', 'ou', 'de', 'vapoter'],
      fullSentence: 'Il est interdit de fumer ou de vapoter.',
      distractors: [
        { word: 'à', trap: 'preposition', tip: 'Preposition Error: "Il est interdit" requires "de + infinitif", never "à"!' },
        { word: 'interdite', trap: 'impersonal', tip: 'Impersonal Error: Impersonal "Il est..." always takes masculine singular adjective: "interdit", never "interdite"!' },
        { word: 'fume', trap: 'infinitive', tip: 'Verb Error: After "de", the verb must be in the INFINITIVE (fumer)!' }
      ],
      rule: 'Formula: Il est interdit de + infinitif. Impersonal "Il" keeps the adjective masculine singular.'
    },
    {
      id: 'rule_ne_pas_velo',
      topic: 'rules',
      topicLabel: 'Interdiction sur panneau (A1.3)',
      scene: 'bldg-bike-room',
      english: 'Do not leave your bike in the hallways.',
      targetWords: ['Ne', 'pas', 'laisser', 'votre', 'vélo', 'dans', 'les', 'couloirs'],
      fullSentence: 'Ne pas laisser votre vélo dans les couloirs.',
      distractors: [
        { word: 'laissez pas', trap: 'word_order', tip: 'Sign Rule: On public notices and signs with an infinitive, "Ne pas" stays TOGETHER BEFORE the infinitive!' },
        { word: 'en', trap: 'preposition', tip: 'Preposition Error: In hallways, use "dans les couloirs", not "en"!' }
      ],
      rule: 'Negative sign formula: Ne pas + infinitif (Ne pas laisser votre vélo).'
    },
    {
      id: 'rule_merci_fermer',
      topic: 'rules',
      topicLabel: 'Demande polie (A1.3)',
      scene: 'bldg-common-areas',
      english: 'Thank you for closing the entrance door.',
      targetWords: ['Merci', 'de', 'fermer', 'la', 'porte', 'd’entrée'],
      fullSentence: 'Merci de fermer la porte d’entrée.',
      distractors: [
        { word: 'pour', trap: 'preposition', tip: 'Preposition Trap: When making a polite request for a future action, use "Merci de + infinitif", not "Merci pour"!' },
        { word: 'ferme', trap: 'infinitive', tip: 'Structure Error: "Merci de" requires an INFINITIVE (fermer)!' }
      ],
      rule: 'Polite building notice formula: Merci de + infinitif (Merci de fermer).'
    },

    // 7. Special Negations & Restrictions (ne...plus, ne...que, avant de)
    {
      id: 'neg_chauffage_plus',
      topic: 'negation',
      topicLabel: 'Négation : Ne ... plus (A1.3)',
      scene: 'home-radiator-cold',
      english: 'My heating is no longer working.',
      targetWords: ['Mon', 'chauffage', 'ne', 'fonctionne', 'plus'],
      fullSentence: 'Mon chauffage ne fonctionne plus.',
      distractors: [
        { word: 'pas', trap: 'negation', tip: 'Meaning Trap: "ne ... pas" means "does not work". To say "NO LONGER works" (it worked before and stopped), use "ne ... plus"!' },
        { word: 'fonctionner', trap: 'conjugation', tip: 'Conjugation Error: The verb must be conjugated in the present tense (fonctionne), not infinitive!' }
      ],
      rule: 'ne + verbe + plus indicates the cessation of an action (no longer / stopped).'
    },
    {
      id: 'restr_ne_que_dormir',
      topic: 'negation',
      topicLabel: 'Restriction : Ne ... que (A1.3)',
      scene: 'past-sleep-in-11',
      english: 'I only sleep 3 hours. (= just 3 hours)',
      targetWords: ['Je', 'ne', 'dors', 'que', 'trois', 'heures'],
      fullSentence: 'Je ne dors que trois heures.',
      distractors: [
        { word: 'pas', trap: 'restriction', tip: 'Meaning Trap: "ne ... pas" is negative (I do not sleep). "ne ... que" is a restriction meaning "only / just"!' },
        { word: 'seulement que', trap: 'redundancy', tip: 'Redundancy Error: Never combine "seulement" and "que". "ne ... que" already means "only"!' }
      ],
      rule: 'ne + verbe + que expresses restriction (= seulement). Je ne dors que 3h = Je dors seulement 3h.'
    },
    {
      id: 'conn_avant_de_lit',
      topic: 'negation',
      topicLabel: 'Connecteur : Avant de + inf. (A1.3)',
      scene: 'bedtime',
      english: 'Frapper avant d’entrer.',
      targetWords: ['Frapper', 'avant', 'd’entrer'],
      fullSentence: 'Frapper avant d’entrer.',
      distractors: [
        { word: 'de', trap: 'elision', tip: 'Elision Error: "de" elides to "d’" before a vowel: "avant d’entrer"!' },
        { word: 'entre', trap: 'infinitive', tip: 'Structure Error: "avant de" is ALWAYS followed by an INFINITIVE (entrer)!' }
      ],
      rule: 'Time connector formula: avant de + verbe à l’infinitif (avant d’entrer, avant de manger).'
    }
  ];

  const TOPIC_CHIPS = [
    { id: 'all', label: 'All Grammar Rules' },
    { id: 'due', label: '🧠 Due & New Today' },
    { id: 'reflexive', label: '🛏️ Reflexive (Se...)' },
    { id: 'prepositions', label: '📍 Prépositions (en, au, à)' },
    { id: 'se_faire', label: '🔒 Se faire + Infinitif' },
    { id: 'maison', label: '🏠 Maison d’Être' },
    { id: 'avoir', label: '🍎 Avoir Participles' },
    { id: 'rules', label: '📋 Obligation & Interdiction' },
    { id: 'negation', label: '🚫 ne...plus, ne...que' }
  ];

  // Standalone Runtime State
  let currentTopic = 'all';
  let activeQueue = [];
  let currentIndex = 0;
  let selectedTokens = []; // [{ id, text, isDistractor, trap, tip }]
  let availableTokens = []; // [{ id, text, isDistractor, trap, tip }]
  let cardState = 'assembling'; // 'assembling' | 'evaluated'
  let evaluationResult = null; // { isCorrect, message, trapTips }
  let sessionMistakes = []; // [{ card, chosenDistractors, trapNames }]
  let isRemediationActive = false;

  // Embedded Unified Review State
  let embeddedCardId = null;
  let embeddedSelected = [];
  let embeddedAvailable = [];
  let embeddedCardState = 'assembling';
  let embeddedEval = null;

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function getChallenges() {
    return CHALLENGES;
  }

  function getById(id) {
    return CHALLENGES.find(c => c.id === id) || null;
  }

  function getFilteredChallenges(topicId) {
    if (topicId === 'due') {
      const now = Date.now();
      const fsrs = window.ParlezFSRS;
      if (fsrs) {
        const learning = [];
        const due = [];
        const unseen = [];
        CHALLENGES.forEach(c => {
          const p = fsrs.grammarProgressFor(c.id);
          if (!p.lastReviewed || p.reviews === 0) unseen.push(c);
          else if (p.interval === 0) learning.push(c);
          else if (!p.dueAt || p.dueAt <= now) due.push(c);
        });
        const allowance = fsrs.remainingDailyNewAllowance ? fsrs.remainingDailyNewAllowance() : 10;
        const combined = [...learning, ...due, ...unseen.slice(0, Math.max(0, allowance))];
        return combined;
      }
    }
    if (!topicId || topicId === 'all') return CHALLENGES.slice();
    return CHALLENGES.filter(c => c.topic === topicId);
  }

  function buildTokensForCard(card) {
    if (!card) return [];
    const tokens = [];
    card.targetWords.forEach((word, idx) => {
      tokens.push({
        id: 't_corr_' + idx + '_' + Math.random().toString(36).substr(2, 4),
        text: word,
        isDistractor: false
      });
    });
    if (card.distractors && card.distractors.length) {
      card.distractors.forEach((d, idx) => {
        tokens.push({
          id: 't_dist_' + idx + '_' + Math.random().toString(36).substr(2, 4),
          text: d.word,
          isDistractor: true,
          trap: d.trap,
          tip: d.tip
        });
      });
    }
    return shuffle(tokens);
  }

  function startSession(topicId, queueOverride = null) {
    currentTopic = topicId || 'all';
    activeQueue = queueOverride || getFilteredChallenges(currentTopic);
    currentIndex = 0;
    sessionMistakes = [];
    isRemediationActive = !!queueOverride;
    prepareCard();
    rerender();
  }

  function prepareCard() {
    selectedTokens = [];
    cardState = 'assembling';
    evaluationResult = null;
    if (!activeQueue.length || currentIndex >= activeQueue.length) {
      availableTokens = [];
      return;
    }
    availableTokens = buildTokensForCard(activeQueue[currentIndex]);
  }

  function prepareEmbeddedForId(id) {
    const card = getById(id);
    embeddedCardId = card ? card.id : null;
    embeddedSelected = [];
    embeddedCardState = 'assembling';
    embeddedEval = null;
    embeddedAvailable = card ? buildTokensForCard(card) : [];
  }

  function resetEmbeddedState() {
    embeddedCardId = null;
    embeddedSelected = [];
    embeddedAvailable = [];
    embeddedCardState = 'assembling';
    embeddedEval = null;
  }

  function isEmbeddedModeActive() {
    const root = document.getElementById('grammar-flashcards-root');
    return !!(root && root.dataset.gflashEmbedded === 'true');
  }

  function esc(s) {
    return String(s ?? '').replace(/[&<>"']/g, m => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[m]));
  }

  function renderScene(sceneName) {
    if (typeof window.sceneSVG === 'function') {
      const svg = window.sceneSVG(sceneName);
      if (svg) return svg;
    }
    if (window.ParlezIllustrations && typeof window.ParlezIllustrations.scene === 'function') {
      const inner = window.ParlezIllustrations.scene(sceneName);
      if (inner) {
        if (inner.startsWith('<svg') || inner.startsWith('<img') || inner.startsWith('<div')) return inner;
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 340" role="img" focusable="false" style="width:100%;height:100%;display:block;">${inner}</svg>`;
      }
    }
    return `<div style="height:160px;background:#f1f5f9;display:flex;align-items:center;justify-content:center;border-radius:14px;color:#64748b;font-weight:700;">🖼️ ${esc(sceneName)}</div>`;
  }

  function playAudio(text, rate = 0.83) {
    if (window.ParlezAudio && typeof window.ParlezAudio.speak === 'function') {
      window.ParlezAudio.speak(text, rate);
    } else if (typeof window.say === 'function') {
      window.say(text, rate);
    }
  }

  function getActiveState(embedded) {
    if (embedded) {
      return {
        card: getById(embeddedCardId),
        selected: embeddedSelected,
        available: embeddedAvailable,
        state: embeddedCardState,
        evalRes: embeddedEval
      };
    }
    return {
      card: activeQueue[currentIndex] || null,
      selected: selectedTokens,
      available: availableTokens,
      state: cardState,
      evalRes: evaluationResult
    };
  }

  function selectToken(tokenId) {
    const embedded = isEmbeddedModeActive();
    const st = getActiveState(embedded);
    if (st.state === 'evaluated') return;
    const idx = st.available.findIndex(t => t.id === tokenId);
    if (idx === -1) return;
    const token = st.available.splice(idx, 1)[0];
    st.selected.push(token);
    rerender();
  }

  function deselectToken(tokenId) {
    const embedded = isEmbeddedModeActive();
    const st = getActiveState(embedded);
    if (st.state === 'evaluated') return;
    const idx = st.selected.findIndex(t => t.id === tokenId);
    if (idx === -1) return;
    const token = st.selected.splice(idx, 1)[0];
    st.available.push(token);
    rerender();
  }

  function clearSelection() {
    const embedded = isEmbeddedModeActive();
    if (embedded) {
      if (embeddedCardState === 'evaluated') return;
      embeddedAvailable = embeddedAvailable.concat(embeddedSelected);
      embeddedSelected = [];
    } else {
      if (cardState === 'evaluated') return;
      availableTokens = availableTokens.concat(selectedTokens);
      selectedTokens = [];
    }
    rerender();
  }

  function evaluateTokensForCard(card, selTokens) {
    const userWords = selTokens.map(t => t.text);
    const chosenDistractors = selTokens.filter(t => t.isDistractor);
    const isExactMatch = userWords.length === card.targetWords.length &&
      userWords.every((w, i) => w === card.targetWords[i]);

    if (isExactMatch && chosenDistractors.length === 0) {
      playAudio(card.fullSentence);
      return {
        isCorrect: true,
        message: '🎉 Bravo ! Sentence Flawlessly Built !',
        trapTips: [],
        chosenDistractors
      };
    }

    const trapTips = [];
    if (chosenDistractors.length > 0) {
      chosenDistractors.forEach(d => {
        trapTips.push(d.tip || 'Watch out: this is a deceptive distractor!');
      });
    } else {
      trapTips.push('Word Order Error: The sentence pieces were not assembled in the correct grammatical order.');
    }
    playAudio(card.fullSentence, 0.75);
    return {
      isCorrect: false,
      message: '⚠️ Grammar Trap Detected !',
      trapTips,
      chosenDistractors
    };
  }

  function checkSentence() {
    const embedded = isEmbeddedModeActive();
    const st = getActiveState(embedded);
    if (!st.selected.length || !st.card) return;

    const result = evaluateTokensForCard(st.card, st.selected);
    if (embedded) {
      embeddedCardState = 'evaluated';
      embeddedEval = result;
      if (!result.isCorrect && window.ParlezFSRS?.recordGrammarMistakeInReview) {
        window.ParlezFSRS.recordGrammarMistakeInReview(st.card, result.trapTips);
      }
    } else {
      cardState = 'evaluated';
      evaluationResult = result;
      if (!result.isCorrect) {
        sessionMistakes.push({
          card: st.card,
          chosenDistractors: result.chosenDistractors,
          trapTips: result.trapTips
        });
      }
    }
    rerender();
  }

  function rateAndAdvance(level) {
    const embedded = isEmbeddedModeActive();
    if (embedded) {
      if (embeddedCardId && window.ParlezFSRS?.rateGrammarInReview) {
        window.ParlezFSRS.rateGrammarInReview(embeddedCardId, level);
      }
      return;
    }

    const card = activeQueue[currentIndex];
    if (card && window.ParlezFSRS?.applyGrammarProgressRating) {
      const next = window.ParlezFSRS.applyGrammarProgressRating(card.id, level);
      if (!isRemediationActive) {
        if (next.requeue === 'soon') {
          const remaining = activeQueue.length - currentIndex - 1;
          if (remaining > 3) activeQueue.splice(currentIndex + 4, 0, card);
          else activeQueue.push(card);
        } else if (next.requeue === 'end') {
          const pendingAfter = activeQueue.slice(currentIndex + 1);
          if (!pendingAfter.some(x => x.id === card.id)) {
            activeQueue.push(card);
          }
        }
      }
    }
    nextCard();
  }

  function nextCard() {
    currentIndex++;
    if (currentIndex < activeQueue.length) {
      prepareCard();
    }
    rerender();
  }

  function startTargetedRemediation() {
    const missedCards = [];
    const seenIds = new Set();
    sessionMistakes.forEach(m => {
      if (!seenIds.has(m.card.id)) {
        seenIds.add(m.card.id);
        missedCards.push(m.card);
      }
    });

    startSession(currentTopic, missedCards);
    rerender();
  }

  function rerender() {
    const root = document.getElementById('grammar-flashcards-root');
    if (!root) return;
    if (root.dataset.gflashEmbedded === 'true') {
      const card = getById(embeddedCardId);
      if (card) {
        root.outerHTML = renderEmbeddedCard(card, {
          index: Number(root.dataset.gflashIndex || 0),
          total: Number(root.dataset.gflashTotal || 1)
        });
      }
    } else {
      root.outerHTML = page();
    }
  }

  function renderFlashcardBody(card, st, options = {}) {
    const { embedded = false, index = 0, total = 1 } = options;
    const fsrs = window.ParlezFSRS;
    const mem = fsrs?.grammarCardMemoryStatus ? fsrs.grammarCardMemoryStatus(card.id) : null;
    const sched = fsrs?.previewGrammarSchedule ? fsrs.previewGrammarSchedule(card.id) : {
      again: { label: '< 10 min' },
      hard: { label: '10 min' },
      good: { label: '10m → 1 day' },
      easy: { label: '4 days' }
    };

    const rateButtons = [
      ['Again', sched.again.label, 'again'],
      ['Hard', sched.hard.label, 'hard'],
      ['Good', sched.good.label, 'good'],
      ['Easy', sched.easy.label, 'easy']
    ];

    const isLast = !embedded && (index + 1 >= total);
    const defaultSuggestAgain = st.evalRes && !st.evalRes.isCorrect;

    return `
      <!-- The Flashcard -->
      <div class="review-card hover-card" style="background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 18px rgba(0,0,0,0.04); margin-bottom: 14px;">

        <!-- Top: Flashcard Photo / Illustration -->
        <div class="review-scene gflash-scene" style="height: 190px; background: #faf8f5; border-bottom: 1px solid #f1f5f9; display: flex; align-items: center; justify-content: center; overflow: hidden; position: relative;">
          ${renderScene(card.scene)}
          <span class="corner">${esc(card.topicLabel)}</span>
          ${mem ? `<span class="mem-badge card-corner-mem ${mem.badgeClass}">${mem.label}</span>` : ''}
        </div>

        <!-- Direct Below Photo: English Prompt (never hidden behind reveal) -->
        <div style="padding: 14px 18px 10px; border-bottom: 1px solid #f8fafc;">
          <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: #818cf8; letter-spacing: 0.6px; margin-bottom: 4px;">
            Sentence to Build:
          </div>
          <div style="font-size: 18px; font-weight: 800; color: #1e1b4b; line-height: 1.35;">
            ${esc(card.english)}
          </div>
        </div>

        <!-- Sentence Assembly Strip -->
        <div style="padding: 12px 18px; background: #fbfbfe; min-height: 64px; border-bottom: 1.5px dashed #e2e8f0;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span style="font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase;">
              Your Assembled Sentence:
            </span>
            ${st.selected.length > 0 && st.state === 'assembling' ? `
              <button type="button" data-gflash-action="clear-words" style="background: none; border: none; color: #ef4444; font-size: 11.5px; font-weight: 700; cursor: pointer; padding: 0;">
                ↺ Reset Words
              </button>
            ` : ''}
          </div>

          <div style="display: flex; flex-wrap: wrap; gap: 7px; min-height: 38px; align-items: center;">
            ${st.selected.length === 0 ? `
              <span style="color: #94a3b8; font-size: 13.5px; font-style: italic;">
                Tap the words below in order to build the sentence...
              </span>
            ` : st.selected.map(t => `
              <button type="button"
                      data-gflash-deselect="${esc(t.id)}"
                      ${st.state === 'evaluated' ? 'disabled' : ''}
                      style="display: inline-flex; align-items: center; gap: 5px; background: #eef2ff; border: 1.5px solid #818cf8; color: #3730a3; padding: 7px 12px; border-radius: 12px; font-size: 15px; font-weight: 700; cursor: pointer; transition: transform 0.1s ease; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                <span>${esc(t.text)}</span>
                ${st.state === 'assembling' ? `<span style="font-size: 13px; opacity: 0.6;">✕</span>` : ''}
              </button>
            `).join('')}
          </div>
        </div>

        ${st.state === 'assembling' ? `
          <div style="padding: 16px 18px 20px;">
            <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: #64748b; margin-bottom: 10px; letter-spacing: 0.5px;">
              Word Bank (Select one by one · Beware of traps!):
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px; justify-content: center;">
              ${st.available.map(t => `
                <button type="button"
                        data-gflash-select="${esc(t.id)}"
                        style="background: #ffffff; border: 1.5px solid #cbd5e1; color: #1e293b; padding: 9px 15px; border-radius: 12px; font-size: 15px; font-weight: 700; cursor: pointer; transition: all 0.12s ease; box-shadow: 0 2px 5px rgba(0,0,0,0.04); min-height: 42px;">
                  ${esc(t.text)}
                </button>
              `).join('')}
            </div>

            <div style="margin-top: 18px;">
              <button type="button"
                      class="btn btn-primary btn-block btn-lg"
                      data-gflash-action="check-sentence"
                      ${st.selected.length === 0 ? 'disabled' : ''}
                      style="font-size: 15px; border-radius: 14px;">
                ✓ Check Sentence
              </button>
            </div>
          </div>
        ` : `
          <div style="padding: 18px; animation: fadeIn 0.2s ease;">
            <div style="background: ${st.evalRes.isCorrect ? '#ecfdf5' : '#fff1f2'}; border: 1.5px solid ${st.evalRes.isCorrect ? '#6ee7b7' : '#fca5a5'}; border-radius: 14px; padding: 12px 14px; margin-bottom: 14px;">
              <div style="font-size: 14px; font-weight: 800; color: ${st.evalRes.isCorrect ? '#065f46' : '#991b1b'}; display: flex; align-items: center; gap: 6px;">
                ${esc(st.evalRes.message)}
              </div>
              ${!st.evalRes.isCorrect ? `
                <div style="margin-top: 6px; font-size: 12.5px; color: #b91c1c; line-height: 1.4;">
                  ${st.evalRes.trapTips.map(tip => `<div>• <b>${esc(tip)}</b></div>`).join('')}
                </div>
              ` : ''}
            </div>

            <div style="background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 14px; padding: 14px 16px; margin-bottom: 12px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; gap: 8px; flex-wrap: wrap;">
                <span style="font-size: 10.5px; font-weight: 800; text-transform: uppercase; color: #64748b; letter-spacing: 0.5px;">Correct Spoken French</span>
                <div style="display: flex; gap: 6px;">
                  <button type="button" class="btn btn-secondary btn-sm" data-gflash-say="${esc(card.fullSentence)}">
                    🔊 Listen
                  </button>
                  <button type="button" class="btn btn-secondary btn-sm slow-btn" data-gflash-slow="${esc(card.fullSentence)}">
                    🐢 0.6x Slow
                  </button>
                </div>
              </div>
              <div style="font-size: 19px; font-weight: 800; color: #1e1b4b; line-height: 1.3;">
                ${esc(card.fullSentence)}
              </div>
            </div>

            <div style="background: #fdf4ff; border: 1px solid #f5d0fe; border-radius: 12px; padding: 10px 14px; margin-bottom: 14px; font-size: 12.5px; color: #701a75; line-height: 1.45;">
              💡 <b>Grammar Rule:</b> ${esc(card.rule)}
            </div>

            <div class="small muted" style="text-align:center;margin-bottom:8px;font-size:11.5px;font-weight:700;">
              ${defaultSuggestAgain ? 'Schedule & continue (Again recommended):' : `Rate to schedule${isLast ? ' & finish' : ' & continue'}:`}
            </div>
            <div class="rating-row" style="margin-top:0;">
              ${rateButtons.map(([label, sub, rate]) => {
                const isPrimary = defaultSuggestAgain ? rate === 'again' : rate === 'good';
                const extraAttr = rate === 'good' ? 'data-gflash-action="next-card"' : '';
                return `<button type="button" data-gflash-rate="${rate}" ${extraAttr} class="btn ${isPrimary ? 'btn-primary' : 'btn-white'}">${label}<span>${sub}</span></button>`;
              }).join('')}
            </div>
          </div>
        `}
      </div>
    `;
  }

  function renderEmbeddedCard(card, options = {}) {
    if (!card) return '';
    if (embeddedCardId !== card.id) {
      prepareEmbeddedForId(card.id);
    }
    const st = getActiveState(true);
    return `<div id="grammar-flashcards-root" data-gflash-embedded="true" data-gflash-index="${options.index || 0}" data-gflash-total="${options.total || 1}">
      ${renderFlashcardBody(card, st, { embedded: true, index: options.index || 0, total: options.total || 1 })}
    </div>`;
  }

  function page() {
    // Empty queue (e.g. 'due' filter when caught up)
    if (activeQueue.length === 0 && currentTopic === 'due') {
      return `
        <div id="grammar-flashcards-root" class="challenge-container" style="max-width: 680px; margin: 0 auto;">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:12px;flex-wrap:wrap;">
            <span class="small muted" style="font-weight:700;">Grammar Flashcards</span>
            <select id="gflash-topic-select" class="select select-sm" aria-label="Filter grammar flashcards">
              ${TOPIC_CHIPS.map(t => `<option value="${esc(t.id)}" ${currentTopic === t.id ? 'selected' : ''}>${esc(t.label)}</option>`).join('')}
            </select>
          </div>
          <div class="empty">
            <div class="empty-emoji">✨</div>
            <h2>Grammar Caught Up!</h2>
            <p class="subline">All due grammar flashcards are scheduled. Switch to All Grammar Rules to practice anytime.</p>
            <button type="button" class="btn btn-primary" data-gflash-topic="all">Practice All Rules</button>
          </div>
        </div>`;
    }

    // Completed session screen
    if (activeQueue.length > 0 && currentIndex >= activeQueue.length) {
      const totalStudied = activeQueue.length;
      const mistakesCount = sessionMistakes.length;
      const accuracy = Math.round(100 * Math.max(0, totalStudied - mistakesCount) / Math.max(1, totalStudied));

      return `
        <div id="grammar-flashcards-root" class="challenge-container" style="max-width: 680px; margin: 0 auto;">
          <div class="review-card" style="padding: 24px 20px; text-align: center; border-radius: 20px;">
            <div style="font-size: 48px; margin-bottom: 10px;">
              ${mistakesCount === 0 ? '🏆' : '🎯'}
            </div>

            <h2 style="font-size: 22px; margin-bottom: 6px;">
              ${mistakesCount === 0 ? 'Flawless Grammar Mastery !' : 'Session Completed !'}
            </h2>

            <p class="small muted" style="margin-bottom: 16px;">
              ${isRemediationActive
                ? 'Targeted practice complete. Great job locking in those tricky rules!'
                : `You finished ${totalStudied} grammar cards (${accuracy}% first-try accuracy) and scheduled them for Today’s Review.`}
            </p>

            ${mistakesCount > 0 && !isRemediationActive ? `
              <div style="background: #fffbeb; border: 1.5px solid #fde68a; border-radius: 14px; padding: 14px; margin-bottom: 20px; text-align: left;">
                <div style="font-size: 13px; font-weight: 800; color: #92400e; margin-bottom: 8px;">
                  ⚠️ ${mistakesCount} Rule ${mistakesCount === 1 ? 'Trap' : 'Traps'} Encountered:
                </div>
                <div style="display: grid; gap: 6px; font-size: 12.5px; color: #78350f;">
                  ${sessionMistakes.map(m => `
                    <div style="background: #ffffff; border: 1px solid #fef3c7; padding: 7px 10px; border-radius: 8px;">
                      <b>${esc(m.card.topicLabel)} :</b> ${esc(m.trapTips[0] || 'Order mistake')}
                    </div>
                  `).join('')}
                </div>
                <div style="margin-top: 12px; text-align: center;">
                  <button type="button" class="btn btn-primary btn-block" data-gflash-action="start-remediation" style="font-size: 14px;">
                    🎯 Start Targeted Practice on Missed Rules (${mistakesCount})
                  </button>
                </div>
              </div>
            ` : ''}

            <div style="display: flex; gap: 8px; justify-content: center; flex-wrap: wrap;">
              <button type="button" class="btn btn-secondary" data-gflash-action="restart-all">
                🔄 Study Deck Again
              </button>
              <button type="button" class="btn btn-white" data-gflash-topic="all">
                All Topics
              </button>
            </div>
          </div>
        </div>
      `;
    }

    // Normal Card Mode
    if (!activeQueue.length) {
      startSession('all');
    }

    const card = activeQueue[currentIndex];
    const total = activeQueue.length;
    const st = getActiveState(false);

    return `
      <div id="grammar-flashcards-root" class="challenge-container" style="max-width: 680px; margin: 0 auto;">

        <!-- Clean Minimal Filter & Progress Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; gap: 10px; margin-bottom: 10px; flex-wrap: wrap;">
          <div style="font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">
            ${isRemediationActive ? '🎯 Targeted Practice' : '🗂️ Grammar Flashcard'} · ${currentIndex + 1} / ${total}
          </div>
          <select id="gflash-topic-select" class="select select-sm" aria-label="Filter grammar flashcards">
            ${TOPIC_CHIPS.map(t => `<option value="${esc(t.id)}" ${currentTopic === t.id ? 'selected' : ''}>${esc(t.label)}</option>`).join('')}
          </select>
        </div>

        ${renderFlashcardBody(card, st, { embedded: false, index: currentIndex, total })}

        <!-- Session Progress Mini Track -->
        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 12px; color: #94a3b8; padding: 0 6px;">
          <span>Session Accuracy: <b>${Math.max(0, currentIndex - sessionMistakes.length)} / ${Math.max(1, currentIndex + (cardState === 'evaluated' ? 1 : 0))}</b></span>
          ${sessionMistakes.length > 0 ? `<span style="color: #ef4444; font-weight: 700;">⚠️ ${sessionMistakes.length} saved for end practice</span>` : '<span style="color: #10b981; font-weight: 700;">✓ 0 Mistakes</span>'}
        </div>
      </div>
    `;
  }

  // Event Listeners for Flashcard Interactions
  document.addEventListener('change', function (e) {
    if (e.target && e.target.id === 'gflash-topic-select') {
      startSession(e.target.value);
      rerender();
    }
  });

  document.addEventListener('click', function (e) {
    const btn = e.target.closest('button');
    if (!btn) return;

    if (btn.dataset.gflashTopic) {
      startSession(btn.dataset.gflashTopic);
      rerender();
      return;
    }

    if (btn.dataset.gflashSelect) {
      selectToken(btn.dataset.gflashSelect);
      return;
    }

    if (btn.dataset.gflashDeselect) {
      deselectToken(btn.dataset.gflashDeselect);
      return;
    }

    if (btn.dataset.gflashAction === 'clear-words') {
      clearSelection();
      return;
    }

    if (btn.dataset.gflashAction === 'check-sentence') {
      checkSentence();
      return;
    }

    if (btn.dataset.gflashRate) {
      rateAndAdvance(btn.dataset.gflashRate);
      return;
    }

    if (btn.dataset.gflashAction === 'next-card') {
      nextCard();
      return;
    }

    if (btn.dataset.gflashAction === 'start-remediation') {
      startTargetedRemediation();
      return;
    }

    if (btn.dataset.gflashAction === 'restart-all') {
      startSession(currentTopic);
      rerender();
      return;
    }

    if (btn.dataset.gflashSay) {
      playAudio(btn.dataset.gflashSay, 0.83);
      return;
    }

    if (btn.dataset.gflashSlow) {
      playAudio(btn.dataset.gflashSlow, 0.6);
      return;
    }
  });

  // Initialize
  startSession('all');

  window.ParlezChallenge = {
    page,
    getChallenges,
    getById,
    renderEmbeddedCard,
    prepareEmbeddedForId,
    resetEmbeddedState,
    startSession,
    selectToken,
    deselectToken,
    checkSentence,
    nextCard
  };
})();
