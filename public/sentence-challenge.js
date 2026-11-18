// Parlez Grammar Flashcard Sentence Builder with Tricky Distractors & Targeted Remediation (v32)
// Visual-first grammar learning with authentic scenes, prompt visible below photo,
// interactive scrambled word builder with deceptive distractors, targeted remediation,
// and accessible comprehensive Grammar Structure & Conjugation Reference Tables on every card.
(function () {
  const GRAMMAR_STRUCTURES = {
  "reflexive": {
    "id": "reflexive",
    "title": "Passé Composé · Verbes Réflexifs (ÊTRE)",
    "badge": "A1.3 · Règle Majeure",
    "summary": "Au passé composé, TOUS les verbes réflexifs (se doucher, se lever, se souvenir, etc.) se conjuguent TOUJOURS avec l’auxiliaire ÊTRE. Le participe passé s’accorde généralement avec le sujet en genre (+e) et en nombre (+s).",
    "formula": "Sujet + [me / te / s’ / nous / vous / se] + ÊTRE (présent) + Participe Passé (+e / +s)",
    "negationFormula": "Sujet + ne + [me / te / se] + ÊTRE + pas + Participe Passé",
    "headers": [
      "Sujet",
      "Pronom + Être",
      "Participe & Accord",
      "Exemple Complet",
      "Sens en Anglais"
    ],
    "rows": [
      [
        "Je (m./f.)",
        "me suis",
        "douché(e)",
        "Je me suis douché(e) ce matin.",
        "I showered this morning."
      ],
      [
        "Tu (fém.)",
        "t’es",
        "douchée (+e)",
        "Tu t’es douchée hier soir ?",
        "Did you shower yesterday evening?"
      ],
      [
        "Il (masc.)",
        "s’est",
        "douché",
        "Il s’est douché rapidement.",
        "He showered quickly."
      ],
      [
        "Elle (fém.)",
        "s’est",
        "levée (+e)",
        "Elle s’est levée tôt ce matin.",
        "She got up early this morning."
      ],
      [
        "Nous (plur.)",
        "nous sommes",
        "amusé(e)s (+s)",
        "Nous nous sommes bien amusés.",
        "We had a lot of fun."
      ],
      [
        "Vous (pol.)",
        "vous êtes",
        "souvenu(e)(s)",
        "Vous vous êtes souvenu de moi ?",
        "Did you remember me?"
      ],
      [
        "Ils (masc. pl.)",
        "se sont",
        "trompés (+s)",
        "Ils se sont trompés de numéro.",
        "They dialed the wrong number."
      ],
      [
        "Elles (fém. pl.)",
        "se sont",
        "souvenues (+es)",
        "Elles se sont souvenues de toi.",
        "They remembered you."
      ]
    ],
    "traps": [
      "⚠️ AUXILIAIRE INTERDIT : N’utilisez JAMAIS avoir ! \"Elle a levé\" est une erreur grave. Dites toujours : \"Elle s’est levée\".",
      "⚠️ PIÈGE DE L’OBJET DIRECT / PARTIES DU CORPS : Si un objet direct ou une partie du corps est placé APRÈS le verbe, le participe reste INVARIABLE (pas d’accord) ! Exemple : \"Elle s’est coupé les cheveux\" (coupé, JAMAIS coupée).",
      "⚠️ EXPRESSION FIXE INVARIABLE : \"Se rendre compte\" reste TOUJOURS invariable au participe : \"Elle s’est rendu compte de son erreur\" (rendu, JAMAIS rendue).",
      "⚠️ ORDRE DE LA NÉGATION : \"ne\" se place AVANT le pronom réflexif : \"Je ne me suis pas réveillé\" (et NON \"Je me ne suis pas\")."
    ],
    "rules": [
      "Élision : \"se\" et \"te\" deviennent \"s’\" et \"t’\" devant la voyelle de l’auxiliaire (s’est, t’es).",
      "Préposition \"de\" : plusieurs verbes réflexifs demandent \"de\" : se souvenir DE quelqu’un, se tromper DE numéro, se rendre compte DE quelque chose."
    ]
  },
  "maison": {
    "id": "maison",
    "title": "Passé Composé avec ÊTRE (Maison d’Être & Déplacement)",
    "badge": "A1.3 · Mouvement & États",
    "summary": "14 verbes de mouvement et de changement d’état (DR MRS VANDERTRAMP) se conjuguent avec ÊTRE. Avec ÊTRE, l’accord du participe passé avec le sujet est 100% OBLIGATOIRE (féminin : +e, pluriel : +s).",
    "formula": "Sujet + ÊTRE (suis, es, est, sommes, êtes, sont) + Participe Passé (+e / +s)",
    "negationFormula": "Sujet + ne + ÊTRE + pas + Participe Passé",
    "headers": [
      "Infinitif",
      "Participe Passé",
      "Féminin / Pluriel",
      "Exemple Réel du Cours",
      "Sens en Anglais"
    ],
    "rows": [
      [
        "Naître",
        "né",
        "née / nés / nées",
        "Je suis née à Rasht en 1970.",
        "I was born in Rasht in 1970."
      ],
      [
        "Mourir",
        "mort",
        "morte / morts / mortes",
        "Elle est morte il y a deux ans.",
        "She died two years ago."
      ],
      [
        "Aller",
        "allé",
        "allée / allés / allées",
        "Mahsa est allée à Paris.",
        "Mahsa went to Paris."
      ],
      [
        "Venir",
        "venu",
        "venue / venus / venues",
        "Ils sont venus nous rendre visite.",
        "They came to visit us."
      ],
      [
        "Arriver",
        "arrivé",
        "arrivée / arrivés / arrivées",
        "La fille est arrivée à dix heures.",
        "The girl arrived at ten o’clock."
      ],
      [
        "Partir",
        "parti",
        "partie / partis / parties",
        "Les enfants sont déjà partis en vacances.",
        "The children have already left on vacation."
      ],
      [
        "Entrer",
        "entré",
        "entrée / entrés / entrées",
        "Nous sommes entrés par la porte principale.",
        "We entered through the main door."
      ],
      [
        "Sortir",
        "sorti",
        "sortie / sortis / sorties",
        "Il a pris son parapluie et il est sorti.",
        "He took his umbrella and went out."
      ],
      [
        "Rentrer",
        "rentré",
        "rentrée / rentrés / rentrées",
        "Hier soir, Sarah est rentrée tard.",
        "Yesterday evening, Sarah came home late."
      ],
      [
        "Tomber",
        "tombé",
        "tombée / tombés / tombées",
        "Je suis tombée amoureuse de cette ville.",
        "I fell in love with this city."
      ]
    ],
    "traps": [
      "⚠️ OUBLI D’ACCORD : Avec ÊTRE, l’accord est automatique : \"La fille est arrivée\" (+e), \"Les enfants sont partis\" (+s).",
      "⚠️ PHRASES MIXTES AVOIR + ÊTRE : Beaucoup d’actions combinent les deux auxiliaires : \"Il a pris (avoir) son parapluie et il est sorti (être)\". Faites bien la distinction !"
    ],
    "rules": [
      "Mnémonique DR MRS VANDERTRAMP : Devenir, Revenir, Monter, Rester, Sortir, Venir, Aller, Naître, Descendre, Entrer, Rentrer, Tomber, Retourner, Arriver, Mourir, Partir."
    ]
  },
  "se_faire": {
    "id": "se_faire",
    "title": "Se faire + Infinitif (Causatif & Passif)",
    "badge": "A1.3 PDF · Page 221",
    "summary": "La structure \"Se faire + Infinitif\" exprime qu’on subit ou qu’on fait faire une action par quelqu’un d’autre (coiffeur, médecin, patron, ami). Au passé composé, le participe FAIT est STRICTEMENT INVARIABLE (JAMAIS \"faite\" ni \"faits\").",
    "formula": "Sujet + [me/te/se] + faire (présent ou passé composé) + Infinitif",
    "negationFormula": "Sujet + ne + [me/te/se] + faire + pas + Infinitif",
    "headers": [
      "Expression",
      "Temps",
      "Structure",
      "Exemple Réel du Cours PDF",
      "Sens en Anglais"
    ],
    "rows": [
      [
        "Se faire couper les cheveux",
        "Passé composé",
        "s’est fait + inf",
        "Je me suis fait couper les cheveux !",
        "I got my hair cut!"
      ],
      [
        "Se faire faire les ongles",
        "Présent",
        "me faire + inf",
        "Je suis là pour me faire faire les ongles.",
        "I am here to get my nails done."
      ],
      [
        "Se faire rembourser",
        "Passé composé",
        "s’est fait + inf",
        "Je me suis fait rembourser mon billet.",
        "I got refunded for my ticket."
      ],
      [
        "Se faire larguer (fam)",
        "Passé composé",
        "s’est fait + inf",
        "Il s’est fait larguer par Marie.",
        "He got dumped by Marie."
      ],
      [
        "Se faire virer (fam)",
        "Passé composé",
        "s’est fait + inf",
        "Le directeur corrompu s’est fait virer.",
        "The corrupt manager got fired."
      ],
      [
        "Se faire opérer les...",
        "Passé composé",
        "s’est fait + inf",
        "Il s’est fait opérer les genoux il y a 3 ans.",
        "He had his knees operated on 3 years ago."
      ],
      [
        "Se faire arracher la dent",
        "Passé composé",
        "s’est fait + inf",
        "Elle s’est fait arracher la dent de sagesse.",
        "She had her wisdom tooth pulled out."
      ]
    ],
    "traps": [
      "⚠️ PIÈGE DE L’ACCORD : Dans \"se faire + infinitif\", le participe \"fait\" NE S’ACCORDE JAMAIS ! Écrire \"Elle s’est faite virer\" ou \"Elle s’est faite couper les cheveux\" est une FAUTE ! Dites : \"Elle s’est fait virer\".",
      "⚠️ SENS PASSIF : On l’utilise quand une autre personne effectue l’action sur nous ou pour notre compte."
    ],
    "rules": [
      "Au présent : \"Je me fais couper les cheveux\", \"Tu te fais soigner\".",
      "Au passé composé : \"Je me suis fait rembourser\", \"Elle s’est fait soigner\"."
    ]
  },
  "neque": {
    "id": "neque",
    "title": "Négation Restrictive : Ne ... que (Only / Just)",
    "badge": "A1.3 PDF · Page 239",
    "summary": "\"Ne ... que\" n’est PAS une négation complète : c’est une restriction qui signifie \"seulement\" ou \"juste\". Elle donne un style beaucoup plus fluide et naturel en français parlé.",
    "formula": "Sujet + ne + [verbe conjugué] + que + [complément restreint]",
    "negationFormula": "Attention : NE PAS AJOUTER \"pas\" ! (\"ne... pas que\" a un autre sens).",
    "headers": [
      "Formule",
      "Sens / Équivalent",
      "Exemple Réel du Cours PDF",
      "Sens en Anglais"
    ],
    "rows": [
      [
        "ne ... que",
        "seulement (quantité)",
        "Je ne dors que trois heures par nuit.",
        "I only sleep 3 hours a night."
      ],
      [
        "ne ... que",
        "seulement (jours)",
        "Elle ne travaille que trois jours par semaine.",
        "She only works 3 days a week."
      ],
      [
        "n’ ... que",
        "seulement (argent)",
        "Il n’a que vingt euros dans sa poche.",
        "He only has 20 euros in his pocket."
      ],
      [
        "ne ... que",
        "seulement (nourriture)",
        "Mon frère ne mange que des légumes frais.",
        "My brother only eats fresh vegetables."
      ],
      [
        "ne ... que",
        "seulement (langue)",
        "En classe, nous ne parlons que français.",
        "In class, we only speak French."
      ],
      [
        "ne ... pas",
        "négation totale",
        "Je ne dors pas l’après-midi.",
        "I do not sleep in the afternoon."
      ],
      [
        "ne ... plus",
        "arrêt d’une action",
        "Elle ne travaille plus le week-end.",
        "She no longer works on weekends."
      ]
    ],
    "traps": [
      "⚠️ NE JAMAIS METTRE \"PAS\" : \"Je ne dors pas que 3h\" est faux pour dire \"I only sleep 3h\". La formule exacte est : \"Je ne dors que 3h\".",
      "⚠️ PLACEMENT DE \"QUE\" : \"que\" se place immédiatement DEVANT l’élément restreint : \"Elle ne mange QUE des pommes\" (et non \"Elle ne que mange...\")."
    ],
    "rules": [
      "Élision : \"ne\" devient \"n’\" devant une voyelle ou un h muet : \"Il n’a que 20 ans\"."
    ]
  },
  "cause": {
    "id": "cause",
    "title": "Exprimer la Cause : Parce que, À cause de, En raison de, Grâce à",
    "badge": "A1.3 PDF · Page 6-9",
    "summary": "Exprimer la raison d’un événement exige de choisir le bon connecteur selon la grammaire de ce qui suit (phrase complète avec verbe ou simple nom) et selon le sentiment (positif, négatif ou neutre/officiel).",
    "formula": "Parce que + [Sujet + Verbe] | À cause de / En raison de / Grâce à + [Nom]",
    "negationFormula": "N/A",
    "headers": [
      "Connecteur",
      "Grammaire requise",
      "Sentiment / Nuance",
      "Exemple Réel du Cours PDF",
      "Traduction Anglaise"
    ],
    "rows": [
      [
        "Parce que",
        "+ Sujet + Verbe",
        "Cause logique / neutre",
        "Elle tape au plafond parce qu’elle est énervée.",
        "She bangs the ceiling because she is irritated."
      ],
      [
        "À cause de",
        "+ Nom / Pronom",
        "Cause négative / problème",
        "Elle est furieuse à cause du bruit des voisins.",
        "She is furious because of the neighbors’ noise."
      ],
      [
        "En raison de",
        "+ Nom",
        "Cause neutre / officielle",
        "Le train est retardé en raison des travaux.",
        "The train is delayed due to construction works."
      ],
      [
        "Grâce à",
        "+ Nom / Pronom",
        "Cause positive / remerciement",
        "J’ai réussi mon examen grâce à ton aide.",
        "I passed my exam thanks to your help."
      ],
      [
        "À cause de",
        "+ Nom",
        "Dégât / météo",
        "La cuisine est inondée à cause d’une fuite d’eau.",
        "The kitchen is flooded because of a water leak."
      ]
    ],
    "traps": [
      "⚠️ À CAUSE DE + VERBE = INTERDIT ! Ne dites jamais \"à cause de elle est fatiguée\". Utilisez \"parce qu’elle est fatiguée\" ou \"à cause de sa fatigue\".",
      "⚠️ GRÂCE À (POSITIF) vs À CAUSE DE (NÉGATIF) : Ne dites pas \"grâce aux bouchons je suis en retard\" ! Les bouchons sont négatifs, donc : \"à cause des bouchons\"."
    ],
    "rules": [
      "Contraction : de + le = du (à cause DU bruit) ; de + les = des (en raison DES travaux) ; à + le = au ; à + les = aux (grâce AUX amis)."
    ]
  },
  "rules": {
    "id": "rules",
    "title": "Obligation & Interdiction (Copropriété, Règlement & Voisins)",
    "badge": "A1.3 PDF · Page 49-58",
    "summary": "Pour exprimer des règles de vie commune, des interdictions ou des devoirs dans un immeuble ou un lieu public, on utilise des structures impersonnelles ou le verbe devoir.",
    "formula": "Il faut + Infinitif | Il est interdit de / Défense de / Prière de + Infinitif | Devoir + Infinitif",
    "negationFormula": "Ne pas + Infinitif (consigne directe)",
    "headers": [
      "Formule",
      "Type",
      "Exemple Réel du Règlement PDF",
      "Sens en Anglais"
    ],
    "rows": [
      [
        "Il faut + inf",
        "Obligation",
        "Il faut tondre la pelouse le samedi matin.",
        "You must mow the lawn on Saturday morning."
      ],
      [
        "Vous devez + inf",
        "Obligation directe",
        "Vous devez arroser le gazon le soir.",
        "You must water the lawn in the evening."
      ],
      [
        "Il est interdit de + inf",
        "Interdiction",
        "Il est interdit de faire du bruit après 22h.",
        "It is forbidden to make noise after 10 PM."
      ],
      [
        "Défense de + inf",
        "Interdiction stricte",
        "Défense de fumer dans le hall de l’immeuble.",
        "Smoking strictly prohibited in the lobby."
      ],
      [
        "Prière de ne pas + inf",
        "Interdiction polie",
        "Prière de ne pas laisser de vélos dans le couloir.",
        "Please do not leave bicycles in the hallway."
      ],
      [
        "Il faut + inf",
        "Devoir civique",
        "Il faut jeter les détritus dans les poubelles.",
        "You must throw trash into the bins."
      ],
      [
        "Ne pas + inf",
        "Consigne négative",
        "Ne pas nuire à la tranquillité du voisinage.",
        "Do not disturb the neighborhood tranquility."
      ],
      [
        "Il est interdit de + inf",
        "Interdiction",
        "Il est strictement interdit de se baigner ici.",
        "Swimming here is strictly forbidden."
      ]
    ],
    "traps": [
      "⚠️ OUBLI DU \"DE\" : Dites \"Il est interdit DE fumer\" (JAMAIS \"interdit à fumer\").",
      "⚠️ PLACE DE \"NE PAS\" : Devant un infinitif, \"ne\" et \"pas\" restent GROUPÉS ENSEMBLE : \"Prière de NE PAS fumer\" (et NON \"ne fumer pas\")."
    ],
    "rules": [
      "Vocabulaire clé du PDF : tondre la pelouse, arroser le gazon, détritus, ordures, déchets, nuire à quelqu’un, laisser quelque chose dans le hall."
    ]
  },
  "repairs": {
    "id": "repairs",
    "title": "Logement : Pannes, Dégâts des Eaux & Réparations",
    "badge": "A1.3 PDF · Page 76-92",
    "summary": "Vocabulaire et structures indispensables pour signaler un problème dans son appartement, faire venir un réparateur et décrire une panne avec précision.",
    "formula": "Avoir un problème avec... / Être bouché / Il y a une fuite d’eau / Faire venir un artisan",
    "negationFormula": "Ne fonctionne plus / Ne s’écoule plus",
    "headers": [
      "Élément",
      "Problème / Panne",
      "Phrase Type du Cours PDF",
      "Sens en Anglais"
    ],
    "rows": [
      [
        "Évier de cuisine",
        "bouché",
        "J’ai un problème avec mon évier, il est bouché.",
        "I have a problem with my sink, it is clogged."
      ],
      [
        "Écoulement d’eau",
        "ne s’écoule plus",
        "Depuis hier soir, l’eau ne s’écoule plus du tout.",
        "Since yesterday evening, water is not draining at all."
      ],
      [
        "Fuite d’eau",
        "en dessous du lavabo",
        "En dessous du lavabo, il y a une fuite d’eau.",
        "Underneath the sink, there is a water leak."
      ],
      [
        "Faire intervenir",
        "faire venir qqn",
        "Comment est-ce que je peux faire venir un plombier ?",
        "How can I have a plumber come over?"
      ],
      [
        "Chauffage",
        "ne fonctionne plus",
        "Mon chauffage ne fonctionne plus, il fait très froid.",
        "My heating is not working anymore, it is very cold."
      ],
      [
        "Radiateur",
        "reste froid / thermostat",
        "Le thermostat est réglé, mais le radiateur reste froid.",
        "The thermostat is set, but the radiator stays cold."
      ],
      [
        "Intervention",
        "déboucheur / chaudière",
        "Le plombier va utiliser un déboucheur pour réparer.",
        "The plumber will use a drain unblocker to fix it."
      ]
    ],
    "traps": [
      "⚠️ ÉTAT PASSIF : Dites \"L’évier EST bouché\" (auxiliaire être pour l’état), JAMAIS \"l’évier a bouché\".",
      "⚠️ FAISABILITÉ CAUSATIVE : Dites \"faire venir un plombier\" (JAMAIS \"faire un plombier\")."
    ],
    "rules": [
      "Depuis : marque une action continue commencée dans le passé : \"Il est bouché depuis hier soir\" (He has been clogged since yesterday evening)."
    ]
  },
  "sequence": {
    "id": "sequence",
    "title": "Temps, Ordre Chronologique & Infinitifs",
    "badge": "A1.3 PDF · Page 237",
    "summary": "Raconter une routine ou ordonner des événements exige des connecteurs temporels précis et l’utilisation de la préposition \"de\" avant l’infinitif.",
    "formula": "D’abord ... puis ... ensuite ... après ça | Avant de + Infinitif | Depuis + Durée",
    "negationFormula": "N/A",
    "headers": [
      "Connecteur",
      "Fonction",
      "Exemple Réel du Cours",
      "Traduction Anglaise"
    ],
    "rows": [
      [
        "Avant de + inf",
        "Action antérieure",
        "Avant de partir, j’éteins toujours la lumière.",
        "Before leaving, I always turn off the light."
      ],
      [
        "D’abord ... puis",
        "Début et suite",
        "D’abord je me réveille, puis je me douche.",
        "First I wake up, then I shower."
      ],
      [
        "Ensuite ... après ça",
        "Déroulement",
        "Ensuite je déjeune, et après ça je vais au travail.",
        "Next I eat breakfast, and after that I go to work."
      ],
      [
        "Depuis + durée",
        "Action en cours",
        "Le robinet fuit depuis trois jours.",
        "The faucet has been leaking for three days."
      ],
      [
        "Avant de + inf",
        "Précautions",
        "Avant de dormir, elle vérifie la porte.",
        "Before sleeping, she checks the door."
      ]
    ],
    "traps": [
      "⚠️ AVANT DE + INFINITIF : Ne dites JAMAIS \"avant partir\" ! En français, \"avant\" exige obligatoirement \"DE\" devant un verbe : \"Avant DE partir\"."
    ],
    "rules": [
      "Ordre typique d’un récit : D’abord ➜ Puis ➜ Ensuite ➜ Après ça ➜ Enfin / Finalement."
    ]
  },
  "prepositions": {
    "id": "prepositions",
    "title": "Prépositions Géographiques et de Lieu (Pays, Villes, Bâtiments)",
    "badge": "A1.3 · Géographie & Espace",
    "summary": "En français, la préposition devant un lieu dépend du genre du pays (féminin en -e ou voyelle, masculin consonne, pluriel) ou s’il s’agit d’une ville ou d’un intérieur.",
    "formula": "en + pays fém./voyelle | au + pays masc. | aux + pays pluriel | à + ville | dans + lieu clos",
    "negationFormula": "N/A",
    "headers": [
      "Catégorie de Lieu",
      "Préposition",
      "Exemple Réel du Cours",
      "Traduction Anglaise"
    ],
    "rows": [
      [
        "Pays féminin (finit par -e)",
        "en",
        "Nous allons partir en vacances en France.",
        "We are going on holiday to France."
      ],
      [
        "Pays commençant par voyelle",
        "en",
        "Elle a habité deux ans en Iran.",
        "She lived two years in Iran."
      ],
      [
        "Pays masculin (consonne)",
        "au",
        "Mon frère a trouvé un emploi au Canada.",
        "My brother found a job in Canada."
      ],
      [
        "Pays pluriel",
        "aux",
        "Ils sont allés étudier aux États-Unis.",
        "They went to study in the United States."
      ],
      [
        "Ville",
        "à",
        "Elle est arrivée à Paris hier matin.",
        "She arrived in Paris yesterday morning."
      ],
      [
        "Intérieur de bâtiment",
        "dans",
        "Ne laissez pas vos vélos dans le hall.",
        "Do not leave your bikes in the hallway."
      ]
    ],
    "traps": [
      "⚠️ EN FRANCE vs AU FRANCE : La France se termine par -e, elle est donc féminine ➜ \"EN France\" (JAMAIS \"au France\").",
      "⚠️ À PARIS vs EN PARIS : Pour les villes, on utilise toujours \"À\" ➜ \"À Paris\", \"À Téhéran\", \"À Rasht\" (JAMAIS \"en Paris\")."
    ],
    "rules": [
      "Règle générale : Presque tous les pays se terminant par la lettre \"e\" sont féminins (la France, l’Italie, l’Espagne, la Suisse) et prennent \"en\". Exceptions notables : le Mexique, le Mozambique, le Cambodge (au Mexique)."
    ]
  },
  "cod_coi": {
    "id": "cod_coi",
    "title": "Pronoms Compléments d’Objet : COD (le/la/les) vs COI (lui/leur)",
    "badge": "A1.3 · Pronoms Personnels",
    "summary": "Les pronoms remplacent les noms pour éviter les répétitions et se placent AVANT le verbe conjugué. On distingue le COD (direct, sans préposition) du COI (indirect, remplace \"à + personne\").",
    "formula": "Sujet + [le / la / l’ / les] (COD) ou [lui / leur] (COI) + Verbe",
    "negationFormula": "Sujet + ne + [pronom] + verbe + pas",
    "headers": [
      "Type de Pronom",
      "Formes",
      "Verbes typiques",
      "Exemple Réel du Cours",
      "Traduction Anglaise"
    ],
    "rows": [
      [
        "COD (Direct)",
        "le / la / l’ / les",
        "voir, manger, chercher, aimer",
        "La pomme est délicieuse, je la mange.",
        "The apple is delicious, I eat it."
      ],
      [
        "COI (Indirect : à + qqn)",
        "lui (singulier masc/fém)",
        "téléphoner à, parler à, écrire à",
        "Ma mère est gentille, je lui téléphone.",
        "My mother is kind, I phone her."
      ],
      [
        "COI (Indirect : à + qqn)",
        "leur (pluriel masc/fém)",
        "dire à, répondre à, parler à",
        "Mes voisins sont bruyants, je leur parle.",
        "My neighbors are noisy, I speak to them."
      ],
      [
        "COD combiné",
        "les (pluriel direct)",
        "chercher, trouver, prendre",
        "Où sont mes clés ? Je les cherche partout !",
        "Where are my keys? I am looking for them everywhere!"
      ]
    ],
    "traps": [
      "⚠️ \"LUI\" = MASCULIN ET FÉMININ : \"Je lui téléphone\" signifie \"I call him\" OU \"I call her\". Ne dites jamais \"je téléphone à elle\" !",
      "⚠️ PLACE DU PRONOM : Le pronom se place AVANT le verbe : \"Je la mange\" (JAMAIS \"Je mange la\")."
    ],
    "rules": [
      "Verbes à retenir avec COI (à + qqn) : téléphoner à, parler à, écrire à, dire bonjour à, demander à, envoyer à, répondre à."
    ]
  },
  "connaitre_savoir": {
    "id": "connaitre_savoir",
    "title": "Connaître vs Savoir (Distinction fondamentale)",
    "badge": "A1.3 · Verbes Essentiels",
    "summary": "Ces deux verbes se traduisent par \"to know\" en anglais, mais répondent à deux constructions grammaticales totalement différentes et exclusives en français.",
    "formula": "Connaître + [Nom : lieu, personne, monument] | Savoir + [Infinitif OU que / où / quand / comment]",
    "negationFormula": "Je ne connais pas... | Je ne sais pas...",
    "headers": [
      "Verbe",
      "Construction obligatoire",
      "Exemple Réel du Cours",
      "Traduction Anglaise"
    ],
    "rows": [
      [
        "Connaître",
        "+ Nom de ville ou lieu",
        "Je connais très bien ce restaurant.",
        "I know this restaurant very well."
      ],
      [
        "Connaître",
        "+ Personne",
        "Tu connais la nouvelle voisine ?",
        "Do you know the new neighbor?"
      ],
      [
        "Savoir",
        "+ Infinitif (compétence)",
        "Je sais nager et je sais parler français.",
        "I know how to swim and speak French."
      ],
      [
        "Savoir",
        "+ Proposition (où / quand / que)",
        "Je sais où tu habites et à quelle heure tu pars.",
        "I know where you live and what time you leave."
      ],
      [
        "Savoir",
        "+ Fait précis",
        "Elle sait que la réunion commence à 9h.",
        "She knows that the meeting starts at 9 AM."
      ]
    ],
    "traps": [
      "⚠️ INTERDIT : Connaître + verbe (JAMAIS \"Je connais nager\" ➜ Dites \"Je SAIS nager\").",
      "⚠️ INTERDIT : Savoir + personne (JAMAIS \"Je sais Marie\" ➜ Dites \"Je CONNAIS Marie\")."
    ],
    "rules": [
      "Conjugaison Savoir : je sais, tu sais, il sait, nous savons, vous savez, ils savent.",
      "Conjugaison Connaître : je connais, tu connais, il connaît, nous connaissons, vous connaissez, ils connaissent."
    ]
  },
  "avoir": {
    "id": "avoir",
    "title": "Passé Composé avec AVOIR (Participe Passé Invariable)",
    "badge": "A1 · Base Fondamentale",
    "summary": "La grande majorité des verbes français se conjuguent avec l’auxiliaire AVOIR. Avec AVOIR, le participe passé reste invariable avec le sujet (pas de +e ni de +s pour le sujet).",
    "formula": "Sujet + AVOIR (ai, as, a, avons, avez, ont) + Participe Passé",
    "negationFormula": "Sujet + ne + AVOIR + pas + Participe Passé",
    "headers": [
      "Sujet",
      "Auxiliaire AVOIR",
      "Participe",
      "Exemple Réel du Cours",
      "Sens en Anglais"
    ],
    "rows": [
      [
        "J’",
        "ai",
        "obtenu",
        "J’ai obtenu une licence à l’université.",
        "I obtained a bachelor’s degree at university."
      ],
      [
        "Tu",
        "as",
        "voulu",
        "Tu as voulu me voir hier.",
        "You wanted to see me yesterday."
      ],
      [
        "Il",
        "a",
        "pris",
        "Il a pris son parapluie avant de sortir.",
        "He took his umbrella before going out."
      ],
      [
        "Elle",
        "a",
        "suivi",
        "Elle a suivi un master en éducation.",
        "She took a master’s degree in education."
      ],
      [
        "Nous",
        "avons",
        "fait",
        "Nous avons fait nos valises.",
        "We packed our bags."
      ],
      [
        "Vous",
        "avez",
        "vécu",
        "Vous avez vécu à Paris pendant trois ans.",
        "You lived in Paris for three years."
      ],
      [
        "Ils",
        "ont",
        "bu",
        "Ils ont bu un café sur la terrasse.",
        "They drank a coffee on the terrace."
      ]
    ],
    "traps": [
      "⚠️ PAS D’ACCORD AVEC LE SUJET : \"Elle a pris\" (JAMAIS \"prise\"), \"Elles ont bu\" (JAMAIS \"bues\"). Le sujet ne change pas la terminaison du participe avec AVOIR."
    ],
    "rules": [
      "Participes irréguliers clés du cours PDF : prendre ➜ pris ; vouloir ➜ voulu ; suivre ➜ suivi ; faire ➜ fait ; obtenir ➜ obtenu ; boire ➜ bu ; voir ➜ vu."
    ]
  }
};

  const CHALLENGES = [
  {
    "id": "refl_lever_fem",
    "topic": "reflexive",
    "structureId": "reflexive",
    "topicLabel": "Passé Composé · Verbe Réflexif",
    "scene": "rise",
    "english": "She got up early this morning.",
    "targetWords": [
      "Elle",
      "s’est",
      "levée",
      "tôt",
      "ce",
      "matin"
    ],
    "fullSentence": "Elle s’est levée tôt ce matin.",
    "distractors": [
      {
        "word": "a",
        "trap": "auxiliary",
        "tip": "Auxiliary Error: Reflexive verbs always take ÊTRE (est), never AVOIR (a)!"
      },
      {
        "word": "levé",
        "trap": "agreement",
        "tip": "Agreement Error: \"Elle\" is feminine singular, so ÊTRE reflects +e (levée)!"
      },
      {
        "word": "se",
        "trap": "elision",
        "tip": "Elision Error: \"se\" becomes \"s’\" before a vowel (s’est)!"
      }
    ],
    "rule": "All reflexive verbs use ÊTRE in the passé composé and agree with the subject in gender (+e) and number (+s)."
  },
  {
    "id": "refl_doucher_tu",
    "topic": "reflexive",
    "structureId": "reflexive",
    "topicLabel": "Passé Composé · Verbe Réflexif",
    "scene": "shower",
    "english": "Did you shower yesterday evening? (to a female friend)",
    "targetWords": [
      "Tu",
      "t’es",
      "douchée",
      "hier",
      "soir",
      "?"
    ],
    "fullSentence": "Tu t’es douchée hier soir ?",
    "distractors": [
      {
        "word": "as",
        "trap": "auxiliary",
        "tip": "Auxiliary Error: Reflexive verbs use ÊTRE (t’es), not AVOIR (tu as)!"
      },
      {
        "word": "douché",
        "trap": "agreement",
        "tip": "Agreement Error: When speaking to a female, ÊTRE reflects feminine +e (douchée)!"
      }
    ],
    "rule": "In questions with reflexive verbs, te + es becomes t’es, and the participle agrees with the listener (+e for female)."
  },
  {
    "id": "refl_negation_reveiller",
    "topic": "reflexive",
    "structureId": "reflexive",
    "topicLabel": "Négation & Verbe Réflexif",
    "scene": "wake",
    "english": "I did not wake up on time.",
    "targetWords": [
      "Je",
      "ne",
      "me",
      "suis",
      "pas",
      "réveillé",
      "à",
      "l’heure"
    ],
    "fullSentence": "Je ne me suis pas réveillé à l’heure.",
    "distractors": [
      {
        "word": "ai",
        "trap": "auxiliary",
        "tip": "Auxiliary Error: \"se réveiller\" uses ÊTRE (suis), never AVOIR (ai)!"
      },
      {
        "word": "me ne",
        "trap": "word_order",
        "tip": "Word Order Error: \"ne\" must be placed BEFORE the reflexive pronoun (\"ne me suis pas\")!"
      }
    ],
    "rule": "Reflexive negation formula: Sujet + ne + me/te/se + être + pas + participe."
  },
  {
    "id": "refl_souvenir_vous",
    "topic": "reflexive",
    "structureId": "reflexive",
    "topicLabel": "Passé Composé · Se souvenir de",
    "scene": "past-remember-person",
    "english": "Did you remember me?",
    "targetWords": [
      "Vous",
      "vous",
      "êtes",
      "souvenu",
      "de",
      "moi",
      "?"
    ],
    "fullSentence": "Vous vous êtes souvenu de moi ?",
    "distractors": [
      {
        "word": "avez",
        "trap": "auxiliary",
        "tip": "Auxiliary Error: \"se souvenir\" is reflexive, so it uses ÊTRE (êtes), not AVOIR (avez)!"
      },
      {
        "word": "à",
        "trap": "preposition",
        "tip": "Preposition Error: We say \"se souvenir DE quelqu’un\", never \"à quelqu’un\"!"
      }
    ],
    "rule": "Se souvenir conjugates like venir (souvenu) and always takes the preposition \"de\" (souvenu de moi)."
  },
  {
    "id": "refl_souvenir_moi_tu",
    "topic": "reflexive",
    "structureId": "reflexive",
    "topicLabel": "Passé Composé · Se souvenir de",
    "scene": "past-remember-person",
    "english": "You remembered me. (to a male friend)",
    "targetWords": [
      "Tu",
      "t’es",
      "souvenu",
      "de",
      "moi"
    ],
    "fullSentence": "Tu t’es souvenu de moi.",
    "distractors": [
      {
        "word": "as",
        "trap": "auxiliary",
        "tip": "Auxiliary Error: \"se souvenir\" uses ÊTRE (t’es), not AVOIR (tu as)!"
      },
      {
        "word": "pour",
        "trap": "preposition",
        "tip": "Preposition Error: The fixed construction is \"se souvenir DE\", never \"pour\"!"
      }
    ],
    "rule": "PDF A1.3 page 194 : Tu t’es souvenu(e) de moi."
  },
  {
    "id": "refl_invariable_cheveux",
    "topic": "reflexive",
    "structureId": "reflexive",
    "topicLabel": "Accord Réflexif (Piège Objet)",
    "scene": "se-faire-hair-nails",
    "english": "She cut her hair herself.",
    "targetWords": [
      "Elle",
      "s’est",
      "coupé",
      "les",
      "cheveux"
    ],
    "fullSentence": "Elle s’est coupé les cheveux.",
    "distractors": [
      {
        "word": "coupée",
        "trap": "agreement",
        "tip": "Trap Alert! When the body part / direct object (\"les cheveux\") follows the verb, the participle does NOT agree (+e is wrong here)!"
      },
      {
        "word": "a",
        "trap": "auxiliary",
        "tip": "Auxiliary Error: \"se couper\" is reflexive, so it uses ÊTRE (est)!"
      }
    ],
    "rule": "If a direct object (les cheveux, les mains) is placed AFTER a reflexive verb, the participle remains invariable (coupé, not coupée)."
  },
  {
    "id": "refl_rendre_compte",
    "topic": "reflexive",
    "structureId": "reflexive",
    "topicLabel": "Verbe Invariable · Se rendre compte",
    "scene": "past-mistake-realize",
    "english": "She realized her mistake.",
    "targetWords": [
      "Elle",
      "s’est",
      "rendu",
      "compte",
      "de",
      "son",
      "erreur"
    ],
    "fullSentence": "Elle s’est rendu compte de son erreur.",
    "distractors": [
      {
        "word": "rendue",
        "trap": "agreement",
        "tip": "Invariable Trap! In \"se rendre compte\", \"compte\" is the direct object following rendre, so \"rendu\" is ALWAYS invariable (never rendue)!"
      },
      {
        "word": "a",
        "trap": "auxiliary",
        "tip": "Auxiliary Error: Reflexive verbs always take ÊTRE (est)!"
      }
    ],
    "rule": "PDF A1.3 page 214 : \"Elle s’est rendu compte\" (rendu reste toujours invariable)."
  },
  {
    "id": "refl_amuser_fem",
    "topic": "reflexive",
    "structureId": "reflexive",
    "topicLabel": "Passé Composé · S’amuser",
    "scene": "past-fun-vs-bored",
    "english": "I had a really good time at the party. (female speaker)",
    "targetWords": [
      "Je",
      "me",
      "suis",
      "bien",
      "amusée",
      "à",
      "la",
      "fête"
    ],
    "fullSentence": "Je me suis bien amusée à la fête.",
    "distractors": [
      {
        "word": "amusé",
        "trap": "agreement",
        "tip": "Agreement Error: Female speaker with ÊTRE requires feminine agreement +e (amusée)!"
      },
      {
        "word": "ai",
        "trap": "auxiliary",
        "tip": "Auxiliary Error: \"s’amuser\" uses ÊTRE (suis), not AVOIR (ai)!"
      }
    ],
    "rule": "PDF A1.3 page 202 : \"Je me suis bien amusée.\""
  },
  {
    "id": "refl_tromper_numero",
    "topic": "reflexive",
    "structureId": "reflexive",
    "topicLabel": "Passé Composé · Se tromper",
    "scene": "past-mistake-realize",
    "english": "I dialed the wrong phone number.",
    "targetWords": [
      "Je",
      "me",
      "suis",
      "trompé",
      "de",
      "numéro"
    ],
    "fullSentence": "Je me suis trompé de numéro.",
    "distractors": [
      {
        "word": "ai",
        "trap": "auxiliary",
        "tip": "Auxiliary Error: \"se tromper\" uses ÊTRE (suis), never AVOIR (ai)!"
      },
      {
        "word": "du",
        "trap": "preposition",
        "tip": "Preposition Error: The fixed idiom is \"se tromper de + nom\" (de numéro), not \"du\"!"
      }
    ],
    "rule": "Se tromper de + nom (se tromper de numéro, de train, d’adresse)."
  },
  {
    "id": "maison_arriver_dix_heures",
    "topic": "maison",
    "structureId": "maison",
    "topicLabel": "Passé Composé · Arriver (Être)",
    "scene": "clock-230",
    "english": "The girl arrived at ten o’clock.",
    "targetWords": [
      "La",
      "fille",
      "est",
      "arrivée",
      "à",
      "dix",
      "heures"
    ],
    "fullSentence": "La fille est arrivée à dix heures.",
    "distractors": [
      {
        "word": "a",
        "trap": "auxiliary",
        "tip": "Auxiliary Error: \"arriver\" is a movement verb and always takes ÊTRE (est), not AVOIR (a)!"
      },
      {
        "word": "arrivé",
        "trap": "agreement",
        "tip": "Agreement Error: \"La fille\" is feminine singular, so ÊTRE requires +e (arrivée)!"
      }
    ],
    "rule": "PDF A1.3 page 148 : \"La fille est arrivée à dix heures.\""
  },
  {
    "id": "maison_enfants_partis",
    "topic": "maison",
    "structureId": "maison",
    "topicLabel": "Passé Composé · Partir (Être)",
    "scene": "chat-friends",
    "english": "The children have already left on vacation.",
    "targetWords": [
      "Les",
      "enfants",
      "sont",
      "déjà",
      "partis",
      "en",
      "vacances"
    ],
    "fullSentence": "Les enfants sont déjà partis en vacances.",
    "distractors": [
      {
        "word": "ont",
        "trap": "auxiliary",
        "tip": "Auxiliary Error: \"partir\" is a DR MRS VANDERTRAMP verb and takes ÊTRE (sont), not AVOIR (ont)!"
      },
      {
        "word": "parti",
        "trap": "agreement",
        "tip": "Agreement Error: \"Les enfants\" is masculine plural, requiring +s (partis)!"
      }
    ],
    "rule": "PDF A1.3 page 150 : \"Les enfants sont déjà partis en vacances.\""
  },
  {
    "id": "maison_nee_1970",
    "topic": "maison",
    "structureId": "maison",
    "topicLabel": "Passé Composé · Naître (Être)",
    "scene": "feel-tired",
    "english": "Were you born in 1970? (to a female)",
    "targetWords": [
      "Tu",
      "es",
      "née",
      "en",
      "1970",
      "?"
    ],
    "fullSentence": "Tu es née en 1970 ?",
    "distractors": [
      {
        "word": "as",
        "trap": "auxiliary",
        "tip": "Auxiliary Error: \"naître\" takes ÊTRE (tu es), never AVOIR (tu as)!"
      },
      {
        "word": "né",
        "trap": "agreement",
        "tip": "Agreement Error: When addressing a female, the participle takes +e (née)!"
      }
    ],
    "rule": "PDF A1.3 page 152 : \"Tu es née en 1970 ?\""
  },
  {
    "id": "maison_entres_porte",
    "topic": "maison",
    "structureId": "maison",
    "topicLabel": "Passé Composé · Entrer (Être)",
    "scene": "bldg-elevator",
    "english": "We entered through the main door.",
    "targetWords": [
      "Nous",
      "sommes",
      "entrés",
      "par",
      "la",
      "porte",
      "principale"
    ],
    "fullSentence": "Nous sommes entrés par la porte principale.",
    "distractors": [
      {
        "word": "avons",
        "trap": "auxiliary",
        "tip": "Auxiliary Error: \"entrer\" takes ÊTRE (sommes), not AVOIR (avons)!"
      },
      {
        "word": "entré",
        "trap": "agreement",
        "tip": "Agreement Error: \"Nous\" is plural, requiring plural agreement +s (entrés)!"
      }
    ],
    "rule": "PDF A1.3 page 154 : \"Nous sommes entrés par la porte principale.\""
  },
  {
    "id": "maison_restees_hier",
    "topic": "maison",
    "structureId": "maison",
    "topicLabel": "Passé Composé · Rester (Être)",
    "scene": "chat-friends",
    "english": "Did you stay at your place yesterday evening? (to females)",
    "targetWords": [
      "Vous",
      "êtes",
      "restées",
      "chez",
      "vous",
      "hier",
      "soir",
      "?"
    ],
    "fullSentence": "Vous êtes restées chez vous hier soir ?",
    "distractors": [
      {
        "word": "avez",
        "trap": "auxiliary",
        "tip": "Auxiliary Error: \"rester\" takes ÊTRE (êtes), not AVOIR (avez)!"
      },
      {
        "word": "resté",
        "trap": "agreement",
        "tip": "Agreement Error: Plural feminine subjects take +es (restées)!"
      }
    ],
    "rule": "PDF A1.3 page 156 : \"Vous êtes restées chez vous hier soir ?\""
  },
  {
    "id": "maison_sarah_rentree",
    "topic": "maison",
    "structureId": "maison",
    "topicLabel": "Passé Composé · Rentrer (Être)",
    "scene": "clock-230",
    "english": "Yesterday evening, Sarah came home late.",
    "targetWords": [
      "Hier",
      "soir",
      "Sarah",
      "est",
      "rentrée",
      "tard"
    ],
    "fullSentence": "Hier soir, Sarah est rentrée tard.",
    "distractors": [
      {
        "word": "a",
        "trap": "auxiliary",
        "tip": "Auxiliary Error: \"rentrer\" takes ÊTRE (est), not AVOIR (a)!"
      },
      {
        "word": "rentré",
        "trap": "agreement",
        "tip": "Agreement Error: Sarah is feminine singular ➜ rentrée (+e)!"
      }
    ],
    "rule": "PDF A1.3 page 168 : \"Hier soir, Sarah est rentrée tard.\""
  },
  {
    "id": "maison_tomber_amoureuse",
    "topic": "maison",
    "structureId": "maison",
    "topicLabel": "Passé Composé · Tomber amoureux",
    "scene": "blush-face",
    "english": "I fell in love with Paris. (female speaker)",
    "targetWords": [
      "Je",
      "suis",
      "tombée",
      "amoureuse",
      "de",
      "Paris"
    ],
    "fullSentence": "Je suis tombée amoureuse de Paris.",
    "distractors": [
      {
        "word": "ai",
        "trap": "auxiliary",
        "tip": "Auxiliary Error: \"tomber\" uses ÊTRE (suis), not AVOIR (ai)!"
      },
      {
        "word": "tombé",
        "trap": "agreement",
        "tip": "Agreement Error: Female speaker with ÊTRE agrees with +e (tombée)!"
      }
    ],
    "rule": "PDF A1.3 page 131 : \"Je suis tombée amoureuse (tomber amoureux / amoureuse).\""
  },
  {
    "id": "maison_parapluie_sortir",
    "topic": "maison",
    "structureId": "maison",
    "topicLabel": "Avoir vs Être Combinés",
    "scene": "past-rain-coat",
    "english": "He took his umbrella and he went out.",
    "targetWords": [
      "Il",
      "a",
      "pris",
      "son",
      "parapluie",
      "et",
      "il",
      "est",
      "sorti"
    ],
    "fullSentence": "Il a pris son parapluie et il est sorti.",
    "distractors": [
      {
        "word": "est pris",
        "trap": "auxiliary",
        "tip": "Auxiliary Error: \"prendre\" takes AVOIR (a pris), never ÊTRE!"
      },
      {
        "word": "a sorti",
        "trap": "auxiliary",
        "tip": "Auxiliary Error: Movement \"sortir\" takes ÊTRE (est sorti), not AVOIR!"
      }
    ],
    "rule": "PDF A1.3 page 164 : \"Il a pris son parapluie et il est sorti.\""
  },
  {
    "id": "sefaire_cheveux_pc",
    "topic": "se_faire",
    "structureId": "se_faire",
    "topicLabel": "Se faire + Infinitif · Cheveux",
    "scene": "se-faire-hair-nails",
    "english": "I got my hair cut.",
    "targetWords": [
      "Je",
      "me",
      "suis",
      "fait",
      "couper",
      "les",
      "cheveux"
    ],
    "fullSentence": "Je me suis fait couper les cheveux.",
    "distractors": [
      {
        "word": "faite",
        "trap": "agreement",
        "tip": "Invariable Participle Trap! In \"se faire + infinitif\", the participle FAIT is ALWAYS invariable (never faite)!"
      },
      {
        "word": "ai",
        "trap": "auxiliary",
        "tip": "Auxiliary Error: Reflexive \"se faire\" takes ÊTRE (suis), not AVOIR (ai)!"
      }
    ],
    "rule": "PDF A1.3 page 225 : \"Je me suis fait couper les cheveux !\" (fait est invariable)."
  },
  {
    "id": "sefaire_ongles_present",
    "topic": "se_faire",
    "structureId": "se_faire",
    "topicLabel": "Se faire + Infinitif · Ongles",
    "scene": "se-faire-hair-nails",
    "english": "Hello, I am here to get my nails done.",
    "targetWords": [
      "Bonjour",
      "je",
      "suis",
      "là",
      "pour",
      "me",
      "faire",
      "faire",
      "les",
      "ongles"
    ],
    "fullSentence": "Bonjour je suis là pour me faire faire les ongles.",
    "distractors": [
      {
        "word": "pour faire",
        "trap": "structure",
        "tip": "Causative Error: \"se faire faire\" expresses having someone else do your nails!"
      },
      {
        "word": "fais",
        "trap": "infinitive",
        "tip": "Grammar Error: After preposition \"pour\", the verb must be in the infinitive (faire)!"
      }
    ],
    "rule": "PDF A1.3 page 224 : \"Bonjour je suis là pour me faire faire les ongles.\""
  },
  {
    "id": "sefaire_rembourser_pc",
    "topic": "se_faire",
    "structureId": "se_faire",
    "topicLabel": "Se faire + Infinitif · Rembourser",
    "scene": "se-faire-stolen",
    "english": "I got my train ticket refunded.",
    "targetWords": [
      "Je",
      "me",
      "suis",
      "fait",
      "rembourser",
      "mon",
      "billet"
    ],
    "fullSentence": "Je me suis fait rembourser mon billet.",
    "distractors": [
      {
        "word": "faite",
        "trap": "agreement",
        "tip": "Invariable Participle Trap! \"fait\" remains invariable before an infinitive!"
      },
      {
        "word": "ai",
        "trap": "auxiliary",
        "tip": "Auxiliary Error: Reflexive verbs always take ÊTRE (suis)!"
      }
    ],
    "rule": "PDF A1.3 page 228 : \"Se faire rembourser ➜ Je me suis fait rembourser.\""
  },
  {
    "id": "sefaire_larguer_pc",
    "topic": "se_faire",
    "structureId": "se_faire",
    "topicLabel": "Se faire + Infinitif · Rupture",
    "scene": "se-faire-fired-dumped",
    "english": "He got dumped by Marie.",
    "targetWords": [
      "Il",
      "s’est",
      "fait",
      "larguer",
      "par",
      "Marie"
    ],
    "fullSentence": "Il s’est fait larguer par Marie.",
    "distractors": [
      {
        "word": "a",
        "trap": "auxiliary",
        "tip": "Auxiliary Error: Reflexive structure takes ÊTRE (s’est), not AVOIR (a)!"
      },
      {
        "word": "faite",
        "trap": "agreement",
        "tip": "Invariable Trap: \"fait\" does not agree!"
      }
    ],
    "rule": "PDF A1.3 page 230 : \"Il s’est fait larguer par Marie.\""
  },
  {
    "id": "sefaire_virer_pc",
    "topic": "se_faire",
    "structureId": "se_faire",
    "topicLabel": "Se faire + Infinitif · Travail",
    "scene": "se-faire-fired-dumped",
    "english": "The manager got fired from the company.",
    "targetWords": [
      "Le",
      "directeur",
      "s’est",
      "fait",
      "virer",
      "de",
      "l’entreprise"
    ],
    "fullSentence": "Le director s’est fait virer de l’entreprise.",
    "distractors": [
      {
        "word": "a",
        "trap": "auxiliary",
        "tip": "Auxiliary Error: Reflexive takes ÊTRE (s’est)!"
      },
      {
        "word": "faite",
        "trap": "agreement",
        "tip": "Invariable Trap: \"fait\" is strictly invariable in se faire + infinitif!"
      }
    ],
    "rule": "PDF A1.3 page 219 : \"Le directeur corrompu s’est fait virer de l’entreprise.\""
  },
  {
    "id": "sefaire_operer_genoux",
    "topic": "se_faire",
    "structureId": "se_faire",
    "topicLabel": "Se faire + Infinitif · Santé",
    "scene": "se-faire-doctor-tooth",
    "english": "He had his knees operated on three years ago.",
    "targetWords": [
      "Il",
      "s’est",
      "fait",
      "opérer",
      "les",
      "genoux",
      "il",
      "y",
      "a",
      "trois",
      "ans"
    ],
    "fullSentence": "Il s’est fait opérer les genoux il y a trois ans.",
    "distractors": [
      {
        "word": "faits",
        "trap": "agreement",
        "tip": "Invariable Trap: Even with plural object \"les genoux\", \"fait\" remains invariable!"
      },
      {
        "word": "a",
        "trap": "auxiliary",
        "tip": "Auxiliary Error: Takes ÊTRE (s’est)!"
      }
    ],
    "rule": "PDF A1.3 page 232 : \"Il s’est fait opérer les genoux il y a 3 ans.\""
  },
  {
    "id": "sefaire_arracher_dent",
    "topic": "se_faire",
    "structureId": "se_faire",
    "topicLabel": "Se faire + Infinitif · Dentiste",
    "scene": "se-faire-doctor-tooth",
    "english": "She had her wisdom tooth pulled out.",
    "targetWords": [
      "Elle",
      "s’est",
      "fait",
      "arracher",
      "la",
      "dent",
      "de",
      "sagesse"
    ],
    "fullSentence": "Elle s’est fait arracher la dent de sagesse.",
    "distractors": [
      {
        "word": "faite",
        "trap": "agreement",
        "tip": "Invariable Trap: Even though \"Elle\" and \"la dent\" are feminine, \"fait\" remains invariable!"
      },
      {
        "word": "a",
        "trap": "auxiliary",
        "tip": "Auxiliary Error: Reflexive verbs use ÊTRE (s’est)!"
      }
    ],
    "rule": "PDF A1.3 page 234 : \"Elle s’est fait arracher la dent de sagesse.\""
  },
  {
    "id": "neque_dormir_3h",
    "topic": "neque",
    "structureId": "neque",
    "topicLabel": "Négation Restrictive · Ne ... que",
    "scene": "past-sleep-in-11",
    "english": "I only sleep three hours per night.",
    "targetWords": [
      "Je",
      "ne",
      "dors",
      "que",
      "trois",
      "heures",
      "par",
      "nuit"
    ],
    "fullSentence": "Je ne dors que trois heures par nuit.",
    "distractors": [
      {
        "word": "pas",
        "trap": "negation",
        "tip": "Restriction Error: Do NOT use \"pas\" with \"ne... que\"! \"ne... que\" means only/just."
      },
      {
        "word": "seulement",
        "trap": "redundancy",
        "tip": "Style Error: \"ne... que\" already means \"seulement\". Do not combine them."
      }
    ],
    "rule": "PDF A1.3 page 239 : \"Ne .. Que ➜ je ne dors que 3h ➜ I just sleep 3 hours.\""
  },
  {
    "id": "neque_travailler_3j",
    "topic": "neque",
    "structureId": "neque",
    "topicLabel": "Négation Restrictive · Ne ... que",
    "scene": "work",
    "english": "She only works three days a week.",
    "targetWords": [
      "Elle",
      "ne",
      "travaille",
      "que",
      "trois",
      "jours",
      "par",
      "semaine"
    ],
    "fullSentence": "Elle ne travaille que trois jours par semaine.",
    "distractors": [
      {
        "word": "pas",
        "trap": "negation",
        "tip": "Grammar Trap: Do NOT add \"pas\"! \"Elle ne travaille que\" = she just works."
      },
      {
        "word": "plus",
        "trap": "negation_type",
        "tip": "Meaning Error: \"ne... plus\" means no longer, while \"ne... que\" means only!"
      }
    ],
    "rule": "PDF A1.3 page 240 : \"Elle ne travaille que trois jours par semaine.\""
  },
  {
    "id": "neque_argent_20e",
    "topic": "neque",
    "structureId": "neque",
    "topicLabel": "Négation Restrictive · Ne ... que",
    "scene": "market-scale",
    "english": "He only has twenty euros in his wallet.",
    "targetWords": [
      "Il",
      "n’a",
      "que",
      "vingt",
      "euros",
      "dans",
      "son",
      "portefeuille"
    ],
    "fullSentence": "Il n’a que vingt euros dans son portefeuille.",
    "distractors": [
      {
        "word": "pas",
        "trap": "negation",
        "tip": "Trap Alert: Never add \"pas\" when expressing \"only\" with \"ne... que\"!"
      },
      {
        "word": "rien",
        "trap": "negation_type",
        "tip": "Meaning Error: \"rien\" means nothing!"
      }
    ],
    "rule": "Formula: Sujet + n’ + verbe + que + montant/quantité."
  },
  {
    "id": "neque_legumes_manger",
    "topic": "neque",
    "structureId": "neque",
    "topicLabel": "Négation Restrictive · Ne ... que",
    "scene": "chore-cooking",
    "english": "My brother only eats fresh vegetables.",
    "targetWords": [
      "Mon",
      "frère",
      "ne",
      "mange",
      "que",
      "des",
      "légumes",
      "frais"
    ],
    "fullSentence": "Mon frère ne mange que des légumes frais.",
    "distractors": [
      {
        "word": "pas",
        "trap": "negation",
        "tip": "Trap Alert: \"ne mange que\" means only eats!"
      },
      {
        "word": "jamais",
        "trap": "negation_type",
        "tip": "Meaning Error: \"ne... jamais\" means never!"
      }
    ],
    "rule": "\"Que\" is placed directly in front of the restricted item (que des légumes)."
  },
  {
    "id": "neque_parler_francais",
    "topic": "neque",
    "structureId": "neque",
    "topicLabel": "Négation Restrictive · Ne ... que",
    "scene": "chat-friends",
    "english": "In class, we only speak French.",
    "targetWords": [
      "En",
      "classe",
      "nous",
      "ne",
      "parlons",
      "que",
      "français"
    ],
    "fullSentence": "En classe nous ne parlons que français.",
    "distractors": [
      {
        "word": "pas",
        "trap": "negation",
        "tip": "Grammar Trap: Do not use \"pas\" with restrictive \"ne... que\"!"
      },
      {
        "word": "plus",
        "trap": "negation_type",
        "tip": "Meaning Error: \"ne... plus\" means no longer!"
      }
    ],
    "rule": "Formula: Sujet + ne + verbe + que + langue."
  },
  {
    "id": "cause_balai_parce_que",
    "topic": "cause",
    "structureId": "cause",
    "topicLabel": "Exprimer la Cause · Parce que",
    "scene": "bldg-broom-ceiling",
    "english": "She bangs the ceiling because she is irritated by the noise.",
    "targetWords": [
      "Elle",
      "tape",
      "au",
      "plafond",
      "parce",
      "qu’elle",
      "est",
      "énervée"
    ],
    "fullSentence": "Elle tape au plafond parce qu’elle est énervée.",
    "distractors": [
      {
        "word": "à cause de",
        "trap": "connector_type",
        "tip": "Grammar Error: \"À cause de\" must be followed by a NOUN, not a full subject + verb clause!"
      },
      {
        "word": "grâce à",
        "trap": "sentiment",
        "tip": "Sentiment Error: \"Grâce à\" is for positive causes, not being irritated!"
      }
    ],
    "rule": "PDF A1.3 page 8 : \"tape au plafond avec un balai parce qu’elle est énervée par le bruit.\""
  },
  {
    "id": "cause_balai_a_cause_de",
    "topic": "cause",
    "structureId": "cause",
    "topicLabel": "Exprimer la Cause · À cause de",
    "scene": "bldg-broom-ceiling",
    "english": "She is angry because of the neighbors’ noise.",
    "targetWords": [
      "Elle",
      "est",
      "furieuse",
      "à",
      "cause",
      "du",
      "bruit"
    ],
    "fullSentence": "Elle est furieuse à cause du bruit.",
    "distractors": [
      {
        "word": "parce que",
        "trap": "connector_type",
        "tip": "Grammar Error: \"Parce que\" requires a full clause (sujet + verbe), not a single noun!"
      },
      {
        "word": "grâce au",
        "trap": "sentiment",
        "tip": "Sentiment Error: Neighbor noise is a negative disturbance, so use \"à cause du\"!"
      }
    ],
    "rule": "PDF A1.3 page 9 : \"à cause du bruit (à cause de + nom pour une cause négative).\""
  },
  {
    "id": "cause_train_en_raison_de",
    "topic": "cause",
    "structureId": "cause",
    "topicLabel": "Exprimer la Cause · En raison de",
    "scene": "pro-repair-work",
    "english": "The train is delayed due to construction works.",
    "targetWords": [
      "Le",
      "train",
      "est",
      "en",
      "retard",
      "en",
      "raison",
      "des",
      "travaux"
    ],
    "fullSentence": "Le train est en retard en raison des travaux.",
    "distractors": [
      {
        "word": "parce que",
        "trap": "connector_type",
        "tip": "Grammar Error: \"Parce que\" cannot be followed directly by a noun (\"des travaux\")!"
      },
      {
        "word": "à cause que",
        "trap": "false_syntax",
        "tip": "Syntax Error: \"À cause que\" does not exist in standard French!"
      }
    ],
    "rule": "PDF A1.3 page 6 : \"En raison de + nom\" (formal, official, administrative cause)."
  },
  {
    "id": "cause_reussite_grace_a",
    "topic": "cause",
    "structureId": "cause",
    "topicLabel": "Exprimer la Cause · Grâce à",
    "scene": "thanks",
    "english": "I passed my exam thanks to your help.",
    "targetWords": [
      "J’ai",
      "réussi",
      "mon",
      "examen",
      "grâce",
      "à",
      "ton",
      "aide"
    ],
    "fullSentence": "J’ai réussi mon examen grâce à ton aide.",
    "distractors": [
      {
        "word": "à cause de",
        "trap": "sentiment",
        "tip": "Sentiment Error: Passing an exam is a positive outcome! Use \"grâce à\", never \"à cause de\"!"
      },
      {
        "word": "parce que",
        "trap": "connector_type",
        "tip": "Grammar Error: \"ton aide\" is a noun, so use \"grâce à\"!"
      }
    ],
    "rule": "\"Grâce à + nom\" is strictly used for positive causes, benefits, or gratitude."
  },
  {
    "id": "cause_retard_bouchons",
    "topic": "cause",
    "structureId": "cause",
    "topicLabel": "Exprimer la Cause · À cause de",
    "scene": "feel-tired",
    "english": "I am late because of traffic jams.",
    "targetWords": [
      "Je",
      "suis",
      "en",
      "retard",
      "à",
      "cause",
      "des",
      "bouchons"
    ],
    "fullSentence": "Je suis en retard à cause des bouchons.",
    "distractors": [
      {
        "word": "grâce aux",
        "trap": "sentiment",
        "tip": "Sentiment Error: Traffic jams are a nuisance (negative), so use \"à cause des\"!"
      },
      {
        "word": "parce que",
        "trap": "connector_type",
        "tip": "Grammar Error: \"des bouchons\" is a noun phrase!"
      }
    ],
    "rule": "à cause de + les bouchons ➜ à cause des bouchons."
  },
  {
    "id": "rules_tondre_pelouse",
    "topic": "rules",
    "structureId": "rules",
    "topicLabel": "Obligation · Tondre la pelouse",
    "scene": "bldg-lawn-mow",
    "english": "You must mow the lawn on Saturday morning.",
    "targetWords": [
      "Il",
      "faut",
      "tondre",
      "la",
      "pelouse",
      "le",
      "samedi",
      "matin"
    ],
    "fullSentence": "Il faut tondre la pelouse le samedi matin.",
    "distractors": [
      {
        "word": "tonds",
        "trap": "infinitive",
        "tip": "Infinitive Error: After \"Il faut\", the verb must be in the infinitive (tondre)!"
      },
      {
        "word": "à tondre",
        "trap": "preposition",
        "tip": "Preposition Error: \"Il faut\" is followed directly by an infinitive without \"à\"!"
      }
    ],
    "rule": "PDF A1.3 page 11 & 50 : \"Tondre la pelouse / obligation : Il faut tondre.\""
  },
  {
    "id": "rules_arroser_gazon",
    "topic": "rules",
    "structureId": "rules",
    "topicLabel": "Obligation · Arroser le gazon",
    "scene": "plants",
    "english": "You must water the lawn in the evening.",
    "targetWords": [
      "Vous",
      "devez",
      "arroser",
      "le",
      "gazon",
      "le",
      "soir"
    ],
    "fullSentence": "Vous devez arroser le gazon le soir.",
    "distractors": [
      {
        "word": "arrosez",
        "trap": "infinitive",
        "tip": "Infinitive Error: After modal verb \"devoir\", use the infinitive (arroser)!"
      },
      {
        "word": "pour arroser",
        "trap": "preposition",
        "tip": "Preposition Error: Modal verbs take an infinitive directly without \"pour\"!"
      }
    ],
    "rule": "PDF A1.3 page 12 & 51 : \"arroser le gazon / obligation : Vous devez arroser.\""
  },
  {
    "id": "rules_interdit_bruit_22h",
    "topic": "rules",
    "structureId": "rules",
    "topicLabel": "Interdiction · Bruit après 22h",
    "scene": "bldg-neighbors",
    "english": "It is forbidden to make noise after ten PM.",
    "targetWords": [
      "Il",
      "est",
      "interdit",
      "de",
      "faire",
      "du",
      "bruit",
      "après",
      "22h"
    ],
    "fullSentence": "Il est interdit de faire du bruit après 22h.",
    "distractors": [
      {
        "word": "à faire",
        "trap": "preposition",
        "tip": "Preposition Error: \"Il est interdit\" requires \"DE\", never \"à\"!"
      },
      {
        "word": "fait",
        "trap": "infinitive",
        "tip": "Infinitive Error: Must use the infinitive (faire)!"
      }
    ],
    "rule": "PDF A1.3 page 49 : \"Il est interdit de + infinitif.\""
  },
  {
    "id": "rules_defense_fumer_hall",
    "topic": "rules",
    "structureId": "rules",
    "topicLabel": "Interdiction · Défense de fumer",
    "scene": "bldg-common-areas",
    "english": "Smoking is strictly forbidden in the building lobby.",
    "targetWords": [
      "Défense",
      "de",
      "fumer",
      "dans",
      "le",
      "hall",
      "de",
      "l’immeuble"
    ],
    "fullSentence": "Défense de fumer dans le hall de l’immeuble.",
    "distractors": [
      {
        "word": "à fumer",
        "trap": "preposition",
        "tip": "Preposition Error: The fixed sign phrase is \"Défense DE + infinitif\"!"
      },
      {
        "word": "fume",
        "trap": "infinitive",
        "tip": "Infinitive Error: Use the infinitive form (fumer)!"
      }
    ],
    "rule": "Formula: Défense de + infinitif (strict prohibition signage)."
  },
  {
    "id": "rules_priere_velos",
    "topic": "rules",
    "structureId": "rules",
    "topicLabel": "Interdiction Polie · Vélos",
    "scene": "bldg-bike-room",
    "english": "Please do not leave bicycles in the hallway.",
    "targetWords": [
      "Prière",
      "de",
      "ne",
      "pas",
      "laisser",
      "de",
      "vélos",
      "dans",
      "le",
      "couloir"
    ],
    "fullSentence": "Prière de ne pas laisser de vélos dans le couloir.",
    "distractors": [
      {
        "word": "pas laisser",
        "trap": "negation",
        "tip": "Negation Trap: Both \"ne\" and \"pas\" must precede the infinitive: \"ne pas laisser\"!"
      },
      {
        "word": "à laisser",
        "trap": "preposition",
        "tip": "Preposition Error: \"Prière\" takes \"de\"!"
      }
    ],
    "rule": "PDF A1.3 page 14 : \"laisser quelque chose quelque part = mettre / prière de ne pas laisser.\""
  },
  {
    "id": "rules_detritus_poubelle",
    "topic": "rules",
    "structureId": "rules",
    "topicLabel": "Obligation · Détritus & Ordures",
    "scene": "bldg-recycle-bins",
    "english": "You must throw trash into the bins.",
    "targetWords": [
      "Il",
      "faut",
      "jeter",
      "les",
      "détritus",
      "dans",
      "les",
      "poubelles"
    ],
    "fullSentence": "Il faut jeter les détritus dans les poubelles.",
    "distractors": [
      {
        "word": "jette",
        "trap": "infinitive",
        "tip": "Infinitive Error: \"Il faut\" requires the infinitive (jeter)!"
      },
      {
        "word": "à jeter",
        "trap": "preposition",
        "tip": "Preposition Error: No preposition after \"Il faut\"!"
      }
    ],
    "rule": "PDF A1.3 page 42-45 : \"le détritus, l’ordure (f), le déchet / obligation de jeter.\""
  },
  {
    "id": "rules_nuire_voisins",
    "topic": "rules",
    "structureId": "rules",
    "topicLabel": "Consigne · Nuire à autrui",
    "scene": "bldg-neighbors",
    "english": "You must not disturb the tranquility of the neighbors.",
    "targetWords": [
      "Vous",
      "ne",
      "devez",
      "pas",
      "nuire",
      "à",
      "la",
      "tranquillité",
      "des",
      "voisins"
    ],
    "fullSentence": "Vous ne devez pas nuire à la tranquillité des voisins.",
    "distractors": [
      {
        "word": "au voisins",
        "trap": "preposition",
        "tip": "Grammar Error: \"les voisins\" is plural, so à + les = des voisins!"
      },
      {
        "word": "nuire de",
        "trap": "verb_construction",
        "tip": "Construction Error: The verb is \"nuire À quelqu’un\", never \"nuire de\"!"
      }
    ],
    "rule": "PDF A1.3 page 47 : \"Nuire à (nuire aux voisins / à la tranquillité).\""
  },
  {
    "id": "rules_interdit_baigner",
    "topic": "rules",
    "structureId": "rules",
    "topicLabel": "Interdiction · Se baigner",
    "scene": "bldg-balcony-lawn",
    "english": "It is strictly forbidden to swim here.",
    "targetWords": [
      "Il",
      "est",
      "strictement",
      "interdit",
      "de",
      "se",
      "baigner",
      "ici"
    ],
    "fullSentence": "Il est strictement interdit de se baigner ici.",
    "distractors": [
      {
        "word": "à se baigner",
        "trap": "preposition",
        "tip": "Preposition Error: \"interdit DE\", not \"à\"!"
      },
      {
        "word": "baigner",
        "trap": "reflexive",
        "tip": "Pronoun Error: \"se baigner\" is reflexive; do not omit \"se\"!"
      }
    ],
    "rule": "PDF A1.3 page 38 & 49 : \"se baigner / interdiction : Il est interdit de se baigner.\""
  },
  {
    "id": "repairs_evier_bouche",
    "topic": "repairs",
    "structureId": "repairs",
    "topicLabel": "Dépannage · Évier bouché",
    "scene": "pro-repair-work",
    "english": "I have a problem with my sink, it is clogged.",
    "targetWords": [
      "J’ai",
      "un",
      "problème",
      "avec",
      "mon",
      "évier",
      "il",
      "est",
      "bouché"
    ],
    "fullSentence": "J’ai un problème avec mon évier, il est bouché.",
    "distractors": [
      {
        "word": "a bouché",
        "trap": "auxiliary",
        "tip": "Auxiliary Error: Passive state takes ÊTRE (est bouché), not AVOIR (a bouché)!"
      },
      {
        "word": "de mon évier",
        "trap": "preposition",
        "tip": "Preposition Error: \"un problème avec\", not \"de\"!"
      }
    ],
    "rule": "PDF A1.3 page 77 : \"J’ai un problème avec mon évier. Il est bouché.\""
  },
  {
    "id": "repairs_eau_ecouler",
    "topic": "repairs",
    "structureId": "repairs",
    "topicLabel": "Dépannage · Écoulement de l’eau",
    "scene": "pro-repair-work",
    "english": "Since yesterday evening, the water is not draining at all.",
    "targetWords": [
      "Depuis",
      "hier",
      "soir",
      "l’eau",
      "ne",
      "s’écoule",
      "plus",
      "du",
      "tout"
    ],
    "fullSentence": "Depuis hier soir l’eau ne s’écoule plus du tout.",
    "distractors": [
      {
        "word": "coule pas",
        "trap": "verb_choice",
        "tip": "Vocabulary Choice: Drainage is \"s’écouler\" (l’eau ne s’écoule plus)!"
      },
      {
        "word": "depuis que",
        "trap": "preposition",
        "tip": "Preposition Error: \"Depuis + nom\", not \"depuis que\"!"
      }
    ],
    "rule": "PDF A1.3 page 79 : \"Depuis hier soir. L’eau ne s’écoule plus du tout.\""
  },
  {
    "id": "repairs_fuite_lavabo",
    "topic": "repairs",
    "structureId": "repairs",
    "topicLabel": "Dépannage · Fuite d’eau",
    "scene": "pro-repair-work",
    "english": "Underneath the sink, there is a water leak.",
    "targetWords": [
      "En",
      "dessous",
      "du",
      "lavabo",
      "il",
      "y",
      "a",
      "une",
      "fuite",
      "d’eau"
    ],
    "fullSentence": "En dessous du lavabo il y a une fuite d’eau.",
    "distractors": [
      {
        "word": "en dessus",
        "trap": "preposition",
        "tip": "Preposition Error: \"En dessous\" means underneath, while \"en dessus\" means on top!"
      },
      {
        "word": "de fuite",
        "trap": "article",
        "tip": "Article Error: We say \"il y a UNE fuite d’eau\"!"
      }
    ],
    "rule": "PDF A1.3 page 90 : \"En dessous de l’évier/du lavabo, il y a une fuite d’eau.\""
  },
  {
    "id": "repairs_faire_venir_plombier",
    "topic": "repairs",
    "structureId": "repairs",
    "topicLabel": "Dépannage · Faire venir un plombier",
    "scene": "pro-repair-work",
    "english": "How can I have a plumber come over?",
    "targetWords": [
      "Comment",
      "est-ce",
      "que",
      "je",
      "peux",
      "faire",
      "venir",
      "un",
      "plombier",
      "?"
    ],
    "fullSentence": "Comment est-ce que je peux faire venir un plombier ?",
    "distractors": [
      {
        "word": "faire aller",
        "trap": "causative",
        "tip": "Causative Error: Having a professional come to your home is \"faire venir\"!"
      },
      {
        "word": "faire un",
        "trap": "incomplete",
        "tip": "Grammar Error: Must include the verb \"venir\" (faire venir un plombier)!"
      }
    ],
    "rule": "PDF A1.3 page 91 : \"Comment je peux faire venir un plombier ?\""
  },
  {
    "id": "repairs_chauffage_panne",
    "topic": "repairs",
    "structureId": "repairs",
    "topicLabel": "Dépannage · Chauffage en panne",
    "scene": "pro-repair-work",
    "english": "My heating is not working anymore, it is very cold in my place.",
    "targetWords": [
      "Mon",
      "chauffage",
      "ne",
      "fonctionne",
      "plus",
      "il",
      "fait",
      "très",
      "froid",
      "chez",
      "moi"
    ],
    "fullSentence": "Mon chauffage ne fonctionne plus il fait très froid chez moi.",
    "distractors": [
      {
        "word": "marche pas plus",
        "trap": "syntax",
        "tip": "Negation Error: \"ne fonctionne plus\", not \"pas plus\"!"
      },
      {
        "word": "est froid",
        "trap": "weather_verb",
        "tip": "Weather Error: Ambient temperature uses \"il fait froid\", not \"il est froid\"!"
      }
    ],
    "rule": "PDF A1.3 page 83 : \"Mon chauffage ne fonctionne plus. Il fait très froid chez moi.\""
  },
  {
    "id": "repairs_radiateur_froid",
    "topic": "repairs",
    "structureId": "repairs",
    "topicLabel": "Dépannage · Radiateur froid",
    "scene": "pro-repair-work",
    "english": "The thermostat is set correctly, but the radiator remains cold.",
    "targetWords": [
      "Le",
      "thermostat",
      "est",
      "réglé",
      "correctement",
      "mais",
      "le",
      "radiateur",
      "reste",
      "froid"
    ],
    "fullSentence": "Le thermostat est réglé correctement mais le radiateur reste froid.",
    "distractors": [
      {
        "word": "est froidé",
        "trap": "adjective",
        "tip": "Adjective Error: The adjective is \"froid\", not \"froidé\"!"
      },
      {
        "word": "reste de froid",
        "trap": "preposition",
        "tip": "Preposition Error: \"rester + adjectif\" without preposition!"
      }
    ],
    "rule": "PDF A1.3 page 85 : \"il est réglé correctement, mais le radiateur reste froid.\""
  },
  {
    "id": "seq_avant_de_partir",
    "topic": "sequence",
    "structureId": "sequence",
    "topicLabel": "Ordre Chronologique · Avant de",
    "scene": "clock-230",
    "english": "Before leaving, I always turn off the light.",
    "targetWords": [
      "Avant",
      "de",
      "partir",
      "j’éteins",
      "toujours",
      "la",
      "lumière"
    ],
    "fullSentence": "Avant de partir, j’éteins toujours la lumière.",
    "distractors": [
      {
        "word": "avant partir",
        "trap": "preposition",
        "tip": "Preposition Trap: Before an infinitive, \"avant\" MUST take \"DE\" (Avant de partir)!"
      },
      {
        "word": "avant que partir",
        "trap": "syntax",
        "tip": "Syntax Error: \"avant que\" takes the subjunctive with a different subject!"
      }
    ],
    "rule": "PDF A1.3 page 237 : \"puis, ensuite, après ça, avant de + infinitif.\""
  },
  {
    "id": "seq_dabord_puis_ensuite",
    "topic": "sequence",
    "structureId": "sequence",
    "topicLabel": "Ordre Chronologique · D’abord, puis",
    "scene": "clock-230",
    "english": "First I wake up, then I shower.",
    "targetWords": [
      "D’abord",
      "je",
      "me",
      "réveille",
      "puis",
      "je",
      "me",
      "douche"
    ],
    "fullSentence": "D’abord je me réveille puis je me douche.",
    "distractors": [
      {
        "word": "après de",
        "trap": "connector",
        "tip": "Connector Error: Use \"puis\" or \"ensuite\" to sequence actions!"
      },
      {
        "word": "que",
        "trap": "connector",
        "tip": "Syntax Error: \"puis\" connects sentences directly without \"que\"!"
      }
    ],
    "rule": "Formula: D’abord ➜ puis ➜ ensuite ➜ après ça."
  },
  {
    "id": "seq_depuis_hier_soir",
    "topic": "sequence",
    "structureId": "sequence",
    "topicLabel": "Temps Continu · Depuis",
    "scene": "pro-repair-work",
    "english": "The bathroom sink has been leaking since yesterday evening.",
    "targetWords": [
      "Le",
      "lavabo",
      "fuit",
      "depuis",
      "hier",
      "soir"
    ],
    "fullSentence": "Le lavabo fuit depuis hier soir.",
    "distractors": [
      {
        "word": "pour",
        "trap": "preposition",
        "tip": "Preposition Trap: English \"for/since\" ongoing actions use DEPUIS + present tense in French, never \"pour\"!"
      },
      {
        "word": "pendant",
        "trap": "preposition",
        "tip": "Aspect Error: \"Pendant\" marks completed past actions, while \"depuis\" marks ongoing actions!"
      }
    ],
    "rule": "Formula: Présent + depuis + point de départ (action begun in past, continuing now)."
  },
  {
    "id": "seq_avant_de_dormir",
    "topic": "sequence",
    "structureId": "sequence",
    "topicLabel": "Ordre Chronologique · Avant de",
    "scene": "bedtime",
    "english": "Before sleeping, she reads a few pages.",
    "targetWords": [
      "Avant",
      "de",
      "dormir",
      "elle",
      "lit",
      "quelques",
      "pages"
    ],
    "fullSentence": "Avant de dormir, elle lit quelques pages.",
    "distractors": [
      {
        "word": "avant dormir",
        "trap": "preposition",
        "tip": "Preposition Trap: Must have \"DE\" before the infinitive (avant de dormir)!"
      },
      {
        "word": "avant de lit",
        "trap": "infinitive",
        "tip": "Infinitive Error: Must use the infinitive (dormir), not conjugated verb!"
      }
    ],
    "rule": "Formula: Avant de + infinitif."
  },
  {
    "id": "prep_en_france",
    "topic": "prepositions",
    "structureId": "prepositions",
    "topicLabel": "Prépositions de lieu · Pays féminin",
    "scene": "chat-friends",
    "english": "We are going on vacation to France.",
    "targetWords": [
      "Nous",
      "allons",
      "partir",
      "en",
      "vacances",
      "en",
      "France"
    ],
    "fullSentence": "Nous allons partir en vacances en France.",
    "distractors": [
      {
        "word": "au",
        "trap": "gender",
        "tip": "Gender Error: \"France\" is feminine (la France), so it takes \"en\", not \"au\" (au is for masculine countries)!"
      },
      {
        "word": "à la",
        "trap": "preposition",
        "tip": "Preposition Error: Feminine countries take \"en\", never \"à la\"!"
      },
      {
        "word": "ou",
        "trap": "homophone",
        "tip": "Homophone Trap: \"ou\" means \"or\", not the preposition \"en\"!"
      }
    ],
    "rule": "Feminine countries (ending in -e) take \"en\" (en France, en Espagne, en Italie)."
  },
  {
    "id": "prep_au_canada",
    "topic": "prepositions",
    "structureId": "prepositions",
    "topicLabel": "Prépositions de lieu · Pays masculin",
    "scene": "chat-friends",
    "english": "My brother lives and works in Canada.",
    "targetWords": [
      "Mon",
      "frère",
      "habite",
      "et",
      "travaille",
      "au",
      "Canada"
    ],
    "fullSentence": "Mon frère habite et travaille au Canada.",
    "distractors": [
      {
        "word": "en",
        "trap": "gender",
        "tip": "Gender Error: \"Canada\" is masculine consonant (le Canada), so it takes \"au\", not \"en\"!"
      },
      {
        "word": "à le",
        "trap": "contraction",
        "tip": "Contraction Error: \"à + le\" always contracts into \"au\"!"
      }
    ],
    "rule": "Masculine countries starting with a consonant take \"au\" (au Canada, au Japon, au Mexique)."
  },
  {
    "id": "prep_aux_etats_unis",
    "topic": "prepositions",
    "structureId": "prepositions",
    "topicLabel": "Prépositions de lieu · Pays pluriel",
    "scene": "chat-friends",
    "english": "They went to live in the United States.",
    "targetWords": [
      "Ils",
      "sont",
      "partis",
      "vivre",
      "aux",
      "États-Unis"
    ],
    "fullSentence": "Ils sont partis vivre aux États-Unis.",
    "distractors": [
      {
        "word": "en",
        "trap": "plural",
        "tip": "Plural Error: Plural countries take \"aux\" (aux États-Unis, aux Pays-Bas), not \"en\"!"
      },
      {
        "word": "à les",
        "trap": "contraction",
        "tip": "Contraction Error: \"à + les\" must contract to \"aux\"!"
      }
    ],
    "rule": "Plural countries take \"aux\" (aux États-Unis, aux Philippines)."
  },
  {
    "id": "prep_a_paris",
    "topic": "prepositions",
    "structureId": "prepositions",
    "topicLabel": "Prépositions de lieu · Ville",
    "scene": "chat-friends",
    "english": "She arrived in Paris yesterday morning.",
    "targetWords": [
      "Elle",
      "est",
      "arrivée",
      "à",
      "Paris",
      "hier",
      "matin"
    ],
    "fullSentence": "Elle est arrivée à Paris hier matin.",
    "distractors": [
      {
        "word": "en",
        "trap": "city_preposition",
        "tip": "City Error: Cities always take \"à\" (à Paris, à Téhéran, à Rasht), NEVER \"en\"!"
      },
      {
        "word": "dans",
        "trap": "preposition",
        "tip": "Preposition Error: General location in a city is \"à Paris\", not \"dans Paris\"!"
      }
    ],
    "rule": "PDF A1.3 page 121 : \"Mahsa est allée à Paris. / Cities always take \"à\"."
  },
  {
    "id": "prep_dans_le_hall",
    "topic": "prepositions",
    "structureId": "prepositions",
    "topicLabel": "Prépositions de lieu · Intérieur",
    "scene": "bldg-common-areas",
    "english": "Do not leave your shoes in the hallway.",
    "targetWords": [
      "Ne",
      "laissez",
      "pas",
      "vos",
      "chaussures",
      "dans",
      "le",
      "hall"
    ],
    "fullSentence": "Ne laissez pas vos chaussures dans le hall.",
    "distractors": [
      {
        "word": "en",
        "trap": "preposition",
        "tip": "Preposition Error: Enclosed rooms and buildings take \"dans\", not \"en\"!"
      },
      {
        "word": "au",
        "trap": "preposition",
        "tip": "Preposition Error: Hall is a closed indoor space, so we use \"dans le hall\"!"
      }
    ],
    "rule": "Indoor architectural spaces take \"dans + article\" (dans le hall, dans la cuisine, dans l’immeuble)."
  },
  {
    "id": "cod_coi_pomme_mange",
    "topic": "cod_coi",
    "structureId": "cod_coi",
    "topicLabel": "COD · Complément d’objet direct",
    "scene": "pronoun-cod-apple-eat",
    "english": "The apple is delicious, I eat it.",
    "targetWords": [
      "La",
      "pomme",
      "est",
      "délicieuse",
      "je",
      "la",
      "mange"
    ],
    "fullSentence": "La pomme est délicieuse, je la mange.",
    "distractors": [
      {
        "word": "lui",
        "trap": "pronoun_choice",
        "tip": "Pronoun Error: \"Manger\" takes a direct object (COD: la), never indirect (lui)!"
      },
      {
        "word": "le",
        "trap": "gender",
        "tip": "Gender Error: \"La pomme\" is feminine, so use \"la\", not \"le\"!"
      }
    ],
    "rule": "Direct objects (COD) replace nouns without a preposition: le (masc.), la (fem.), les (plural)."
  },
  {
    "id": "cod_coi_mere_telephone",
    "topic": "cod_coi",
    "structureId": "cod_coi",
    "topicLabel": "COI · Complément d’objet indirect",
    "scene": "pronoun-coi-phone-mother",
    "english": "My mother is in France, I phone her every Sunday.",
    "targetWords": [
      "Ma",
      "mère",
      "est",
      "en",
      "France",
      "je",
      "lui",
      "téléphone",
      "le",
      "dimanche"
    ],
    "fullSentence": "Ma mère est en France, je lui téléphone le dimanche.",
    "distractors": [
      {
        "word": "la",
        "trap": "pronoun_choice",
        "tip": "Pronoun Error: \"Téléphoner à quelqu’un\" takes an indirect pronoun (COI: lui), never COD (la)!"
      },
      {
        "word": "leur",
        "trap": "number",
        "tip": "Number Error: Mother is singular, so use \"lui\", not \"leur\" (plural)!"
      }
    ],
    "rule": "COI pronouns (lui for singular m/f, leur for plural) replace \"à + person\"."
  },
  {
    "id": "cod_coi_voisins_parler",
    "topic": "cod_coi",
    "structureId": "cod_coi",
    "topicLabel": "COI · Pluriel (leur)",
    "scene": "bldg-neighbors",
    "english": "My neighbors are noisy, I spoke to them this morning.",
    "targetWords": [
      "Mes",
      "voisins",
      "sont",
      "bruyants",
      "je",
      "leur",
      "ai",
      "parlé",
      "ce",
      "matin"
    ],
    "fullSentence": "Mes voisins sont bruyants, je leur ai parlé ce matin.",
    "distractors": [
      {
        "word": "les",
        "trap": "pronoun_choice",
        "tip": "Pronoun Error: \"Parler à quelqu’un\" takes COI (leur), not COD (les)!"
      },
      {
        "word": "à eux",
        "trap": "placement",
        "tip": "Placement Error: In French, we say \"je leur ai parlé\", placed before the auxiliary!"
      }
    ],
    "rule": "COI replaces \"à + persons\" in the plural with \"leur\" (placed before the verb)."
  },
  {
    "id": "cod_coi_cles_chercher",
    "topic": "cod_coi",
    "structureId": "cod_coi",
    "topicLabel": "COD · Pluriel (les)",
    "scene": "past-lost-keys",
    "english": "Where are my keys? I am looking for them everywhere!",
    "targetWords": [
      "Où",
      "sont",
      "mes",
      "clés",
      "?",
      "Je",
      "les",
      "cherche",
      "partout",
      "!"
    ],
    "fullSentence": "Où sont mes clés ? Je les cherche partout !",
    "distractors": [
      {
        "word": "leur",
        "trap": "pronoun_choice",
        "tip": "Pronoun Error: \"Chercher quelque chose\" is direct (COD: les), not indirect (leur)!"
      },
      {
        "word": "lui",
        "trap": "number",
        "tip": "Number Error: \"mes clés\" is plural (les)!"
      }
    ],
    "rule": "Direct plural objects take \"les\" before the conjugated verb."
  },
  {
    "id": "connaitre_ce_resto",
    "topic": "connaitre_savoir",
    "structureId": "connaitre_savoir",
    "topicLabel": "Connaître · Lieu ou Personne",
    "scene": "chat-friends",
    "english": "I know this restaurant very well.",
    "targetWords": [
      "Je",
      "connais",
      "très",
      "bien",
      "ce",
      "restaurant"
    ],
    "fullSentence": "Je connais très bien ce restaurant.",
    "distractors": [
      {
        "word": "sais",
        "trap": "verb_choice",
        "tip": "Verb Choice Error: Familiarity with a place, person, or thing uses CONNAÎTRE + NOM, never SAVOIR!"
      },
      {
        "word": "connaît",
        "trap": "conjugation",
        "tip": "Conjugation Error: For \"Je\", the ending is -s (Je connais), while il/elle takes -t (connaît)!"
      }
    ],
    "rule": "Use CONNAÎTRE directly with a noun (person, city, restaurant, book). Never use with a verb or clause."
  },
  {
    "id": "savoir_parler_francais",
    "topic": "connaitre_savoir",
    "structureId": "connaitre_savoir",
    "topicLabel": "Savoir · Compétence & Infinitif",
    "scene": "chat-friends",
    "english": "I know how to speak French very well.",
    "targetWords": [
      "Je",
      "sais",
      "très",
      "bien",
      "parler",
      "français"
    ],
    "fullSentence": "Je sais très bien parler français.",
    "distractors": [
      {
        "word": "connais",
        "trap": "verb_choice",
        "tip": "Verb Choice Error: Knowing how to do an action (+ infinitive) uses SAVOIR, never CONNAÎTRE!"
      },
      {
        "word": "sait",
        "trap": "conjugation",
        "tip": "Conjugation Error: \"Je\" takes -s (Je sais), \"Il/Elle\" takes -t (sait)!"
      }
    ],
    "rule": "Use SAVOIR + infinitif to express knowing how to do something (skills)."
  },
  {
    "id": "savoir_ou_tu_habites",
    "topic": "connaitre_savoir",
    "structureId": "connaitre_savoir",
    "topicLabel": "Savoir · Fait ou Information",
    "scene": "chat-friends",
    "english": "I know where you live.",
    "targetWords": [
      "Je",
      "sais",
      "où",
      "tu",
      "habites"
    ],
    "fullSentence": "Je sais où tu habites.",
    "distractors": [
      {
        "word": "connais",
        "trap": "verb_choice",
        "tip": "Verb Choice Error: Factual knowledge introduced by where/when/why/how/that uses SAVOIR (où, quand, pourquoi, que)!"
      },
      {
        "word": "sait",
        "trap": "conjugation",
        "tip": "Conjugation Error: \"Je\" takes -s (Je sais), \"Il/Elle\" takes -t (Elle sait)!"
      }
    ],
    "rule": "Use SAVOIR when followed by a subordinate clause (que, où, quand, comment, pourquoi)."
  },
  {
    "id": "avoir_licence_obtenu",
    "topic": "avoir",
    "structureId": "avoir",
    "topicLabel": "Passé Composé · Avoir (Études)",
    "scene": "reflect-think",
    "english": "I obtained a bachelor’s degree in software engineering.",
    "targetWords": [
      "J’ai",
      "obtenu",
      "une",
      "licence",
      "en",
      "génie",
      "logiciel"
    ],
    "fullSentence": "J’ai obtenu une licence en génie logiciel.",
    "distractors": [
      {
        "word": "suis",
        "trap": "auxiliary",
        "tip": "Auxiliary Error: \"obtenir\" takes AVOIR (j’ai obtenu), never ÊTRE!"
      },
      {
        "word": "obtenue",
        "trap": "agreement",
        "tip": "Agreement Error: With AVOIR, the participle does NOT agree with the following object!"
      }
    ],
    "rule": "PDF A1.3 page 93-98 : \"J’ai obtenu une licence en génie logiciel à l’uni Ferdowsi.\""
  },
  {
    "id": "avoir_master_suivi",
    "topic": "avoir",
    "structureId": "avoir",
    "topicLabel": "Passé Composé · Avoir (Master)",
    "scene": "reflect-think",
    "english": "Have you taken a master’s degree?",
    "targetWords": [
      "Avez-vous",
      "suivi",
      "un",
      "master",
      "?"
    ],
    "fullSentence": "Avez-vous suivi un master ?",
    "distractors": [
      {
        "word": "Êtes-vous",
        "trap": "auxiliary",
        "tip": "Auxiliary Error: \"suivre un master\" takes AVOIR (Avez-vous suivi)!"
      },
      {
        "word": "suivie",
        "trap": "agreement",
        "tip": "Agreement Error: No agreement with masculine singular noun!"
      }
    ],
    "rule": "PDF A1.3 page 100 : \"Avez-vous suivi un master ? Suivre un master / faire un master.\""
  },
  {
    "id": "avoir_deux_masters",
    "topic": "avoir",
    "structureId": "avoir",
    "topicLabel": "Passé Composé · Avoir (Faire)",
    "scene": "reflect-think",
    "english": "I did two master’s degrees in education.",
    "targetWords": [
      "J’ai",
      "fait",
      "deux",
      "masters",
      "en",
      "éducation"
    ],
    "fullSentence": "J’ai fait deux masters en éducation.",
    "distractors": [
      {
        "word": "suis fait",
        "trap": "meaning",
        "tip": "Structure Error: \"je me suis fait\" is causative/passive. For simple completion, use \"j’ai fait\"!"
      },
      {
        "word": "faits",
        "trap": "agreement",
        "tip": "Agreement Error: With AVOIR, participle does not agree with following direct object!"
      }
    ],
    "rule": "PDF A1.3 page 104 : \"J’ai fait deux masters. Le premier était en anglais...\""
  },
  {
    "id": "avoir_voulu_voir",
    "topic": "avoir",
    "structureId": "avoir",
    "topicLabel": "Passé Composé · Vouloir (Avoir)",
    "scene": "chat-friends",
    "english": "You wanted to see me.",
    "targetWords": [
      "Tu",
      "as",
      "voulu",
      "me",
      "voir"
    ],
    "fullSentence": "Tu as voulu me voir.",
    "distractors": [
      {
        "word": "es",
        "trap": "auxiliary",
        "tip": "Auxiliary Error: \"vouloir\" takes AVOIR (tu as voulu), never ÊTRE!"
      },
      {
        "word": "voulue",
        "trap": "agreement",
        "tip": "Agreement Error: No subject agreement with AVOIR!"
      }
    ],
    "rule": "PDF A1.3 page 160 : \"Tu as voulu me voir.\""
  }
];

  const TOPIC_CHIPS = [
  {
    "id": "all",
    "label": "All Grammar Rules"
  },
  {
    "id": "due",
    "label": "🧠 Due & New Today"
  },
  {
    "id": "reflexive",
    "label": "🛏️ Verbes Réflexifs"
  },
  {
    "id": "maison",
    "label": "🏠 Maison d’Être"
  },
  {
    "id": "se_faire",
    "label": "🔒 Se faire + Infinitif"
  },
  {
    "id": "neque",
    "label": "🚫 Ne ... que (Only)"
  },
  {
    "id": "cause",
    "label": "⚡ Cause (Parce que / À cause de)"
  },
  {
    "id": "rules",
    "label": "📋 Obligation & Interdiction"
  },
  {
    "id": "repairs",
    "label": "🔧 Logement & Réparations"
  },
  {
    "id": "sequence",
    "label": "⏱️ Temps & Chronologie"
  },
  {
    "id": "prepositions",
    "label": "📍 Prépositions de Lieu"
  },
  {
    "id": "cod_coi",
    "label": "🎯 Pronoms COD & COI"
  },
  {
    "id": "connaitre_savoir",
    "label": "💡 Connaître vs Savoir"
  },
  {
    "id": "avoir",
    "label": "🍎 Avoir Participles"
  }
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
  let activeStructureModal = null; // structureId string or null

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
    activeStructureModal = null;
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

  function prepareEmbeddedForId(cardId) {
    const card = getById(cardId);
    if (!card) return;
    embeddedCardId = cardId;
    embeddedSelected = [];
    embeddedCardState = 'assembling';
    embeddedEval = null;
    embeddedAvailable = buildTokensForCard(card);
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

  function openStructureModal(structureId) {
    activeStructureModal = structureId || 'reflexive';
    rerender();
  }

  function closeStructureModal() {
    activeStructureModal = null;
    rerender();
  }

  function getActiveState(embedded) {
    if (embedded) {
      return {
        selected: embeddedSelected,
        available: embeddedAvailable,
        state: embeddedCardState,
        evalRes: embeddedEval
      };
    }
    return {
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
    if (embedded) {
      if (!embeddedSelected.length) return;
      const card = getById(embeddedCardId);
      if (!card) return;
      embeddedEval = evaluateTokensForCard(card, embeddedSelected);
      embeddedCardState = 'evaluated';
      rerender();
      return;
    }

    if (!selectedTokens.length) return;
    const card = activeQueue[currentIndex];
    evaluationResult = evaluateTokensForCard(card, selectedTokens);
    cardState = 'evaluated';

    if (!evaluationResult.isCorrect) {
      sessionMistakes.push({
        card: card,
        chosenDistractors: evaluationResult.chosenDistractors,
        trapTips: evaluationResult.trapTips
      });
    }
    rerender();
  }

  function rateAndAdvance(rating) {
    const card = activeQueue[currentIndex];
    if (card && window.ParlezFSRS && typeof window.ParlezFSRS.rateGrammarCard === 'function') {
      window.ParlezFSRS.rateGrammarCard(card.id, rating);
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

  function renderStructureModal(structureId) {
    const struct = GRAMMAR_STRUCTURES[structureId] || GRAMMAR_STRUCTURES['reflexive'];
    if (!struct) return '';

    return `
      <!-- Grammar Structure & Reference Table Modal -->
      <div class="gflash-modal-backdrop" data-gflash-backdrop-close="true" style="position: fixed; inset: 0; background: rgba(15, 23, 42, 0.65); z-index: 9999; display: flex; align-items: center; justify-content: center; padding: 14px; backdrop-filter: blur(4px); animation: fadeIn 0.15s ease;">
        <div class="gflash-modal-dialog" style="background: #ffffff; border-radius: 20px; max-width: 640px; width: 100%; max-height: 88vh; overflow-y: auto; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); border: 1.5px solid #e2e8f0; display: flex; flex-direction: column;">
          
          <!-- Modal Sticky Header -->
          <div style="padding: 16px 20px; border-bottom: 1.5px solid #f1f5f9; display: flex; justify-content: space-between; align-items: center; background: #fafafa; border-radius: 20px 20px 0 0; position: sticky; top: 0; z-index: 10;">
            <div>
              <span class="meta" style="margin: 0; font-size: 10.5px; background: #e0e7ff; color: #3730a3; padding: 3px 8px; border-radius: 6px; font-weight: 800;">${esc(struct.badge)}</span>
              <h3 style="margin: 4px 0 0; font-size: 17px; font-weight: 800; color: #1e1b4b;">${esc(struct.title)}</h3>
            </div>
            <button type="button" class="btn btn-white btn-sm" data-gflash-close-modal="true" style="border-radius: 50%; width: 34px; height: 34px; padding: 0; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: 800;">
              ✕
            </button>
          </div>

          <!-- Modal Scrollable Content -->
          <div style="padding: 18px 20px;">
            
            <!-- Summary -->
            <p style="font-size: 13.5px; color: #475569; line-height: 1.5; margin: 0 0 14px;">
              ${esc(struct.summary)}
            </p>

            <!-- Formula Box -->
            <div style="background: #eef2ff; border: 1.5px solid #c7d2fe; border-radius: 12px; padding: 12px 14px; margin-bottom: 16px;">
              <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: #4338ca; letter-spacing: 0.5px; margin-bottom: 4px;">
                📐 Structural Formula:
              </div>
              <div style="font-family: monospace; font-size: 13.5px; font-weight: 800; color: #1e1b4b;">
                ${esc(struct.formula)}
              </div>
              ${struct.negationFormula && struct.negationFormula !== 'N/A' ? `
                <div style="margin-top: 6px; font-family: monospace; font-size: 12px; color: #6366f1;">
                  Négation : ${esc(struct.negationFormula)}
                </div>
              ` : ''}
            </div>

            <!-- Full Structure Reference Table -->
            <div style="margin-bottom: 18px;">
              <div style="font-size: 11.5px; font-weight: 800; text-transform: uppercase; color: #64748b; margin-bottom: 8px; letter-spacing: 0.5px; display: flex; justify-content: space-between; align-items: center;">
                <span>📊 Reference Table & Conjugations:</span>
                <span style="font-size: 11px; color: #818cf8; font-weight: 600;">Tap 🔊 to listen</span>
              </div>
              <div style="overflow-x: auto; border: 1.5px solid #e2e8f0; border-radius: 12px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 12.5px; text-align: left;">
                  <thead>
                    <tr style="background: #f8fafc; border-bottom: 1.5px solid #e2e8f0;">
                      ${struct.headers.map(h => `<th style="padding: 9px 10px; font-weight: 800; color: #334155; white-space: nowrap;">${esc(h)}</th>`).join('')}
                    </tr>
                  </thead>
                  <tbody>
                    ${struct.rows.map((row, rIdx) => `
                      <tr style="border-bottom: 1px solid #f1f5f9; background: ${rIdx % 2 === 0 ? '#ffffff' : '#fcfcfd'};">
                        ${row.map((cell, cIdx) => `
                          <td style="padding: 9px 10px; color: #1e293b; vertical-align: middle;">
                            ${cIdx === (row.length - 2) ? `
                              <div style="display: flex; align-items: center; justify-content: space-between; gap: 6px;">
                                <span style="font-weight: 700; color: #1e1b4b;">${esc(cell)}</span>
                                <button type="button" class="btn btn-secondary btn-sm" data-gflash-say="${esc(cell)}" style="padding: 2px 7px; font-size: 11px; border-radius: 8px; flex-shrink: 0;">
                                  🔊
                                </button>
                              </div>
                            ` : `
                              ${cIdx === 0 ? `<b>${esc(cell)}</b>` : esc(cell)}
                            `}
                          </td>
                        `).join('')}
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Traps & Deceptive Foils Box -->
            ${struct.traps && struct.traps.length ? `
              <div style="background: #fff1f2; border: 1.5px solid #fca5a5; border-radius: 12px; padding: 12px 14px; margin-bottom: 14px;">
                <div style="font-size: 11.5px; font-weight: 800; text-transform: uppercase; color: #991b1b; margin-bottom: 6px; letter-spacing: 0.5px;">
                  ⚠️ Traps & Common Mistakes (Beware in Flashcards!):
                </div>
                <div style="display: grid; gap: 5px; font-size: 12px; color: #b91c1c; line-height: 1.4;">
                  ${struct.traps.map(t => `<div>${esc(t)}</div>`).join('')}
                </div>
              </div>
            ` : ''}

            <!-- Grammar Rules & Nuances -->
            ${struct.rules && struct.rules.length ? `
              <div style="background: #fdf4ff; border: 1.5px solid #f5d0fe; border-radius: 12px; padding: 12px 14px; font-size: 12px; color: #701a75; line-height: 1.45; margin-bottom: 16px;">
                <div style="font-size: 11.5px; font-weight: 800; text-transform: uppercase; margin-bottom: 4px; color: #86198f;">
                  💡 Key Notes & Nuances:
                </div>
                ${struct.rules.map(r => `<div>• ${esc(r)}</div>`).join('')}
              </div>
            ` : ''}

          </div>

          <!-- Modal Footer -->
          <div style="padding: 12px 20px; border-top: 1.5px solid #f1f5f9; background: #fafafa; border-radius: 0 0 20px 20px; display: flex; justify-content: flex-end; gap: 8px;">
            <button type="button" class="btn btn-primary" data-gflash-close-modal="true" style="font-size: 13px; border-radius: 12px; padding: 8px 18px;">
              ✓ Got It, Return to Card
            </button>
          </div>

        </div>
      </div>
    `;
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
    const structureKey = card.structureId || card.topic || 'reflexive';

    return `
      <!-- The Flashcard -->
      <div class="review-card hover-card" style="background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 18px rgba(0,0,0,0.04); margin-bottom: 14px;">

        <!-- Top: Flashcard Photo / Illustration -->
        <div class="review-scene gflash-scene" style="height: 190px; background: #faf8f5; border-bottom: 1px solid #f1f5f9; display: flex; align-items: center; justify-content: center; overflow: hidden; position: relative;">
          ${renderScene(card.scene)}
          <span class="corner">${esc(card.topicLabel)}</span>
          ${mem ? `<span class="mem-badge card-corner-mem ${mem.badgeClass}">${mem.label}</span>` : ''}
        </div>

        <!-- Direct Below Photo: English Prompt & Structure Table Button -->
        <div style="padding: 14px 18px 10px; border-bottom: 1px solid #f8fafc;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
            <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: #818cf8; letter-spacing: 0.6px;">
              Sentence to Build:
            </div>
            <!-- BUTTON FOR STRUCTURE TABLE (User requested) -->
            <button type="button"
                    class="btn btn-secondary btn-sm"
                    data-gflash-structure="${esc(structureKey)}"
                    style="font-size: 11.5px; font-weight: 700; border-radius: 10px; padding: 4px 10px; display: inline-flex; align-items: center; gap: 5px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
              📊 Structure Table
            </button>
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

        <!-- Word Bank (Tiles with tricky distractors) -->
        ${st.state === 'assembling' ? `
          <div style="padding: 16px 18px 20px;">
            <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: #64748b; margin-bottom: 10px; letter-spacing: 0.5px;">
              Word Bank (Select one by one · Beware of deceptive traps!):
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

            <div style="margin-top: 18px; display: flex; gap: 8px;">
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
          <!-- Revealed State / Feedback Card -->
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

            <!-- Grammar Rule Box with Button to view Structure Table -->
            <div style="background: #fdf4ff; border: 1px solid #f5d0fe; border-radius: 12px; padding: 12px 14px; margin-bottom: 14px; font-size: 12.5px; color: #701a75; line-height: 1.45;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 4px;">
                <div>💡 <b>Grammar Rule:</b> ${esc(card.rule)}</div>
                <button type="button" class="btn btn-white btn-sm" data-gflash-structure="${esc(structureKey)}" style="font-size: 11px; font-weight: 800; padding: 3px 8px; border-radius: 8px; flex-shrink: 0;">
                  📊 Structure Table
                </button>
              </div>
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
      ${activeStructureModal ? renderStructureModal(activeStructureModal) : ''}
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
            <div class="empty-icon">🎉</div>
            <p style="margin:0 0 6px;font-weight:700;">All caught up for today!</p>
            <p class="small muted" style="margin:0 0 14px;">No grammar flashcards currently due under your study schedule.</p>
            <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;">
              <button type="button" class="btn btn-secondary" data-gflash-topic="all">Study All Grammar Cards</button>
            </div>
          </div>
          ${activeStructureModal ? renderStructureModal(activeStructureModal) : ''}
        </div>
      `;
    }

    // Finished session
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
                : `You finished all ${totalStudied} grammar cards with ${accuracy}% first-try accuracy.`}
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
          ${activeStructureModal ? renderStructureModal(activeStructureModal) : ''}
        </div>
      `;
    }

    const card = activeQueue[currentIndex] || CHALLENGES[0];
    const total = activeQueue.length;
    const st = getActiveState(false);

    return `
      <div id="grammar-flashcards-root" class="challenge-container" style="max-width: 680px; margin: 0 auto;">
        
        <!-- Topic Selection Bar -->
        <div style="display: flex; justify-content: space-between; align-items: center; gap: 8px; margin-bottom: 12px; flex-wrap: wrap;">
          <div style="font-size: 12px; font-weight: 800; color: #475569; text-transform: uppercase; letter-spacing: 0.5px;">
            ${isRemediationActive ? '🎯 Targeted Practice' : '🗂️ Grammar Flashcard'} · ${currentIndex + 1} of ${total}
          </div>
          <select id="gflash-topic-select" class="select select-sm" aria-label="Filter grammar flashcards" style="font-size: 12px; font-weight: 700; padding: 4px 10px; border-radius: 10px;">
            ${TOPIC_CHIPS.map(t => `<option value="${esc(t.id)}" ${currentTopic === t.id ? 'selected' : ''}>${esc(t.label)}</option>`).join('')}
          </select>
        </div>

        ${renderFlashcardBody(card, st, { embedded: false, index: currentIndex, total })}

        <!-- Session Progress Mini Track -->
        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 12px; color: #94a3b8; padding: 0 6px;">
          <span>Session Accuracy: <b>${Math.max(0, currentIndex - sessionMistakes.length)} / ${Math.max(1, currentIndex + (cardState === 'evaluated' ? 1 : 0))}</b></span>
          ${sessionMistakes.length > 0 ? `<span style="color: #ef4444; font-weight: 700;">⚠️ ${sessionMistakes.length} mistakes saved for end practice</span>` : '<span style="color: #10b981; font-weight: 700;">✓ 0 Mistakes</span>'}
        </div>

        ${activeStructureModal ? renderStructureModal(activeStructureModal) : ''}
      </div>
    `;
  }

  // Event Listeners for Flashcard Interactions
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('button');
    if (!btn) {
      if (e.target.classList && e.target.classList.contains('gflash-modal-backdrop')) {
        closeStructureModal();
      }
      return;
    }

    if (btn.dataset.gflashStructure) {
      openStructureModal(btn.dataset.gflashStructure);
      return;
    }

    if (btn.dataset.gflashCloseModal) {
      closeStructureModal();
      return;
    }

    if (btn.dataset.gflashTopic) {
      startSession(btn.dataset.gflashTopic);
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

  document.addEventListener('change', function (e) {
    if (e.target && e.target.id === 'gflash-topic-select') {
      startSession(e.target.value);
    }
  });

  // Initialize
  startSession('all');

  window.ParlezGrammarStructures = GRAMMAR_STRUCTURES;
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
    nextCard,
    openStructureModal,
    closeStructureModal,
    getStructures: () => GRAMMAR_STRUCTURES
  };
})();
