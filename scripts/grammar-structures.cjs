const fs = require('fs');
const path = require('path');

const GRAMMAR_STRUCTURES = {
  reflexive: {
    id: 'reflexive',
    title: 'Passé Composé · Verbes Réflexifs (ÊTRE)',
    badge: 'A1.3 · Règle Majeure',
    summary: 'Au passé composé, TOUS les verbes réflexifs (se doucher, se lever, se souvenir, etc.) se conjuguent TOUJOURS avec l’auxiliaire ÊTRE. Le participe passé s’accorde généralement avec le sujet en genre (+e) et en nombre (+s).',
    formula: 'Sujet + [me / te / s’ / nous / vous / se] + ÊTRE (présent) + Participe Passé (+e / +s)',
    negationFormula: 'Sujet + ne + [me / te / se] + ÊTRE + pas + Participe Passé',
    headers: ['Sujet', 'Pronom + Être', 'Participe & Accord', 'Exemple Complet', 'Sens en Anglais'],
    rows: [
      ['Je (m./f.)', 'me suis', 'douché(e)', 'Je me suis douché(e) ce matin.', 'I showered this morning.'],
      ['Tu (fém.)', 't’es', 'douchée (+e)', 'Tu t’es douchée hier soir ?', 'Did you shower yesterday evening?'],
      ['Il (masc.)', 's’est', 'douché', 'Il s’est douché rapidement.', 'He showered quickly.'],
      ['Elle (fém.)', 's’est', 'levée (+e)', 'Elle s’est levée tôt ce matin.', 'She got up early this morning.'],
      ['Nous (plur.)', 'nous sommes', 'amusé(e)s (+s)', 'Nous nous sommes bien amusés.', 'We had a lot of fun.'],
      ['Vous (pol.)', 'vous êtes', 'souvenu(e)(s)', 'Vous vous êtes souvenu de moi ?', 'Did you remember me?'],
      ['Ils (masc. pl.)', 'se sont', 'trompés (+s)', 'Ils se sont trompés de numéro.', 'They dialed the wrong number.'],
      ['Elles (fém. pl.)', 'se sont', 'souvenues (+es)', 'Elles se sont souvenues de toi.', 'They remembered you.']
    ],
    traps: [
      '⚠️ AUXILIAIRE INTERDIT : N’utilisez JAMAIS avoir ! "Elle a levé" est une erreur grave. Dites toujours : "Elle s’est levée".',
      '⚠️ PIÈGE DE L’OBJET DIRECT / PARTIES DU CORPS : Si un objet direct ou une partie du corps est placé APRÈS le verbe, le participe reste INVARIABLE (pas d’accord) ! Exemple : "Elle s’est coupé les cheveux" (coupé, JAMAIS coupée).',
      '⚠️ EXPRESSION FIXE INVARIABLE : "Se rendre compte" reste TOUJOURS invariable au participe : "Elle s’est rendu compte de son erreur" (rendu, JAMAIS rendue).',
      '⚠️ ORDRE DE LA NÉGATION : "ne" se place AVANT le pronom réflexif : "Je ne me suis pas réveillé" (et NON "Je me ne suis pas").'
    ],
    rules: [
      'Élision : "se" et "te" deviennent "s’" et "t’" devant la voyelle de l’auxiliaire (s’est, t’es).',
      'Préposition "de" : plusieurs verbes réflexifs demandent "de" : se souvenir DE quelqu’un, se tromper DE numéro, se rendre compte DE quelque chose.'
    ]
  },

  maison: {
    id: 'maison',
    title: 'Passé Composé avec ÊTRE (Maison d’Être & Déplacement)',
    badge: 'A1.3 · Mouvement & États',
    summary: '14 verbes de mouvement et de changement d’état (DR MRS VANDERTRAMP) se conjuguent avec ÊTRE. Avec ÊTRE, l’accord du participe passé avec le sujet est 100% OBLIGATOIRE (féminin : +e, pluriel : +s).',
    formula: 'Sujet + ÊTRE (suis, es, est, sommes, êtes, sont) + Participe Passé (+e / +s)',
    negationFormula: 'Sujet + ne + ÊTRE + pas + Participe Passé',
    headers: ['Infinitif', 'Participe Passé', 'Féminin / Pluriel', 'Exemple Réel du Cours', 'Sens en Anglais'],
    rows: [
      ['Naître', 'né', 'née / nés / nées', 'Je suis née à Rasht en 1970.', 'I was born in Rasht in 1970.'],
      ['Mourir', 'mort', 'morte / morts / mortes', 'Elle est morte il y a deux ans.', 'She died two years ago.'],
      ['Aller', 'allé', 'allée / allés / allées', 'Mahsa est allée à Paris.', 'Mahsa went to Paris.'],
      ['Venir', 'venu', 'venue / venus / venues', 'Ils sont venus nous rendre visite.', 'They came to visit us.'],
      ['Arriver', 'arrivé', 'arrivée / arrivés / arrivées', 'La fille est arrivée à dix heures.', 'The girl arrived at ten o’clock.'],
      ['Partir', 'parti', 'partie / partis / parties', 'Les enfants sont déjà partis en vacances.', 'The children have already left on vacation.'],
      ['Entrer', 'entré', 'entrée / entrés / entrées', 'Nous sommes entrés par la porte principale.', 'We entered through the main door.'],
      ['Sortir', 'sorti', 'sortie / sortis / sorties', 'Il a pris son parapluie et il est sorti.', 'He took his umbrella and went out.'],
      ['Rentrer', 'rentré', 'rentrée / rentrés / rentrées', 'Hier soir, Sarah est rentrée tard.', 'Yesterday evening, Sarah came home late.'],
      ['Tomber', 'tombé', 'tombée / tombés / tombées', 'Je suis tombée amoureuse de cette ville.', 'I fell in love with this city.']
    ],
    traps: [
      '⚠️ OUBLI D’ACCORD : Avec ÊTRE, l’accord est automatique : "La fille est arrivée" (+e), "Les enfants sont partis" (+s).',
      '⚠️ PHRASES MIXTES AVOIR + ÊTRE : Beaucoup d’actions combinent les deux auxiliaires : "Il a pris (avoir) son parapluie et il est sorti (être)". Faites bien la distinction !'
    ],
    rules: [
      'Mnémonique DR MRS VANDERTRAMP : Devenir, Revenir, Monter, Rester, Sortir, Venir, Aller, Naître, Descendre, Entrer, Rentrer, Tomber, Retourner, Arriver, Mourir, Partir.'
    ]
  },

  se_faire: {
    id: 'se_faire',
    title: 'Se faire + Infinitif (Causatif & Passif)',
    badge: 'A1.3 PDF · Page 221',
    summary: 'La structure "Se faire + Infinitif" exprime qu’on subit ou qu’on fait faire une action par quelqu’un d’autre (coiffeur, médecin, patron, ami). Au passé composé, le participe FAIT est STRICTEMENT INVARIABLE (JAMAIS "faite" ni "faits").',
    formula: 'Sujet + [me/te/se] + faire (présent ou passé composé) + Infinitif',
    negationFormula: 'Sujet + ne + [me/te/se] + faire + pas + Infinitif',
    headers: ['Expression', 'Temps', 'Structure', 'Exemple Réel du Cours PDF', 'Sens en Anglais'],
    rows: [
      ['Se faire couper les cheveux', 'Passé composé', 's’est fait + inf', 'Je me suis fait couper les cheveux !', 'I got my hair cut!'],
      ['Se faire faire les ongles', 'Présent', 'me faire + inf', 'Je suis là pour me faire faire les ongles.', 'I am here to get my nails done.'],
      ['Se faire rembourser', 'Passé composé', 's’est fait + inf', 'Je me suis fait rembourser mon billet.', 'I got refunded for my ticket.'],
      ['Se faire larguer (fam)', 'Passé composé', 's’est fait + inf', 'Il s’est fait larguer par Marie.', 'He got dumped by Marie.'],
      ['Se faire virer (fam)', 'Passé composé', 's’est fait + inf', 'Le directeur corrompu s’est fait virer.', 'The corrupt manager got fired.'],
      ['Se faire opérer les...', 'Passé composé', 's’est fait + inf', 'Il s’est fait opérer les genoux il y a 3 ans.', 'He had his knees operated on 3 years ago.'],
      ['Se faire arracher la dent', 'Passé composé', 's’est fait + inf', 'Elle s’est fait arracher la dent de sagesse.', 'She had her wisdom tooth pulled out.']
    ],
    traps: [
      '⚠️ PIÈGE DE L’ACCORD : Dans "se faire + infinitif", le participe "fait" NE S’ACCORDE JAMAIS ! Écrire "Elle s’est faite virer" ou "Elle s’est faite couper les cheveux" est une FAUTE ! Dites : "Elle s’est fait virer".',
      '⚠️ SENS PASSIF : On l’utilise quand une autre personne effectue l’action sur nous ou pour notre compte.'
    ],
    rules: [
      'Au présent : "Je me fais couper les cheveux", "Tu te fais soigner".',
      'Au passé composé : "Je me suis fait rembourser", "Elle s’est fait soigner".'
    ]
  },

  neque: {
    id: 'neque',
    title: 'Négation Restrictive : Ne ... que (Only / Just)',
    badge: 'A1.3 PDF · Page 239',
    summary: '"Ne ... que" n’est PAS une négation complète : c’est une restriction qui signifie "seulement" ou "juste". Elle donne un style beaucoup plus fluide et naturel en français parlé.',
    formula: 'Sujet + ne + [verbe conjugué] + que + [complément restreint]',
    negationFormula: 'Attention : NE PAS AJOUTER "pas" ! ("ne... pas que" a un autre sens).',
    headers: ['Formule', 'Sens / Équivalent', 'Exemple Réel du Cours PDF', 'Sens en Anglais'],
    rows: [
      ['ne ... que', 'seulement (quantité)', 'Je ne dors que trois heures par nuit.', 'I only sleep 3 hours a night.'],
      ['ne ... que', 'seulement (jours)', 'Elle ne travaille que trois jours par semaine.', 'She only works 3 days a week.'],
      ['n’ ... que', 'seulement (argent)', 'Il n’a que vingt euros dans sa poche.', 'He only has 20 euros in his pocket.'],
      ['ne ... que', 'seulement (nourriture)', 'Mon frère ne mange que des légumes frais.', 'My brother only eats fresh vegetables.'],
      ['ne ... que', 'seulement (langue)', 'En classe, nous ne parlons que français.', 'In class, we only speak French.'],
      ['ne ... pas', 'négation totale', 'Je ne dors pas l’après-midi.', 'I do not sleep in the afternoon.'],
      ['ne ... plus', 'arrêt d’une action', 'Elle ne travaille plus le week-end.', 'She no longer works on weekends.']
    ],
    traps: [
      '⚠️ NE JAMAIS METTRE "PAS" : "Je ne dors pas que 3h" est faux pour dire "I only sleep 3h". La formule exacte est : "Je ne dors que 3h".',
      '⚠️ PLACEMENT DE "QUE" : "que" se place immédiatement DEVANT l’élément restreint : "Elle ne mange QUE des pommes" (et non "Elle ne que mange...").'
    ],
    rules: [
      'Élision : "ne" devient "n’" devant une voyelle ou un h muet : "Il n’a que 20 ans".'
    ]
  },

  cause: {
    id: 'cause',
    title: 'Exprimer la Cause : Parce que, À cause de, En raison de, Grâce à',
    badge: 'A1.3 PDF · Page 6-9',
    summary: 'Exprimer la raison d’un événement exige de choisir le bon connecteur selon la grammaire de ce qui suit (phrase complète avec verbe ou simple nom) et selon le sentiment (positif, négatif ou neutre/officiel).',
    formula: 'Parce que + [Sujet + Verbe] | À cause de / En raison de / Grâce à + [Nom]',
    negationFormula: 'N/A',
    headers: ['Connecteur', 'Grammaire requise', 'Sentiment / Nuance', 'Exemple Réel du Cours PDF', 'Traduction Anglaise'],
    rows: [
      ['Parce que', '+ Sujet + Verbe', 'Cause logique / neutre', 'Elle tape au plafond parce qu’elle est énervée.', 'She bangs the ceiling because she is irritated.'],
      ['À cause de', '+ Nom / Pronom', 'Cause négative / problème', 'Elle est furieuse à cause du bruit des voisins.', 'She is furious because of the neighbors’ noise.'],
      ['En raison de', '+ Nom', 'Cause neutre / officielle', 'Le train est retardé en raison des travaux.', 'The train is delayed due to construction works.'],
      ['Grâce à', '+ Nom / Pronom', 'Cause positive / remerciement', 'J’ai réussi mon examen grâce à ton aide.', 'I passed my exam thanks to your help.'],
      ['À cause de', '+ Nom', 'Dégât / météo', 'La cuisine est inondée à cause d’une fuite d’eau.', 'The kitchen is flooded because of a water leak.']
    ],
    traps: [
      '⚠️ À CAUSE DE + VERBE = INTERDIT ! Ne dites jamais "à cause de elle est fatiguée". Utilisez "parce qu’elle est fatiguée" ou "à cause de sa fatigue".',
      '⚠️ GRÂCE À (POSITIF) vs À CAUSE DE (NÉGATIF) : Ne dites pas "grâce aux bouchons je suis en retard" ! Les bouchons sont négatifs, donc : "à cause des bouchons".'
    ],
    rules: [
      'Contraction : de + le = du (à cause DU bruit) ; de + les = des (en raison DES travaux) ; à + le = au ; à + les = aux (grâce AUX amis).'
    ]
  },

  rules: {
    id: 'rules',
    title: 'Obligation & Interdiction (Copropriété, Règlement & Voisins)',
    badge: 'A1.3 PDF · Page 49-58',
    summary: 'Pour exprimer des règles de vie commune, des interdictions ou des devoirs dans un immeuble ou un lieu public, on utilise des structures impersonnelles ou le verbe devoir.',
    formula: 'Il faut + Infinitif | Il est interdit de / Défense de / Prière de + Infinitif | Devoir + Infinitif',
    negationFormula: 'Ne pas + Infinitif (consigne directe)',
    headers: ['Formule', 'Type', 'Exemple Réel du Règlement PDF', 'Sens en Anglais'],
    rows: [
      ['Il faut + inf', 'Obligation', 'Il faut tondre la pelouse le samedi matin.', 'You must mow the lawn on Saturday morning.'],
      ['Vous devez + inf', 'Obligation directe', 'Vous devez arroser le gazon le soir.', 'You must water the lawn in the evening.'],
      ['Il est interdit de + inf', 'Interdiction', 'Il est interdit de faire du bruit après 22h.', 'It is forbidden to make noise after 10 PM.'],
      ['Défense de + inf', 'Interdiction stricte', 'Défense de fumer dans le hall de l’immeuble.', 'Smoking strictly prohibited in the lobby.'],
      ['Prière de ne pas + inf', 'Interdiction polie', 'Prière de ne pas laisser de vélos dans le couloir.', 'Please do not leave bicycles in the hallway.'],
      ['Il faut + inf', 'Devoir civique', 'Il faut jeter les détritus dans les poubelles.', 'You must throw trash into the bins.'],
      ['Ne pas + inf', 'Consigne négative', 'Ne pas nuire à la tranquillité du voisinage.', 'Do not disturb the neighborhood tranquility.'],
      ['Il est interdit de + inf', 'Interdiction', 'Il est strictement interdit de se baigner ici.', 'Swimming here is strictly forbidden.']
    ],
    traps: [
      '⚠️ OUBLI DU "DE" : Dites "Il est interdit DE fumer" (JAMAIS "interdit à fumer").',
      '⚠️ PLACE DE "NE PAS" : Devant un infinitif, "ne" et "pas" restent GROUPÉS ENSEMBLE : "Prière de NE PAS fumer" (et NON "ne fumer pas").'
    ],
    rules: [
      'Vocabulaire clé du PDF : tondre la pelouse, arroser le gazon, détritus, ordures, déchets, nuire à quelqu’un, laisser quelque chose dans le hall.'
    ]
  },

  repairs: {
    id: 'repairs',
    title: 'Logement : Pannes, Dégâts des Eaux & Réparations',
    badge: 'A1.3 PDF · Page 76-92',
    summary: 'Vocabulaire et structures indispensables pour signaler un problème dans son appartement, faire venir un réparateur et décrire une panne avec précision.',
    formula: 'Avoir un problème avec... / Être bouché / Il y a une fuite d’eau / Faire venir un artisan',
    negationFormula: 'Ne fonctionne plus / Ne s’écoule plus',
    headers: ['Élément', 'Problème / Panne', 'Phrase Type du Cours PDF', 'Sens en Anglais'],
    rows: [
      ['Évier de cuisine', 'bouché', 'J’ai un problème avec mon évier, il est bouché.', 'I have a problem with my sink, it is clogged.'],
      ['Écoulement d’eau', 'ne s’écoule plus', 'Depuis hier soir, l’eau ne s’écoule plus du tout.', 'Since yesterday evening, water is not draining at all.'],
      ['Fuite d’eau', 'en dessous du lavabo', 'En dessous du lavabo, il y a une fuite d’eau.', 'Underneath the sink, there is a water leak.'],
      ['Faire intervenir', 'faire venir qqn', 'Comment est-ce que je peux faire venir un plombier ?', 'How can I have a plumber come over?'],
      ['Chauffage', 'ne fonctionne plus', 'Mon chauffage ne fonctionne plus, il fait très froid.', 'My heating is not working anymore, it is very cold.'],
      ['Radiateur', 'reste froid / thermostat', 'Le thermostat est réglé, mais le radiateur reste froid.', 'The thermostat is set, but the radiator stays cold.'],
      ['Intervention', 'déboucheur / chaudière', 'Le plombier va utiliser un déboucheur pour réparer.', 'The plumber will use a drain unblocker to fix it.']
    ],
    traps: [
      '⚠️ ÉTAT PASSIF : Dites "L’évier EST bouché" (auxiliaire être pour l’état), JAMAIS "l’évier a bouché".',
      '⚠️ FAISABILITÉ CAUSATIVE : Dites "faire venir un plombier" (JAMAIS "faire un plombier").'
    ],
    rules: [
      'Depuis : marque une action continue commencée dans le passé : "Il est bouché depuis hier soir" (He has been clogged since yesterday evening).'
    ]
  },

  sequence: {
    id: 'sequence',
    title: 'Temps, Ordre Chronologique & Infinitifs',
    badge: 'A1.3 PDF · Page 237',
    summary: 'Raconter une routine ou ordonner des événements exige des connecteurs temporels précis et l’utilisation de la préposition "de" avant l’infinitif.',
    formula: 'D’abord ... puis ... ensuite ... après ça | Avant de + Infinitif | Depuis + Durée',
    negationFormula: 'N/A',
    headers: ['Connecteur', 'Fonction', 'Exemple Réel du Cours', 'Traduction Anglaise'],
    rows: [
      ['Avant de + inf', 'Action antérieure', 'Avant de partir, j’éteins toujours la lumière.', 'Before leaving, I always turn off the light.'],
      ['D’abord ... puis', 'Début et suite', 'D’abord je me réveille, puis je me douche.', 'First I wake up, then I shower.'],
      ['Ensuite ... après ça', 'Déroulement', 'Ensuite je déjeune, et après ça je vais au travail.', 'Next I eat breakfast, and after that I go to work.'],
      ['Depuis + durée', 'Action en cours', 'Le robinet fuit depuis trois jours.', 'The faucet has been leaking for three days.'],
      ['Avant de + inf', 'Précautions', 'Avant de dormir, elle vérifie la porte.', 'Before sleeping, she checks the door.']
    ],
    traps: [
      '⚠️ AVANT DE + INFINITIF : Ne dites JAMAIS "avant partir" ! En français, "avant" exige obligatoirement "DE" devant un verbe : "Avant DE partir".'
    ],
    rules: [
      'Ordre typique d’un récit : D’abord ➜ Puis ➜ Ensuite ➜ Après ça ➜ Enfin / Finalement.'
    ]
  },

  prepositions: {
    id: 'prepositions',
    title: 'Prépositions Géographiques et de Lieu (Pays, Villes, Bâtiments)',
    badge: 'A1.3 · Géographie & Espace',
    summary: 'En français, la préposition devant un lieu dépend du genre du pays (féminin en -e ou voyelle, masculin consonne, pluriel) ou s’il s’agit d’une ville ou d’un intérieur.',
    formula: 'en + pays fém./voyelle | au + pays masc. | aux + pays pluriel | à + ville | dans + lieu clos',
    negationFormula: 'N/A',
    headers: ['Catégorie de Lieu', 'Préposition', 'Exemple Réel du Cours', 'Traduction Anglaise'],
    rows: [
      ['Pays féminin (finit par -e)', 'en', 'Nous allons partir en vacances en France.', 'We are going on holiday to France.'],
      ['Pays commençant par voyelle', 'en', 'Elle a habité deux ans en Iran.', 'She lived two years in Iran.'],
      ['Pays masculin (consonne)', 'au', 'Mon frère a trouvé un emploi au Canada.', 'My brother found a job in Canada.'],
      ['Pays pluriel', 'aux', 'Ils sont allés étudier aux États-Unis.', 'They went to study in the United States.'],
      ['Ville', 'à', 'Elle est arrivée à Paris hier matin.', 'She arrived in Paris yesterday morning.'],
      ['Intérieur de bâtiment', 'dans', 'Ne laissez pas vos vélos dans le hall.', 'Do not leave your bikes in the hallway.']
    ],
    traps: [
      '⚠️ EN FRANCE vs AU FRANCE : La France se termine par -e, elle est donc féminine ➜ "EN France" (JAMAIS "au France").',
      '⚠️ À PARIS vs EN PARIS : Pour les villes, on utilise toujours "À" ➜ "À Paris", "À Téhéran", "À Rasht" (JAMAIS "en Paris").'
    ],
    rules: [
      'Règle générale : Presque tous les pays se terminant par la lettre "e" sont féminins (la France, l’Italie, l’Espagne, la Suisse) et prennent "en". Exceptions notables : le Mexique, le Mozambique, le Cambodge (au Mexique).'
    ]
  },

  cod_coi: {
    id: 'cod_coi',
    title: 'Pronoms Compléments d’Objet : COD (le/la/les) vs COI (lui/leur)',
    badge: 'A1.3 · Pronoms Personnels',
    summary: 'Les pronoms remplacent les noms pour éviter les répétitions et se placent AVANT le verbe conjugué. On distingue le COD (direct, sans préposition) du COI (indirect, remplace "à + personne").',
    formula: 'Sujet + [le / la / l’ / les] (COD) ou [lui / leur] (COI) + Verbe',
    negationFormula: 'Sujet + ne + [pronom] + verbe + pas',
    headers: ['Type de Pronom', 'Formes', 'Verbes typiques', 'Exemple Réel du Cours', 'Traduction Anglaise'],
    rows: [
      ['COD (Direct)', 'le / la / l’ / les', 'voir, manger, chercher, aimer', 'La pomme est délicieuse, je la mange.', 'The apple is delicious, I eat it.'],
      ['COI (Indirect : à + qqn)', 'lui (singulier masc/fém)', 'téléphoner à, parler à, écrire à', 'Ma mère est gentille, je lui téléphone.', 'My mother is kind, I phone her.'],
      ['COI (Indirect : à + qqn)', 'leur (pluriel masc/fém)', 'dire à, répondre à, parler à', 'Mes voisins sont bruyants, je leur parle.', 'My neighbors are noisy, I speak to them.'],
      ['COD combiné', 'les (pluriel direct)', 'chercher, trouver, prendre', 'Où sont mes clés ? Je les cherche partout !', 'Where are my keys? I am looking for them everywhere!']
    ],
    traps: [
      '⚠️ "LUI" = MASCULIN ET FÉMININ : "Je lui téléphone" signifie "I call him" OU "I call her". Ne dites jamais "je téléphone à elle" !',
      '⚠️ PLACE DU PRONOM : Le pronom se place AVANT le verbe : "Je la mange" (JAMAIS "Je mange la").'
    ],
    rules: [
      'Verbes à retenir avec COI (à + qqn) : téléphoner à, parler à, écrire à, dire bonjour à, demander à, envoyer à, répondre à.'
    ]
  },

  connaitre_savoir: {
    id: 'connaitre_savoir',
    title: 'Connaître vs Savoir (Distinction fondamentale)',
    badge: 'A1.3 · Verbes Essentiels',
    summary: 'Ces deux verbes se traduisent par "to know" en anglais, mais répondent à deux constructions grammaticales totalement différentes et exclusives en français.',
    formula: 'Connaître + [Nom : lieu, personne, monument] | Savoir + [Infinitif OU que / où / quand / comment]',
    negationFormula: 'Je ne connais pas... | Je ne sais pas...',
    headers: ['Verbe', 'Construction obligatoire', 'Exemple Réel du Cours', 'Traduction Anglaise'],
    rows: [
      ['Connaître', '+ Nom de ville ou lieu', 'Je connais très bien ce restaurant.', 'I know this restaurant very well.'],
      ['Connaître', '+ Personne', 'Tu connais la nouvelle voisine ?', 'Do you know the new neighbor?'],
      ['Savoir', '+ Infinitif (compétence)', 'Je sais nager et je sais parler français.', 'I know how to swim and speak French.'],
      ['Savoir', '+ Proposition (où / quand / que)', 'Je sais où tu habites et à quelle heure tu pars.', 'I know where you live and what time you leave.'],
      ['Savoir', '+ Fait précis', 'Elle sait que la réunion commence à 9h.', 'She knows that the meeting starts at 9 AM.']
    ],
    traps: [
      '⚠️ INTERDIT : Connaître + verbe (JAMAIS "Je connais nager" ➜ Dites "Je SAIS nager").',
      '⚠️ INTERDIT : Savoir + personne (JAMAIS "Je sais Marie" ➜ Dites "Je CONNAIS Marie").'
    ],
    rules: [
      'Conjugaison Savoir : je sais, tu sais, il sait, nous savons, vous savez, ils savent.',
      'Conjugaison Connaître : je connais, tu connais, il connaît, nous connaissons, vous connaissez, ils connaissent.'
    ]
  },

  avoir: {
    id: 'avoir',
    title: 'Passé Composé avec AVOIR (Participe Passé Invariable)',
    badge: 'A1 · Base Fondamentale',
    summary: 'La grande majorité des verbes français se conjuguent avec l’auxiliaire AVOIR. Avec AVOIR, le participe passé reste invariable avec le sujet (pas de +e ni de +s pour le sujet).',
    formula: 'Sujet + AVOIR (ai, as, a, avons, avez, ont) + Participe Passé',
    negationFormula: 'Sujet + ne + AVOIR + pas + Participe Passé',
    headers: ['Sujet', 'Auxiliaire AVOIR', 'Participe', 'Exemple Réel du Cours', 'Sens en Anglais'],
    rows: [
      ['J’', 'ai', 'obtenu', 'J’ai obtenu une licence à l’université.', 'I obtained a bachelor’s degree at university.'],
      ['Tu', 'as', 'voulu', 'Tu as voulu me voir hier.', 'You wanted to see me yesterday.'],
      ['Il', 'a', 'pris', 'Il a pris son parapluie avant de sortir.', 'He took his umbrella before going out.'],
      ['Elle', 'a', 'suivi', 'Elle a suivi un master en éducation.', 'She took a master’s degree in education.'],
      ['Nous', 'avons', 'fait', 'Nous avons fait nos valises.', 'We packed our bags.'],
      ['Vous', 'avez', 'vécu', 'Vous avez vécu à Paris pendant trois ans.', 'You lived in Paris for three years.'],
      ['Ils', 'ont', 'bu', 'Ils ont bu un café sur la terrasse.', 'They drank a coffee on the terrace.']
    ],
    traps: [
      '⚠️ PAS D’ACCORD AVEC LE SUJET : "Elle a pris" (JAMAIS "prise"), "Elles ont bu" (JAMAIS "bues"). Le sujet ne change pas la terminaison du participe avec AVOIR.'
    ],
    rules: [
      'Participes irréguliers clés du cours PDF : prendre ➜ pris ; vouloir ➜ voulu ; suivre ➜ suivi ; faire ➜ fait ; obtenir ➜ obtenu ; boire ➜ bu ; voir ➜ vu.'
    ]
  }
};

console.log('Total Grammar Structures defined:', Object.keys(GRAMMAR_STRUCTURES).length);
module.exports = { GRAMMAR_STRUCTURES };
