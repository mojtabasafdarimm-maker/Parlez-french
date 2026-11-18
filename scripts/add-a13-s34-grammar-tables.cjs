// Add Pronouns (COD/COI) & Connaître vs Savoir study sections to public/grammar-tables.js
const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../public/grammar-tables.js');
let content = fs.readFileSync(filePath, 'utf8');

const newRenderFunctions = `
  // 7. PRONOUNS REFERENCE (COD & COI) - A1.3 Séances 3–4
  function renderPronouns() {
    return \`<div class="gt-card" id="gt-pronouns">
      <div class="gt-card-header">
        <div>
          <span class="gt-pill gt-pill-purple">PRONOMS COMPLÉMENTS · A1.3</span>
          <h2 class="gt-card-title">Direct (COD) &amp; Indirect (COI) Object Pronouns</h2>
        </div>
      </div>
      <p class="gt-desc">
        Pronouns replace nouns so you don't repeat them. <strong>COD</strong> replaces direct objects (answers <em>Qui ?</em> or <em>Quoi ?</em>). <strong>COI</strong> replaces people preceded by the preposition <em>à</em> (answers <em>À qui ?</em>).
      </p>

      <div class="gt-formula-badge" style="margin-bottom:16px">
        <span>COD : Sujet + (le / la / l’ / les) + Verbe</span>
        <span style="margin: 0 10px">·</span>
        <span>COI : Sujet + (lui / leur) + Verbe (avec « à »)</span>
      </div>

      <div class="gt-table-container">
        <table class="gt-table">
          <thead>
            <tr>
              <th>Person</th>
              <th>COD (Direct: Who / What?)</th>
              <th>COI (Indirect: To whom?)</th>
              <th>Example Sentence</th>
              <th>Audio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1re sing. (Je)</strong></td>
              <td><span class="gt-pill gt-pill-blue">me / m’</span></td>
              <td><span class="gt-pill gt-pill-purple">me / m’</span></td>
              <td>Il <strong>me</strong> regarde (COD) · Elle <strong>me</strong> parle (COI)</td>
              <td>\${audioBtn('Il me regarde. Elle me parle.')}</td>
            </tr>
            <tr>
              <td><strong>2e sing. (Tu)</strong></td>
              <td><span class="gt-pill gt-pill-blue">te / t’</span></td>
              <td><span class="gt-pill gt-pill-purple">te / t’</span></td>
              <td>Je <strong>te</strong> vois (COD) · Je <strong>te</strong> montre mes photos (COI)</td>
              <td>\${audioBtn('Je te vois. Je te montre mes photos.')}</td>
            </tr>
            <tr>
              <td><strong>3e sing. (Il / Elle)</strong></td>
              <td><span class="gt-pill gt-pill-blue">le / la / l’</span> (accords en genre!)</td>
              <td><span class="gt-pill gt-pill-purple">lui</span> (masc. ET fém. !)</td>
              <td>Je <strong>la</strong> regarde (COD) · Je <strong>lui</strong> téléphone (COI)</td>
              <td>\${audioBtn('Je la regarde. Je lui téléphone.')}</td>
            </tr>
            <tr>
              <td><strong>1re plur. (Nous)</strong></td>
              <td><span class="gt-pill gt-pill-blue">nous</span></td>
              <td><span class="gt-pill gt-pill-purple">nous</span></td>
              <td>Vous <strong>nous</strong> attendez ? · Vous <strong>nous</strong> écrivez ?</td>
              <td>\${audioBtn('Vous nous attendez ? Vous nous écrivez ?')}</td>
            </tr>
            <tr>
              <td><strong>2e plur. (Vous)</strong></td>
              <td><span class="gt-pill gt-pill-blue">vous</span></td>
              <td><span class="gt-pill gt-pill-purple">vous</span></td>
              <td>Je <strong>vous</strong> invite (COD) · Je <strong>vous</strong> réponds (COI)</td>
              <td>\${audioBtn('Je vous invite. Je vous réponds.')}</td>
            </tr>
            <tr>
              <td><strong>3e plur. (Ils / Elles)</strong></td>
              <td><span class="gt-pill gt-pill-blue">les</span> (choses ou personnes)</td>
              <td><span class="gt-pill gt-pill-purple">leur</span> (SANS 's' ! à eux / à elles)</td>
              <td>Je <strong>les</strong> achète (COD) · Je <strong>leur</strong> écris (COI)</td>
              <td>\${audioBtn('Je les achète. Je leur écris.')}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- CRITICAL RULES CARDS -->
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:14px;margin-top:20px">
        <div style="padding:16px;border-radius:14px;background:#f0fdf4;border:1.5px solid #86efac">
          <h4 style="margin:0 0 8px 0;font-size:15px;color:#15803d">🎯 Place with Semi-Auxiliaries</h4>
          <p style="margin:0 0 8px 0;font-size:13px;color:#166534">
            With modal verbs (<em>vouloir, pouvoir, devoir</em>) and near future / recent past (<em>aller + inf, venir de + inf</em>), the pronoun is placed <strong>directly before the infinitive</strong>:
          </p>
          <div style="font-size:13px;line-height:1.6">
            • Je vais <strong>la</strong> voir demain. \${audioBtn('Je vais la voir demain.')}<br/>
            • Je dois <strong>l’</strong>acheter. \${audioBtn('Je dois l’acheter.')}<br/>
            • Tu peux <strong>le</strong> faire ? \${audioBtn('Tu peux le faire ?')}
          </div>
        </div>

        <div style="padding:16px;border-radius:14px;background:#fef2f2;border:1.5px solid #fecaca">
          <h4 style="margin:0 0 8px 0;font-size:15px;color:#b91c1c">⚠️ Passé Composé Agreement Rule</h4>
          <p style="margin:0 0 8px 0;font-size:13px;color:#991b1b">
            <strong>COD placed BEFORE avoir = PARTICIPLE ACCORD!</strong><br/>
            • Tu as vu sa voiture ? — Oui, je l’ai <strong>vue</strong> (+e fém.)! \${audioBtn('Oui, je l’ai vue !')}<br/>
            • Tes amies ? — Je les ai <strong>vues</strong> (+es fém. pl.)! \${audioBtn('Je les ai vues !')}<br/>
            <strong style="color:#b91c1c">COI NEVER AGREES:</strong><br/>
            • Je lui ai <strong>parlé</strong> (no +e even if speaking to a woman!).
          </div>
        </div>
      </div>
    </div>\`;
  }

  // 8. CONNAÎTRE VS SAVOIR REFERENCE - A1.3 Séances 3–4
  function renderConnaitreSavoir() {
    return \`<div class="gt-card" id="gt-connaitre-savoir">
      <div class="gt-card-header">
        <div>
          <span class="gt-pill gt-pill-green">DIFFÉRENCE FONDAMENTALE · A1.3</span>
          <h2 class="gt-card-title">Connaître vs Savoir : How to Never Confuse Them</h2>
        </div>
      </div>
      <p class="gt-desc">
        Both mean "to know", but French strictly separates acquaintance with people/places (<em>Connaître</em>) from skills and factual clauses (<em>Savoir</em>).
      </p>

      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px;margin-top:16px">
        <!-- CONNAÎTRE CARD -->
        <div style="padding:18px;border-radius:16px;background:#f0fdf4;border:2px solid #22c55e">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
            <h3 style="margin:0;font-size:18px;color:#15803d">CONNAÎTRE + NOM</h3>
            <span class="gt-pill gt-pill-green">Personne / Lieu / Objet</span>
          </div>
          <p style="font-size:13px;color:#166534;margin-bottom:12px">
            Always followed directly by a <strong>Noun</strong>. Expresses familiarity, acquaintance or visiting.
          </p>
          <div style="font-size:13px;line-height:1.7;background:#fff;padding:12px;border-radius:10px;border:1px solid #bbf7d0">
            • Je <strong>connais</strong> Danial. (person) \${audioBtn('Je connais Danial.')}<br/>
            • Je <strong>connais</strong> ce restaurant. (place) \${audioBtn('Je connais ce resto.')}<br/>
            • Tu <strong>connais</strong> cette ville ? \${audioBtn('Tu connais cette ville ?')}<br/>
            • Je ne le <strong>connais</strong> que de vue. \${audioBtn('Je ne le connais pas, seulement de vue.')}
          </div>
          <div style="margin-top:10px;font-size:12px;color:#15803d;font-weight:600">
            🚫 NEVER use with a verb (e.g. *connaître parler) or that/where!
          </div>
        </div>

        <!-- SAVOIR CARD -->
        <div style="padding:18px;border-radius:16px;background:#eff6ff;border:2px solid #3b82f6">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
            <h3 style="margin:0;font-size:18px;color:#1d4ed8">SAVOIR + VERBE / CLAUSE</h3>
            <span class="gt-pill gt-pill-blue">Compétence &amp; Fait</span>
          </div>
          <p style="font-size:13px;color:#1e40af;margin-bottom:12px">
            Followed by an <strong>Infinitive</strong> (learned skill) OR a <strong>clause</strong> (<em>que, où, quand, comment, pourquoi</em>).
          </p>
          <div style="font-size:13px;line-height:1.7;background:#fff;padding:12px;border-radius:10px;border:1px solid #bfdbfe">
            • Je <strong>sais</strong> parler français. (skill) \${audioBtn('Je sais parler français.')}<br/>
            • Je <strong>sais</strong> nager et danser. (skill) \${audioBtn('Je sais nager et je sais danser.')}<br/>
            • Je <strong>sais</strong> où tu habites. (information) \${audioBtn('Je sais où tu habites.')}<br/>
            • Vous <strong>savez</strong> quand arrive le train ? \${audioBtn('Vous savez quand le train arrive ?')}
          </div>
          <div style="margin-top:10px;font-size:12px;color:#1d4ed8;font-weight:600">
            💡 Formula: Savoir nager / Savoir que / Savoir où / Savoir comment.
          </div>
        </div>
      </div>
    </div>\`;
  }
`;

// Insert the functions right before MAIN PAGE BUILDER
const targetBuilder = '  /* -------------------------------------------------------------\r\n     MAIN PAGE BUILDER';
const targetBuilderLF = '  /* -------------------------------------------------------------\n     MAIN PAGE BUILDER';

if (content.includes(targetBuilder)) {
  content = content.replace(targetBuilder, newRenderFunctions + '\r\n' + targetBuilder);
} else if (content.includes(targetBuilderLF)) {
  content = content.replace(targetBuilderLF, newRenderFunctions.replace(/\r\n/g, '\n') + '\n' + targetBuilderLF);
} else {
  console.error('Target builder comment not found in grammar-tables.js');
  process.exit(1);
}

// Update activeSection comment
content = content.replace(
  "let activeSection = 'all'; // 'all' | 'groups' | 'passe' | 'reflexive' | 'faire' | 'matrix'",
  "let activeSection = 'all'; // 'all' | 'groups' | 'passe' | 'reflexive' | 'faire' | 'matrix' | 'pronouns' | 'connaitre'"
);

// Add nav buttons
const oldNavButtons = `          <button type="button" class="chip \${activeSection === 'matrix' ? 'active' : ''}" data-gt-section="matrix">
            🔄 Subject Transformation Matrix
          </button>`;

const newNavButtons = `          <button type="button" class="chip \${activeSection === 'matrix' ? 'active' : ''}" data-gt-section="matrix">
            🔄 Subject Transformation Matrix
          </button>
          <button type="button" class="chip \${activeSection === 'pronouns' ? 'active' : ''}" data-gt-section="pronouns">
            🎯 Pronouns (COD &amp; COI)
          </button>
          <button type="button" class="chip \${activeSection === 'connaitre' ? 'active' : ''}" data-gt-section="connaitre">
            💡 Connaître vs Savoir
          </button>`;

content = content.replace(oldNavButtons, newNavButtons);

// Add sections in main container
const oldSectionsRender = `        \${(activeSection === 'all' || activeSection === 'faire') ? renderFaire() : ''}`;
const newSectionsRender = `        \${(activeSection === 'all' || activeSection === 'faire') ? renderFaire() : ''}
        \${(activeSection === 'all' || activeSection === 'pronouns') ? renderPronouns() : ''}
        \${(activeSection === 'all' || activeSection === 'connaitre') ? renderConnaitreSavoir() : ''}`;

content = content.replace(oldSectionsRender, newSectionsRender);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated grammar-tables.js with Pronouns & Connaître vs Savoir sections!');
