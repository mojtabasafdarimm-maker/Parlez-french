/* Parlez Curriculum Cards: A1.1 Foundations, A1.2 Extensions & Core Grammar Rules
   Extracted from class slide decks (@mahsa_the_linguaphile), Édito A1, and Grammaire progressive. */
(function () {
  'use strict';

  const C = (id, kind, level, lesson, topic, scene, french, english, pron, example, exampleEn, note = '', tags = []) => ({
    id,
    kind,
    level,
    lesson,
    topic,
    scene,
    frenchAnswer: french,
    englishPrompt: english,
    pronunciation: pron,
    frenchExample: example,
    exampleEnglish: exampleEn,
    grammarNote: note,
    tags,
    reviews: 0,
    interval: 0,
    ease: 2.5,
    dueAt: 0,
    lastReviewed: 0,
    mastered: false,
    customImage: null
  });

  const a1_1_cards = [
    // --- Séances 1 & 2: Greetings, Politeness & Classroom Communication ---
    C('c1_bonjour', 'vocab', 'A1.1', 'A1.1 · Séances 1–2', 'Greetings', 'greeting-day',
      'Bonjour !', 'Hello / Good morning', 'bohn-ZHOOR',
      'Bonjour, comment allez-vous ?', 'Hello, how are you?',
      'Standard greeting during daytime.'),

    C('c1_bonsoir', 'vocab', 'A1.1', 'A1.1 · Séances 1–2', 'Greetings', 'greeting-night',
      'Bonsoir !', 'Good evening', 'bohn-SWAHR',
      'Bonsoir tout le monde !', 'Good evening everyone!',
      'Used from late afternoon / evening.'),

    C('c1_salut', 'vocab', 'A1.1', 'A1.1 · Séances 1–2', 'Greetings', 'wave-hand',
      'Salut !', 'Hi / Bye (informal)', 'sah-LEW',
      'Salut, ça va bien ?', 'Hi, is it going well?',
      'Informal greeting used with friends and family.'),

    C('c1_merci', 'vocab', 'A1.1', 'A1.1 · Séances 1–2', 'Greetings', 'thanks',
      'Merci beaucoup !', 'Thank you very much', 'mair-SEE boh-KOO',
      'Merci beaucoup pour votre aide.', 'Thank you very much for your help.',
      'Polite gratitude expression.'),

    C('c1_silvousplait', 'vocab', 'A1.1', 'A1.1 · Séances 1–2', 'Greetings', 'polite',
      'S’il vous plaît', 'Please (formal / plural)', 'seel voo PLEH',
      'Un café, s’il vous plaît.', 'A coffee, please.',
      'Formal form (s’il te plaît is informal).'),

    C('c1_commentcava', 'sentence', 'A1.1', 'A1.1 · Séances 1–2', 'Greetings', 'chat-friends',
      'Comment ça va ?', 'How are you? (informal)', 'koh-mahn sah VAH',
      'Ça va bien, merci. Et toi ?', 'I am fine, thank you. And you?',
      'Informal way to ask how someone is doing.'),

    C('c1_commentallezvous', 'sentence', 'A1.1', 'A1.1 · Séances 1–2', 'Greetings', 'handshake',
      'Comment allez-vous ?', 'How are you? (formal / plural)', 'koh-mahn tah-lay VOO',
      'Bonjour madame, comment allez-vous ?', 'Good morning madam, how are you?',
      'Formal greeting for professionals or elders.'),

    C('c1_aurevoir', 'vocab', 'A1.1', 'A1.1 · Séances 1–2', 'Greetings', 'wave-bye',
      'Au revoir !', 'Goodbye', 'oh ruh-VWAHR',
      'Au revoir et bonne journée !', 'Goodbye and have a good day!',
      'Standard departure formula.'),

    C('c1_ademain', 'vocab', 'A1.1', 'A1.1 · Séances 1–2', 'Greetings', 'calendar-tomorrow',
      'À demain !', 'See you tomorrow', 'ah duh-MAHN',
      'Bonne soirée et à demain !', 'Have a good evening and see you tomorrow!',
      'Used when you see the person next day.'),

    C('c1_bonnejournee', 'vocab', 'A1.1', 'A1.1 · Séances 1–2', 'Greetings', 'sun-day',
      'Bonne journée !', 'Have a nice day!', 'bohn zhoor-NAY',
      'Merci, bonne journée à vous aussi !', 'Thank you, have a nice day as well!',
      'Wished when parting during daytime.'),

    C('c1_bonnesoiree', 'vocab', 'A1.1', 'A1.1 · Séances 1–2', 'Greetings', 'moon-evening',
      'Bonne soirée !', 'Have a nice evening!', 'bohn swah-RAY',
      'Au revoir et bonne soirée !', 'Goodbye and have a great evening!',
      'Wished when parting in late afternoon or evening.'),

    C('c1_repetez', 'sentence', 'A1.1', 'A1.1 · Séances 1–2', 'Classroom', 'listen-repeat',
      'Répétez, s’il vous plaît', 'Repeat, please', 'ray-pay-TAY seel voo PLEH',
      'Pouvez-vous répéter la phrase, s’il vous plaît ?', 'Can you repeat the sentence, please?',
      'Crucial classroom phrase when you did not catch a word.'),

    C('c1_commentcasecrit', 'sentence', 'A1.1', 'A1.1 · Séances 1–2', 'Classroom', 'spell-letters',
      'Comment ça s’écrit ?', 'How is that spelled?', 'koh-mahn sah say-KREE',
      'Pardon, comment ça s’écrit votre prénom ?', 'Excuse me, how is your first name spelled?',
      'Used to ask for spelling of names or new vocabulary.'),

    // --- Séances 3 & 4: Hobbies, Sports, Likes & Dislikes ---
    C('c1_aimer', 'vocab', 'A1.1', 'A1.1 · Séances 3–4', 'Tastes', 'heart-like',
      'aimer', 'to like / love', 'eh-MAY',
      'J’aime beaucoup la musique classique.', 'I like classical music very much.',
      'Regular -er verb: j’aime, tu aimes, il aime, nous aimons.'),

    C('c1_detester', 'vocab', 'A1.1', 'A1.1 · Séances 3–4', 'Tastes', 'dislike',
      'détester', 'to hate / dislike strongly', 'day-tehs-TAY',
      'Il déteste le bruit de la ville.', 'He hates the noise of the city.',
      'Regular -er verb: je déteste, tu détestes...'),

    C('c1_adorer', 'vocab', 'A1.1', 'A1.1 · Séances 3–4', 'Tastes', 'adore-star',
      'adorer', 'to adore / love passionately', 'ah-doh-RAY',
      'J’adore voyager en France en été.', 'I love travelling in France in summer.',
      'Stronger than aimer: j’adore.'),

    C('c1_musique', 'vocab', 'A1.1', 'A1.1 · Séances 3–4', 'Hobbies', 'music-notes',
      'la musique', 'music', 'lah mew-ZEEK',
      'J’écoute de la musique tous les soirs.', 'I listen to music every evening.',
      'Feminine noun: la musique.'),

    C('c1_lecture', 'vocab', 'A1.1', 'A1.1 · Séances 3–4', 'Hobbies', 'book-reading',
      'la lecture', 'reading', 'lah lek-TEWR',
      'La lecture est ma passion préférée.', 'Reading is my favourite passion.',
      'Noun from lire: la lecture.'),

    C('c1_sport', 'vocab', 'A1.1', 'A1.1 · Séances 3–4', 'Hobbies', 'sport-running',
      'le sport (faire du sport)', 'sport / exercising', 'luh spor',
      'Je fais du sport deux fois par semaine.', 'I exercise twice a week.',
      'Idiom: faire du sport.'),

    C('c1_randonnee', 'vocab', 'A1.1', 'A1.1 · Séances 3–4', 'Hobbies', 'hiking-trail',
      'la randonnée', 'hiking', 'lah rahn-doh-NAY',
      'Nous faisons une randonnée dans la montagne.', 'We go on a hike in the mountain.',
      'Feminine noun: faire de la randonnée.'),

    C('c1_chien', 'vocab', 'A1.1', 'A1.1 · Séances 3–4', 'Animals', 'dog',
      'le chien', 'the dog', 'luh shyahn',
      'J’ai un chien affectueux et joueur.', 'I have an affectionate and playful dog.',
      'Masculine: le chien / feminine: la chienne.'),

    C('c1_chat', 'vocab', 'A1.1', 'A1.1 · Séances 3–4', 'Animals', 'cat',
      'le chat', 'the cat', 'luh shah',
      'Mon chat dort sur le canapé.', 'My cat sleeps on the sofa.',
      'Masculine: le chat / feminine: la chatte.'),

    C('c1_cafe', 'vocab', 'A1.1', 'A1.1 · Séances 3–4', 'Food', 'cup-coffee',
      'le café (boire du café)', 'coffee (to drink coffee)', 'luh kah-FAY',
      'Je bois un café noir le matin.', 'I drink a black coffee in the morning.',
      'Partitive: boire du café.'),

    C('c1_the', 'vocab', 'A1.1', 'A1.1 · Séances 3–4', 'Food', 'cup-tea',
      'le thé', 'tea', 'luh tay',
      'Tu préfères le thé vert ou le thé noir ?', 'Do you prefer green tea or black tea?',
      'Masculine noun: le thé.'),

    C('c1_jouer_echecs', 'sentence', 'A1.1', 'A1.1 · Séances 3–4', 'Games', 'chess-board',
      'jouer aux échecs', 'to play chess', 'zhoo-AY ohz ay-SHEK',
      'Nous jouons aux échecs le dimanche.', 'We play chess on Sundays.',
      'Rule: Jouer à + games/sports (à + les = aux).'),

    C('c1_jouer_guitare', 'sentence', 'A1.1', 'A1.1 · Séances 3–4', 'Music', 'guitar',
      'jouer de la guitare', 'to play the guitar', 'zhoo-AY duh lah gee-TAR',
      'Elle joue de la guitare acoustique.', 'She plays acoustic guitar.',
      'Rule: Jouer de + musical instruments.'),

    // --- Séances 5 & 6: Contact Info, Living & Numbers 0–1000 ---
    C('c1_arobase', 'vocab', 'A1.1', 'A1.1 · Séances 5–6', 'Contact', 'symbol-at',
      'arobase (@)', 'at symbol (@)', 'ah-roh-BAHZ',
      'Mon adresse courriel contient une arobase.', 'My email address contains an at sign.',
      'Pronounced arobase in French.'),

    C('c1_point', 'vocab', 'A1.1', 'A1.1 · Séances 5–6', 'Contact', 'symbol-dot',
      'point (.)', 'dot / period (.)', 'pwan',
      'Mon courriel se termine par point com.', 'My email ends in dot com.',
      'Used for URLs and emails.'),

    C('c1_tiret', 'vocab', 'A1.1', 'A1.1 · Séances 5–6', 'Contact', 'symbol-dash',
      'tiret (-)', 'dash / hyphen (-)', 'tee-REH',
      'Il y a un tiret entre les deux mots.', 'There is a dash between the two words.',
      'Hyphen or dash.'),

    C('c1_tiret_bas', 'vocab', 'A1.1', 'A1.1 · Séances 5–6', 'Contact', 'symbol-underscore',
      'tiret bas (_)', 'underscore (_)', 'tee-REH bah',
      'Mon identifiant contient un tiret bas.', 'My username contains an underscore.',
      'Underscore in email/usernames.'),

    C('c1_telephone', 'vocab', 'A1.1', 'A1.1 · Séances 5–6', 'Contact', 'phone-call',
      'le numéro de téléphone', 'phone number', 'luh new-may-ROH duh tay-lay-FOHN',
      'Quel est votre numéro de téléphone ?', 'What is your phone number?',
      'Spoken in pairs of digits in France.'),

    C('c1_habiter', 'vocab', 'A1.1', 'A1.1 · Séances 5–6', 'Living', 'house-home',
      'habiter', 'to live / reside', 'ah-bee-TAY',
      'J’habite à Paris dans un petit appartement.', 'I live in Paris in a small flat.',
      'J’habite à + city / en/au + country.'),

    C('c1_vivre', 'vocab', 'A1.1', 'A1.1 · Séances 5–6', 'Living', 'city-living',
      'vivre', 'to live / to be alive (3rd group)', 'VEE-vruh',
      'Je vis bien ici avec mes amis.', 'I live well here with my friends.',
      'Irregular: je vis, tu vis, il vit, nous vivons, vous vivez, ils vivent.'),

    C('c1_soixante_dix', 'vocab', 'A1.1', 'A1.1 · Séances 5–6', 'Numbers', 'num-70',
      'soixante-dix (70)', 'seventy (60+10)', 'swah-SAHNT dees',
      'Mon grand-père a soixante-dix ans.', 'My grandfather is seventy years old.',
      'Formula: 60 + 10 = 70.'),

    C('c1_quatre_vingts', 'vocab', 'A1.1', 'A1.1 · Séances 5–6', 'Numbers', 'num-80',
      'quatre-vingts (80)', 'eighty (4x20)', 'katr-VAHN',
      'Ce livre coûte quatre-vingts euros.', 'This book costs eighty euros.',
      'Formula: 4 x 20. Note final -s drops if followed by another number.'),

    C('c1_quatre_vingt_dix', 'vocab', 'A1.1', 'A1.1 · Séances 5–6', 'Numbers', 'num-90',
      'quatre-vingt-dix (90)', 'ninety (4x20+10)', 'katr-vahn-DEES',
      'La salle compte quatre-vingt-dix places.', 'The hall has ninety seats.',
      'Formula: 4 x 20 + 10.'),

    C('c1_cent', 'vocab', 'A1.1', 'A1.1 · Séances 5–6', 'Numbers', 'num-100',
      'cent (100)', 'one hundred', 'sahn',
      'Il y a cent pages dans ce carnet.', 'There are a hundred pages in this notebook.',
      'Plural: deux cents (takes -s if alone at end).'),

    C('c1_mille', 'vocab', 'A1.1', 'A1.1 · Séances 5–6', 'Numbers', 'num-1000',
      'mille (1000)', 'one thousand', 'meel',
      'Cette ville a plus de mille ans d’histoire.', 'This city has more than a thousand years of history.',
      'Invariable: never takes an -s in French.'),

    // --- Séances 7 & 8: Questions & City Places ---
    C('c1_qui', 'vocab', 'A1.1', 'A1.1 · Séances 7–8', 'Questions', 'question-who',
      'qui', 'who', 'kee',
      'Qui travaille à la mairie avec vous ?', 'Who works at the city hall with you?',
      'Interrogative pronoun for people.'),

    C('c1_que', 'vocab', 'A1.1', 'A1.1 · Séances 7–8', 'Questions', 'question-what',
      'qu’est-ce que / que', 'what', 'kesk / kuh',
      'Qu’est-ce que vous regardez à la télévision ?', 'What are you watching on TV?',
      'Used for things or actions.'),

    C('c1_ou', 'vocab', 'A1.1', 'A1.1 · Séances 7–8', 'Questions', 'map-pin',
      'où', 'where', 'oo',
      'Où habitez-vous exactement ?', 'Where do you live exactly?',
      'Note accent on où (distinguishes from ou = or).'),

    C('c1_quand', 'vocab', 'A1.1', 'A1.1 · Séances 7–8', 'Questions', 'calendar-when',
      'quand', 'when', 'kahn',
      'Quand commence votre cours de français ?', 'When does your French class start?',
      'Interrogative word for time.'),

    C('c1_comment', 'vocab', 'A1.1', 'A1.1 · Séances 7–8', 'Questions', 'question-how',
      'comment', 'how', 'koh-MAHN',
      'Comment venez-vous à l’école ?', 'How do you come to school?',
      'Used for manner, condition or means.'),

    C('c1_combien', 'vocab', 'A1.1', 'A1.1 · Séances 7–8', 'Questions', 'price-tag',
      'combien (combien de)', 'how much / how many', 'kohn-BYAHN',
      'Combien coûte ce ticket de métro ?', 'How much does this metro ticket cost?',
      'Used for quantity and price.'),

    C('c1_pourquoi', 'vocab', 'A1.1', 'A1.1 · Séances 7–8', 'Questions', 'question-why',
      'pourquoi', 'why', 'poor-KWAH',
      'Pourquoi apprenez-vous le français ?', 'Why are you learning French?',
      'Answered with parce que (because).'),

    C('c1_bibliotheque', 'vocab', 'A1.1', 'A1.1 · Séances 7–8', 'City', 'library-shelves',
      'la bibliothèque', 'the library', 'lah bee-blee-oh-TEK',
      'J’emprunte des livres à la bibliothèque municipale.', 'I borrow books at the municipal library.',
      'Feminine noun: une bibliothèque.'),

    C('c1_quartier', 'vocab', 'A1.1', 'A1.1 · Séances 7–8', 'City', 'neighborhood-street',
      'le quartier', 'the neighborhood / district', 'luh kar-TYAY',
      'Mon quartier est calme et agréable.', 'My neighborhood is quiet and pleasant.',
      'Masculine noun: un quartier.'),

    C('c1_mairie', 'vocab', 'A1.1', 'A1.1 · Séances 7–8', 'City', 'city-hall',
      'la mairie', 'the town hall / mayor’s office', 'lah may-REE',
      'Nous allons à la mairie pour nos démarches.', 'We go to the town hall for our administrative steps.',
      'Feminine noun: la mairie.'),

    // --- Séances 9 & 10: Everyday Expressions, Family & Professions ---
    C('c1_quoidebeau', 'sentence', 'A1.1', 'A1.1 · Séances 9–10', 'Expressions', 'speech-bubbles',
      'Quoi de beau ? (Quoi de neuf ?)', 'What’s good? / What’s new?', 'KWAH duh BOH',
      'Salut ! Quoi de beau depuis hier ?', 'Hi! What’s good since yesterday?',
      'Casual conversation starter between friends.'),

    C('c1_riendespecial', 'sentence', 'A1.1', 'A1.1 · Séances 9–10', 'Expressions', 'casual-shrug',
      'Rien de spécial (Rien de nouveau)', 'Nothing special / Nothing new', 'RYAHN duh spay-SYAHL',
      'Rien de spécial, le train-train quotidien.', 'Nothing special, just the daily routine.',
      'Common relaxed reply.'),

    C('c1_traintrain', 'vocab', 'A1.1', 'A1.1 · Séances 9–10', 'Expressions', 'daily-train',
      'le train-train quotidien', 'the daily grind / daily routine', 'luh tran-tran koh-tee-DYAHN',
      'La vie suit son train-train habituel.', 'Life follows its usual routine.',
      'Idiom for the repetitive daily rhythm.'),

    C('c1_parents', 'vocab', 'A1.1', 'A1.1 · Séances 9–10', 'Family', 'family-parents',
      'les parents', 'the parents', 'lay pah-RAHN',
      'Mes parents habitent près de chez moi.', 'My parents live near my place.',
      'Plural noun: les parents.'),

    C('c1_pere', 'vocab', 'A1.1', 'A1.1 · Séances 9–10', 'Family', 'family-father',
      'le père', 'the father', 'luh pair',
      'Mon père aime lire le journal.', 'My father likes reading the newspaper.',
      'Masculine: le père (informal: papa).'),

    C('c1_mere', 'vocab', 'A1.1', 'A1.1 · Séances 9–10', 'Family', 'family-mother',
      'la mère', 'the mother', 'lah mair',
      'Ma mère est une excellente cuisinière.', 'My mother is an excellent cook.',
      'Feminine: la mère (informal: maman).'),

    C('c1_frere', 'vocab', 'A1.1', 'A1.1 · Séances 9–10', 'Family', 'family-brother',
      'le frère', 'the brother', 'luh frair',
      'J’ai un frère aîné.', 'I have an older brother.',
      'Masculine noun: le frère.'),

    C('c1_soeur', 'vocab', 'A1.1', 'A1.1 · Séances 9–10', 'Family', 'family-sister',
      'la sœur', 'the sister', 'lah sir',
      'Sa sœur joue très bien du violon.', 'His sister plays the violin very well.',
      'Feminine noun: la sœur.'),

    C('c1_enfants', 'vocab', 'A1.1', 'A1.1 · Séances 9–10', 'Family', 'family-children',
      'les enfants', 'the children', 'layz ahn-FAHN',
      'Ils ont deux enfants joyeux.', 'They have two joyful children.',
      'Plural noun: un enfant (m/f).'),

    C('c1_oncle', 'vocab', 'A1.1', 'A1.1 · Séances 9–10', 'Family', 'family-uncle',
      'l’oncle (tonton)', 'the uncle', 'lohnkl',
      'Mon oncle nous rend visite ce dimanche.', 'My uncle visits us this Sunday.',
      'Child language: tonton.'),

    C('c1_tante', 'vocab', 'A1.1', 'A1.1 · Séances 9–10', 'Family', 'family-aunt',
      'la tante (tata)', 'the aunt', 'lah tahnt',
      'Ma tante habite dans le sud.', 'My aunt lives in the south.',
      'Child language: tata.'),

    C('c1_enseignant', 'vocab', 'A1.1', 'A1.1 · Séances 9–10', 'Professions', 'prof-teacher',
      'l’enseignant(e)', 'the teacher', 'lahn-say-NYAHN',
      'Notre enseignante explique clairement.', 'Our teacher explains clearly.',
      'Masculine: enseignant; feminine: enseignante.'),

    C('c1_medecin', 'vocab', 'A1.1', 'A1.1 · Séances 9–10', 'Professions', 'prof-doctor',
      'le médecin', 'the physician / doctor', 'luh mayd-SAHN',
      'Le médecin consulte à l’hôpital.', 'The doctor consults at the hospital.',
      'Un médecin / une femme médecin.'),

    C('c1_avocat', 'vocab', 'A1.1', 'A1.1 · Séances 9–10', 'Professions', 'prof-lawyer',
      'l’avocat(e)', 'the lawyer / attorney', 'lah-voh-KAH',
      'L’avocate défend son dossier avec énergie.', 'The lawyer defends her case with energy.',
      'Masculine: avocat; feminine: avocate.'),

    C('c1_infirmier', 'vocab', 'A1.1', 'A1.1 · Séances 9–10', 'Professions', 'prof-nurse',
      'l’infirmier / l’infirmière', 'the nurse', 'lahn-feer-MYAY',
      'L’infirmière prend la tension du patient.', 'The nurse takes the patient’s blood pressure.',
      'Masculine: infirmier; feminine: infirmière.'),

    C('c1_coiffeur', 'vocab', 'A1.1', 'A1.1 · Séances 9–10', 'Professions', 'prof-hairdresser',
      'le coiffeur / la coiffeuse', 'the hairdresser', 'luh kwah-FUHR',
      'Le coiffeur coupe les cheveux au salon.', 'The hairdresser cuts hair at the salon.',
      'Works in un salon de coiffure.'),

    C('c1_architecte', 'vocab', 'A1.1', 'A1.1 · Séances 9–10', 'Professions', 'prof-architect',
      'l’architecte', 'the architect', 'lar-shee-TEKT',
      'L’architecte conçoit des bâtiments durables.', 'The architect designs sustainable buildings.',
      'Same spelling in masculine and feminine.'),

    C('c1_pilote', 'vocab', 'A1.1', 'A1.1 · Séances 9–10', 'Professions', 'prof-pilot',
      'le pilote d’avion', 'the airplane pilot', 'luh pee-LOT dah-VYOHN',
      'Le pilote atterrit à Paris Charles-de-Gaulle.', 'The pilot lands at Paris Charles-de-Gaulle.',
      'Un pilote / une pilote.')
  ];

  const a1_2_cards = [
    // --- Séances 1 & 2: Verbes en -ir (2e et 3e groupes) & Sentiments ---
    C('c2_finir', 'vocab', 'A1.2', 'A1.2 · Séances 1–2', 'Verbes -ir', 'finish-flag',
      'finir', 'to finish / end', 'fee-NEER',
      'Je finis la leçon avant de sortir.', 'I finish the lesson before going out.',
      '2e groupe régulier : je finis, tu finis, il finit, nous finissons, vous finissez, ils finissent.'),

    C('c2_choisir', 'vocab', 'A1.2', 'A1.2 · Séances 1–2', 'Verbes -ir', 'choose-path',
      'choisir', 'to choose', 'shwah-ZEER',
      'Nous choisissons le menu du jour.', 'We choose the daily special menu.',
      '2e groupe : nous choisissons, vous choisissez.'),

    C('c2_rougir', 'vocab', 'A1.2', 'A1.2 · Séances 1–2', 'Verbes -ir', 'blush-face',
      'rougir', 'to blush / turn red', 'roo-ZHEER',
      'Elle rougit quand on lui fait un compliment.', 'She blushes when someone gives her a compliment.',
      '2e groupe : il/elle rougit, ils rougissent.'),

    C('c2_reflechir', 'vocab', 'A1.2', 'A1.2 · Séances 1–2', 'Verbes -ir', 'reflect-think',
      'réfléchir', 'to think / reflect', 'ray-flay-SHEER',
      'Je réfléchis à votre proposition.', 'I am thinking about your proposal.',
      '2e groupe : je réfléchis, nous réfléchissons.'),

    C('c2_sortir', 'vocab', 'A1.2', 'A1.2 · Séances 1–2', 'Verbes 3e groupe', 'exit-door',
      'sortir', 'to go out / exit (3rd group)', 'sor-TEER',
      'Nous sortons souvent le vendredi soir.', 'We often go out on Friday evenings.',
      '3e groupe (irrégulier) : je sors, tu sors, il sort, nous sortons, ils sortent.'),

    C('c2_partir', 'vocab', 'A1.2', 'A1.2 · Séances 1–2', 'Verbes 3e groupe', 'suitcase-depart',
      'partir', 'to depart / leave (3rd group)', 'par-TEER',
      'Notre train part à dix-neuf heures quarante-trois.', 'Our train departs at 7:43 p.m.',
      '3e groupe : je pars, tu pars, il part, nous partons.'),

    C('c2_dormir', 'vocab', 'A1.2', 'A1.2 · Séances 1–2', 'Verbes 3e groupe', 'sleep-zzz',
      'dormir', 'to sleep (3rd group)', 'dor-MEER',
      'Il est fatigué alors il dort tranquillement.', 'He is tired, so he sleeps peacefully.',
      '3e groupe : je dors, tu dors, il dort, nous dormons, ils dorment.'),

    C('c2_servir', 'vocab', 'A1.2', 'A1.2 · Séances 1–2', 'Verbes 3e groupe', 'serve-tray',
      'servir', 'to serve (food/drinks)', 'sair-VEER',
      'Ce restaurant sert d’excellents plats végétariens.', 'This restaurant serves excellent vegetarian dishes.',
      '3e groupe : il sert, nous servons, ils servent.'),

    C('c2_se_sentir_bien', 'sentence', 'A1.2', 'A1.2 · Séances 1–2', 'Sentiments', 'feel-good',
      'se sentir bien', 'to feel well / good', 'suh sahn-TEER byahn',
      'Je me sens très bien aujourd’hui.', 'I feel very well today.',
      'Verbe pronominal : je me sens, tu te sens, elle se sent.'),

    C('c2_se_sentir_fatigue', 'sentence', 'A1.2', 'A1.2 · Séances 1–2', 'Sentiments', 'feel-tired',
      'se sentir fatigué(e)', 'to feel tired', 'suh sahn-TEER fah-tee-GAY',
      'Après le travail, elle se sent fatiguée.', 'After work, she feels tired.',
      'Accord de l’adjectif : fatigué (m) / fatiguée (f).'),

    C('c2_proche_de', 'vocab', 'A1.2', 'A1.2 · Séances 1–2', 'Espace', 'near-distance',
      'être proche de (près de)', 'to be close to / near', 'ET-ruh PROSH duh',
      'Le musée d’art est très proche de la gare.', 'The art museum is very close to the station.',
      'Contraction : proche de + le = proche du.'),

    C('c2_loin_de', 'vocab', 'A1.2', 'A1.2 · Séances 1–2', 'Espace', 'far-distance',
      'être loin de', 'to be far from', 'ET-ruh LWAHN duh',
      'L’aéroport international est loin du centre-ville.', 'The international airport is far from the city center.',
      'Contraction : loin de + le = loin du.'),

    // --- Séances 3 & 4: Transports, Déplacements & Itinéraire ---
    C('c2_bus', 'vocab', 'A1.2', 'A1.2 · Séances 3–4', 'Transports', 'transit-bus',
      'le bus', 'the bus', 'luh bews',
      'Je prends le bus tous les jours pour aller au travail.', 'I take the bus every day to go to work.',
      'Moyen de transport fermé : en bus.'),

    C('c2_metro', 'vocab', 'A1.2', 'A1.2 · Séances 3–4', 'Transports', 'transit-metro',
      'le métro', 'the subway / metro', 'luh may-TROH',
      'Nous prenons le métro car c’est plus rapide.', 'We take the metro because it is faster.',
      'Préposition : en métro.'),

    C('c2_tramway', 'vocab', 'A1.2', 'A1.2 · Séances 3–4', 'Transports', 'transit-tram',
      'le tramway (le tram)', 'the tramway / streetcar', 'luh trahm-WAY',
      'Elle monte dans le tramway à la station République.', 'She gets on the tram at Republique station.',
      'Nom masculin : le tramway.'),

    C('c2_velo', 'vocab', 'A1.2', 'A1.2 · Séances 3–4', 'Transports', 'transit-bike',
      'le vélo (à vélo)', 'the bicycle / by bike', 'luh vay-LOH',
      'Je me déplace à vélo pour faire du sport.', 'I get around by bike to exercise.',
      'Moyen de transport ouvert : préposition à (à vélo).'),

    C('c2_a_pied', 'vocab', 'A1.2', 'A1.2 · Séances 3–4', 'Transports', 'transit-walk',
      'à pied', 'on foot / walking', 'ah PYAY',
      'Vous allez à l’école à pied tous les matins.', 'You go to school on foot every morning.',
      'Expression fixe avec préposition à : à pied.'),

    C('c2_monter', 'vocab', 'A1.2', 'A1.2 · Séances 3–4', 'Déplacements', 'board-bus',
      'monter dans', 'to get on / board', 'mohn-TAY dahn',
      'Nous montons dans le bus au carrefour.', 'We get on the bus at the crossroads.',
      'Monter dans le bus / le train / le tram.'),

    C('c2_descendre', 'vocab', 'A1.2', 'A1.2 · Séances 3–4', 'Déplacements', 'alight-bus',
      'descendre de', 'to get off / alight (3rd group)', 'day-SAHN-druh duh',
      'Vous descendez au prochain arrêt, s’il vous plaît.', 'You get off at the next stop, please.',
      'Descendre du bus (de + le = du).'),

    C('c2_tourner_gauche', 'sentence', 'A1.2', 'A1.2 · Séances 3–4', 'Itinéraire', 'turn-left',
      'tourner à gauche', 'to turn left', 'toor-NAY ah GOHSH',
      'Au bout de l’avenue, tournez à gauche.', 'At the end of the avenue, turn left.',
      'Indication de direction : à gauche.'),

    C('c2_tourner_droite', 'sentence', 'A1.2', 'A1.2 · Séances 3–4', 'Itinéraire', 'turn-right',
      'tourner à droite', 'to turn right', 'toor-NAY ah DWAHT',
      'Prenez la deuxième rue à droite.', 'Take the second street on the right.',
      'Indication de direction : à droite.'),

    C('c2_tout_droit', 'sentence', 'A1.2', 'A1.2 · Séances 3–4', 'Itinéraire', 'straight-ahead',
      'continuer tout droit', 'to keep going straight', 'kohn-teen-way too DWAH',
      'Continuez tout droit jusqu’au feu tricolore.', 'Continue straight ahead until the traffic light.',
      'Tout droit = droit devant vous.'),

    C('c2_traverser', 'vocab', 'A1.2', 'A1.2 · Séances 3–4', 'Itinéraire', 'cross-street',
      'traverser la rue', 'to cross the street', 'trah-vair-SAY lah REW',
      'Traversez la rue sur le passage piéton.', 'Cross the street on the pedestrian crossing.',
      '1er groupe : traverser le pont, la rue, la place.'),

    C('c2_au_bout_de', 'vocab', 'A1.2', 'A1.2 · Séances 3–4', 'Itinéraire', 'end-street',
      'au bout de', 'at the end of', 'oh BOO duh',
      'La pharmacie se trouve au bout de la rue.', 'The pharmacy is located at the end of the street.',
      'Au bout de la rue / au bout du couloir.'),

    // --- Séances 5 & 6: Vêtements, Style & Les Trois Temps ---
    C('c2_chemise', 'vocab', 'A1.2', 'A1.2 · Séances 5–6', 'Vêtements', 'cloth-shirt',
      'la chemise', 'the collared shirt', 'lah shuh-MEEZ',
      'Il met une chemise blanche pour aller à la fête.', 'He puts on a white shirt to go to the party.',
      'Nom féminin : une chemise.'),

    C('c2_pantalon', 'vocab', 'A1.2', 'A1.2 · Séances 5–6', 'Vêtements', 'cloth-pants',
      'le pantalon', 'the trousers / pants', 'luh pahn-tah-LOHN',
      'Ce pantalon noir est très élégant et confortable.', 'These black trousers are very elegant and comfortable.',
      'Singulier en français : un pantalon.'),

    C('c2_robe', 'vocab', 'A1.2', 'A1.2 · Séances 5–6', 'Vêtements', 'cloth-dress',
      'la robe', 'the dress', 'lah ROHB',
      'Elle porte une jolie robe rouge pour la soirée.', 'She wears a pretty red dress for the evening.',
      'Nom féminin : une robe.'),

    C('c2_jupe', 'vocab', 'A1.2', 'A1.2 · Séances 5–6', 'Vêtements', 'cloth-skirt',
      'la jupe', 'the skirt', 'lah ZHEWP',
      'Elle met une jupe avec un pull bleu.', 'She wears a skirt with a blue sweater.',
      'Nom féminin : une jupe.'),

    C('c2_pull', 'vocab', 'A1.2', 'A1.2 · Séances 5–6', 'Vêtements', 'cloth-sweater',
      'le pull', 'the sweater / jumper', 'luh PEWL',
      'En hiver, je porte un pull en laine bien chaud.', 'In winter, I wear a warm wool sweater.',
      'Nom masculin : un pull (pull-over).'),

    C('c2_manteau', 'vocab', 'A1.2', 'A1.2 · Séances 5–6', 'Vêtements', 'cloth-coat',
      'le manteau', 'the coat / overcoat', 'luh mahn-TOH',
      'Prends ton manteau chaud, il fait froid dehors.', 'Take your warm coat, it is cold outside.',
      'Nom masculin : un manteau (pluriel : manteaux).'),

    C('c2_baskets', 'vocab', 'A1.2', 'A1.2 · Séances 5–6', 'Vêtements', 'cloth-sneakers',
      'les baskets', 'the sneakers / trainers', 'lay bahs-KET',
      'Il porte un short et des baskets pour courir.', 'He wears shorts and sneakers to run.',
      'Nom féminin pluriel : des baskets.'),

    C('c2_echarpe_bonnet', 'vocab', 'A1.2', 'A1.2 · Séances 5–6', 'Vêtements', 'cloth-winter',
      'l’écharpe et le bonnet', 'the scarf and beanie', 'lay-SHARP ay luh boh-NAY',
      'Pour aller skier, elle prend une écharpe et un bonnet.', 'To go skiing, she takes a scarf and a beanie.',
      'Une écharpe (f), un bonnet (m).'),

    C('c2_moufles', 'vocab', 'A1.2', 'A1.2 · Séances 5–6', 'Vêtements', 'cloth-mittens',
      'les moufles', 'the mittens', 'lay MOO-fluh',
      'Les enfants portent des moufles chaudes dans la neige.', 'The children wear warm mittens in the snow.',
      'Les moufles (sans séparation des doigts) vs les gants.'),

    C('c2_en_train_de', 'sentence', 'A1.2', 'A1.2 · Séances 5–6', 'Grammaire Tense', 'action-now',
      'être en train de + infinitif', 'to be currently doing (présent continu)', 'ET-ruh ahn TRAN duh',
      'Il est en train de regarder la télévision.', 'He is in the middle of watching television.',
      'Action en cours : être (conj.) + en train de + verbe à l’infinitif.'),

    C('c2_venir_de', 'sentence', 'A1.2', 'A1.2 · Séances 5–6', 'Grammaire Tense', 'action-just-done',
      'venir de + infinitif', 'to have just done (passé récent)', 'vuh-NEER duh',
      'Elle vient de manger un bon sandwich.', 'She has just eaten a good sandwich.',
      'Passé très récent : venir (conj.) + de + verbe à l’infinitif.'),

    C('c2_aller_futur', 'sentence', 'A1.2', 'A1.2 · Séances 5–6', 'Grammaire Tense', 'action-future',
      'aller + infinitif', 'to be going to do (futur proche)', 'ah-LAY',
      'Nous allons prendre le bus dans dix minutes.', 'We are going to take the bus in ten minutes.',
      'Futur proche : aller (conj.) + verbe à l’infinitif.'),

    // --- Séances 7 & 8: Vie quotidienne, Corvées & Invitations ---
    C('c2_se_reveiller', 'vocab', 'A1.2', 'A1.2 · Séances 7–8', 'Quotidien', 'routine-wake',
      'se réveiller', 'to wake up', 'suh ray-vay-YAY',
      'Je me réveille à six heures et demie du matin.', 'I wake up at six-thirty in the morning.',
      'Ouvrir les yeux : verbe pronominal se réveiller.'),

    C('c2_se_lever', 'vocab', 'A1.2', 'A1.2 · Séances 7–8', 'Quotidien', 'routine-rise',
      'se lever', 'to get out of bed / get up', 'suh luh-VAY',
      'Elle se réveille à six heures et se lève à six heures et quart.', 'She wakes up at six and gets out of bed at 6:15.',
      'Sortir du lit : je me lève, tu te lèves, il se lève.'),

    C('c2_faire_courses', 'vocab', 'A1.2', 'A1.2 · Séances 7–8', 'Corvées', 'chore-groceries',
      'faire les courses', 'to go grocery shopping', 'FAIR lay KOORS',
      'Le samedi matin, nous faisons les courses au marché.', 'On Saturday mornings, we do the grocery shopping at the market.',
      'Faire les courses = achats de nourriture.'),

    C('c2_faire_cuisine', 'vocab', 'A1.2', 'A1.2 · Séances 7–8', 'Corvées', 'chore-cooking',
      'faire la cuisine (cuisiner)', 'to cook / prepare food', 'FAIR lah kwee-ZEEN',
      'Mon père aime faire la cuisine le dimanche.', 'My father likes cooking on Sundays.',
      'Synonyme du verbe cuisiner.'),

    C('c2_passer_aspirateur', 'vocab', 'A1.2', 'A1.2 · Séances 7–8', 'Corvées', 'chore-vacuum',
      'passer l’aspirateur', 'to vacuum the floor', 'pah-SAY lah-spee-rah-TUHR',
      'Je passe l’aspirateur dans le salon tous les vendredis.', 'I vacuum the living room every Friday.',
      'Nom masculin : un aspirateur.'),

    C('c2_faire_lessive', 'vocab', 'A1.2', 'A1.2 · Séances 7–8', 'Corvées', 'chore-laundry',
      'faire la lessive (laver le linge)', 'to do the laundry', 'FAIR lah leh-SEEV',
      'Elle fait la lessive pour laver ses vêtements.', 'She does the laundry to wash her clothes.',
      'Faire la lessive = laver le linge.'),

    C('c2_faire_vaisselle', 'vocab', 'A1.2', 'A1.2 · Séances 7–8', 'Corvées', 'chore-dishes',
      'faire la vaisselle', 'to do the dishes', 'FAIR lah veh-SEL',
      'Après le dîner, nous faisons la vaisselle ensemble.', 'After dinner, we do the dishes together.',
      'Nom féminin : la vaisselle.'),

    C('c2_avoir_du_mal', 'sentence', 'A1.2', 'A1.2 · Séances 7–8', 'Expressions', 'struggle-task',
      'avoir du mal à + infinitif', 'to have trouble / difficulty doing', 'ah-VWAHR dew MAHL ah',
      'J’ai du mal à me lever tôt le lundi matin.', 'I have trouble getting up early on Monday morning.',
      'Structure : avoir du mal à + verbe infinitif.'),

    C('c2_ca_te_dit', 'sentence', 'A1.2', 'A1.2 · Séances 7–8', 'Invitations', 'invite-ask',
      'Ça te dit de... ?', 'Do you feel like...? / How about...?', 'sah tuh DEE duh',
      'Ça te dit de regarder un bon film ce soir ?', 'Do you feel like watching a good movie tonight?',
      'Formule courante pour proposer une sortie à un ami.'),

    C('c2_bonne_idee', 'sentence', 'A1.2', 'A1.2 · Séances 7–8', 'Invitations', 'invite-accept',
      'Bonne idée ! (Je veux bien)', 'Great idea! / I’d love to', 'BOHN ee-DAY',
      'Bonne idée ! Je suis totalement libre ce soir.', 'Great idea! I am completely free tonight.',
      'Accepter une invitation chaleureusement.'),

    C('c2_pas_disponible', 'sentence', 'A1.2', 'A1.2 · Séances 7–8', 'Invitations', 'invite-decline',
      'Je ne suis pas disponible (occupé/e)', 'I am not available / I am busy', 'zhuh nuh swee pah dees-poh-NEEBL',
      'Désolé, je ne suis pas disponible aujourd’hui.', 'Sorry, I am not available today.',
      'Refuser poliment une proposition.'),

    C('c2_se_retrouver', 'vocab', 'A1.2', 'A1.2 · Séances 7–8', 'Invitations', 'meetup-friends',
      'se retrouver', 'to meet up', 'suh ruh-troo-VAY',
      'On se retrouve devant le cinéma à vingt heures.', 'We are meeting up in front of the cinema at 8 p.m.',
      'Verbe pronominal : on se retrouve.'),

    // --- Séances Pratique & Dialogues: Au Marché & Au Restaurant ---
    C('c2_quest_ce_quil_faut', 'sentence', 'A1.2', 'A1.2 · Marché & Resto', 'Au Marché', 'market-vendor',
      'Qu’est-ce qu’il vous faudra ?', 'What can I get you? (merchant question)', 'kesk eel voo foh-DRAH',
      'Bonjour madame, qu’est-ce qu’il vous faudra ?', 'Good morning madam, what can I get you?',
      'Question standard du commerçant au marché.'),

    C('c2_je_vais_prendre', 'sentence', 'A1.2', 'A1.2 · Marché & Resto', 'Au Marché', 'market-tomatoes',
      'Je vais prendre...', 'I will take / I’ll have...', 'zhuh vay PRAHN-druh',
      'Je vais prendre un kilo de belles tomates rouges.', 'I will take a kilo of nice red tomatoes.',
      'Formule polie pour passer commande.'),

    C('c2_mettez_en', 'sentence', 'A1.2', 'A1.2 · Marché & Resto', 'Au Marché', 'market-scale',
      'Mettez-m’en un kilo', 'Give me a kilo of it / Put me down for a kilo', 'meh-tay MAHN uhn kee-LOH',
      'Ces oignons sont parfaits, mettez-m’en un kilo.', 'These onions are great, give me a kilo of them.',
      'Impératif avec pronom en : mettez-m’en.'),

    C('c2_laitue', 'vocab', 'A1.2', 'A1.2 · Marché & Resto', 'Au Marché', 'market-lettuce',
      'une belle laitue', 'a nice head of lettuce', 'ewn bel lay-TEW',
      'Je voudrais aussi une belle laitue fraîche.', 'I would also like a nice fresh head of lettuce.',
      'Nom féminin : la laitue (salade).'),

    C('c2_combien_oignons', 'sentence', 'A1.2', 'A1.2 · Marché & Resto', 'Au Marché', 'market-price',
      'Ils sont à combien ?', 'How much are they?', 'eel sohnt ah kohn-BYAHN',
      'Ils sont à combien vos citrons ? — Un euro pièce !', 'How much are your lemons? — One euro each!',
      'Formule orale pour demander le prix au marché.'),

    C('c2_ce_sera_tout', 'sentence', 'A1.2', 'A1.2 · Marché & Resto', 'Au Marché', 'market-bag',
      'Ce sera tout', 'That will be all', 'suh suh-RAH TOO',
      'Merci beaucoup, ce sera tout pour aujourd’hui.', 'Thank you very much, that will be all for today.',
      'Pour conclure ses achats chez un commerçant.'),

    C('c2_ca_fera', 'sentence', 'A1.2', 'A1.2 · Marché & Resto', 'Au Marché', 'market-coins',
      'Ça nous fera...', 'That will come to / That will be...', 'sah noo fuh-RAH',
      'Alors, une laitue et les oignons, ça nous fera trois euros.', 'So, a lettuce and the onions, that will be three euros.',
      'Formule du commerçant pour annoncer le total.'),

    C('c2_tenez', 'vocab', 'A1.2', 'A1.2 · Marché & Resto', 'Au Marché', 'hand-give',
      'Tenez !', 'Here you go!', 'tuh-NAY',
      'Tenez, voilà la monnaie exacte.', 'Here you go, here is the exact change.',
      'Dit en tendant de l’argent ou un objet.'),

    C('c2_reserver_resto', 'sentence', 'A1.2', 'A1.2 · Marché & Resto', 'Au Restaurant', 'resto-book',
      'Vous avez réservé ?', 'Have you reserved / booked?', 'voo zah-vay ray-zair-VAY',
      'Bonjour monsieur, vous avez réservé une table ?', 'Good morning sir, have you booked a table?',
      'Première question à l’entrée d’un restaurant.'),

    C('c2_reste_de_la_place', 'sentence', 'A1.2', 'A1.2 · Marché & Resto', 'Au Restaurant', 'resto-table',
      'Il vous reste de la place ?', 'Do you have a table / room left?', 'eel voo rest duh lah PLAHS',
      'Nous n’avons pas réservé, il vous reste de la place ?', 'We have not reserved, do you have room left?',
      'Question du client sans réservation.'),

    C('c2_suivez_moi', 'sentence', 'A1.2', 'A1.2 · Marché & Resto', 'Au Restaurant', 'resto-host',
      'Suivez-moi, je vous en prie', 'Follow me, please', 'swee-vay MWAH zhuh voo zahn PREE',
      'Oui, venez en salle. Suivez-moi, je vous en prie.', 'Yes, come into the dining room. Follow me, please.',
      'Dit par le serveur pour guider le client.'),

    C('c2_prendre_commande', 'sentence', 'A1.2', 'A1.2 · Marché & Resto', 'Au Restaurant', 'resto-order',
      'Je peux prendre votre commande ?', 'May I take your order?', 'zhuh puh PRAHN-druh vohtr koh-MAHND',
      'Bonjour, je peux prendre votre commande maintenant ?', 'Hello, may I take your order now?',
      'Question du serveur avant le repas.'),

    C('c2_garniture', 'vocab', 'A1.2', 'A1.2 · Marché & Resto', 'Au Restaurant', 'resto-plate',
      'la garniture', 'the side dish / garnish', 'lah gar-nee-TEWR',
      'C’est quoi comme garniture ? — Des pommes de terre.', 'What is the side dish? — Potatoes.',
      'Accompagnement du plat principal.'),

    C('c2_addition', 'sentence', 'A1.2', 'A1.2 · Marché & Resto', 'Au Restaurant', 'resto-bill',
      'L’addition, s’il vous plaît !', 'The bill / check, please!', 'lah-dee-SYOHN seel voo PLEH',
      'C’était délicieux. L’addition, s’il vous plaît !', 'It was delicious. The bill, please!',
      'Formule polie pour demander la note au restaurant.')
  ];

  const grammar_cards = [
    // --- Targeted Grammar Rule Flashcards ---
    C('gr_negation_pas', 'grammar', 'A1', 'Grammaire · Négation', 'Négation', 'gram-negation',
      'la négation : ne... pas', 'negation: not', 'nuh ... PAH',
      'Je ne vais pas à l’école le dimanche.', 'I do not go to school on Sundays.',
      'Règle : sujet + ne (n’ devant voyelle) + verbe + pas.'),

    C('gr_negation_jamais', 'grammar', 'A1', 'Grammaire · Négation', 'Négation', 'gram-negation',
      'la négation : ne... jamais', 'negation: never', 'nuh ... zhah-MEH',
      'Je ne prends jamais l’avion pour ce trajet.', 'I never take the plane for this trip.',
      'Règle : ne + verbe + jamais remplace pas pour exprimer la fréquence nulle.'),

    C('gr_negation_plus', 'grammar', 'A1', 'Grammaire · Négation', 'Négation', 'gram-negation',
      'la négation : ne... plus', 'negation: no more / no longer', 'nuh ... PLEW',
      'Il ne travaille plus dans cette entreprise.', 'He no longer works at this company.',
      'Règle : indique une action terminée qui n’a plus lieu.'),

    C('gr_negation_rien', 'grammar', 'A1', 'Grammaire · Négation', 'Négation', 'gram-negation',
      'la négation : ne... rien', 'negation: nothing', 'nuh ... RYAHN',
      'Je n’ai rien à déclarer à la douane.', 'I have nothing to declare at customs.',
      'Règle : ne + verbe + rien exprime l’absence totale d’objet.'),

    C('gr_prep_countries', 'grammar', 'A1', 'Grammaire · Prépositions', 'Prépositions', 'gram-prepositions',
      'prépositions de pays : en, au, aux', 'prepositions for countries', 'ahn, oh, oh',
      'J’habite en France, au Canada et aux États-Unis.', 'I live in France, in Canada, and in the United States.',
      'En + pays féminin / voyelle (en Italie), Au + masculin (au Japon), Aux + pluriel (aux Pays-Bas).'),

    C('gr_prep_cities', 'grammar', 'A1', 'Grammaire · Prépositions', 'Prépositions', 'gram-prepositions',
      'préposition de ville : à', 'preposition for cities: in / at', 'ah',
      'J’habite à Paris et je travaille à Lyon.', 'I live in Paris and I work in Lyon.',
      'Toujours à devant un nom de ville sans article (à Téhéran, à Montréal, à Nice).'),

    C('gr_prep_chez', 'grammar', 'A1', 'Grammaire · Prépositions', 'Prépositions', 'gram-prepositions',
      'préposition chez + personne', 'preposition chez (at someone’s place)', 'shay',
      'Ce soir, je vais chez le médecin puis chez mes amis.', 'Tonight, I go to the doctor’s then to my friends’ place.',
      'Chez s’emploie avec une personne ou un nom de métier (chez moi, chez le coiffeur).'),

    C('gr_aller_vs_prendre', 'grammar', 'A1', 'Grammaire · Verbes', 'Verbes & Transports', 'gram-transport-verbs',
      'aller + lieu vs prendre + transport', 'aller (destination) vs prendre (vehicle)', 'ah-LAY vs PRAHN-druh',
      'Je prends le bus pour aller au travail.', 'I take the bus to go to work.',
      'Règle : Aller + lieu (à la piscine, au cinéma) ; Prendre + transport avec article (le bus, le train).'),

    C('gr_jouer_a_vs_de', 'grammar', 'A1', 'Grammaire · Verbes', 'Verbes & Activités', 'gram-sports-music',
      'jouer à (sport/jeu) vs jouer de (instrument)', 'jouer à (game/sport) vs jouer de (music)', 'zhoo-AY ah vs duh',
      'Je joue au tennis et je joue du piano.', 'I play tennis and I play the piano.',
      'Jouer à + sport/jeu (au football, aux cartes) ; Jouer de + instrument (de la guitare, du violon).'),

    C('gr_trois_temps', 'grammar', 'A1', 'Grammaire · Les Temps', 'Les Trois Temps', 'gram-timeline',
      'passé récent, présent continu, futur proche', 'recent past, continuous present, near future', 'lay trwah TAHN',
      'Je viens de manger, je suis en train d’étudier, je vais dormir.', 'I just ate, I am studying, I am going to sleep.',
      'Passé : venir de + inf ; Présent : être en train de + inf ; Futur : aller + inf.'),

    C('gr_verbes_er', 'grammar', 'A1', 'Grammaire · Conjugaison', 'Verbes -er (1er groupe)', 'gram-verb-endings',
      'terminaisons du 1er groupe (-er)', '1st group endings (-er)', 'ay-AIR',
      'aimer : j’aime, tu aimes, il aime, nous aimons, vous aimez, ils aiment.', 'to like: I like, you like, he likes, we like, you like, they like.',
      'Terminaisons régulières : -e, -es, -e, -ons, -ez, -ent.'),

    C('gr_verbes_ir_2e', 'grammar', 'A1', 'Grammaire · Conjugaison', 'Verbes -ir (2e groupe)', 'gram-verb-endings',
      'terminaisons du 2e groupe (-ir : finir)', '2nd group endings (-ir: finir)', 'fee-NEER',
      'finir : je finis, tu finis, il finit, nous finissons, vous finissez, ils finissent.', 'to finish: I finish, you finish, he finishes, we finish, you finish, they finish.',
      'Terminaisons avec double -ss- au pluriel : -is, -is, -it, -issons, -issez, -issent.'),

    C('gr_verbes_ir_3e', 'grammar', 'A1', 'Grammaire · Conjugaison', 'Verbes -ir (3e groupe)', 'gram-verb-endings',
      'verbes en -ir du 3e groupe : sortir & dormir', '3rd group verbs in -ir (sortir & dormir)', 'sor-TEER / dor-MEER',
      'sortir : je sors, tu sors, il sort, nous sortons, vous sortez, ils sortent.', 'to go out: I go out, you go out, he goes out, we go out, you go out, they go out.',
      'Irréguliers du 3e groupe : pas de double -ss- au pluriel (nous sortons, nous dormons).'),

    C('gr_questions_3formes', 'grammar', 'A1', 'Grammaire · Questions', 'Questions (3 registres)', 'gram-questions',
      'les 3 registres de questions', 'the 3 question registers', 'lay trwah FORM',
      'Tu as faim ? / Est-ce que tu as faim ? / As-tu faim ?', 'Are you hungry? (familiar / standard / formal)',
      '1. Familier : simple intonation montante ; 2. Courant : Est-ce que + sujet + verbe ; 3. Soutenu : Inversion sujet-verbe.')
  ];

  window.ParlezCurriculumCards = {
    a1_1: a1_1_cards,
    a1_2: a1_2_cards,
    grammar: grammar_cards,
    all: [...a1_1_cards, ...a1_2_cards, ...grammar_cards]
  };
})();
