// Comprehensive Grammar Structures for all 30 FrenchApp Grammar Cards
const NEW_GRAMMAR_STRUCTURES = {
  // 1. Négation Standard & Variantes
  negation: {
    id: 'negation',
    title: 'La Négation Complète : ne... pas, ne... jamais, ne... plus, ne... rien',
    badge: 'A1 · Règle Fondamentale',
    summary: 'La négation en français est binaire : elle encadre obligatoirement le verbe conjugué (ne + verbe + mot négatif). Devant une voyelle ou un h muet, "ne" s’élide en "n’".',
    formula: 'Sujet + ne / n’ + [Verbe Conjugué] + pas / jamais / plus / rien',
    negationFormula: 'Au passé composé : Sujet + ne/n’ + [Auxiliaire] + pas/jamais/plus/rien + [Participe Passé]',
    headers: ['Structure Négative', 'Nuance & Équivalent', 'Exemple Réel du Cours', 'Traduction Anglaise'],
    rows: [
      ['ne ... pas', 'Négation simple (not)', 'Je ne vais pas à l’école le dimanche.', 'I do not go to school on Sundays.'],
      ['n’ ... pas', 'Élision devant voyelle', 'Il n’aime pas le froid d’hiver.', 'He does not like the winter cold.'],
      ['ne ... jamais', 'Fréquence nulle (never)', 'Je ne bois jamais de café le soir.', 'I never drink coffee in the evening.'],
      ['ne ... plus', 'Action terminée (no longer / not anymore)', 'Elle n’habite plus à Lyon.', 'She no longer lives in Lyon.'],
      ['ne ... rien', 'Absence totale d’objet (nothing)', 'Je ne comprends rien à ce problème.', 'I understand nothing about this problem.'],
      ['Au Passé Composé', 'Encadre l’auxiliaire', 'Je n’ai pas pris mon parapluie.', 'I did not take my umbrella.'],
      ['Jamais au Passé', 'Encadre l’auxiliaire', 'Elle n’a jamais visité le Canada.', 'She has never visited Canada.']
    ],
    traps: [
      '⚠️ NE JAMAIS CUMULER PAS : "Je ne bois pas jamais" ou "Je ne veux pas rien" sont des erreurs graves ! Dites : "Je ne bois jamais" et "Je ne veux rien".',
      '⚠️ ARTICLES INDÉFINIS (un, une, des) ➜ "DE" : À la forme négative, un, une, des deviennent "DE" (ou d’) ! Exemple : "J’ai un vélo" ➜ "Je n’ai pas DE vélo". Seul le verbe ÊTRE garde l’article ("Ce n’est pas un problème").',
      '⚠️ ÉLISION OBLIGATOIRE : "ne" devient "n’" devant voyelle : "Je n’aime pas" (et non "Je ne aime pas").'
    ],
    rules: [
      'Ordre régulier : Sujet + ne + verbe + [pas / plus / jamais / rien].',
      'Exception d’objet pour "rien" et "personne" : "rien" peut être sujet ("Rien ne fonctionne"), mais "personne" se place APRÈS le participe passé ("Je n’ai vu personne").'
    ]
  },

  // 2. Aller + Lieu vs Prendre + Transport
  aller_prendre: {
    id: 'aller_prendre',
    title: 'Verbes de Déplacement : Aller (+ Lieu) vs Prendre (+ Véhicule)',
    badge: 'A1 · Mobilité & Transports',
    summary: 'Pour parler de ses déplacements quotidiens, on distingue la destination finale (verbe ALLER avec préposition à/au/en) et le moyen de transport utilisé (verbe PRENDRE directement avec un article défini ou indéfini).',
    formula: 'ALLER + [à la / au / aux / en] + Lieu  |  PRENDRE + [le / la / l’ / un] + Moyen de transport',
    negationFormula: 'Je ne vais pas au cinéma | Je ne prends pas le métro',
    headers: ['Verbe', 'Construction Requise', 'Exemple Réel du Cours', 'Traduction Anglaise'],
    rows: [
      ['Aller à la', 'Lieu féminin', 'Je vais à la piscine le samedi matin.', 'I am going to the swimming pool on Saturday morning.'],
      ['Aller au (à + le)', 'Lieu masculin', 'Nous allons au cinéma ce soir.', 'We are going to the cinema tonight.'],
      ['Aller en', 'Pays ou transport fermé', 'Elle va en France en avion.', 'She is going to France by plane.'],
      ['Prendre le / la', 'Article défini (transport)', 'Je prends le métro de la ligne 1.', 'I take line 1 subway.'],
      ['Prendre le bus', 'Moyen de transport', 'Ils prennent le bus pour aller au travail.', 'They take the bus to go to work.'],
      ['Prendre un taxi', 'Occasionnel', 'Il prend un taxi quand il pleut.', 'He takes a taxi when it rains.'],
      ['À pied / À vélo', 'Préposition "à"', 'Je vais au travail à vélo.', 'I go to work by bicycle.']
    ],
    traps: [
      '⚠️ NE PAS CONFONDRE LE TRANSPORT ET LA DESTINATION : Ne dites pas "Je prends à la piscine" ! On dit "Je vais à la piscine" et "Je prends ma voiture pour aller à la piscine".',
      '⚠️ PRENDRE SANS PRÉPOSITION : On ne met JAMAIS "à" ou "en" après prendre : dites "Je prends le bus" (JAMAIS "Je prends en bus").'
    ],
    rules: [
      'Aller (présent) : je vais, tu vas, il/elle va, nous allons, vous allez, ils/elles vont.',
      'Prendre (présent) : je prends, tu prends, il/elle prend, nous prenons, vous prenez, ils/elles prennent.'
    ]
  },

  // 3. Jouer à (Sports / Jeux) vs Jouer de (Musique)
  jouer_prep: {
    id: 'jouer_prep',
    title: 'Le Verbe Jouer : Jouer à (Jeux & Sports) vs Jouer de (Musique)',
    badge: 'A1 · Loisirs & Activités',
    summary: 'Le verbe jouer se construit avec deux prépositions distinctes qui changent complètement de sens : "jouer à" pour un sport collectif ou un jeu de société, et "jouer de" pour un instrument de musique.',
    formula: 'JOUER À + [sport de ballon / jeu de société]  |  JOUER DE + [instrument de musique]',
    negationFormula: 'Je ne joue pas au tennis | Elle ne joue pas de la guitare',
    headers: ['Activité', 'Formule & Contraction', 'Exemple Réel du Cours', 'Traduction Anglaise'],
    rows: [
      ['Sport masculin', 'jouer au (à + le)', 'Mon frère joue au football le dimanche.', 'My brother plays soccer on Sundays.'],
      ['Sport pluriel / Jeux', 'jouer aux (à + les)', 'Les enfants jouent aux cartes et aux échecs.', 'The kids play cards and chess.'],
      ['Sport féminin', 'jouer à la', 'Elle adore jouer à la pétanque en été.', 'She loves playing boules in the summer.'],
      ['Instrument masculin', 'jouer du (de + le)', 'Il joue du piano depuis cinq ans.', 'He has been playing the piano for 5 years.'],
      ['Instrument féminin', 'jouer de la', 'Sarah joue de la guitare acoustique.', 'Sarah plays the acoustic guitar.'],
      ['Instrument à voyelle', 'jouer de l’', 'Marc joue de l’accordéon en fête.', 'Marc plays the accordion at parties.'],
      ['Faire vs Jouer', 'Faire du + sport individuel', 'Je fais du vélo, mais je joue au tennis.', 'I ride a bicycle, but I play tennis.']
    ],
    traps: [
      '⚠️ CONTRACTION OBLIGATOIRE : à + le = AU ("jouer au tennis", jamais "à le tennis") ; de + le = DU ("jouer du violon", jamais "de le violon").',
      '⚠️ JOUER DU TENNIS EST UNE FAUTE : Pour les sports, c’est toujours "À" : "jouer au tennis" (et non "du tennis").'
    ],
    rules: [
      'Jouer est un verbe régulier du 1er groupe : je joue, tu joues, il joue, nous jouons, vous jouez, ils jouent.',
      'Pour les sports sans ballon/équipe (natation, ski, vélo), on utilise généralement FAIRE DE : faire de la natation, faire du ski.'
    ]
  },

  // 4. Les Trois Temps (Passé Récent, Présent Continu, Futur Proche)
  trois_temps: {
    id: 'trois_temps',
    title: 'Les 3 Temps Immédiats : Passé Récent, Présent Continu, Futur Proche',
    badge: 'A1 · Les Périphrases Temporelles',
    summary: 'Ces trois tournures permettent de situer une action dans le temps très proche sans conjugaison complexe, en s’appuyant sur les semi-auxiliaires VENIR, ÊTRE EN TRAIN DE, et ALLER suivis d’un infinitif.',
    formula: 'Passé : VENIR DE + inf | Présent : ÊTRE EN TRAIN DE + inf | Futur : ALLER + inf',
    negationFormula: 'Je ne viens pas de manger | Je ne suis pas en train de dormir | Je ne vais pas sortir',
    headers: ['Moment Temporel', 'Formule Grammaticale', 'Exemple Réel du Cours', 'Traduction Anglaise'],
    rows: [
      ['Passé Récent (just did)', 'Venir de + Infinitif', 'Je viens de terminer mon petit-déjeuner.', 'I have just finished my breakfast.'],
      ['Passé Récent (3e pers.)', 'Vient de + Infinitif', 'Le train vient d’arriver en gare.', 'The train has just arrived at the station.'],
      ['Présent Continu (right now)', 'Être en train de + Infinitif', 'Je suis en train de boire mon café chaud.', 'I am in the middle of drinking my hot coffee.'],
      ['Présent Continu (pluriel)', 'Sont en train de + Infinitif', 'Ils sont en train de réviser leurs cours.', 'They are in the middle of reviewing their lessons.'],
      ['Futur Proche (going to)', 'Aller + Infinitif', 'Je vais prendre le métro dans dix minutes.', 'I am going to take the subway in ten minutes.'],
      ['Futur Proche (nous)', 'Allons + Infinitif', 'Nous allons préparer le dîner ensemble.', 'We are going to prepare dinner together.'],
      ['Futur Proche (négation)', 'ne + aller + pas + inf', 'Elle ne va pas venir à la réunion.', 'She is not going to come to the meeting.']
    ],
    traps: [
      '⚠️ ÉLISION DEVANT VOYELLE : "venir de" devient "venir d’" et "en train de" devient "en train d’" devant une voyelle : "Il vient d’arriver", "Je suis en train d’écouter".',
      '⚠️ PLACE DE LA NÉGATION : La négation entoure le premier verbe conjugué (le semi-auxiliaire) : "Je ne vais PAS sortir" (et non "Je vais pas sortir").'
    ],
    rules: [
      'Conjugaison VENIR : je viens, tu viens, il vient, nous venons, vous venez, ils viennent.',
      'Conjugaison ALLER : je vais, tu vas, il va, nous allons, vous allez, ils vont.'
    ]
  },

  // 5. Terminaisons du 1er Groupe (-er)
  verbes_er: {
    id: 'verbes_er',
    title: 'Conjugaison du 1er Groupe (-ER) au Présent de l’Indicatif',
    badge: 'A1 · 90% des Verbes Français',
    summary: 'Le 1er groupe regroupe tous les verbes dont l’infinitif se termine par -ER (sauf Aller qui est du 3e groupe). Leur radical est stable et leurs terminaisons sont 100% régulières.',
    formula: 'Radical (Infinitif moins -er) + Terminaisons : -e, -es, -e, -ons, -ez, -ent',
    negationFormula: 'Sujet + ne + Verbe(-ER) + pas',
    headers: ['Sujet', 'Terminaison', 'Parler (Exemple)', 'Habiter (Voyelle / h)', 'Sens en Anglais'],
    rows: [
      ['Je / J’', '-e (muet)', 'Je parle', 'J’habite à Paris', 'I speak / I live'],
      ['Tu', '-es (muet)', 'Tu parles', 'Tu habites ici ?', 'You speak / You live'],
      ['Il / Elle / On', '-e (muet)', 'Il parle', 'Elle habite en ville', 'He/She speaks / lives'],
      ['Nous', '-ons [õ]', 'Nous parlons', 'Nous habitons ensemble', 'We speak / We live'],
      ['Vous', '-ez [e]', 'Vous parlez', 'Vous habitez où ?', 'You speak / You live'],
      ['Ils / Elles', '-ent (STRICTEMENT MUET)', 'Ils parlent', 'Elles habitent au Canada', 'They speak / They live']
    ],
    traps: [
      '⚠️ LA TERMINAISON \"-ENT\" EST STRICTEMENT SILENCIEUSE ! Ne prononcez JAMAIS [an] ou [ent]. \"Ils parlent\" se prononce exactement comme \"Il parle\" [parl] !',
      '⚠️ PARTICULARITÉ EN -GER ET -CER : Avec Nous, les verbes en -ger gardent un e (\"nous mangeons\"), et ceux en -cer prennent une cédille (\"nous commençons\").',
      '⚠️ ALLER EST UNE EXCEPTION : Aller finit par -er mais appartient au 3e groupe car son radical change (je vais, nous allons).'
    ],
    rules: [
      'Les terminaisons je, tu, il, ils sont phonétiquement identiques (base homophone : [parl]). Seules nous [-ons] et vous [-ez] changent de son.'
    ]
  },

  // 6. Terminaisons du 2e Groupe (-ir : Finir)
  verbes_ir_2e: {
    id: 'verbes_ir_2e',
    title: 'Conjugaison du 2e Groupe (-IR type Finir) avec Infixe -ISS-',
    badge: 'A1 · Verbes Réguliers en -IR',
    summary: 'Les verbes du 2e groupe (finir, choisir, réussir, grandir, réfléchir) se caractérisent par l’apparition du double \"-ss-\" sonore [s] à toutes les personnes du pluriel (nous, vous, ils).',
    formula: 'Radical + Terminaisons : -is, -is, -it, -issons, -issez, -issent',
    negationFormula: 'Sujet + ne + Verbe(-IR) + pas',
    headers: ['Sujet', 'Terminaison', 'Finir (Exemple)', 'Choisir (Sonore [z])', 'Sens en Anglais'],
    rows: [
      ['Je', '-is [i]', 'Je finis à 18 heures.', 'Je choisis ce plat.', 'I finish / I choose'],
      ['Tu', '-is [i]', 'Tu finis ton travail ?', 'Tu choisis quoi ?', 'You finish / You choose'],
      ['Il / Elle / On', '-it [i]', 'Il finit son café.', 'Elle choisit sa robe.', 'He/She finishes / chooses'],
      ['Nous', '-issons [isõ]', 'Nous finissons bientôt.', 'Nous choisissons ensemble.', 'We finish / We choose'],
      ['Vous', '-issez [ise]', 'Vous finissez à quelle heure ?', 'Vous choisissez le rouge ?', 'You finish / You choose'],
      ['Ils / Elles', '-issent [is]', 'Ils finissent leurs études.', 'Elles choisissent ce voyage.', 'They finish / They choose']
    ],
    traps: [
      '⚠️ NE CONFONDEZ PAS AVEC LE 3e GROUPE : Partir, dormir, sortir et venir finissent par -ir mais NE prennent JAMAIS \"-iss-\" (nous partons, nous dormons). Ils appartiennent au 3e groupe !',
      '⚠️ ACCORD DU PLURIEL : Le son \"iss\" est obligatoire au pluriel : \"Nous finissons\", \"Ils réussissent\".'
    ],
    rules: [
      'Test du participe présent : Si le verbe fait \"-issant\" (finissant, choisissant, réussissant), c’est un verbe régulier du 2e groupe.'
    ]
  },

  // 7. Verbes en -ir du 3e groupe (Sortir & Dormir)
  verbes_ir_3e: {
    id: 'verbes_ir_3e',
    title: 'Verbes en -IR Irréguliers du 3e Groupe : Sortir, Partir & Dormir',
    badge: 'A1 · Verbes Fréquents du Quotidien',
    summary: 'Contrairement au 2e groupe, ces verbes en -ir perdent la consonne finale de leur radical au singulier et prennent les terminaisons -s, -s, -t, puis retrouvent leur radical complet au pluriel SANS infixe -iss-.',
    formula: 'Singulier : radical court + -s, -s, -t  |  Pluriel : radical plein + -ons, -ez, -ent',
    negationFormula: 'Sujet + ne + Verbe + pas',
    headers: ['Sujet', 'Sortir (To go out)', 'Partir (To leave)', 'Dormir (To sleep)', 'Sens en Anglais'],
    rows: [
      ['Je', 'Je sors ce soir.', 'Je pars en voyage.', 'Je dors huit heures.', 'I go out / leave / sleep'],
      ['Tu', 'Tu sors à quelle heure ?', 'Tu pars quand ?', 'Tu dors bien ?', 'You go out / leave / sleep'],
      ['Il / Elle', 'Il sort avec ses amis.', 'Elle part en vacances.', 'Il dort profondément.', 'He/She goes out / leaves / sleeps'],
      ['Nous', 'Nous sortons ensemble.', 'Nous partons demain.', 'Nous dormons à l’hôtel.', 'We go out / leave / sleep'],
      ['Vous', 'Vous sortez souvent ?', 'Vous partez à midi ?', 'Vous dormez combien de temps ?', 'You go out / leave / sleep'],
      ['Ils / Elles', 'Ils sortent tard.', 'Elles partent bientôt.', 'Ils dorment encore.', 'They go out / leave / sleep']
    ],
    traps: [
      '⚠️ PAS DE \"-ISS-\" ! Ne dites JAMAIS \"nous sortissons\" ni \"nous dormissons\" ! Dites : \"nous sortons\", \"nous dormons\", \"nous partons\".',
      '⚠️ TERMINAISON DU SINGULIER : La 3e personne du singulier prend un -T (il sort, il part, il dort), JAMAIS un -d ou -e.'
    ],
    rules: [
      'Famille SORTIR : sortir, ressortir.',
      'Famille PARTIR : partir, repartir.',
      'Famille DORMIR : dormir, endormir.'
    ]
  },

  // 8. Les Trois Registres de Questions
  questions_3formes: {
    id: 'questions_3formes',
    title: 'Les 3 Registres d’Interrogation : Intonation, Est-ce que, Inversion',
    badge: 'A1 · Communication & Registres',
    summary: 'En français, poser une question peut se faire de trois façons selon le contexte social : familier (intonation montante), courant (est-ce que), ou formel/soutenu (inversion verbe-sujet).',
    formula: '1. Familier : Phrase affirmative ?  2. Courant : Est-ce que + Sujet + Verbe ?  3. Formel : Verbe-Sujet ?',
    negationFormula: 'Est-ce que tu ne viens pas ? | Ne viens-tu pas ?',
    headers: ['Registre', 'Structure', 'Exemple Réel du Cours', 'Traduction Anglaise'],
    rows: [
      ['Familier / Oral', 'Sujet + Verbe + ? (intonation ↗)', 'Tu viens avec nous ce soir ?', 'Are you coming with us tonight?'],
      ['Courant / Standard', 'Est-ce que + Sujet + Verbe ?', 'Est-ce que tu viens avec nous ce soir ?', 'Are you coming with us tonight?'],
      ['Soutenu / Écrit', 'Verbe-Sujet (Inversion) ?', 'Viens-tu avec nous ce soir ?', 'Are you coming with us tonight?'],
      ['Avec Mot Interrogatif', 'Où + est-ce que...', 'Où est-ce que vous habitez ?', 'Where do you live?'],
      ['Mot Interrogatif Oral', 'Sujet + Verbe + Où ?', 'Vous habitez où ?', 'Where do you live? (casual)'],
      ['Question Ouverte Formelle', 'Où + Verbe-Sujet ?', 'Où habitez-vous ?', 'Where do you live? (formal)'],
      ['T euphonique', 'Verbe-t-il/elle ?', 'Habite-t-il à Paris ?', 'Does he live in Paris?']
    ],
    traps: [
      '⚠️ ORDRE AVEC EST-CE QUE : Après \"Est-ce que\", l’ordre des mots reste STRICTEMENT normal (Sujet + Verbe) : \"Est-ce que vous parlez français ?\" (et NON \"Est-ce que parlez-vous\").',
      '⚠️ LE T EUPHONIQUE : En inversion, si le verbe se termine par une voyelle et que le pronom est il/elle/on, on ajoute obligatoirement un \"-t-\" : \"Aime-t-il ?\", \"Parle-t-elle ?\" (pour éviter le choc de deux voyelles).'
    ],
    rules: [
      'Mots interrogatifs clés : Où (lieu), Quand (temps), Comment (manière), Pourquoi (cause), Qui (personne), Que / Qu’est-ce que (chose), Combien (quantité).'
    ]
  },

  // 9. Déménager ≠ Emménager ≠ Aménager
  demenager_emmenager: {
    id: 'demenager_emmenager',
    title: 'Vocabulaire du Logement : Déménager ≠ Emménager ≠ Aménager',
    badge: 'A1.2 · Vie Pratique & Domicile',
    summary: 'Ces trois verbes proches ont des sens très différents dans le parcours d’un logement : quitter un ancien lieu (déménager), s’installer dans un nouveau (emménager), et meubler/décorer l’espace (aménager).',
    formula: 'DÉMÉNAGER (quitter) ≠ EMMÉNAGER (entrer) ≠ AMÉNAGER (agencer/meubler)',
    negationFormula: 'Je ne veux pas déménager | Nous n’avons pas encore emménagé',
    headers: ['Verbe', 'Préfixe & Sens', 'Exemple Réel du Cours A1.2', 'Sens en Anglais'],
    rows: [
      ['Déménager', 'Dé- = quitter son ancien logement', 'Nous déménageons le week-end prochain.', 'We are moving out next weekend.'],
      ['Emménager', 'Em- = s’installer dans le nouveau', 'Sarah a emménagé dans son nouvel appartement.', 'Sarah moved into her new apartment.'],
      ['Aménager', 'A- = agencer, meubler et décorer', 'Ils ont aménagé le salon avec goût.', 'They arranged / furnished the living room tastefully.'],
      ['Faire ses cartons', 'Préparation', 'Avant de déménager, il faut faire les cartons.', 'Before moving, one must pack the boxes.'],
      ['La crémaillère', 'Fête d’installation', 'Nous fêtons la pendaison de crémaillère samedi.', 'We are having our housewarming party on Saturday.']
    ],
    traps: [
      '⚠️ CONFUSION CLASSIQUE DÉMÉNAGER / EMMÉNAGER : \"J’ai déménagé dans mon nouvel appart\" est une imprécision courante. Pour l’entrée dans le nouveau lieu, dites : \"J’ai emménagé\".',
      '⚠️ PRÉPOSITIONS ASSOCIÉES : On déménage DE quelque part, et on emménage DANS un nouvel endroit.'
    ],
    rules: [
      'Tous trois sont des verbes réguliers du 1er groupe (-er) : je déménage, nous déménageons (avec -e pour préserver le son doux du g).'
    ]
  },

  // 10. Prépositions de Lieu Complexes (sur/sous vs à côté de / en face de)
  prepositions_lieu: {
    id: 'prepositions_lieu',
    title: 'Prépositions de Lieu : Simples (sans DE) vs Composées (avec DE / DU / DES)',
    badge: 'A1.2 · Orientation & Description',
    summary: 'Pour situer des objets ou des pièces dans l’espace, les prépositions simples se lient directement au nom (sur la table), tandis que les prépositions composées exigent \"DE\" qui se contracte obligatoirement avec les articles le/les.',
    formula: 'Simples : sur, sous, dans, devant, derrière, entre + Nom | Composées : à côté de, en face de, au-dessus de + Nom',
    negationFormula: 'N/A',
    headers: ['Catégorie', 'Préposition', 'Exemple Réel du Cours', 'Traduction Anglaise'],
    rows: [
      ['Simple (sans de)', 'sur (on top)', 'Les clés sont sur la table.', 'The keys are on the table.'],
      ['Simple (sans de)', 'sous (under)', 'Le chat dort sous le lit.', 'The cat is sleeping under the bed.'],
      ['Simple (sans de)', 'dans (inside)', 'Mes affaires sont dans le carton.', 'My things are in the box.'],
      ['Simple (sans de)', 'devant (in front)', 'La voiture est garée devant l’immeuble.', 'The car is parked in front of the building.'],
      ['Simple (sans de)', 'derrière (behind)', 'Le jardin se trouve derrière la maison.', 'The garden is located behind the house.'],
      ['Simple (sans de)', 'entre (between)', 'La table de nuit est entre les deux lits.', 'The nightstand is between the two beds.'],
      ['Composée (avec de)', 'à côté de (next to)', 'La cuisine est à côté du salon (de + le).', 'The kitchen is next to the living room.'],
      ['Composée (avec de)', 'en face de (opposite)', 'La pharmacie est en face de la gare.', 'The pharmacy is across from the station.'],
      ['Composée (avec de)', 'au-dessus de (above)', 'Le miroir est au-dessus du lavabo.', 'The mirror is above the sink.'],
      ['Composée (avec de)', 'au bout de (at end of)', 'La salle de bains est au bout du couloir.', 'The bathroom is at the end of the hallway.']
    ],
    traps: [
      '⚠️ CONTRACTION DU ET DES : Ne dites JAMAIS \"à côté de le salon\" ! Dites toujours \"à côté DU salon\" et \"en face DES magasins\".',
      '⚠️ SOUS vs AU-DESSOUS DE : \"Sous\" est direct (en contact ou immédiatement en dessous). \"Au-dessous de\" implique un niveau inférieur.'
    ],
    rules: [
      'Contractions avec DE : de + le = DU ; de + les = DES ; de + la = DE LA ; de + l’ = DE L’.'
    ]
  },

  // 11. Familles de Participes Passés (-é, -i, -u, -is, -it, -ert)
  participes_passes: {
    id: 'participes_passes',
    title: 'Les 6 Grandes Familles de Participes Passés (-é, -i, -u, -is, -it, -ert)',
    badge: 'A1.2 · Morphologie du Passé Composé',
    summary: 'Le participe passé des verbes français suit des règles de terminaison très claires regroupées en 6 familles principales. Les mémoriser par terminaison permet de conjuguer sans hésitation.',
    formula: '1er groupe (-er) ➜ -é | 2e groupe (-ir) ➜ -i | 3e groupe ➜ -u, -is, -it, -ert',
    negationFormula: 'N/A',
    headers: ['Famille', 'Verbes Clés', 'Participe Passé', 'Exemple Réel du Cours', 'Sens en Anglais'],
    rows: [
      ['Famille en -É', 'parler, manger, aller, aimer', 'parlé, mangé, allé, aimé', 'J’ai parlé avec le directeur.', 'I spoke with the director.'],
      ['Famille en -I', 'finir, choisir, sortir, partir', 'fini, choisi, sorti, parti', 'Elle a fini son travail à temps.', 'She finished her work on time.'],
      ['Famille en -U', 'voir, vouloir, pouvoir, boire, lire', 'vu, voulu, pu, bu, lu', 'Il a bu un café et a lu le journal.', 'He drank a coffee and read the newspaper.'],
      ['Famille en -U (spécial)', 'avoir, savoir, devoir, recevoir', 'eu [y], su, dû, reçu', 'J’ai eu une opportunité en or.', 'I had a golden opportunity.'],
      ['Famille en -IS', 'prendre, apprendre, comprendre, mettre', 'pris, appris, compris, mis', 'Nous avons pris le train de huit heures.', 'We took the eight o’clock train.'],
      ['Famille en -IT', 'dire, écrire, faire', 'dit, écrit, fait', 'Elle m’a dit la vérité.', 'She told me the truth.'],
      ['Famille en -ERT', 'ouvrir, découvrir, offrir', 'ouvert, découvert, offert', 'Ils ont ouvert la fenêtre du salon.', 'They opened the living room window.'],
      ['Exception Majeure', 'être (to be)', 'été', 'Mon séjour à Paris a été magnifique.', 'My stay in Paris was magnificent.']
    ],
    traps: [
      '⚠️ PRONONCIATION DE \"EU\" : Le participe passé de avoir s’écrit \"eu\" mais se prononce simplement [y] (comme la lettre u) !',
      '⚠️ DÛ AVEC ACCENT CIRCONFLEXE : Le participe masculin singulier de devoir prend un accent circonflexe (\"dû\") pour le distinguer de l’article partitif \"du\" (\"J’ai dû partir\").'
    ],
    rules: [
      'Féminin des participes en -is, -it, -ert : on entend la consonne finale au féminin ! (pris ➜ prise ; écrit ➜ écrite ; ouvert ➜ ouverte).'
    ]
  },

  // 12. Négation & Place des Adverbes au Passé Composé
  passe_compose_syntax: {
    id: 'passe_compose_syntax',
    title: 'Passé Composé : Négation et Place des Adverbes Interposés',
    badge: 'A1.2 · Syntaxe & Ordre des Mots',
    summary: 'Au passé composé, la négation (ne... pas, ne... jamais, ne... rien) et les adverbes courts de quantité ou d’appréciation (bien, mal, beaucoup, trop, déjà) se placent TOUJOURS entre l’auxiliaire et le participe passé.',
    formula: 'Négation : Sujet + ne + [Auxiliaire] + pas + [Participe]  |  Adverbe : Sujet + [Auxiliaire] + [Adverbe] + [Participe]',
    negationFormula: 'Sujet + ne/n’ + [ai/as/a/avons/avez/ont] + pas + [Participe Passé]',
    headers: ['Élément Inséré', 'Position', 'Exemple Réel du Cours', 'Sens en Anglais'],
    rows: [
      ['ne ... pas', 'Encadre l’auxiliaire', 'Je n’ai pas compris la question.', 'I did not understand the question.'],
      ['ne ... jamais', 'Encadre l’auxiliaire', 'Il n’a jamais habité en ville.', 'He has never lived in the city.'],
      ['ne ... rien', 'Encadre l’auxiliaire', 'Elle n’a rien mangé ce matin.', 'She ate nothing this morning.'],
      ['bien / mal', 'Entre auxiliaire et participe', 'Vous avez très bien parlé français.', 'You spoke French very well.'],
      ['beaucoup / trop', 'Entre auxiliaire et participe', 'J’ai trop mangé hier soir.', 'I ate too much yesterday evening.'],
      ['déjà', 'Entre auxiliaire et participe', 'Nous avons déjà fait nos valises.', 'We have already packed our bags.'],
      ['Adverbes longs en -ment', 'Placés APRÈS le participe', 'Il a conduit prudemment sur la route.', 'He drove carefully on the road.']
    ],
    traps: [
      '⚠️ ERREUR FRÉQUENTE SUR LA NÉGATION : Ne dites JAMAIS \"J’ai ne compris pas\" ou \"J’ai pas compris\" à l’écrit. La structure exacte est : \"Je N’ai PAS compris\".',
      '⚠️ ERREUR SUR LA PLACE DE BEAUCOUP : Ne dites pas \"J’ai mangé beaucoup hier\", mais : \"J’ai BEAUCOUP mangé hier\".'
    ],
    rules: [
      'Adverbes courts interposés : bien, mal, beaucoup, un peu, trop, assez, déjà, encore, toujours.',
      'Adverbes de temps précis (hier, demain, tard) se placent en début ou en fin de phrase : \"Hier, nous avons visité le musée\".'
    ]
  },

  // 13. Expressions d’Appréciation : Trouver + Adj vs Plaire à
  trouver_plaire: {
    id: 'trouver_plaire',
    title: 'Donner son Avis : Trouver (+ Adj) vs Plaire à quelqu’un',
    badge: 'A1.3 · Opinions & Sentiments',
    summary: 'Pour exprimer son appréciation, le français offre deux constructions majeures : active personnelle (\"Je trouve ce film super\") et passive d’affinité où l’objet devient le sujet qui plaît (\"Ce film me plaît beaucoup\").',
    formula: 'TROUVER + [COD] + Adjectif (accord en genre et nombre)  |  [Sujet/Objet] + PLAIRE À + [COI / Personne]',
    negationFormula: 'Je ne trouve pas cette ville agréable | Cette idée ne me plaît pas du tout',
    headers: ['Verbe', 'Construction Requise', 'Exemple Réel du Cours PDF', 'Traduction Anglaise'],
    rows: [
      ['Trouver (masculin)', 'trouver + COD masculin + adj', 'Je trouve cet appartement très lumineux.', 'I find this apartment very bright.'],
      ['Trouver (féminin)', 'trouver + COD féminin + adj (+e)', 'Je trouve cette ville magnifique.', 'I find this city magnificent.'],
      ['Trouver (pluriel)', 'trouver + COD pluriel + adj (+s)', 'Je trouve ces cours très utiles.', 'I find these classes very useful.'],
      ['Plaire à (1re pers.)', 'Objet + me plaît / plaisent', 'Cette musique me plaît énormément.', 'I really like this music (it pleases me).'],
      ['Plaire à (pluriel)', 'Objets pluriels + plaisent', 'Ces tableaux me plaisent beaucoup.', 'I like these paintings a lot.'],
      ['Plaire à qqn (nom)', 'plaît à + Nom', 'Ce projet plaît beaucoup à mes collègues.', 'My colleagues like this project a lot.'],
      ['Plaire à (lui / leur)', 'Pronom COI + plaît', 'Paris lui plaît beaucoup.', 'He/She likes Paris a lot.']
    ],
    traps: [
      '⚠️ PLAIRE S’ACCORDE AVEC CE QUI PLAÎT, PAS AVEC VOUS ! Dans \"Les fleurs me plaisent\", le sujet est \"les fleurs\" (pluriel ➜ plaisent), et NON \"me\" !',
      '⚠️ ACCORD DE L’ADJECTIF AVEC TROUVER : Dans \"Je la trouve belle\", belle s’accorde avec le pronom COD \"la\" (féminin singulier).'
    ],
    rules: [
      'Conjugaison de PLAIRE au présent : il/elle plaît (avec accent circonflexe sur le î), ils/elles plaisent.',
      'Au passé composé : le participe passé de plaire est PLU (strictement invariable) : \"Elle m’a plu\", \"Ils nous ont plu\".'
    ]
  }
};

module.exports = { NEW_GRAMMAR_STRUCTURES };
