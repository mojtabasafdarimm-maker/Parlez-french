const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'public', 'grammar-tables.js');
let code = fs.readFileSync(filePath, 'utf8');

// 1. Define the new render functions to insert into grammar-tables.js
const newSectionFunctions = `
  /* -------------------------------------------------------------
     NEW SECTIONS FROM A1.3 PDF & CURRICULUM
  ------------------------------------------------------------- */

  // 10. NE ... QUE (RESTRICTION / ONLY)
  function renderNeQue() {
    return \`<div class="gt-card" id="gt-neque">
      <div class="gt-card-header">
        <div>
          <span class="gt-pill gt-pill-orange">A1.3 PDF · PAGE 239</span>
          <h2 class="gt-card-title">Négation Restrictive : "Ne ... que" (Only / Just)</h2>
        </div>
        <button type="button" class="btn btn-primary btn-sm" onclick="window.grammarSubView='challenge'; if(window.ParlezChallenge) window.ParlezChallenge.startSession('neque'); if(window.render) window.render();">
          🎯 Practice in Flashcards (5 Cards) ➜
        </button>
      </div>
      <p class="gt-desc">
        <strong>"Ne ... que"</strong> n’exprime PAS une négation complète (ce n'est pas "ne ... pas"). Elle exprime une <em>restriction</em> équivalente à <strong>"seulement"</strong> ou <strong>"just"</strong>. Elle est omniprésente dans le français parlé naturel.
      </p>

      <div style="background:#eef2ff;border:1.5px solid #c7d2fe;border-radius:12px;padding:12px 16px;margin-bottom:16px;">
        <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:#4338ca;letter-spacing:0.5px;margin-bottom:4px;">
          📐 FORMULE GRAMMATICALE :
        </div>
        <div style="font-family:monospace;font-size:14px;font-weight:800;color:#1e1b4b;">
          Sujet + ne/n’ + [Verbe Conjugué] + que/qu’ + [Élément Restreint]
        </div>
        <div style="font-size:12px;color:#6366f1;margin-top:4px;">
          ⚠️ RÈGLE D'OR : N'ajoutez JAMAIS "pas" ! "Je ne dors pas que 3h" est faux.
        </div>
      </div>

      <div class="gt-table-responsive">
        <table class="gt-table">
          <thead>
            <tr>
              <th>Type de Négation</th>
              <th>Sens en Anglais</th>
              <th>Exemple Réel du Cours PDF</th>
              <th>Audio</th>
              <th>Traduction</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>ne ... que</strong></td>
              <td>Only / Just (heures)</td>
              <td><strong>Je ne dors que trois heures par nuit.</strong></td>
              <td>\${audioBtn('Je ne dors que trois heures par nuit.')}</td>
              <td>I only sleep three hours per night.</td>
            </tr>
            <tr>
              <td><strong>ne ... que</strong></td>
              <td>Only / Just (jours)</td>
              <td><strong>Elle ne travaille que trois jours par semaine.</strong></td>
              <td>\${audioBtn('Elle ne travaille que trois jours par semaine.')}</td>
              <td>She only works three days a week.</td>
            </tr>
            <tr>
              <td><strong>n’ ... que</strong></td>
              <td>Only / Just (argent)</td>
              <td><strong>Il n’a que vingt euros dans sa poche.</strong></td>
              <td>\${audioBtn('Il n’a que vingt euros dans sa poche.')}</td>
              <td>He only has twenty euros in his pocket.</td>
            </tr>
            <tr>
              <td><strong>ne ... que</strong></td>
              <td>Only / Just (langue)</td>
              <td><strong>En classe, nous ne parlons que français.</strong></td>
              <td>\${audioBtn('En classe, nous ne parlons que français.')}</td>
              <td>In class, we only speak French.</td>
            </tr>
            <tr>
              <td><strong>ne ... pas</strong></td>
              <td>Not (négation totale)</td>
              <td>Je ne dors pas l’après-midi.</td>
              <td>\${audioBtn('Je ne dors pas l’après-midi.')}</td>
              <td>I do not sleep in the afternoon.</td>
            </tr>
            <tr>
              <td><strong>ne ... plus</strong></td>
              <td>No longer / Not anymore</td>
              <td>Elle ne travaille plus le week-end.</td>
              <td>\${audioBtn('Elle ne travaille plus le week-end.')}</td>
              <td>She no longer works on weekends.</td>
            </tr>
            <tr>
              <td><strong>ne ... jamais</strong></td>
              <td>Never</td>
              <td>Je ne bois jamais d’alcool.</td>
              <td>\${audioBtn('Je ne bois jamais d’alcool.')}</td>
              <td>I never drink alcohol.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>\`;
  }

  // 11. EXPRIMER LA CAUSE (PARCE QUE vs À CAUSE DE vs EN RAISON DE vs GRÂCE À)
  function renderCause() {
    return \`<div class="gt-card" id="gt-cause">
      <div class="gt-card-header">
        <div>
          <span class="gt-pill gt-pill-blue">A1.3 PDF · PAGES 6-9</span>
          <h2 class="gt-card-title">Exprimer la Cause : Parce que, À cause de, En raison de, Grâce à</h2>
        </div>
        <button type="button" class="btn btn-primary btn-sm" onclick="window.grammarSubView='challenge'; if(window.ParlezChallenge) window.ParlezChallenge.startSession('cause'); if(window.render) window.render();">
          🎯 Practice in Flashcards (5 Cards) ➜
        </button>
      </div>
      <p class="gt-desc">
        En français, le choix du connecteur de cause dépend de deux critères stricts : <strong>la grammaire</strong> (suit-on un nom ou une phrase avec verbe ?) et <strong>le sentiment</strong> (conséquence négative, neutre/officielle ou positive).
      </p>

      <div class="gt-table-responsive">
        <table class="gt-table">
          <thead>
            <tr>
              <th>Connecteur</th>
              <th>Construction</th>
              <th>Nuance / Sentiment</th>
              <th>Exemple Réel du Cours PDF</th>
              <th>Audio</th>
              <th>Traduction</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Parce que</strong></td>
              <td>+ Phrase (Sujet + Verbe)</td>
              <td>Explication neutre ou logique</td>
              <td><strong>Elle tape au plafond parce qu’elle est énervée.</strong></td>
              <td>\${audioBtn('Elle tape au plafond parce qu’elle est énervée.')}</td>
              <td>She bangs the ceiling because she is irritated.</td>
            </tr>
            <tr>
              <td><strong>À cause de</strong></td>
              <td>+ Nom / Pronom</td>
              <td>Cause NÉGATIVE (problème / gêne)</td>
              <td><strong>Elle est énervée à cause du bruit des voisins.</strong></td>
              <td>\${audioBtn('Elle est énervée à cause du bruit des voisins.')}</td>
              <td>She is irritated because of the neighbors’ noise.</td>
            </tr>
            <tr>
              <td><strong>En raison de</strong></td>
              <td>+ Nom</td>
              <td>Cause FORMELLE / ADMINISTRATIVE</td>
              <td><strong>Le train est en retard en raison des travaux.</strong></td>
              <td>\${audioBtn('Le train est en retard en raison des travaux.')}</td>
              <td>The train is delayed due to construction works.</td>
            </tr>
            <tr>
              <td><strong>Grâce à</strong></td>
              <td>+ Nom / Pronom</td>
              <td>Cause POSITIVE (succès / aide)</td>
              <td><strong>J’ai réussi mon examen grâce à ton aide.</strong></td>
              <td>\${audioBtn('J’ai réussi mon examen grâce à ton aide.')}</td>
              <td>I passed my exam thanks to your help.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style="background:#fff1f2;border:1.5px solid #fca5a5;border-radius:12px;padding:12px 16px;margin-top:14px;">
        <div style="font-size:11.5px;font-weight:800;text-transform:uppercase;color:#991b1b;margin-bottom:4px;">
          ⚠️ PIÈGES FRÉQUENTS DU COURS A1.3 :
        </div>
        <div style="font-size:12.5px;color:#b91c1c;line-height:1.45;">
          • <strong>Jamais de verbe après "à cause de"</strong> : "à cause de elle est fatiguée" est FAUX ! Dites "parce qu'elle est fatiguée".<br/>
          • <strong>Contractions obligatoires</strong> : à cause de + le bruit = à cause <strong>du</strong> bruit ; en raison de + les travaux = en raison <strong>des</strong> travaux ; grâce à + les amis = grâce <strong>aux</strong> amis.
        </div>
      </div>
    </div>\`;
  }

  // 12. OBLIGATION & INTERDICTION (COPROPRIÉTÉ & VOISINAGE)
  function renderRulesAndObligation() {
    return \`<div class="gt-card" id="gt-rules">
      <div class="gt-card-header">
        <div>
          <span class="gt-pill gt-pill-green">A1.3 PDF · PAGES 49-58</span>
          <h2 class="gt-card-title">Obligation &amp; Interdiction (Copropriété, Règlement &amp; Voisins)</h2>
        </div>
        <button type="button" class="btn btn-primary btn-sm" onclick="window.grammarSubView='challenge'; if(window.ParlezChallenge) window.ParlezChallenge.startSession('rules'); if(window.render) window.render();">
          🎯 Practice in Flashcards (8 Cards) ➜
        </button>
      </div>
      <p class="gt-desc">
        Vocabulaire et structures indispensables pour lire et exprimer un règlement d'immeuble, respecter ses voisins et comprendre les règles de copropriété.
      </p>

      <div class="gt-table-responsive">
        <table class="gt-table">
          <thead>
            <tr>
              <th>Structure</th>
              <th>Niveau de contrainte</th>
              <th>Phrase du Règlement PDF</th>
              <th>Audio</th>
              <th>Traduction</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Il faut + infinitif</strong></td>
              <td>Obligation générale</td>
              <td><strong>Il faut tondre la pelouse le samedi matin.</strong></td>
              <td>\${audioBtn('Il faut tondre la pelouse le samedi matin.')}</td>
              <td>You must mow the lawn on Saturday morning.</td>
            </tr>
            <tr>
              <td><strong>Vous devez + infinitif</strong></td>
              <td>Obligation directe</td>
              <td><strong>Vous devez arroser le gazon le soir.</strong></td>
              <td>\${audioBtn('Vous devez arroser le gazon le soir.')}</td>
              <td>You must water the lawn in the evening.</td>
            </tr>
            <tr>
              <td><strong>Il est interdit de + inf</strong></td>
              <td>Interdiction légale</td>
              <td><strong>Il est interdit de faire du bruit après 22h.</strong></td>
              <td>\${audioBtn('Il est interdit de faire du bruit après 22h.')}</td>
              <td>It is forbidden to make noise after 10 PM.</td>
            </tr>
            <tr>
              <td><strong>Défense de + infinitif</strong></td>
              <td>Interdiction stricte (panneau)</td>
              <td><strong>Défense de fumer dans le hall de l’immeuble.</strong></td>
              <td>\${audioBtn('Défense de fumer dans le hall de l’immeuble.')}</td>
              <td>Smoking is strictly forbidden in the lobby.</td>
            </tr>
            <tr>
              <td><strong>Prière de ne pas + inf</strong></td>
              <td>Demande polie / civique</td>
              <td><strong>Prière de ne pas laisser de vélos dans le hall.</strong></td>
              <td>\${audioBtn('Prière de ne pas laisser de vélos dans le hall.')}</td>
              <td>Please do not leave bicycles in the hallway.</td>
            </tr>
            <tr>
              <td><strong>Ne pas + infinitif</strong></td>
              <td>Consigne négative</td>
              <td><strong>Ne pas nuire à la tranquillité du voisinage.</strong></td>
              <td>\${audioBtn('Ne pas nuire à la tranquillité du voisinage.')}</td>
              <td>Do not disturb the neighborhood tranquility.</td>
            </tr>
            <tr>
              <td><strong>Il faut + infinitif</strong></td>
              <td>Devoir de propreté</td>
              <td><strong>Il faut jeter les détritus dans les poubelles.</strong></td>
              <td>\${audioBtn('Il faut jeter les détritus dans les poubelles.')}</td>
              <td>You must throw trash into the trash bins.</td>
            </tr>
            <tr>
              <td><strong>Il est interdit de + inf</strong></td>
              <td>Sécurité</td>
              <td><strong>Il est strictement interdit de se baigner ici.</strong></td>
              <td>\${audioBtn('Il est strictement interdit de se baigner ici.')}</td>
              <td>Swimming here is strictly forbidden.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:12px 16px;margin-top:14px;font-size:12.5px;color:#334155;">
        <strong>📖 Vocabulaire Spécifique du PDF :</strong><br/>
        • <em>Tondre la pelouse</em> = couper l'herbe avec la tondeuse.<br/>
        • <em>Arroser le gazon</em> = donner de l'eau à la pelouse.<br/>
        • <em>Les détritus / les ordures / les déchets</em> = tout ce qu'on jette à la poubelle.<br/>
        • <em>Nuire à quelqu'un</em> = faire du mal ou déranger quelqu'un (ex: nuire aux voisins).<br/>
        • <em>Laisser quelque part</em> = mettre et oublier quelque chose quelque part.
      </div>
    </div>\`;
  }

  // 13. LOGEMENT & RÉPARATIONS (DIALOGUES MARIE & SOPHIE)
  function renderHousingRepairs() {
    return \`<div class="gt-card" id="gt-repairs">
      <div class="gt-card-header">
        <div>
          <span class="gt-pill gt-pill-purple">A1.3 PDF · PAGES 76-92</span>
          <h2 class="gt-card-title">Logement : Pannes, Dégâts des Eaux &amp; Réparations</h2>
        </div>
        <button type="button" class="btn btn-primary btn-sm" onclick="window.grammarSubView='challenge'; if(window.ParlezChallenge) window.ParlezChallenge.startSession('repairs'); if(window.render) window.render();">
          🎯 Practice in Flashcards (6 Cards) ➜
        </button>
      </div>
      <p class="gt-desc">
        Tiré directement des dialogues du cours A1.3 (Marie &amp; le Plombier, Sophie &amp; le Technicien). Apprenez à décrire exactement le dysfonctionnement de vos équipements.
      </p>

      <div class="gt-table-responsive">
        <table class="gt-table">
          <thead>
            <tr>
              <th>Équipement / Situation</th>
              <th>Problème Signalé</th>
              <th>Phrase Type du Dialogue PDF</th>
              <th>Audio</th>
              <th>Traduction Anglaise</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Évier de cuisine</strong></td>
              <td>Être bouché</td>
              <td><strong>J’ai un problème avec mon évier, il est bouché.</strong></td>
              <td>\${audioBtn('J’ai un problème avec mon évier, il est bouché.')}</td>
              <td>I have a problem with my sink, it is clogged.</td>
            </tr>
            <tr>
              <td><strong>Écoulement de l’eau</strong></td>
              <td>Ne plus s’écouler</td>
              <td><strong>Depuis hier soir, l’eau ne s’écoule plus du tout.</strong></td>
              <td>\${audioBtn('Depuis hier soir, l’eau ne s’écoule plus du tout.')}</td>
              <td>Since yesterday evening, water does not drain at all.</td>
            </tr>
            <tr>
              <td><strong>Fuite sous lavabo</strong></td>
              <td>Fuite d’eau</td>
              <td><strong>En dessous du lavabo, il y a une fuite d’eau.</strong></td>
              <td>\${audioBtn('En dessous du lavabo, il y a une fuite d’eau.')}</td>
              <td>Underneath the sink, there is a water leak.</td>
            </tr>
            <tr>
              <td><strong>Appeler un artisan</strong></td>
              <td>Faire venir qqn</td>
              <td><strong>Comment est-ce que je peux faire venir un plombier ?</strong></td>
              <td>\${audioBtn('Comment est-ce que je peux faire venir un plombier ?')}</td>
              <td>How can I have a plumber come over?</td>
            </tr>
            <tr>
              <td><strong>Chauffage en panne</strong></td>
              <td>Ne plus fonctionner</td>
              <td><strong>Mon chauffage ne fonctionne plus, il fait très froid.</strong></td>
              <td>\${audioBtn('Mon chauffage ne fonctionne plus, il fait très froid.')}</td>
              <td>My heating is not working anymore, it is very cold.</td>
            </tr>
            <tr>
              <td><strong>Radiateur &amp; Thermostat</strong></td>
              <td>Rester froid</td>
              <td><strong>Le thermostat est réglé, mais le radiateur reste froid.</strong></td>
              <td>\${audioBtn('Le thermostat est réglé, mais le radiateur reste froid.')}</td>
              <td>The thermostat is set, but the radiator stays cold.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>\`;
  }

  // 14. TEMPS, ORDRE CHRONOLOGIQUE & INFINITIFS
  function renderTimeSequence() {
    return \`<div class="gt-card" id="gt-sequence">
      <div class="gt-card-header">
        <div>
          <span class="gt-pill gt-pill-orange">A1.3 PDF · PAGE 237</span>
          <h2 class="gt-card-title">Temps, Ordre Chronologique &amp; Infinitifs</h2>
        </div>
        <button type="button" class="btn btn-primary btn-sm" onclick="window.grammarSubView='challenge'; if(window.ParlezChallenge) window.ParlezChallenge.startSession('sequence'); if(window.render) window.render();">
          🎯 Practice in Flashcards (4 Cards) ➜
        </button>
      </div>
      <p class="gt-desc">
        Pour raconter votre journée, l’ordre des événements nécessite des connecteurs spécifiques et la préposition <strong>"DE"</strong> devant un infinitif.
      </p>

      <div class="gt-table-responsive">
        <table class="gt-table">
          <thead>
            <tr>
              <th>Connecteur</th>
              <th>Règle Grammaticale</th>
              <th>Exemple Réel du Cours</th>
              <th>Audio</th>
              <th>Traduction</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Avant de + infinitif</strong></td>
              <td>Exige OBLIGATOIREMENT "DE"</td>
              <td><strong>Avant de partir, j’éteins toujours la lumière.</strong></td>
              <td>\${audioBtn('Avant de partir, j’éteins toujours la lumière.')}</td>
              <td>Before leaving, I always turn off the light.</td>
            </tr>
            <tr>
              <td><strong>D’abord ... puis</strong></td>
              <td>Action 1 puis Action 2</td>
              <td><strong>D’abord je me réveille, puis je me douche.</strong></td>
              <td>\${audioBtn('D’abord je me réveille, puis je me douche.')}</td>
              <td>First I wake up, then I shower.</td>
            </tr>
            <tr>
              <td><strong>Ensuite ... après ça</strong></td>
              <td>Action 3 puis Action 4</td>
              <td><strong>Ensuite je prends un café, et après ça je pars.</strong></td>
              <td>\${audioBtn('Ensuite je prends un café, et après ça je pars.')}</td>
              <td>Next I have a coffee, and after that I leave.</td>
            </tr>
            <tr>
              <td><strong>Depuis + durée/moment</strong></td>
              <td>Action en cours commencée au passé</td>
              <td><strong>L’évier fuit depuis hier soir.</strong></td>
              <td>\${audioBtn('L’évier fuit depuis hier soir.')}</td>
              <td>The sink has been leaking since yesterday evening.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>\`;
  }

  // 15. PRÉPOSITIONS DE LIEU
  function renderPrepositions() {
    return \`<div class="gt-card" id="gt-prepositions">
      <div class="gt-card-header">
        <div>
          <span class="gt-pill gt-pill-green">A1.3 · GÉOGRAPHIE &amp; LIEUX</span>
          <h2 class="gt-card-title">Prépositions Géographiques et de Lieu (en, au, aux, à, dans)</h2>
        </div>
        <button type="button" class="btn btn-primary btn-sm" onclick="window.grammarSubView='challenge'; if(window.ParlezChallenge) window.ParlezChallenge.startSession('prepositions'); if(window.render) window.render();">
          🎯 Practice in Flashcards (5 Cards) ➜
        </button>
      </div>
      <p class="gt-desc">
        En français, la préposition devant un nom géographique dépend du genre du pays, de sa lettre initiale, ou s'il s'agit d'une ville ou d'un intérieur.
      </p>

      <div class="gt-table-responsive">
        <table class="gt-table">
          <thead>
            <tr>
              <th>Catégorie de Lieu</th>
              <th>Préposition</th>
              <th>Règle Clé</th>
              <th>Exemple Réel</th>
              <th>Audio</th>
              <th>Traduction</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Pays féminin (-e)</strong></td>
              <td><strong>en</strong></td>
              <td>Presque tous les pays en -e</td>
              <td><strong>Nous allons partir en vacances en France.</strong></td>
              <td>\${audioBtn('Nous allons partir en vacances en France.')}</td>
              <td>We are going on holiday to France.</td>
            </tr>
            <tr>
              <td><strong>Pays en voyelle</strong></td>
              <td><strong>en</strong></td>
              <td>Masc ou fém commençant par voyelle</td>
              <td><strong>Mon cousin est né en Iran.</strong></td>
              <td>\${audioBtn('Mon cousin est né en Iran.')}</td>
              <td>My cousin was born in Iran.</td>
            </tr>
            <tr>
              <td><strong>Pays masculin (consonne)</strong></td>
              <td><strong>au</strong></td>
              <td>Contraction de à + le</td>
              <td><strong>Mon frère vit et travaille au Canada.</strong></td>
              <td>\${audioBtn('Mon frère vit et travaille au Canada.')}</td>
              <td>My brother lives and works in Canada.</td>
            </tr>
            <tr>
              <td><strong>Pays pluriel</strong></td>
              <td><strong>aux</strong></td>
              <td>Contraction de à + les</td>
              <td><strong>Ils sont allés vivre aux États-Unis.</strong></td>
              <td>\${audioBtn('Ils sont allés vivre aux États-Unis.')}</td>
              <td>They went to live in the United States.</td>
            </tr>
            <tr>
              <td><strong>Ville</strong></td>
              <td><strong>à</strong></td>
              <td>Toujours À pour une ville</td>
              <td><strong>Elle est arrivée à Paris hier matin.</strong></td>
              <td>\${audioBtn('Elle est arrivée à Paris hier matin.')}</td>
              <td>She arrived in Paris yesterday morning.</td>
            </tr>
            <tr>
              <td><strong>Intérieur bâtiment</strong></td>
              <td><strong>dans</strong></td>
              <td>Lieu clos avec article défini</td>
              <td><strong>Ne laissez pas vos vélos dans le hall.</strong></td>
              <td>\${audioBtn('Ne laissez pas vos vélos dans le hall.')}</td>
              <td>Do not leave your bikes in the lobby.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>\`;
  }
`;

// Insert the new functions right before `function page()`
const insertIndex = code.indexOf('function page()');
if (insertIndex !== -1) {
  code = code.slice(0, insertIndex) + newSectionFunctions + '\n  ' + code.slice(insertIndex);
}

// 2. Update the navigation tabs and container in `page()`
const oldNavTabs = `<div class="gt-nav-tabs" style="margin-top:16px">`;
const newNavTabs = `<div class="gt-nav-tabs" style="margin-top:16px">
          <button type="button" class="chip \${activeSection === 'all' ? 'active' : ''}" data-gt-section="all">
            🌟 All Reference Guides
          </button>
          <button type="button" class="chip \${activeSection === 'passe' ? 'active' : ''}" data-gt-section="passe">
            ⏱️ Past Tenses (Passé Composé)
          </button>
          <button type="button" class="chip \${activeSection === 'reflexive' ? 'active' : ''}" data-gt-section="reflexive">
            🪞 Reflexive Verbs (Se / S’)
          </button>
          <button type="button" class="chip \${activeSection === 'faire' ? 'active' : ''}" data-gt-section="faire">
            ⚡ Se faire + Infinitif
          </button>
          <button type="button" class="chip \${activeSection === 'neque' ? 'active' : ''}" data-gt-section="neque">
            🚫 Ne ... que (Only / Just)
          </button>
          <button type="button" class="chip \${activeSection === 'cause' ? 'active' : ''}" data-gt-section="cause">
            ⚡ Cause (Parce que / À cause de)
          </button>
          <button type="button" class="chip \${activeSection === 'rules' ? 'active' : ''}" data-gt-section="rules">
            📋 Obligation &amp; Interdiction
          </button>
          <button type="button" class="chip \${activeSection === 'repairs' ? 'active' : ''}" data-gt-section="repairs">
            🔧 Pannes &amp; Réparations
          </button>
          <button type="button" class="chip \${activeSection === 'sequence' ? 'active' : ''}" data-gt-section="sequence">
            ⏱️ Temps &amp; Chronologie
          </button>
          <button type="button" class="chip \${activeSection === 'prepositions' ? 'active' : ''}" data-gt-section="prepositions">
            📍 Prépositions de Lieu
          </button>
          <button type="button" class="chip \${activeSection === 'pronouns' ? 'active' : ''}" data-gt-section="pronouns">
            🎯 Pronouns (COD &amp; COI)
          </button>
          <button type="button" class="chip \${activeSection === 'connaitre' ? 'active' : ''}" data-gt-section="connaitre">
            💡 Connaître vs Savoir
          </button>
          <button type="button" class="chip \${activeSection === 'groups' ? 'active' : ''}" data-gt-section="groups">
            1️⃣ 1st, 2nd &amp; 3rd Group Verbs
          </button>
          <button type="button" class="chip \${activeSection === 'matrix' ? 'active' : ''}" data-gt-section="matrix">
            🔄 Subject Transformation Matrix
          </button>
        </div>`;

// Replace nav tabs block
const navStart = code.indexOf('<div class="gt-nav-tabs" style="margin-top:16px">');
const navEnd = code.indexOf('<!-- MAIN CONTENT SECTIONS -->');
if (navStart !== -1 && navEnd !== -1) {
  code = code.slice(0, navStart) + newNavTabs + '\n      </div>\n\n      ' + code.slice(navEnd);
}

// 3. Update the sections container
const oldContainerStart = '<div class="gt-sections-container" style="margin-top:20px">';
const oldContainerEnd = '</div>\n    </div>`;';
const containerIdx = code.indexOf(oldContainerStart);
const containerEndIdx = code.indexOf(oldContainerEnd, containerIdx);

if (containerIdx !== -1 && containerEndIdx !== -1) {
  const newContainer = `<div class="gt-sections-container" style="margin-top:20px">
        \${(activeSection === 'all' || activeSection === 'neque') ? renderNeQue() : ''}
        \${(activeSection === 'all' || activeSection === 'cause') ? renderCause() : ''}
        \${(activeSection === 'all' || activeSection === 'rules') ? renderRulesAndObligation() : ''}
        \${(activeSection === 'all' || activeSection === 'repairs') ? renderHousingRepairs() : ''}
        \${(activeSection === 'all' || activeSection === 'sequence') ? renderTimeSequence() : ''}
        \${(activeSection === 'all' || activeSection === 'prepositions') ? renderPrepositions() : ''}
        \${(activeSection === 'all' || activeSection === 'passe') ? renderPasseTenses() : ''}
        \${(activeSection === 'all' || activeSection === 'reflexive') ? renderReflexive() : ''}
        \${(activeSection === 'all' || activeSection === 'faire') ? renderFaire() : ''}
        \${(activeSection === 'all' || activeSection === 'pronouns') ? renderPronouns() : ''}
        \${(activeSection === 'all' || activeSection === 'connaitre') ? renderConnaitreSavoir() : ''}
        \${(activeSection === 'all' || activeSection === 'matrix') ? renderSubjectMatrix() : ''}
        \${(activeSection === 'all' || activeSection === 'groups') ? renderGroup1() : ''}
        \${(activeSection === 'all' || activeSection === 'groups') ? renderGroup2() : ''}
        \${(activeSection === 'all' || activeSection === 'groups') ? renderGroup3() : ''}
      </div>`;
  code = code.slice(0, containerIdx) + newContainer + '\n    </div>`;' + code.slice(containerEndIdx + oldContainerEnd.length);
}

fs.writeFileSync(filePath, code, 'utf8');
console.log('Successfully updated public/grammar-tables.js with all new A1.3 PDF grammar sections!');
