// Parlez Grammar Flashcard Sentence Builder with Tricky Distractors & Targeted Remediation (v36)
// Visual-first grammar learning with authentic scenes, prompt visible below photo,
// interactive scrambled word builder with deceptive distractors, targeted remediation,
// purposeful pedagogical chaining, and accessible Grammar Structure Reference Tables on every card.
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
  },
  "negation": {
    "id": "negation",
    "title": "La Négation Complète : ne... pas, ne... jamais, ne... plus, ne... rien",
    "badge": "A1 · Règle Fondamentale",
    "summary": "La négation en français est binaire : elle encadre obligatoirement le verbe conjugué (ne + verbe + mot négatif). Devant une voyelle ou un h muet, \"ne\" s’élide en \"n’\".",
    "formula": "Sujet + ne / n’ + [Verbe Conjugué] + pas / jamais / plus / rien",
    "negationFormula": "Au passé composé : Sujet + ne/n’ + [Auxiliaire] + pas/jamais/plus/rien + [Participe Passé]",
    "headers": [
      "Structure Négative",
      "Nuance & Équivalent",
      "Exemple Réel du Cours",
      "Traduction Anglaise"
    ],
    "rows": [
      [
        "ne ... pas",
        "Négation simple (not)",
        "Je ne vais pas à l’école le dimanche.",
        "I do not go to school on Sundays."
      ],
      [
        "n’ ... pas",
        "Élision devant voyelle",
        "Il n’aime pas le froid d’hiver.",
        "He does not like the winter cold."
      ],
      [
        "ne ... jamais",
        "Fréquence nulle (never)",
        "Je ne bois jamais de café le soir.",
        "I never drink coffee in the evening."
      ],
      [
        "ne ... plus",
        "Action terminée (no longer / not anymore)",
        "Elle n’habite plus à Lyon.",
        "She no longer lives in Lyon."
      ],
      [
        "ne ... rien",
        "Absence totale d’objet (nothing)",
        "Je ne comprends rien à ce problème.",
        "I understand nothing about this problem."
      ],
      [
        "Au Passé Composé",
        "Encadre l’auxiliaire",
        "Je n’ai pas pris mon parapluie.",
        "I did not take my umbrella."
      ],
      [
        "Jamais au Passé",
        "Encadre l’auxiliaire",
        "Elle n’a jamais visité le Canada.",
        "She has never visited Canada."
      ]
    ],
    "traps": [
      "⚠️ NE JAMAIS CUMULER PAS : \"Je ne bois pas jamais\" ou \"Je ne veux pas rien\" sont des erreurs graves ! Dites : \"Je ne bois jamais\" et \"Je ne veux rien\".",
      "⚠️ ARTICLES INDÉFINIS (un, une, des) ➜ \"DE\" : À la forme négative, un, une, des deviennent \"DE\" (ou d’) ! Exemple : \"J’ai un vélo\" ➜ \"Je n’ai pas DE vélo\". Seul le verbe ÊTRE garde l’article (\"Ce n’est pas un problème\").",
      "⚠️ ÉLISION OBLIGATOIRE : \"ne\" devient \"n’\" devant voyelle : \"Je n’aime pas\" (et non \"Je ne aime pas\")."
    ],
    "rules": [
      "Ordre régulier : Sujet + ne + verbe + [pas / plus / jamais / rien].",
      "Exception d’objet pour \"rien\" et \"personne\" : \"rien\" peut être sujet (\"Rien ne fonctionne\"), mais \"personne\" se place APRÈS le participe passé (\"Je n’ai vu personne\")."
    ]
  },
  "aller_prendre": {
    "id": "aller_prendre",
    "title": "Verbes de Déplacement : Aller (+ Lieu) vs Prendre (+ Véhicule)",
    "badge": "A1 · Mobilité & Transports",
    "summary": "Pour parler de ses déplacements quotidiens, on distingue la destination finale (verbe ALLER avec préposition à/au/en) et le moyen de transport utilisé (verbe PRENDRE directement avec un article défini ou indéfini).",
    "formula": "ALLER + [à la / au / aux / en] + Lieu  |  PRENDRE + [le / la / l’ / un] + Moyen de transport",
    "negationFormula": "Je ne vais pas au cinéma | Je ne prends pas le métro",
    "headers": [
      "Verbe",
      "Construction Requise",
      "Exemple Réel du Cours",
      "Traduction Anglaise"
    ],
    "rows": [
      [
        "Aller à la",
        "Lieu féminin",
        "Je vais à la piscine le samedi matin.",
        "I am going to the swimming pool on Saturday morning."
      ],
      [
        "Aller au (à + le)",
        "Lieu masculin",
        "Nous allons au cinéma ce soir.",
        "We are going to the cinema tonight."
      ],
      [
        "Aller en",
        "Pays ou transport fermé",
        "Elle va en France en avion.",
        "She is going to France by plane."
      ],
      [
        "Prendre le / la",
        "Article défini (transport)",
        "Je prends le métro de la ligne 1.",
        "I take line 1 subway."
      ],
      [
        "Prendre le bus",
        "Moyen de transport",
        "Ils prennent le bus pour aller au travail.",
        "They take the bus to go to work."
      ],
      [
        "Prendre un taxi",
        "Occasionnel",
        "Il prend un taxi quand il pleut.",
        "He takes a taxi when it rains."
      ],
      [
        "À pied / À vélo",
        "Préposition \"à\"",
        "Je vais au travail à vélo.",
        "I go to work by bicycle."
      ]
    ],
    "traps": [
      "⚠️ NE PAS CONFONDRE LE TRANSPORT ET LA DESTINATION : Ne dites pas \"Je prends à la piscine\" ! On dit \"Je vais à la piscine\" et \"Je prends ma voiture pour aller à la piscine\".",
      "⚠️ PRENDRE SANS PRÉPOSITION : On ne met JAMAIS \"à\" ou \"en\" après prendre : dites \"Je prends le bus\" (JAMAIS \"Je prends en bus\")."
    ],
    "rules": [
      "Aller (présent) : je vais, tu vas, il/elle va, nous allons, vous allez, ils/elles vont.",
      "Prendre (présent) : je prends, tu prends, il/elle prend, nous prenons, vous prenez, ils/elles prennent."
    ]
  },
  "jouer_prep": {
    "id": "jouer_prep",
    "title": "Le Verbe Jouer : Jouer à (Jeux & Sports) vs Jouer de (Musique)",
    "badge": "A1 · Loisirs & Activités",
    "summary": "Le verbe jouer se construit avec deux prépositions distinctes qui changent complètement de sens : \"jouer à\" pour un sport collectif ou un jeu de société, et \"jouer de\" pour un instrument de musique.",
    "formula": "JOUER À + [sport de ballon / jeu de société]  |  JOUER DE + [instrument de musique]",
    "negationFormula": "Je ne joue pas au tennis | Elle ne joue pas de la guitare",
    "headers": [
      "Activité",
      "Formule & Contraction",
      "Exemple Réel du Cours",
      "Traduction Anglaise"
    ],
    "rows": [
      [
        "Sport masculin",
        "jouer au (à + le)",
        "Mon frère joue au football le dimanche.",
        "My brother plays soccer on Sundays."
      ],
      [
        "Sport pluriel / Jeux",
        "jouer aux (à + les)",
        "Les enfants jouent aux cartes et aux échecs.",
        "The kids play cards and chess."
      ],
      [
        "Sport féminin",
        "jouer à la",
        "Elle adore jouer à la pétanque en été.",
        "She loves playing boules in the summer."
      ],
      [
        "Instrument masculin",
        "jouer du (de + le)",
        "Il joue du piano depuis cinq ans.",
        "He has been playing the piano for 5 years."
      ],
      [
        "Instrument féminin",
        "jouer de la",
        "Sarah joue de la guitare acoustique.",
        "Sarah plays the acoustic guitar."
      ],
      [
        "Instrument à voyelle",
        "jouer de l’",
        "Marc joue de l’accordéon en fête.",
        "Marc plays the accordion at parties."
      ],
      [
        "Faire vs Jouer",
        "Faire du + sport individuel",
        "Je fais du vélo, mais je joue au tennis.",
        "I ride a bicycle, but I play tennis."
      ]
    ],
    "traps": [
      "⚠️ CONTRACTION OBLIGATOIRE : à + le = AU (\"jouer au tennis\", jamais \"à le tennis\") ; de + le = DU (\"jouer du violon\", jamais \"de le violon\").",
      "⚠️ JOUER DU TENNIS EST UNE FAUTE : Pour les sports, c’est toujours \"À\" : \"jouer au tennis\" (et non \"du tennis\")."
    ],
    "rules": [
      "Jouer est un verbe régulier du 1er groupe : je joue, tu joues, il joue, nous jouons, vous jouez, ils jouent.",
      "Pour les sports sans ballon/équipe (natation, ski, vélo), on utilise généralement FAIRE DE : faire de la natation, faire du ski."
    ]
  },
  "trois_temps": {
    "id": "trois_temps",
    "title": "Les 3 Temps Immédiats : Passé Récent, Présent Continu, Futur Proche",
    "badge": "A1 · Les Périphrases Temporelles",
    "summary": "Ces trois tournures permettent de situer une action dans le temps très proche sans conjugaison complexe, en s’appuyant sur les semi-auxiliaires VENIR, ÊTRE EN TRAIN DE, et ALLER suivis d’un infinitif.",
    "formula": "Passé : VENIR DE + inf | Présent : ÊTRE EN TRAIN DE + inf | Futur : ALLER + inf",
    "negationFormula": "Je ne viens pas de manger | Je ne suis pas en train de dormir | Je ne vais pas sortir",
    "headers": [
      "Moment Temporel",
      "Formule Grammaticale",
      "Exemple Réel du Cours",
      "Traduction Anglaise"
    ],
    "rows": [
      [
        "Passé Récent (just did)",
        "Venir de + Infinitif",
        "Je viens de terminer mon petit-déjeuner.",
        "I have just finished my breakfast."
      ],
      [
        "Passé Récent (3e pers.)",
        "Vient de + Infinitif",
        "Le train vient d’arriver en gare.",
        "The train has just arrived at the station."
      ],
      [
        "Présent Continu (right now)",
        "Être en train de + Infinitif",
        "Je suis en train de boire mon café chaud.",
        "I am in the middle of drinking my hot coffee."
      ],
      [
        "Présent Continu (pluriel)",
        "Sont en train de + Infinitif",
        "Ils sont en train de réviser leurs cours.",
        "They are in the middle of reviewing their lessons."
      ],
      [
        "Futur Proche (going to)",
        "Aller + Infinitif",
        "Je vais prendre le métro dans dix minutes.",
        "I am going to take the subway in ten minutes."
      ],
      [
        "Futur Proche (nous)",
        "Allons + Infinitif",
        "Nous allons préparer le dîner ensemble.",
        "We are going to prepare dinner together."
      ],
      [
        "Futur Proche (négation)",
        "ne + aller + pas + inf",
        "Elle ne va pas venir à la réunion.",
        "She is not going to come to the meeting."
      ]
    ],
    "traps": [
      "⚠️ ÉLISION DEVANT VOYELLE : \"venir de\" devient \"venir d’\" et \"en train de\" devient \"en train d’\" devant une voyelle : \"Il vient d’arriver\", \"Je suis en train d’écouter\".",
      "⚠️ PLACE DE LA NÉGATION : La négation entoure le premier verbe conjugué (le semi-auxiliaire) : \"Je ne vais PAS sortir\" (et non \"Je vais pas sortir\")."
    ],
    "rules": [
      "Conjugaison VENIR : je viens, tu viens, il vient, nous venons, vous venez, ils viennent.",
      "Conjugaison ALLER : je vais, tu vas, il va, nous allons, vous allez, ils vont."
    ]
  },
  "verbes_er": {
    "id": "verbes_er",
    "title": "Conjugaison du 1er Groupe (-ER) au Présent de l’Indicatif",
    "badge": "A1 · 90% des Verbes Français",
    "summary": "Le 1er groupe regroupe tous les verbes dont l’infinitif se termine par -ER (sauf Aller qui est du 3e groupe). Leur radical est stable et leurs terminaisons sont 100% régulières.",
    "formula": "Radical (Infinitif moins -er) + Terminaisons : -e, -es, -e, -ons, -ez, -ent",
    "negationFormula": "Sujet + ne + Verbe(-ER) + pas",
    "headers": [
      "Sujet",
      "Terminaison",
      "Parler (Exemple)",
      "Habiter (Voyelle / h)",
      "Sens en Anglais"
    ],
    "rows": [
      [
        "Je / J’",
        "-e (muet)",
        "Je parle",
        "J’habite à Paris",
        "I speak / I live"
      ],
      [
        "Tu",
        "-es (muet)",
        "Tu parles",
        "Tu habites ici ?",
        "You speak / You live"
      ],
      [
        "Il / Elle / On",
        "-e (muet)",
        "Il parle",
        "Elle habite en ville",
        "He/She speaks / lives"
      ],
      [
        "Nous",
        "-ons [õ]",
        "Nous parlons",
        "Nous habitons ensemble",
        "We speak / We live"
      ],
      [
        "Vous",
        "-ez [e]",
        "Vous parlez",
        "Vous habitez où ?",
        "You speak / You live"
      ],
      [
        "Ils / Elles",
        "-ent (STRICTEMENT MUET)",
        "Ils parlent",
        "Elles habitent au Canada",
        "They speak / They live"
      ]
    ],
    "traps": [
      "⚠️ LA TERMINAISON \"-ENT\" EST STRICTEMENT SILENCIEUSE ! Ne prononcez JAMAIS [an] ou [ent]. \"Ils parlent\" se prononce exactement comme \"Il parle\" [parl] !",
      "⚠️ PARTICULARITÉ EN -GER ET -CER : Avec Nous, les verbes en -ger gardent un e (\"nous mangeons\"), et ceux en -cer prennent une cédille (\"nous commençons\").",
      "⚠️ ALLER EST UNE EXCEPTION : Aller finit par -er mais appartient au 3e groupe car son radical change (je vais, nous allons)."
    ],
    "rules": [
      "Les terminaisons je, tu, il, ils sont phonétiquement identiques (base homophone : [parl]). Seules nous [-ons] et vous [-ez] changent de son."
    ]
  },
  "verbes_ir_2e": {
    "id": "verbes_ir_2e",
    "title": "Conjugaison du 2e Groupe (-IR type Finir) avec Infixe -ISS-",
    "badge": "A1 · Verbes Réguliers en -IR",
    "summary": "Les verbes du 2e groupe (finir, choisir, réussir, grandir, réfléchir) se caractérisent par l’apparition du double \"-ss-\" sonore [s] à toutes les personnes du pluriel (nous, vous, ils).",
    "formula": "Radical + Terminaisons : -is, -is, -it, -issons, -issez, -issent",
    "negationFormula": "Sujet + ne + Verbe(-IR) + pas",
    "headers": [
      "Sujet",
      "Terminaison",
      "Finir (Exemple)",
      "Choisir (Sonore [z])",
      "Sens en Anglais"
    ],
    "rows": [
      [
        "Je",
        "-is [i]",
        "Je finis à 18 heures.",
        "Je choisis ce plat.",
        "I finish / I choose"
      ],
      [
        "Tu",
        "-is [i]",
        "Tu finis ton travail ?",
        "Tu choisis quoi ?",
        "You finish / You choose"
      ],
      [
        "Il / Elle / On",
        "-it [i]",
        "Il finit son café.",
        "Elle choisit sa robe.",
        "He/She finishes / chooses"
      ],
      [
        "Nous",
        "-issons [isõ]",
        "Nous finissons bientôt.",
        "Nous choisissons ensemble.",
        "We finish / We choose"
      ],
      [
        "Vous",
        "-issez [ise]",
        "Vous finissez à quelle heure ?",
        "Vous choisissez le rouge ?",
        "You finish / You choose"
      ],
      [
        "Ils / Elles",
        "-issent [is]",
        "Ils finissent leurs études.",
        "Elles choisissent ce voyage.",
        "They finish / They choose"
      ]
    ],
    "traps": [
      "⚠️ NE CONFONDEZ PAS AVEC LE 3e GROUPE : Partir, dormir, sortir et venir finissent par -ir mais NE prennent JAMAIS \"-iss-\" (nous partons, nous dormons). Ils appartiennent au 3e groupe !",
      "⚠️ ACCORD DU PLURIEL : Le son \"iss\" est obligatoire au pluriel : \"Nous finissons\", \"Ils réussissent\"."
    ],
    "rules": [
      "Test du participe présent : Si le verbe fait \"-issant\" (finissant, choisissant, réussissant), c’est un verbe régulier du 2e groupe."
    ]
  },
  "verbes_ir_3e": {
    "id": "verbes_ir_3e",
    "title": "Verbes en -IR Irréguliers du 3e Groupe : Sortir, Partir & Dormir",
    "badge": "A1 · Verbes Fréquents du Quotidien",
    "summary": "Contrairement au 2e groupe, ces verbes en -ir perdent la consonne finale de leur radical au singulier et prennent les terminaisons -s, -s, -t, puis retrouvent leur radical complet au pluriel SANS infixe -iss-.",
    "formula": "Singulier : radical court + -s, -s, -t  |  Pluriel : radical plein + -ons, -ez, -ent",
    "negationFormula": "Sujet + ne + Verbe + pas",
    "headers": [
      "Sujet",
      "Sortir (To go out)",
      "Partir (To leave)",
      "Dormir (To sleep)",
      "Sens en Anglais"
    ],
    "rows": [
      [
        "Je",
        "Je sors ce soir.",
        "Je pars en voyage.",
        "Je dors huit heures.",
        "I go out / leave / sleep"
      ],
      [
        "Tu",
        "Tu sors à quelle heure ?",
        "Tu pars quand ?",
        "Tu dors bien ?",
        "You go out / leave / sleep"
      ],
      [
        "Il / Elle",
        "Il sort avec ses amis.",
        "Elle part en vacances.",
        "Il dort profondément.",
        "He/She goes out / leaves / sleeps"
      ],
      [
        "Nous",
        "Nous sortons ensemble.",
        "Nous partons demain.",
        "Nous dormons à l’hôtel.",
        "We go out / leave / sleep"
      ],
      [
        "Vous",
        "Vous sortez souvent ?",
        "Vous partez à midi ?",
        "Vous dormez combien de temps ?",
        "You go out / leave / sleep"
      ],
      [
        "Ils / Elles",
        "Ils sortent tard.",
        "Elles partent bientôt.",
        "Ils dorment encore.",
        "They go out / leave / sleep"
      ]
    ],
    "traps": [
      "⚠️ PAS DE \"-ISS-\" ! Ne dites JAMAIS \"nous sortissons\" ni \"nous dormissons\" ! Dites : \"nous sortons\", \"nous dormons\", \"nous partons\".",
      "⚠️ TERMINAISON DU SINGULIER : La 3e personne du singulier prend un -T (il sort, il part, il dort), JAMAIS un -d ou -e."
    ],
    "rules": [
      "Famille SORTIR : sortir, ressortir.",
      "Famille PARTIR : partir, repartir.",
      "Famille DORMIR : dormir, endormir."
    ]
  },
  "questions_3formes": {
    "id": "questions_3formes",
    "title": "Les 3 Registres d’Interrogation : Intonation, Est-ce que, Inversion",
    "badge": "A1 · Communication & Registres",
    "summary": "En français, poser une question peut se faire de trois façons selon le contexte social : familier (intonation montante), courant (est-ce que), ou formel/soutenu (inversion verbe-sujet).",
    "formula": "1. Familier : Phrase affirmative ?  2. Courant : Est-ce que + Sujet + Verbe ?  3. Formel : Verbe-Sujet ?",
    "negationFormula": "Est-ce que tu ne viens pas ? | Ne viens-tu pas ?",
    "headers": [
      "Registre",
      "Structure",
      "Exemple Réel du Cours",
      "Traduction Anglaise"
    ],
    "rows": [
      [
        "Familier / Oral",
        "Sujet + Verbe + ? (intonation ↗)",
        "Tu viens avec nous ce soir ?",
        "Are you coming with us tonight?"
      ],
      [
        "Courant / Standard",
        "Est-ce que + Sujet + Verbe ?",
        "Est-ce que tu viens avec nous ce soir ?",
        "Are you coming with us tonight?"
      ],
      [
        "Soutenu / Écrit",
        "Verbe-Sujet (Inversion) ?",
        "Viens-tu avec nous ce soir ?",
        "Are you coming with us tonight?"
      ],
      [
        "Avec Mot Interrogatif",
        "Où + est-ce que...",
        "Où est-ce que vous habitez ?",
        "Where do you live?"
      ],
      [
        "Mot Interrogatif Oral",
        "Sujet + Verbe + Où ?",
        "Vous habitez où ?",
        "Where do you live? (casual)"
      ],
      [
        "Question Ouverte Formelle",
        "Où + Verbe-Sujet ?",
        "Où habitez-vous ?",
        "Where do you live? (formal)"
      ],
      [
        "T euphonique",
        "Verbe-t-il/elle ?",
        "Habite-t-il à Paris ?",
        "Does he live in Paris?"
      ]
    ],
    "traps": [
      "⚠️ ORDRE AVEC EST-CE QUE : Après \"Est-ce que\", l’ordre des mots reste STRICTEMENT normal (Sujet + Verbe) : \"Est-ce que vous parlez français ?\" (et NON \"Est-ce que parlez-vous\").",
      "⚠️ LE T EUPHONIQUE : En inversion, si le verbe se termine par une voyelle et que le pronom est il/elle/on, on ajoute obligatoirement un \"-t-\" : \"Aime-t-il ?\", \"Parle-t-elle ?\" (pour éviter le choc de deux voyelles)."
    ],
    "rules": [
      "Mots interrogatifs clés : Où (lieu), Quand (temps), Comment (manière), Pourquoi (cause), Qui (personne), Que / Qu’est-ce que (chose), Combien (quantité)."
    ]
  },
  "demenager_emmenager": {
    "id": "demenager_emmenager",
    "title": "Vocabulaire du Logement : Déménager ≠ Emménager ≠ Aménager",
    "badge": "A1.2 · Vie Pratique & Domicile",
    "summary": "Ces trois verbes proches ont des sens très différents dans le parcours d’un logement : quitter un ancien lieu (déménager), s’installer dans un nouveau (emménager), et meubler/décorer l’espace (aménager).",
    "formula": "DÉMÉNAGER (quitter) ≠ EMMÉNAGER (entrer) ≠ AMÉNAGER (agencer/meubler)",
    "negationFormula": "Je ne veux pas déménager | Nous n’avons pas encore emménagé",
    "headers": [
      "Verbe",
      "Préfixe & Sens",
      "Exemple Réel du Cours A1.2",
      "Sens en Anglais"
    ],
    "rows": [
      [
        "Déménager",
        "Dé- = quitter son ancien logement",
        "Nous déménageons le week-end prochain.",
        "We are moving out next weekend."
      ],
      [
        "Emménager",
        "Em- = s’installer dans le nouveau",
        "Sarah a emménagé dans son nouvel appartement.",
        "Sarah moved into her new apartment."
      ],
      [
        "Aménager",
        "A- = agencer, meubler et décorer",
        "Ils ont aménagé le salon avec goût.",
        "They arranged / furnished the living room tastefully."
      ],
      [
        "Faire ses cartons",
        "Préparation",
        "Avant de déménager, il faut faire les cartons.",
        "Before moving, one must pack the boxes."
      ],
      [
        "La crémaillère",
        "Fête d’installation",
        "Nous fêtons la pendaison de crémaillère samedi.",
        "We are having our housewarming party on Saturday."
      ]
    ],
    "traps": [
      "⚠️ CONFUSION CLASSIQUE DÉMÉNAGER / EMMÉNAGER : \"J’ai déménagé dans mon nouvel appart\" est une imprécision courante. Pour l’entrée dans le nouveau lieu, dites : \"J’ai emménagé\".",
      "⚠️ PRÉPOSITIONS ASSOCIÉES : On déménage DE quelque part, et on emménage DANS un nouvel endroit."
    ],
    "rules": [
      "Tous trois sont des verbes réguliers du 1er groupe (-er) : je déménage, nous déménageons (avec -e pour préserver le son doux du g)."
    ]
  },
  "prepositions_lieu": {
    "id": "prepositions_lieu",
    "title": "Prépositions de Lieu : Simples (sans DE) vs Composées (avec DE / DU / DES)",
    "badge": "A1.2 · Orientation & Description",
    "summary": "Pour situer des objets ou des pièces dans l’espace, les prépositions simples se lient directement au nom (sur la table), tandis que les prépositions composées exigent \"DE\" qui se contracte obligatoirement avec les articles le/les.",
    "formula": "Simples : sur, sous, dans, devant, derrière, entre + Nom | Composées : à côté de, en face de, au-dessus de + Nom",
    "negationFormula": "N/A",
    "headers": [
      "Catégorie",
      "Préposition",
      "Exemple Réel du Cours",
      "Traduction Anglaise"
    ],
    "rows": [
      [
        "Simple (sans de)",
        "sur (on top)",
        "Les clés sont sur la table.",
        "The keys are on the table."
      ],
      [
        "Simple (sans de)",
        "sous (under)",
        "Le chat dort sous le lit.",
        "The cat is sleeping under the bed."
      ],
      [
        "Simple (sans de)",
        "dans (inside)",
        "Mes affaires sont dans le carton.",
        "My things are in the box."
      ],
      [
        "Simple (sans de)",
        "devant (in front)",
        "La voiture est garée devant l’immeuble.",
        "The car is parked in front of the building."
      ],
      [
        "Simple (sans de)",
        "derrière (behind)",
        "Le jardin se trouve derrière la maison.",
        "The garden is located behind the house."
      ],
      [
        "Simple (sans de)",
        "entre (between)",
        "La table de nuit est entre les deux lits.",
        "The nightstand is between the two beds."
      ],
      [
        "Composée (avec de)",
        "à côté de (next to)",
        "La cuisine est à côté du salon (de + le).",
        "The kitchen is next to the living room."
      ],
      [
        "Composée (avec de)",
        "en face de (opposite)",
        "La pharmacie est en face de la gare.",
        "The pharmacy is across from the station."
      ],
      [
        "Composée (avec de)",
        "au-dessus de (above)",
        "Le miroir est au-dessus du lavabo.",
        "The mirror is above the sink."
      ],
      [
        "Composée (avec de)",
        "au bout de (at end of)",
        "La salle de bains est au bout du couloir.",
        "The bathroom is at the end of the hallway."
      ]
    ],
    "traps": [
      "⚠️ CONTRACTION DU ET DES : Ne dites JAMAIS \"à côté de le salon\" ! Dites toujours \"à côté DU salon\" et \"en face DES magasins\".",
      "⚠️ SOUS vs AU-DESSOUS DE : \"Sous\" est direct (en contact ou immédiatement en dessous). \"Au-dessous de\" implique un niveau inférieur."
    ],
    "rules": [
      "Contractions avec DE : de + le = DU ; de + les = DES ; de + la = DE LA ; de + l’ = DE L’."
    ]
  },
  "participes_passes": {
    "id": "participes_passes",
    "title": "Les 6 Grandes Familles de Participes Passés (-é, -i, -u, -is, -it, -ert)",
    "badge": "A1.2 · Morphologie du Passé Composé",
    "summary": "Le participe passé des verbes français suit des règles de terminaison très claires regroupées en 6 familles principales. Les mémoriser par terminaison permet de conjuguer sans hésitation.",
    "formula": "1er groupe (-er) ➜ -é | 2e groupe (-ir) ➜ -i | 3e groupe ➜ -u, -is, -it, -ert",
    "negationFormula": "N/A",
    "headers": [
      "Famille",
      "Verbes Clés",
      "Participe Passé",
      "Exemple Réel du Cours",
      "Sens en Anglais"
    ],
    "rows": [
      [
        "Famille en -É",
        "parler, manger, aller, aimer",
        "parlé, mangé, allé, aimé",
        "J’ai parlé avec le directeur.",
        "I spoke with the director."
      ],
      [
        "Famille en -I",
        "finir, choisir, sortir, partir",
        "fini, choisi, sorti, parti",
        "Elle a fini son travail à temps.",
        "She finished her work on time."
      ],
      [
        "Famille en -U",
        "voir, vouloir, pouvoir, boire, lire",
        "vu, voulu, pu, bu, lu",
        "Il a bu un café et a lu le journal.",
        "He drank a coffee and read the newspaper."
      ],
      [
        "Famille en -U (spécial)",
        "avoir, savoir, devoir, recevoir",
        "eu [y], su, dû, reçu",
        "J’ai eu une opportunité en or.",
        "I had a golden opportunity."
      ],
      [
        "Famille en -IS",
        "prendre, apprendre, comprendre, mettre",
        "pris, appris, compris, mis",
        "Nous avons pris le train de huit heures.",
        "We took the eight o’clock train."
      ],
      [
        "Famille en -IT",
        "dire, écrire, faire",
        "dit, écrit, fait",
        "Elle m’a dit la vérité.",
        "She told me the truth."
      ],
      [
        "Famille en -ERT",
        "ouvrir, découvrir, offrir",
        "ouvert, découvert, offert",
        "Ils ont ouvert la fenêtre du salon.",
        "They opened the living room window."
      ],
      [
        "Exception Majeure",
        "être (to be)",
        "été",
        "Mon séjour à Paris a été magnifique.",
        "My stay in Paris was magnificent."
      ]
    ],
    "traps": [
      "⚠️ PRONONCIATION DE \"EU\" : Le participe passé de avoir s’écrit \"eu\" mais se prononce simplement [y] (comme la lettre u) !",
      "⚠️ DÛ AVEC ACCENT CIRCONFLEXE : Le participe masculin singulier de devoir prend un accent circonflexe (\"dû\") pour le distinguer de l’article partitif \"du\" (\"J’ai dû partir\")."
    ],
    "rules": [
      "Féminin des participes en -is, -it, -ert : on entend la consonne finale au féminin ! (pris ➜ prise ; écrit ➜ écrite ; ouvert ➜ ouverte)."
    ]
  },
  "passe_compose_syntax": {
    "id": "passe_compose_syntax",
    "title": "Passé Composé : Négation et Place des Adverbes Interposés",
    "badge": "A1.2 · Syntaxe & Ordre des Mots",
    "summary": "Au passé composé, la négation (ne... pas, ne... jamais, ne... rien) et les adverbes courts de quantité ou d’appréciation (bien, mal, beaucoup, trop, déjà) se placent TOUJOURS entre l’auxiliaire et le participe passé.",
    "formula": "Négation : Sujet + ne + [Auxiliaire] + pas + [Participe]  |  Adverbe : Sujet + [Auxiliaire] + [Adverbe] + [Participe]",
    "negationFormula": "Sujet + ne/n’ + [ai/as/a/avons/avez/ont] + pas + [Participe Passé]",
    "headers": [
      "Élément Inséré",
      "Position",
      "Exemple Réel du Cours",
      "Sens en Anglais"
    ],
    "rows": [
      [
        "ne ... pas",
        "Encadre l’auxiliaire",
        "Je n’ai pas compris la question.",
        "I did not understand the question."
      ],
      [
        "ne ... jamais",
        "Encadre l’auxiliaire",
        "Il n’a jamais habité en ville.",
        "He has never lived in the city."
      ],
      [
        "ne ... rien",
        "Encadre l’auxiliaire",
        "Elle n’a rien mangé ce matin.",
        "She ate nothing this morning."
      ],
      [
        "bien / mal",
        "Entre auxiliaire et participe",
        "Vous avez très bien parlé français.",
        "You spoke French very well."
      ],
      [
        "beaucoup / trop",
        "Entre auxiliaire et participe",
        "J’ai trop mangé hier soir.",
        "I ate too much yesterday evening."
      ],
      [
        "déjà",
        "Entre auxiliaire et participe",
        "Nous avons déjà fait nos valises.",
        "We have already packed our bags."
      ],
      [
        "Adverbes longs en -ment",
        "Placés APRÈS le participe",
        "Il a conduit prudemment sur la route.",
        "He drove carefully on the road."
      ]
    ],
    "traps": [
      "⚠️ ERREUR FRÉQUENTE SUR LA NÉGATION : Ne dites JAMAIS \"J’ai ne compris pas\" ou \"J’ai pas compris\" à l’écrit. La structure exacte est : \"Je N’ai PAS compris\".",
      "⚠️ ERREUR SUR LA PLACE DE BEAUCOUP : Ne dites pas \"J’ai mangé beaucoup hier\", mais : \"J’ai BEAUCOUP mangé hier\"."
    ],
    "rules": [
      "Adverbes courts interposés : bien, mal, beaucoup, un peu, trop, assez, déjà, encore, toujours.",
      "Adverbes de temps précis (hier, demain, tard) se placent en début ou en fin de phrase : \"Hier, nous avons visité le musée\"."
    ]
  },
  "trouver_plaire": {
    "id": "trouver_plaire",
    "title": "Donner son Avis : Trouver (+ Adj) vs Plaire à quelqu’un",
    "badge": "A1.3 · Opinions & Sentiments",
    "summary": "Pour exprimer son appréciation, le français offre deux constructions majeures : active personnelle (\"Je trouve ce film super\") et passive d’affinité où l’objet devient le sujet qui plaît (\"Ce film me plaît beaucoup\").",
    "formula": "TROUVER + [COD] + Adjectif (accord en genre et nombre)  |  [Sujet/Objet] + PLAIRE À + [COI / Personne]",
    "negationFormula": "Je ne trouve pas cette ville agréable | Cette idée ne me plaît pas du tout",
    "headers": [
      "Verbe",
      "Construction Requise",
      "Exemple Réel du Cours PDF",
      "Traduction Anglaise"
    ],
    "rows": [
      [
        "Trouver (masculin)",
        "trouver + COD masculin + adj",
        "Je trouve cet appartement très lumineux.",
        "I find this apartment very bright."
      ],
      [
        "Trouver (féminin)",
        "trouver + COD féminin + adj (+e)",
        "Je trouve cette ville magnifique.",
        "I find this city magnificent."
      ],
      [
        "Trouver (pluriel)",
        "trouver + COD pluriel + adj (+s)",
        "Je trouve ces cours très utiles.",
        "I find these classes very useful."
      ],
      [
        "Plaire à (1re pers.)",
        "Objet + me plaît / plaisent",
        "Cette musique me plaît énormément.",
        "I really like this music (it pleases me)."
      ],
      [
        "Plaire à (pluriel)",
        "Objets pluriels + plaisent",
        "Ces tableaux me plaisent beaucoup.",
        "I like these paintings a lot."
      ],
      [
        "Plaire à qqn (nom)",
        "plaît à + Nom",
        "Ce projet plaît beaucoup à mes collègues.",
        "My colleagues like this project a lot."
      ],
      [
        "Plaire à (lui / leur)",
        "Pronom COI + plaît",
        "Paris lui plaît beaucoup.",
        "He/She likes Paris a lot."
      ]
    ],
    "traps": [
      "⚠️ PLAIRE S’ACCORDE AVEC CE QUI PLAÎT, PAS AVEC VOUS ! Dans \"Les fleurs me plaisent\", le sujet est \"les fleurs\" (pluriel ➜ plaisent), et NON \"me\" !",
      "⚠️ ACCORD DE L’ADJECTIF AVEC TROUVER : Dans \"Je la trouve belle\", belle s’accorde avec le pronom COD \"la\" (féminin singulier)."
    ],
    "rules": [
      "Conjugaison de PLAIRE au présent : il/elle plaît (avec accent circonflexe sur le î), ils/elles plaisent.",
      "Au passé composé : le participe passé de plaire est PLU (strictement invariable) : \"Elle m’a plu\", \"Ils nous ont plu\"."
    ]
  }
};

  const CHALLENGES = [
  {
    "id": "cause_grâce_prof",
    "topic": "cause",
    "structureId": "cause",
    "topicLabel": "Cause · Grâce à (Positif)",
    "scene": "work",
    "english": "I passed my exam thanks to my teacher.",
    "targetWords": [
      "J’ai",
      "réussi",
      "mon",
      "examen",
      "grâce",
      "à",
      "mon",
      "professeur"
    ],
    "fullSentence": "J’ai réussi mon examen grâce à mon professeur.",
    "distractors": [
      {
        "word": "à cause de",
        "trap": "cause_polarity",
        "tip": "Polarity Error: \"À cause de\" is only for negative obstacles or faults! For positive help, use \"Grâce à\"!"
      },
      {
        "word": "parce que",
        "trap": "syntax_error",
        "tip": "Syntax Error: \"Parce que\" requires a subject + verb clause. For a noun phrase (\"mon professeur\"), use \"Grâce à\"!"
      }
    ],
    "purpose": "🎯 Positive Cause · Expressing successful help with Grâce à",
    "purposeNote": "Starting the Cause Chain: When the cause is POSITIVE and helped you succeed, French requires \"Grâce à\" (never \"À cause de\").",
    "rule": "Use \"grâce à + nom\" exclusively for positive, favorable causes that produce a good result.",
    "nextPreview": "Next card: See what changes when the cause is an obstacle, problem, or delay!",
    "chain": "cause_contrast",
    "chainTitle": "⚡ Cause: Positif (Grâce à) vs Négatif (À cause de) vs Neutre (En raison de) vs Verbe (Parce que)",
    "chainStep": 1,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "cause_acause_train",
    "topic": "cause",
    "structureId": "cause",
    "topicLabel": "Cause · À cause de (Négatif)",
    "scene": "train-station",
    "english": "The train is late because of the snow.",
    "targetWords": [
      "Le",
      "train",
      "est",
      "en",
      "retard",
      "à",
      "cause",
      "de",
      "la",
      "neige"
    ],
    "fullSentence": "Le train est en retard à cause de la neige.",
    "distractors": [
      {
        "word": "grâce à",
        "trap": "cause_polarity",
        "tip": "Polarity Error: Snow delaying a train is an obstacle/problem! Use \"à cause de\", never \"grâce à\"!"
      },
      {
        "word": "parce que",
        "trap": "syntax_error",
        "tip": "Syntax Error: \"la neige\" is a noun phrase, so use the preposition \"à cause de\", not \"parce que\"!"
      }
    ],
    "purpose": "⚖️ Negative Cause · Expressing an obstacle or delay with À cause de",
    "purposeNote": "Contrast with Card 1: In the previous card we used \"Grâce à\" for a good outcome. Here, the train is late (a problem), so you must use \"À cause de\"!",
    "rule": "Use \"à cause de + nom\" for negative, unfavorable causes, problems, or obstacles.",
    "nextPreview": "Next card: How to announce a neutral or official reason (like construction or flight notices)?",
    "chain": "cause_contrast",
    "chainTitle": "⚡ Cause: Positif (Grâce à) vs Négatif (À cause de) vs Neutre (En raison de) vs Verbe (Parce que)",
    "chainStep": 2,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "cause_enraison_musee",
    "topic": "cause",
    "structureId": "cause",
    "topicLabel": "Cause · En raison de (Neutre/Officiel)",
    "scene": "museum-visit",
    "english": "The museum is closed due to construction work.",
    "targetWords": [
      "Le",
      "musée",
      "est",
      "fermé",
      "en",
      "raison",
      "des",
      "travaux"
    ],
    "fullSentence": "Le musée est fermé en raison des travaux.",
    "distractors": [
      {
        "word": "à cause de",
        "trap": "style_register",
        "tip": "Register Error: In formal public signs and announcements, \"en raison de\" is preferred over \"à cause de\"!"
      },
      {
        "word": "grâce aux",
        "trap": "cause_polarity",
        "tip": "Polarity Error: Construction shutting down a museum is an inconvenience, not a blessing! Do not use \"grâce à\"!"
      }
    ],
    "purpose": "📋 Neutral / Official Cause · Formal announcements with En raison de",
    "purposeNote": "Contrast with Cards 1 & 2: When an administration, airport, or public institution states a neutral/official reason without assigning blame, French prefers \"En raison de\". Notice de + les = des.",
    "rule": "Use \"en raison de + nom\" in formal, administrative, or neutral notices (transport, museum, flights).",
    "nextPreview": "Next card: How do you express cause when you have a full sentence with a conjugated verb?",
    "chain": "cause_contrast",
    "chainTitle": "⚡ Cause: Positif (Grâce à) vs Négatif (À cause de) vs Neutre (En raison de) vs Verbe (Parce que)",
    "chainStep": 3,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "cause_parceque_malade",
    "topic": "cause",
    "structureId": "cause",
    "topicLabel": "Cause · Parce que + Verbe Conjugué",
    "scene": "bedtime",
    "english": "I stayed in bed because I was sick.",
    "targetWords": [
      "Je",
      "suis",
      "resté",
      "au",
      "lit",
      "parce",
      "que",
      "j’étais",
      "malade"
    ],
    "fullSentence": "Je suis resté au lit parce que j’étais malade.",
    "distractors": [
      {
        "word": "à cause de",
        "trap": "syntax_error",
        "tip": "Syntax Error: \"j’étais malade\" contains a conjugated verb! \"À cause de\" cannot precede a conjugated clause!"
      },
      {
        "word": "grâce à",
        "trap": "cause_polarity",
        "tip": "Polarity & Syntax Error: Illness is negative, and it cannot take a conjugated clause!"
      }
    ],
    "purpose": "🔗 Verbal Cause Clause · Connecting a full conjugated verb with Parce que",
    "purposeNote": "Contrast with Cards 1–3: \"Grâce à\", \"À cause de\", and \"En raison de\" take NOUNS. To introduce a full sentence with a conjugated verb, you must use \"Parce que\"!",
    "rule": "Use \"parce que + sujet + verbe\" when explaining cause with a clause. Use \"grâce à / à cause de + nom\" with noun phrases.",
    "nextPreview": "Chain Complete! You have mastered all 4 faces of expressing cause in French.",
    "chain": "cause_contrast",
    "chainTitle": "⚡ Cause: Positif (Grâce à) vs Négatif (À cause de) vs Neutre (En raison de) vs Verbe (Parce que)",
    "chainStep": 4,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "neque_boire_eau",
    "topic": "neque",
    "structureId": "neque",
    "topicLabel": "Négation Restrictive · Ne ... que (Only)",
    "scene": "cafe-terrasse",
    "english": "I only drink water during meals.",
    "targetWords": [
      "Je",
      "ne",
      "bois",
      "que",
      "de",
      "l’eau",
      "pendant",
      "les",
      "repas"
    ],
    "fullSentence": "Je ne bois que de l’eau pendant les repas.",
    "distractors": [
      {
        "word": "pas",
        "trap": "negation_type",
        "tip": "Negation Error: \"ne ... pas\" means \"I do NOT drink water at all\". For \"only water\", use \"ne ... que\"!"
      },
      {
        "word": "seulement",
        "trap": "anglicism",
        "tip": "Structure Tip: French prefers \"ne ... que\" wrapping the verb over using \"seulement\"!"
      }
    ],
    "purpose": "🎯 Restrictive Negation · Expressing \"only\" with Ne ... que",
    "purposeNote": "Starting Negation Chain: \"Ne ... que\" does NOT negate an action—it RESTRICTS it to \"only/nothing but\". \"Que\" is placed directly in front of the restricted element.",
    "rule": "Use \"ne + verbe + que + élément restreint\" to say \"only / just / nothing but\".",
    "nextPreview": "Next card: Contrast with absolute negation (not at all) using \"ne ... pas\"!",
    "chain": "neque_contrast",
    "chainTitle": "🚫 Négation: Restriction (Ne ... que) vs Négation Totale (Ne ... pas) vs Fréquence (Ne ... jamais)",
    "chainStep": 1,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "nepas_boire_cafe",
    "topic": "neque",
    "structureId": "neque",
    "topicLabel": "Négation Totale · Ne ... pas (Not)",
    "scene": "coffee",
    "english": "I do not drink coffee during meals.",
    "targetWords": [
      "Je",
      "ne",
      "bois",
      "pas",
      "de",
      "café",
      "pendant",
      "les",
      "repas"
    ],
    "fullSentence": "Je ne bois pas de café pendant les repas.",
    "distractors": [
      {
        "word": "que",
        "trap": "negation_type",
        "tip": "Negation Error: \"ne ... que\" means \"I ONLY drink coffee\"! For \"I do not drink\", use \"ne ... pas\"!"
      },
      {
        "word": "du",
        "trap": "partitive_negation",
        "tip": "Partitive Trap: In negative sentences with \"pas\", partitives (du/de la/des) become simple \"de\"!"
      }
    ],
    "purpose": "⚖️ Absolute Negation · Rejecting an action with Ne ... pas",
    "purposeNote": "Contrast with Card 1: In the previous card, \"ne ... que\" meant \"only\". Here, you do NOT drink coffee at all, so use \"ne ... pas\"! Notice \"du café\" becomes \"de café\".",
    "rule": "Use \"ne + verbe + pas\" for standard negation. Indefinite and partitive articles (un, une, des, du) become \"de\" after \"pas\".",
    "nextPreview": "Next card: How to express zero frequency (\"never\") using \"ne ... jamais\"!",
    "chain": "neque_contrast",
    "chainTitle": "🚫 Négation: Restriction (Ne ... que) vs Négation Totale (Ne ... pas) vs Fréquence (Ne ... jamais)",
    "chainStep": 2,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "nejamais_boire_alcool",
    "topic": "neque",
    "structureId": "neque",
    "topicLabel": "Négation de Fréquence · Ne ... jamais (Never)",
    "scene": "bistro-payment",
    "english": "I never drink alcohol on weekdays.",
    "targetWords": [
      "Je",
      "ne",
      "bois",
      "jamais",
      "d’alcool",
      "en",
      "semaine"
    ],
    "fullSentence": "Je ne bois jamais d’alcool en semaine.",
    "distractors": [
      {
        "word": "pas",
        "trap": "redundancy",
        "tip": "Redundancy Error: Never combine \"pas\" and \"jamais\"! Say \"ne bois jamais\", never \"ne bois pas jamais\"!"
      },
      {
        "word": "que",
        "trap": "negation_type",
        "tip": "Meaning Error: \"ne ... que\" would mean \"I only drink alcohol\"! For \"never\", use \"jamais\"!"
      }
    ],
    "purpose": "⚖️ Frequency Negation · Expressing zero frequency with Ne ... jamais",
    "purposeNote": "Contrast with Cards 1 & 2: \"Ne ... pas\" = not now/generally. \"Ne ... jamais\" = never, at no time. Never say \"ne ... pas jamais\"!",
    "rule": "\"Ne ... jamais\" replaces \"ne ... pas\" entirely to mean \"never\". The article reduces to \"d’\" before vowels.",
    "nextPreview": "Next card: How does \"Ne ... que\" behave in the Passé Composé? (Watch where \"que\" lands!)",
    "chain": "neque_contrast",
    "chainTitle": "🚫 Négation: Restriction (Ne ... que) vs Négation Totale (Ne ... pas) vs Fréquence (Ne ... jamais)",
    "chainStep": 3,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "neque_passe_compose_dormir",
    "topic": "neque",
    "structureId": "neque",
    "topicLabel": "Négation Restrictive · Passé Composé",
    "scene": "sleep",
    "english": "She only slept four hours last night.",
    "targetWords": [
      "Elle",
      "n’a",
      "dormi",
      "que",
      "quatre",
      "heures",
      "cette",
      "nuit"
    ],
    "fullSentence": "Elle n’a dormi que quatre heures cette nuit.",
    "distractors": [
      {
        "word": "n’a que dormi",
        "trap": "que_placement",
        "tip": "Placement Error: \"que\" does NOT go before the participle! It goes directly before the restricted object: \"n’a dormi que quatre heures\"!"
      },
      {
        "word": "pas",
        "trap": "negation_type",
        "tip": "Meaning Error: \"n’a pas dormi\" means she didn’t sleep at all! For \"only 4 hours\", use \"que\"!"
      }
    ],
    "purpose": "⚠️ Word Placement Trap · \"Que\" in Passé Composé lands before the noun!",
    "purposeNote": "Critical Contrast: Unlike \"pas\" which sandwiches the auxiliary (Elle n’a PAS dormi), \"que\" goes directly before the thing restricted (Elle n’a dormi QUE quatre heures)!",
    "rule": "In compound tenses (Passé Composé), \"ne\" precedes the auxiliary, but \"que\" stays before the restricted item: Sujet + ne + auxiliaire + participe + QUE + complément.",
    "nextPreview": "Chain Complete! You have mastered the full negation contrast spectrum.",
    "chain": "neque_contrast",
    "chainTitle": "🚫 Négation: Restriction (Ne ... que) vs Négation Totale (Ne ... pas) vs Fréquence (Ne ... jamais)",
    "chainStep": 4,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "sefaire_cheveux_coiffeur",
    "topic": "se_faire",
    "structureId": "se_faire",
    "topicLabel": "Se faire + Infinitif · Service Reçu",
    "scene": "coiffeur-haircut",
    "english": "I am getting my hair cut at the hairdresser.",
    "targetWords": [
      "Je",
      "me",
      "fais",
      "couper",
      "les",
      "cheveux",
      "chez",
      "le",
      "coiffeur"
    ],
    "fullSentence": "Je me fais couper les cheveux chez le coiffeur.",
    "distractors": [
      {
        "word": "coupe",
        "trap": "meaning_shift",
        "tip": "Meaning Trap: \"Je me coupe les cheveux\" means you hold the scissors yourself! For a salon service, use \"Je me fais couper\"!"
      },
      {
        "word": "fais couper",
        "trap": "missing_reflexive",
        "tip": "Missing Pronoun: You need the reflexive pronoun \"me\" to indicate the service is done to you: \"Je me fais couper\"!"
      }
    ],
    "purpose": "🎯 Causative Service · Having an action performed on you by a professional",
    "purposeNote": "Starting Se Faire Chain: In French, if someone else cuts your hair or massages your back, you cannot say \"Je me coupe\". You say \"Je me fais couper\" (I have it done to me).",
    "rule": "Use \"se faire + infinitif\" when a professional or someone else performs an action or service onto you.",
    "nextPreview": "Next card: Contrast this with an action you perform on yourself with your own hands!",
    "chain": "se_faire_contrast",
    "chainTitle": "🔒 Causatif: Se faire + Infinitif (Service) vs Réflexif Simple vs Faire + Infinitif",
    "chainStep": 1,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "reflexive_ongles_maison",
    "topic": "se_faire",
    "structureId": "se_faire",
    "topicLabel": "Verbe Réflexif Simple · Fait par Soi-même",
    "scene": "brush",
    "english": "I cut my own nails at home.",
    "targetWords": [
      "Je",
      "me",
      "coupe",
      "les",
      "ongles",
      "à",
      "la",
      "maison"
    ],
    "fullSentence": "Je me coupe les ongles à la maison.",
    "distractors": [
      {
        "word": "fais couper",
        "trap": "unneeded_causative",
        "tip": "Meaning Shift: \"Je me fais couper\" implies a salon or someone else does it! You do it yourself, so use simple \"Je me coupe\"!"
      },
      {
        "word": "coupe mes",
        "trap": "possessive_trap",
        "tip": "Body Part Trap: In French with reflexive verbs, use definite articles (les ongles), not possessive adjectives (mes ongles)!"
      }
    ],
    "purpose": "⚖️ Direct Reflexive · Performing an action on yourself with your own hands",
    "purposeNote": "Contrast with Card 1: In Card 1, the hairdresser did it (\"Je me fais couper\"). Here, YOU hold the clippers yourself, so use ordinary reflexive \"Je me coupe les ongles\"!",
    "rule": "Use simple reflexive \"Je me + verbe\" when you perform the action on yourself. Use definite articles (les ongles) with body parts.",
    "nextPreview": "Next card: What if you have an external object repaired (without the reflexive \"me\")?",
    "chain": "se_faire_contrast",
    "chainTitle": "🔒 Causatif: Se faire + Infinitif (Service) vs Réflexif Simple vs Faire + Infinitif",
    "chainStep": 2,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "faire_chaudiere_plombier",
    "topic": "se_faire",
    "structureId": "se_faire",
    "topicLabel": "Faire + Infinitif · Objet Réparé (Non-réflexif)",
    "scene": "plumber-repair",
    "english": "I am having the boiler repaired by a technician.",
    "targetWords": [
      "Je",
      "fais",
      "réparer",
      "la",
      "chaudière",
      "par",
      "un",
      "technicien"
    ],
    "fullSentence": "Je fais réparer la chaudière par un technicien.",
    "distractors": [
      {
        "word": "me fais",
        "trap": "unneeded_reflexive",
        "tip": "Reflexive Error: The boiler is being repaired, not your body! Do not use \"me fais réparer\"!"
      },
      {
        "word": "répare",
        "trap": "meaning_shift",
        "tip": "Meaning Shift: \"Je répare\" means you are fixing the plumbing yourself! Use \"fais réparer\" for hiring a professional!"
      }
    ],
    "purpose": "⚖️ Non-Reflexive Causative · Having an object or machine repaired",
    "purposeNote": "Contrast with Cards 1 & 2: When an external object (boiler, car, appliance) is being worked on, do NOT use reflexive \"me\". Use standard \"faire + infinitif\"!",
    "rule": "Use \"faire + infinitif\" (without reflexive pronoun) when hiring someone to work on an object or appliance: \"Je fais réparer la chaudière\".",
    "nextPreview": "Next card: The Master Trap of Se Faire in Passé Composé! (Does \"fait\" agree with Elle?)",
    "chain": "se_faire_contrast",
    "chainTitle": "🔒 Causatif: Se faire + Infinitif (Service) vs Réflexif Simple vs Faire + Infinitif",
    "chainStep": 3,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "sefaire_passe_invariable",
    "topic": "se_faire",
    "structureId": "se_faire",
    "topicLabel": "Se faire + Infinitif · Règle d’Invariabilité",
    "scene": "doctor-office",
    "english": "She had her blood pressure checked by the doctor.",
    "targetWords": [
      "Elle",
      "s’est",
      "fait",
      "examiner",
      "par",
      "le",
      "médecin"
    ],
    "fullSentence": "Elle s’est fait examiner par le médecin.",
    "distractors": [
      {
        "word": "faite",
        "trap": "invariable_agreement",
        "tip": "Major Trap: The participle \"fait\" in \"se faire + infinitif\" is 100% INVARIABLE! Never write \"s’est faite\"!"
      },
      {
        "word": "a fait",
        "trap": "auxiliary_trap",
        "tip": "Auxiliary Error: Reflexive \"s’est\" requires ÊTRE, not AVOIR!"
      }
    ],
    "purpose": "⚠️ Master Agreement Trap · \"Fait\" is always INVARIABLE before an infinitive!",
    "purposeNote": "Critical Rule: Even though the subject is \"Elle\" and the auxiliary is \"Être\", the participle \"fait\" followed by an infinitive NEVER agrees! It is always \"s’est fait\", never \"s’est faite\"!",
    "rule": "In \"se faire + infinitif\", the participle \"fait\" is strictly invariable: always \"fait\", never \"faite\" or \"faits\".",
    "nextPreview": "Chain Complete! You master causative structures and the \"fait\" invariability rule.",
    "chain": "se_faire_contrast",
    "chainTitle": "🔒 Causatif: Se faire + Infinitif (Service) vs Réflexif Simple vs Faire + Infinitif",
    "chainStep": 4,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "sortir_intransitif_etre",
    "topic": "maison",
    "structureId": "maison",
    "topicLabel": "Maison d’Être · Mouvement Intransitif (ÊTRE)",
    "scene": "walk",
    "english": "She went out with her friends yesterday evening.",
    "targetWords": [
      "Elle",
      "est",
      "sortie",
      "avec",
      "ses",
      "amies",
      "hier",
      "soir"
    ],
    "fullSentence": "Elle est sortie avec ses amies hier soir.",
    "distractors": [
      {
        "word": "a",
        "trap": "auxiliary_shift",
        "tip": "Auxiliary Error: When \"sortir\" means going out (intransitive), it takes ÊTRE (est sortie)!"
      },
      {
        "word": "sorti",
        "trap": "agreement_missing",
        "tip": "Agreement Error: With ÊTRE, \"Elle\" demands feminine agreement (+e = sortie)!"
      }
    ],
    "purpose": "🎯 Intransitive Movement · Subject moves herself (ÊTRE + accord +e)",
    "purposeNote": "Starting Être vs Avoir Movement Chain: When a movement verb like sortir, monter, or descendre describes the subject moving herself, use ÊTRE and agree with the subject!",
    "rule": "Movement verbs of \"La Maison d’Être\" take ÊTRE when intransitive. The participle agrees with the subject (Elle ➜ sortie).",
    "nextPreview": "Next card: What happens when the subject takes an object OUT of a bag or house?",
    "chain": "etre_movement_vs_avoir_transitive",
    "chainTitle": "🏠 Maison d’Être: Mouvement Intransitif (Être) vs Transitif avec COD (Avoir)",
    "chainStep": 1,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "sortir_transitif_avoir",
    "topic": "maison",
    "structureId": "maison",
    "topicLabel": "Transitif Direct · AVOIR (Pas d’accord)",
    "scene": "rain",
    "english": "She took out her umbrella because of the rain.",
    "targetWords": [
      "Elle",
      "a",
      "sorti",
      "son",
      "parapluie",
      "à",
      "cause",
      "de",
      "la",
      "pluie"
    ],
    "fullSentence": "Elle a sorti son parapluie à cause de la pluie.",
    "distractors": [
      {
        "word": "est",
        "trap": "auxiliary_shift",
        "tip": "Auxiliary Flip: \"son parapluie\" is a direct object! When sortir has a direct object, auxiliary flips to AVOIR (a sorti)!"
      },
      {
        "word": "sortie",
        "trap": "wrong_agreement",
        "tip": "Agreement Error: With AVOIR, the participle does NOT agree with the subject \"Elle\"! It is \"a sorti\", not \"a sortie\"!"
      }
    ],
    "purpose": "⚖️ Transitive Action · Taking an object out flips auxiliary to AVOIR",
    "purposeNote": "Contrast with Card 1: In Card 1, \"Elle est sortie\" (she went out). Here, she took an OBJECT out (son parapluie). The auxiliary FLIPS to AVOIR (\"a sorti\") and does NOT agree with Elle!",
    "rule": "When movement verbs take a direct object (COD), they conjugate with AVOIR: \"Elle a sorti son parapluie\". The participle does not agree with the subject.",
    "nextPreview": "Next card: Compare \"monter\" (going upstairs vs carrying suitcases up)!",
    "chain": "etre_movement_vs_avoir_transitive",
    "chainTitle": "🏠 Maison d’Être: Mouvement Intransitif (Être) vs Transitif avec COD (Avoir)",
    "chainStep": 2,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "monter_intransitif_etre",
    "topic": "maison",
    "structureId": "maison",
    "topicLabel": "Maison d’Être · Mouvement (ÊTRE)",
    "scene": "apartment-living",
    "english": "He went up to the third floor on foot.",
    "targetWords": [
      "Il",
      "est",
      "monté",
      "au",
      "troisième",
      "étage",
      "à",
      "pied"
    ],
    "fullSentence": "Il est monté au troisième étage à pied.",
    "distractors": [
      {
        "word": "a",
        "trap": "auxiliary_shift",
        "tip": "Auxiliary Error: Climbing the stairs yourself is intransitive movement: use ÊTRE (est monté)!"
      },
      {
        "word": "montée",
        "trap": "wrong_gender",
        "tip": "Gender Error: \"Il\" is masculine singular, so no +e!"
      }
    ],
    "purpose": "🎯 Intransitive Movement · Climbing upstairs with ÊTRE",
    "purposeNote": "In this card, \"Il\" moves himself up to the 3rd floor. Intransitive movement uses ÊTRE (\"est monté\").",
    "rule": "Intransitive \"monter\" (to go up) uses ÊTRE.",
    "nextPreview": "Next card: Carrying suitcases up the stairs—which auxiliary does it take?",
    "chain": "etre_movement_vs_avoir_transitive",
    "chainTitle": "🏠 Maison d’Être: Mouvement Intransitif (Être) vs Transitif avec COD (Avoir)",
    "chainStep": 3,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "monter_transitif_avoir",
    "topic": "maison",
    "structureId": "maison",
    "topicLabel": "Transitif Direct · Porter un Objet (AVOIR)",
    "scene": "apartment-living",
    "english": "He carried the suitcases up into the room.",
    "targetWords": [
      "Il",
      "a",
      "monté",
      "les",
      "valises",
      "dans",
      "la",
      "chambre"
    ],
    "fullSentence": "Il a monté les valises dans la chambre.",
    "distractors": [
      {
        "word": "est",
        "trap": "auxiliary_shift",
        "tip": "Auxiliary Flip: \"les valises\" is a direct object! When monter takes a COD, use AVOIR (a monté)!"
      },
      {
        "word": "montés",
        "trap": "wrong_agreement",
        "tip": "Agreement Error: With AVOIR, the participle does not agree with a COD placed after the verb!"
      }
    ],
    "purpose": "⚖️ Transitive Action · Carrying objects up flips auxiliary to AVOIR",
    "purposeNote": "Contrast with Card 3: In Card 3, \"Il est monté\" (he climbed up). Here he carried \"les valises\" (direct object), so the auxiliary flips to AVOIR (\"Il a monté\")!",
    "rule": "Transitive \"monter\" (to carry something up) uses AVOIR.",
    "nextPreview": "Chain Complete! You have mastered the Être vs Avoir movement verb duality.",
    "chain": "etre_movement_vs_avoir_transitive",
    "chainTitle": "🏠 Maison d’Être: Mouvement Intransitif (Être) vs Transitif avec COD (Avoir)",
    "chainStep": 4,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "refl_shift_je_masc",
    "topic": "reflexive",
    "structureId": "reflexive",
    "topicLabel": "Verbe Réflexif · Sujet Je (Masc)",
    "scene": "rise",
    "english": "I got up early this morning. (speaker is male)",
    "targetWords": [
      "Je",
      "me",
      "suis",
      "levé",
      "tôt",
      "ce",
      "matin"
    ],
    "fullSentence": "Je me suis levé tôt ce matin.",
    "distractors": [
      {
        "word": "ai",
        "trap": "auxiliary_error",
        "tip": "Auxiliary Error: Reflexive verbs always take ÊTRE (suis), never AVOIR (ai)!"
      },
      {
        "word": "levée",
        "trap": "gender_agreement",
        "tip": "Gender Agreement: Male speaker does not add feminine +e!"
      }
    ],
    "purpose": "🌱 Base Subject: Je (masculine singular · no extra ending)",
    "purposeNote": "Starting the Subject Shift Chain: Observe the base reflexive structure: \"Je me suis levé\" (auxiliary suis, masculine participle levé).",
    "rule": "Sujet + [me/te/se] + ÊTRE + Participe passé. Masculine singular has no added ending.",
    "nextPreview": "Next card: Shift subject to \"Elle\" (feminine singular)—watch the ending mutate!",
    "chain": "refl_subject_shifts",
    "chainTitle": "🔄 Verbes Réflexifs: Subject Shift & Agreement Spectrum (Je ➜ Elle ➜ Nous ➜ Elles ➜ Tu ➜ Vous)",
    "chainStep": 1,
    "chainTotal": 6,
    "chainType": "subject_shift"
  },
  {
    "id": "refl_shift_elle_fem",
    "topic": "reflexive",
    "structureId": "reflexive",
    "topicLabel": "Verbe Réflexif · Sujet Elle (Fém sing: +e)",
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
        "trap": "auxiliary_error",
        "tip": "Auxiliary Error: Reflexive verbs use ÊTRE (s’est), not AVOIR (a)!"
      },
      {
        "word": "levé",
        "trap": "missing_agreement",
        "tip": "Agreement Error: \"Elle\" is feminine singular, so ÊTRE demands +e (levée)!"
      }
    ],
    "purpose": "🔄 Subject Shift: Je (masc) ➜ Elle (fém sing: +e agreement)",
    "purposeNote": "Notice the mutation from Card 1: \"Je me suis levé\" becomes \"Elle s’est levée\". The past participle MUST take +e for feminine singular!",
    "rule": "With feminine singular subject \"Elle\", add +e to the past participle with ÊTRE: \"Elle s’est levée\".",
    "nextPreview": "Next card: Shift subject to \"Nous\" (plural)—watch the auxiliary and +s appear!",
    "chain": "refl_subject_shifts",
    "chainTitle": "🔄 Verbes Réflexifs: Subject Shift & Agreement Spectrum (Je ➜ Elle ➜ Nous ➜ Elles ➜ Tu ➜ Vous)",
    "chainStep": 2,
    "chainTotal": 6,
    "chainType": "subject_shift"
  },
  {
    "id": "refl_shift_nous_plur",
    "topic": "reflexive",
    "structureId": "reflexive",
    "topicLabel": "Verbe Réflexif · Sujet Nous (Pluriel: +s)",
    "scene": "walk",
    "english": "We got up early this morning.",
    "targetWords": [
      "Nous",
      "nous",
      "sommes",
      "levés",
      "tôt",
      "ce",
      "matin"
    ],
    "fullSentence": "Nous nous sommes levés tôt ce matin.",
    "distractors": [
      {
        "word": "avons",
        "trap": "auxiliary_error",
        "tip": "Auxiliary Error: Reflexive verbs use ÊTRE (nous sommes), not AVOIR (nous avons)!"
      },
      {
        "word": "levé",
        "trap": "missing_plural",
        "tip": "Plural Agreement: \"Nous\" is plural, so add +s to the participle (levés)!"
      }
    ],
    "purpose": "🔄 Subject Shift: Elle ➜ Nous (auxiliary sommes + plural agreement +s)",
    "purposeNote": "Notice the shift from Card 2: Auxiliary changes from \"est\" to \"sommes\", and the participle takes plural +s: \"Nous nous sommes levés\".",
    "rule": "With plural subject \"Nous\", auxiliary is \"sommes\" and past participle takes +s: \"Nous nous sommes levés\".",
    "nextPreview": "Next card: Shift subject to \"Elles\" (feminine plural)—both +e AND +s!",
    "chain": "refl_subject_shifts",
    "chainTitle": "🔄 Verbes Réflexifs: Subject Shift & Agreement Spectrum (Je ➜ Elle ➜ Nous ➜ Elles ➜ Tu ➜ Vous)",
    "chainStep": 3,
    "chainTotal": 6,
    "chainType": "subject_shift"
  },
  {
    "id": "refl_shift_elles_femplur",
    "topic": "reflexive",
    "structureId": "reflexive",
    "topicLabel": "Verbe Réflexif · Sujet Elles (Fém pluriel: +es)",
    "scene": "walk",
    "english": "They got up early this morning. (all women)",
    "targetWords": [
      "Elles",
      "se",
      "sont",
      "levées",
      "tôt",
      "ce",
      "matin"
    ],
    "fullSentence": "Elles se sont levées tôt ce matin.",
    "distractors": [
      {
        "word": "ont",
        "trap": "auxiliary_error",
        "tip": "Auxiliary Error: Reflexive verbs use ÊTRE (se sont), not AVOIR (ont)!"
      },
      {
        "word": "levés",
        "trap": "gender_trap",
        "tip": "Gender Agreement: \"Elles\" is feminine plural, so add +e AND +s = levées!"
      }
    ],
    "purpose": "🔄 Subject Shift: Nous ➜ Elles (feminine plural agreement: +es)",
    "purposeNote": "Notice the shift: With \"Elles\", the auxiliary is \"sont\", and the participle agrees in BOTH feminine (+e) and plural (+s) = \"levées\"!",
    "rule": "With feminine plural subject \"Elles\", the past participle ends in +es: \"Elles se sont levées\".",
    "nextPreview": "Next card: Question with \"Tu\" (female friend)—watch the elision (t’es)!",
    "chain": "refl_subject_shifts",
    "chainTitle": "🔄 Verbes Réflexifs: Subject Shift & Agreement Spectrum (Je ➜ Elle ➜ Nous ➜ Elles ➜ Tu ➜ Vous)",
    "chainStep": 4,
    "chainTotal": 6,
    "chainType": "subject_shift"
  },
  {
    "id": "refl_shift_tu_question",
    "topic": "reflexive",
    "structureId": "reflexive",
    "topicLabel": "Verbe Réflexif · Question avec Tu (Féminin)",
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
        "trap": "auxiliary_error",
        "tip": "Auxiliary Error: Reflexive uses ÊTRE (t’es), never AVOIR (tu as)!"
      },
      {
        "word": "douché",
        "trap": "missing_agreement",
        "tip": "Agreement Error: Speaking to a female listener demands feminine +e (douchée)!"
      }
    ],
    "purpose": "🔄 Subject Shift: Question form with Tu + Elision (t’es) + accord (+e)",
    "purposeNote": "In questions with \"tu\", \"te + es\" elides to \"t’es\", and speaking to a female requires the +e agreement: \"Tu t’es douchée ?\".",
    "rule": "Te + es becomes t’es. Agreement reflects the gender of the person addressed.",
    "nextPreview": "Next card: Polite \"Vous\" addressed to ONE gentleman—does it take +s?",
    "chain": "refl_subject_shifts",
    "chainTitle": "🔄 Verbes Réflexifs: Subject Shift & Agreement Spectrum (Je ➜ Elle ➜ Nous ➜ Elles ➜ Tu ➜ Vous)",
    "chainStep": 5,
    "chainTotal": 6,
    "chainType": "subject_shift"
  },
  {
    "id": "refl_shift_vous_polite",
    "topic": "reflexive",
    "structureId": "reflexive",
    "topicLabel": "Verbe Réflexif · Vous de Politesse (Singulier)",
    "scene": "bedtime",
    "english": "Sir, did you rest well during the weekend?",
    "targetWords": [
      "Monsieur",
      "vous",
      "vous",
      "êtes",
      "bien",
      "reposé",
      "pendant",
      "le",
      "week-end",
      "?"
    ],
    "fullSentence": "Monsieur vous vous êtes bien reposé pendant le week-end ?",
    "distractors": [
      {
        "word": "reposés",
        "trap": "polite_plural_trap",
        "tip": "Singular Trap: \"Monsieur\" is ONE person addressed politely! Do NOT add plural +s to the participle!"
      },
      {
        "word": "avez reposé",
        "trap": "auxiliary_error",
        "tip": "Auxiliary Error: Reflexive \"se reposer\" uses ÊTRE (vous vous êtes), not AVOIR!"
      }
    ],
    "purpose": "⚠️ Politeness Nuance: Polite \"Vous\" to one man has NO plural +s!",
    "purposeNote": "Critical Nuance: When \"vous\" is used for formal politeness to a single person (Monsieur), the participle agrees with that ONE person: \"reposé\" (no +s)!",
    "rule": "Polite \"vous\" to a single person takes singular agreement (reposé for male, reposée for female, NO plural +s).",
    "nextPreview": "Chain Complete! You have mastered all 6 subject variations and agreements.",
    "chain": "refl_subject_shifts",
    "chainTitle": "🔄 Verbes Réflexifs: Subject Shift & Agreement Spectrum (Je ➜ Elle ➜ Nous ➜ Elles ➜ Tu ➜ Vous)",
    "chainStep": 6,
    "chainTotal": 6,
    "chainType": "subject_shift"
  },
  {
    "id": "refl_trap_base_accord",
    "topic": "reflexive",
    "structureId": "reflexive",
    "topicLabel": "Accord Réflexif Normal · Pronom COD",
    "scene": "shower",
    "english": "She washed herself thoroughly.",
    "targetWords": [
      "Elle",
      "s’est",
      "lavée",
      "soigneusement"
    ],
    "fullSentence": "Elle s’est lavée soigneusement.",
    "distractors": [
      {
        "word": "lavé",
        "trap": "missing_agreement",
        "tip": "Agreement Error: \"se\" is the direct object (she washed herself), so it agrees with Elle (+e = lavée)!"
      },
      {
        "word": "a lavé",
        "trap": "auxiliary_error",
        "tip": "Auxiliary Error: Reflexive verbs always take ÊTRE!"
      }
    ],
    "purpose": "🌱 Base Rule: Reflexive pronoun \"se\" is COD ➜ agrees with Elle (+e)",
    "purposeNote": "Starting the Agreement Trap Chain: Here, WHO is being washed? \"Herself\" (se). The reflexive pronoun is the direct object placed before, so \"lavée\" agrees (+e).",
    "rule": "When the reflexive pronoun is the direct object, the participle agrees with the subject: \"Elle s’est lavée\".",
    "nextPreview": "Next card: What happens when she washes a specific body part (les mains)?",
    "chain": "refl_body_part_traps",
    "chainTitle": "⚠️ Verbes Réflexifs: Le Piège Majeur de l’Accord (Parties du Corps & COD placé Après)",
    "chainStep": 1,
    "chainTotal": 4,
    "chainType": "rule_trap"
  },
  {
    "id": "refl_trap_mains_no_accord",
    "topic": "reflexive",
    "structureId": "reflexive",
    "topicLabel": "Piège de l’Accord · Partie du Corps Après (Pas d’accord)",
    "scene": "brush",
    "english": "She washed her hands before dinner.",
    "targetWords": [
      "Elle",
      "s’est",
      "lavé",
      "les",
      "mains",
      "avant",
      "le",
      "dîner"
    ],
    "fullSentence": "Elle s’est lavé les mains avant le dîner.",
    "distractors": [
      {
        "word": "lavée",
        "trap": "false_agreement",
        "tip": "Classic French Trap: \"les mains\" is a direct object placed AFTER the verb! The participle \"lavé\" does NOT agree with Elle!"
      },
      {
        "word": "ses mains",
        "trap": "possessive_trap",
        "tip": "Body Part Trap: In French with reflexive verbs, say \"les mains\", never \"ses mains\"!"
      }
    ],
    "purpose": "⚠️ Master Trap: Direct object placed AFTER the verb ➜ NO agreement!",
    "purposeNote": "Shocking Contrast with Card 1: In Card 1, \"Elle s’est lavée\" had +e. But here, WHAT is she washing? \"Les mains\" (direct object placed AFTER)! Therefore, \"lavé\" does NOT agree with Elle!",
    "rule": "If the direct object (COD) is placed AFTER the reflexive verb, there is NO agreement: \"Elle s’est lavé les mains\" (never lavée).",
    "nextPreview": "Next card: Plural subject with brushing teeth—does \"brossé\" take +s?",
    "chain": "refl_body_part_traps",
    "chainTitle": "⚠️ Verbes Réflexifs: Le Piège Majeur de l’Accord (Parties du Corps & COD placé Après)",
    "chainStep": 2,
    "chainTotal": 4,
    "chainType": "rule_trap"
  },
  {
    "id": "refl_trap_dents_plur_no_accord",
    "topic": "reflexive",
    "structureId": "reflexive",
    "topicLabel": "Piège de l’Accord · Brosser les Dents (Pas de s)",
    "scene": "brush",
    "english": "They brushed their teeth before going to sleep.",
    "targetWords": [
      "Ils",
      "se",
      "sont",
      "brossé",
      "les",
      "dents",
      "avant",
      "de",
      "dormir"
    ],
    "fullSentence": "Ils se sont brossé les dents avant de dormir.",
    "distractors": [
      {
        "word": "brossés",
        "trap": "false_agreement",
        "tip": "Trap: Even though \"Ils\" is plural, \"les dents\" is a COD placed AFTER the verb, so \"brossé\" takes NO +s!"
      },
      {
        "word": "ont brossé",
        "trap": "auxiliary_error",
        "tip": "Auxiliary Error: Reflexive \"se brosser\" requires ÊTRE (se sont), not AVOIR!"
      }
    ],
    "purpose": "⚠️ Plural Trap: Plural subject but body part after ➜ NO +s on participle!",
    "purposeNote": "Look at this: Even though \"Ils\" is plural masculine, because \"les dents\" is placed after the verb, the participle is \"brossé\" (NO +s)!",
    "rule": "\"Ils se sont brossé les dents\": COD is \"les dents\" placed after, so no plural agreement on the participle.",
    "nextPreview": "Next card: Reciprocal verb with \"à\" (se téléphoner)—why is there no agreement?",
    "chain": "refl_body_part_traps",
    "chainTitle": "⚠️ Verbes Réflexifs: Le Piège Majeur de l’Accord (Parties du Corps & COD placé Après)",
    "chainStep": 3,
    "chainTotal": 4,
    "chainType": "rule_trap"
  },
  {
    "id": "refl_trap_telephoner_coi",
    "topic": "reflexive",
    "structureId": "reflexive",
    "topicLabel": "Verbe Réciprocité COI · Téléphoner à (Invariable)",
    "scene": "cinema",
    "english": "They called each other yesterday evening. (two women)",
    "targetWords": [
      "Elles",
      "se",
      "sont",
      "téléphoné",
      "hier",
      "soir"
    ],
    "fullSentence": "Elles se sont téléphoné hier soir.",
    "distractors": [
      {
        "word": "téléphonées",
        "trap": "coi_agreement_trap",
        "tip": "COI Trap: One says \"téléphoner À quelqu’un\" (indirect object)! Because \"se\" is indirect (COI), \"téléphoné\" NEVER agrees!"
      },
      {
        "word": "ont téléphoné",
        "trap": "auxiliary_error",
        "tip": "Auxiliary Error: Reciprocal actions take ÊTRE (se sont)!"
      }
    ],
    "purpose": "⚠️ Indirect Reciprocal Trap: Verbs taking \"à\" (COI) have NO agreement!",
    "purposeNote": "In French, you say \"téléphoner À quelqu’un\" (COI). Since \"se\" is an indirect object, the participle NEVER agrees, even with \"Elles\": \"téléphoné\" (no +es)!",
    "rule": "Verbs that take indirect objects with \"à\" (se téléphoner, se parler, se sourire) never agree in the past participle: \"Elles se sont téléphoné\".",
    "nextPreview": "Chain Complete! You have mastered the most sophisticated agreement traps in French.",
    "chain": "refl_body_part_traps",
    "chainTitle": "⚠️ Verbes Réflexifs: Le Piège Majeur de l’Accord (Parties du Corps & COD placé Après)",
    "chainStep": 4,
    "chainTotal": 4,
    "chainType": "rule_trap"
  },
  {
    "id": "cod_direct_passeport",
    "topic": "cod_coi",
    "structureId": "cod_coi",
    "topicLabel": "Pronom COD · Objet Direct (le)",
    "scene": "train-station",
    "english": "My passport? I am taking it with me.",
    "targetWords": [
      "Mon",
      "passeport",
      "?",
      "Je",
      "le",
      "prends",
      "avec",
      "moi"
    ],
    "fullSentence": "Mon passeport ? Je le prends avec moi.",
    "distractors": [
      {
        "word": "lui",
        "trap": "coi_for_cod",
        "tip": "Pronoun Error: \"Mon passeport\" is a direct object (COD). Use \"le\", not indirect \"lui\"!"
      },
      {
        "word": "prends le",
        "trap": "word_order",
        "tip": "Word Order: In French affirmative sentences, object pronouns go BEFORE the conjugated verb: \"Je le prends\"!"
      }
    ],
    "purpose": "🎯 Direct Object (COD): Replacing a masculine noun with \"le\"",
    "purposeNote": "Starting COD vs COI Chain: \"Prendre\" takes a direct object without preposition (\"prendre quelque chose\"). Therefore, \"mon passeport\" is replaced by COD \"le\" placed before the verb.",
    "rule": "COD pronouns (le, la, l’, les) replace direct objects and go directly before the conjugated verb.",
    "nextPreview": "Next card: Contrast with an indirect object requiring \"à\" (COI lui)!",
    "chain": "cod_vs_coi_pronouns",
    "chainTitle": "🎯 Pronoms Personnels: COD Direct (le/la/les) vs COI Indirect (lui/leur) & Accords",
    "chainStep": 1,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "coi_indirect_soeur",
    "topic": "cod_coi",
    "structureId": "cod_coi",
    "topicLabel": "Pronom COI · Objet Indirect (lui)",
    "scene": "cinema",
    "english": "My sister? I call her every Sunday.",
    "targetWords": [
      "Ma",
      "sœur",
      "?",
      "Je",
      "lui",
      "téléphone",
      "tous",
      "les",
      "dimanches"
    ],
    "fullSentence": "Ma sœur ? Je lui téléphone tous les dimanches.",
    "distractors": [
      {
        "word": "la",
        "trap": "cod_for_coi",
        "tip": "Pronoun Error: One says \"téléphoner À quelqu’un\" (indirect object)! Use COI \"lui\", never COD \"la\"!"
      },
      {
        "word": "à elle",
        "trap": "disjunctive_trap",
        "tip": "Syntax Tip: French replaces \"à ma sœur\" with the clitic pronoun \"lui\" before the verb, not \"à elle\" after!"
      }
    ],
    "purpose": "⚖️ Indirect Object (COI): Verbs with \"à\" replace person with \"lui\"",
    "purposeNote": "Contrast with Card 1: In Card 1, \"prendre\" had no preposition (COD le). But \"téléphoner\" requires \"À\" (téléphoner à ma sœur). Therefore, use indirect COI \"lui\" (for both him AND her)!",
    "rule": "COI pronouns (lui for singular, leur for plural) replace \"à + personne\": \"Je lui téléphone\". \"Lui\" is used for both male and female.",
    "nextPreview": "Next card: Passé Composé with preceding COD—the famous participle agreement!",
    "chain": "cod_vs_coi_pronouns",
    "chainTitle": "🎯 Pronoms Personnels: COD Direct (le/la/les) vs COI Indirect (lui/leur) & Accords",
    "chainStep": 2,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "cod_passe_accord_photos",
    "topic": "cod_coi",
    "structureId": "cod_coi",
    "topicLabel": "Accord COD Précédent · Passé Composé (AVOIR)",
    "scene": "museum-visit",
    "english": "These photos? I took them during the vacation.",
    "targetWords": [
      "Ces",
      "photos",
      "?",
      "Je",
      "les",
      "ai",
      "prises",
      "pendant",
      "les",
      "vacances"
    ],
    "fullSentence": "Ces photos ? Je les ai prises pendant les vacances.",
    "distractors": [
      {
        "word": "pris",
        "trap": "missing_cod_agreement",
        "tip": "Agreement Error: \"les\" (ces photos = feminine plural) is placed BEFORE \"ai pris\"! With AVOIR, the participle agrees with a preceding COD (+es = prises)!"
      },
      {
        "word": "leur",
        "trap": "pronoun_choice",
        "tip": "Pronoun Error: \"photos\" is a direct object (COD). Use \"les\", not \"leur\"!"
      }
    ],
    "purpose": "⚠️ Preceding COD Agreement: \"Les\" placed before Avoir demands agreement!",
    "purposeNote": "Essential French Rule: When a direct object pronoun (les photos, fem pl) precedes the auxiliary AVOIR, the past participle MUST agree: \"prises\" (+es)!",
    "rule": "With AVOIR, if a direct object (COD) is placed BEFORE the verb (le, la, les, que), the participle agrees with it: \"Je les ai prises\".",
    "nextPreview": "Next card: What about COI in Passé Composé? Does \"leur\" trigger agreement?",
    "chain": "cod_vs_coi_pronouns",
    "chainTitle": "🎯 Pronoms Personnels: COD Direct (le/la/les) vs COI Indirect (lui/leur) & Accords",
    "chainStep": 3,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "coi_passe_no_accord_parents",
    "topic": "cod_coi",
    "structureId": "cod_coi",
    "topicLabel": "COI au Passé Composé · Pas d’accord avec AVOIR",
    "scene": "bistro-payment",
    "english": "My parents? I spoke to them yesterday evening.",
    "targetWords": [
      "Mes",
      "parents",
      "?",
      "Je",
      "leur",
      "ai",
      "parlé",
      "hier",
      "soir"
    ],
    "fullSentence": "Mes parents ? Je leur ai parlé hier soir.",
    "distractors": [
      {
        "word": "parlés",
        "trap": "false_coi_agreement",
        "tip": "COI Agreement Trap: Indirect object pronouns (leur) NEVER trigger agreement with AVOIR! It is \"ai parlé\", not \"ai parlés\"!"
      },
      {
        "word": "les",
        "trap": "cod_for_coi",
        "tip": "Pronoun Error: \"parler À quelqu’un\" takes indirect COI \"leur\", not direct \"les\"!"
      }
    ],
    "purpose": "⚖️ COI Contrast: \"Leur\" NEVER triggers agreement with AVOIR!",
    "purposeNote": "Contrast with Card 3: In Card 3, COD \"les\" triggered agreement (prises). But \"leur\" is an INDIRECT object pronoun (parler à). COI NEVER triggers agreement: \"ai parlé\" (no +s)!",
    "rule": "COI pronouns (lui, leur) NEVER trigger agreement on the past participle with AVOIR: \"Je leur ai parlé\".",
    "nextPreview": "Chain Complete! You have mastered COD vs COI pronouns and participle agreement.",
    "chain": "cod_vs_coi_pronouns",
    "chainTitle": "🎯 Pronoms Personnels: COD Direct (le/la/les) vs COI Indirect (lui/leur) & Accords",
    "chainStep": 4,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "savoir_infinitif_cuisiner",
    "topic": "connaitre_savoir",
    "structureId": "connaitre_savoir",
    "topicLabel": "Savoir + Infinitif · Compétence / Savoir-faire",
    "scene": "bakery-croissant",
    "english": "I know how to cook delicious crêpes.",
    "targetWords": [
      "Je",
      "sais",
      "cuisiner",
      "de",
      "délicieuses",
      "crêpes"
    ],
    "fullSentence": "Je sais cuisiner de délicieuses crêpes.",
    "distractors": [
      {
        "word": "connais",
        "trap": "connaitre_with_verb",
        "tip": "Verb Error: \"Connaître\" is NEVER followed by a verb or infinitive! Use \"Savoir\" for skills and knowledge of doing!"
      },
      {
        "word": "sais de",
        "trap": "preposition_error",
        "tip": "Preposition Error: \"Savoir\" is directly followed by the infinitive without \"de\": \"Je sais cuisiner\"!"
      }
    ],
    "purpose": "🎯 Savoir + Infinitif: Expressing skills and knowing how to do something",
    "purposeNote": "Starting Savoir vs Connaître Chain: When followed by an infinitive verb (know HOW to do something), French exclusively uses \"SAVOIR\". \"Connaître\" is never followed by a verb!",
    "rule": "Use \"savoir + infinitif\" to express knowing how to do an action (skills, abilities).",
    "nextPreview": "Next card: How do you express familiarity with a place or recipe (using a noun)?",
    "chain": "savoir_vs_connaitre",
    "chainTitle": "💡 Savoir vs Connaître: Savoir-faire & Faits vs Familiarité avec Personnes & Lieux",
    "chainStep": 1,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "connaitre_nom_recette",
    "topic": "connaitre_savoir",
    "structureId": "connaitre_savoir",
    "topicLabel": "Connaître + Nom · Familiarité",
    "scene": "bakery-croissant",
    "english": "I know a very good traditional recipe.",
    "targetWords": [
      "Je",
      "connais",
      "une",
      "très",
      "bonne",
      "recette",
      "traditionnelle"
    ],
    "fullSentence": "Je connais une très bonne recette traditionnelle.",
    "distractors": [
      {
        "word": "sais",
        "trap": "savoir_with_noun",
        "tip": "Noun Error: For familiarity with a person, place, or thing (+ noun), use \"Connaître\", not \"Savoir\"!"
      },
      {
        "word": "sais une",
        "trap": "savoir_with_noun",
        "tip": "Usage Trap: \"Savoir\" cannot be directly followed by a noun phrase like \"une recette\"!"
      }
    ],
    "purpose": "⚖️ Connaître + Nom: Expressing familiarity with a noun (person, place, thing)",
    "purposeNote": "Contrast with Card 1: In Card 1, it was followed by a verb (cuisiner ➜ savoir). Here, it is followed by a NOUN (une recette). Familiarity with a noun demands \"CONNAÎTRE\"!",
    "rule": "Use \"connaître + nom\" to express familiarity or acquaintance with a person, place, or thing.",
    "nextPreview": "Next card: Knowing a factual clause with \"où\", \"que\", or \"quand\"—which verb applies?",
    "chain": "savoir_vs_connaitre",
    "chainTitle": "💡 Savoir vs Connaître: Savoir-faire & Faits vs Familiarité avec Personnes & Lieux",
    "chainStep": 2,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "savoir_clause_gare",
    "topic": "connaitre_savoir",
    "structureId": "connaitre_savoir",
    "topicLabel": "Savoir + Proposition · Information / Fait",
    "scene": "train-station",
    "english": "Do you know where the train station is located?",
    "targetWords": [
      "Tu",
      "sais",
      "où",
      "se",
      "trouve",
      "la",
      "gare",
      "?"
    ],
    "fullSentence": "Tu sais où se trouve la gare ?",
    "distractors": [
      {
        "word": "connais",
        "trap": "connaitre_with_clause",
        "tip": "Clause Error: \"Connaître\" cannot introduce a subclause (où, que, si, quand)! Use \"Savoir\" for factual information!"
      },
      {
        "word": "sais que",
        "trap": "redundancy",
        "tip": "Syntax Error: \"où\" already introduces the question clause, do not add \"que\"!"
      }
    ],
    "purpose": "🎯 Savoir + Fait: Knowing factual information introduced by où / que / quand",
    "purposeNote": "Contrast: Whenever a clause is introduced by a question word (où, quand, comment, qui, si, que), the verb is ALWAYS \"SAVOIR\"!",
    "rule": "Use \"savoir + où / quand / que / si / comment\" to express knowledge of facts and information.",
    "nextPreview": "Next card: Knowing a specific person (neighbor, doctor, colleague)—which verb?",
    "chain": "savoir_vs_connaitre",
    "chainTitle": "💡 Savoir vs Connaître: Savoir-faire & Faits vs Familiarité avec Personnes & Lieux",
    "chainStep": 3,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "connaitre_personne_voisin",
    "topic": "connaitre_savoir",
    "structureId": "connaitre_savoir",
    "topicLabel": "Connaître + Personne · Être familier avec",
    "scene": "apartment-living",
    "english": "Do you know the new neighbor on the second floor?",
    "targetWords": [
      "Tu",
      "connais",
      "le",
      "nouveau",
      "voisin",
      "du",
      "deuxième",
      "étage",
      "?"
    ],
    "fullSentence": "Tu connais le nouveau voisin du deuxième étage ?",
    "distractors": [
      {
        "word": "sais",
        "trap": "savoir_with_person",
        "tip": "Human Object Trap: You can NEVER \"savoir\" a person! Knowing a human being is always \"CONNAÎTRE\"!"
      },
      {
        "word": "de le",
        "trap": "contraction_trap",
        "tip": "Contraction Trap: \"de + le\" must contract to \"du deuxième étage\"!"
      }
    ],
    "purpose": "⚖️ Connaître + Personne: People are ALWAYS \"connus\", never \"sus\"!",
    "purposeNote": "Master Rule: You can NEVER use \"savoir\" with a person. Knowing someone personally is 100% \"CONNAÎTRE\"!",
    "rule": "Always use \"connaître\" when talking about knowing or being acquainted with people.",
    "nextPreview": "Chain Complete! You have mastered the Savoir vs Connaître distinction.",
    "chain": "savoir_vs_connaitre",
    "chainTitle": "💡 Savoir vs Connaître: Savoir-faire & Faits vs Familiarité avec Personnes & Lieux",
    "chainStep": 4,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "temps_avant_de_partir",
    "topic": "sequence",
    "structureId": "sequence",
    "topicLabel": "Chronologie · Avant de + Infinitif",
    "scene": "walk",
    "english": "Turn off the lights before leaving the house.",
    "targetWords": [
      "Éteignez",
      "la",
      "lumière",
      "avant",
      "de",
      "partir",
      "de",
      "la",
      "maison"
    ],
    "fullSentence": "Éteignez la lumière avant de partir de la maison.",
    "distractors": [
      {
        "word": "avant que",
        "trap": "subjunctive_trap",
        "tip": "Clause Error: When the subject is the same, use \"avant de + infinitif\", not \"avant que\"!"
      },
      {
        "word": "après de",
        "trap": "syntax_error",
        "tip": "Syntax Error: In French, \"après\" is followed by a compound infinitive (après être parti), never \"après de\"!"
      }
    ],
    "purpose": "🎯 Preceding Action: \"Avant de + infinitif\" before an action",
    "purposeNote": "Starting Chronology Chain: In French, to say \"before doing something\", use \"avant de + infinitif\". Never forget the preposition \"de\"!",
    "rule": "Use \"avant de + infinitif\" to express an action that happens beforehand.",
    "nextPreview": "Next card: How to express an action that started in the past and is STILL continuing right now?",
    "chain": "temps_chronologie",
    "chainTitle": "⏱️ Temps & Chronologie: Avant de (Infinitif) vs Depuis (Présent) vs Pendant (Passé) vs Il y a (Passé Révolu)",
    "chainStep": 1,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "temps_depuis_present",
    "topic": "sequence",
    "structureId": "sequence",
    "topicLabel": "Durée Continue · Depuis + Présent",
    "scene": "apartment-living",
    "english": "I have been living in this apartment for three years.",
    "targetWords": [
      "J’habite",
      "dans",
      "cet",
      "appartement",
      "depuis",
      "trois",
      "ans"
    ],
    "fullSentence": "J’habite dans cet appartement depuis trois ans.",
    "distractors": [
      {
        "word": "pour",
        "trap": "anglicism_pour",
        "tip": "Anglicism Error: Never translate English \"for\" as \"pour\" for duration! For an ongoing state, use \"depuis\" + présent!"
      },
      {
        "word": "pendant",
        "trap": "completed_duration",
        "tip": "Aspect Error: \"Pendant\" implies the duration is finished! For an action STILL happening now, use \"depuis\" + présent!"
      }
    ],
    "purpose": "⚖️ Ongoing Duration: \"Depuis + Présent\" (still happening now)",
    "purposeNote": "Contrast with Card 1: In French, when an action began in the past and continues in the present, use the PRESENT tense + \"depuis\" (NOT the past tense, NOT \"pour\")!",
    "rule": "Use \"depuis + présent\" for an action that started in the past and continues in the present: \"J’habite ici depuis 3 ans\".",
    "nextPreview": "Next card: What if the stay is completely finished in the past? Which word replaces \"depuis\"?",
    "chain": "temps_chronologie",
    "chainTitle": "⏱️ Temps & Chronologie: Avant de (Infinitif) vs Depuis (Présent) vs Pendant (Passé) vs Il y a (Passé Révolu)",
    "chainStep": 2,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "temps_pendant_passe",
    "topic": "sequence",
    "structureId": "sequence",
    "topicLabel": "Durée Achevée · Pendant + Passé Composé",
    "scene": "train-station",
    "english": "I lived in Lyon for two years. (finished past)",
    "targetWords": [
      "J’ai",
      "habité",
      "à",
      "Lyon",
      "pendant",
      "deux",
      "ans"
    ],
    "fullSentence": "J’ai habité à Lyon pendant deux ans.",
    "distractors": [
      {
        "word": "depuis",
        "trap": "ongoing_trap",
        "tip": "Aspect Error: \"Depuis\" means you still live in Lyon today! If you left Lyon, use \"pendant\" + passé composé!"
      },
      {
        "word": "pour",
        "trap": "anglicism_pour",
        "tip": "Anglicism Error: Never use \"pour\" for past duration!"
      }
    ],
    "purpose": "⚖️ Completed Duration: \"Pendant + Passé Composé\" (finished block of time)",
    "purposeNote": "Contrast with Card 2: In Card 2, you STILL live there (\"J’habite depuis\"). Here, you NO LONGER live in Lyon (finished action). Therefore, use Passé Composé + \"pendant\"!",
    "rule": "Use \"pendant + passé composé\" for an action with a defined start and end that is now finished.",
    "nextPreview": "Next card: Expressing a completed moment in the past (\"six months ago\") using \"Il y a\"!",
    "chain": "temps_chronologie",
    "chainTitle": "⏱️ Temps & Chronologie: Avant de (Infinitif) vs Depuis (Présent) vs Pendant (Passé) vs Il y a (Passé Révolu)",
    "chainStep": 3,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "temps_ilya_ago",
    "topic": "sequence",
    "structureId": "sequence",
    "topicLabel": "Moment Passé Révolu · Il y a + Durée",
    "scene": "walk",
    "english": "I arrived in Canada six months ago.",
    "targetWords": [
      "Je",
      "suis",
      "arrivé",
      "au",
      "Canada",
      "il",
      "y",
      "a",
      "six",
      "mois"
    ],
    "fullSentence": "Je suis arrivé au Canada il y a six mois.",
    "distractors": [
      {
        "word": "depuis",
        "trap": "syntax_error",
        "tip": "Meaning Error: \"Depuis six mois\" would mean the action of arriving took 6 continuous months! For \"ago\", use \"il y a\"!"
      },
      {
        "word": "avant",
        "trap": "anglicism",
        "tip": "Anglicism Error: French does not say \"six mois avant\" for \"six months ago\". Use \"il y a six mois\"!"
      }
    ],
    "purpose": "🎯 Past Time Anchor: \"Il y a + durée\" for English \"ago\"",
    "purposeNote": "Contrast with Cards 2 & 3: To translate \"ago\" (a point in past time relative to now), use \"il y a + durée\" with the passé composé: \"Je suis arrivé il y a six mois\".",
    "rule": "Use \"il y a + durée\" with a past tense to say \"ago\": \"Je suis arrivé il y a six mois\".",
    "nextPreview": "Chain Complete! You have mastered the entire French time preposition system.",
    "chain": "temps_chronologie",
    "chainTitle": "⏱️ Temps & Chronologie: Avant de (Infinitif) vs Depuis (Présent) vs Pendant (Passé) vs Il y a (Passé Révolu)",
    "chainStep": 4,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "tense_passe_recent_cafe",
    "topic": "sequence",
    "structureId": "sequence",
    "topicLabel": "Passé Récent · Venir de + Infinitif",
    "scene": "coffee",
    "english": "I have just finished my breakfast.",
    "targetWords": [
      "Je",
      "viens",
      "de",
      "terminer",
      "mon",
      "petit-déjeuner"
    ],
    "fullSentence": "Je viens de terminer mon petit-déjeuner.",
    "distractors": [
      {
        "word": "vais",
        "trap": "future_trap",
        "tip": "Tense Flip: \"Je vais terminer\" is Futur Proche (about to do)! For an action just completed, use \"Je viens de\"!"
      },
      {
        "word": "suis en train",
        "trap": "continuous_trap",
        "tip": "Aspect Error: \"Être en train de\" means you are eating right now! For just finished, use \"venir de\"!"
      }
    ],
    "purpose": "🎯 Passé Récent: Action just completed a moment ago (Venir de + inf)",
    "purposeNote": "Starting Tenses Triad Chain: When an action occurred just a moment ago (\"just did\"), use \"venir (au présent) + de + infinitif\".",
    "rule": "Passé Récent formula: Sujet + venir (présent) + de + infinitif: \"Je viens de terminer\".",
    "nextPreview": "Next card: Shift to right now in this very moment (Présent Continu)!",
    "chain": "tenses_recent_pres_futur",
    "chainTitle": "⏱️ Les Trois Temps Rapprochés: Passé Récent (Venir de) vs Présent Continu (Être en train de) vs Futur Proche (Aller)",
    "chainStep": 1,
    "chainTotal": 3,
    "chainType": "contrast"
  },
  {
    "id": "tense_pres_continu_cafe",
    "topic": "sequence",
    "structureId": "sequence",
    "topicLabel": "Présent Continu · Être en train de + Infinitif",
    "scene": "coffee",
    "english": "I am in the middle of drinking my hot coffee.",
    "targetWords": [
      "Je",
      "suis",
      "en",
      "train",
      "de",
      "boire",
      "mon",
      "café",
      "chaud"
    ],
    "fullSentence": "Je suis en train de boire mon café chaud.",
    "distractors": [
      {
        "word": "viens de",
        "trap": "recent_trap",
        "tip": "Tense Error: \"Je viens de boire\" means you finished drinking! To emphasize being in the middle of it right now, use \"en train de\"!"
      },
      {
        "word": "vais",
        "trap": "future_trap",
        "tip": "Tense Error: \"Je vais boire\" is future!"
      }
    ],
    "purpose": "⚖️ Présent Continu: Action currently in progress right now (Être en train de)",
    "purposeNote": "Contrast with Card 1: In Card 1, you just finished (\"viens de\"). Here, the cup is at your lips right now. French uses \"être en train de + infinitif\" to emphasize the ongoing process!",
    "rule": "Présent Continu formula: Sujet + être (présent) + en train de + infinitif: \"Je suis en train de boire\".",
    "nextPreview": "Next card: Shift to the immediate future (\"going to do in 10 minutes\")!",
    "chain": "tenses_recent_pres_futur",
    "chainTitle": "⏱️ Les Trois Temps Rapprochés: Passé Récent (Venir de) vs Présent Continu (Être en train de) vs Futur Proche (Aller)",
    "chainStep": 2,
    "chainTotal": 3,
    "chainType": "contrast"
  },
  {
    "id": "tense_futur_proche_metro",
    "topic": "sequence",
    "structureId": "sequence",
    "topicLabel": "Futur Proche · Aller + Infinitif",
    "scene": "metro-ticket",
    "english": "I am going to take the subway in ten minutes.",
    "targetWords": [
      "Je",
      "vais",
      "prendre",
      "le",
      "métro",
      "dans",
      "dix",
      "minutes"
    ],
    "fullSentence": "Je vais prendre le métro dans dix minutes.",
    "distractors": [
      {
        "word": "viens de",
        "trap": "recent_trap",
        "tip": "Tense Error: \"Je viens de prendre\" means you already took it! For upcoming future, use \"Je vais prendre\"!"
      },
      {
        "word": "suis en train",
        "trap": "continuous_trap",
        "tip": "Aspect Error: You haven’t boarded yet! Use Futur Proche \"vais prendre\"!"
      }
    ],
    "purpose": "⚖️ Futur Proche: Imminent future action (Aller + inf)",
    "purposeNote": "Contrast with Cards 1 & 2: You just completed (viens de) ➜ you are doing now (en train de) ➜ you are about to do (vais + infinitif)!",
    "rule": "Futur Proche formula: Sujet + aller (présent) + infinitif: \"Je vais prendre le métro\".",
    "nextPreview": "Chain Complete! You have mastered the 3 near-time aspects of French grammar.",
    "chain": "tenses_recent_pres_futur",
    "chainTitle": "⏱️ Les Trois Temps Rapprochés: Passé Récent (Venir de) vs Présent Continu (Être en train de) vs Futur Proche (Aller)",
    "chainStep": 3,
    "chainTotal": 3,
    "chainType": "contrast"
  },
  {
    "id": "repairs_locataire_joint",
    "topic": "repairs",
    "structureId": "repairs",
    "topicLabel": "Logement · Obligation du Locataire (Entretien)",
    "scene": "plumber-repair",
    "english": "The tenant must replace the leaking gasket.",
    "targetWords": [
      "Le",
      "locataire",
      "doit",
      "remplacer",
      "le",
      "joint",
      "qui",
      "fuit"
    ],
    "fullSentence": "Le locataire doit remplacer le joint qui fuit.",
    "distractors": [
      {
        "word": "propriétaire",
        "trap": "responsibility_trap",
        "tip": "Responsibility Trap (A1.3 PDF): Replacing worn gaskets and minor seals is the tenant’s duty (locataire), not the owner’s!"
      },
      {
        "word": "remplace",
        "trap": "syntax_error",
        "tip": "Verb Error: After modal \"doit\", the following verb must be in the infinitive (remplacer)!"
      }
    ],
    "purpose": "🎯 Tenant Duty: Routine minor maintenance (joint, ampoule, poignée)",
    "purposeNote": "Starting Housing Chain (from your A1.3 PDF): In French rental law, minor wear-and-tear maintenance (changing a leaky gasket, clearing a sink trap) is the responsibility of the tenant (\"locataire\").",
    "rule": "The tenant (locataire) is legally responsible for routine maintenance (remplacer le joint, détartrer, petites réparations).",
    "nextPreview": "Next card: Contrast with major structural breakdowns—who pays?",
    "chain": "logement_reparations",
    "chainTitle": "🔧 Logement & Réparations: Obligations du Locataire vs Propriétaire & Fuites d’Eau (A1.3 PDF)",
    "chainStep": 1,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "repairs_proprietaire_chaudiere",
    "topic": "repairs",
    "structureId": "repairs",
    "topicLabel": "Logement · Obligation du Propriétaire (Gros travaux)",
    "scene": "plumber-repair",
    "english": "The landlord must replace the broken boiler.",
    "targetWords": [
      "Le",
      "propriétaire",
      "doit",
      "remplacer",
      "la",
      "chaudière",
      "en",
      "panne"
    ],
    "fullSentence": "Le propriétaire doit remplacer la chaudière en panne.",
    "distractors": [
      {
        "word": "locataire",
        "trap": "responsibility_trap",
        "tip": "Responsibility Trap (A1.3 PDF): Replacing obsolete heating equipment or heavy appliances is strictly the landlord’s duty (propriétaire)!"
      },
      {
        "word": "change",
        "trap": "syntax_error",
        "tip": "Verb Error: Modal \"doit\" takes the infinitive (remplacer)!"
      }
    ],
    "purpose": "⚖️ Landlord Duty: Major repairs & replacement of equipment (chaudière, toiture)",
    "purposeNote": "Contrast with Card 1: In Card 1, the tenant fixed a small gasket. Here, the entire boiler is broken (heavy heating equipment). This is legally paid by the landlord (\"propriétaire\")!",
    "rule": "The landlord (propriétaire) is legally responsible for major replacements and structural repairs (chaudière, toiture, canalisations vétustes).",
    "nextPreview": "Next card: Practical emergency vocabulary—reporting a leak under the sink!",
    "chain": "logement_reparations",
    "chainTitle": "🔧 Logement & Réparations: Obligations du Locataire vs Propriétaire & Fuites d’Eau (A1.3 PDF)",
    "chainStep": 2,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "repairs_fuite_evier",
    "topic": "repairs",
    "structureId": "repairs",
    "topicLabel": "Logement · Déclarer un Sinistre (Fuite d’eau)",
    "scene": "plumber-repair",
    "english": "I have a water leak under the kitchen sink.",
    "targetWords": [
      "J’ai",
      "une",
      "fuite",
      "d’eau",
      "sous",
      "l’évier",
      "de",
      "la",
      "cuisine"
    ],
    "fullSentence": "J’ai une fuite d’eau sous l’évier de la cuisine.",
    "distractors": [
      {
        "word": "un fuite",
        "trap": "gender_error",
        "tip": "Gender Error: \"fuite\" is feminine: \"une fuite d’eau\"!"
      },
      {
        "word": "sur",
        "trap": "preposition_error",
        "tip": "Preposition Error: A leak under the sink is \"sous l’évier\", not \"sur\"!"
      }
    ],
    "purpose": "🔧 Problem Diagnosis: Describing a water leak (fuite d’eau)",
    "purposeNote": "Essential emergency phrase from A1.3 PDF: \"une fuite d’eau sous l’évier\". Notice \"fuite\" is feminine and elides to \"d’eau\".",
    "rule": "Use \"avoir une fuite d’eau + lieu\" to report a plumbing emergency.",
    "nextPreview": "Next card: Immediate precautionary action—shutting off the main water valve!",
    "chain": "logement_reparations",
    "chainTitle": "🔧 Logement & Réparations: Obligations du Locataire vs Propriétaire & Fuites d’Eau (A1.3 PDF)",
    "chainStep": 3,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "repairs_couper_eau_urgence",
    "topic": "repairs",
    "structureId": "repairs",
    "topicLabel": "Logement · Mesure d’Urgence (Couper l’eau)",
    "scene": "plumber-repair",
    "english": "You must shut off the water immediately before the plumber arrives.",
    "targetWords": [
      "Il",
      "faut",
      "couper",
      "l’eau",
      "immédiatement",
      "avant",
      "l’arrivée",
      "du",
      "plombier"
    ],
    "fullSentence": "Il faut couper l’eau immédiatement avant l’arrivée du plombier.",
    "distractors": [
      {
        "word": "coupe",
        "trap": "syntax_error",
        "tip": "Syntax Error: Impersonal \"il faut\" is always followed by an infinitive (couper)!"
      },
      {
        "word": "de le",
        "trap": "contraction_trap",
        "tip": "Contraction Error: \"de + le plombier\" must contract to \"du plombier\"!"
      }
    ],
    "purpose": "🛑 Emergency Protocol: Impersonal obligation \"Il faut couper l’eau\"",
    "purposeNote": "Protocol from A1.3 PDF: In case of a leak, the first reaction is \"couper l’eau\" (shut off the water valve). Combines \"il faut + infinitif\" and \"du plombier\" (de+le contraction).",
    "rule": "Formula: \"Il faut + infinitif\" expresses imperative necessity.",
    "nextPreview": "Chain Complete! You have mastered French apartment repairs and tenant law.",
    "chain": "logement_reparations",
    "chainTitle": "🔧 Logement & Réparations: Obligations du Locataire vs Propriétaire & Fuites d’Eau (A1.3 PDF)",
    "chainStep": 4,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "rules_il_faut_trier",
    "topic": "rules",
    "structureId": "rules",
    "topicLabel": "Règlement · Obligation Impersonnelle (Il faut)",
    "scene": "dishes",
    "english": "You must sort the waste in the trash bins.",
    "targetWords": [
      "Il",
      "faut",
      "trier",
      "les",
      "déchets",
      "dans",
      "les",
      "poubelles"
    ],
    "fullSentence": "Il faut trier les déchets dans les poubelles.",
    "distractors": [
      {
        "word": "trie",
        "trap": "syntax_error",
        "tip": "Syntax Error: After \"il faut\", use the infinitive (trier)!"
      },
      {
        "word": "doit",
        "trap": "subject_mismatch",
        "tip": "Impersonal Error: Impersonal formula is \"Il faut\", not \"Il doit\" for building rules!"
      }
    ],
    "purpose": "🎯 General Rule: Expressing general civic obligation with \"Il faut + inf\"",
    "purposeNote": "Starting Rules Chain (A1.3 PDF): In residential buildings, community rules and garbage sorting use impersonal \"Il faut + infinitif\".",
    "rule": "Use \"il faut + infinitif\" to state a general requirement or community rule.",
    "nextPreview": "Next card: Contrast with a strict legal prohibition (smoking or loud noise)!",
    "chain": "rules_obligation_interdiction",
    "chainTitle": "📋 Règles & Règlements: Obligation (Il faut) vs Interdiction Stricte (Interdit de) vs Politesse (Prière de)",
    "chainStep": 1,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "rules_interdit_fumer",
    "topic": "rules",
    "structureId": "rules",
    "topicLabel": "Règlement · Interdiction Stricte (Interdit de)",
    "scene": "apartment-living",
    "english": "It is strictly forbidden to smoke in the building.",
    "targetWords": [
      "Il",
      "est",
      "strictement",
      "interdit",
      "de",
      "fumer",
      "dans",
      "l’immeuble"
    ],
    "fullSentence": "Il est strictement interdit de fumer dans l’immeuble.",
    "distractors": [
      {
        "word": "à fumer",
        "trap": "preposition_error",
        "tip": "Preposition Error: The formula is \"Il est interdit DE + infinitif\", never \"à\"!"
      },
      {
        "word": "faut fumer",
        "trap": "polarity_error",
        "tip": "Meaning Error: \"Il faut\" would mean you HAVE to smoke! Use \"interdit de\"!"
      }
    ],
    "purpose": "⚖️ Strict Prohibition: Legal interdiction with \"Il est interdit de + inf\"",
    "purposeNote": "Contrast with Card 1: In Card 1, it was an obligation (il faut trier). Here, it is a strict legal PROHIBITION: \"Il est interdit de + infinitif\". Always use preposition \"de\"!",
    "rule": "Formula: \"Il est (strictement) interdit de + infinitif\" states a direct prohibition.",
    "nextPreview": "Next card: How to phrase a polite request on a sign (Prière de ne pas...)?",
    "chain": "rules_obligation_interdiction",
    "chainTitle": "📋 Règles & Règlements: Obligation (Il faut) vs Interdiction Stricte (Interdit de) vs Politesse (Prière de)",
    "chainStep": 2,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "rules_priere_de_bruit",
    "topic": "rules",
    "structureId": "rules",
    "topicLabel": "Règlement · Demande Polie Formelle (Prière de)",
    "scene": "bedtime",
    "english": "Please do not make noise in the hallway.",
    "targetWords": [
      "Prière",
      "de",
      "ne",
      "pas",
      "faire",
      "de",
      "bruit",
      "dans",
      "le",
      "couloir"
    ],
    "fullSentence": "Prière de ne pas faire de bruit dans le couloir.",
    "distractors": [
      {
        "word": "pas faire",
        "trap": "missing_ne",
        "tip": "Negation Error: Before an infinitive, \"ne pas\" stays together: \"ne pas faire\"!"
      },
      {
        "word": "du bruit",
        "trap": "partitive_negation",
        "tip": "Partitive Trap: After negative \"ne pas faire de\", partitive \"du\" becomes \"de\"!"
      }
    ],
    "purpose": "⚖️ Formal Politeness: Polite building notice with \"Prière de ne pas + inf\"",
    "purposeNote": "Contrast with Card 2: Instead of harsh \"interdit de\", French notices use courteous \"Prière de ne pas + infinitif\" (Please refrain from). Notice \"ne pas\" stays glued together before the infinitive!",
    "rule": "Use \"Prière de ne pas + infinitif\" for formal polite requests on building signs. Note: \"ne pas\" stays together before an infinitive.",
    "nextPreview": "Next card: Personal duty addressed directly to you with \"Vous devez\"!",
    "chain": "rules_obligation_interdiction",
    "chainTitle": "📋 Règles & Règlements: Obligation (Il faut) vs Interdiction Stricte (Interdit de) vs Politesse (Prière de)",
    "chainStep": 3,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "rules_vous_devez_aerer",
    "topic": "rules",
    "structureId": "rules",
    "topicLabel": "Règlement · Devoir Personnel (Vous devez)",
    "scene": "apartment-living",
    "english": "You must air out the rooms for ten minutes every day.",
    "targetWords": [
      "Vous",
      "devez",
      "aérer",
      "les",
      "pièces",
      "dix",
      "minutes",
      "chaque",
      "jour"
    ],
    "fullSentence": "Vous devez aérer les pièces dix minutes chaque jour.",
    "distractors": [
      {
        "word": "aérez",
        "trap": "syntax_error",
        "tip": "Syntax Error: After conjugated modal \"devez\", the verb must be in the infinitive (aérer)!"
      },
      {
        "word": "devez d’aérer",
        "trap": "unneeded_preposition",
        "tip": "Preposition Error: Modal \"devoir\" connects directly to the infinitive without \"de\"!"
      }
    ],
    "purpose": "🎯 Personal Obligation: Addressed to a tenant with \"devoir + inf\"",
    "purposeNote": "Contrast with Card 1: Impersonal \"il faut\" applies to everyone. Personal \"Vous devez + infinitif\" targets the tenant directly. Never add \"de\" after devoir!",
    "rule": "Use \"Sujet + devoir + infinitif\" for direct personal obligations.",
    "nextPreview": "Chain Complete! You have mastered civic rules and notices in French.",
    "chain": "rules_obligation_interdiction",
    "chainTitle": "📋 Règles & Règlements: Obligation (Il faut) vs Interdiction Stricte (Interdit de) vs Politesse (Prière de)",
    "chainStep": 4,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "prep_fem_france",
    "topic": "prepositions",
    "structureId": "prepositions",
    "topicLabel": "Préposition de Lieu · Pays Féminin (en)",
    "scene": "walk",
    "english": "I have been living in France for one year.",
    "targetWords": [
      "J’habite",
      "en",
      "France",
      "depuis",
      "un",
      "an"
    ],
    "fullSentence": "J’habite en France depuis un an.",
    "distractors": [
      {
        "word": "à la",
        "trap": "country_preposition",
        "tip": "Preposition Error: Feminine countries take \"en\", never \"à la\"!"
      },
      {
        "word": "au",
        "trap": "country_gender",
        "tip": "Gender Error: \"France\" ends in -e and is feminine: use \"en\", not masculine \"au\"!"
      }
    ],
    "purpose": "🎯 Feminine Country: Countries ending in -e take \"en\"",
    "purposeNote": "Starting Prepositions of Place Chain: Countries that end in -e (France, Italie, Espagne, Chine) or start with a vowel (Iran) take preposition \"en\" (without article).",
    "rule": "Use \"en + pays féminin / voyelle\": en France, en Espagne, en Iran.",
    "nextPreview": "Next card: Contrast with masculine countries ending in a consonant (Canada, Japon)!",
    "chain": "prepositions_countries_cities",
    "chainTitle": "📍 Prépositions de Lieu: Pays Féminins (en) vs Masculins (au) vs Pluriels (aux) vs Villes (à)",
    "chainStep": 1,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "prep_masc_canada",
    "topic": "prepositions",
    "structureId": "prepositions",
    "topicLabel": "Préposition de Lieu · Pays Masculin (au)",
    "scene": "walk",
    "english": "I am going to travel to Canada next month.",
    "targetWords": [
      "Je",
      "vais",
      "voyager",
      "au",
      "Canada",
      "le",
      "mois",
      "prochain"
    ],
    "fullSentence": "Je vais voyager au Canada le mois prochain.",
    "distractors": [
      {
        "word": "en",
        "trap": "country_gender",
        "tip": "Gender Error: Canada is masculine (ends in consonant)! Use \"au\" (à+le), not \"en\"!"
      },
      {
        "word": "à",
        "trap": "city_for_country",
        "tip": "Category Error: \"à\" is for cities! For a masculine country, use \"au\"!"
      }
    ],
    "purpose": "⚖️ Masculine Country: Countries ending in a consonant take \"au\" (à+le)",
    "purposeNote": "Contrast with Card 1: In Card 1, \"en France\" (feminine). Here, \"Canada\" is masculine. \"À + le Canada\" contracts to \"AU Canada\"!",
    "rule": "Use \"au + pays masculin\": au Canada, au Japon, au Mexique (exception: ends in -e but masculine).",
    "nextPreview": "Next card: Plural countries like United States or Netherlands—which preposition?",
    "chain": "prepositions_countries_cities",
    "chainTitle": "📍 Prépositions de Lieu: Pays Féminins (en) vs Masculins (au) vs Pluriels (aux) vs Villes (à)",
    "chainStep": 2,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "prep_plur_usa",
    "topic": "prepositions",
    "structureId": "prepositions",
    "topicLabel": "Préposition de Lieu · Pays Pluriel (aux)",
    "scene": "cinema",
    "english": "My cousins live in the United States.",
    "targetWords": [
      "Mes",
      "cousins",
      "vivent",
      "aux",
      "États-Unis"
    ],
    "fullSentence": "Mes cousins vivent aux États-Unis.",
    "distractors": [
      {
        "word": "en",
        "trap": "plural_country_error",
        "tip": "Plural Error: Plural countries take \"aux\" (à+les), never \"en\"!"
      },
      {
        "word": "au",
        "trap": "plural_country_error",
        "tip": "Plural Error: États-Unis is plural: use \"aux\", not singular \"au\"!"
      }
    ],
    "purpose": "⚖️ Plural Country: Plural countries take \"aux\" (à+les)",
    "purposeNote": "Contrast with Cards 1 & 2: Feminine = \"en\", Masculine = \"au\", Plural = \"aux\" (aux États-Unis, aux Pays-Bas).",
    "rule": "Use \"aux + pays pluriel\": aux États-Unis, aux Pays-Bas.",
    "nextPreview": "Next card: Contrast with cities (Paris, Montréal, Lyon)—which preposition?",
    "chain": "prepositions_countries_cities",
    "chainTitle": "📍 Prépositions de Lieu: Pays Féminins (en) vs Masculins (au) vs Pluriels (aux) vs Villes (à)",
    "chainStep": 3,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "prep_city_lyon",
    "topic": "prepositions",
    "structureId": "prepositions",
    "topicLabel": "Préposition de Lieu · Villes (à)",
    "scene": "cafe-terrasse",
    "english": "We are meeting in Lyon this weekend.",
    "targetWords": [
      "Nous",
      "nous",
      "retrouvons",
      "à",
      "Lyon",
      "ce",
      "week-end"
    ],
    "fullSentence": "Nous nous retrouvons à Lyon ce week-end.",
    "distractors": [
      {
        "word": "en",
        "trap": "country_for_city",
        "tip": "Category Error: \"en\" is for countries or regions! For a city, always use \"à\"!"
      },
      {
        "word": "au",
        "trap": "country_for_city",
        "tip": "Category Error: Cities do not take masculine country article \"au\"!"
      }
    ],
    "purpose": "⚖️ Cities: All cities take simple \"à\" (no gender distinction)",
    "purposeNote": "Contrast: Regardless of country gender, all cities take simple \"à\": à Paris, à Montréal, à Lyon, à Téhéran.",
    "rule": "Always use \"à + ville\": à Paris, à Lyon, à Toronto.",
    "nextPreview": "Chain Complete! You have mastered geographical prepositions in French.",
    "chain": "prepositions_countries_cities",
    "chainTitle": "📍 Prépositions de Lieu: Pays Féminins (en) vs Masculins (au) vs Pluriels (aux) vs Villes (à)",
    "chainStep": 4,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "avoir_cod_apres_pomme",
    "topic": "avoir",
    "structureId": "avoir",
    "topicLabel": "Participe AVOIR · COD Après le Verbe (Pas d’accord)",
    "scene": "groceries-cart",
    "english": "I ate a delicious red apple.",
    "targetWords": [
      "J’ai",
      "mangé",
      "une",
      "délicieuse",
      "pomme",
      "rouge"
    ],
    "fullSentence": "J’ai mangé une délicieuse pomme rouge.",
    "distractors": [
      {
        "word": "mangée",
        "trap": "false_subject_agreement",
        "tip": "Agreement Error: With AVOIR, the participle does NOT agree with the subject, nor with a COD placed after! It is \"mangé\", not \"mangée\"!"
      },
      {
        "word": "suis mangé",
        "trap": "auxiliary_error",
        "tip": "Auxiliary Error: \"manger\" uses AVOIR, not ÊTRE!"
      }
    ],
    "purpose": "🌱 Base Rule: COD placed AFTER the verb ➜ NO agreement on participle",
    "purposeNote": "Starting Avoir COD Chain: In standard sentences with AVOIR, what did I eat? \"Une pomme\" (placed AFTER). When the direct object is placed after, the participle never agrees!",
    "rule": "With auxiliary AVOIR, there is NO agreement when the direct object is placed after the verb.",
    "nextPreview": "Next card: What happens when the same apple is placed BEFORE the verb using \"que\"?",
    "chain": "avoir_preceding_cod_shift",
    "chainTitle": "🍎 Avoir & Participe Passé: COD Après (Pas d’accord) vs COD Avant (Accord)",
    "chainStep": 1,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "avoir_cod_avant_que_pomme",
    "topic": "avoir",
    "structureId": "avoir",
    "topicLabel": "Accord COD Précédent · Pronom Relatif \"que\" (+e)",
    "scene": "groceries-cart",
    "english": "The red apple that I ate was delicious.",
    "targetWords": [
      "La",
      "pomme",
      "rouge",
      "que",
      "j’ai",
      "mangée",
      "était",
      "délicieuse"
    ],
    "fullSentence": "La pomme rouge que j’ai mangée était délicieuse.",
    "distractors": [
      {
        "word": "mangé",
        "trap": "missing_preceding_agreement",
        "tip": "Agreement Trap: \"que\" represents \"la pomme\" (fém sing) placed BEFORE \"ai mangé\"! With AVOIR, you MUST add +e (mangée)!"
      },
      {
        "word": "qui",
        "trap": "relative_pronoun",
        "tip": "Relative Pronoun Error: \"que\" is for direct objects, \"qui\" is for subjects!"
      }
    ],
    "purpose": "⚠️ Transformation: Preceding \"que\" (la pomme) forces feminine agreement (+e)!",
    "purposeNote": "Direct Contrast with Card 1: In Card 1, \"J’ai mangé une pomme\" (no agreement). But here, \"la pomme\" is placed BEFORE the verb via relative \"que\". Now the participle MUST agree: \"mangée\" (+e)!",
    "rule": "When relative \"que\" represents a direct object placed BEFORE the verb, the past participle agrees with that noun in gender and number.",
    "nextPreview": "Next card: Plural objects—contrast sending letters (after) vs receiving them (before)!",
    "chain": "avoir_preceding_cod_shift",
    "chainTitle": "🍎 Avoir & Participe Passé: COD Après (Pas d’accord) vs COD Avant (Accord)",
    "chainStep": 2,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "avoir_cod_apres_lettres",
    "topic": "avoir",
    "structureId": "avoir",
    "topicLabel": "Participe AVOIR · COD Pluriel Après (Pas d’accord)",
    "scene": "write",
    "english": "He sent the official letters this morning.",
    "targetWords": [
      "Il",
      "a",
      "envoyé",
      "les",
      "lettres",
      "officielles",
      "ce",
      "matin"
    ],
    "fullSentence": "Il a envoyé les lettres officielles ce matin.",
    "distractors": [
      {
        "word": "envoyées",
        "trap": "false_post_agreement",
        "tip": "Trap: \"les lettres\" is placed AFTER the verb, so \"envoyé\" takes NO feminine plural agreement!"
      },
      {
        "word": "est envoyé",
        "trap": "auxiliary_error",
        "tip": "Auxiliary Error: \"envoyer\" uses AVOIR, not ÊTRE!"
      }
    ],
    "purpose": "🌱 Plural Direct Object placed AFTER ➜ NO plural agreement",
    "purposeNote": "Notice again: Even though \"les lettres\" is feminine plural, it is placed AFTER the verb, so the participle stays base \"envoyé\" (no +es)!",
    "rule": "COD placed after verb = no agreement.",
    "nextPreview": "Next card: Replace \"les lettres\" with pronoun \"les\" placed before the verb!",
    "chain": "avoir_preceding_cod_shift",
    "chainTitle": "🍎 Avoir & Participe Passé: COD Après (Pas d’accord) vs COD Avant (Accord)",
    "chainStep": 3,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "avoir_cod_avant_pronom_lettres",
    "topic": "avoir",
    "structureId": "avoir",
    "topicLabel": "Accord COD Précédent · Pronom \"les\" (+es)",
    "scene": "write",
    "english": "The official letters? He sent them this morning.",
    "targetWords": [
      "Les",
      "lettres",
      "officielles",
      "?",
      "Il",
      "les",
      "a",
      "envoyées",
      "ce",
      "matin"
    ],
    "fullSentence": "Les lettres officielles ? Il les a envoyées ce matin.",
    "distractors": [
      {
        "word": "envoyé",
        "trap": "missing_pronoun_agreement",
        "tip": "Agreement Error: Pronoun \"les\" represents \"les lettres\" (fém pl) placed BEFORE the auxiliary! Add +es (envoyées)!"
      },
      {
        "word": "leur a",
        "trap": "pronoun_error",
        "tip": "Pronoun Error: \"lettres\" is a direct object (COD). Use \"les\", not \"leur\"!"
      }
    ],
    "purpose": "⚠️ Pronoun Shift: Preceding pronoun \"les\" triggers +es agreement!",
    "purposeNote": "Look at the transformation from Card 3: In Card 3, \"a envoyé les lettres\" (no +es). Here, \"les lettres\" becomes pronoun \"les\" placed BEFORE the verb: \"Il les a envoyées\" (+es)!",
    "rule": "Preceding direct object pronoun \"les\" forces agreement on the participle with AVOIR: \"Il les a envoyées\".",
    "nextPreview": "Chain Complete! You master the Avoir preceding direct object rule.",
    "chain": "avoir_preceding_cod_shift",
    "chainTitle": "🍎 Avoir & Participe Passé: COD Après (Pas d’accord) vs COD Avant (Accord)",
    "chainStep": 4,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "opp_entrer_fem",
    "topic": "maison",
    "structureId": "maison",
    "topicLabel": "Maison d’Être · Entrer (Mouvement)",
    "scene": "apartment-living",
    "english": "She entered into the living room.",
    "targetWords": [
      "Elle",
      "est",
      "entrée",
      "dans",
      "le",
      "salon"
    ],
    "fullSentence": "Elle est entrée dans le salon.",
    "distractors": [
      {
        "word": "a",
        "trap": "auxiliary_error",
        "tip": "Auxiliary Error: \"entrer\" is a Maison d’Être verb! Use ÊTRE (est), not AVOIR (a)!"
      },
      {
        "word": "entré",
        "trap": "missing_agreement",
        "tip": "Agreement Error: \"Elle\" is feminine singular: add +e (entrée)!"
      }
    ],
    "purpose": "🎯 Movement Entry: \"Entrer\" uses ÊTRE + feminine agreement (+e)",
    "purposeNote": "Starting Opposites Chain: \"Entrer\" is an intransitive movement verb of La Maison d’Être. It conjugates with ÊTRE and agrees with Elle (+e).",
    "rule": "\"Entrer\" takes auxiliary ÊTRE and agrees with the subject.",
    "nextPreview": "Next card: Contrast with its exact opposite: \"Sortir\" (leaving the room)!",
    "chain": "maison_etre_opposites",
    "chainTitle": "🏠 Maison d’Être: Verbes de Mouvement Opposés & Accords de Sujet",
    "chainStep": 1,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "opp_sortir_fem",
    "topic": "maison",
    "structureId": "maison",
    "topicLabel": "Maison d’Être · Sortir (Opposé d’Entrer)",
    "scene": "walk",
    "english": "She went out of the living room.",
    "targetWords": [
      "Elle",
      "est",
      "sortie",
      "du",
      "salon"
    ],
    "fullSentence": "Elle est sortie du salon.",
    "distractors": [
      {
        "word": "a",
        "trap": "auxiliary_error",
        "tip": "Auxiliary Error: Intransitive movement uses ÊTRE (est), not AVOIR!"
      },
      {
        "word": "de le",
        "trap": "contraction_trap",
        "tip": "Contraction Trap: \"de + le salon\" contracts to \"du salon\"!"
      }
    ],
    "purpose": "⚖️ Movement Exit: \"Sortir\" (opposite of entrer) uses ÊTRE + (+e)",
    "purposeNote": "Opposite pair: Entrer (to enter) ➜ Sortir (to exit). Both use auxiliary ÊTRE and agree in gender (+e) with Elle!",
    "rule": "\"Sortir\" is the antonym of \"entrer\". Both use ÊTRE for intransitive movement.",
    "nextPreview": "Next card: Another vertical pair—Monter (going up) vs Descendre (going down)!",
    "chain": "maison_etre_opposites",
    "chainTitle": "🏠 Maison d’Être: Verbes de Mouvement Opposés & Accords de Sujet",
    "chainStep": 2,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "opp_monter_plur",
    "topic": "maison",
    "structureId": "maison",
    "topicLabel": "Maison d’Être · Monter (Monter au sommet)",
    "scene": "walk",
    "english": "They climbed up to the top of the hill. (masculine plural)",
    "targetWords": [
      "Ils",
      "sont",
      "montés",
      "au",
      "sommet",
      "de",
      "la",
      "colline"
    ],
    "fullSentence": "Ils sont montés au sommet de la colline.",
    "distractors": [
      {
        "word": "ont",
        "trap": "auxiliary_error",
        "tip": "Auxiliary Error: Climbing oneself is movement: use ÊTRE (sont), not AVOIR!"
      },
      {
        "word": "monté",
        "trap": "missing_plural",
        "tip": "Plural Agreement: \"Ils\" is plural: add +s (montés)!"
      }
    ],
    "purpose": "🎯 Vertical Ascent: \"Monter\" uses ÊTRE + plural agreement (+s)",
    "purposeNote": "Monter describes upward movement. With \"Ils\", auxiliary is \"sont\" and participle agrees with +s.",
    "rule": "\"Monter\" takes auxiliary ÊTRE when intransitive.",
    "nextPreview": "Next card: The exact opposite: Descendre (coming down)!",
    "chain": "maison_etre_opposites",
    "chainTitle": "🏠 Maison d’Être: Verbes de Mouvement Opposés & Accords de Sujet",
    "chainStep": 3,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "opp_descendre_plur",
    "topic": "maison",
    "structureId": "maison",
    "topicLabel": "Maison d’Être · Descendre (Opposé de Monter)",
    "scene": "walk",
    "english": "They came down from the hill.",
    "targetWords": [
      "Ils",
      "sont",
      "descendus",
      "de",
      "la",
      "colline"
    ],
    "fullSentence": "Ils sont descendus de la colline.",
    "distractors": [
      {
        "word": "ont",
        "trap": "auxiliary_error",
        "tip": "Auxiliary Error: Descending oneself uses ÊTRE (sont), not AVOIR!"
      },
      {
        "word": "descendu",
        "trap": "missing_plural",
        "tip": "Plural Agreement: \"Ils\" is plural: add +s (descendus)!"
      }
    ],
    "purpose": "⚖️ Vertical Descent: \"Descendre\" (opposite of monter) uses ÊTRE + (+s)",
    "purposeNote": "Opposite pair: Monter (to ascend) ➜ Descendre (to descend). Notice the irregular participle ending in -u (descendu + s = descendus)!",
    "rule": "\"Descendre\" takes auxiliary ÊTRE and its participle ends in -u.",
    "nextPreview": "Chain Complete! You have mastered opposite movement verb pairs.",
    "chain": "maison_etre_opposites",
    "chainTitle": "🏠 Maison d’Être: Verbes de Mouvement Opposés & Accords de Sujet",
    "chainStep": 4,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "cause_cont_du_travail",
    "topic": "cause",
    "structureId": "cause",
    "topicLabel": "Cause & Contraction · Masculin (du = de + le)",
    "scene": "work",
    "english": "I am exhausted because of the heavy work.",
    "targetWords": [
      "Je",
      "suis",
      "épuisé",
      "à",
      "cause",
      "du",
      "travail",
      "lourd"
    ],
    "fullSentence": "Je suis épuisé à cause du travail lourd.",
    "distractors": [
      {
        "word": "de le",
        "trap": "contraction_error",
        "tip": "Contraction Error: In French, \"de + le\" is forbidden! It MUST contract to \"du travail\"!"
      },
      {
        "word": "grâce au",
        "trap": "polarity_error",
        "tip": "Polarity Error: Exhaustion is negative: use \"à cause de\", not \"grâce à\"!"
      }
    ],
    "purpose": "🎯 Masculine Contraction: \"de + le\" becomes \"du\"",
    "purposeNote": "Starting Contractions Chain: \"À cause de\" combines with the article of the following noun. With masculine \"le travail\", \"de + le\" contracts to \"DU\"!",
    "rule": "de + le = du (à cause du travail). Never write \"de le\"!",
    "nextPreview": "Next card: Feminine noun (la pluie)—does it contract?",
    "chain": "cause_contractions_gender",
    "chainTitle": "⚡ Cause: Contractions Prépositionnelles (À cause du / de la / de l’ / des)",
    "chainStep": 1,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "cause_cont_dela_pluie",
    "topic": "cause",
    "structureId": "cause",
    "topicLabel": "Cause & Article · Féminin (de la - pas de contraction)",
    "scene": "rain",
    "english": "The match is canceled because of the rain.",
    "targetWords": [
      "Le",
      "match",
      "est",
      "annulé",
      "à",
      "cause",
      "de",
      "la",
      "pluie"
    ],
    "fullSentence": "Le match est annulé à cause de la pluie.",
    "distractors": [
      {
        "word": "du",
        "trap": "gender_mismatch",
        "tip": "Gender Error: \"pluie\" is feminine! Use \"de la pluie\", not masculine \"du\"!"
      },
      {
        "word": "grâce à la",
        "trap": "polarity_error",
        "tip": "Polarity Error: Match cancellation is negative: use \"à cause de\"!"
      }
    ],
    "purpose": "⚖️ Feminine Noun: \"de la\" remains separate (no contraction)",
    "purposeNote": "Contrast with Card 1: Masculine contracted to \"du\". Feminine nouns do NOT contract: \"de la pluie\" stays two separate words!",
    "rule": "Feminine singular remains \"de la\" (à cause de la pluie).",
    "nextPreview": "Next card: Noun starting with a vowel (l’accident)—watch the elision!",
    "chain": "cause_contractions_gender",
    "chainTitle": "⚡ Cause: Contractions Prépositionnelles (À cause du / de la / de l’ / des)",
    "chainStep": 2,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "cause_cont_del_accident",
    "topic": "cause",
    "structureId": "cause",
    "topicLabel": "Cause & Élision · Voyelle (de l’)",
    "scene": "train-station",
    "english": "The road is blocked because of the accident.",
    "targetWords": [
      "La",
      "route",
      "est",
      "bloquée",
      "à",
      "cause",
      "de",
      "l’accident"
    ],
    "fullSentence": "La route est bloquée à cause de l’accident.",
    "distractors": [
      {
        "word": "du accident",
        "trap": "elision_missing",
        "tip": "Elision Error: Before a vowel sound, \"de\" elides to \"de l’accident\", not \"du\"!"
      },
      {
        "word": "de le accident",
        "trap": "syntax_error",
        "tip": "Syntax Error: Always elide before vowels: \"de l’accident\"!"
      }
    ],
    "purpose": "⚖️ Vowel Elision: Nouns starting with a vowel take \"de l’\"",
    "purposeNote": "Contrast with Cards 1 & 2: Before vowels, gender is neutralized: both masculine and feminine take \"de l’\" (de l’accident, de l’inondation).",
    "rule": "Before vowels and mute h, use \"de l’\": à cause de l’accident.",
    "nextPreview": "Next card: Plural nouns (les grèves)—what does \"de + les\" contract to?",
    "chain": "cause_contractions_gender",
    "chainTitle": "⚡ Cause: Contractions Prépositionnelles (À cause du / de la / de l’ / des)",
    "chainStep": 3,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "cause_cont_des_greves",
    "topic": "cause",
    "structureId": "cause",
    "topicLabel": "Cause & Contraction · Pluriel (des = de + les)",
    "scene": "train-station",
    "english": "The buses are stopped because of the strikes.",
    "targetWords": [
      "Les",
      "bus",
      "sont",
      "arrêtés",
      "à",
      "cause",
      "des",
      "grèves"
    ],
    "fullSentence": "Les bus sont arrêtés à cause des grèves.",
    "distractors": [
      {
        "word": "de les",
        "trap": "contraction_error",
        "tip": "Contraction Error: \"de + les\" is strictly forbidden! It MUST contract to \"des grèves\"!"
      },
      {
        "word": "de la",
        "trap": "number_mismatch",
        "tip": "Number Error: \"grèves\" is plural: use \"des\", not singular \"de la\"!"
      }
    ],
    "purpose": "⚖️ Plural Contraction: \"de + les\" becomes \"des\"",
    "purposeNote": "Contrast: Plural nouns contract \"de + les\" into \"DES\": \"à cause des grèves\". Never write \"de les\"!",
    "rule": "de + les = des (à cause des grèves / en raison des travaux).",
    "nextPreview": "Chain Complete! You have mastered all prepositional contractions for cause.",
    "chain": "cause_contractions_gender",
    "chainTitle": "⚡ Cause: Contractions Prépositionnelles (À cause du / de la / de l’ / des)",
    "chainStep": 4,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "sefaire_tu_masser",
    "topic": "se_faire",
    "structureId": "se_faire",
    "topicLabel": "Se faire + Infinitif · Sujet Tu",
    "scene": "doctor-office",
    "english": "Are you getting your shoulders massaged?",
    "targetWords": [
      "Tu",
      "te",
      "fais",
      "masser",
      "les",
      "épaules",
      "?"
    ],
    "fullSentence": "Tu te fais masser les épaules ?",
    "distractors": [
      {
        "word": "te masses",
        "trap": "reflexive_meaning",
        "tip": "Meaning Trap: \"Tu te masses\" means you massage yourself! With a therapist, use \"Tu te fais masser\"!"
      },
      {
        "word": "fais masser",
        "trap": "missing_reflexive",
        "tip": "Pronoun Error: The reflexive pronoun \"te\" is required: \"Tu te fais masser\"!"
      }
    ],
    "purpose": "🔄 Subject Shift: Tu te fais + infinitif (service received by Tu)",
    "purposeNote": "Starting Se Faire Subject Shift: Notice the pronoun agreement for \"tu\": \"te fais\" + unchanged infinitive (\"masser\").",
    "rule": "Formula: Tu + te + fais + infinitif.",
    "nextPreview": "Next card: Shift to \"Nous\" (first person plural)—notice double nous!",
    "chain": "se_faire_subjects_tenses",
    "chainTitle": "🔒 Se faire + Infinitif: Mutation des Sujets & Tenses (Tu ➜ Nous ➜ Futur ➜ Passé Invariable)",
    "chainStep": 1,
    "chainTotal": 4,
    "chainType": "subject_shift"
  },
  {
    "id": "sefaire_nous_courses",
    "topic": "se_faire",
    "structureId": "se_faire",
    "topicLabel": "Se faire + Infinitif · Sujet Nous (Double Nous)",
    "scene": "groceries-cart",
    "english": "We have our healthy groceries delivered.",
    "targetWords": [
      "Nous",
      "nous",
      "faisons",
      "livrer",
      "des",
      "courses",
      "saines"
    ],
    "fullSentence": "Nous nous faisons livrer des courses saines.",
    "distractors": [
      {
        "word": "nous livrons",
        "trap": "reflexive_meaning",
        "tip": "Meaning Trap: \"Nous nous livrons\" does not make sense! For grocery delivery, use \"Nous nous faisons livrer\"!"
      },
      {
        "word": "faisons livrer",
        "trap": "missing_reflexive",
        "tip": "Pronoun Error: Double \"nous\" is required: \"Nous nous faisons livrer\"!"
      }
    ],
    "purpose": "🔄 Subject Shift: Nous nous faisons + infinitif (double pronoun)",
    "purposeNote": "Contrast with Card 1: With \"Nous\", both subject and reflexive pronoun are identical: \"Nous nous faisons livrer\"!",
    "rule": "Formula: Nous + nous + faisons + infinitif.",
    "nextPreview": "Next card: Shift tense to Futur Proche (Je vais me faire...)!",
    "chain": "se_faire_subjects_tenses",
    "chainTitle": "🔒 Se faire + Infinitif: Mutation des Sujets & Tenses (Tu ➜ Nous ➜ Futur ➜ Passé Invariable)",
    "chainStep": 2,
    "chainTotal": 4,
    "chainType": "subject_shift"
  },
  {
    "id": "sefaire_futur_vacciner",
    "topic": "se_faire",
    "structureId": "se_faire",
    "topicLabel": "Se faire + Infinitif · Futur Proche (Aller + me faire)",
    "scene": "pharmacy",
    "english": "I am going to get vaccinated at the pharmacy tomorrow.",
    "targetWords": [
      "Je",
      "vais",
      "me",
      "faire",
      "vacciner",
      "à",
      "la",
      "pharmacie",
      "demain"
    ],
    "fullSentence": "Je vais me faire vacciner à la pharmacie demain.",
    "distractors": [
      {
        "word": "me vais faire",
        "trap": "pronoun_placement",
        "tip": "Pronoun Placement: In Futur Proche, the reflexive pronoun goes directly before the infinitive \"faire\": \"vais ME faire\", never \"me vais\"!"
      },
      {
        "word": "vais vacciner",
        "trap": "missing_causative",
        "tip": "Meaning Shift: \"Je vais vacciner\" means you are the nurse injecting someone else!"
      }
    ],
    "purpose": "🔄 Tense Shift: Futur Proche with Se faire (Pronoun placement before faire)",
    "purposeNote": "Critical Placement: In the Futur Proche (aller + infinitif), the reflexive pronoun sits right before \"faire\": \"Je vais ME faire vacciner\", NOT \"Je me vais\"!",
    "rule": "Futur Proche formula: Sujet + aller (présent) + [me/te/se] + faire + infinitif.",
    "nextPreview": "Next card: Shift to Passé Composé plural—does \"fait\" take +es with Elles?",
    "chain": "se_faire_subjects_tenses",
    "chainTitle": "🔒 Se faire + Infinitif: Mutation des Sujets & Tenses (Tu ➜ Nous ➜ Futur ➜ Passé Invariable)",
    "chainStep": 3,
    "chainTotal": 4,
    "chainType": "subject_shift"
  },
  {
    "id": "sefaire_passe_invariable_plur",
    "topic": "se_faire",
    "structureId": "se_faire",
    "topicLabel": "Se faire + Infinitif · Passé Composé Pluriel Invariable",
    "scene": "coiffeur-haircut",
    "english": "They had their hair styled for the party. (two women)",
    "targetWords": [
      "Elles",
      "se",
      "sont",
      "fait",
      "coiffer",
      "pour",
      "la",
      "fête"
    ],
    "fullSentence": "Elles se sont fait coiffer pour la fête.",
    "distractors": [
      {
        "word": "faites",
        "trap": "false_agreement",
        "tip": "Trap: Even with \"Elles\", the participle \"fait\" before an infinitive NEVER agrees! It is always \"fait\", never \"faites\"!"
      },
      {
        "word": "ont fait",
        "trap": "auxiliary_error",
        "tip": "Auxiliary Error: Reflexive \"se sont\" requires ÊTRE!"
      }
    ],
    "purpose": "⚠️ Plural Invariability Trap: \"Fait\" is 100% invariable even with Elles!",
    "purposeNote": "Ultimate Rule Test: Even with feminine plural \"Elles\", because \"fait\" is followed by infinitive \"coiffer\", it has ZERO agreement: \"se sont fait coiffer\" (never faites)!",
    "rule": "In \"se faire + infinitif\", \"fait\" is strictly invariable in all circumstances.",
    "nextPreview": "Chain Complete! You have mastered Se Faire across all subjects and tenses.",
    "chain": "se_faire_subjects_tenses",
    "chainTitle": "🔒 Se faire + Infinitif: Mutation des Sujets & Tenses (Tu ➜ Nous ➜ Futur ➜ Passé Invariable)",
    "chainStep": 4,
    "chainTotal": 4,
    "chainType": "subject_shift"
  },
  {
    "id": "neque_shift_je_legumes",
    "topic": "neque",
    "structureId": "neque",
    "topicLabel": "Ne ... que · Présent (Je)",
    "scene": "groceries-cart",
    "english": "I only eat fresh organic vegetables.",
    "targetWords": [
      "Je",
      "ne",
      "mange",
      "que",
      "des",
      "légumes",
      "biologiques",
      "frais"
    ],
    "fullSentence": "Je ne mange que des légumes biologiques frais.",
    "distractors": [
      {
        "word": "pas",
        "trap": "negation_error",
        "tip": "Meaning Error: \"ne mange pas\" means you do not eat vegetables! For \"only vegetables\", use \"que\"!"
      },
      {
        "word": "seulement",
        "trap": "anglicism",
        "tip": "Tip: French prefers \"ne ... que\" wrapping the verb over \"seulement\"!"
      }
    ],
    "purpose": "🌱 Base Form: Je ne mange que ... (first person restriction)",
    "purposeNote": "Starting Ne ... que Shift Chain: Notice how \"ne\" precedes the verb and \"que\" directly precedes the noun: \"Je ne mange que des légumes\".",
    "rule": "Formula: Sujet + ne + verbe + que + complément.",
    "nextPreview": "Next card: Shift subject to \"Nous\" (first person plural)!",
    "chain": "neque_shifts",
    "chainTitle": "🚫 Ne ... que: Variation des Sujets & Temps (Je ➜ Nous ➜ Passé ➜ Futur)",
    "chainStep": 1,
    "chainTotal": 4,
    "chainType": "subject_shift"
  },
  {
    "id": "neque_shift_nous_train",
    "topic": "neque",
    "structureId": "neque",
    "topicLabel": "Ne ... que · Présent (Nous)",
    "scene": "train-station",
    "english": "We only travel by high-speed train.",
    "targetWords": [
      "Nous",
      "ne",
      "voyageons",
      "qu’en",
      "train",
      "à",
      "grande",
      "vitesse"
    ],
    "fullSentence": "Nous ne voyageons qu’en train à grande vitesse.",
    "distractors": [
      {
        "word": "que en",
        "trap": "elision_missing",
        "tip": "Elision Error: \"que\" elides to \"qu’\" before vowels: \"qu’en train\"!"
      },
      {
        "word": "pas",
        "trap": "negation_error",
        "tip": "Meaning Error: For \"only by train\", use \"qu’en\"!"
      }
    ],
    "purpose": "🔄 Subject Shift: Nous ne voyageons qu’en ... (elision qu’en)",
    "purposeNote": "Notice the mutation from Card 1: Subject is \"Nous\" (voyageons), and before the vowel in \"en\", \"que\" elides to \"qu’\"!",
    "rule": "\"Que\" elides to \"qu’\" before words starting with a vowel: \"qu’en train\".",
    "nextPreview": "Next card: Shift to Passé Composé—observe the placement of \"que\"!",
    "chain": "neque_shifts",
    "chainTitle": "🚫 Ne ... que: Variation des Sujets & Temps (Je ➜ Nous ➜ Passé ➜ Futur)",
    "chainStep": 2,
    "chainTotal": 4,
    "chainType": "subject_shift"
  },
  {
    "id": "neque_shift_passe_billets",
    "topic": "neque",
    "structureId": "neque",
    "topicLabel": "Ne ... que · Passé Composé (Placement de que)",
    "scene": "cinema",
    "english": "He only bought two cinema tickets.",
    "targetWords": [
      "Il",
      "n’a",
      "acheté",
      "que",
      "deux",
      "billets",
      "de",
      "cinéma"
    ],
    "fullSentence": "Il n’a acheté que deux billets de cinéma.",
    "distractors": [
      {
        "word": "n’a que acheté",
        "trap": "que_placement",
        "tip": "Placement Error: \"que\" does NOT go before the participle! It stays before \"deux billets\"!"
      },
      {
        "word": "pas",
        "trap": "negation_error",
        "tip": "Meaning Error: \"n’a pas acheté\" means he bought nothing! For \"only two\", use \"que\"!"
      }
    ],
    "purpose": "🔄 Tense Shift: Passé Composé placement of \"que\" (after participle)",
    "purposeNote": "Crucial Tense Shift: In the Passé Composé, \"ne\" wraps the auxiliary (\"n’a\"), but \"que\" stays right before the object (\"que deux billets\")!",
    "rule": "Passé Composé: Sujet + ne + auxiliaire + participe + QUE + complément.",
    "nextPreview": "Next card: Shift to Futur Proche—where does \"ne ... que\" wrap?",
    "chain": "neque_shifts",
    "chainTitle": "🚫 Ne ... que: Variation des Sujets & Temps (Je ➜ Nous ➜ Passé ➜ Futur)",
    "chainStep": 3,
    "chainTotal": 4,
    "chainType": "subject_shift"
  },
  {
    "id": "neque_shift_futur_question",
    "topic": "neque",
    "structureId": "neque",
    "topicLabel": "Ne ... que · Futur Proche (Aller)",
    "scene": "work",
    "english": "She is only going to ask one single question.",
    "targetWords": [
      "Elle",
      "ne",
      "va",
      "poser",
      "qu’une",
      "seule",
      "question"
    ],
    "fullSentence": "Elle ne va poser qu’une seule question.",
    "distractors": [
      {
        "word": "ne va que poser",
        "trap": "que_placement",
        "tip": "Placement Error: \"que\" restricts \"une seule question\", so it goes right before it: \"qu’une seule question\"!"
      },
      {
        "word": "pas",
        "trap": "negation_error",
        "tip": "Meaning Error: For \"only one question\", use \"qu’une\"!"
      }
    ],
    "purpose": "🔄 Tense Shift: Futur Proche placement (ne wraps aller, que precedes object)",
    "purposeNote": "Observe Futur Proche: \"ne\" wraps conjugated \"va\", while \"qu’\" sits before \"une seule question\": \"Elle ne va poser qu’une seule question\"!",
    "rule": "Futur Proche: Sujet + ne + aller + infinitif + QUE + complément.",
    "nextPreview": "Chain Complete! You master Ne ... que across all persons and tenses.",
    "chain": "neque_shifts",
    "chainTitle": "🚫 Ne ... que: Variation des Sujets & Temps (Je ➜ Nous ➜ Passé ➜ Futur)",
    "chainStep": 4,
    "chainTotal": 4,
    "chainType": "subject_shift"
  },
  {
    "id": "maison_shift_il_pharmacie",
    "topic": "maison",
    "structureId": "maison",
    "topicLabel": "Maison d’Être · Sujet Il (Masc sing: -é)",
    "scene": "pharmacy",
    "english": "He went to the pharmacy this morning.",
    "targetWords": [
      "Il",
      "est",
      "allé",
      "à",
      "la",
      "pharmacie",
      "ce",
      "matin"
    ],
    "fullSentence": "Il est allé à la pharmacie ce matin.",
    "distractors": [
      {
        "word": "a",
        "trap": "auxiliary_error",
        "tip": "Auxiliary Error: \"aller\" is a movement verb of La Maison d’Être! Use ÊTRE (est), never AVOIR (a)!"
      },
      {
        "word": "allée",
        "trap": "gender_agreement",
        "tip": "Gender Agreement: \"Il\" is masculine singular: \"allé\" (no +e)!"
      }
    ],
    "purpose": "🌱 Base Subject: Il (masculine singular · base ending -é)",
    "purposeNote": "Starting Maison d’Être Agreement Cycle: \"Aller\" uses ÊTRE. Masculine singular has base participle \"allé\".",
    "rule": "Il + est + allé. Masculine singular takes no added letters.",
    "nextPreview": "Next card: Shift subject to \"Elle\" (feminine singular)—watch the feminine +e appear!",
    "chain": "maison_etre_subject_shifts",
    "chainTitle": "🏠 Maison d’Être: Subject Agreement Cycle avec Aller (Il ➜ Elle ➜ Ils ➜ Elles ➜ Politesse)",
    "chainStep": 1,
    "chainTotal": 5,
    "chainType": "subject_shift"
  },
  {
    "id": "maison_shift_elle_pharmacie",
    "topic": "maison",
    "structureId": "maison",
    "topicLabel": "Maison d’Être · Sujet Elle (Fém sing: +e)",
    "scene": "pharmacy",
    "english": "She went to the pharmacy this morning.",
    "targetWords": [
      "Elle",
      "est",
      "allée",
      "à",
      "la",
      "pharmacie",
      "ce",
      "matin"
    ],
    "fullSentence": "Elle est allée à la pharmacie ce matin.",
    "distractors": [
      {
        "word": "a",
        "trap": "auxiliary_error",
        "tip": "Auxiliary Error: \"aller\" takes ÊTRE (est), not AVOIR!"
      },
      {
        "word": "allé",
        "trap": "missing_agreement",
        "tip": "Agreement Error: \"Elle\" is feminine singular: add +e (allée)!"
      }
    ],
    "purpose": "🔄 Subject Shift: Il ➜ Elle (feminine singular +e agreement)",
    "purposeNote": "Notice the mutation from Card 1: \"Il est allé\" becomes \"Elle est allée\". ÊTRE forces feminine agreement (+e)!",
    "rule": "Elle + est + allée (+e).",
    "nextPreview": "Next card: Shift to \"Ils\" (masculine plural)—notice auxiliary \"sont\" and plural +s!",
    "chain": "maison_etre_subject_shifts",
    "chainTitle": "🏠 Maison d’Être: Subject Agreement Cycle avec Aller (Il ➜ Elle ➜ Ils ➜ Elles ➜ Politesse)",
    "chainStep": 2,
    "chainTotal": 5,
    "chainType": "subject_shift"
  },
  {
    "id": "maison_shift_ils_pharmacie",
    "topic": "maison",
    "structureId": "maison",
    "topicLabel": "Maison d’Être · Sujet Ils (Masc pluriel: +s)",
    "scene": "pharmacy",
    "english": "They went to the pharmacy this morning. (masculine plural)",
    "targetWords": [
      "Ils",
      "sont",
      "allés",
      "à",
      "la",
      "pharmacie",
      "ce",
      "matin"
    ],
    "fullSentence": "Ils sont allés à la pharmacie ce matin.",
    "distractors": [
      {
        "word": "ont",
        "trap": "auxiliary_error",
        "tip": "Auxiliary Error: \"aller\" takes ÊTRE (sont), not AVOIR (ont)!"
      },
      {
        "word": "allé",
        "trap": "missing_plural",
        "tip": "Plural Agreement: \"Ils\" is plural: add +s (allés)!"
      }
    ],
    "purpose": "🔄 Subject Shift: Elle ➜ Ils (auxiliary sont + plural +s agreement)",
    "purposeNote": "Notice the mutation: Auxiliary becomes \"sont\" and participle agrees in number (+s): \"Ils sont allés\".",
    "rule": "Ils + sont + allés (+s).",
    "nextPreview": "Next card: Shift to \"Elles\" (feminine plural)—both +e AND +s!",
    "chain": "maison_etre_subject_shifts",
    "chainTitle": "🏠 Maison d’Être: Subject Agreement Cycle avec Aller (Il ➜ Elle ➜ Ils ➜ Elles ➜ Politesse)",
    "chainStep": 3,
    "chainTotal": 5,
    "chainType": "subject_shift"
  },
  {
    "id": "maison_shift_elles_pharmacie",
    "topic": "maison",
    "structureId": "maison",
    "topicLabel": "Maison d’Être · Sujet Elles (Fém pluriel: +es)",
    "scene": "pharmacy",
    "english": "They went to the pharmacy this morning. (all women)",
    "targetWords": [
      "Elles",
      "sont",
      "allées",
      "à",
      "la",
      "pharmacie",
      "ce",
      "matin"
    ],
    "fullSentence": "Elles sont allées à la pharmacie ce matin.",
    "distractors": [
      {
        "word": "ont",
        "trap": "auxiliary_error",
        "tip": "Auxiliary Error: \"aller\" takes ÊTRE (sont), never AVOIR (ont)!"
      },
      {
        "word": "allés",
        "trap": "gender_agreement",
        "tip": "Gender Agreement: \"Elles\" is feminine plural: add +e AND +s = allées!"
      }
    ],
    "purpose": "🔄 Subject Shift: Ils ➜ Elles (both feminine +e and plural +s = +es)",
    "purposeNote": "Notice the full feminine plural agreement: \"Elles sont allées\" (+es)!",
    "rule": "Elles + sont + allées (+es).",
    "nextPreview": "Next card: Polite \"Vous\" addressed to a lady—does it take +s?",
    "chain": "maison_etre_subject_shifts",
    "chainTitle": "🏠 Maison d’Être: Subject Agreement Cycle avec Aller (Il ➜ Elle ➜ Ils ➜ Elles ➜ Politesse)",
    "chainStep": 4,
    "chainTotal": 5,
    "chainType": "subject_shift"
  },
  {
    "id": "maison_shift_madame_vous",
    "topic": "maison",
    "structureId": "maison",
    "topicLabel": "Maison d’Être · Vous de Politesse Féminin (Singulier)",
    "scene": "doctor-office",
    "english": "Madam, did you go to the doctor yesterday?",
    "targetWords": [
      "Madame",
      "vous",
      "êtes",
      "allée",
      "chez",
      "le",
      "médecin",
      "hier",
      "?"
    ],
    "fullSentence": "Madame vous êtes allée chez le médecin hier ?",
    "distractors": [
      {
        "word": "allées",
        "trap": "polite_plural_trap",
        "tip": "Singular Trap: \"Madame\" is ONE person! Do not add plural +s to polite singular vous!"
      },
      {
        "word": "avez allé",
        "trap": "auxiliary_error",
        "tip": "Auxiliary Error: \"aller\" takes ÊTRE (êtes), not AVOIR!"
      }
    ],
    "purpose": "⚠️ Politeness Nuance: Polite \"Vous\" to a woman has +e but NO plural +s!",
    "purposeNote": "Mastery Check: \"Madame\" is feminine singular. With polite \"vous\", add feminine +e, but DO NOT add plural +s: \"vous êtes allée\"!",
    "rule": "Polite \"vous\" to a female singular takes +e (allée) without plural +s.",
    "nextPreview": "Chain Complete! You have mastered the full Maison d’Être agreement cycle.",
    "chain": "maison_etre_subject_shifts",
    "chainTitle": "🏠 Maison d’Être: Subject Agreement Cycle avec Aller (Il ➜ Elle ➜ Ils ➜ Elles ➜ Politesse)",
    "chainStep": 5,
    "chainTotal": 5,
    "chainType": "subject_shift"
  },
  {
    "id": "passer_mouvement_etre",
    "topic": "maison",
    "structureId": "maison",
    "topicLabel": "Passer · Mouvement Physique (ÊTRE)",
    "scene": "bakery-croissant",
    "english": "I stopped by the bakery before work.",
    "targetWords": [
      "Je",
      "suis",
      "passé",
      "à",
      "la",
      "boulangerie",
      "avant",
      "le",
      "travail"
    ],
    "fullSentence": "Je suis passé à la boulangerie avant le travail.",
    "distractors": [
      {
        "word": "ai",
        "trap": "auxiliary_shift",
        "tip": "Auxiliary Error: Passing by a place physically (movement) takes ÊTRE (suis passé)!"
      },
      {
        "word": "passée",
        "trap": "gender_agreement",
        "tip": "Gender Agreement: Male speaker does not add +e!"
      }
    ],
    "purpose": "🎯 Movement Passer: Passing by a location takes auxiliary ÊTRE",
    "purposeNote": "Starting Passer Dual Chain: When \"passer\" means physically going by or visiting a place (\"passer par\", \"passer chez\"), it takes auxiliary ÊTRE: \"Je suis passé\"!",
    "rule": "Physical movement \"passer\" takes ÊTRE: \"Je suis passé à la boulangerie\".",
    "nextPreview": "Next card: What happens when \"passer\" means spending time (hours, vacation)?",
    "chain": "passer_etre_vs_avoir",
    "chainTitle": "🏠 Maison d’Être: Le Verbe \"Passer\" (Mouvement Être vs Temps/Objet Avoir)",
    "chainStep": 1,
    "chainTotal": 3,
    "chainType": "contrast"
  },
  {
    "id": "passer_temps_avoir",
    "topic": "maison",
    "structureId": "maison",
    "topicLabel": "Passer · Passer du Temps (AVOIR)",
    "scene": "cinema",
    "english": "I spent three wonderful hours at the museum.",
    "targetWords": [
      "J’ai",
      "passé",
      "trois",
      "heures",
      "formidables",
      "au",
      "musée"
    ],
    "fullSentence": "J’ai passé trois heures formidables au musée.",
    "distractors": [
      {
        "word": "suis",
        "trap": "auxiliary_shift",
        "tip": "Auxiliary Flip: When \"passer\" means spending time (trois heures), it FLIPS to auxiliary AVOIR (J’ai passé)!"
      },
      {
        "word": "passée",
        "trap": "agreement_error",
        "tip": "Agreement Error: With AVOIR and post-verb object, participle does not agree with subject!"
      }
    ],
    "purpose": "⚖️ Time Passer: Spending time flips auxiliary to AVOIR",
    "purposeNote": "Direct Contrast with Card 1: In Card 1, you moved physically (suis passé). Here, you SPENT TIME (trois heures). When passing time, the auxiliary flips to AVOIR: \"J’ai passé\"!",
    "rule": "When \"passer\" means spending time, it takes AVOIR: \"J’ai passé trois heures\".",
    "nextPreview": "Next card: Taking a test or exam (passer un examen)—which auxiliary?",
    "chain": "passer_etre_vs_avoir",
    "chainTitle": "🏠 Maison d’Être: Le Verbe \"Passer\" (Mouvement Être vs Temps/Objet Avoir)",
    "chainStep": 2,
    "chainTotal": 3,
    "chainType": "contrast"
  },
  {
    "id": "passer_examen_avoir",
    "topic": "maison",
    "structureId": "maison",
    "topicLabel": "Passer · Passer un Examen (AVOIR)",
    "scene": "work",
    "english": "He took his driving test yesterday morning.",
    "targetWords": [
      "Il",
      "a",
      "passé",
      "son",
      "permis",
      "de",
      "conduire",
      "hier",
      "matin"
    ],
    "fullSentence": "Il a passé son permis de conduire hier matin.",
    "distractors": [
      {
        "word": "est",
        "trap": "auxiliary_shift",
        "tip": "Auxiliary Flip: Taking an exam or test is transitive with AVOIR (a passé son permis)!"
      },
      {
        "word": "passés",
        "trap": "agreement_error",
        "tip": "Agreement Error: Direct object is singular, no +s!"
      }
    ],
    "purpose": "⚖️ Exam Passer: Taking a test/exam takes auxiliary AVOIR",
    "purposeNote": "Transitive Usage: In French, \"passer un examen / son permis\" means sitting for a test. It takes direct object and uses auxiliary AVOIR (\"Il a passé\").",
    "rule": "Transitive \"passer un examen / son permis\" uses AVOIR.",
    "nextPreview": "Chain Complete! You master the multifaceted verb \"passer\".",
    "chain": "passer_etre_vs_avoir",
    "chainTitle": "🏠 Maison d’Être: Le Verbe \"Passer\" (Mouvement Être vs Temps/Objet Avoir)",
    "chainStep": 3,
    "chainTotal": 3,
    "chainType": "contrast"
  },
  {
    "id": "descendre_mouvement_etre",
    "topic": "maison",
    "structureId": "maison",
    "topicLabel": "Descendre · Mouvement Intransitif (ÊTRE)",
    "scene": "apartment-living",
    "english": "She went down into the street.",
    "targetWords": [
      "Elle",
      "est",
      "descendue",
      "dans",
      "la",
      "rue"
    ],
    "fullSentence": "Elle est descendue dans la rue.",
    "distractors": [
      {
        "word": "a",
        "trap": "auxiliary_shift",
        "tip": "Auxiliary Error: Going downstairs yourself is movement: use ÊTRE (est descendue)!"
      },
      {
        "word": "descendu",
        "trap": "missing_agreement",
        "tip": "Agreement Error: \"Elle\" is feminine singular: add +e (descendue)!"
      }
    ],
    "purpose": "🎯 Movement Descendre: Going down oneself takes ÊTRE + (+e)",
    "purposeNote": "Starting Descendre Contrast: When the subject moves herself down the stairs or into the street, use auxiliary ÊTRE and agree in gender (+e).",
    "rule": "Intransitive \"descendre\" takes ÊTRE.",
    "nextPreview": "Next card: Taking the trash or luggage DOWN to the street—which auxiliary?",
    "chain": "descendre_etre_vs_avoir",
    "chainTitle": "🏠 Maison d’Être: Le Verbe \"Descendre\" (Mouvement Être vs Transitif Avoir)",
    "chainStep": 1,
    "chainTotal": 2,
    "chainType": "contrast"
  },
  {
    "id": "descendre_transitif_avoir",
    "topic": "maison",
    "structureId": "maison",
    "topicLabel": "Descendre · Transitif avec COD (AVOIR)",
    "scene": "dishes",
    "english": "She took down the trash into the street.",
    "targetWords": [
      "Elle",
      "a",
      "descendu",
      "les",
      "poubelles",
      "dans",
      "la",
      "rue"
    ],
    "fullSentence": "Elle a descendu les poubelles dans la rue.",
    "distractors": [
      {
        "word": "est",
        "trap": "auxiliary_shift",
        "tip": "Auxiliary Flip: \"les poubelles\" is a direct object! When descendre carries an object down, auxiliary flips to AVOIR (a descendu)!"
      },
      {
        "word": "descendue",
        "trap": "false_agreement",
        "tip": "Agreement Error: With AVOIR, the participle does NOT agree with the subject \"Elle\"!"
      }
    ],
    "purpose": "⚖️ Transitive Descendre: Carrying an object down flips auxiliary to AVOIR",
    "purposeNote": "Direct Contrast with Card 1: In Card 1, \"Elle est descendue\" (she went down). Here, what did she take down? \"Les poubelles\" (direct object). The auxiliary FLIPS to AVOIR (\"a descendu\") and does not agree with Elle!",
    "rule": "When \"descendre\" takes a direct object (COD), it conjugates with AVOIR: \"Elle a descendu les poubelles\".",
    "nextPreview": "Chain Complete! You have mastered both sides of \"descendre\".",
    "chain": "descendre_etre_vs_avoir",
    "chainTitle": "🏠 Maison d’Être: Le Verbe \"Descendre\" (Mouvement Être vs Transitif Avoir)",
    "chainStep": 2,
    "chainTotal": 2,
    "chainType": "contrast"
  },
  {
    "id": "neg_spec_pas",
    "topic": "neque",
    "structureId": "neque",
    "topicLabel": "Négation · Ne ... pas (Simple)",
    "scene": "bakery-croissant",
    "english": "I am not taking dessert after lunch.",
    "targetWords": [
      "Je",
      "ne",
      "prends",
      "pas",
      "de",
      "dessert",
      "après",
      "le",
      "déjeuner"
    ],
    "fullSentence": "Je ne prends pas de dessert après le déjeuner.",
    "distractors": [
      {
        "word": "du",
        "trap": "partitive_trap",
        "tip": "Partitive Trap: After negative \"pas\", partitives become \"de\"!"
      },
      {
        "word": "jamais",
        "trap": "polarity_mismatch",
        "tip": "Aspect Error: For this specific meal (\"not taking\"), use \"pas\", not \"jamais\"!"
      }
    ],
    "purpose": "🌱 Base Negation: Ne ... pas (not at this moment/generally)",
    "purposeNote": "Starting Negation Spectrum: \"Ne ... pas\" negates the action. Notice partitive \"du dessert\" becomes \"de dessert\".",
    "rule": "Sujet + ne + verbe + pas + de + nom.",
    "nextPreview": "Next card: Make it a permanent rule with zero frequency (\"never\")!",
    "chain": "negation_spectrum_four",
    "chainTitle": "🚫 Le Spectre des Négations: Pas vs Jamais vs Rien vs Que",
    "chainStep": 1,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "neg_spec_jamais",
    "topic": "neque",
    "structureId": "neque",
    "topicLabel": "Négation · Ne ... jamais (Fréquence zéro)",
    "scene": "coffee",
    "english": "I never take sugar in my tea.",
    "targetWords": [
      "Je",
      "ne",
      "prends",
      "jamais",
      "de",
      "sucre",
      "dans",
      "mon",
      "thé"
    ],
    "fullSentence": "Je ne prends jamais de sucre dans mon thé.",
    "distractors": [
      {
        "word": "pas",
        "trap": "frequency_error",
        "tip": "Frequency Error: For zero frequency (never), use \"jamais\", not \"pas\"!"
      },
      {
        "word": "du",
        "trap": "partitive_trap",
        "tip": "Partitive Trap: After negative \"jamais\", use \"de\", not \"du\"!"
      }
    ],
    "purpose": "⚖️ Frequency Negation: Ne ... jamais (at no point in time)",
    "purposeNote": "Contrast with Card 1: \"Ne ... pas\" = not now. \"Ne ... jamais\" = never in my life.",
    "rule": "Use \"ne ... jamais\" for zero frequency. Indefinite/partitives become \"de\".",
    "nextPreview": "Next card: Negating an object entirely to \"nothing\" (Ne ... rien)!",
    "chain": "negation_spectrum_four",
    "chainTitle": "🚫 Le Spectre des Négations: Pas vs Jamais vs Rien vs Que",
    "chainStep": 2,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "neg_spec_rien",
    "topic": "neque",
    "structureId": "neque",
    "topicLabel": "Négation · Ne ... rien (Zéro objet)",
    "scene": "sport",
    "english": "I take nothing before doing sports.",
    "targetWords": [
      "Je",
      "ne",
      "prends",
      "rien",
      "avant",
      "de",
      "faire",
      "du",
      "sport"
    ],
    "fullSentence": "Je ne prends rien avant de faire du sport.",
    "distractors": [
      {
        "word": "pas",
        "trap": "object_negation",
        "tip": "Meaning Error: For \"nothing\" (zero entity), use \"rien\", not \"pas\"!"
      },
      {
        "word": "de rien",
        "trap": "syntax_error",
        "tip": "Syntax Error: As a direct object, use \"rien\" directly: \"ne prends rien\", not \"de rien\"!"
      }
    ],
    "purpose": "⚖️ Entity Negation: Ne ... rien (nothing at all)",
    "purposeNote": "Contrast: \"Ne ... pas\" = not. \"Ne ... rien\" = nothing at all (replaces the direct object noun completely)!",
    "rule": "Use \"ne ... rien\" to express \"nothing\": \"Je ne prends rien\".",
    "nextPreview": "Next card: Flip from negative to restrictive: \"only\" (Ne ... que)!",
    "chain": "negation_spectrum_four",
    "chainTitle": "🚫 Le Spectre des Négations: Pas vs Jamais vs Rien vs Que",
    "chainStep": 3,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "neg_spec_que",
    "topic": "neque",
    "structureId": "neque",
    "topicLabel": "Négation Restrictive · Ne ... que (Only)",
    "scene": "groceries-cart",
    "english": "I only take one apple for my afternoon snack.",
    "targetWords": [
      "Je",
      "ne",
      "prends",
      "qu’une",
      "pomme",
      "pour",
      "le",
      "goûter"
    ],
    "fullSentence": "Je ne prends qu’une pomme pour le goûter.",
    "distractors": [
      {
        "word": "pas",
        "trap": "negation_type",
        "tip": "Meaning Error: \"ne prends pas\" means you eat NO apple! For \"only one apple\", use \"qu’une\"!"
      },
      {
        "word": "rien",
        "trap": "negation_type",
        "tip": "Meaning Error: \"rien\" means nothing! For \"only one\", use \"qu’une\"!"
      }
    ],
    "purpose": "⚖️ Restriction: Ne ... que (only / nothing but)",
    "purposeNote": "Spectrum Climax: Contrast with Cards 1–3: pas (not) ➜ jamais (never) ➜ rien (nothing) ➜ que (only / just)! Notice \"qu’une\" keeps the article \"une\", unlike negative \"pas\"!",
    "rule": "\"Ne ... que\" keeps full articles (qu’une pomme, que du pain) because it is a restriction, not an absolute negation.",
    "nextPreview": "Chain Complete! You have mastered the entire 4-part French negation spectrum.",
    "chain": "negation_spectrum_four",
    "chainTitle": "🚫 Le Spectre des Négations: Pas vs Jamais vs Rien vs Que",
    "chainStep": 4,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "cod_cycle_masc_le",
    "topic": "cod_coi",
    "structureId": "cod_coi",
    "topicLabel": "Pronom COD · Masculin Singulier (le)",
    "scene": "dress",
    "english": "This warm coat? I wear it every morning.",
    "targetWords": [
      "Ce",
      "manteau",
      "chaud",
      "?",
      "Je",
      "le",
      "mets",
      "tous",
      "les",
      "matins"
    ],
    "fullSentence": "Ce manteau chaud ? Je le mets tous les matins.",
    "distractors": [
      {
        "word": "la",
        "trap": "gender_mismatch",
        "tip": "Gender Error: \"manteau\" is masculine: use COD \"le\", not feminine \"la\"!"
      },
      {
        "word": "lui",
        "trap": "coi_error",
        "tip": "Category Error: \"Mettre\" takes a direct object (COD). Use \"le\", not indirect \"lui\"!"
      }
    ],
    "purpose": "🌱 Base COD: \"le\" for masculine singular noun (manteau)",
    "purposeNote": "Starting COD Pronoun Cycle: \"Manteau\" is masculine singular. The pronoun replacing it is \"le\", placed before the conjugated verb: \"Je le mets\".",
    "rule": "Use \"le\" to replace a masculine singular direct object.",
    "nextPreview": "Next card: Shift to feminine singular (cette écharpe)—which pronoun?",
    "chain": "cod_gender_number_cycle",
    "chainTitle": "🎯 Pronoms COD: Le Cycle Genre & Nombre (le ➜ la ➜ l’ ➜ les)",
    "chainStep": 1,
    "chainTotal": 4,
    "chainType": "subject_shift"
  },
  {
    "id": "cod_cycle_fem_la",
    "topic": "cod_coi",
    "structureId": "cod_coi",
    "topicLabel": "Pronom COD · Féminin Singulier (la)",
    "scene": "scarf",
    "english": "This wool scarf? I wear it when it is cold.",
    "targetWords": [
      "Cette",
      "écharpe",
      "en",
      "laine",
      "?",
      "Je",
      "la",
      "porte",
      "quand",
      "il",
      "fait",
      "froid"
    ],
    "fullSentence": "Cette écharpe en laine ? Je la porte quand il fait froid.",
    "distractors": [
      {
        "word": "le",
        "trap": "gender_mismatch",
        "tip": "Gender Error: \"écharpe\" is feminine: use COD \"la\", not masculine \"le\"!"
      },
      {
        "word": "lui",
        "trap": "coi_error",
        "tip": "Category Error: \"Porter\" takes a direct object (COD). Use \"la\", not indirect \"lui\"!"
      }
    ],
    "purpose": "🔄 Gender Shift: \"la\" for feminine singular noun (écharpe)",
    "purposeNote": "Notice the mutation from Card 1: \"Ce manteau\" ➜ \"le mets\". \"Cette écharpe\" ➜ \"la porte\". Feminine direct object uses \"la\"!",
    "rule": "Use \"la\" to replace a feminine singular direct object.",
    "nextPreview": "Next card: What happens before a verb starting with a vowel (l’adore)?",
    "chain": "cod_gender_number_cycle",
    "chainTitle": "🎯 Pronoms COD: Le Cycle Genre & Nombre (le ➜ la ➜ l’ ➜ les)",
    "chainStep": 2,
    "chainTotal": 4,
    "chainType": "subject_shift"
  },
  {
    "id": "cod_cycle_vowel_elision",
    "topic": "cod_coi",
    "structureId": "cod_coi",
    "topicLabel": "Pronom COD · Élision devant Voyelle (l’)",
    "scene": "apartment-living",
    "english": "This bright apartment? I love it.",
    "targetWords": [
      "Cet",
      "appartement",
      "lumineux",
      "?",
      "Je",
      "l’adore"
    ],
    "fullSentence": "Cet appartement lumineux ? Je l’adore.",
    "distractors": [
      {
        "word": "le adore",
        "trap": "elision_missing",
        "tip": "Elision Error: \"le\" and \"la\" MUST elide to \"l’\" before a vowel: \"Je l’adore\"!"
      },
      {
        "word": "lui",
        "trap": "coi_error",
        "tip": "Category Error: Adorer takes a direct object: use \"l’\", not \"lui\"!"
      }
    ],
    "purpose": "🔄 Elision: \"le\" and \"la\" elide to \"l’\" before vowels",
    "purposeNote": "Observe the vowel collision: Before \"adore\", both \"le\" and \"la\" contract into \"l’\": \"Je l’adore\"!",
    "rule": "Before vowels and silent h, \"le\" and \"la\" become \"l’\": \"Je l’adore\".",
    "nextPreview": "Next card: Shift to plural (ces gants / ces clés)—which pronoun replaces both genders?",
    "chain": "cod_gender_number_cycle",
    "chainTitle": "🎯 Pronoms COD: Le Cycle Genre & Nombre (le ➜ la ➜ l’ ➜ les)",
    "chainStep": 3,
    "chainTotal": 4,
    "chainType": "subject_shift"
  },
  {
    "id": "cod_cycle_plural_les",
    "topic": "cod_coi",
    "structureId": "cod_coi",
    "topicLabel": "Pronom COD · Pluriel (les)",
    "scene": "gloceries-cart",
    "english": "These leather gloves? I put them away in my drawer.",
    "targetWords": [
      "Ces",
      "gants",
      "en",
      "cuir",
      "?",
      "Je",
      "les",
      "range",
      "dans",
      "mon",
      "tiroir"
    ],
    "fullSentence": "Ces gants en cuir ? Je les range dans mon tiroir.",
    "distractors": [
      {
        "word": "leur",
        "trap": "coi_error",
        "tip": "Category Error: \"Ranger\" takes a direct object! Use COD \"les\", not indirect \"leur\"!"
      },
      {
        "word": "le",
        "trap": "number_mismatch",
        "tip": "Number Error: \"gants\" is plural: use \"les\", not singular \"le\"!"
      }
    ],
    "purpose": "🔄 Number Shift: \"les\" replaces both masculine and feminine plurals",
    "purposeNote": "Plural Unification: In the plural, gender distinctions disappear: both masculine and feminine plural nouns are replaced by \"les\": \"Je les range\"!",
    "rule": "Use \"les\" to replace all plural direct objects.",
    "nextPreview": "Chain Complete! You have mastered all 4 COD pronoun forms.",
    "chain": "cod_gender_number_cycle",
    "chainTitle": "🎯 Pronoms COD: Le Cycle Genre & Nombre (le ➜ la ➜ l’ ➜ les)",
    "chainStep": 4,
    "chainTotal": 4,
    "chainType": "subject_shift"
  },
  {
    "id": "coi_cycle_pere_lui",
    "topic": "cod_coi",
    "structureId": "cod_coi",
    "topicLabel": "Pronom COI · Homme Singulier (lui)",
    "scene": "cinema",
    "english": "To my father? I send him a message every morning.",
    "targetWords": [
      "À",
      "mon",
      "père",
      "?",
      "Je",
      "lui",
      "envoie",
      "un",
      "message",
      "chaque",
      "matin"
    ],
    "fullSentence": "À mon père ? Je lui envoie un message chaque matin.",
    "distractors": [
      {
        "word": "le",
        "trap": "cod_for_coi",
        "tip": "Category Error: One says \"envoyer À quelqu’un\" (indirect object)! Use COI \"lui\", not COD \"le\"!"
      },
      {
        "word": "à lui",
        "trap": "disjunctive_error",
        "tip": "Syntax Tip: Use the clitic pronoun \"lui\" before the verb, not \"à lui\" after!"
      }
    ],
    "purpose": "🎯 COI Singular Male: \"lui\" for \"à mon père\"",
    "purposeNote": "Starting COI Chain: \"Envoyer un message À quelqu’un\". Because of preposition \"à\", the recipient is replaced by COI pronoun \"lui\" before the verb.",
    "rule": "Use \"lui\" to replace \"à + personne masculine\".",
    "nextPreview": "Next card: What pronoun replaces a woman (à ma mère)? (Prepare to be amazed!)",
    "chain": "coi_singular_vs_plural",
    "chainTitle": "🎯 Pronoms COI: Le Cycle Indirect (lui pour homme & femme ➜ leur pour pluriel)",
    "chainStep": 1,
    "chainTotal": 3,
    "chainType": "contrast"
  },
  {
    "id": "coi_cycle_mere_lui_same",
    "topic": "cod_coi",
    "structureId": "cod_coi",
    "topicLabel": "Pronom COI · Femme Singulier (lui aussi !)",
    "scene": "cinema",
    "english": "To my mother? I send her a message as well.",
    "targetWords": [
      "À",
      "ma",
      "mère",
      "?",
      "Je",
      "lui",
      "envoie",
      "aussi",
      "un",
      "message"
    ],
    "fullSentence": "À ma mère ? Je lui envoie aussi un message.",
    "distractors": [
      {
        "word": "la",
        "trap": "cod_for_coi",
        "tip": "Classic English Trap: In English we say \"her\", but French COI does not have gender! \"Lui\" is used for BOTH him and her!"
      },
      {
        "word": "à elle",
        "trap": "disjunctive_error",
        "tip": "Syntax Tip: French uses \"lui\" before the verb, never \"à elle\"!"
      }
    ],
    "purpose": "⚠️ Genderless Surprise: \"Lui\" is used for BOTH men and women!",
    "purposeNote": "Shocking English Trap: In English, you say \"to HIM\" vs \"to HER\". But French COI has NO gender! \"Lui\" means both \"to him\" AND \"to her\": \"Je lui envoie\"!",
    "rule": "In French, COI \"lui\" is completely genderless: it replaces both \"à lui\" and \"à elle\".",
    "nextPreview": "Next card: Shift to plural recipients (à mes collègues / à mes parents)—which pronoun?",
    "chain": "coi_singular_vs_plural",
    "chainTitle": "🎯 Pronoms COI: Le Cycle Indirect (lui pour homme & femme ➜ leur pour pluriel)",
    "chainStep": 2,
    "chainTotal": 3,
    "chainType": "contrast"
  },
  {
    "id": "coi_cycle_collegues_leur",
    "topic": "cod_coi",
    "structureId": "cod_coi",
    "topicLabel": "Pronom COI · Pluriel (leur - invariable)",
    "scene": "work",
    "english": "To my colleagues? I explain the new rule to them.",
    "targetWords": [
      "À",
      "mes",
      "collègues",
      "?",
      "Je",
      "leur",
      "explique",
      "la",
      "nouvelle",
      "règle"
    ],
    "fullSentence": "À mes collègues ? Je leur explique la nouvelle règle.",
    "distractors": [
      {
        "word": "les",
        "trap": "cod_for_coi",
        "tip": "Category Error: One says \"expliquer À quelqu’un\"! Use COI \"leur\", not COD \"les\"!"
      },
      {
        "word": "leurs",
        "trap": "spelling_trap",
        "tip": "Grammar Trap: Pronoun \"leur\" is 100% INVARIABLE! It NEVER takes an \"s\" as a pronoun (only as a possessive adjective)!"
      }
    ],
    "purpose": "🔄 Number Shift: \"leur\" replaces plural recipients (never ends in s!)",
    "purposeNote": "Contrast with Cards 1 & 2: Singular = \"lui\". Plural = \"leur\". And notice: as a pronoun, \"leur\" is strictly INVARIABLE—never write \"leurs\" before a verb!",
    "rule": "Use \"leur\" (never leurs) to replace \"à + personnes au pluriel\": \"Je leur explique\".",
    "nextPreview": "Chain Complete! You have mastered the entire COI pronoun system.",
    "chain": "coi_singular_vs_plural",
    "chainTitle": "🎯 Pronoms COI: Le Cycle Indirect (lui pour homme & femme ➜ leur pour pluriel)",
    "chainStep": 3,
    "chainTotal": 3,
    "chainType": "contrast"
  },
  {
    "id": "seq_etape1_dabord",
    "topic": "sequence",
    "structureId": "sequence",
    "topicLabel": "Chronologie · Étape 1 (D’abord)",
    "scene": "wake",
    "english": "First, I wake up at six-thirty.",
    "targetWords": [
      "D’abord",
      "je",
      "me",
      "réveille",
      "à",
      "six",
      "heures",
      "et",
      "demie"
    ],
    "fullSentence": "D’abord je me réveille à six heures et demie.",
    "distractors": [
      {
        "word": "ensuite",
        "trap": "sequence_order",
        "tip": "Sequence Error: The chronological opener is \"D’abord\" (First of all)!"
      },
      {
        "word": "enfin",
        "trap": "sequence_order",
        "tip": "Sequence Error: \"Enfin\" is for the final step, not the opening!"
      }
    ],
    "purpose": "🎯 Step 1: Opening chronological sequence with \"D’abord\"",
    "purposeNote": "Starting Daily Chronology Chain (from your A1.3 PDF): To structure a spoken timeline, begin with \"D’abord\" (First of all).",
    "rule": "Use \"D’abord\" to introduce the initial action of a sequence.",
    "nextPreview": "Next card: Step 2—connecting the next action with \"Ensuite\"!",
    "chain": "chronologie_daily_routine",
    "chainTitle": "⏱️ Chronologie du Matin: D’abord ➜ Ensuite ➜ Avant de ➜ Enfin (A1.3 PDF)",
    "chainStep": 1,
    "chainTotal": 4,
    "chainType": "complexity"
  },
  {
    "id": "seq_etape2_ensuite",
    "topic": "sequence",
    "structureId": "sequence",
    "topicLabel": "Chronologie · Étape 2 (Ensuite)",
    "scene": "coffee",
    "english": "Then, I drink a good cup of black coffee in the kitchen.",
    "targetWords": [
      "Ensuite",
      "je",
      "bois",
      "un",
      "bon",
      "café",
      "noir",
      "dans",
      "la",
      "cuisine"
    ],
    "fullSentence": "Ensuite je bois un bon café noir dans la cuisine.",
    "distractors": [
      {
        "word": "d’abord",
        "trap": "sequence_order",
        "tip": "Sequence Error: \"D’abord\" was used in Step 1! For the next step, use \"Ensuite\"!"
      },
      {
        "word": "enfin",
        "trap": "sequence_order",
        "tip": "Sequence Error: \"Enfin\" is only for the conclusion!"
      }
    ],
    "purpose": "🔄 Step 2: Progressing the sequence with \"Ensuite\"",
    "purposeNote": "Contrast with Step 1: D’abord (first) ➜ Ensuite / Puis (then, next).",
    "rule": "Use \"Ensuite\" or \"Puis\" to transition to the subsequent action.",
    "nextPreview": "Next card: Step 3—inserting an action that happens beforehand with \"Avant de + infinitif\"!",
    "chain": "chronologie_daily_routine",
    "chainTitle": "⏱️ Chronologie du Matin: D’abord ➜ Ensuite ➜ Avant de ➜ Enfin (A1.3 PDF)",
    "chainStep": 2,
    "chainTotal": 4,
    "chainType": "complexity"
  },
  {
    "id": "seq_etape3_avant_de",
    "topic": "sequence",
    "structureId": "sequence",
    "topicLabel": "Chronologie · Étape 3 (Avant de + Infinitif)",
    "scene": "walk",
    "english": "Before leaving for work, I double-check my keys.",
    "targetWords": [
      "Avant",
      "de",
      "partir",
      "au",
      "travail",
      "je",
      "vérifie",
      "mes",
      "clés"
    ],
    "fullSentence": "Avant de partir au travail je vérifie mes clés.",
    "distractors": [
      {
        "word": "avant que",
        "trap": "clause_error",
        "tip": "Syntax Error: Same subject uses \"avant de + infinitif\", not \"avant que\"!"
      },
      {
        "word": "après de",
        "trap": "syntax_error",
        "tip": "Preposition Error: Never say \"après de\"! For before, use \"avant de\"!"
      }
    ],
    "purpose": "🔄 Step 3: Action done beforehand with \"Avant de + infinitif\"",
    "purposeNote": "Notice the connector: \"Avant de + infinitif\" integrates an action performed prior to departure.",
    "rule": "Formula: Avant de + infinitif.",
    "nextPreview": "Next card: Step 4—concluding the journey with \"Enfin\"!",
    "chain": "chronologie_daily_routine",
    "chainTitle": "⏱️ Chronologie du Matin: D’abord ➜ Ensuite ➜ Avant de ➜ Enfin (A1.3 PDF)",
    "chainStep": 3,
    "chainTotal": 4,
    "chainType": "complexity"
  },
  {
    "id": "seq_etape4_enfin",
    "topic": "sequence",
    "structureId": "sequence",
    "topicLabel": "Chronologie · Étape 4 (Enfin)",
    "scene": "train-station",
    "english": "Finally, I catch the eight o’clock bus.",
    "targetWords": [
      "Enfin",
      "je",
      "prends",
      "le",
      "bus",
      "de",
      "huit",
      "heures"
    ],
    "fullSentence": "Enfin je prends le bus de huit heures.",
    "distractors": [
      {
        "word": "d’abord",
        "trap": "sequence_order",
        "tip": "Sequence Error: \"D’abord\" is for the beginning!"
      },
      {
        "word": "ensuite",
        "trap": "sequence_order",
        "tip": "Sequence Error: For the final concluding action, use \"Enfin\"!"
      }
    ],
    "purpose": "🏁 Step 4: Concluding the narrative sequence with \"Enfin\"",
    "purposeNote": "Sequence Finale: D’abord ➜ Ensuite ➜ Avant de ➜ Enfin (Finally / At last). You have constructed a complete natural French narrative!",
    "rule": "Use \"Enfin\" to state the concluding action of a timeline.",
    "nextPreview": "Chain Complete! You master chronological discourse connectors.",
    "chain": "chronologie_daily_routine",
    "chainTitle": "⏱️ Chronologie du Matin: D’abord ➜ Ensuite ➜ Avant de ➜ Enfin (A1.3 PDF)",
    "chainStep": 4,
    "chainTotal": 4,
    "chainType": "complexity"
  },
  {
    "id": "proc_etape1_constat",
    "topic": "repairs",
    "structureId": "repairs",
    "topicLabel": "Sinistre Logement · Étape 1 (Constater)",
    "scene": "plumber-repair",
    "english": "There is a major water leak under the bathroom sink.",
    "targetWords": [
      "Il",
      "y",
      "a",
      "une",
      "fuite",
      "d’eau",
      "importante",
      "sous",
      "le",
      "lavabo"
    ],
    "fullSentence": "Il y a une fuite d’eau importante sous le lavabo.",
    "distractors": [
      {
        "word": "un fuite",
        "trap": "gender_error",
        "tip": "Gender Error: \"fuite\" is feminine: \"une fuite d’eau\"!"
      },
      {
        "word": "évier",
        "trap": "vocabulary_precision",
        "tip": "Vocabulary Note: In the bathroom it is \"un lavabo\"; in the kitchen it is \"un évier\"!"
      }
    ],
    "purpose": "🎯 Step 1: Identifying and declaring a leak (lavabo vs évier)",
    "purposeNote": "Starting Repair Protocol Chain: Learn French vocabulary precision from A1.3 PDF: bathroom washbasin = \"le lavabo\"; kitchen sink = \"l’évier\".",
    "rule": "\"Le lavabo\" (bathroom) vs \"l’évier\" (kitchen). \"La fuite d’eau\" is feminine.",
    "nextPreview": "Next card: Step 2—taking immediate preventive action (shutting off the valve)!",
    "chain": "repairs_procedure_tenant_law",
    "chainTitle": "🔧 Procédure Sinistre Logement: Constat ➜ Mesure d’Urgence ➜ Répartition Légale (A1.3 PDF)",
    "chainStep": 1,
    "chainTotal": 4,
    "chainType": "complexity"
  },
  {
    "id": "proc_etape2_urgence",
    "topic": "repairs",
    "structureId": "repairs",
    "topicLabel": "Sinistre Logement · Étape 2 (Mesure d’Urgence)",
    "scene": "plumber-repair",
    "english": "You must turn off the main water valve immediately.",
    "targetWords": [
      "Il",
      "faut",
      "fermer",
      "la",
      "vanne",
      "générale",
      "immédiatement"
    ],
    "fullSentence": "Il faut fermer la vanne générale immédiatement.",
    "distractors": [
      {
        "word": "ferme",
        "trap": "syntax_error",
        "tip": "Syntax Error: After \"il faut\", use infinitive (fermer)!"
      },
      {
        "word": "le vanne",
        "trap": "gender_error",
        "tip": "Gender Error: \"vanne\" is feminine: \"la vanne générale\"!"
      }
    ],
    "purpose": "🔄 Step 2: Emergency action (fermer la vanne générale)",
    "purposeNote": "Emergency vocabulary from A1.3 PDF: To stop flooding, you must close the main shut-off valve (\"fermer la vanne générale\").",
    "rule": "Use \"fermer la vanne générale\" for emergency water shut-off.",
    "nextPreview": "Next card: Step 3—notifying the landlord in writing!",
    "chain": "repairs_procedure_tenant_law",
    "chainTitle": "🔧 Procédure Sinistre Logement: Constat ➜ Mesure d’Urgence ➜ Répartition Légale (A1.3 PDF)",
    "chainStep": 2,
    "chainTotal": 4,
    "chainType": "complexity"
  },
  {
    "id": "proc_etape3_prevenir",
    "topic": "repairs",
    "structureId": "repairs",
    "topicLabel": "Sinistre Logement · Étape 3 (Informer)",
    "scene": "write",
    "english": "The tenant must notify the landlord by written email.",
    "targetWords": [
      "Le",
      "locataire",
      "doit",
      "prévenir",
      "le",
      "propriétaire",
      "par",
      "courriel",
      "écrit"
    ],
    "fullSentence": "Le locataire doit prévenir le propriétaire par courriel écrit.",
    "distractors": [
      {
        "word": "propriétaire doit",
        "trap": "role_reversal",
        "tip": "Role Error: The tenant living in the apartment must notify the landlord, not the other way around!"
      },
      {
        "word": "prévient",
        "trap": "syntax_error",
        "tip": "Syntax Error: Modal \"doit\" takes the infinitive (prévenir)!"
      }
    ],
    "purpose": "🔄 Step 3: Legal notification obligation (prévenir le propriétaire)",
    "purposeNote": "Tenant Duty: Rental law requires the tenant to notify the landlord promptly in writing (\"prévenir par courriel\").",
    "rule": "Use \"prévenir quelqu’un par courriel\" for formal notice.",
    "nextPreview": "Next card: Step 4—if the pipe is rusted, who pays the plumber’s quote?",
    "chain": "repairs_procedure_tenant_law",
    "chainTitle": "🔧 Procédure Sinistre Logement: Constat ➜ Mesure d’Urgence ➜ Répartition Légale (A1.3 PDF)",
    "chainStep": 3,
    "chainTotal": 4,
    "chainType": "complexity"
  },
  {
    "id": "proc_etape4_devis",
    "topic": "repairs",
    "structureId": "repairs",
    "topicLabel": "Sinistre Logement · Étape 4 (Facturation & Responsabilité)",
    "scene": "plumber-repair",
    "english": "If the pipe is rusted, the landlord pays the quote.",
    "targetWords": [
      "Si",
      "la",
      "canalisation",
      "est",
      "rouillée",
      "le",
      "propriétaire",
      "paie",
      "le",
      "devis"
    ],
    "fullSentence": "Si la canalisation est rouillée le propriétaire paie le devis.",
    "distractors": [
      {
        "word": "locataire",
        "trap": "legal_responsibility",
        "tip": "Legal Rule: Rusted, burst, or aged pipes (vétusté) are paid by the landlord (propriétaire), not the tenant!"
      },
      {
        "word": "le facture",
        "trap": "gender_error",
        "tip": "Vocabulary: \"le devis\" is the quote before work; \"la facture\" is feminine!"
      }
    ],
    "purpose": "⚖️ Step 4: Final legal responsibility (vétusté ➜ propriétaire)",
    "purposeNote": "Legal Summary: Rusted pipes (\"canalisation rouillée\") fall under wear-and-tear/vétusté. The owner must pay the plumber’s quote (\"paie le devis\").",
    "rule": "Major plumbing and pipe decay is legally paid by the property owner.",
    "nextPreview": "Chain Complete! You have mastered the full French rental repair procedure.",
    "chain": "repairs_procedure_tenant_law",
    "chainTitle": "🔧 Procédure Sinistre Logement: Constat ➜ Mesure d’Urgence ➜ Répartition Légale (A1.3 PDF)",
    "chainStep": 4,
    "chainTotal": 4,
    "chainType": "complexity"
  },
  {
    "id": "refl_tenses_present",
    "topic": "reflexive",
    "structureId": "reflexive",
    "topicLabel": "Verbe Réflexif · Présent Habituel",
    "scene": "bedtime",
    "english": "I usually go to bed around eleven o’clock.",
    "targetWords": [
      "D’habitude",
      "je",
      "me",
      "couche",
      "vers",
      "onze",
      "heures"
    ],
    "fullSentence": "D’habitude je me couche vers onze heures.",
    "distractors": [
      {
        "word": "me suis couché",
        "trap": "tense_error",
        "tip": "Tense Error: \"D’habitude\" indicates a regular present habit: use present \"me couche\", not past!"
      },
      {
        "word": "vais me coucher",
        "trap": "tense_error",
        "tip": "Tense Error: Habitual action uses simple present!"
      }
    ],
    "purpose": "🌱 Present Habit: \"Je me couche\" (habitual present tense)",
    "purposeNote": "Starting Reflexive Tense Triad: In the present, the reflexive pronoun sits right before the conjugated verb: \"je me couche\".",
    "rule": "Present reflexive: Sujet + [me/te/se] + verbe au présent.",
    "nextPreview": "Next card: Shift to what happened last night in the Passé Composé!",
    "chain": "refl_tenses_triad",
    "chainTitle": "🛏️ Verbe Réflexif: La Frise des Temps (Présent ➜ Passé Composé ➜ Futur Proche)",
    "chainStep": 1,
    "chainTotal": 3,
    "chainType": "contrast"
  },
  {
    "id": "refl_tenses_passe",
    "topic": "reflexive",
    "structureId": "reflexive",
    "topicLabel": "Verbe Réflexif · Passé Composé (ÊTRE)",
    "scene": "bedtime",
    "english": "Yesterday evening, I went to bed around eleven o’clock. (male speaker)",
    "targetWords": [
      "Hier",
      "soir",
      "je",
      "me",
      "suis",
      "couché",
      "vers",
      "onze",
      "heures"
    ],
    "fullSentence": "Hier soir je me suis couché vers onze heures.",
    "distractors": [
      {
        "word": "ai couché",
        "trap": "auxiliary_error",
        "tip": "Auxiliary Error: Reflexive verbs always take ÊTRE (me suis couché), never AVOIR!"
      },
      {
        "word": "couchée",
        "trap": "gender_agreement",
        "tip": "Gender Agreement: Male speaker does not take +e!"
      }
    ],
    "purpose": "🔄 Tense Shift: Present ➜ Passé Composé (Auxiliary ÊTRE inserted)",
    "purposeNote": "Notice the mutation from Card 1: \"je me couche\" becomes \"je me suis couché\". Auxiliary ÊTRE is inserted between pronoun and participle!",
    "rule": "Passé Composé reflexive: Sujet + [me/te/se] + ÊTRE (présent) + participe passé.",
    "nextPreview": "Next card: Shift to tonight’s upcoming plan in the Futur Proche!",
    "chain": "refl_tenses_triad",
    "chainTitle": "🛏️ Verbe Réflexif: La Frise des Temps (Présent ➜ Passé Composé ➜ Futur Proche)",
    "chainStep": 2,
    "chainTotal": 3,
    "chainType": "contrast"
  },
  {
    "id": "refl_tenses_futur",
    "topic": "reflexive",
    "structureId": "reflexive",
    "topicLabel": "Verbe Réflexif · Futur Proche (Aller + me coucher)",
    "scene": "bedtime",
    "english": "Tonight, I am going to go to bed around eleven o’clock.",
    "targetWords": [
      "Ce",
      "soir",
      "je",
      "vais",
      "me",
      "coucher",
      "vers",
      "onze",
      "heures"
    ],
    "fullSentence": "Ce soir je vais me coucher vers onze heures.",
    "distractors": [
      {
        "word": "me vais coucher",
        "trap": "pronoun_placement",
        "tip": "Placement Error: In Futur Proche, the reflexive pronoun goes directly before the INFINITIVE: \"vais ME coucher\", never \"me vais\"!"
      },
      {
        "word": "vais coucher",
        "trap": "missing_reflexive",
        "tip": "Pronoun Error: The reflexive pronoun \"me\" cannot be omitted: \"vais me coucher\"!"
      }
    ],
    "purpose": "🔄 Tense Shift: Passé Composé ➜ Futur Proche (Pronoun sits before infinitive)",
    "purposeNote": "Crucial Comparison: Present: \"je me couche\". Past: \"je me suis couché\". Future: \"je vais ME coucher\"! Notice the pronoun always attaches to its infinitive in compound future!",
    "rule": "Futur Proche reflexive: Sujet + aller (présent) + [me/te/se] + infinitif.",
    "nextPreview": "Chain Complete! You master reflexive verbs across the past, present, and future.",
    "chain": "refl_tenses_triad",
    "chainTitle": "🛏️ Verbe Réflexif: La Frise des Temps (Présent ➜ Passé Composé ➜ Futur Proche)",
    "chainStep": 3,
    "chainTotal": 3,
    "chainType": "contrast"
  },
  {
    "id": "interdict_level_priere",
    "topic": "rules",
    "structureId": "rules",
    "topicLabel": "Niveau 1 · Demande Polie (Prière de)",
    "scene": "apartment-living",
    "english": "Please lock the front door with the key.",
    "targetWords": [
      "Prière",
      "de",
      "fermer",
      "la",
      "porte",
      "d’entrée",
      "à",
      "clé"
    ],
    "fullSentence": "Prière de fermer la porte d’entrée à clé.",
    "distractors": [
      {
        "word": "à fermer",
        "trap": "preposition_error",
        "tip": "Preposition Error: The formula is \"Prière DE + infinitif\", never \"à\"!"
      },
      {
        "word": "fermez",
        "trap": "syntax_error",
        "tip": "Syntax Error: After \"Prière de\", the verb must be in the infinitive (fermer)!"
      }
    ],
    "purpose": "🎯 Level 1: Gentle courtesy on signs (\"Prière de + infinitif\")",
    "purposeNote": "Starting Interdiction Intensity Scale: \"Prière de + infinitif\" is polite, respectful, and standard for everyday residential signs.",
    "rule": "Formula: \"Prière de + infinitif\" = courteous request.",
    "nextPreview": "Next card: Level 2—increasing intensity to civic necessity with \"Il faut\"!",
    "chain": "interdiction_levels",
    "chainTitle": "📋 Niveaux d’Interdiction: Politesse (Prière de) vs Nécessité (Il faut) vs Loi (Interdit)",
    "chainStep": 1,
    "chainTotal": 3,
    "chainType": "contrast"
  },
  {
    "id": "interdict_level_il_faut",
    "topic": "rules",
    "structureId": "rules",
    "topicLabel": "Niveau 2 · Obligation Civique (Il faut)",
    "scene": "bedtime",
    "english": "You must respect the peace of the neighbors at night.",
    "targetWords": [
      "Il",
      "faut",
      "respecter",
      "le",
      "repos",
      "des",
      "voisins",
      "la",
      "nuit"
    ],
    "fullSentence": "Il faut respecter le repos des voisins la nuit.",
    "distractors": [
      {
        "word": "respecte",
        "trap": "syntax_error",
        "tip": "Syntax Error: \"Il faut\" takes the infinitive (respecter)!"
      },
      {
        "word": "de les",
        "trap": "contraction_trap",
        "tip": "Contraction Trap: \"de + les voisins\" contracts to \"des voisins\"!"
      }
    ],
    "purpose": "⚖️ Level 2: Civic necessity with \"Il faut + infinitif\"",
    "purposeNote": "Contrast with Level 1: \"Il faut\" moves beyond polite requests into shared community necessity.",
    "rule": "Formula: \"Il faut + infinitif\" = shared necessity.",
    "nextPreview": "Next card: Level 3—maximum intensity with strict legal prohibition!",
    "chain": "interdiction_levels",
    "chainTitle": "📋 Niveaux d’Interdiction: Politesse (Prière de) vs Nécessité (Il faut) vs Loi (Interdit)",
    "chainStep": 2,
    "chainTotal": 3,
    "chainType": "contrast"
  },
  {
    "id": "interdict_level_strictement_interdit",
    "topic": "rules",
    "structureId": "rules",
    "topicLabel": "Niveau 3 · Interdiction Légale Stricte (Strictement Interdit)",
    "scene": "apartment-living",
    "english": "It is strictly forbidden to block the entrance hall with bicycles.",
    "targetWords": [
      "Il",
      "est",
      "strictement",
      "interdit",
      "de",
      "bloquer",
      "le",
      "hall",
      "avec",
      "des",
      "vélos"
    ],
    "fullSentence": "Il est strictement interdit de bloquer le hall avec des vélos.",
    "distractors": [
      {
        "word": "à bloquer",
        "trap": "preposition_error",
        "tip": "Preposition Error: The formula is \"interdit DE + infinitif\", never \"à\"!"
      },
      {
        "word": "bloque",
        "trap": "syntax_error",
        "tip": "Syntax Error: Requires infinitive (bloquer)!"
      }
    ],
    "purpose": "⚖️ Level 3: Strict legal prohibition (\"Il est strictement interdit de\")",
    "purposeNote": "Scale Climax: Prière de (polite) ➜ Il faut (necessary) ➜ Il est strictement interdit de (legal ban with penalties)!",
    "rule": "Formula: \"Il est (strictement) interdit de + infinitif\" = legal prohibition.",
    "nextPreview": "Chain Complete! You have mastered the entire intensity spectrum of French rules.",
    "chain": "interdiction_levels",
    "chainTitle": "📋 Niveaux d’Interdiction: Politesse (Prière de) vs Nécessité (Il faut) vs Loi (Interdit)",
    "chainStep": 3,
    "chainTotal": 3,
    "chainType": "contrast"
  },
  {
    "id": "cs_je_connaitre_resto",
    "topic": "connaitre_savoir",
    "structureId": "connaitre_savoir",
    "topicLabel": "Connaître + Lieu · Sujet Je",
    "scene": "resto-ordering",
    "english": "I know this friendly bistro very well.",
    "targetWords": [
      "Je",
      "connais",
      "très",
      "bien",
      "ce",
      "bistro",
      "chaleureux"
    ],
    "fullSentence": "Je connais très bien ce bistro chaleureux.",
    "distractors": [
      {
        "word": "sais",
        "trap": "savoir_for_place",
        "tip": "Place Trap: A restaurant is a place/establishment! Use \"Connaître\", not \"Savoir\"!"
      },
      {
        "word": "connais à",
        "trap": "preposition_error",
        "tip": "Preposition Error: \"Connaître\" connects directly to the noun without \"à\"!"
      }
    ],
    "purpose": "🎯 Connaître + Lieu: Familiarity with a place using \"Je connais\"",
    "purposeNote": "Starting Connaître vs Savoir Cycle: Knowing an establishment or restaurant is always \"Connaître\".",
    "rule": "Formula: Je connais + lieu/établissement.",
    "nextPreview": "Next card: Knowing how to order food in that restaurant (verb/skill)—which verb?",
    "chain": "connaitre_savoir_subjects_cycle",
    "chainTitle": "💡 Connaître vs Savoir: Alternance des Sujets (Je ➜ Vous ➜ Nom vs Verbe)",
    "chainStep": 1,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "cs_je_savoir_commander",
    "topic": "connaitre_savoir",
    "structureId": "connaitre_savoir",
    "topicLabel": "Savoir + Infinitif · Savoir Commander",
    "scene": "resto-ordering",
    "english": "I know how to order in French without hesitation.",
    "targetWords": [
      "Je",
      "sais",
      "commander",
      "en",
      "français",
      "sans",
      "hésiter"
    ],
    "fullSentence": "Je sais commander en français sans hésiter.",
    "distractors": [
      {
        "word": "connais",
        "trap": "connaitre_with_verb",
        "tip": "Verb Error: \"Connaître\" is NEVER followed by an infinitive verb! Use \"Savoir\" for skills!"
      },
      {
        "word": "sais à",
        "trap": "preposition_error",
        "tip": "Preposition Error: \"Savoir\" connects directly to the infinitive without \"à\"!"
      }
    ],
    "purpose": "⚖️ Savoir + Infinitif: Knowing how to perform an action using \"Je sais\"",
    "purposeNote": "Direct Contrast with Card 1: Card 1 had a noun (ce bistro ➜ je connais). Here you have an INFINITIVE (commander ➜ je sais)!",
    "rule": "Formula: Je sais + infinitif.",
    "nextPreview": "Next card: Shift to \"Vous\"—knowing a person (le directeur)!",
    "chain": "connaitre_savoir_subjects_cycle",
    "chainTitle": "💡 Connaître vs Savoir: Alternance des Sujets (Je ➜ Vous ➜ Nom vs Verbe)",
    "chainStep": 2,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "cs_vous_connaitre_directeur",
    "topic": "connaitre_savoir",
    "structureId": "connaitre_savoir",
    "topicLabel": "Connaître + Personne · Sujet Vous",
    "scene": "work",
    "english": "Do you know the school principal?",
    "targetWords": [
      "Vous",
      "connaissez",
      "le",
      "directeur",
      "de",
      "l’école",
      "?"
    ],
    "fullSentence": "Vous connaissez le directeur de l’école ?",
    "distractors": [
      {
        "word": "savez",
        "trap": "savoir_with_person",
        "tip": "Human Object Trap: People are NEVER \"sus\"! You must use \"Connaître\" (Vous connaissez)!"
      },
      {
        "word": "connaissez à",
        "trap": "preposition_error",
        "tip": "Preposition Error: Direct object without preposition!"
      }
    ],
    "purpose": "🔄 Person Contrast with Vous: People are always \"connus\"",
    "purposeNote": "Notice the mutation: Subject is \"Vous\" (connaissez), and the object is a person (le directeur ➜ Connaître).",
    "rule": "Formula: Vous connaissez + personne.",
    "nextPreview": "Next card: Shift to \"Vous\"—knowing what time the meeting starts (fact/clause)!",
    "chain": "connaitre_savoir_subjects_cycle",
    "chainTitle": "💡 Connaître vs Savoir: Alternance des Sujets (Je ➜ Vous ➜ Nom vs Verbe)",
    "chainStep": 3,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "cs_vous_savoir_reunion",
    "topic": "connaitre_savoir",
    "structureId": "connaitre_savoir",
    "topicLabel": "Savoir + Proposition Fait · Sujet Vous",
    "scene": "work",
    "english": "Do you know what time the team meeting begins?",
    "targetWords": [
      "Vous",
      "savez",
      "à",
      "quelle",
      "heure",
      "commence",
      "la",
      "réunion",
      "?"
    ],
    "fullSentence": "Vous savez à quelle heure commence la réunion ?",
    "distractors": [
      {
        "word": "connaissez",
        "trap": "connaitre_with_clause",
        "tip": "Clause Error: Factual question clauses take \"Savoir\" (Vous savez), never \"Connaître\"!"
      },
      {
        "word": "savez que",
        "trap": "redundancy",
        "tip": "Syntax Error: \"à quelle heure\" already introduces the clause!"
      }
    ],
    "purpose": "⚖️ Factual Clause with Vous: Knowing a time/schedule with \"Vous savez\"",
    "purposeNote": "Final Contrast: Card 3 had a person (connaissez le directeur). Here you have a time clause (à quelle heure commence ➜ vous savez)!",
    "rule": "Formula: Vous savez + subordonnée (à quelle heure / quand / où).",
    "nextPreview": "Chain Complete! You have mastered the subject and object dualities of Savoir & Connaître.",
    "chain": "connaitre_savoir_subjects_cycle",
    "chainTitle": "💡 Connaître vs Savoir: Alternance des Sujets (Je ➜ Vous ➜ Nom vs Verbe)",
    "chainStep": 4,
    "chainTotal": 4,
    "chainType": "contrast"
  },
  {
    "id": "rentrer_mouvement_etre",
    "topic": "maison",
    "structureId": "maison",
    "topicLabel": "Rentrer · Mouvement Maison (ÊTRE)",
    "scene": "apartment-living",
    "english": "She came home very late after the concert.",
    "targetWords": [
      "Elle",
      "est",
      "rentrée",
      "très",
      "tard",
      "après",
      "le",
      "concert"
    ],
    "fullSentence": "Elle est rentrée très tard après le concert.",
    "distractors": [
      {
        "word": "a",
        "trap": "auxiliary_error",
        "tip": "Auxiliary Error: Coming home oneself is movement: use ÊTRE (est rentrée)!"
      },
      {
        "word": "rentré",
        "trap": "missing_agreement",
        "tip": "Agreement Error: \"Elle\" is feminine singular: add +e (rentrée)!"
      }
    ],
    "purpose": "🎯 Movement Rentrer: Returning home takes ÊTRE + (+e)",
    "purposeNote": "Starting Rentrer Contrast: When \"rentrer\" means going home, the subject moves herself. It takes ÊTRE and agrees with Elle (+e).",
    "rule": "Intransitive \"rentrer\" takes ÊTRE.",
    "nextPreview": "Next card: Putting the car into the garage—which auxiliary?",
    "chain": "rentrer_etre_vs_avoir",
    "chainTitle": "🏠 Maison d’Être: Le Verbe \"Rentrer\" (Mouvement Être vs Rallier un Objet Avoir)",
    "chainStep": 1,
    "chainTotal": 2,
    "chainType": "contrast"
  },
  {
    "id": "rentrer_transitif_avoir",
    "topic": "maison",
    "structureId": "maison",
    "topicLabel": "Rentrer · Transitif avec Objet (AVOIR)",
    "scene": "apartment-living",
    "english": "He put the car into the garage before the rain.",
    "targetWords": [
      "Il",
      "a",
      "rentré",
      "la",
      "voiture",
      "dans",
      "le",
      "garage",
      "avant",
      "la",
      "pluie"
    ],
    "fullSentence": "Il a rentré la voiture dans le garage avant la pluie.",
    "distractors": [
      {
        "word": "est",
        "trap": "auxiliary_shift",
        "tip": "Auxiliary Flip: \"la voiture\" is a direct object! Putting an object inside flips to AVOIR (a rentré)!"
      },
      {
        "word": "rentrée",
        "trap": "false_post_agreement",
        "tip": "Agreement Error: With AVOIR, post-verb object takes no agreement on the participle!"
      }
    ],
    "purpose": "⚖️ Transitive Rentrer: Putting an object inside flips auxiliary to AVOIR",
    "purposeNote": "Direct Contrast with Card 1: In Card 1, \"Elle est rentrée\" (she returned home). Here, what did he bring inside? \"La voiture\" (direct object). The auxiliary FLIPS to AVOIR (\"Il a rentré\")!",
    "rule": "When \"rentrer\" takes a direct object (COD), it conjugates with AVOIR: \"Il a rentré la voiture\".",
    "nextPreview": "Chain Complete! You have mastered intransitive vs transitive movement pairs.",
    "chain": "rentrer_etre_vs_avoir",
    "chainTitle": "🏠 Maison d’Être: Le Verbe \"Rentrer\" (Mouvement Être vs Rallier un Objet Avoir)",
    "chainStep": 2,
    "chainTotal": 2,
    "chainType": "contrast"
  }
];

  const TOPIC_CHIPS = [
  {
    "id": "all",
    "label": "🎯 Purposeful Learning Track (Curated Chains)"
  },
  {
    "id": "showdowns",
    "label": "⚖️ Grammar Showdowns & Contrasts (Pairs)"
  },
  {
    "id": "shifts",
    "label": "🔄 Subject Shifts & Agreement Rounds"
  },
  {
    "id": "due",
    "label": "🧠 Due & Smart Review (FSRS)"
  },
  {
    "id": "cause",
    "label": "⚡ Cause (Grâce à / À cause de / En raison de)"
  },
  {
    "id": "neque",
    "label": "🚫 Ne ... que (Restrictive Only)"
  },
  {
    "id": "se_faire",
    "label": "🔒 Se faire + Infinitif"
  },
  {
    "id": "reflexive",
    "label": "🛏️ Verbes Réflexifs (Être)"
  },
  {
    "id": "maison",
    "label": "🏠 Maison d’Être (Movement Verbs)"
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
    "id": "sequence",
    "label": "⏱️ Temps & Chronologie"
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
    "id": "prepositions",
    "label": "📍 Prépositions de Lieu"
  },
  {
    "id": "avoir",
    "label": "🍎 Avoir Participles & Accord"
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
    if (topicId === 'showdowns') {
      return CHALLENGES.filter(c => c.chainType === 'contrast');
    }
    if (topicId === 'shifts') {
      return CHALLENGES.filter(c => c.chainType === 'subject_shift');
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

    if (Array.isArray(card.distractors)) {
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

            <!-- Full Conjugation / Paradigm Table -->
            <div style="margin-bottom: 16px;">
              <div style="font-size: 11.5px; font-weight: 800; text-transform: uppercase; margin-bottom: 8px; color: #1e293b;">
                📋 Complete Reference Table:
              </div>
              <div class="gt-table-responsive" style="max-height: 280px; overflow-y: auto; border: 1px solid #e2e8f0; border-radius: 12px;">
                <table class="gt-table" style="width: 100%; border-collapse: collapse; font-size: 12.5px; text-align: left;">
                  <thead style="position: sticky; top: 0; background: #f8fafc; z-index: 1;">
                    <tr style="border-bottom: 1.5px solid #cbd5e1;">
                      ${struct.headers.map(h => `<th style="padding: 8px 10px; font-weight: 800; color: #475569;">${esc(h)}</th>`).join('')}
                      <th style="padding: 8px 10px; text-align: center; color: #475569;">Audio</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${struct.rows.map((row, rIdx) => `
                      <tr style="border-bottom: 1px solid #f1f5f9; background: ${rIdx % 2 === 0 ? '#ffffff' : '#fafafa'};">
                        ${row.map((cell, cIdx) => `
                          <td style="padding: 8px 10px; ${cIdx === 0 ? 'font-weight: 800; color: #3730a3;' : (cIdx === 2 ? 'font-weight: 700; color: #e11d48;' : '')}">
                            ${esc(cell)}
                          </td>
                        `).join('')}
                        <td style="padding: 8px 10px; text-align: center;">
                          <button type="button" class="btn btn-secondary btn-sm" data-gflash-modal-say="${esc(row[3] || row[0])}" style="padding: 2px 7px; font-size: 11px; border-radius: 6px;">
                            🔊
                          </button>
                        </td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Traps & Common Mistakes -->
            ${struct.traps && struct.traps.length ? `
              <div style="background: #fff1f2; border: 1.5px solid #fecdd3; border-radius: 12px; padding: 12px 14px; margin-bottom: 16px;">
                <div style="font-size: 11.5px; font-weight: 800; text-transform: uppercase; color: #be123c; margin-bottom: 6px; display: flex; align-items: center; gap: 5px;">
                  ⚠️ Traps & Common Mistakes to Avoid:
                </div>
                <div style="font-size: 12px; color: #9f1239; line-height: 1.45;">
                  ${struct.traps.map(t => `<div style="margin-bottom: 4px;">• ${esc(t)}</div>`).join('')}
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

        <!-- Top Pedagogical Chain & Intentional Link Header -->
        <div style="background: linear-gradient(135deg, #f0f4ff 0%, #faf5ff 100%); padding: 10px 14px; border-bottom: 1.5px solid #e0e7ff; display: flex; flex-direction: column; gap: 4px;">
          <div style="display: flex; justify-content: space-between; align-items: center; gap: 8px; flex-wrap: wrap;">
            <span style="display: inline-flex; align-items: center; gap: 5px; font-size: 11px; font-weight: 800; text-transform: uppercase; color: #4338ca; letter-spacing: 0.5px; background: #e0e7ff; padding: 2px 8px; border-radius: 6px;">
              ${card.chainType === 'contrast' ? '⚖️ Contrast Pair' : (card.chainType === 'subject_shift' ? '🔄 Subject Shift' : (card.chainType === 'rule_trap' ? '⚠️ Agreement Trap' : '🪜 Step-by-Step'))} · Step ${card.chainStep || 1} of ${card.chainTotal || 1}
            </span>
            <span style="font-size: 11px; font-weight: 700; color: #6b7280;">
              ${esc(card.chainTitle ? card.chainTitle.split(':')[0] : card.topicLabel)}
            </span>
          </div>
          <div style="font-size: 13px; font-weight: 800; color: #1e1b4b; line-height: 1.35; margin-top: 2px;">
            ${esc(card.purpose || 'Intentional Practice')}
          </div>
          ${card.purposeNote ? `
            <div style="font-size: 11.5px; color: #4b5563; line-height: 1.4; background: rgba(255,255,255,0.7); padding: 5px 9px; border-radius: 8px; border-left: 3px solid #6366f1; margin-top: 2px;">
              💡 <b>Connection:</b> ${esc(card.purposeNote)}
            </div>
          ` : ''}
        </div>

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

            <!-- Grammar Rule Box with Button to view Structure Table & Next Preview -->
            <div style="background: #fdf4ff; border: 1px solid #f5d0fe; border-radius: 12px; padding: 12px 14px; margin-bottom: 14px; font-size: 12.5px; color: #701a75; line-height: 1.45;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 4px;">
                <div>💡 <b>Grammar Rule:</b> ${esc(card.rule)}</div>
                <button type="button" class="btn btn-white btn-sm" data-gflash-structure="${esc(structureKey)}" style="font-size: 11px; font-weight: 800; padding: 3px 8px; border-radius: 8px; flex-shrink: 0;">
                  📊 Structure Table
                </button>
              </div>
              ${card.nextPreview ? `
                <div style="background: rgba(255, 255, 255, 0.7); border: 1px solid #f0abfc; border-radius: 8px; padding: 6px 10px; margin-top: 8px; font-size: 11.5px; color: #86198f; display: flex; align-items: flex-start; gap: 6px;">
                  <span style="font-weight: 800;">➜</span>
                  <div><b>Next card purpose:</b> ${esc(card.nextPreview)}</div>
                </div>
              ` : ''}
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
        <div id="grammar-flashcards-root">
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

    // End-of-Session Screen with Targeted Remediation
    if (currentIndex >= activeQueue.length) {
      const totalStudied = activeQueue.length;
      const mistakesCount = sessionMistakes.length;
      const accuracyPct = Math.round(((totalStudied - mistakesCount) / Math.max(1, totalStudied)) * 100);

      return `
        <div id="grammar-flashcards-root">
          <div class="review-card" style="padding: 24px 20px; text-align: center; border-radius: 20px;">
            <div style="font-size: 48px; margin-bottom: 10px;">
              ${mistakesCount === 0 ? '🏆' : '🎯'}
            </div>
            
            <h2 style="font-size: 22px; margin-bottom: 6px;">
              ${mistakesCount === 0 ? 'Flawless Session !' : 'Session Completed !'}
            </h2>

            <p class="small muted" style="margin-bottom: 16px;">
              You finished all ${totalStudied} grammar cards with ${accuracyPct}% first-try accuracy.
            </p>

            ${mistakesCount > 0 ? `
              <!-- Targeted Remediation Banner -->
              <div style="background: #fff7ed; border: 1.5px solid #fed7aa; border-radius: 14px; padding: 14px 16px; margin-bottom: 18px; text-align: left;">
                <div style="font-size: 13.5px; font-weight: 800; color: #9a3412; margin-bottom: 6px;">
                  ⚠️ ${mistakesCount} ${mistakesCount === 1 ? 'rule needs' : 'rules need'} focused practice:
                </div>
                <div style="font-size: 12px; color: #c2410c; line-height: 1.45; margin-bottom: 12px;">
                  ${sessionMistakes.map(m => `
                    <div style="margin-bottom: 4px;">• <b>${esc(m.card.fullSentence)}</b> (${esc(m.card.rule)})</div>
                  `).join('')}
                </div>
                <button type="button"
                        class="btn btn-primary btn-block"
                        data-gflash-action="start-remediation"
                        style="font-size: 14px; border-radius: 12px; padding: 10px 16px;">
                  🎯 Start Targeted Practice on Missed Rules (${mistakesCount})
                </button>
              </div>
            ` : `
              <div style="background: #ecfdf5; border: 1.5px solid #6ee7b7; border-radius: 14px; padding: 14px; margin-bottom: 18px; color: #065f46; font-size: 13.5px; font-weight: 700;">
                ✨ Spectacular! You avoided every single deceptive distractor!
              </div>
            `}

            <div style="display: flex; gap: 8px; justify-content: center; flex-wrap: wrap;">
              <button type="button" class="btn btn-secondary" data-gflash-action="restart-session">
                ↺ Practice Topic Again
              </button>
              <button type="button" class="btn btn-white" data-gflash-topic="all">
                🗂️ All Grammar Rules
              </button>
            </div>
          </div>
          ${activeStructureModal ? renderStructureModal(activeStructureModal) : ''}
        </div>
      `;
    }

    const card = activeQueue[currentIndex];
    const st = getActiveState(false);
    const total = activeQueue.length;

    return `
      <div id="grammar-flashcards-root">
        <!-- Topic & Queue Selector Bar -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; gap: 8px; flex-wrap: wrap;">
          <div style="font-size: 12px; font-weight: 800; color: #6366f1;">
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

  // Delegated Event Handlers
  document.addEventListener('click', function (e) {
    // Select token
    const selBtn = e.target.closest('[data-gflash-select]');
    if (selBtn) {
      selectToken(selBtn.dataset.gflashSelect);
      return;
    }

    // Deselect token
    const deselBtn = e.target.closest('[data-gflash-deselect]');
    if (deselBtn) {
      deselectToken(deselBtn.dataset.gflashDeselect);
      return;
    }

    // Actions
    const actionBtn = e.target.closest('[data-gflash-action]');
    if (actionBtn) {
      const act = actionBtn.dataset.gflashAction;
      if (act === 'clear-words') clearSelection();
      else if (act === 'check-sentence') checkSentence();
      else if (act === 'next-card') nextCard();
      else if (act === 'start-remediation') startTargetedRemediation();
      else if (act === 'restart-session') startSession(currentTopic);
      return;
    }

    // Rate & advance
    const rateBtn = e.target.closest('[data-gflash-rate]');
    if (rateBtn) {
      rateAndAdvance(rateBtn.dataset.gflashRate);
      return;
    }

    // Audio
    const sayBtn = e.target.closest('[data-gflash-say]');
    if (sayBtn) {
      playAudio(sayBtn.dataset.gflashSay, 0.83);
      return;
    }
    const slowBtn = e.target.closest('[data-gflash-slow]');
    if (slowBtn) {
      playAudio(slowBtn.dataset.gflashSlow, 0.60);
      return;
    }
    const modalSayBtn = e.target.closest('[data-gflash-modal-say]');
    if (modalSayBtn) {
      playAudio(modalSayBtn.dataset.gflashModalSay, 0.83);
      return;
    }

    // Structure modal open / close
    const structBtn = e.target.closest('[data-gflash-structure]');
    if (structBtn) {
      openStructureModal(structBtn.dataset.gflashStructure);
      return;
    }

    const closeModBtn = e.target.closest('[data-gflash-close-modal]');
    if (closeModBtn) {
      closeStructureModal();
      return;
    }

    // Backdrop click to close modal
    if (e.target && e.target.dataset && e.target.dataset.gflashBackdropClose === 'true') {
      closeStructureModal();
      return;
    }

    // Topic button shortcuts (e.g. from End-of-Session)
    const topicBtn = e.target.closest('[data-gflash-topic]');
    if (topicBtn) {
      startSession(topicBtn.dataset.gflashTopic);
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
