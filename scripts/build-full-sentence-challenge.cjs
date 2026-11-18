const fs = require('fs');
const path = require('path');
const { GRAMMAR_STRUCTURES } = require('./grammar-structures.cjs');
const { CHALLENGES } = require('./grammar-challenges.cjs');

const TOPIC_CHIPS = [
  { id: 'all', label: '🎯 Purposeful Learning Track (Curated Chains)' },
  { id: 'showdowns', label: '⚖️ Grammar Showdowns & Contrasts (Pairs)' },
  { id: 'shifts', label: '🔄 Subject Shifts & Agreement Rounds' },
  { id: 'due', label: '🧠 Due & Smart Review (FSRS)' },
  { id: 'cause', label: '⚡ Cause (Grâce à / À cause de / En raison de)' },
  { id: 'neque', label: '🚫 Ne ... que (Restrictive Only)' },
  { id: 'se_faire', label: '🔒 Se faire + Infinitif' },
  { id: 'reflexive', label: '🛏️ Verbes Réflexifs (Être)' },
  { id: 'maison', label: '🏠 Maison d’Être (Movement Verbs)' },
  { id: 'cod_coi', label: '🎯 Pronoms COD & COI' },
  { id: 'connaitre_savoir', label: '💡 Connaître vs Savoir' },
  { id: 'sequence', label: '⏱️ Temps & Chronologie' },
  { id: 'rules', label: '📋 Obligation & Interdiction' },
  { id: 'repairs', label: '🔧 Logement & Réparations' },
  { id: 'prepositions', label: '📍 Prépositions de Lieu' },
  { id: 'avoir', label: '🍎 Avoir Participles & Accord' }
];

const jsContent = `// Parlez Grammar Flashcard Sentence Builder with Tricky Distractors & Targeted Remediation (v36)
// Visual-first grammar learning with authentic scenes, prompt visible below photo,
// interactive scrambled word builder with deceptive distractors, targeted remediation,
// purposeful pedagogical chaining, and accessible Grammar Structure Reference Tables on every card.
(function () {
  const GRAMMAR_STRUCTURES = ${JSON.stringify(GRAMMAR_STRUCTURES, null, 2)};

  const CHALLENGES = ${JSON.stringify(CHALLENGES, null, 2)};

  const TOPIC_CHIPS = ${JSON.stringify(TOPIC_CHIPS, null, 2)};

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
        return \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 340" role="img" focusable="false" style="width:100%;height:100%;display:block;">\${inner}</svg>\`;
      }
    }
    return \`<div style="height:160px;background:#f1f5f9;display:flex;align-items:center;justify-content:center;border-radius:14px;color:#64748b;font-weight:700;">🖼️ \${esc(sceneName)}</div>\`;
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

    return \`
      <!-- Grammar Structure & Reference Table Modal -->
      <div class="gflash-modal-backdrop" data-gflash-backdrop-close="true" style="position: fixed; inset: 0; background: rgba(15, 23, 42, 0.65); z-index: 9999; display: flex; align-items: center; justify-content: center; padding: 14px; backdrop-filter: blur(4px); animation: fadeIn 0.15s ease;">
        <div class="gflash-modal-dialog" style="background: #ffffff; border-radius: 20px; max-width: 640px; width: 100%; max-height: 88vh; overflow-y: auto; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); border: 1.5px solid #e2e8f0; display: flex; flex-direction: column;">
          
          <!-- Modal Sticky Header -->
          <div style="padding: 16px 20px; border-bottom: 1.5px solid #f1f5f9; display: flex; justify-content: space-between; align-items: center; background: #fafafa; border-radius: 20px 20px 0 0; position: sticky; top: 0; z-index: 10;">
            <div>
              <span class="meta" style="margin: 0; font-size: 10.5px; background: #e0e7ff; color: #3730a3; padding: 3px 8px; border-radius: 6px; font-weight: 800;">\${esc(struct.badge)}</span>
              <h3 style="margin: 4px 0 0; font-size: 17px; font-weight: 800; color: #1e1b4b;">\${esc(struct.title)}</h3>
            </div>
            <button type="button" class="btn btn-white btn-sm" data-gflash-close-modal="true" style="border-radius: 50%; width: 34px; height: 34px; padding: 0; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: 800;">
              ✕
            </button>
          </div>

          <!-- Modal Scrollable Content -->
          <div style="padding: 18px 20px;">
            
            <!-- Summary -->
            <p style="font-size: 13.5px; color: #475569; line-height: 1.5; margin: 0 0 14px;">
              \${esc(struct.summary)}
            </p>

            <!-- Formula Box -->
            <div style="background: #eef2ff; border: 1.5px solid #c7d2fe; border-radius: 12px; padding: 12px 14px; margin-bottom: 16px;">
              <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: #4338ca; letter-spacing: 0.5px; margin-bottom: 4px;">
                📐 Structural Formula:
              </div>
              <div style="font-family: monospace; font-size: 13.5px; font-weight: 800; color: #1e1b4b;">
                \${esc(struct.formula)}
              </div>
              \${struct.negationFormula && struct.negationFormula !== 'N/A' ? \`
                <div style="margin-top: 6px; font-family: monospace; font-size: 12px; color: #6366f1;">
                  Négation : \${esc(struct.negationFormula)}
                </div>
              \` : ''}
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
                      \${struct.headers.map(h => \`<th style="padding: 8px 10px; font-weight: 800; color: #475569;">\${esc(h)}</th>\`).join('')}
                      <th style="padding: 8px 10px; text-align: center; color: #475569;">Audio</th>
                    </tr>
                  </thead>
                  <tbody>
                    \${struct.rows.map((row, rIdx) => \`
                      <tr style="border-bottom: 1px solid #f1f5f9; background: \${rIdx % 2 === 0 ? '#ffffff' : '#fafafa'};">
                        \${row.map((cell, cIdx) => \`
                          <td style="padding: 8px 10px; \${cIdx === 0 ? 'font-weight: 800; color: #3730a3;' : (cIdx === 2 ? 'font-weight: 700; color: #e11d48;' : '')}">
                            \${esc(cell)}
                          </td>
                        \`).join('')}
                        <td style="padding: 8px 10px; text-align: center;">
                          <button type="button" class="btn btn-secondary btn-sm" data-gflash-modal-say="\${esc(row[3] || row[0])}" style="padding: 2px 7px; font-size: 11px; border-radius: 6px;">
                            🔊
                          </button>
                        </td>
                      </tr>
                    \`).join('')}
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Traps & Common Mistakes -->
            \${struct.traps && struct.traps.length ? \`
              <div style="background: #fff1f2; border: 1.5px solid #fecdd3; border-radius: 12px; padding: 12px 14px; margin-bottom: 16px;">
                <div style="font-size: 11.5px; font-weight: 800; text-transform: uppercase; color: #be123c; margin-bottom: 6px; display: flex; align-items: center; gap: 5px;">
                  ⚠️ Traps & Common Mistakes to Avoid:
                </div>
                <div style="font-size: 12px; color: #9f1239; line-height: 1.45;">
                  \${struct.traps.map(t => \`<div style="margin-bottom: 4px;">• \${esc(t)}</div>\`).join('')}
                </div>
              </div>
            \` : ''}

            <!-- Grammar Rules & Nuances -->
            \${struct.rules && struct.rules.length ? \`
              <div style="background: #fdf4ff; border: 1.5px solid #f5d0fe; border-radius: 12px; padding: 12px 14px; font-size: 12px; color: #701a75; line-height: 1.45; margin-bottom: 16px;">
                <div style="font-size: 11.5px; font-weight: 800; text-transform: uppercase; margin-bottom: 4px; color: #86198f;">
                  💡 Key Notes & Nuances:
                </div>
                \${struct.rules.map(r => \`<div>• \${esc(r)}</div>\`).join('')}
              </div>
            \` : ''}

          </div>

          <!-- Modal Footer -->
          <div style="padding: 12px 20px; border-top: 1.5px solid #f1f5f9; background: #fafafa; border-radius: 0 0 20px 20px; display: flex; justify-content: flex-end; gap: 8px;">
            <button type="button" class="btn btn-primary" data-gflash-close-modal="true" style="font-size: 13px; border-radius: 12px; padding: 8px 18px;">
              ✓ Got It, Return to Card
            </button>
          </div>

        </div>
      </div>
    \`;
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

    return \`
      <!-- The Flashcard -->
      <div class="review-card hover-card" style="background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 18px rgba(0,0,0,0.04); margin-bottom: 14px;">

        <!-- Top Pedagogical Chain & Intentional Link Header -->
        <div style="background: linear-gradient(135deg, #f0f4ff 0%, #faf5ff 100%); padding: 10px 14px; border-bottom: 1.5px solid #e0e7ff; display: flex; flex-direction: column; gap: 4px;">
          <div style="display: flex; justify-content: space-between; align-items: center; gap: 8px; flex-wrap: wrap;">
            <span style="display: inline-flex; align-items: center; gap: 5px; font-size: 11px; font-weight: 800; text-transform: uppercase; color: #4338ca; letter-spacing: 0.5px; background: #e0e7ff; padding: 2px 8px; border-radius: 6px;">
              \${card.chainType === 'contrast' ? '⚖️ Contrast Pair' : (card.chainType === 'subject_shift' ? '🔄 Subject Shift' : (card.chainType === 'rule_trap' ? '⚠️ Agreement Trap' : '🪜 Step-by-Step'))} · Step \${card.chainStep || 1} of \${card.chainTotal || 1}
            </span>
            <span style="font-size: 11px; font-weight: 700; color: #6b7280;">
              \${esc(card.chainTitle ? card.chainTitle.split(':')[0] : card.topicLabel)}
            </span>
          </div>
          <div style="font-size: 13px; font-weight: 800; color: #1e1b4b; line-height: 1.35; margin-top: 2px;">
            \${esc(card.purpose || 'Intentional Practice')}
          </div>
          \${card.purposeNote ? \`
            <div style="font-size: 11.5px; color: #4b5563; line-height: 1.4; background: rgba(255,255,255,0.7); padding: 5px 9px; border-radius: 8px; border-left: 3px solid #6366f1; margin-top: 2px;">
              💡 <b>Connection:</b> \${esc(card.purposeNote)}
            </div>
          \` : ''}
        </div>

        <!-- Top: Flashcard Photo / Illustration -->
        <div class="review-scene gflash-scene" style="height: 190px; background: #faf8f5; border-bottom: 1px solid #f1f5f9; display: flex; align-items: center; justify-content: center; overflow: hidden; position: relative;">
          \${renderScene(card.scene)}
          <span class="corner">\${esc(card.topicLabel)}</span>
          \${mem ? \`<span class="mem-badge card-corner-mem \${mem.badgeClass}">\${mem.label}</span>\` : ''}
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
                    data-gflash-structure="\${esc(structureKey)}"
                    style="font-size: 11.5px; font-weight: 700; border-radius: 10px; padding: 4px 10px; display: inline-flex; align-items: center; gap: 5px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
              📊 Structure Table
            </button>
          </div>
          <div style="font-size: 18px; font-weight: 800; color: #1e1b4b; line-height: 1.35;">
            \${esc(card.english)}
          </div>
        </div>

        <!-- Sentence Assembly Strip -->
        <div style="padding: 12px 18px; background: #fbfbfe; min-height: 64px; border-bottom: 1.5px dashed #e2e8f0;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span style="font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase;">
              Your Assembled Sentence:
            </span>
            \${st.selected.length > 0 && st.state === 'assembling' ? \`
              <button type="button" data-gflash-action="clear-words" style="background: none; border: none; color: #ef4444; font-size: 11.5px; font-weight: 700; cursor: pointer; padding: 0;">
                ↺ Reset Words
              </button>
            \` : ''}
          </div>

          <div style="display: flex; flex-wrap: wrap; gap: 7px; min-height: 38px; align-items: center;">
            \${st.selected.length === 0 ? \`
              <span style="color: #94a3b8; font-size: 13.5px; font-style: italic;">
                Tap the words below in order to build the sentence...
              </span>
            \` : st.selected.map(t => \`
              <button type="button"
                      data-gflash-deselect="\${esc(t.id)}"
                      \${st.state === 'evaluated' ? 'disabled' : ''}
                      style="display: inline-flex; align-items: center; gap: 5px; background: #eef2ff; border: 1.5px solid #818cf8; color: #3730a3; padding: 7px 12px; border-radius: 12px; font-size: 15px; font-weight: 700; cursor: pointer; transition: transform 0.1s ease; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                <span>\${esc(t.text)}</span>
                \${st.state === 'assembling' ? \`<span style="font-size: 13px; opacity: 0.6;">✕</span>\` : ''}
              </button>
            \`).join('')}
          </div>
        </div>

        <!-- Word Bank (Tiles with tricky distractors) -->
        \${st.state === 'assembling' ? \`
          <div style="padding: 16px 18px 20px;">
            <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: #64748b; margin-bottom: 10px; letter-spacing: 0.5px;">
              Word Bank (Select one by one · Beware of deceptive traps!):
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px; justify-content: center;">
              \${st.available.map(t => \`
                <button type="button"
                        data-gflash-select="\${esc(t.id)}"
                        style="background: #ffffff; border: 1.5px solid #cbd5e1; color: #1e293b; padding: 9px 15px; border-radius: 12px; font-size: 15px; font-weight: 700; cursor: pointer; transition: all 0.12s ease; box-shadow: 0 2px 5px rgba(0,0,0,0.04); min-height: 42px;">
                  \${esc(t.text)}
                </button>
              \`).join('')}
            </div>

            <div style="margin-top: 18px; display: flex; gap: 8px;">
              <button type="button"
                      class="btn btn-primary btn-block btn-lg"
                      data-gflash-action="check-sentence"
                      \${st.selected.length === 0 ? 'disabled' : ''}
                      style="font-size: 15px; border-radius: 14px;">
                ✓ Check Sentence
              </button>
            </div>
          </div>
        \` : \`
          <!-- Revealed State / Feedback Card -->
          <div style="padding: 18px; animation: fadeIn 0.2s ease;">
            <div style="background: \${st.evalRes.isCorrect ? '#ecfdf5' : '#fff1f2'}; border: 1.5px solid \${st.evalRes.isCorrect ? '#6ee7b7' : '#fca5a5'}; border-radius: 14px; padding: 12px 14px; margin-bottom: 14px;">
              <div style="font-size: 14px; font-weight: 800; color: \${st.evalRes.isCorrect ? '#065f46' : '#991b1b'}; display: flex; align-items: center; gap: 6px;">
                \${esc(st.evalRes.message)}
              </div>
              \${!st.evalRes.isCorrect ? \`
                <div style="margin-top: 6px; font-size: 12.5px; color: #b91c1c; line-height: 1.4;">
                  \${st.evalRes.trapTips.map(tip => \`<div>• <b>\${esc(tip)}</b></div>\`).join('')}
                </div>
              \` : ''}
            </div>

            <div style="background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 14px; padding: 14px 16px; margin-bottom: 12px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; gap: 8px; flex-wrap: wrap;">
                <span style="font-size: 10.5px; font-weight: 800; text-transform: uppercase; color: #64748b; letter-spacing: 0.5px;">Correct Spoken French</span>
                <div style="display: flex; gap: 6px;">
                  <button type="button" class="btn btn-secondary btn-sm" data-gflash-say="\${esc(card.fullSentence)}">
                    🔊 Listen
                  </button>
                  <button type="button" class="btn btn-secondary btn-sm slow-btn" data-gflash-slow="\${esc(card.fullSentence)}">
                    🐢 0.6x Slow
                  </button>
                </div>
              </div>
              <div style="font-size: 19px; font-weight: 800; color: #1e1b4b; line-height: 1.3;">
                \${esc(card.fullSentence)}
              </div>
            </div>

            <!-- Grammar Rule Box with Button to view Structure Table & Next Preview -->
            <div style="background: #fdf4ff; border: 1px solid #f5d0fe; border-radius: 12px; padding: 12px 14px; margin-bottom: 14px; font-size: 12.5px; color: #701a75; line-height: 1.45;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 4px;">
                <div>💡 <b>Grammar Rule:</b> \${esc(card.rule)}</div>
                <button type="button" class="btn btn-white btn-sm" data-gflash-structure="\${esc(structureKey)}" style="font-size: 11px; font-weight: 800; padding: 3px 8px; border-radius: 8px; flex-shrink: 0;">
                  📊 Structure Table
                </button>
              </div>
              \${card.nextPreview ? \`
                <div style="background: rgba(255, 255, 255, 0.7); border: 1px solid #f0abfc; border-radius: 8px; padding: 6px 10px; margin-top: 8px; font-size: 11.5px; color: #86198f; display: flex; align-items: flex-start; gap: 6px;">
                  <span style="font-weight: 800;">➜</span>
                  <div><b>Next card purpose:</b> \${esc(card.nextPreview)}</div>
                </div>
              \` : ''}
            </div>

            <div class="small muted" style="text-align:center;margin-bottom:8px;font-size:11.5px;font-weight:700;">
              \${defaultSuggestAgain ? 'Schedule & continue (Again recommended):' : \`Rate to schedule\${isLast ? ' & finish' : ' & continue'}:\`}
            </div>
            <div class="rating-row" style="margin-top:0;">
              \${rateButtons.map(([label, sub, rate]) => {
                const isPrimary = defaultSuggestAgain ? rate === 'again' : rate === 'good';
                const extraAttr = rate === 'good' ? 'data-gflash-action="next-card"' : '';
                return \`<button type="button" data-gflash-rate="\${rate}" \${extraAttr} class="btn \${isPrimary ? 'btn-primary' : 'btn-white'}">\${label}<span>\${sub}</span></button>\`;
              }).join('')}
            </div>
          </div>
        \`}
      </div>
    \`;
  }

  function renderEmbeddedCard(card, options = {}) {
    if (!card) return '';
    if (embeddedCardId !== card.id) {
      prepareEmbeddedForId(card.id);
    }
    const st = getActiveState(true);
    return \`<div id="grammar-flashcards-root" data-gflash-embedded="true" data-gflash-index="\${options.index || 0}" data-gflash-total="\${options.total || 1}">
      \${renderFlashcardBody(card, st, { embedded: true, index: options.index || 0, total: options.total || 1 })}
      \${activeStructureModal ? renderStructureModal(activeStructureModal) : ''}
    </div>\`;
  }

  function page() {
    // Empty queue (e.g. 'due' filter when caught up)
    if (activeQueue.length === 0 && currentTopic === 'due') {
      return \`
        <div id="grammar-flashcards-root">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:12px;flex-wrap:wrap;">
            <span class="small muted" style="font-weight:700;">Grammar Flashcards</span>
            <select id="gflash-topic-select" class="select select-sm" aria-label="Filter grammar flashcards">
              \${TOPIC_CHIPS.map(t => \`<option value="\${esc(t.id)}" \${currentTopic === t.id ? 'selected' : ''}>\${esc(t.label)}</option>\`).join('')}
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
          \${activeStructureModal ? renderStructureModal(activeStructureModal) : ''}
        </div>
      \`;
    }

    // End-of-Session Screen with Targeted Remediation
    if (currentIndex >= activeQueue.length) {
      const totalStudied = activeQueue.length;
      const mistakesCount = sessionMistakes.length;
      const accuracyPct = Math.round(((totalStudied - mistakesCount) / Math.max(1, totalStudied)) * 100);

      return \`
        <div id="grammar-flashcards-root">
          <div class="review-card" style="padding: 24px 20px; text-align: center; border-radius: 20px;">
            <div style="font-size: 48px; margin-bottom: 10px;">
              \${mistakesCount === 0 ? '🏆' : '🎯'}
            </div>
            
            <h2 style="font-size: 22px; margin-bottom: 6px;">
              \${mistakesCount === 0 ? 'Flawless Session !' : 'Session Completed !'}
            </h2>

            <p class="small muted" style="margin-bottom: 16px;">
              You finished all \${totalStudied} grammar cards with \${accuracyPct}% first-try accuracy.
            </p>

            \${mistakesCount > 0 ? \`
              <!-- Targeted Remediation Banner -->
              <div style="background: #fff7ed; border: 1.5px solid #fed7aa; border-radius: 14px; padding: 14px 16px; margin-bottom: 18px; text-align: left;">
                <div style="font-size: 13.5px; font-weight: 800; color: #9a3412; margin-bottom: 6px;">
                  ⚠️ \${mistakesCount} \${mistakesCount === 1 ? 'rule needs' : 'rules need'} focused practice:
                </div>
                <div style="font-size: 12px; color: #c2410c; line-height: 1.45; margin-bottom: 12px;">
                  \${sessionMistakes.map(m => \`
                    <div style="margin-bottom: 4px;">• <b>\${esc(m.card.fullSentence)}</b> (\${esc(m.card.rule)})</div>
                  \`).join('')}
                </div>
                <button type="button"
                        class="btn btn-primary btn-block"
                        data-gflash-action="start-remediation"
                        style="font-size: 14px; border-radius: 12px; padding: 10px 16px;">
                  🎯 Start Targeted Practice on Missed Rules (\${mistakesCount})
                </button>
              </div>
            \` : \`
              <div style="background: #ecfdf5; border: 1.5px solid #6ee7b7; border-radius: 14px; padding: 14px; margin-bottom: 18px; color: #065f46; font-size: 13.5px; font-weight: 700;">
                ✨ Spectacular! You avoided every single deceptive distractor!
              </div>
            \`}

            <div style="display: flex; gap: 8px; justify-content: center; flex-wrap: wrap;">
              <button type="button" class="btn btn-secondary" data-gflash-action="restart-session">
                ↺ Practice Topic Again
              </button>
              <button type="button" class="btn btn-white" data-gflash-topic="all">
                🗂️ All Grammar Rules
              </button>
            </div>
          </div>
          \${activeStructureModal ? renderStructureModal(activeStructureModal) : ''}
        </div>
      \`;
    }

    const card = activeQueue[currentIndex];
    const st = getActiveState(false);
    const total = activeQueue.length;

    return \`
      <div id="grammar-flashcards-root">
        <!-- Topic & Queue Selector Bar -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; gap: 8px; flex-wrap: wrap;">
          <div style="font-size: 12px; font-weight: 800; color: #6366f1;">
            \${isRemediationActive ? '🎯 Targeted Practice' : '🗂️ Grammar Flashcard'} · \${currentIndex + 1} of \${total}
          </div>
          <select id="gflash-topic-select" class="select select-sm" aria-label="Filter grammar flashcards" style="font-size: 12px; font-weight: 700; padding: 4px 10px; border-radius: 10px;">
            \${TOPIC_CHIPS.map(t => \`<option value="\${esc(t.id)}" \${currentTopic === t.id ? 'selected' : ''}>\${esc(t.label)}</option>\`).join('')}
          </select>
        </div>

        \${renderFlashcardBody(card, st, { embedded: false, index: currentIndex, total })}

        <!-- Session Progress Mini Track -->
        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 12px; color: #94a3b8; padding: 0 6px;">
          <span>Session Accuracy: <b>\${Math.max(0, currentIndex - sessionMistakes.length)} / \${Math.max(1, currentIndex + (cardState === 'evaluated' ? 1 : 0))}</b></span>
          \${sessionMistakes.length > 0 ? \`<span style="color: #ef4444; font-weight: 700;">⚠️ \${sessionMistakes.length} mistakes saved for end practice</span>\` : '<span style="color: #10b981; font-weight: 700;">✓ 0 Mistakes</span>'}
        </div>

        \${activeStructureModal ? renderStructureModal(activeStructureModal) : ''}
      </div>
    \`;
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
`;

fs.writeFileSync(path.join(__dirname, '..', 'public', 'sentence-challenge.js'), jsContent, 'utf8');
console.log('Successfully wrote public/sentence-challenge.js with', CHALLENGES.length, 'challenges and', Object.keys(GRAMMAR_STRUCTURES).length, 'structures.');
