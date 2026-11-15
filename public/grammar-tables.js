/* Parlez Comprehensive Grammar Reference & Tables
   Structured study center: 1st, 2nd & 3rd group verbs, past tenses (passé récent & passé composé),
   reflexive verbs (se/s'), constructions with "faire", and how every subject transforms the entire sentence.
   No flashcards — pure reference, structured tables, visual rules, and native French audio playback.
*/
'use strict';

window.ParlezGrammarTables = (() => {
  let activeSection = 'all'; // 'all' | 'groups' | 'passe' | 'reflexive' | 'faire' | 'matrix'
  let activeSubject = 'elle'; // spotlight subject in matrix
  let searchQuery = '';

  function esc(s = '') {
    return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function audioBtn(frenchText, label = 'Listen') {
    return `<button class="btn btn-secondary btn-sm gt-listen-btn" type="button" data-say-card="${esc(frenchText)}" aria-label="Listen to ${esc(frenchText)}">
      <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4zM15 9a5 5 0 0 1 0 6M18 6a9 9 0 0 1 0 12"/></svg>
      <span>${esc(label)}</span>
    </button>`;
  }

  /* -------------------------------------------------------------
     DATA STRUCTURES
  ------------------------------------------------------------- */

  // 1. VERB GROUPS DATA
  const group1Verbs = [
    {
      infinitive: 'parler',
      english: 'to speak / to talk',
      stem: 'parl-',
      endings: [
        { subject: 'Je', verb: 'parle', ending: '-e', sentence: 'Je parle français tous les jours.', english: 'I speak French every day.' },
        { subject: 'Tu', verb: 'parles', ending: '-es', sentence: 'Tu parles très bien avec tes amis.', english: 'You speak very well with your friends.' },
        { subject: 'Il / Elle / On', verb: 'parle', ending: '-e', sentence: 'Elle parle calmement au téléphone.', english: 'She speaks calmly on the phone.' },
        { subject: 'Nous', verb: 'parlons', ending: '-ons', sentence: 'Nous parlons de notre projet.', english: 'We are speaking about our project.' },
        { subject: 'Vous', verb: 'parlez', ending: '-ez', sentence: 'Vous parlez un français impeccable !', english: 'You speak impeccable French!' },
        { subject: 'Ils / Elles', verb: 'parlent', ending: '-ent', sentence: 'Ils parlent de leurs prochaines vacances.', english: 'They speak about their next holidays.' }
      ]
    },
    {
      infinitive: 'aimer',
      english: 'to like / to love (elision with vowel)',
      stem: 'aim-',
      endings: [
        { subject: 'J’', verb: 'aime', ending: '-e', sentence: 'J’aime la cuisine française et le café.', english: 'I love French food and coffee.' },
        { subject: 'Tu', verb: 'aimes', ending: '-es', sentence: 'Tu aimes te promener dans le parc.', english: 'You like walking in the park.' },
        { subject: 'Il / Elle / On', verb: 'aime', ending: '-e', sentence: 'Il aime lire un bon livre le soir.', english: 'He likes reading a good book in the evening.' },
        { subject: 'Nous', verb: 'aimons', ending: '-ons', sentence: 'Nous aimons voyager en train.', english: 'We love traveling by train.' },
        { subject: 'Vous', verb: 'aimez', ending: '-ez', sentence: 'Vous aimez la musique classique.', english: 'You like classical music.' },
        { subject: 'Ils / Elles', verb: 'aiment', ending: '-ent', sentence: 'Elles aiment cuisiner ensemble.', english: 'They love cooking together.' }
      ]
    },
    {
      infinitive: 'manger',
      english: 'to eat (-ger stem nuance: nous mangeons)',
      stem: 'mang-',
      endings: [
        { subject: 'Je', verb: 'mange', ending: '-e', sentence: 'Je mange une pomme rouge le matin.', english: 'I eat a red apple in the morning.' },
        { subject: 'Tu', verb: 'manges', ending: '-es', sentence: 'Tu manges à midi avec tes collègues.', english: 'You eat at noon with your colleagues.' },
        { subject: 'Il / Elle / On', verb: 'mange', ending: '-e', sentence: 'On mange souvent du pain frais.', english: 'We often eat fresh bread.' },
        { subject: 'Nous', verb: 'mangeons', ending: '-eons', sentence: 'Nous mangeons ensemble en famille.', english: 'We eat together as a family (keep "e" for soft sound!).' },
        { subject: 'Vous', verb: 'mangez', ending: '-ez', sentence: 'Vous mangez au restaurant ce soir ?', english: 'Are you eating at the restaurant tonight?' },
        { subject: 'Ils / Elles', verb: 'mangent', ending: '-ent', sentence: 'Ils mangent leur dîner tranquillement.', english: 'They eat their dinner quietly.' }
      ]
    }
  ];

  const group2Verbs = [
    {
      infinitive: 'finir',
      english: 'to finish / to end',
      stem: 'fin-',
      endings: [
        { subject: 'Je', verb: 'finis', ending: '-is', sentence: 'Je finis mon travail à dix-huit heures.', english: 'I finish my work at 6 PM.' },
        { subject: 'Tu', verb: 'finis', ending: '-is', sentence: 'Tu finis ton assiette avant de partir.', english: 'You finish your plate before leaving.' },
        { subject: 'Il / Elle / On', verb: 'finit', ending: '-it', sentence: 'Le cours finit dans dix minutes.', english: 'The class finishes in ten minutes.' },
        { subject: 'Nous', verb: 'finissons', ending: '-issons', sentence: 'Nous finissons de préparer les bagages.', english: 'We finish packing the luggage.' },
        { subject: 'Vous', verb: 'finissez', ending: '-issez', sentence: 'Vous finissez toujours à l’heure.', english: 'You always finish on time.' },
        { subject: 'Ils / Elles', verb: 'finissent', ending: '-issent', sentence: 'Elles finissent leur journée de travail.', english: 'They finish their workday.' }
      ]
    },
    {
      infinitive: 'choisir',
      english: 'to choose / to select',
      stem: 'chois-',
      endings: [
        { subject: 'Je', verb: 'choisis', ending: '-is', sentence: 'Je choisis un pull chaud pour l’hiver.', english: 'I choose a warm sweater for winter.' },
        { subject: 'Tu', verb: 'choisis', ending: '-is', sentence: 'Tu choisis le menu du jour.', english: 'You choose the daily special menu.' },
        { subject: 'Il / Elle / On', verb: 'choisit', ending: '-it', sentence: 'Elle choisit une jolie robe rouge.', english: 'She chooses a pretty red dress.' },
        { subject: 'Nous', verb: 'choisissons', ending: '-issons', sentence: 'Nous choisissons un bon film français.', english: 'We choose a good French movie.' },
        { subject: 'Vous', verb: 'choisissez', ending: '-issez', sentence: 'Vous choisissez quelle table ?', english: 'Which table do you choose?' },
        { subject: 'Ils / Elles', verb: 'choisissent', ending: '-issent', sentence: 'Ils choisissent de rester à la maison.', english: 'They choose to stay home.' }
      ]
    }
  ];

  const group3Verbs = [
    {
      infinitive: 'être',
      english: 'to be (Essential auxiliary & state verb)',
      type: 'Highly irregular',
      forms: [
        { subject: 'Je', verb: 'suis', sentence: 'Je suis très content d’apprendre le français.', english: 'I am very glad to learn French.' },
        { subject: 'Tu', verb: 'es', sentence: 'Tu es prêt pour partir ?', english: 'Are you ready to leave?' },
        { subject: 'Il / Elle / On', verb: 'est', sentence: 'Elle est à l’université en ce moment.', english: 'She is at the university right now.' },
        { subject: 'Nous', verb: 'sommes', sentence: 'Nous sommes fatigués après la longue marche.', english: 'We are tired after the long walk.' },
        { subject: 'Vous', verb: 'êtes', sentence: 'Vous êtes très gentils, merci beaucoup !', english: 'You are very kind, thank you so much!' },
        { subject: 'Ils / Elles', verb: 'sont', sentence: 'Ils sont en vacances dans le sud de la France.', english: 'They are on vacation in the south of France.' }
      ]
    },
    {
      infinitive: 'avoir',
      english: 'to have (Essential auxiliary & possession verb)',
      type: 'Highly irregular',
      forms: [
        { subject: 'J’', verb: 'ai', sentence: 'J’ai un rendez-vous important ce matin.', english: 'I have an important appointment this morning.' },
        { subject: 'Tu', verb: 'as', sentence: 'Tu as faim ou tu as soif ?', english: 'Are you hungry or thirsty?' },
        { subject: 'Il / Elle / On', verb: 'a', sentence: 'Il a vingt-cinq ans et il a une voiture.', english: 'He is 25 years old and has a car.' },
        { subject: 'Nous', verb: 'avons', sentence: 'Nous avons du temps pour discuter.', english: 'We have time to talk.' },
        { subject: 'Vous', verb: 'avez', sentence: 'Vous avez une question sur la leçon ?', english: 'Do you have a question about the lesson?' },
        { subject: 'Ils / Elles', verb: 'ont', sentence: 'Elles ont deux chats adorables.', english: 'They have two lovely cats.' }
      ]
    },
    {
      infinitive: 'aller',
      english: 'to go (Movement & futur proche auxiliary)',
      type: 'Irregular 3rd group (-er ending exception)',
      forms: [
        { subject: 'Je', verb: 'vais', sentence: 'Je vais au marché acheter des fruits frais.', english: 'I am going to the market to buy fresh fruit.' },
        { subject: 'Tu', verb: 'vas', sentence: 'Tu vas bien aujourd’hui ?', english: 'Are you doing well today?' },
        { subject: 'Il / Elle / On', verb: 'va', sentence: 'Elle va à la gare en métro.', english: 'She is going to the train station by metro.' },
        { subject: 'Nous', verb: 'allons', sentence: 'Nous allons au cinéma ce vendredi.', english: 'We are going to the cinema this Friday.' },
        { subject: 'Vous', verb: 'allez', sentence: 'Vous allez où pour le week-end ?', english: 'Where are you going for the weekend?' },
        { subject: 'Ils / Elles', verb: 'vont', sentence: 'Ils vont faire une promenade au bord du lac.', english: 'They are going for a walk by the lake.' }
      ]
    },
    {
      infinitive: 'faire',
      english: 'to do / to make (Actions, weather & activities)',
      type: 'Irregular 3rd group',
      forms: [
        { subject: 'Je', verb: 'fais', sentence: 'Je fais du café chaud dans la cuisine.', english: 'I am making hot coffee in the kitchen.' },
        { subject: 'Tu', verb: 'fais', sentence: 'Tu fais du vélo tous les dimanches matin.', english: 'You ride a bicycle every Sunday morning.' },
        { subject: 'Il / Elle / On', verb: 'fait', sentence: 'Il fait ses devoirs de français avec soin.', english: 'He is doing his French homework carefully.' },
        { subject: 'Nous', verb: 'faisons', sentence: 'Nous faisons les courses au supermarché.', english: 'We do the grocery shopping at the supermarket.' },
        { subject: 'Vous', verb: 'faites', sentence: 'Vous faites attention en traversant la rue.', english: 'You are careful when crossing the street.' },
        { subject: 'Ils / Elles', verb: 'font', sentence: 'Elles font une tarte aux pommes délicieuse.', english: 'They make a delicious apple pie.' }
      ]
    },
    {
      infinitive: 'prendre',
      english: 'to take / to have (food/transport)',
      type: 'Irregular 3rd group (-re)',
      forms: [
        { subject: 'Je', verb: 'prends', sentence: 'Je prends mon petit-déjeuner à huit heures.', english: 'I have breakfast at 8 o’clock.' },
        { subject: 'Tu', verb: 'prends', sentence: 'Tu prends le bus numéro 4 pour aller au travail.', english: 'You take bus number 4 to go to work.' },
        { subject: 'Il / Elle / On', verb: 'prend', sentence: 'Elle prend une tasse de thé vert.', english: 'She has a cup of green tea.' },
        { subject: 'Nous', verb: 'prenons', sentence: 'Nous prenons le train pour Lyon.', english: 'We are taking the train to Lyon.' },
        { subject: 'Vous', verb: 'prenez', sentence: 'Vous prenez du sucre dans votre café ?', english: 'Do you take sugar in your coffee?' },
        { subject: 'Ils / Elles', verb: 'prennent', sentence: 'Ils prennent des photos de la tour Eiffel.', english: 'They are taking pictures of the Eiffel Tower.' }
      ]
    },
    {
      infinitive: 'pouvoir',
      english: 'can / to be able to',
      type: 'Irregular modal verb (-oir)',
      forms: [
        { subject: 'Je', verb: 'peux', sentence: 'Je peux parler un peu de français maintenant.', english: 'I can speak a little French now.' },
        { subject: 'Tu', verb: 'peux', sentence: 'Tu peux m’aider avec cet exercice ?', english: 'Can you help me with this exercise?' },
        { subject: 'Il / Elle / On', verb: 'peut', sentence: 'On peut visiter le musée gratuitement dimanche.', english: 'One can visit the museum for free on Sunday.' },
        { subject: 'Nous', verb: 'pouvons', sentence: 'Nous pouvons venir à dix-neuf heures.', english: 'We can come at 7 PM.' },
        { subject: 'Vous', verb: 'pouvez', sentence: 'Pouvez-vous répéter plus lentement, s’il vous plaît ?', english: 'Could you repeat more slowly, please?' },
        { subject: 'Ils / Elles', verb: 'peuvent', sentence: 'Ils peuvent comprendre sans problème.', english: 'They can understand without any problem.' }
      ]
    },
    {
      infinitive: 'vouloir',
      english: 'to want / would like',
      type: 'Irregular modal verb (-oir)',
      forms: [
        { subject: 'Je', verb: 'veux', sentence: 'Je veux commander un croissant et un café.', english: 'I want to order a croissant and coffee.' },
        { subject: 'Tu', verb: 'veux', sentence: 'Tu veux venir avec nous ce soir ?', english: 'Do you want to come with us tonight?' },
        { subject: 'Il / Elle / On', verb: 'veut', sentence: 'Elle veut apprendre à bien cuisiner.', english: 'She wants to learn how to cook well.' },
        { subject: 'Nous', verb: 'voulons', sentence: 'Nous voulons acheter une nouvelle voiture.', english: 'We want to buy a new car.' },
        { subject: 'Vous', verb: 'voulez', sentence: 'Qu’est-ce que vous voulez boire ?', english: 'What would you like to drink?' },
        { subject: 'Ils / Elles', verb: 'veulent', sentence: 'Ils veulent réussir leur examen de français.', english: 'They want to pass their French exam.' }
      ]
    },
    {
      infinitive: 'devoir',
      english: 'must / to have to',
      type: 'Irregular modal verb (-oir)',
      forms: [
        { subject: 'Je', verb: 'dois', sentence: 'Je dois me lever tôt demain matin.', english: 'I must get up early tomorrow morning.' },
        { subject: 'Tu', verb: 'dois', sentence: 'Tu dois faire attention en conduisant.', english: 'You must be careful while driving.' },
        { subject: 'Il / Elle / On', verb: 'doit', sentence: 'Il doit finir son rapport avant midi.', english: 'He has to finish his report before noon.' },
        { subject: 'Nous', verb: 'devons', sentence: 'Nous devons partir maintenant pour ne pas être en retard.', english: 'We have to leave now so as not to be late.' },
        { subject: 'Vous', verb: 'devez', sentence: 'Vous devez montrer votre billet au contrôleur.', english: 'You must show your ticket to the inspector.' },
        { subject: 'Ils / Elles', verb: 'doivent', sentence: 'Elles doivent renouveler leur passeport.', english: 'They must renew their passports.' }
      ]
    }
  ];

  // 2. PAST TENSES DATA
  const passeRecent = [
    { subject: 'Je', venir: 'viens de', example: 'Je viens de finir mon petit-déjeuner.', english: 'I just finished my breakfast.' },
    { subject: 'Tu', venir: 'viens de', example: 'Tu viens de recevoir un message important.', english: 'You just received an important message.' },
    { subject: 'Il / Elle / On', venir: 'vient de', example: 'Elle vient d’arriver à la maison.', english: 'She just arrived home (d’ before vowel).' },
    { subject: 'Nous', venir: 'venons de', example: 'Nous venons de regarder un film magnifique.', english: 'We just watched a wonderful movie.' },
    { subject: 'Vous', venir: 'venez de', example: 'Vous venez d’entendre la nouvelle ?', english: 'Did you just hear the news?' },
    { subject: 'Ils / Elles', venir: 'viennent de', example: 'Ils viennent de partir pour l’aéroport.', english: 'They just left for the airport.' }
  ];

  const passeComposeAvoir = [
    { subject: 'J’', aux: 'ai', participle: 'parlé', sentence: 'J’ai parlé avec le professeur après le cours.', english: 'I spoke with the teacher after class.' },
    { subject: 'Tu', aux: 'as', participle: 'mangé', sentence: 'Tu as mangé une salade fraîche à midi.', english: 'You ate a fresh salad at noon.' },
    { subject: 'Il / Elle / On', aux: 'a', participle: 'fini', sentence: 'Elle a fini son travail en avance.', english: 'She finished her work early (no agreement with avoir).' },
    { subject: 'Nous', aux: 'avons', participle: 'choisi', sentence: 'Nous avons choisi un très bon vin rouge.', english: 'We chose a very good red wine.' },
    { subject: 'Vous', aux: 'avez', participle: 'pris', sentence: 'Vous avez pris le taxi sous la pluie.', english: 'You took a taxi in the rain.' },
    { subject: 'Ils / Elles', aux: 'ont', participle: 'fait', sentence: 'Ils ont fait une longue promenade en ville.', english: 'They took a long walk in town.' }
  ];

  const drMrsVandertramp = [
    { verb: 'Devenir', part: 'devenu(e)(s)', meaning: 'to become', example: 'Il est devenu médecin. / Elle est devenue médecin.' },
    { verb: 'Revenir', part: 'revenu(e)(s)', meaning: 'to come back', example: 'Elle est revenue hier soir.' },
    { verb: 'Monter', part: 'monté(e)(s)', meaning: 'to go up', example: 'Nous sommes montés au sommet de la tour.' },
    { verb: 'Rester', part: 'resté(e)(s)', meaning: 'to stay / remain', example: 'Ils sont restés chez eux tout le dimanche.' },
    { verb: 'Sortir', part: 'sorti(e)(s)', meaning: 'to go out', example: 'Elle est sortie avec ses amies.' },
    { verb: 'Venir', part: 'venu(e)(s)', meaning: 'to come', example: 'Tu es venu me voir à l’hôpital.' },
    { verb: 'Aller', part: 'allé(e)(s)', meaning: 'to go', example: 'Je suis allé au marché. / Elle est allée au marché.' },
    { verb: 'Naître', part: 'né(e)(s)', meaning: 'to be born', example: 'Il est né en mai. / Elle est née en juin.' },
    { verb: 'Descendre', part: 'descendu(e)(s)', meaning: 'to go down', example: 'Vous êtes descendus à quelle station ?' },
    { verb: 'Entrer', part: 'entré(e)(s)', meaning: 'to enter', example: 'Elle est entrée dans la pièce en souriant.' },
    { verb: 'Rentrer', part: 'rentré(e)(s)', meaning: 'to return home', example: 'Elles sont rentrées tard hier soir.' },
    { verb: 'Tomber', part: 'tombé(e)(s)', meaning: 'to fall', example: 'La feuille est tombée de l’arbre.' },
    { verb: 'Retourner', part: 'retourné(e)(s)', meaning: 'to return / go back', example: 'Il est retourné à Paris pour ses études.' },
    { verb: 'Arriver', part: 'arrivé(e)(s)', meaning: 'to arrive', example: 'Le train est arrivé avec cinq minutes d’avance.' },
    { verb: 'Mourir', part: 'mort(e)(s)', meaning: 'to die', example: 'Le grand peintre est mort en 1973.' },
    { verb: 'Partir', part: 'parti(e)(s)', meaning: 'to leave', example: 'Elles sont parties en vacances ce matin.' }
  ];

  // 3. REFLEXIVE VERBS DATA
  const reflexivePronouns = [
    { subject: 'Je', pron: 'me / m’', presVerb: 'me réveille', pcVerb: 'me suis réveillé(e)', sentence: 'Je me réveille toujours à sept heures.', pcSentence: 'Je me suis réveillé tôt ce matin.', meaning: 'I wake up / I woke up' },
    { subject: 'Tu', pron: 'te / t’', presVerb: 'te lèves', pcVerb: 't’es levé(e)', sentence: 'Tu te lèves tout de suite quand le réveil sonne.', pcSentence: 'Tu t’es levé sans faire de bruit.', meaning: 'You get up / You got up' },
    { subject: 'Il', pron: 'se / s’', presVerb: 'se lave', pcVerb: 's’est lavé', sentence: 'Il se lave les mains avant chaque repas.', pcSentence: 'Il s’est lavé les mains.', meaning: 'He washes / He washed' },
    { subject: 'Elle', pron: 'se / s’', presVerb: 's’habille', pcVerb: 's’est habillée', sentence: 'Elle s’habille élégamment pour la soirée.', pcSentence: 'Elle s’est habillée en quelques minutes.', meaning: 'She dresses / She dressed (+e agreement!)' },
    { subject: 'On', pron: 'se / s’', presVerb: 'se repose', pcVerb: 's’est reposé(s)', sentence: 'On se repose un peu après le déjeuner.', pcSentence: 'On s’est bien reposés hier.', meaning: 'We/One rests / We rested' },
    { subject: 'Nous', pron: 'nous', presVerb: 'nous brossons', pcVerb: 'nous sommes brossé(e)s', sentence: 'Nous nous brossons les dents deux fois par jour.', pcSentence: 'Nous nous sommes brossé les dents.', meaning: 'We brush / We brushed (+s agreement)' },
    { subject: 'Vous', pron: 'vous', presVerb: 'vous couchez', pcVerb: 'vous êtes couché(e)(s)', sentence: 'À quelle heure vous vous couchez d’habitude ?', pcSentence: 'Vous vous êtes couchés très tard.', meaning: 'You go to bed / You went to bed' },
    { subject: 'Ils', pron: 'se / s’', presVerb: 'se promènent', pcVerb: 'se sont promenés', sentence: 'Ils se promènent dans la forêt tous les dimanches.', pcSentence: 'Ils se sont promenés au bord de la rivière.', meaning: 'They (m) walk / They walked (+s agreement)' },
    { subject: 'Elles', pron: 'se / s’', presVerb: 'se lèvent', pcVerb: 'se sont levées', sentence: 'Elles se lèvent de bonne heure pour aller courir.', pcSentence: 'Elles se sont levées à l’aube.', meaning: 'They (f) get up / They got up (+es agreement!)' }
  ];

  // 4. "FAIRE" / "FAIT" SENTENCES DATA
  const faireConjugation = [
    { subject: 'Je', present: 'fais', pc: 'ai fait', futur: 'vais faire', sentence: 'Je fais du café chaud tous les matins.', pcSentence: 'Ce matin, j’ai fait du café chaud.', meaning: 'I make coffee / I made coffee.' },
    { subject: 'Tu', present: 'fais', pc: 'as fait', futur: 'vas faire', sentence: 'Tu fais les courses au supermarché ?', pcSentence: 'Tu as fait les courses hier après-midi ?', meaning: 'You do the grocery shopping.' },
    { subject: 'Il / Elle / On', present: 'fait', pc: 'a fait', futur: 'va faire', sentence: 'Elle fait son lit avant de quitter sa chambre.', pcSentence: 'Elle a fait son lit et rangé sa chambre.', meaning: 'She makes her bed / She made her bed.' },
    { subject: 'Nous', present: 'faisons', pc: 'avons fait', futur: 'allons faire', sentence: 'Nous faisons la cuisine ensemble le samedi.', pcSentence: 'Nous avons fait une excellente soupe.', meaning: 'We cook / We cooked an excellent soup.' },
    { subject: 'Vous', present: 'faites', pc: 'avez fait', futur: 'allez faire', sentence: 'Vous faites du sport régulièrement ?', pcSentence: 'Vous avez fait du vélo ce week-end ?', meaning: 'You do sports / You rode a bike.' },
    { subject: 'Ils / Elles', present: 'font', pc: 'ont fait', futur: 'vont faire', sentence: 'Ils font attention en traversant le boulevard.', pcSentence: 'Ils ont fait attention à la circulation.', meaning: 'They pay attention / They paid attention.' }
  ];

  const faireWeather = [
    { fr: 'Il fait beau.', en: 'The weather is nice / sunny.' },
    { fr: 'Il fait chaud.', en: 'It is hot.' },
    { fr: 'Il fait froid.', en: 'It is cold.' },
    { fr: 'Il fait du soleil.', en: 'It is sunny.' },
    { fr: 'Il fait du vent.', en: 'It is windy.' },
    { fr: 'Il fait mauvais.', en: 'The weather is bad.' },
    { fr: 'Il fait frais.', en: 'It is cool / brisk.' },
    { fr: 'Il fait quinze degrés.', en: 'It is 15 degrees Celsius.' }
  ];

  const faireActivities = [
    { fr: 'faire les courses', en: 'to do the grocery shopping', ex: 'Je fais les courses le samedi matin.' },
    { fr: 'faire la vaisselle', en: 'to wash the dishes', ex: 'Il fait la vaisselle après le dîner.' },
    { fr: 'faire son lit', en: 'to make one’s bed', ex: 'Elle fait son lit chaque matin.' },
    { fr: 'faire la cuisine', en: 'to cook', ex: 'Nous faisons la cuisine en musique.' },
    { fr: 'faire du vélo / du sport', en: 'to cycle / to exercise', ex: 'Tu fais du sport deux fois par semaine.' },
    { fr: 'faire attention', en: 'to pay attention / be careful', ex: 'Faites attention à la marche en descendant !' },
    { fr: 'faire la fête', en: 'to celebrate / party', ex: 'Ils font la fête pour son anniversaire.' }
  ];

  const faireCausative = [
    { fr: 'Je fais réparer ma voiture.', en: 'I am having my car repaired (someone else fixes it).' },
    { fr: 'Elle se fait couper les cheveux.', en: 'She is getting her hair cut by the hairdresser.' },
    { fr: 'Ce film me fait rire.', en: 'This movie makes me laugh.' },
    { fr: 'Votre visite nous fait grand plaisir.', en: 'Your visit gives us great pleasure.' }
  ];

  // 5. MASTER SUBJECT TRANSFORMATION MATRIX DATA
  const subjectMatrix = [
    {
      subjectKey: 'je',
      label: 'Je / J’',
      pronoun: 'Je (J’ devant voyelle)',
      meaning: 'I',
      genderNumber: 'Singular (1st person)',
      erEnding: '-e (parle, aime, mange)',
      irEnding: '-is (finis, choisis)',
      reEnding: '-s (prends, vends)',
      reflexivePronoun: 'me / m’',
      reflexiveExample: 'Je me lève à 7h. / Je m’habille vite.',
      avoirAux: 'ai (J’ai parlé, J’ai fait)',
      etreAux: 'suis (Je suis allé / Je suis allée)',
      agreementRule: '+e si la personne qui parle est une femme',
      possessives: 'mon (m) · ma (f) · mes (pl)',
      fullSentences: [
        { label: 'Présent', fr: 'Je me lève tôt, je fais mon lit et je prends mon café.', en: 'I get up early, make my bed and have my coffee.' },
        { label: 'Passé Composé (Reflexive)', fr: 'Je me suis levé(e) à sept heures du matin.', en: 'I got up at 7 o’clock this morning (+e if female).' },
        { label: 'Passé Composé (Être)', fr: 'Je suis allé(e) au marché en ville.', en: 'I went to the town market (+e if female).' },
        { label: 'Passé Composé (Avoir + Faire)', fr: 'J’ai fait mes devoirs avec sérieux.', en: 'I did my homework seriously.' }
      ]
    },
    {
      subjectKey: 'tu',
      label: 'Tu',
      pronoun: 'Tu (Informal / Single person)',
      meaning: 'You (singular, friendly)',
      genderNumber: 'Singular (2nd person)',
      erEnding: '-es (parles, aimes, manges)',
      irEnding: '-is (finis, choisis)',
      reEnding: '-s (prends, vends)',
      reflexivePronoun: 'te / t’',
      reflexiveExample: 'Tu te réveilles en douceur. / Tu t’habilles.',
      avoirAux: 'as (Tu as parlé, Tu as fait)',
      etreAux: 'es (Tu es allé / Tu es allée)',
      agreementRule: '+e si tu t’adresses à une femme',
      possessives: 'ton (m) · ta (f) · tes (pl)',
      fullSentences: [
        { label: 'Présent', fr: 'Tu te lèves à l’heure, tu fais ton lit et tu manges.', en: 'You get up on time, make your bed and eat.' },
        { label: 'Passé Composé (Reflexive)', fr: 'Tu t’es levé(e) avant tout le monde.', en: 'You got up before everyone else (+e if female).' },
        { label: 'Passé Composé (Être)', fr: 'Tu es parti(e) très tôt ce matin.', en: 'You left very early this morning (+e if female).' },
        { label: 'Passé Composé (Avoir + Faire)', fr: 'Tu as fait un gâteau au chocolat délicieux.', en: 'You made a delicious chocolate cake.' }
      ]
    },
    {
      subjectKey: 'il',
      label: 'Il',
      pronoun: 'Il (Masculin singulier)',
      meaning: 'He / It (masculine)',
      genderNumber: 'Masculin singulier (3rd person)',
      erEnding: '-e (parle, aime, mange)',
      irEnding: '-it (finit, choisit)',
      reEnding: '- / -d (prend, vend)',
      reflexivePronoun: 'se / s’',
      reflexiveExample: 'Il se lave les mains. / Il s’habille.',
      avoirAux: 'a (Il a parlé, Il a fait)',
      etreAux: 'est (Il est allé, Il est parti)',
      agreementRule: 'Pas d’accord supplémentaire (forme de base sans -e, sans -s)',
      possessives: 'son (m) · sa (f) · ses (pl)',
      fullSentences: [
        { label: 'Présent', fr: 'Il se réveille à sept heures et il fait son café.', en: 'He wakes up at 7:00 and makes his coffee.' },
        { label: 'Passé Composé (Reflexive)', fr: 'Il s’est réveillé de bonne heure ce matin.', en: 'He woke up early this morning (no -e).' },
        { label: 'Passé Composé (Être)', fr: 'Il est monté au deuxième étage.', en: 'He went up to the second floor (base masc).' },
        { label: 'Passé Composé (Avoir + Faire)', fr: 'Il a fait les courses au supermarché.', en: 'He did the grocery shopping at the supermarket.' }
      ]
    },
    {
      subjectKey: 'elle',
      label: 'Elle',
      pronoun: 'Elle (Féminin singulier)',
      meaning: 'She / It (feminine)',
      genderNumber: 'Féminin singulier (3rd person)',
      erEnding: '-e (parle, aime, mange)',
      irEnding: '-it (finit, choisit)',
      reEnding: '- / -d (prend, vend)',
      reflexivePronoun: 'se / s’',
      reflexiveExample: 'Elle se lève tôt. / Elle s’habille.',
      avoirAux: 'a (Elle a parlé, Elle a fait)',
      etreAux: 'est (Elle est allée, Elle est partie)',
      agreementRule: 'ACCORD OBLIGATOIRE : ajoute +e au participe passé avec Être !',
      possessives: 'son (m) · sa (f) · ses (pl)',
      fullSentences: [
        { label: 'Présent', fr: 'Elle se lève à sept heures et elle fait son lit.', en: 'She gets up at 7 o’clock and makes her bed.' },
        { label: 'Passé Composé (Reflexive)', fr: 'Elle s’est réveillée à sept heures et demie.', en: 'She woke up at 7:30 (+e feminine agreement!).' },
        { label: 'Passé Composé (Être)', fr: 'Elle est partie en voyage en Italie.', en: 'She left on a trip to Italy (+e feminine agreement!).' },
        { label: 'Passé Composé (Avoir + Faire)', fr: 'Elle a fait une tarte aux fraises magnifique.', en: 'She made a magnificent strawberry tart.' }
      ]
    },
    {
      subjectKey: 'on',
      label: 'On',
      pronoun: 'On (Informal "we" / impersonal "one")',
      meaning: 'We (informal) / One / People',
      genderNumber: 'Conjugated like Il/Elle (Singular 3rd person verb)',
      erEnding: '-e (on parle, on aime, on mange)',
      irEnding: '-it (on finit, on choisit)',
      reEnding: '- / -d (on prend, on vend)',
      reflexivePronoun: 'se / s’',
      reflexiveExample: 'On se prépare. / On s’amuse bien.',
      avoirAux: 'a (On a parlé, On a fait)',
      etreAux: 'est (On est allés / On est partis)',
      agreementRule: 'Le verbe reste au singulier (est/a), mais le participe passé prend souvent +s quand on = nous !',
      possessives: 'notre (sing) · nos (pl) [or son/sa/ses]',
      fullSentences: [
        { label: 'Présent', fr: 'Le week-end, on se réveille tard et on fait du vélo.', en: 'On weekends, we wake up late and ride bikes.' },
        { label: 'Passé Composé (Reflexive)', fr: 'On s’est levés à neuf heures hier.', en: 'We got up at 9 o’clock yesterday (+s plural meaning).' },
        { label: 'Passé Composé (Être)', fr: 'On est arrivés à Paris hier soir.', en: 'We arrived in Paris yesterday evening (+s plural).' },
        { label: 'Passé Composé (Avoir + Faire)', fr: 'On a fait une très belle promenade au parc.', en: 'We had a lovely walk in the park.' }
      ]
    },
    {
      subjectKey: 'nous',
      label: 'Nous',
      pronoun: 'Nous (Formal & group "we")',
      meaning: 'We',
      genderNumber: 'Plural (1st person)',
      erEnding: '-ons (parlons, mangeons, aimons)',
      irEnding: '-issons (finissons, choisissons)',
      reEnding: '-ons (prenons, vendons)',
      reflexivePronoun: 'nous',
      reflexiveExample: 'Nous nous levons. / Nous nous habillons.',
      avoirAux: 'avons (Nous avons parlé, Nous avons fait)',
      etreAux: 'sommes (Nous sommes allés / allées)',
      agreementRule: 'ACCORD OBLIGATOIRE : ajoute +s (masculin/mixte) ou +es (tout féminin) avec Être !',
      possessives: 'notre (sing) · nos (pl)',
      fullSentences: [
        { label: 'Présent', fr: 'Nous nous levons de bonne heure et nous faisons la cuisine.', en: 'We get up early and we cook.' },
        { label: 'Passé Composé (Reflexive)', fr: 'Nous nous sommes réveillés avec le soleil.', en: 'We woke up with the sun (+s plural agreement).' },
        { label: 'Passé Composé (Être)', fr: 'Nous sommes allés au restaurant français.', en: 'We went to the French restaurant (+s plural agreement).' },
        { label: 'Passé Composé (Avoir + Faire)', fr: 'Nous avons fait nos valises hier soir.', en: 'We packed our suitcases yesterday evening.' }
      ]
    },
    {
      subjectKey: 'vous',
      label: 'Vous',
      pronoun: 'Vous (Polite singular OR Plural "you")',
      meaning: 'You (formal singular OR plural)',
      genderNumber: 'Polite singular OR Plural (2nd person)',
      erEnding: '-ez (parlez, aimez, mangez)',
      irEnding: '-issez (finissez, choisissez)',
      reEnding: '-ez (prenez, vendez) / exception: faites, dites',
      reflexivePronoun: 'vous',
      reflexiveExample: 'Vous vous reposez. / Vous vous habillez.',
      avoirAux: 'avez (Vous avez parlé, Vous avez fait)',
      etreAux: 'êtes (Vous êtes allé / allée / allés / allées)',
      agreementRule: 'Accord selon le sens : +e (madame), +s (messieurs), +es (mesdames)',
      possessives: 'votre (sing) · vos (pl)',
      fullSentences: [
        { label: 'Présent', fr: 'Vous vous levez toujours tôt et vous faites attention.', en: 'You always get up early and you pay attention.' },
        { label: 'Passé Composé (Reflexive)', fr: 'Vous vous êtes réveillé(e)(s) à quelle heure ?', en: 'What time did you wake up?' },
        { label: 'Passé Composé (Être)', fr: 'Vous êtes venu(e)s nous rendre visite avec plaisir.', en: 'You came to visit us with pleasure.' },
        { label: 'Passé Composé (Avoir + Faire)', fr: 'Vous avez fait un travail exceptionnel !', en: 'You did an exceptional job!' }
      ]
    },
    {
      subjectKey: 'ils',
      label: 'Ils',
      pronoun: 'Ils (Masculin ou groupe mixte pluriel)',
      meaning: 'They (masculine or mixed group)',
      genderNumber: 'Masculin pluriel (3rd person)',
      erEnding: '-ent (parlent, aiment, mangent - silencieux !)',
      irEnding: '-issent (finissent, choisissent)',
      reEnding: '-ent (prennent, vendent)',
      reflexivePronoun: 'se / s’',
      reflexiveExample: 'Ils se couchent tard. / Ils s’habillent.',
      avoirAux: 'ont (Ils ont parlé, Ils ont fait)',
      etreAux: 'sont (Ils sont allés, Ils sont partis)',
      agreementRule: 'ACCORD OBLIGATOIRE : ajoute +s au participe passé avec Être !',
      possessives: 'leur (sing) · leurs (pl)',
      fullSentences: [
        { label: 'Présent', fr: 'Ils se réveillent à sept heures et ils font leur lit.', en: 'They wake up at 7 o’clock and make their bed.' },
        { label: 'Passé Composé (Reflexive)', fr: 'Ils se sont levés de bonne heure pour partir.', en: 'They got up early to leave (+s masculine plural).' },
        { label: 'Passé Composé (Être)', fr: 'Ils sont partis en train pour la montagne.', en: 'They left by train for the mountains (+s agreement).' },
        { label: 'Passé Composé (Avoir + Faire)', fr: 'Ils ont fait leurs courses au marché bio.', en: 'They did their grocery shopping at the organic market.' }
      ]
    },
    {
      subjectKey: 'elles',
      label: 'Elles',
      pronoun: 'Elles (Groupe exclusivement féminin pluriel)',
      meaning: 'They (feminine plural only)',
      genderNumber: 'Féminin pluriel (3rd person)',
      erEnding: '-ent (parlent, aiment, mangent - silencieux !)',
      irEnding: '-issent (finissent, choisissent)',
      reEnding: '-ent (prennent, vendent)',
      reflexivePronoun: 'se / s’',
      reflexiveExample: 'Elles se couchent. / Elles s’habillent.',
      avoirAux: 'ont (Elles ont parlé, Elles ont fait)',
      etreAux: 'sont (Elles sont allées, Elles sont parties)',
      agreementRule: 'DOUBLE ACCORD OBLIGATOIRE : ajoute +es (féminin + pluriel) avec Être !',
      possessives: 'leur (sing) · leurs (pl)',
      fullSentences: [
        { label: 'Présent', fr: 'Elles se réveillent de bonne humeur et elles font du yoga.', en: 'They wake up in a good mood and do yoga.' },
        { label: 'Passé Composé (Reflexive)', fr: 'Elles se sont levées à l’aube pour voir le lever du soleil.', en: 'They got up at dawn to watch the sunrise (+es double agreement!).' },
        { label: 'Passé Composé (Être)', fr: 'Elles sont allées à la plage hier après-midi.', en: 'They went to the beach yesterday afternoon (+es agreement!).' },
        { label: 'Passé Composé (Avoir + Faire)', fr: 'Elles ont fait la fête pour leur réussite.', en: 'They celebrated their success.' }
      ]
    }
  ];

  /* -------------------------------------------------------------
     RENDER SUB-SECTIONS
  ------------------------------------------------------------- */

  function renderGroup1() {
    return `<div class="gt-card" id="gt-group1">
      <div class="gt-card-header">
        <div>
          <span class="gt-pill gt-pill-green">1er GROUPE (-ER)</span>
          <h2 class="gt-card-title">Regular -er Verbs (85%+ of French Verbs)</h2>
        </div>
      </div>
      <p class="gt-desc">
        Take the infinitive, drop <strong>-er</strong> to find the stem, then attach the regular present endings:
        <span class="gt-tag">-e</span>, <span class="gt-tag">-es</span>, <span class="gt-tag">-e</span>,
        <span class="gt-tag">-ons</span>, <span class="gt-tag">-ez</span>, <span class="gt-tag">-ent</span>.
      </p>

      <div class="gt-notice gt-notice-warn">
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
        <div>
          <strong>Pronunciation Secret:</strong> The endings <em>-e</em>, <em>-es</em>, and <em>-ent</em> are <strong>100% silent</strong>!
          Therefore, <em>parle</em>, <em>parles</em>, and <em>parlent</em> sound <strong>completely identical</strong> [parl].
          Only <em>parlons</em> [par-lohn] and <em>parlez</em> [par-lay] sound different!
        </div>
      </div>

      <div class="gt-nuances-grid">
        <div class="gt-nuance-box">
          <span class="gt-mini-tag">Spelling Tip: -ger verbs (manger, voyager)</span>
          <p>Keep the letter <strong>e</strong> before <em>-ons</em> to maintain the soft "zh" sound: <strong>nous mangeons</strong> (not <em>mangons</em>).</p>
        </div>
        <div class="gt-nuance-box">
          <span class="gt-mini-tag">Spelling Tip: -cer verbs (commencer, lancer)</span>
          <p>Add a cedilla <strong>ç</strong> before <em>-ons</em> to maintain the soft "s" sound: <strong>nous commençons</strong> (not <em>commencons</em>).</p>
        </div>
        <div class="gt-nuance-box">
          <span class="gt-mini-tag">Elision Rule: J’ + vowel</span>
          <p><em>Je</em> shortens to <em>J’</em> before any vowel or mute h: <strong>J’aime</strong>, <strong>J’habite</strong>.</p>
        </div>
      </div>

      ${group1Verbs.map(v => `
        <div class="gt-verb-block">
          <div class="gt-verb-head">
            <div>
              <h3 class="gt-verb-infinitive">${esc(v.infinitive)}</h3>
              <span class="small muted">${esc(v.english)} · Stem: <code>${esc(v.stem)}</code></span>
            </div>
            ${audioBtn(v.infinitive, 'Listen Verb')}
          </div>
          <div class="gt-table-responsive">
            <table class="gt-table">
              <thead>
                <tr>
                  <th style="width:18%">Subject</th>
                  <th style="width:20%">Conjugation</th>
                  <th style="width:12%">Ending</th>
                  <th>Example Sentence in Context</th>
                  <th style="width:14%">Audio</th>
                </tr>
              </thead>
              <tbody>
                ${v.endings.map(row => `
                  <tr>
                    <td><strong>${esc(row.subject)}</strong></td>
                    <td class="gt-accent-verb">${esc(row.verb)}</td>
                    <td><span class="gt-tag">${esc(row.ending)}</span></td>
                    <td>
                      <div class="gt-sentence-fr" lang="fr">${esc(row.sentence)}</div>
                      <div class="gt-sentence-en">${esc(row.english)}</div>
                    </td>
                    <td>${audioBtn(row.sentence, 'Listen')}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `).join('')}
    </div>`;
  }

  function renderGroup2() {
    return `<div class="gt-card" id="gt-group2">
      <div class="gt-card-header">
        <div>
          <span class="gt-pill gt-pill-purple">2e GROUPE (-IR)</span>
          <h2 class="gt-card-title">Regular -ir Verbs with "-issant"</h2>
        </div>
      </div>
      <p class="gt-desc">
        Drop <strong>-ir</strong> from the infinitive and attach:
        <span class="gt-tag">-is</span>, <span class="gt-tag">-is</span>, <span class="gt-tag">-it</span>,
        <span class="gt-tag">-issons</span>, <span class="gt-tag">-issez</span>, <span class="gt-tag">-issent</span>.
      </p>

      <div class="gt-notice gt-notice-info">
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
        <div>
          <strong>Hallmark Signature:</strong> Plural forms (<em>nous</em>, <em>vous</em>, <em>ils/elles</em>) feature the double-S sound <strong>-iss-</strong>:
          <em>nous finissons</em>, <em>vous finissez</em>, <em>ils finissent</em>.
          This distinguishes regular 2nd group verbs from irregular 3rd group -ir verbs (like <em>partir</em> or <em>venir</em>).
        </div>
      </div>

      ${group2Verbs.map(v => `
        <div class="gt-verb-block">
          <div class="gt-verb-head">
            <div>
              <h3 class="gt-verb-infinitive">${esc(v.infinitive)}</h3>
              <span class="small muted">${esc(v.english)} · Stem: <code>${esc(v.stem)}</code></span>
            </div>
            ${audioBtn(v.infinitive, 'Listen Verb')}
          </div>
          <div class="gt-table-responsive">
            <table class="gt-table">
              <thead>
                <tr>
                  <th style="width:18%">Subject</th>
                  <th style="width:20%">Conjugation</th>
                  <th style="width:12%">Ending</th>
                  <th>Example Sentence in Context</th>
                  <th style="width:14%">Audio</th>
                </tr>
              </thead>
              <tbody>
                ${v.endings.map(row => `
                  <tr>
                    <td><strong>${esc(row.subject)}</strong></td>
                    <td class="gt-accent-verb">${esc(row.verb)}</td>
                    <td><span class="gt-tag">${esc(row.ending)}</span></td>
                    <td>
                      <div class="gt-sentence-fr" lang="fr">${esc(row.sentence)}</div>
                      <div class="gt-sentence-en">${esc(row.english)}</div>
                    </td>
                    <td>${audioBtn(row.sentence, 'Listen')}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `).join('')}
    </div>`;
  }

  function renderGroup3() {
    return `<div class="gt-card" id="gt-group3">
      <div class="gt-card-header">
        <div>
          <span class="gt-pill gt-pill-rose">3e GROUPE (IRRÉGULIERS)</span>
          <h2 class="gt-card-title">Essential Irregular Verbs (Pillars of Daily French)</h2>
        </div>
      </div>
      <p class="gt-desc">
        The 3rd group contains irregular verbs ending in <strong>-re</strong>, <strong>-oir</strong>, and irregular <strong>-ir</strong>.
        These are the most frequent verbs in the French language.
      </p>

      ${group3Verbs.map(v => `
        <div class="gt-verb-block">
          <div class="gt-verb-head">
            <div>
              <h3 class="gt-verb-infinitive">${esc(v.infinitive)}</h3>
              <span class="small muted">${esc(v.english)} · <span class="gt-tag-sm">${esc(v.type)}</span></span>
            </div>
            ${audioBtn(v.infinitive, 'Listen Verb')}
          </div>
          <div class="gt-table-responsive">
            <table class="gt-table">
              <thead>
                <tr>
                  <th style="width:18%">Subject</th>
                  <th style="width:22%">Conjugation</th>
                  <th>Example Sentence in Daily Life</th>
                  <th style="width:14%">Audio</th>
                </tr>
              </thead>
              <tbody>
                ${v.forms.map(row => `
                  <tr>
                    <td><strong>${esc(row.subject)}</strong></td>
                    <td class="gt-accent-verb">${esc(row.verb)}</td>
                    <td>
                      <div class="gt-sentence-fr" lang="fr">${esc(row.sentence)}</div>
                      <div class="gt-sentence-en">${esc(row.english)}</div>
                    </td>
                    <td>${audioBtn(row.sentence, 'Listen')}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `).join('')}
    </div>`;
  }

  function renderPasseTenses() {
    return `<div class="gt-card" id="gt-passe">
      <div class="gt-card-header">
        <div>
          <span class="gt-pill gt-pill-blue">LES TEMPS DU PASSÉ</span>
          <h2 class="gt-card-title">Past Tenses: Passé Récent &amp; Passé Composé</h2>
        </div>
      </div>
      <p class="gt-desc">
        How to express completed past actions versus events that happened just moments ago.
      </p>

      <!-- TIMELINE DIAGRAM -->
      <div class="gt-timeline-box">
        <div class="gt-timeline-step">
          <span class="gt-timeline-dot"></span>
          <strong>Imparfait</strong>
          <small>Ongoing background / habits</small>
        </div>
        <div class="gt-timeline-arrow">➔</div>
        <div class="gt-timeline-step active">
          <span class="gt-timeline-dot"></span>
          <strong>Passé Composé</strong>
          <small>Completed event (Milestone)</small>
        </div>
        <div class="gt-timeline-arrow">➔</div>
        <div class="gt-timeline-step recent">
          <span class="gt-timeline-dot"></span>
          <strong>Passé Récent</strong>
          <small>Just happened (1 min ago)</small>
        </div>
        <div class="gt-timeline-arrow">➔</div>
        <div class="gt-timeline-step">
          <span class="gt-timeline-dot"></span>
          <strong>Présent</strong>
          <small>Right now</small>
        </div>
      </div>

      <!-- 1. PASSÉ RÉCENT -->
      <div class="gt-subcard">
        <div class="gt-subcard-header">
          <div>
            <h3 style="margin:0 0 4px">⏱️ Passé Récent (Something Just Happened)</h3>
            <span class="small muted">Used for actions completed moments ago ("I just did something").</span>
          </div>
          <div class="gt-formula-badge">
            Sujet + <strong>VENIR</strong> (présent) + <strong>DE / D’</strong> + <strong>INFINITIF</strong>
          </div>
        </div>

        <div class="gt-table-responsive" style="margin-top:14px">
          <table class="gt-table">
            <thead>
              <tr>
                <th style="width:16%">Subject</th>
                <th style="width:24%">Venir + De</th>
                <th>Full Example Sentence</th>
                <th style="width:14%">Audio</th>
              </tr>
            </thead>
            <tbody>
              ${passeRecent.map(r => `
                <tr>
                  <td><strong>${esc(r.subject)}</strong></td>
                  <td class="gt-accent-verb">${esc(r.venir)}</td>
                  <td>
                    <div class="gt-sentence-fr" lang="fr">${esc(r.example)}</div>
                    <div class="gt-sentence-en">${esc(r.english)}</div>
                  </td>
                  <td>${audioBtn(r.example, 'Listen')}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- 2. PASSÉ COMPOSÉ -->
      <div class="gt-subcard" style="margin-top:22px">
        <div class="gt-subcard-header">
          <div>
            <h3 style="margin:0 0 4px">🏛️ Passé Composé (Completed Action in the Past)</h3>
            <span class="small muted">The most important past tense in spoken French.</span>
          </div>
          <div class="gt-formula-badge">
            Sujet + <strong>AUXILIAIRE</strong> (Avoir ou Être) + <strong>PARTICIPE PASSÉ</strong>
          </div>
        </div>

        <!-- FORMING PARTICIPLES -->
        <div class="gt-rules-grid" style="margin:16px 0">
          <div class="gt-rule-tile">
            <strong>1er groupe (-er) ➔ -é</strong>
            <p>parler ➔ <em>parlé</em><br/>manger ➔ <em>mangé</em><br/>aimer ➔ <em>aimé</em></p>
          </div>
          <div class="gt-rule-tile">
            <strong>2e groupe (-ir) ➔ -i</strong>
            <p>finir ➔ <em>fini</em><br/>choisir ➔ <em>choisi</em><br/>réussir ➔ <em>réussi</em></p>
          </div>
          <div class="gt-rule-tile">
            <strong>3e groupe : -u</strong>
            <p>avoir ➔ <em>eu</em> · être ➔ <em>été</em><br/>voir ➔ <em>vu</em> · lire ➔ <em>lu</em><br/>vouloir ➔ <em>voulu</em> · pouvoir ➔ <em>pu</em></p>
          </div>
          <div class="gt-rule-tile">
            <strong>3e groupe : -is / -it / -ert</strong>
            <p>prendre ➔ <em>pris</em> · mettre ➔ <em>mis</em><br/>faire ➔ <em>fait</em> · dire ➔ <em>dit</em><br/>ouvrir ➔ <em>ouvert</em></p>
          </div>
        </div>

        <!-- AVOIR VS ETRE DECISION -->
        <div class="gt-notice gt-notice-info">
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
          <div>
            <strong>Which auxiliary should you use?</strong>
            <ul style="margin:4px 0 0;padding-left:18px;line-height:1.5">
              <li><strong>Default (~90% of all verbs): AVOIR.</strong> There is <em>NO agreement</em> with the subject! (<em>Elle a parlé</em>, <em>Ils ont mangé</em>).</li>
              <li><strong>ÊTRE is used ONLY for:</strong>
                1) Movement &amp; change of state verbs (<strong>DR &amp; MRS VANDERTRAMP</strong>), and
                2) <strong>ALL reflexive verbs</strong> (<em>se lever, s’habiller...</em>).
              </li>
              <li><strong>THE CRITICAL RULE WITH ÊTRE:</strong> The participle <strong>MUST AGREE</strong> in gender &amp; number with the subject:
                <code>+e</code> for feminine singular, <code>+s</code> for masculine plural, <code>+es</code> for feminine plural!
              </li>
            </ul>
          </div>
        </div>

        <!-- PASSÉ COMPOSÉ WITH AVOIR TABLE -->
        <h4 style="margin:20px 0 8px">A. Passé Composé with AVOIR (No Subject Agreement)</h4>
        <div class="gt-table-responsive">
          <table class="gt-table">
            <thead>
              <tr>
                <th style="width:16%">Subject</th>
                <th style="width:20%">Avoir + Participle</th>
                <th>Full Example Sentence</th>
                <th style="width:14%">Audio</th>
              </tr>
            </thead>
            <tbody>
              ${passeComposeAvoir.map(r => `
                <tr>
                  <td><strong>${esc(r.subject)}</strong></td>
                  <td class="gt-accent-verb">${esc(r.aux)} ${esc(r.participle)}</td>
                  <td>
                    <div class="gt-sentence-fr" lang="fr">${esc(r.sentence)}</div>
                    <div class="gt-sentence-en">${esc(r.english)}</div>
                  </td>
                  <td>${audioBtn(r.sentence, 'Listen')}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <!-- DR & MRS VANDERTRAMP TABLE (ÊTRE VERBS) -->
        <h4 style="margin:26px 0 8px">B. Passé Composé with ÊTRE: The 16 "DR &amp; MRS VANDERTRAMP" Verbs</h4>
        <p class="small muted" style="margin-bottom:12px">
          These movement and change-of-state verbs always use <strong>Être</strong>. Notice how the participle changes according to gender &amp; number:
          <span class="gt-accord-badge">Masc: —</span>
          <span class="gt-accord-badge gt-accord-fem">Fém: +e</span>
          <span class="gt-accord-badge gt-accord-plur">Masc Plur: +s</span>
          <span class="gt-accord-badge gt-accord-femplur">Fém Plur: +es</span>
        </p>

        <div class="gt-table-responsive">
          <table class="gt-table">
            <thead>
              <tr>
                <th style="width:18%">Verb (Letter)</th>
                <th style="width:20%">Participle (with Agreement)</th>
                <th style="width:20%">English Meaning</th>
                <th>Example with Agreement</th>
                <th style="width:14%">Audio</th>
              </tr>
            </thead>
            <tbody>
              ${drMrsVandertramp.map(v => `
                <tr>
                  <td><strong>${esc(v.verb)}</strong></td>
                  <td class="gt-accent-verb"><code>${esc(v.part)}</code></td>
                  <td class="small muted">${esc(v.meaning)}</td>
                  <td>
                    <div class="gt-sentence-fr" lang="fr">${esc(v.example)}</div>
                  </td>
                  <td>${audioBtn(v.example, 'Listen')}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>`;
  }

  function renderReflexive() {
    return `<div class="gt-card" id="gt-reflexive">
      <div class="gt-card-header">
        <div>
          <span class="gt-pill gt-pill-orange">LES VERBES EN SE / S’</span>
          <h2 class="gt-card-title">Reflexive &amp; Pronominal Verbs</h2>
        </div>
      </div>
      <p class="gt-desc">
        Reflexive verbs express an action that the subject does to itself (e.g. <em>se réveiller</em> = to wake up, <em>se lever</em> = to get out of bed, <em>s’habiller</em> = to get dressed).
      </p>

      <div class="gt-formula-badge" style="margin-bottom:16px">
        Présent : Sujet + <strong>ME / TE / SE / NOUS / VOUS / SE</strong> + Verbe<br/>
        Passé Composé : Sujet + <strong>PRONOM</strong> + <strong>ÊTRE</strong> (suis/es/est/sommes/êtes/sont) + <strong>PARTICIPE (+e/+s/+es)</strong>
      </div>

      <div class="gt-notice gt-notice-warn">
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></svg>
        <div>
          <strong>The Golden Rule of Reflexive Verbs in the Past:</strong><br/>
          Reflexive verbs <strong>ALWAYS use ÊTRE</strong> in the Passé Composé! <em>Never AVOIR!</em><br/>
          Say: <em>Elle <strong>s’est</strong> levée</em> (Correct) — <em>Never:</em> <del>Elle s’a levée</del> (Wrong!).<br/>
          And because it uses ÊTRE, the past participle agrees with the subject:
          <em>Il s'est levé</em> (no e), <em>Elle s'est levé<strong>e</strong></em> (+e), <em>Ils se sont levé<strong>s</strong></em> (+s), <em>Elles se sont levé<strong>es</strong></em> (+es).
        </div>
      </div>

      <!-- FULL PRONOUN & AGREEMENT TABLE -->
      <h3 style="margin:24px 0 10px">Master Breakdown: Reflexive Verbs across Every Subject</h3>
      <div class="gt-table-responsive">
        <table class="gt-table">
          <thead>
            <tr>
              <th style="width:14%">Subject</th>
              <th style="width:14%">Reflexive Pronoun</th>
              <th style="width:20%">Présent Example</th>
              <th>Passé Composé (with Être &amp; Agreement)</th>
              <th style="width:14%">Audio</th>
            </tr>
          </thead>
          <tbody>
            ${reflexivePronouns.map(r => `
              <tr>
                <td><strong>${esc(r.subject)}</strong></td>
                <td><span class="gt-tag">${esc(r.pron)}</span></td>
                <td>
                  <div class="gt-sentence-fr" lang="fr"><strong>${esc(r.presVerb)}</strong></div>
                  <div class="small muted">${esc(r.sentence)}</div>
                </td>
                <td>
                  <div class="gt-sentence-fr" lang="fr">
                    <strong class="gt-accent-verb">${esc(r.pcVerb)}</strong>
                  </div>
                  <div class="small" style="color:#25283a;margin-top:2px">${esc(r.pcSentence)}</div>
                  <div class="gt-sentence-en">${esc(r.meaning)}</div>
                </td>
                <td>${audioBtn(r.pcSentence, 'Listen')}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <!-- REFLEXIVE NEGATION -->
      <div class="gt-subcard" style="margin-top:22px">
        <h4 style="margin:0 0 8px">Negation of Reflexive Verbs (How to Say "Do Not" / "Did Not")</h4>
        <div class="gt-nuances-grid">
          <div class="gt-nuance-box">
            <strong>Présent Negation:</strong>
            <code>ne + pronom + verbe + pas</code>
            <p style="margin:6px 0 2px" lang="fr"><em>Je <strong>ne</strong> me réveille <strong>pas</strong> tôt.</em></p>
            <small class="muted">I do not wake up early.</small>
          </div>
          <div class="gt-nuance-box">
            <strong>Passé Composé Negation:</strong>
            <code>ne + pronom + être + pas + participe</code>
            <p style="margin:6px 0 2px" lang="fr"><em>Elle <strong>ne</strong> s’est <strong>pas</strong> levé<strong>e</strong>.</em></p>
            <small class="muted">She did not get up.</small>
          </div>
        </div>
      </div>
    </div>`;
  }

  function renderFaire() {
    return `<div class="gt-card" id="gt-faire">
      <div class="gt-card-header">
        <div>
          <span class="gt-pill gt-pill-purple">CONSTRUCTIONS AVEC "FAIRE"</span>
          <h2 class="gt-card-title">Sentences &amp; Expressions with "Faire" / "Fait"</h2>
        </div>
      </div>
      <p class="gt-desc">
        <em>Faire</em> (to do / to make) is one of the most versatile verbs in French. It is used for daily chores, weather expressions, sports, and causing actions to happen.
      </p>

      <!-- FAIRE ACROSS TENSES & SUBJECTS -->
      <h3 style="margin:20px 0 10px">1. Conjugation &amp; Subject Impact across Tenses</h3>
      <div class="gt-table-responsive">
        <table class="gt-table">
          <thead>
            <tr>
              <th style="width:14%">Subject</th>
              <th style="width:14%">Présent</th>
              <th style="width:16%">Passé Composé</th>
              <th>Example Sentence in Action</th>
              <th style="width:14%">Audio</th>
            </tr>
          </thead>
          <tbody>
            ${faireConjugation.map(f => `
              <tr>
                <td><strong>${esc(f.subject)}</strong></td>
                <td><strong class="gt-accent-verb">${esc(f.present)}</strong></td>
                <td><strong>${esc(f.pc)}</strong></td>
                <td>
                  <div class="gt-sentence-fr" lang="fr">${esc(f.sentence)}</div>
                  <div class="small muted">${esc(f.pcSentence)}</div>
                  <div class="gt-sentence-en">${esc(f.meaning)}</div>
                </td>
                <td>${audioBtn(f.pcSentence, 'Listen')}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <!-- WEATHER WITH IL FAIT -->
      <div class="gt-subcard" style="margin-top:22px">
        <div class="gt-subcard-header">
          <div>
            <h4 style="margin:0 0 4px">2. Weather Expressions (Always "Il fait...")</h4>
            <span class="small muted">In French, we always use the 3rd person singular <em>Il fait</em> to talk about weather!</span>
          </div>
        </div>
        <div class="gt-weather-grid" style="margin-top:12px">
          ${faireWeather.map(w => `
            <div class="gt-weather-tile">
              <div style="display:flex;justify-content:space-between;align-items:center">
                <strong lang="fr" style="font-size:15px;color:var(--ink,#22273b)">${esc(w.fr)}</strong>
                ${audioBtn(w.fr, 'Listen')}
              </div>
              <div class="small muted" style="margin-top:4px">${esc(w.en)}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- CHORES & ACTIVITIES -->
      <div class="gt-subcard" style="margin-top:22px">
        <h4 style="margin:0 0 6px">3. Everyday Activities, Chores &amp; Sports</h4>
        <div class="gt-table-responsive" style="margin-top:10px">
          <table class="gt-table">
            <thead>
              <tr>
                <th style="width:28%">Expression with "Faire"</th>
                <th style="width:28%">English Meaning</th>
                <th>Full Sentence in Context</th>
                <th style="width:14%">Audio</th>
              </tr>
            </thead>
            <tbody>
              ${faireActivities.map(a => `
                <tr>
                  <td><strong class="gt-accent-verb" lang="fr">${esc(a.fr)}</strong></td>
                  <td class="small muted">${esc(a.en)}</td>
                  <td>
                    <div class="gt-sentence-fr" lang="fr">${esc(a.ex)}</div>
                  </td>
                  <td>${audioBtn(a.ex, 'Listen')}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- CAUSATIVE FAIRE -->
      <div class="gt-subcard" style="margin-top:22px">
        <h4 style="margin:0 0 6px">4. Causative Construction: <code>faire + infinitif</code></h4>
        <p class="small muted" style="margin-bottom:12px">
          Used when someone has something done by another person (services), or causes an emotion/action.
        </p>
        <div class="gt-table-responsive">
          <table class="gt-table">
            <thead>
              <tr>
                <th style="width:45%">French Sentence</th>
                <th>English Meaning</th>
                <th style="width:14%">Audio</th>
              </tr>
            </thead>
            <tbody>
              ${faireCausative.map(c => `
                <tr>
                  <td>
                    <div class="gt-sentence-fr" lang="fr"><strong>${esc(c.fr)}</strong></div>
                  </td>
                  <td><span class="small muted">${esc(c.en)}</span></td>
                  <td>${audioBtn(c.fr, 'Listen')}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>`;
  }

  function renderSubjectMatrix() {
    const curSub = subjectMatrix.find(s => s.subjectKey === activeSubject) || subjectMatrix[3]; // default 'elle'

    return `<div class="gt-card" id="gt-matrix">
      <div class="gt-card-header">
        <div>
          <span class="gt-pill gt-pill-green">TRANSFORMATION MATRIX</span>
          <h2 class="gt-card-title">How Every Subject Transforms the Entire Sentence</h2>
        </div>
      </div>
      <p class="gt-desc">
        In French, choosing a subject (<em>Je</em> vs <em>Elle</em> vs <em>Nous</em> vs <em>Ils</em>) sets off a ripple effect across the entire sentence:
        the verb ending, the reflexive pronoun, the auxiliary, the participle agreement (<code>+e</code>, <code>+s</code>, <code>+es</code>), and the possessive adjectives (<em>mon/son/notre</em>).
      </p>

      <!-- SUBJECT SELECTOR CHIPS -->
      <div class="gt-subject-chips">
        <span class="small muted" style="font-weight:700;display:flex;align-items:center;margin-right:4px">Choose Subject:</span>
        ${subjectMatrix.map(s => `
          <button type="button" class="chip ${activeSubject === s.subjectKey ? 'active' : ''}" data-gt-subject="${esc(s.subjectKey)}">
            ${esc(s.label)}
          </button>
        `).join('')}
      </div>

      <!-- SPOTLIGHT CARD FOR ACTIVE SUBJECT -->
      <div class="gt-spotlight-card">
        <div class="gt-spotlight-header">
          <div>
            <span class="gt-mini-tag">${esc(curSub.genderNumber)}</span>
            <h3 style="font-size:26px;margin:4px 0 2px;color:var(--purple-dark,#515097)">
              Subject: <strong>${esc(curSub.label)}</strong>
            </h3>
            <span class="small muted">English: <em>"${esc(curSub.meaning)}"</em> · Pronoun: <code>${esc(curSub.pronoun)}</code></span>
          </div>
          <div class="gt-spotlight-badge">
            ${esc(curSub.label)}
          </div>
        </div>

        <div class="gt-spotlight-grid">
          <div class="gt-spotlight-field">
            <span class="gt-field-label">1. Present Verb Endings</span>
            <div class="gt-field-val">
              <div><strong>1er (-er):</strong> <code>${esc(curSub.erEnding)}</code></div>
              <div><strong>2e (-ir):</strong> <code>${esc(curSub.irEnding)}</code></div>
              <div><strong>3e (-re):</strong> <code>${esc(curSub.reEnding)}</code></div>
            </div>
          </div>

          <div class="gt-spotlight-field">
            <span class="gt-field-label">2. Reflexive Pronoun (Se verbs)</span>
            <div class="gt-field-val">
              <span class="gt-tag" style="font-size:14px;padding:3px 8px">${esc(curSub.reflexivePronoun)}</span>
              <div class="small muted" style="margin-top:4px">${esc(curSub.reflexiveExample)}</div>
            </div>
          </div>

          <div class="gt-spotlight-field">
            <span class="gt-field-label">3. Auxiliaries in Passé Composé</span>
            <div class="gt-field-val">
              <div><strong>Avoir:</strong> <code>${esc(curSub.avoirAux)}</code></div>
              <div><strong>Être:</strong> <code>${esc(curSub.etreAux)}</code></div>
            </div>
          </div>

          <div class="gt-spotlight-field">
            <span class="gt-field-label">4. Participle Agreement Rule (with Être)</span>
            <div class="gt-field-val">
              <strong style="color:var(--purple,#6a69b3)">${esc(curSub.agreementRule)}</strong>
            </div>
          </div>

          <div class="gt-spotlight-field" style="grid-column:1 / -1">
            <span class="gt-field-label">5. Matching Possessive Adjectives</span>
            <div class="gt-field-val">
              <code>${esc(curSub.possessives)}</code>
            </div>
          </div>
        </div>

        <h4 style="margin:18px 0 10px;font-size:15px">Full Sentence Examples for "${esc(curSub.label)}" across Daily Life:</h4>
        <div class="gt-sentences-list">
          ${curSub.fullSentences.map(sent => `
            <div class="gt-sentence-row">
              <div style="flex:1">
                <span class="gt-mini-tag">${esc(sent.label)}</span>
                <div class="gt-sentence-fr" lang="fr" style="font-size:15px;margin-top:2px">
                  ${esc(sent.fr)}
                </div>
                <div class="gt-sentence-en">${esc(sent.en)}</div>
              </div>
              <div>
                ${audioBtn(sent.fr, 'Listen')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- MASTER COMPARISON TABLE -->
      <h3 style="margin:28px 0 12px">Complete Side-by-Side Comparison Matrix</h3>
      <div class="gt-table-responsive">
        <table class="gt-table">
          <thead>
            <tr>
              <th style="width:10%">Subject</th>
              <th style="width:12%">Reflexive</th>
              <th style="width:14%">Present Ending (-er)</th>
              <th style="width:14%">Avoir (P.C.)</th>
              <th style="width:16%">Être (P.C.) + Accord</th>
              <th style="width:16%">Possessives</th>
              <th>Full Integrated Sentence</th>
              <th style="width:12%">Audio</th>
            </tr>
          </thead>
          <tbody>
            ${subjectMatrix.map(s => {
              const mainEx = s.fullSentences[1] || s.fullSentences[0];
              return `<tr class="${activeSubject === s.subjectKey ? 'gt-row-highlight' : ''}">
                <td><strong>${esc(s.label)}</strong></td>
                <td><span class="gt-tag">${esc(s.reflexivePronoun)}</span></td>
                <td><code>${esc(s.erEnding)}</code></td>
                <td>${esc(s.avoirAux.split(' ')[0])}</td>
                <td><strong class="gt-accent-verb">${esc(s.etreAux.split(' ')[0])}</strong></td>
                <td class="small muted"><code>${esc(s.possessives)}</code></td>
                <td>
                  <div class="gt-sentence-fr" lang="fr">${esc(mainEx.fr)}</div>
                  <div class="gt-sentence-en">${esc(mainEx.en)}</div>
                </td>
                <td>${audioBtn(mainEx.fr, 'Listen')}</td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>`;
  }

  /* -------------------------------------------------------------
     MAIN PAGE BUILDER
  ------------------------------------------------------------- */

  function page() {
    return `<div class="grammar-tables-wrap">
      <!-- HEADER -->
      <div class="gt-header">
        <div class="eyebrow">COMPREHENSIVE GRAMMAR REFERENCE · NO FLASHCARDS</div>
        <h1>Grammar Study Tables &amp; Rules</h1>
        <p class="header-desc">
          Structured, easy-to-understand reference tables for all 3 verb groups, past tenses (passé récent &amp; composé),
          reflexive verbs in <em>se/s’</em>, expressions with <em>faire</em>, and how subjects transform the whole French sentence.
        </p>

        <!-- SEARCH BAR -->
        <div class="gt-search-bar" style="margin-top:14px">
          <div class="search-box">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="11" cy="11" r="7"/><path d="m16 16 5 5"/></svg>
            <input class="input" id="gt-search-input" placeholder="Search rules, verbs or tenses (e.g. aller, passé, faire, reflexive, manger)..." value="${esc(searchQuery)}" />
          </div>
          ${searchQuery ? `<button class="btn btn-white btn-sm" type="button" data-gt-clear-search="true">Clear search ✕</button>` : ''}
        </div>

        <!-- SECTION NAVIGATION TABS -->
        <div class="gt-nav-tabs" style="margin-top:16px">
          <button type="button" class="chip ${activeSection === 'all' ? 'active' : ''}" data-gt-section="all">
            🌟 All Reference Guides
          </button>
          <button type="button" class="chip ${activeSection === 'groups' ? 'active' : ''}" data-gt-section="groups">
            1️⃣ 1st, 2nd &amp; 3rd Group Verbs
          </button>
          <button type="button" class="chip ${activeSection === 'passe' ? 'active' : ''}" data-gt-section="passe">
            ⏱️ Past Tenses (Passé Récent &amp; Composé)
          </button>
          <button type="button" class="chip ${activeSection === 'reflexive' ? 'active' : ''}" data-gt-section="reflexive">
            🪞 Reflexive Verbs (Se / S’)
          </button>
          <button type="button" class="chip ${activeSection === 'faire' ? 'active' : ''}" data-gt-section="faire">
            ⚡ "Faire" &amp; "Fait" Sentences
          </button>
          <button type="button" class="chip ${activeSection === 'matrix' ? 'active' : ''}" data-gt-section="matrix">
            🔄 Subject Transformation Matrix
          </button>
        </div>
      </div>

      <!-- MAIN CONTENT SECTIONS -->
      <div class="gt-sections-container" style="margin-top:20px">
        ${(activeSection === 'all' || activeSection === 'matrix') ? renderSubjectMatrix() : ''}
        ${(activeSection === 'all' || activeSection === 'groups') ? renderGroup1() : ''}
        ${(activeSection === 'all' || activeSection === 'groups') ? renderGroup2() : ''}
        ${(activeSection === 'all' || activeSection === 'groups') ? renderGroup3() : ''}
        ${(activeSection === 'all' || activeSection === 'passe') ? renderPasseTenses() : ''}
        ${(activeSection === 'all' || activeSection === 'reflexive') ? renderReflexive() : ''}
        ${(activeSection === 'all' || activeSection === 'faire') ? renderFaire() : ''}
      </div>
    </div>`;
  }

  /* -------------------------------------------------------------
     EVENT LISTENERS & PUBLIC API
  ------------------------------------------------------------- */

  document.addEventListener('click', e => {
    const el = e.target.closest('button');
    if (!el) return;

    if (el.dataset.gtSection) {
      activeSection = el.dataset.gtSection;
      if (typeof window.render === 'function') window.render();
      return;
    }

    if (el.dataset.gtSubject) {
      activeSubject = el.dataset.gtSubject;
      if (typeof window.render === 'function') window.render();
      return;
    }

    if (el.dataset.gtClearSearch) {
      searchQuery = '';
      if (typeof window.render === 'function') window.render();
      return;
    }
  });

  document.addEventListener('input', e => {
    if (e.target.id === 'gt-search-input') {
      searchQuery = e.target.value.toLowerCase().trim();
      // Highlight matching blocks on the fly
      const cards = document.querySelectorAll('.gt-card, .gt-verb-block, .gt-subcard');
      cards.forEach(card => {
        if (!searchQuery) {
          card.style.display = '';
        } else {
          const text = (card.textContent || '').toLowerCase();
          card.style.display = text.includes(searchQuery) ? '' : 'none';
        }
      });
    }
  });

  return {
    page,
    setSection: s => { activeSection = s; },
    setSubject: sub => { activeSubject = sub; },
    getActiveSection: () => activeSection
  };
})();
