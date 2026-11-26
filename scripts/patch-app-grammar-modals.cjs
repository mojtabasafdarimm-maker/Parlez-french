const fs = require('fs');
const path = require('path');
const { CARD_STRUCTURE_MAP } = require('./card-structure-map.cjs');

const appPath = path.join(__dirname, '..', 'public', 'app.js');
let appCode = fs.readFileSync(appPath, 'utf8');

// 1. In mergeCurriculumCards, ensure existing cards copy structureId if missing
const oldMergeMatch = `if(!existing.customImage && c.scene && existing.scene !== c.scene) existing.scene = c.scene;`;
const newMergeCode = `if(!existing.customImage && c.scene && existing.scene !== c.scene) existing.scene = c.scene;\n        if(c.structureId) existing.structureId = c.structureId;`;

if (appCode.includes(oldMergeMatch)) {
  appCode = appCode.replace(oldMergeMatch, newMergeCode);
  console.log('✓ Updated mergeCurriculumCards to sync structureId onto existing cards');
} else {
  console.error('❌ Could not find exact mergeCurriculumCards string to patch');
  process.exit(1);
}

// 2. Add global helper window.openGrammarStructureModal
const helperCode = `
window.openGrammarStructureModal = function(structureKey) {
  if (!structureKey) return;
  const struct = (window.ParlezGrammarStructures && window.ParlezGrammarStructures[structureKey]) || (window.ParlezChallenge && window.ParlezChallenge.getStructures && window.ParlezChallenge.getStructures()[structureKey]);
  if (!struct) return;
  document.querySelector('.gflash-modal-backdrop')?.remove();
  const esc = s => (s === undefined || s === null ? '' : String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'));
  const modalHtml = \`
    <div class="gflash-modal-backdrop" data-gflash-backdrop-close="true" style="position: fixed; inset: 0; background: rgba(15, 23, 42, 0.65); z-index: 9999; display: flex; align-items: center; justify-content: center; padding: 14px; backdrop-filter: blur(4px); animation: fadeIn 0.15s ease;">
      <div class="gflash-modal-dialog" style="background: #ffffff; border-radius: 20px; max-width: 640px; width: 100%; max-height: 88vh; overflow-y: auto; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); border: 1.5px solid #e2e8f0; display: flex; flex-direction: column;">
        <div style="padding: 16px 20px; border-bottom: 1.5px solid #f1f5f9; display: flex; justify-content: space-between; align-items: center; background: #fafafa; border-radius: 20px 20px 0 0; position: sticky; top: 0; z-index: 10;">
          <div>
            <span class="meta" style="margin: 0; font-size: 10.5px; background: #e0e7ff; color: #3730a3; padding: 3px 8px; border-radius: 6px; font-weight: 800;">\${esc(struct.badge)}</span>
            <h3 style="margin: 4px 0 0; font-size: 17px; font-weight: 800; color: #1e1b4b;">\${esc(struct.title)}</h3>
          </div>
          <button type="button" class="btn btn-white btn-sm" onclick="document.querySelector('.gflash-modal-backdrop')?.remove()" style="border-radius: 50%; width: 34px; height: 34px; padding: 0; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: 800;">✕</button>
        </div>
        <div style="padding: 18px 20px;">
          <p style="font-size: 13.5px; color: #475569; line-height: 1.5; margin: 0 0 14px;">\${esc(struct.summary)}</p>
          <div style="background: #eef2ff; border: 1.5px solid #c7d2fe; border-radius: 12px; padding: 12px 14px; margin-bottom: 16px;">
            <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: #4338ca; letter-spacing: 0.5px; margin-bottom: 4px;">📐 Structural Formula:</div>
            <div style="font-family: monospace; font-size: 13.5px; font-weight: 800; color: #1e1b4b;">\${esc(struct.formula)}</div>
            \${struct.negationFormula && struct.negationFormula !== 'N/A' ? \`<div style="margin-top: 6px; font-family: monospace; font-size: 12px; color: #6366f1;">Négation : \${esc(struct.negationFormula)}</div>\` : ''}
          </div>
          <div style="margin-bottom: 16px;">
            <div style="font-size: 11.5px; font-weight: 800; text-transform: uppercase; margin-bottom: 8px; color: #1e293b;">📋 Complete Reference Table:</div>
            <div class=\"gt-table-responsive\" style="max-height: 280px; overflow-y: auto; border: 1px solid #e2e8f0; border-radius: 12px;">
              <table class=\"gt-table\" style="width: 100%; border-collapse: collapse; font-size: 12.5px; text-align: left;">
                <thead style="position: sticky; top: 0; background: #f8fafc; z-index: 1;">
                  <tr style="border-bottom: 1.5px solid #cbd5e1;">
                    \${struct.headers.map(h => \`<th style="padding: 8px 10px; font-weight: 800; color: #475569;">\${esc(h)}</th>\`).join('')}
                    <th style="padding: 8px 10px; text-align: center; color: #475569;">Audio</th>
                  </tr>
                </thead>
                <tbody>
                  \${struct.rows.map((row, rIdx) => \`
                    <tr style="border-bottom: 1px solid #f1f5f9; background: \${rIdx % 2 === 0 ? '#ffffff' : '#fafafa'};">
                      \${row.map((cell, cIdx) => \`<td style="padding: 8px 10px; \${cIdx === 0 ? 'font-weight: 800; color: #3730a3;' : (cIdx === 2 ? 'font-weight: 700; color: #e11d48;' : '')}">\${esc(cell)}</td>\`).join('')}
                      <td style="padding: 8px 10px; text-align: center;">
                        <button type="button" class="btn btn-secondary btn-sm" onclick="if(window.say) window.say('\${esc(row[3] || row[0])}')" style="padding: 2px 7px; font-size: 11px; border-radius: 6px;">🔊</button>
                      </td>
                    </tr>
                  \`).join('')}
                </tbody>
              </table>
            </div>
          </div>
          \${struct.traps && struct.traps.length ? \`
            <div style="background: #fff1f2; border: 1.5px solid #fecdd3; border-radius: 12px; padding: 12px 14px; margin-bottom: 16px;">
              <div style="font-size: 11.5px; font-weight: 800; text-transform: uppercase; color: #be123c; margin-bottom: 6px; display: flex; align-items: center; gap: 5px;">⚠️ Traps & Common Mistakes to Avoid:</div>
              <div style="font-size: 12px; color: #9f1239; line-height: 1.45;">
                \${struct.traps.map(t => \`<div style="margin-bottom: 4px;">• \${esc(t)}</div>\`).join('')}
              </div>
            </div>
          \` : ''}
          \${struct.rules && struct.rules.length ? \`
            <div style="background: #fdf4ff; border: 1.5px solid #f5d0fe; border-radius: 12px; padding: 12px 14px; font-size: 12px; color: #701a75; line-height: 1.45; margin-bottom: 16px;">
              <div style="font-size: 11.5px; font-weight: 800; text-transform: uppercase; margin-bottom: 4px; color: #86198f;">💡 Key Notes & Nuances:</div>
              \${struct.rules.map(r => \`<div>• \${esc(r)}</div>\`).join('')}
            </div>
          \` : ''}
        </div>
        <div style="padding: 12px 20px; border-top: 1.5px solid #f1f5f9; background: #fafafa; border-radius: 0 0 20px 20px; display: flex; justify-content: flex-end; gap: 8px;">
          <button type="button" class="btn btn-primary" onclick="document.querySelector('.gflash-modal-backdrop')?.remove()" style="font-size: 13px; border-radius: 12px; padding: 8px 18px;">✓ Got It, Return to Card</button>
        </div>
      </div>
    </div>\`;
  document.body.insertAdjacentHTML('beforeend', modalHtml);
};
`;

const clickMarker = `// Delegated controls: stable even when cards and views re-render.`;
if (appCode.includes(clickMarker) && !appCode.includes('window.openGrammarStructureModal')) {
  appCode = appCode.replace(clickMarker, `${helperCode}\n${clickMarker}`);
  console.log('✓ Inserted window.openGrammarStructureModal helper');
}

// 3. In cardDetailsModal, replace the note-box section using regex
const noteBoxRegex = /\$\{c\.grammarNote\?`<div class="card-details-box note-box">[\s\S]*?<\/div>`:''\}/;
const newNoteBox = `\${(()=>{
          const structKey = c.structureId || (window.ParlezCardStructureMap && window.ParlezCardStructureMap[c.id]);
          return (c.grammarNote || structKey) ? \`<div class="card-details-box note-box" style="position:relative;">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap;">
            <span class="small muted" style="font-weight:700;color:var(--purple-dark,#515097)">Grammar &amp; Usage Note</span>
            \${structKey ? \`<button type="button" class="btn btn-secondary btn-sm" onclick="window.openGrammarStructureModal('\${esc(structKey)}')" style="font-size:11.5px;font-weight:700;padding:3px 9px;border-radius:8px;">📊 Structure Table &amp; Rules</button>\` : ''}
          </div>
          \${c.grammarNote ? \`<p style="margin:6px 0 0;font-size:13.5px;line-height:1.5">\${esc(c.grammarNote)}</p>\` : ''}
        </div>\` : '';
        })()}`;

if (noteBoxRegex.test(appCode)) {
  appCode = appCode.replace(noteBoxRegex, newNoteBox);
  console.log('✓ Upgraded cardDetailsModal with Structure Table button');
} else {
  console.error('❌ Could not match noteBoxRegex in cardDetailsModal');
  process.exit(1);
}

// 4. In grammarCardSessionView, add Structure Table button to revealed answer
const grammarAnswerRegex = /<button class="btn btn-secondary btn-sm" type="button" data-action="say-grammar-answer" aria-label="Listen to French answer">\$\{icon\('sound'\)\} Listen<\/button>/;
const newGrammarAnswer = `<button class="btn btn-secondary btn-sm" type="button" data-action="say-grammar-answer" aria-label="Listen to French answer">\${icon('sound')} Listen</button>
        \${(()=>{
          const sKey = c.structureId || (window.ParlezCardStructureMap && window.ParlezCardStructureMap[c.id]);
          return sKey ? \`<button type="button" class="btn btn-white btn-sm" onclick="window.openGrammarStructureModal('\${esc(sKey)}')" style="font-size:12px;font-weight:700;padding:5px 10px;border-radius:10px;display:inline-flex;align-items:center;gap:5px;box-shadow:0 1px 3px rgba(0,0,0,0.05);">📊 View Detailed Table &amp; Traps</button>\` : '';
        })()}`;

if (grammarAnswerRegex.test(appCode)) {
  appCode = appCode.replace(grammarAnswerRegex, newGrammarAnswer);
  console.log('✓ Upgraded grammarCardSessionView with Structure Table button');
} else {
  console.error('❌ Could not match grammarAnswerRegex in grammarCardSessionView');
  process.exit(1);
}

// 5. In grammarFlashcardsView (Rule Cards library grid), add Structure Table button
const libFooterRegex = /<button class="btn btn-secondary btn-sm" data-say-card="\$\{esc\(c\.frenchExample\|\|c\.frenchAnswer\)\}">\$\{icon\('sound'\)\} Listen<\/button>\s*<button class="btn btn-white btn-sm" data-practice="\$\{esc\(c\.id\)\}">Flashcard \$\{icon\('arrow'\)\}<\/button>/;
const newLibFooter = `<button class="btn btn-secondary btn-sm" data-say-card="\${esc(c.frenchExample||c.frenchAnswer)}">\${icon('sound')} Listen</button>
            \${(()=>{
              const sKey = c.structureId || (window.ParlezCardStructureMap && window.ParlezCardStructureMap[c.id]);
              return sKey ? \`<button type="button" class="btn btn-white btn-sm" onclick="window.openGrammarStructureModal('\${esc(sKey)}')" style="font-size:11.5px;font-weight:700;padding:3px 8px;border-radius:8px;">📊 Table</button>\` : '';
            })()}
            <button class="btn btn-white btn-sm" data-practice="\${esc(c.id)}">Flashcard \${icon('arrow')}</button>`;

if (libFooterRegex.test(appCode)) {
  appCode = appCode.replace(libFooterRegex, newLibFooter);
  console.log('✓ Upgraded grammarFlashcardsView with Structure Table button');
} else {
  console.error('❌ Could not match libFooterRegex in grammarFlashcardsView');
  process.exit(1);
}

// 6. Make CARD_STRUCTURE_MAP globally accessible
const mapExport = `window.ParlezCardStructureMap = ${JSON.stringify(CARD_STRUCTURE_MAP)};\n`;
if (!appCode.includes('window.ParlezCardStructureMap')) {
  appCode = mapExport + appCode;
  console.log('✓ Exported window.ParlezCardStructureMap');
}

fs.writeFileSync(appPath, appCode, 'utf8');
console.log('✓ Saved all upgrades into public/app.js');
