/* Rich hybrid retrieval scenes (Storybook WebP + Semantic Vector Diagrams).
   Shared by Review, Vocab, Grammar, Gender Reflex, and Library. */
(function () {
  'use strict';

  const ink = '#3b334d', skin = '#edbca2', skinAlt = '#d59c7e';
  const purple = '#7c6bc4', blue = '#3b82f6', green = '#10b981', yellow = '#f59e0b', red = '#ef4444', rose = '#e11d48', teal = '#0d9488';

  const path = (d, color, width = 8) =>
    `<path d="${d}" fill="none" stroke="${color}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"/>`;

  const webpScene = (file) =>
    `<rect width="520" height="340" rx="16" fill="#faf7f2"/>` +
    `<image href="./assets/scenes/${file}.webp" x="0" y="0" width="520" height="340" preserveAspectRatio="xMidYMid slice"/>`;

  const cardBg = (fill = '#faf7f2') => `<rect width="520" height="340" rx="16" fill="${fill}"/>`;

  const txt = (x, y, str, size = 48, fill = ink, weight = 800, anchor = 'middle') =>
    `<text x="${x}" y="${y}" text-anchor="${anchor}" dominant-baseline="central" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="${size}" font-weight="${weight}" fill="${fill}">${str}</text>`;

  const face = (x, y, closed = false, smile = true) =>
    `<ellipse cx="${x}" cy="${y}" rx="42" ry="48" fill="${skin}" stroke="${ink}" stroke-width="2.5"/>` +
    `<path d="M${x - 42} ${y - 8}q-5-58 45-51 41 3 39 48-22-8-32-26-17 22-52 29Z" fill="${ink}"/>` +
    (closed
      ? path(`M${x - 22} ${y + 7}q7 7 14 0m16 0q7 7 14 0`, ink, 3)
      : `<circle cx="${x - 15}" cy="${y + 6}" r="4" fill="${ink}"/><circle cx="${x + 15}" cy="${y + 6}" r="4" fill="${ink}"/>`) +
    (smile
      ? path(`M${x - 11} ${y + 26}q11 9 22 0`, '#b85d68', 3.2)
      : path(`M${x - 11} ${y + 29}q11-8 22 0`, '#b85d68', 3.2));

  const torso = (x, y, color = purple) =>
    `<path d="M${x - 54} ${y + 132}l7-72q8-26 47-26t47 26l7 72Z" fill="${color}" stroke="${ink}" stroke-width="2.5"/>`;

  // Directional speech bubble showing WHO is speaking
  function speechBubble(bx, by, bw, bh, tailToX, tailToY, innerSVG, borderColor = ink, bg = '#ffffff') {
    const cx = bx + bw / 2;
    const cy = by + bh / 2;
    const tx1 = Math.max(bx + 18, Math.min(bx + bw - 28, cx - 10));
    const tx2 = tx1 + 20;
    const baseY = tailToY > cy ? by + bh - 2 : by + 2;
    return `<g>` +
      `<polygon points="${tx1},${baseY} ${tx2},${baseY} ${tailToX},${tailToY}" fill="${bg}" stroke="${borderColor}" stroke-width="3.5" stroke-linejoin="round"/>` +
      `<rect x="${bx}" y="${by}" width="${bw}" height="${bh}" rx="18" fill="${bg}" stroke="${borderColor}" stroke-width="3.5"/>` +
      `<polygon points="${tx1 + 2},${baseY} ${tx2 - 2},${baseY} ${tailToX},${tailToY + (tailToY > cy ? -4 : 4)}" fill="${bg}"/>` +
      innerSVG +
      `</g>`;
  }

  // Mini person node for crystal-clear Family Tree diagrams
  function treeNode(x, y, role, active = false, scale = 1) {
    // role: 'm' (male), 'f' (female), 'me' (star reference), 'boy', 'girl'
    const isChild = role === 'boy' || role === 'girl';
    const r = isChild ? 24 : 29;
    const shirt = role === 'me' ? '#f59e0b' : (role === 'm' || role === 'boy') ? '#2563eb' : '#e11d48';
    const bgRing = active ? '#fef3c7' : '#ffffff';
    const ringStroke = active ? '#f59e0b' : '#cbd5e1';
    const ringW = active ? 5.5 : 2.5;
    const op = active || role === 'me' ? 1 : 0.42;

    const hair = (role === 'f' || role === 'girl')
      ? `<path d="M${x - 19} ${y - 4}q0-23 19-23t19 23v14h-7v-12q-12-8-24 0v12h-7Z" fill="${ink}"/>`
      : `<path d="M${x - 17} ${y - 6}q0-19 17-19t17 19q-10-6-34 0Z" fill="${ink}"/>`;

    const badge = role === 'me'
      ? `<circle cx="${x}" cy="${y + r + 2}" r="11" fill="#f59e0b" stroke="#fff" stroke-width="2"/>` + txt(x, y + r + 2, '★', 13, '#fff', 900)
      : (role === 'm' || role === 'boy')
      ? `<circle cx="${x + r - 4}" cy="${y - r + 6}" r="9" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/>` + txt(x + r - 4, y - r + 6, '♂', 11, '#1d4ed8', 900)
      : `<circle cx="${x + r - 4}" cy="${y - r + 6}" r="9" fill="#ffe4e6" stroke="#e11d48" stroke-width="1.8"/>` + txt(x + r - 4, y - r + 6, '♀', 11, '#be123c', 900);

    const arrow = active
      ? `<g><path d="M${x} ${y - r - 30}v16" stroke="#d97706" stroke-width="5" stroke-linecap="round"/><polygon points="${x},${y - r - 6} ${x - 9},${y - r - 18} ${x + 9},${y - r - 18}" fill="#d97706"/></g>`
      : '';

    return `<g opacity="${op}" transform="translate(${x},${y}) scale(${scale}) translate(${-x},${-y})">` +
      (active ? `<circle cx="${x}" cy="${y}" r="${r + 10}" fill="#fde68a" opacity="0.55"/>` : '') +
      `<circle cx="${x}" cy="${y}" r="${r}" fill="${bgRing}" stroke="${ringStroke}" stroke-width="${ringW}"/>` +
      `<path d="M${x - 19} ${y + r - 3}q4-15 19-15t19 15Z" fill="${shirt}"/>` +
      `<circle cx="${x}" cy="${y - 4}" r="14" fill="${skin}" stroke="${ink}" stroke-width="1.8"/>` +
      hair +
      `<circle cx="${x - 5}" cy="${y - 3}" r="1.8" fill="${ink}"/><circle cx="${x + 5}" cy="${y - 3}" r="1.8" fill="${ink}"/>` +
      path(`M${x - 4} ${y + 3}q4 3 8 0`, '#b85d68', 1.6) +
      badge +
      arrow +
      `</g>`;
  }

  function familyTree(target) {
    const bg = cardBg('#faf7f2');
    // Connector lines style
    const line = (d, hi = false) => path(d, hi ? '#d97706' : '#cbd5e1', hi ? 4.5 : 3.5);

    if (target === 'father' || target === 'mother' || target === 'parents') {
      const fAct = target === 'father' || target === 'parents';
      const mAct = target === 'mother' || target === 'parents';
      const groupHalo = target === 'parents'
        ? `<rect x="142" y="48" width="236" height="96" rx="48" fill="#fef3c7" stroke="#f59e0b" stroke-width="4" stroke-dasharray="8 5"/>`
        : '';
      return bg + groupHalo +
        line('M205 96h110M260 96v105') +
        treeNode(205, 96, 'm', fAct) +
        treeNode(315, 96, 'f', mAct) +
        treeNode(260, 238, 'me', false);
    }

    if (target === 'brother' || target === 'sister') {
      const isBro = target === 'brother';
      return bg +
        line('M215 78h90M260 78v62M185 140h150M185 140v55M335 140v55') +
        treeNode(215, 78, 'm', false, 0.85) +
        treeNode(305, 78, 'f', false, 0.85) +
        treeNode(185, 228, 'me', false) +
        treeNode(335, 228, isBro ? 'm' : 'f', true);
    }

    if (target === 'children') {
      return bg +
        `<rect x="142" y="182" width="236" height="102" rx="48" fill="#fef3c7" stroke="#f59e0b" stroke-width="4" stroke-dasharray="8 5"/>` +
        line('M215 82h90M260 82v62M200 144h120M200 144v55M320 144v55') +
        treeNode(215, 82, 'me', false, 0.9) +
        treeNode(305, 82, 'f', false, 0.9) +
        treeNode(200, 232, 'boy', true) +
        treeNode(320, 232, 'girl', true);
    }

    if (target === 'uncle') {
      // Uncle = Father's brother on top generation row!
      return bg +
        line('M135 42h135M135 42v32M270 42v32', true) +
        line('M270 102h95M318 102v92') +
        treeNode(135, 102, 'm', true) +
        treeNode(270, 102, 'm', false, 0.88) +
        treeNode(365, 102, 'f', false, 0.88) +
        treeNode(318, 234, 'me', false);
    }

    if (target === 'aunt') {
      // Aunt = Mother's sister on top generation row!
      return bg +
        line('M250 42h135M250 42v32M385 42v32', true) +
        line('M155 102h95M202 102v92') +
        treeNode(155, 102, 'm', false, 0.88) +
        treeNode(250, 102, 'f', false, 0.88) +
        treeNode(385, 102, 'f', true) +
        treeNode(202, 234, 'me', false);
    }
    return null;
  }

  const mattress = `<rect x="65" y="222" width="305" height="65" rx="15" fill="#c4b6df"/><path d="M68 286v23m297-23v23" stroke="#81739f" stroke-width="12"/><rect x="70" y="207" width="102" height="35" rx="13" fill="#fffdf8"/>`;
  const moon = `<path d="M421 46q-31 33 7 57-48 10-53-24-2-26 22-38 0 4 24 5" fill="#e7ba66"/>`;
  const morningSun = `<g stroke="#e4b052" stroke-width="5" stroke-linecap="round"><path d="M424 37v-12m0 81v-12m29-29h12m-82 0h12m9-23-9-9m49 49 9 9m-9-49 9-9m-49 49-9 9"/></g><circle cx="424" cy="65" r="23" fill="#f6ce7c"/>`;

  function bedroom(s) {
    if (s === 'rise') {
      return cardBg('#faf7f2') + morningSun + mattress +
        torso(292, 105, purple) + face(292, 107) +
        path('M272 242l50 18 11 44m-29-64 52 12 22 47', '#626587', 17) +
        path('M333 305h22m24-5h21', ink, 10) +
        path('M251 177l-18 52m101-52 22 39', skin, 13) +
        `<g><path d="M125 165V95" stroke="${green}" stroke-width="9" stroke-linecap="round"/><polygon points="125,72 106,102 144,102" fill="${green}"/></g>`;
    }
    if (s === 'bedtime') {
      return cardBg('#f4f1fb') + moon + mattress +
        torso(270, 107, purple) + face(270, 110) +
        path('M249 243l-18 28-45-3m104-25 39 18-4 41', '#626587', 17) +
        `<path d="M166 222l44-23 95 12-8 58H166Z" fill="#a797ce"/>` +
        path('M225 180l-27 24m119-23-17 30', skin, 13) +
        `<path d="M355 125q-35 20-55 55" fill="none" stroke="${purple}" stroke-width="6" stroke-dasharray="8 6"/><polygon points="295,188 296,166 315,177" fill="${purple}"/>`;
    }
    return cardBg('#eef0fa') + moon + mattress +
      `<path d="M176 226q70-33 174 9v40H166Z" fill="${purple}"/>` +
      face(135, 190, true) +
      `<circle cx="235" cy="115" r="8" fill="#c4b5fd"/><circle cx="262" cy="92" r="13" fill="#ddd6fe"/>` +
      `<ellipse cx="315" cy="68" rx="38" ry="25" fill="#ede9fe" stroke="#a78bfa" stroke-width="3"/>` +
      `<path d="M322 55q-14 14 4 24-18 4-20-10-1-11 9-16 0 2 7 2Z" fill="#f59e0b"/>`;
  }

  function grooming(s) {
    if (s === 'brush') {
      return `<rect x="66" y="32" width="388" height="276" rx="38" fill="#e3f0f2"/>` +
        torso(254, 152, '#88b5a5') + face(254, 137) +
        `<rect x="232" y="162" width="45" height="18" rx="6" fill="#fffdf8" stroke="#b77d80" stroke-width="2"/>` +
        path('M243 164v12m10-12v12m10-12v12', '#d8cfcd', 2) +
        path('M303 217q52 39 64-9l-8-30', skin, 18) +
        `<rect x="246" y="176" width="116" height="9" rx="4" fill="#2563eb"/><rect x="239" y="175" width="39" height="10" rx="4" fill="#2563eb"/>` +
        Array.from({ length: 9 }, (_, i) => path(`M${242 + i * 4} 174v-9`, '#fff', 3)).join('') +
        path('M352 178l-2 12', skin, 14) +
        `<circle cx="279" cy="162" r="8" fill="#fff"/><circle cx="288" cy="171" r="6" fill="#fff"/><circle cx="226" cy="168" r="6" fill="#fff"/>`;
    }
    return `<rect x="66" y="32" width="388" height="276" rx="38" fill="#ebe4f6"/><path d="M184 219q-21-167 73-171 91-6 87 176l-43 16h-82Z" fill="${ink}"/>` +
      torso(257, 153, '#b09acb') + face(257, 139) +
      path('M218 116q-33 43-20 112m110-110q30 47 12 110', ink, 22) +
      path('M310 240q62-27 78-105l-9-49', skin, 19) +
      `<g transform="rotate(-27 329 115)"><rect x="290" y="99" width="106" height="14" rx="6" fill="#ad87c5" stroke="#665286" stroke-width="3"/>${Array.from({ length: 12 }, (_, i) => path(`M${295 + i * 5} 114v21`, '#b79ad2', 4)).join('')}</g>` +
      path('M379 80l3 11', skin, 13);
  }

  function eating(s) {
    const before = s === 'eat-before', now = s === 'eat-now';
    // Add unmistakable 3-dot timeline bar at top right: [Past] -- [Now] -- [Future]
    const tl = `<g transform="translate(335,28)">` +
      `<rect x="0" y="0" width="155" height="42" rx="21" fill="#fff" stroke="#d8d2e8" stroke-width="2.5"/>` +
      path('M32 21h91', '#cbd5e1', 4) +
      `<circle cx="32" cy="21" r="${!before && !now ? 12 : 6}" fill="${!before && !now ? '#f59e0b' : '#cbd5e1'}"/>` +
      `<circle cx="77" cy="21" r="${now ? 12 : 6}" fill="${now ? '#10b981' : '#cbd5e1'}"/>` +
      `<circle cx="123" cy="21" r="${before ? 12 : 6}" fill="${before ? '#3b82f6' : '#cbd5e1'}"/>` +
      (!before && !now ? path('M27 21l4 4 7-8', '#fff', 2.5) : '') +
      (now ? `<polygon points="75,16 75,26 83,21" fill="#fff"/>` : '') +
      (before ? path('M119 21h8m-3-4l4 4-4 4', '#fff', 2.2) : '') +
      `</g>`;
    return torso(260, 107, '#86a7b4') + face(260, 93) +
      `<rect x="86" y="234" width="348" height="44" rx="12" fill="#dec2aa"/><path d="M115 277v32m290-32v32" stroke="#b89b87" stroke-width="10"/><ellipse cx="260" cy="237" rx="77" ry="26" fill="#fffdf8" stroke="#cbbcb5" stroke-width="4"/><ellipse cx="260" cy="237" rx="59" ry="17" fill="none" stroke="#e3dad2" stroke-width="2"/>` +
      (before || now
        ? `<ellipse cx="256" cy="236" rx="${before ? 39 : 22}" ry="13" fill="#e6b361"/><circle cx="${before ? 287 : 278}" cy="233" r="8" fill="#8db18c"/><circle cx="239" cy="233" r="6" fill="#ca7c68"/>`
        : `<circle cx="240" cy="239" r="2" fill="#ba936a"/><circle cx="273" cy="232" r="2.5" fill="#ba936a"/>`) +
      (now
        ? `<ellipse cx="263" cy="122" rx="9" ry="6" fill="#9f6871"/>` + path('M304 172q45 24 37-11l-44-17', skin, 14) + path('M299 145l-25-19m-7-6 7 7m-3-11 7 7m-3-11 7 7', '#737d8c', 4) + `<circle cx="273" cy="126" r="7" fill="#e6b361"/>`
        : before
        ? path('M211 176l-26 29m125-29 27 29', skin, 14) + path('M171 215v38m-5-38v13h10v-13m174 0v38', '#737d8c', 4)
        : path('M211 177q-27 17 13 29m83-29q27 17-13 29', skin, 14) + path('M231 225l49 21m-44-27 49 21', '#737d8c', 4)) +
      tl;
  }

  // 3D keyboard keycap helper for @ . - _
  function keycapScene(symbol, barHighlightIdx, subtitleGlyph) {
    // Top bar shows abstract email/handle blocks so user sees symbol in context without any French/English words
    return cardBg('#f8fafc') +
      // Context address bar at top
      `<rect x="95" y="42" width="330" height="46" rx="12" fill="#fff" stroke="#cbd5e1" stroke-width="3"/>` +
      `<rect x="115" y="56" width="82" height="18" rx="6" fill="#cbd5e1"/>` +
      `<rect x="206" y="48" width="44" height="34" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="2.5"/>` +
      txt(228, barHighlightIdx === 'low' ? 68 : 64, symbol, 24, '#d97706', 900) +
      `<rect x="259" y="56" width="90" height="18" rx="6" fill="#cbd5e1"/>` +
      `<circle cx="362" cy="70" r="3.5" fill="#94a3b8"/>` +
      `<rect x="373" y="56" width="34" height="18" rx="6" fill="#cbd5e1"/>` +
      // Giant tactile 3D keycap
      `<rect x="175" y="122" width="170" height="168" rx="28" fill="#cbd5e1"/>` +
      `<rect x="175" y="110" width="170" height="164" rx="28" fill="#ffffff" stroke="#475569" stroke-width="4.5"/>` +
      `<rect x="191" y="124" width="138" height="132" rx="20" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2.5"/>` +
      (subtitleGlyph || txt(260, 190, symbol, 78, '#1e293b', 900));
  }

  // Crisp Numeral Card helper
  function numberScene(numText, formulaText, accent, lightBg) {
    return cardBg(lightBg) +
      `<rect x="95" y="48" width="330" height="244" rx="28" fill="#ffffff" stroke="${accent}" stroke-width="5"/>` +
      `<rect x="95" y="48" width="330" height="32" rx="14" fill="${accent}"/>` +
      txt(260, 152, numText, numText.length > 3 ? 84 : 96, ink, 900) +
      (formulaText
        ? `<rect x="150" y="218" width="220" height="46" rx="23" fill="${lightBg}" stroke="${accent}" stroke-width="3"/>` +
          txt(260, 241, formulaText, 24, accent, 800)
        : `<g>${[-60, 0, 60].map(dx => `<circle cx="${260 + dx}" cy="242" r="8" fill="${accent}"/>`).join('')}</g>`);
  }

  function scene(name) {
    // 1. Bespoke Storybook WebP Scenes (12 rich illustrated assets)
    if (name === 'polite') return webpScene('polite');
    if (name === 'thanks') return webpScene('thanks');
    if (name === 'chat-friends') return webpScene('chat-friends');
    if (name === 'wake' || name === 'routine-wake') return webpScene('wake');
    if (name === 'chore-groceries') return webpScene('chore-groceries');
    if (name === 'chore-cooking') return webpScene('chore-cooking');
    if (name === 'chore-vacuum') return webpScene('chore-vacuum');
    if (name === 'blush-face') return webpScene('blush-face');
    if (name === 'reflect-think') return webpScene('reflect-think');
    if (name === 'feel-tired' || name === 'tired-head') return webpScene('feel-tired');
    if (name === 'market-scale') return webpScene('market-scale');
    if (name === 'market-bag' || name === 'market-all') return webpScene('market-all');

    // 2. Family Tree Diagrams (8 unmistakable relationship diagrams)
    if (name === 'family-parents') return familyTree('parents');
    if (name === 'family-father') return familyTree('father');
    if (name === 'family-mother') return familyTree('mother');
    if (name === 'family-brother') return familyTree('brother');
    if (name === 'family-sister') return familyTree('sister');
    if (name === 'family-children') return familyTree('children');
    if (name === 'family-uncle') return familyTree('uncle');
    if (name === 'family-aunt') return familyTree('aunt');

    // 3. Crisp Numbers & Keyboard Symbols
    if (name === 'num-70') return numberScene('70', '60 + 10', '#d97706', '#fffbeb');
    if (name === 'num-80') return numberScene('80', '4 × 20', '#2563eb', '#eff6ff');
    if (name === 'num-90') return numberScene('90', '4 × 20 + 10', '#7c3aed', '#f5f3ff');
    if (name === 'num-100') return numberScene('100', '', '#059669', '#ecfdf5');
    if (name === 'num-1000') return numberScene('1 000', '', '#e11d48', '#fff1f2');

    if (name === 'symbol-at') return keycapScene('@', 'mid');
    if (name === 'symbol-dot') {
      return keycapScene('.', 'low',
        `<circle cx="260" cy="212" r="18" fill="#7c3aed"/>` +
        `<circle cx="260" cy="212" r="28" fill="none" stroke="#ddd6fe" stroke-width="5"/>`);
    }
    if (name === 'symbol-dash') {
      return keycapScene('-', 'mid',
        path('M215 170h90', '#cbd5e1', 5) +
        `<rect x="222" y="182" width="76" height="18" rx="9" fill="#2563eb"/>` +
        path('M215 215h90', '#cbd5e1', 5));
    }
    if (name === 'symbol-underscore') {
      return keycapScene('_', 'low',
        `<text x="260" y="176" text-anchor="middle" font-size="38" font-weight="700" fill="#cbd5e1">a b</text>` +
        `<rect x="214" y="222" width="92" height="16" rx="8" fill="#e11d48"/>`);
    }

    // 4. Core Starter Routines & Grooming
    if (name === 'rise' || name === 'routine-rise') return bedroom('rise');
    if (name === 'bedtime') return bedroom('bedtime');
    if (name === 'sleep' || name === 'sleep-zzz') return bedroom('sleep');
    if (name === 'hair' || name === 'brush') return grooming(name);
    if (['eat-before', 'eat-now', 'eat-after'].includes(name)) return eating(name);

    if (name === 'walk' || name === 'no-walk') {
      return `<path d="M40 294q190-90 440 0" fill="none" stroke="#cbd9b5" stroke-width="24"/><path d="M85 142v115m350-115v115" stroke="#a1ac82" stroke-width="13"/><circle cx="85" cy="111" r="48" fill="#a9c9a1"/><circle cx="435" cy="111" r="48" fill="#bfd5aa"/>` +
        torso(260, 97, '#b09acb') + face(260, 82) +
        path('M239 232l-25 36-28 29m94-65 22 32 33 19', '#626587', 17) +
        path('M187 300l-20 5m170-20 20 5', ink, 10) +
        path('M212 158l-28 31-26-12m150-19 20 24 30-17', skin, 14) +
        (name === 'no-walk' ? `<circle cx="375" cy="72" r="38" fill="#fffdf8" stroke="${red}" stroke-width="9"/>` + path('M349 46l52 52', red, 9) : '');
    }

    if (name === 'dress') {
      return `<rect x="59" y="40" width="132" height="252" rx="14" fill="#e8dfd0"/><path d="M125 50v230" stroke="#c9bba6" stroke-width="3"/><circle cx="115" cy="171" r="4" fill="#a99b87"/>` +
        path('M270 238v61m38-61 9 61', '#626587', 20) + face(290, 92) +
        `<path d="M251 164l-24-49-31 18 38 90 22-14-8 40h86l-7-40 22 14 38-90-31-18-24 49-16-20h-31Z" fill="#9bbdad" stroke="#7a9f90" stroke-width="3"/>` +
        path('M210 126l-10-25m170 25 10-25', skin, 13);
    }

    if (name === 'dishes' || name === 'chore-dishes') {
      return cardBg('#f4f8fb') +
        `<rect x="69" y="237" width="380" height="61" rx="12" fill="#c7c2da"/><ellipse cx="203" cy="239" rx="105" ry="28" fill="#dfeaf0"/><ellipse cx="203" cy="242" rx="80" ry="18" fill="#7dd3fc"/>` +
        path('M101 218v-43q0-26 27-26h22v21', '#64748b', 9) + path('M149 182v34', '#38bdf8', 6) +
        torso(347, 105, '#aa9ac9') + face(347, 91) +
        `<circle cx="224" cy="208" r="44" fill="#fffdf8" stroke="#94a3b8" stroke-width="5"/><circle cx="224" cy="208" r="29" fill="none" stroke="#cbd5e1" stroke-width="3"/>` +
        path('M299 172l-39 43-9 9m142-51-46 54-100-32', skin, 14) +
        `<rect x="229" y="183" width="34" height="20" rx="6" fill="#facc15" stroke="#ca8a04" stroke-width="2" transform="rotate(15 245 192)"/>` +
        [172, 190, 210, 255].map((x, i) => `<circle cx="${x}" cy="${222 - i * 14}" r="${7 + (i % 2) * 3}" fill="#ffffff" stroke="#7dd3fc" stroke-width="2.5"/>`).join('');
    }

    if (name === 'chore-laundry') {
      return cardBg('#f0f7ff') +
        // Washing machine
        `<rect x="105" y="55" width="195" height="235" rx="20" fill="#ffffff" stroke="#475569" stroke-width="5"/>` +
        `<rect x="105" y="55" width="195" height="46" rx="16" fill="#e2e8f0" stroke="#475569" stroke-width="4"/>` +
        `<circle cx="140" cy="78" r="9" fill="#3b82f6"/><circle cx="168" cy="78" r="6" fill="#10b981"/><rect x="225" y="70" width="52" height="16" rx="5" fill="#cbd5e1"/>` +
        `<circle cx="202" cy="188" r="68" fill="#dbeafe" stroke="#334155" stroke-width="8"/>` +
        `<path d="M142 192q30-22 60 0t60 0a58 58 0 0 1-120 0Z" fill="#60a5fa"/>` +
        `<path d="M175 168l22-14 25 18-12 26h-28Z" fill="#f43f5e"/>` +
        // Laundry basket with clothes on right
        `<polygon points="325,185 445,185 430,285 340,285" fill="#f59e0b" stroke="#b45309" stroke-width="4.5"/>` +
        `<path d="M340 185q20-35 48-22 25-18 42 22Z" fill="#a855f7" stroke="${ink}" stroke-width="3"/>` +
        `<circle cx="320" cy="128" r="10" fill="#fff" stroke="#60a5fa" stroke-width="2.5"/><circle cx="342" cy="105" r="7" fill="#fff" stroke="#60a5fa" stroke-width="2.5"/>`;
    }

    if (name === 'plants') {
      return `<path d="M102 244h83l-13 61h-57Z" fill="#cd947b"/><path d="M144 249v-97" stroke="#679f82" stroke-width="7"/><ellipse cx="124" cy="177" rx="13" ry="32" transform="rotate(-43 124 177)" fill="#86b499"/><ellipse cx="165" cy="158" rx="13" ry="32" transform="rotate(43 165 158)" fill="#6da78e"/><ellipse cx="124" cy="218" rx="12" ry="26" transform="rotate(-55 124 218)" fill="#8abb9e"/>` +
        torso(350, 109, '#b294b0') + face(350, 93) + path('M330 244l-9 58m47-58 9 58', '#626587', 17) +
        `<g transform="rotate(-20 239 200)"><path d="M213 176h62v52h-62Z" fill="#88b7ce"/><path d="M214 192l-46-22-8 14 54 35Z" fill="#88b7ce"/><path d="M268 182q39-19 33 13-4 15-27 13" fill="none" stroke="#6f9caf" stroke-width="8"/></g>` +
        path('M303 173l-23 17m118-13-48 43-74-6', skin, 14) + path('M169 184l-15 34m4-39-14 29m3-24-11 21', '#38bdf8', 3.5);
    }

    if (name === 'coffee') {
      return `<rect x="64" y="89" width="144" height="101" rx="8" fill="#817fa7"/><rect x="74" y="100" width="124" height="79" rx="3" fill="#dddbee"/><path d="M54 196h164" stroke="#b8b1cb" stroke-width="11"/><rect x="50" y="210" width="182" height="15" rx="7" fill="#d0b49c"/><path d="M69 224v77m141-77v77" stroke="#b2957f" stroke-width="9"/>` +
        torso(353, 110, '#8caeb5') + face(353, 93) + path('M331 247l-8 53m48-53 11 53', '#626587', 17) +
        `<rect x="292" y="174" width="46" height="43" rx="7" fill="#fffdf8" stroke="#b8a9cd" stroke-width="3"/><ellipse cx="315" cy="176" rx="21" ry="5" fill="#a47959"/>` + path('M337 183q26-2 19 17-4 7-18 6', '#b8a9cd', 5) +
        path('M306 160q-7-12 0-23m14 23q-7-12 0-23', '#b9a9bc', 3) + path('M307 172l-9 50 20 4m81-53-23 45-38-19', skin, 14);
    }

    if (name === 'work') {
      return torso(297, 106, '#8cafb5') + face(297, 91) +
        path('M277 242l-40 32 2 29m79-61 28 35 4 25', '#626587', 17) +
        `<rect x="99" y="229" width="327" height="20" rx="8" fill="#d6b79e"/><path d="M120 249v57m284-57v57" stroke="#b99a80" stroke-width="10"/><path d="M143 153h108l12 71H155Z" fill="#8585ad" stroke="#676b91" stroke-width="4"/><path d="M155 224h157" stroke="#8e93b5" stroke-width="9" stroke-linecap="round"/><circle cx="203" cy="188" r="9" fill="#dddcee"/>` +
        path('M346 172l21 39-66 11m-50-52 6 32 22 17', skin, 14);
    }

    if (name === 'makebed') {
      return morningSun +
        `<rect x="56" y="209" width="313" height="74" rx="13" fill="#c9bce4"/><path d="M62 279v27m300-27v27" stroke="#8f7fa9" stroke-width="12"/><rect x="66" y="197" width="103" height="35" rx="13" fill="#fffdf8"/>` +
        path('M394 218l-10 76m42-76 12 76', '#626587', 17) + path('M383 298h-20m76 0h19', ink, 10) +
        `<path d="M372 143q24-13 53 5l13 83h-65Z" fill="#88b5a5"/><g transform="translate(151 43) scale(.63)">${face(396, 100)}</g>` +
        `<path d="M165 206q53 9 97-4l56-11 48 35-25 34H163Z" fill="#a08bc5" stroke="#8974af" stroke-width="3"/><path d="M165 206l32 12-24 11 35 13-45 18" fill="#c5b5df"/>` +
        path('M378 158l-29 20-31 13m107-28-14 41-45 22', skin, 13);
    }

    if (name === 'shirt') return `<path d="M214 73h92l58 47-35 54-27-22v137h-88V152l-27 22-35-54Z" fill="#89a9c7" stroke="#6586a7" stroke-width="4"/><path d="M234 74l26 29 26-29m-52 0-20 36 27 12 19-19 19 19 27-12-20-36" fill="#e2eaf1"/><path d="M260 105v181" stroke="#c6d5e3" stroke-width="5"/>${[139, 173, 207, 241, 273].map(y => `<circle cx="266" cy="${y}" r="3" fill="#4c6f91"/>`).join('')}<path d="M280 143h17v25h-17Z" fill="#9cb8d1"/>`;
    if (name === 'red-dress') return face(260, 87) + `<path d="M235 128h50l10 72 52 99H173l52-99Z" fill="#c94d5c"/><path d="M226 144l-27 67m95-67 27 67" stroke="${skin}" stroke-width="13" stroke-linecap="round"/><path d="M236 299v17m48-17v17" stroke="${skin}" stroke-width="12"/>`;
    if (name === 'morning') return `<rect x="18" y="52" width="225" height="236" rx="23" fill="#e9e2f7"/><rect x="277" y="52" width="225" height="236" rx="23" fill="#f7ead6"/><g transform="translate(14 100) scale(.47)">${bedroom('rise')}</g>` + path('M246 174h27m-8-8 8 8-8 8', purple, 4) + `<ellipse cx="389" cy="242" rx="96" ry="20" fill="#d5b79b"/><ellipse cx="361" cy="225" rx="47" ry="15" fill="#fffdf8"/><path d="M335 219q26-40 52 0Z" fill="#dda75c"/><rect x="418" y="180" width="42" height="48" rx="7" fill="#fffdf8"/><ellipse cx="439" cy="182" rx="20" ry="5" fill="#94705c"/>` + path('M460 189q24-2 18 18-3 8-17 7', '#c4ac96', 5);
    if (name === 'sport') return torso(260, 90, '#8aa9ba') + face(260, 80) + `<path d="M210 215h100l-4 35h-40l-6-22-6 22h-40Z" fill="#666b98"/>` + path('M230 255l-9 35m70-35 9 35', skin, 16) + `<path d="M209 283h22l4 16-8 11h-43q-9-12 4-17Z" fill="#8c7cba"/><path d="M290 283h22l22 11q13 11 1 16h-43l-8-11Z" fill="#8c7cba"/>` + path('M210 153l-21 53m121-53 21 53', skin, 13);

    // 5. Greetings, Farewell & Classroom Communication
    if (name === 'greeting-day') {
      return cardBg('#fffbeb') + morningSun +
        torso(175, 138, purple) + face(175, 122) +
        torso(345, 138, blue) + face(345, 122) +
        path('M218 182l32-45m48 45l-32-45', skin, 13) +
        speechBubble(212, 34, 96, 52, 200, 100, `<circle cx="260" cy="60" r="14" fill="#fbbf24"/>` + path('M260 39v-5m0 52v-5m21-21h5m-52 0h5', '#f59e0b', 3), '#f59e0b');
    }

    if (name === 'greeting-night') {
      // Bonsoir ! -> Two people greeting each other under a starry night sky & crescent moon
      return cardBg('#1e1b4b') + moon +
        `<circle cx="95" cy="62" r="3.5" fill="#fde68a"/><circle cx="165" cy="42" r="2.5" fill="#fde68a"/><circle cx="310" cy="52" r="3" fill="#fde68a"/>` +
        torso(175, 148, '#6366f1') + face(175, 132) +
        torso(345, 148, '#14b8a6') + face(345, 132) +
        path('M218 190l30-42m48 42l-30-42', skin, 13) +
        speechBubble(212, 42, 96, 52, 200, 108, `<path d="M268 52q-16 16 4 28-22 4-25-12-1-13 11-19 0 2 10 3Z" fill="#f59e0b"/>`, '#fbbf24');
    }

    if (name === 'wave-hand') {
      return cardBg('#faf7f2') + torso(255, 125, purple) + face(255, 108) +
        path('M205 182l-30 50m125-52l48-62 14-22', skin, 15) +
        path('M340 62q18-12 28 2m-38 18q22-16 38 0', '#f59e0b', 5);
    }

    if (name === 'handshake') {
      // Comment allez-vous ? -> Two adults in formal business suits/blazers shaking hands + '?' bubble
      return cardBg('#f1f5f9') +
        // Left businessperson in dark navy suit + tie
        torso(160, 140, '#1e293b') +
        `<polygon points="160,145 148,185 160,225 172,185" fill="#ffffff"/><polygon points="160,152 154,195 160,215 166,195" fill="#dc2626"/>` +
        face(160, 122) +
        // Right businessperson in formal blazer + pearl collar
        torso(360, 140, '#334155') +
        `<polygon points="360,145 344,185 360,210 376,185" fill="#f8fafc"/>` +
        face(360, 122) +
        // Formal handshake in center
        path('M202 188l52 14m54-14l-52 14', skin, 15) +
        `<ellipse cx="260" cy="204" rx="22" ry="15" fill="${skin}" stroke="${ink}" stroke-width="3"/>` +
        speechBubble(212, 34, 96, 58, 195, 102, txt(260, 63, '?', 36, '#1e293b', 900), '#334155');
    }

    if (name === 'wave-bye') {
      // Au revoir ! -> Walking away through open doorway waving back
      return cardBg('#faf7f2') +
        `<rect x="330" y="55" width="120" height="235" rx="8" fill="#e2e8f0" stroke="#64748b" stroke-width="6"/>` +
        `<polygon points="330,55 415,78 415,272 330,290" fill="#94a3b8"/>` +
        torso(215, 128, purple) + face(215, 112) +
        path('M260 175l48-52', skin, 14) +
        path('M312 102q14-10 22 4', yellow, 4.5) +
        path('M115 245h75m-22-16l22 16-22 16', blue, 8);
    }

    if (name === 'calendar-tomorrow') {
      // À demain ! -> Today -> arrow jumping to NEXT calendar day!
      return cardBg('#faf7f2') +
        `<rect x="115" y="65" width="290" height="215" rx="22" fill="#fff" stroke="#64748b" stroke-width="5"/>` +
        `<path d="M115 87a22 22 0 0 1 22-22h246a22 22 0 0 1 22 22v40H115Z" fill="${red}"/>` +
        `<circle cx="175" cy="65" r="10" fill="#475569"/><circle cx="345" cy="65" r="10" fill="#475569"/>` +
        // Two consecutive day cells: [Today dot] ---> [Tomorrow star!]
        `<rect x="150" y="152" width="88" height="92" rx="14" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="3"/>` +
        `<circle cx="194" cy="198" r="12" fill="#94a3b8"/>` +
        `<rect x="282" y="152" width="88" height="92" rx="14" fill="#fef3c7" stroke="#f59e0b" stroke-width="4.5"/>` +
        txt(326, 198, '★', 40, '#d97706', 900) +
        `<path d="M210 148q52-42 104 0" fill="none" stroke="${green}" stroke-width="7" stroke-linecap="round"/>` +
        `<polygon points="322,154 298,148 312,131" fill="${green}"/>`;
    }

    if (name === 'sun-day') {
      // Bonne journée ! -> Radiant sun arc across a full sunny day path + warm wave
      return cardBg('#fffbeb') +
        `<path d="M85 255q175-210 350 0" fill="none" stroke="#fcd34d" stroke-width="8" stroke-dasharray="12 10"/>` +
        `<circle cx="260" cy="135" r="54" fill="#fbbf24" stroke="#f59e0b" stroke-width="4"/>` +
        Array.from({ length: 8 }, (_, i) => {
          const a = (i * Math.PI) / 4;
          return `<line x1="${260 + Math.cos(a) * 68}" y1="${135 + Math.sin(a) * 68}" x2="${260 + Math.cos(a) * 90}" y2="${135 + Math.sin(a) * 90}" stroke="#f59e0b" stroke-width="7" stroke-linecap="round"/>`;
        }).join('') +
        `<path d="M70 265q190-35 380 0v45H70Z" fill="#bbf7d0"/>` +
        txt(260, 136, '☺', 44, '#92400e', 700);
    }

    if (name === 'moon-evening') {
      // Bonne soirée ! -> Cozy glowing home window at dusk + parting wave & stars
      return cardBg('#1e1b4b') + moon +
        `<circle cx="110" cy="70" r="4" fill="#fde68a"/><circle cx="205" cy="48" r="3" fill="#fde68a"/><circle cx="315" cy="68" r="3.5" fill="#fde68a"/>` +
        `<polygon points="260,105 140,190 380,190" fill="#4338ca" stroke="#c7d2fe" stroke-width="3"/>` +
        `<rect x="165" y="190" width="190" height="105" rx="6" fill="#312e81" stroke="#c7d2fe" stroke-width="3"/>` +
        `<rect x="225" y="210" width="70" height="58" rx="8" fill="#fde047"/>` +
        path('M260 210v58M225 239h70', '#312e81', 4) +
        `<path d="M75 295h370" stroke="#6366f1" stroke-width="6" stroke-linecap="round"/>`;
    }

    if (name === 'listen-repeat') {
      // Répétez, s'il vous plaît -> Ear + sound waves + bold replay loop arrow
      return cardBg('#f5f3ff') +
        `<path d="M175 118q48-48 80 12 24 44-16 74-18 14-18 38" fill="none" stroke="${purple}" stroke-width="15" stroke-linecap="round"/>` +
        `<circle cx="220" cy="256" r="12" fill="${purple}"/>` +
        path('M120 135q-22 35 0 70m-22-90q-35 55 0 110', '#60a5fa', 7) +
        `<g transform="translate(355,170)"><circle cx="0" cy="0" r="56" fill="#ede9fe" stroke="${purple}" stroke-width="5"/><path d="M-28 -10a30 30 0 1 1 8 30" fill="none" stroke="${purple}" stroke-width="8" stroke-linecap="round"/><polygon points="-34,-26 -10,-16 -28,2" fill="${purple}"/></g>`;
    }

    if (name === 'spell-letters') {
      // Comment ça s'écrit ? -> Wooden letter tiles [A] - [B] - [?] + pencil
      return cardBg('#faf7f2') +
        `<g transform="translate(75,110)">` +
        `<rect x="0" y="0" width="104" height="110" rx="18" fill="#fef3c7" stroke="#d97706" stroke-width="4.5"/>` +
        txt(52, 55, 'A', 54, '#92400e', 900) +
        `<rect x="132" y="0" width="104" height="110" rx="18" fill="#dbeafe" stroke="#2563eb" stroke-width="4.5"/>` +
        txt(184, 55, 'B', 54, '#1e40af', 900) +
        `<rect x="264" y="0" width="104" height="110" rx="18" fill="#f3e8ff" stroke="#7c3aed" stroke-width="4.5" stroke-dasharray="10 6"/>` +
        txt(316, 55, '?', 56, '#6d28d9', 900) +
        `</g>`;
    }

    // 6. Likes, Dislikes & Tastes (1 heart vs 3 sparkling hearts vs broken/crossed heart)
    if (name === 'heart-like') {
      // aimer -> 1 clean warm heart + gentle smile
      return cardBg('#fff1f2') +
        `<circle cx="260" cy="170" r="105" fill="#ffe4e6" stroke="#fda4af" stroke-width="4"/>` +
        `<path d="M260 122q38-52 74-4 38 52-74 108-112-56-74-108 36-48 74 4Z" fill="${rose}" stroke="${ink}" stroke-width="3.5"/>`;
    }

    if (name === 'adore-star') {
      // adorer -> 3 overflowing hearts + golden sparkles (clearly stronger than aimer!)
      return cardBg('#fffbeb') +
        `<circle cx="260" cy="170" r="112" fill="#fef3c7" stroke="#fbbf24" stroke-width="4"/>` +
        `<path d="M165 155q22-30 44-2 22 30-44 62-66-32-44-62 22-28 44 2Z" fill="#fb7185" stroke="${ink}" stroke-width="2.5"/>` +
        `<path d="M355 155q22-30 44-2 22 30-44 62-66-32-44-62 22-28 44 2Z" fill="#fb7185" stroke="${ink}" stroke-width="2.5"/>` +
        `<path d="M260 105q42-58 82-4 42 58-82 118-124-60-82-118 40-54 82 4Z" fill="${rose}" stroke="${ink}" stroke-width="3.5"/>` +
        txt(260, 56, '✨ ★ ✨', 28, '#d97706', 900);
    }

    if (name === 'dislike') {
      // détester -> Broken heart + bold red prohibition slash + storm cloud
      return cardBg('#fef2f2') +
        `<circle cx="260" cy="170" r="104" fill="#fee2e2" stroke="${red}" stroke-width="5"/>` +
        `<path d="M260 122q38-50 72-4 36 50-72 104-108-54-72-104 34-46 72 4Z" fill="#94a3b8" stroke="#475569" stroke-width="3"/>` +
        path('M260 118l-14 28 22 20-16 32 8 24', '#fef2f2', 6) +
        `<circle cx="260" cy="170" r="88" fill="none" stroke="${red}" stroke-width="13"/>` +
        path('M198 108l124 124', red, 13);
    }

    if (name === 'music-notes') return cardBg('#f5f3ff') + `<circle cx="260" cy="165" r="110" fill="#ede9fe"/>` + `<ellipse cx="205" cy="210" rx="28" ry="20" transform="rotate(-20 205 210)" fill="${purple}"/><ellipse cx="305" cy="180" rx="28" ry="20" transform="rotate(-20 305 180)" fill="${purple}"/>` + path('M228 200v-95l100-25v95m-100-65l100-25', purple, 9);
    if (name === 'book-reading') return cardBg('#faf7f2') + `<rect x="75" y="240" width="370" height="50" rx="10" fill="#ddcfbe"/><path d="M120 210q70-20 140 0 70-20 140 0v-95q-70-20-140 0-70-20-140 0Z" fill="#fffef9" stroke="#8d7ea7" stroke-width="5"/><path d="M260 115v95" stroke="#8d7ea7" stroke-width="6"/>` + path('M150 145h65m-65 25h65m85-25h65m-65 25h65', '#c4b5fd', 5);
    if (name === 'sport-running') return cardBg('#eff6ff') + `<path d="M80 280h360" stroke="#cbd5e1" stroke-width="8" stroke-linecap="round"/>` + torso(240, 110, blue) + face(255, 95) + path('M220 220l-45 40-30-20m105-20l40 30 40 10', '#1e3a8a', 16) + path('M210 160l-35-30-25 15m95-20l35 25 30-15', skin, 13);
    if (name === 'hiking-trail') return cardBg('#f0fdf4') + `<polygon points="70,270 200,95 310,270" fill="#86efac" stroke="#166534" stroke-width="3"/><polygon points="230,270 335,115 445,270" fill="#4ade80" stroke="#166534" stroke-width="3"/><polygon points="200,95 172,140 228,140" fill="#fff"/>` + path('M140 270q80-50 130-15t110-35', '#d97706', 12);
    if (name === 'dog') return cardBg('#fffbeb') + `<ellipse cx="265" cy="210" rx="75" ry="52" fill="#d97706" stroke="${ink}" stroke-width="3"/><ellipse cx="200" cy="138" rx="42" ry="36" fill="#d97706" stroke="${ink}" stroke-width="3"/><polygon points="172,98 198,136 164,142" fill="#92400e"/><circle cx="192" cy="132" r="5" fill="${ink}"/><ellipse cx="168" cy="146" rx="9" ry="7" fill="${ink}"/>` + path('M225 255v36m50-36v36m58-68q32-20 42-52', '#d97706', 14);
    if (name === 'cat') return cardBg('#f5f3ff') + `<ellipse cx="265" cy="212" rx="66" ry="48" fill="#94a3b8" stroke="${ink}" stroke-width="3"/><circle cx="212" cy="142" r="38" fill="#94a3b8" stroke="${ink}" stroke-width="3"/><polygon points="182,112 200,82 208,112" fill="#64748b"/><polygon points="218,112 228,82 244,112" fill="#64748b"/><circle cx="200" cy="140" r="4.5" fill="${ink}"/><circle cx="224" cy="140" r="4.5" fill="${ink}"/><polygon points="212,149 206,156 218,156" fill="#f43f5e"/>` + path('M166 146h22m-22 10h22m48-10h22m-22 10h22', ink, 2.5) + path('M325 220q38-25 14-66', '#94a3b8', 13);
    if (name === 'cup-coffee') return cardBg('#faf7f2') + `<ellipse cx="260" cy="255" rx="120" ry="25" fill="#e7e0d6"/><path d="M190 150h140v65q0 38-70 38t-70-38Z" fill="#fff" stroke="#78350f" stroke-width="5"/><ellipse cx="260" cy="152" rx="68" ry="14" fill="#451a03"/><path d="M330 165q32 0 26 32t-26 20" fill="none" stroke="#78350f" stroke-width="7"/>` + path('M235 122q-8-20 0-35m25 35q-8-20 0-35m25 35q-8-20 0-35', '#a16207', 4);
    if (name === 'cup-tea') return cardBg('#f0fdf4') + `<ellipse cx="260" cy="255" rx="120" ry="25" fill="#d1fae5"/><path d="M190 150h140v65q0 38-70 38t-70-38Z" fill="#ecfdf5" stroke="#047857" stroke-width="5"/><path d="M330 165q32 0 26 32t-26 20" fill="none" stroke="#047857" stroke-width="7"/>` + path('M285 150v-26q0-12 18-12h14', '#78350f', 3) + `<rect x="305" y="112" width="22" height="26" rx="4" fill="#10b981" stroke="#047857" stroke-width="2.5"/>`;
    if (name === 'chess-board') return cardBg('#faf7f2') + `<rect x="120" y="80" width="280" height="190" rx="12" fill="#d5bfa7" stroke="#78350f" stroke-width="8"/><g transform="translate(140,95)">${Array.from({ length: 4 }, (_, r) => Array.from({ length: 6 }, (_, c) => `<rect x="${c * 40}" y="${r * 40}" width="40" height="40" fill="${(r + c) % 2 === 0 ? '#fffbeb' : '#78350f'}"/>`).join('')).join('')}</g><path d="M225 225v-52h15l10-18h20l10 18h15v52Z" fill="#1e293b" stroke="#fff" stroke-width="2.5"/>`;
    if (name === 'guitar') return cardBg('#fffbeb') + `<ellipse cx="225" cy="212" rx="66" ry="50" fill="#d97706" stroke="#78350f" stroke-width="4"/><ellipse cx="280" cy="170" rx="46" ry="38" fill="#d97706" stroke="#78350f" stroke-width="4"/><circle cx="258" cy="186" r="20" fill="#451a03"/>` + path('M298 152l98-78', '#78350f', 15) + path('M218 212l176-136', '#fef3c7', 3);

    // 7. Contact & Habiter vs Vivre
    if (name === 'phone-call') {
      return cardBg('#eff6ff') +
        `<rect x="180" y="48" width="160" height="244" rx="26" fill="#1e293b" stroke="#0f172a" stroke-width="5"/>` +
        `<rect x="194" y="72" width="132" height="186" rx="12" fill="#ffffff"/>` +
        txt(260, 108, '06 · · · ·', 22, '#2563eb', 800) +
        `<g transform="translate(212,134)">${Array.from({ length: 9 }, (_, i) => `<circle cx="${(i % 3) * 48}" cy="${Math.floor(i / 3) * 32}" r="11" fill="#dbeafe"/>`).join('')}</g>` +
        `<circle cx="260" cy="236" r="14" fill="#10b981"/>`;
    }

    if (name === 'house-home') {
      // habiter -> Cozy home + location address pin (where you reside!)
      return cardBg('#faf7f2') +
        `<polygon points="245,75 115,168 375,168" fill="#ef4444" stroke="${ink}" stroke-width="4"/>` +
        `<rect x="145" y="168" width="200" height="118" fill="#fffbeb" stroke="${ink}" stroke-width="4"/>` +
        `<rect x="220" y="204" width="50" height="82" rx="6" fill="#92400e" stroke="${ink}" stroke-width="3"/>` +
        `<rect x="164" y="188" width="40" height="36" rx="4" fill="#bae6fd" stroke="${ink}" stroke-width="3"/>` +
        `<rect x="286" y="188" width="40" height="36" rx="4" fill="#bae6fd" stroke="${ink}" stroke-width="3"/>` +
        // Prominent location pin beside house
        `<path d="M415 212q-34-44-34-68a34 34 0 1 1 68 0q0 24-34 68Z" fill="#2563eb" stroke="${ink}" stroke-width="3.5"/>` +
        `<circle cx="415" cy="144" r="13" fill="#fff"/>`;
    }

    if (name === 'city-living') {
      // vivre -> Vital life / living in the world: Earth globe + glowing red heart + ECG life pulse!
      return cardBg('#ecfdf5') +
        `<circle cx="260" cy="170" r="106" fill="#dbeafe" stroke="#2563eb" stroke-width="4"/>` +
        `<path d="M185 115q35 10 45 40t-20 65q-35-25-25-105Zm120-15q45 25 35 80t-45 60q-20-45 10-140Z" fill="#4ade80"/>` +
        `<path d="M260 126q32-44 64-4 32 44-64 92-96-48-64-92 32-40 64 4Z" fill="${rose}" stroke="#fff" stroke-width="4"/>` +
        path('M175 168h42l14-26 18 52 16-36 12 10h68', '#ffffff', 5.5);
    }

    // 8. Seven Question Words (Every one has a bold '?' badge + unmistakable target)
    if (name === 'question-who') {
      // qui -> Mystery person silhouette with giant '?' inside
      return cardBg('#f5f3ff') +
        `<circle cx="260" cy="170" r="112" fill="#ede9fe" stroke="#8b5cf6" stroke-width="4"/>` +
        `<path d="M185 272q12-68 75-68t75 68Z" fill="#4c1d95"/>` +
        `<circle cx="260" cy="138" r="46" fill="#4c1d95"/>` +
        txt(260, 142, '?', 58, '#fde047', 900);
    }

    if (name === 'question-what') {
      // qu'est-ce que / que -> Open mystery box with '?' popping out
      return cardBg('#eff6ff') +
        `<polygon points="155,165 260,125 365,165 260,205" fill="#93c5fd" stroke="#1e40af" stroke-width="4"/>` +
        `<polygon points="155,165 260,205 260,290 155,250" fill="#3b82f6" stroke="#1e40af" stroke-width="4"/>` +
        `<polygon points="365,165 260,205 260,290 365,250" fill="#2563eb" stroke="#1e40af" stroke-width="4"/>` +
        `<polygon points="155,165 115,125 220,88 260,125" fill="#dbeafe" stroke="#1e40af" stroke-width="3.5"/>` +
        `<polygon points="365,165 405,125 300,88 260,125" fill="#dbeafe" stroke="#1e40af" stroke-width="3.5"/>` +
        `<circle cx="260" cy="96" r="44" fill="#fef3c7" stroke="#f59e0b" stroke-width="4.5"/>` +
        txt(260, 96, '?', 58, '#d97706', 900);
    }

    if (name === 'map-pin') {
      // où -> Folded street map + giant red pin + '?'
      return cardBg('#faf7f2') +
        `<polygon points="95,255 195,220 315,255 425,220 425,95 315,130 195,95 95,130" fill="#fef3c7" stroke="#b45309" stroke-width="4"/>` +
        path('M195 95v125M315 130v125', '#d97706', 2.5) +
        path('M115 195q95-45 190 10t105-30', '#38bdf8', 9) +
        `<path d="M260 205q-42-54-42-84a42 42 0 1 1 84 0q0 30-42 84Z" fill="${red}" stroke="${ink}" stroke-width="4"/>` +
        `<circle cx="260" cy="121" r="24" fill="#fff"/>` +
        txt(260, 121, '?', 34, red, 900);
    }

    if (name === 'calendar-when') {
      // quand -> Calendar + clock face + '?' badge
      return cardBg('#eff6ff') +
        `<rect x="105" y="72" width="195" height="200" rx="18" fill="#fff" stroke="#334155" stroke-width="4.5"/>` +
        `<rect x="105" y="72" width="195" height="52" rx="14" fill="#2563eb"/>` +
        `<g fill="#cbd5e1">${Array.from({ length: 6 }, (_, i) => `<rect x="${132 + (i % 3) * 52}" y="${148 + Math.floor(i / 3) * 44}" width="34" height="26" rx="5"/>`).join('')}</g>` +
        `<circle cx="348" cy="195" r="68" fill="#fffbeb" stroke="#d97706" stroke-width="6"/>` +
        path('M348 195v-38m0 38l28 18', '#b45309', 6) +
        `<circle cx="348" cy="95" r="34" fill="#7c3aed" stroke="#fff" stroke-width="3"/>` +
        txt(348, 95, '?', 42, '#fff', 900);
    }

    if (name === 'question-how') {
      // comment -> Step 1 -> Step 2 -> Step 3 process + gears + '?'
      return cardBg('#f0fdf4') +
        `<rect x="85" y="165" width="90" height="82" rx="16" fill="#dbeafe" stroke="#2563eb" stroke-width="4"/>` + txt(130, 206, '1', 38, '#1e40af', 900) +
        path('M185 206h22', '#64748b', 6) +
        `<rect x="215" y="165" width="90" height="82" rx="16" fill="#fef3c7" stroke="#d97706" stroke-width="4" stroke-dasharray="8 5"/>` + txt(260, 206, '?', 42, '#b45309', 900) +
        path('M315 206h22', '#64748b', 6) +
        `<rect x="345" y="165" width="90" height="82" rx="16" fill="#dcfce7" stroke="#16a34a" stroke-width="4"/>` + txt(390, 206, '3', 38, '#166534', 900) +
        `<circle cx="260" cy="92" r="38" fill="#0d9488"/>` + txt(260, 92, '⚙ ?', 30, '#fff', 900);
    }

    if (name === 'price-tag') {
      // combien -> Price tag + stack of coins + '€ ?'
      return cardBg('#ecfdf5') +
        `<polygon points="125,85 275,85 355,165 255,265 125,185" fill="#ffffff" stroke="#059669" stroke-width="5"/>` +
        `<circle cx="165" cy="125" r="13" fill="#059669"/>` +
        txt(235, 172, '€ ?', 48, '#047857', 900) +
        `<g transform="translate(385,190)">` +
        [45, 25, 5].map(y => `<ellipse cx="0" cy="${y}" rx="42" ry="16" fill="#fbbf24" stroke="#b45309" stroke-width="3.5"/>`).join('') +
        `</g>`;
    }

    if (name === 'question-why') {
      // pourquoi -> Cause -> domino effect + magnifying glass with '?'
      return cardBg('#faf5ff') +
        torso(185, 148, '#7c3aed') + face(185, 132) +
        speechBubble(255, 48, 175, 110, 225, 118,
          txt(342, 103, '🤔 ?', 46, '#6d28d9', 900), '#7c3aed', '#ffffff');
    }

    // 9. City Places & Everyday Idioms
    if (name === 'library-shelves') return cardBg('#faf7f2') + `<rect x="100" y="55" width="320" height="235" rx="12" fill="#d6bfa6" stroke="#78350f" stroke-width="7"/><path d="M100 133h320M100 211h320" stroke="#78350f" stroke-width="9"/>` + Array.from({ length: 8 }, (_, i) => `<rect x="${122 + i * 35}" y="65" width="24" height="66" rx="3" fill="${[red, blue, green, purple][i % 4]}"/>`).join('') + Array.from({ length: 8 }, (_, i) => `<rect x="${122 + i * 35}" y="143" width="24" height="66" rx="3" fill="${[yellow, purple, blue, green][i % 4]}"/>`).join('');
    if (name === 'neighborhood-street') return cardBg('#faf7f2') + `<rect x="75" y="115" width="140" height="150" fill="#e9d5ff" stroke="${ink}" stroke-width="3"/><polygon points="65,115 145,62 225,115" fill="${purple}" stroke="${ink}" stroke-width="3"/><rect x="245" y="128" width="195" height="137" fill="#fef3c7" stroke="${ink}" stroke-width="3"/><polygon points="238,128 447,128 430,158 255,158" fill="${red}" stroke="${ink}" stroke-width="3"/>` + path('M45 270h430', '#94a3b8', 10) + `<circle cx="385" cy="205" r="36" fill="${green}" stroke="#166534" stroke-width="3"/><rect x="379" y="238" width="12" height="28" fill="#78350f"/>`;
    if (name === 'city-hall') {
      // la mairie -> Neoclassical French Town Hall + French Tricolore flag on roof!
      return cardBg('#eff6ff') +
        `<rect x="110" y="130" width="300" height="145" fill="#ffffff" stroke="#475569" stroke-width="4.5"/>` +
        `<polygon points="260,68 92,130 428,130" fill="#cbd5e1" stroke="#475569" stroke-width="4.5"/>` +
        Array.from({ length: 4 }, (_, i) => `<rect x="${148 + i * 66}" y="132" width="22" height="141" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/>`).join('') +
        `<circle cx="260" cy="106" r="15" fill="#fef3c7" stroke="#475569" stroke-width="3"/>` +
        // French flag on roof!
        path('M260 68V24', '#334155', 4) +
        `<rect x="262" y="24" width="14" height="26" fill="#2563eb"/><rect x="276" y="24" width="14" height="26" fill="#ffffff"/><rect x="290" y="24" width="14" height="26" fill="#ef4444"/><rect x="262" y="24" width="42" height="26" fill="none" stroke="#334155" stroke-width="1.8"/>`;
    }

    if (name === 'speech-bubbles') {
      // Quoi de beau ? -> Two friends meeting, left friend asking [✨ 🌟 ?]
      return cardBg('#faf7f2') +
        torso(165, 148, purple) + face(165, 132) +
        torso(365, 148, teal) + face(365, 132) +
        speechBubble(195, 36, 150, 68, 198, 114, txt(270, 70, '✨ ? ✨', 32, '#7c3aed', 900), '#7c3aed');
    }

    if (name === 'casual-shrug') {
      // Rien de spécial -> Classic unmistakable shoulder shrug with both palms upturned!
      return cardBg('#faf7f2') +
        torso(260, 142, '#6366f1') + face(260, 122) +
        // Raised shoulders + bent elbows + open upturned hands
        path('M206 168l-44 26-26-34', skin, 16) +
        path('M314 168l44 26 26-34', skin, 16) +
        `<ellipse cx="130" cy="154" rx="16" ry="10" transform="rotate(-20 130 154)" fill="${skin}" stroke="${ink}" stroke-width="2.5"/>` +
        `<ellipse cx="390" cy="154" rx="16" ry="10" transform="rotate(20 390 154)" fill="${skin}" stroke="${ink}" stroke-width="2.5"/>` +
        speechBubble(315, 36, 115, 52, 295, 98, path('M348 62h50', '#64748b', 6), '#94a3b8');
    }

    if (name === 'daily-train') {
      // le train-train quotidien -> Commuter train inside a repeat cycle loop arrow ↻
      return cardBg('#f1f5f9') +
        `<path d="M105 155a155 120 0 1 1 25 85" fill="none" stroke="#6366f1" stroke-width="9" stroke-dasharray="14 9" stroke-linecap="round"/>` +
        `<polygon points="100,145 128,168 92,178" fill="#6366f1"/>` +
        `<rect x="135" y="128" width="250" height="96" rx="22" fill="#2563eb" stroke="${ink}" stroke-width="4"/>` +
        `<path d="M135 190h250" stroke="#fbbf24" stroke-width="10"/>` +
        Array.from({ length: 4 }, (_, i) => `<rect x="${155 + i * 56}" y="145" width="40" height="34" rx="7" fill="#e0f2fe"/>`).join('') +
        path('M115 232h290', '#475569', 7);
    }

    // 10. Seven Professions (Clear tools & uniforms!)
    if (name === 'prof-teacher') {
      return cardBg('#faf7f2') +
        `<rect x="68" y="55" width="235" height="155" rx="10" fill="#14532d" stroke="#92400e" stroke-width="9"/>` +
        txt(185, 115, 'A B C', 30, '#ffffff', 800) +
        path('M115 155h140', '#fde047', 4) +
        torso(380, 128, purple) + face(380, 112) +
        path('M332 175l-72-42', skin, 13) + path('M260 133l-45-22', '#fde047', 5);
    }
    if (name === 'prof-doctor') {
      return cardBg('#eff6ff') +
        torso(260, 128, '#ffffff') +
        `<polygon points="235,132 260,195 285,132" fill="#3b82f6"/>` +
        face(260, 110) +
        path('M228 148q0 48 32 48t32-48m-32 48v32', '#1e293b', 6) +
        `<circle cx="260" cy="232" r="10" fill="#94a3b8" stroke="#1e293b" stroke-width="3"/>` +
        `<g transform="translate(390,85)"><circle cx="0" cy="0" r="34" fill="#fee2e2" stroke="${red}" stroke-width="3.5"/>${path('M-14 0h28M0 -14v28', red, 9)}</g>`;
    }
    if (name === 'prof-lawyer') {
      // Lawyer in black robe with white rabat tabs + golden scales of justice!
      return cardBg('#faf7f2') +
        torso(195, 132, '#1e293b') +
        `<rect x="182" y="142" width="11" height="42" rx="2" fill="#fff"/><rect x="197" y="142" width="11" height="42" rx="2" fill="#fff"/>` +
        face(195, 114) +
        // Golden Scales of Justice on right
        path('M365 78v175M315 253h100M305 112h120', '#b45309', 7) +
        path('M305 112l-20 55h40ZM425 112l-20 55h40Z', '#d97706', 3.5) +
        `<path d="M283 167a22 14 0 0 0 44 0ZM403 167a22 14 0 0 0 44 0Z" fill="#fbbf24" stroke="#b45309" stroke-width="3"/>`;
    }
    if (name === 'prof-nurse') {
      return cardBg('#f0fdfa') +
        torso(285, 130, '#0ea5e9') + face(285, 112) +
        // Nurse cap + medical clipboard + syringe/heart cross
        `<rect x="120" y="115" width="96" height="130" rx="10" fill="#fff" stroke="#0284c7" stroke-width="4.5"/>` +
        `<rect x="148" y="106" width="40" height="16" rx="5" fill="#64748b"/>` +
        path('M168 145v30m-15-15h30', red, 8) +
        path('M142 198h52m-52 20h38', '#94a3b8', 5);
    }
    if (name === 'prof-hairdresser') {
      return cardBg('#fdf4ff') +
        torso(295, 132, '#a855f7') + face(295, 114) +
        // Giant unmistakable salon scissors + comb on left
        `<g transform="translate(145,165) rotate(-25)">` +
        `<circle cx="-22" cy="48" r="18" fill="none" stroke="#334155" stroke-width="7"/>` +
        `<circle cx="22" cy="48" r="18" fill="none" stroke="#334155" stroke-width="7"/>` +
        path('M-14 32L22 -58M14 32L-22 -58', '#64748b', 8) +
        `</g>` +
        `<rect x="195" y="95" width="18" height="120" rx="5" fill="#ec4899"/>` +
        Array.from({ length: 9 }, (_, i) => path(`M213 ${105 + i * 12}h16`, '#ec4899', 3.5)).join('');
    }
    if (name === 'prof-architect') {
      return cardBg('#eff6ff') +
        `<rect x="75" y="85" width="215" height="165" rx="8" fill="#1d4ed8" stroke="#1e3a8a" stroke-width="5"/>` +
        `<polygon points="182,115 125,160 240,160" fill="none" stroke="#93c5fd" stroke-width="3.5"/>` +
        `<rect x="140" y="160" width="85" height="62" fill="none" stroke="#93c5fd" stroke-width="3.5"/>` +
        torso(380, 132, '#f59e0b') + face(380, 114) +
        `<path d="M336 86q44-42 88 0Z" fill="#facc15" stroke="${ink}" stroke-width="3"/>`;
    }
    if (name === 'prof-pilot') {
      return cardBg('#eff6ff') +
        // Airplane silhouette in sky + pilot in captain cap & gold wings
        `<g transform="translate(385,92) rotate(-18)"><path d="M-55 0h110M-10 -42l22 42-22 42M-45 -18l12 18-12 18" stroke="#2563eb" stroke-width="11" stroke-linecap="round"/></g>` +
        torso(215, 138, '#0f172a') +
        path('M240 175h28', '#fbbf24', 5) +
        face(215, 118) +
        `<path d="M168 88h94l-10-28h-74Z" fill="#0f172a" stroke="#fbbf24" stroke-width="3"/>` +
        `<circle cx="215" cy="74" r="7" fill="#fbbf24"/>`;
    }

    // 11. A1.2 Verbs, Transit, Directions & Clothing
    if (name === 'watch-screen' || name === 'mexican-film') return `<rect x="110" y="70" width="300" height="180" rx="16" fill="#1e293b" stroke="#475569" stroke-width="8"/><rect x="130" y="90" width="260" height="140" rx="6" fill="#38bdf8" opacity=".85"/><polygon points="230,130 230,190 290,160" fill="#fff"/>` + path('M220 250l-20 40h120l-20-40', '#475569', 10);
    if (name === 'finish-flag') return cardBg('#faf7f2') + `<path d="M160 55v230" stroke="#475569" stroke-width="12" stroke-linecap="round"/><rect x="172" y="60" width="168" height="112" fill="#fff" stroke="#1e293b" stroke-width="4"/><g transform="translate(172,60)">${Array.from({ length: 4 }, (_, r) => Array.from({ length: 6 }, (_, c) => `<rect x="${c * 28}" y="${r * 28}" width="28" height="28" fill="${(r + c) % 2 === 0 ? '#1e293b' : '#fff'}"/>`).join('')).join('')}</g><circle cx="160" cy="50" r="14" fill="${yellow}"/>`;
    if (name === 'choose-path') return cardBg('#faf7f2') + `<path d="M260 290v-90m-80-60l80 60 80-60" fill="none" stroke="#bfa68a" stroke-width="26" stroke-linecap="round" stroke-linejoin="round"/><path d="M255 95v175" stroke="#7c6045" stroke-width="14" stroke-linecap="round"/><polygon points="260,105 135,105 115,125 135,145 260,145" fill="${blue}"/><polygon points="260,160 385,160 405,180 385,200 260,200" fill="${green}"/>` + txt(260, 62, '?', 38, purple, 900);
    if (name === 'exit-door') return cardBg('#faf7f2') + `<rect x="180" y="55" width="160" height="225" rx="8" fill="#dbeafe" stroke="#475569" stroke-width="8"/><polygon points="180,55 295,82 295,262 180,280" fill="#2563eb"/><circle cx="275" cy="175" r="7" fill="${yellow}"/>` + path('M115 195h105m-28-24l28 24-28 24', green, 11);
    if (name === 'suitcase-depart') return cardBg('#faf7f2') + `<rect x="155" y="110" width="195" height="150" rx="20" fill="${blue}" stroke="#1e40af" stroke-width="6"/><rect x="155" y="152" width="195" height="18" fill="#1e3a8a"/>` + path('M215 110v-35q0-10 10-10h55q10 0 10 10v35', '#475569', 10) + `<circle cx="190" cy="268" r="14" fill="#1e293b"/><circle cx="315" cy="268" r="14" fill="#1e293b"/>` + path('M375 175h75m-24-22l24 22-24 22', yellow, 10);
    if (name === 'serve-tray') return cardBg('#faf7f2') + `<ellipse cx="260" cy="238" rx="142" ry="22" fill="#cbd5e1" stroke="#64748b" stroke-width="4"/><path d="M150 232q0-112 110-112t110 112Z" fill="#e2e8f0" stroke="#475569" stroke-width="6"/><circle cx="260" cy="108" r="16" fill="${yellow}" stroke="#b45309" stroke-width="3"/>` + path('M215 86q10-24 0-42m45 42q10-24 0-42m45 42q10-24 0-42', '#94a3b8', 4.5);
    if (name === 'feel-good') return cardBg('#fefce8') + `<circle cx="260" cy="170" r="112" fill="#fef08a"/>` + torso(260, 138, green) + face(260, 120) + path('M205 175l-45-48m155 48l45-48', skin, 15) + txt(260, 52, '✨☀✨', 28, '#d97706', 900);

    if (name === 'near-distance') return cardBg('#f0fdf4') + `<rect x="135" y="140" width="84" height="92" rx="8" fill="#93c5fd" stroke="${ink}" stroke-width="3"/><polygon points="177,92 125,140 229,140" fill="${blue}" stroke="${ink}" stroke-width="3"/><rect x="265" y="140" width="84" height="92" rx="8" fill="#86efac" stroke="${ink}" stroke-width="3"/><polygon points="307,92 255,140 359,140" fill="${green}" stroke="${ink}" stroke-width="3"/>` + path('M225 190h34', '#059669', 9);
    if (name === 'far-distance') return cardBg('#fef2f2') + `<rect x="58" y="148" width="66" height="76" rx="8" fill="#93c5fd" stroke="${ink}" stroke-width="3"/><polygon points="91,106 48,148 134,148" fill="${blue}" stroke="${ink}" stroke-width="3"/><rect x="396" y="148" width="66" height="76" rx="8" fill="#fca5a5" stroke="${ink}" stroke-width="3"/><polygon points="429,106 386,148 472,148" fill="${red}" stroke="${ink}" stroke-width="3"/>` + `<path d="M138 192h244" stroke="${red}" stroke-width="6" stroke-dasharray="12 8"/>` + path('M152 178l-16 14 16 14m216-28l16 14-16 14', red, 5);

    if (name === 'transit-bus') return cardBg('#eff6ff') + `<rect x="95" y="95" width="330" height="138" rx="24" fill="${blue}" stroke="#1e3a8a" stroke-width="6"/><rect x="118" y="118" width="62" height="52" rx="8" fill="#e0f2fe"/><rect x="195" y="118" width="62" height="52" rx="8" fill="#e0f2fe"/><rect x="272" y="118" width="62" height="52" rx="8" fill="#e0f2fe"/><rect x="348" y="118" width="56" height="90" rx="8" fill="#e0f2fe"/><circle cx="170" cy="238" r="28" fill="#1e293b"/><circle cx="170" cy="238" r="12" fill="#cbd5e1"/><circle cx="340" cy="238" r="28" fill="#1e293b"/><circle cx="340" cy="238" r="12" fill="#cbd5e1"/>`;
    if (name === 'transit-metro') return cardBg('#f1f5f9') + `<path d="M115 275v-140q0-85 145-85t145 85v140Z" fill="#334155"/><rect x="160" y="110" width="200" height="150" rx="18" fill="#f8fafc" stroke="#0ea5e9" stroke-width="7"/><rect x="180" y="130" width="160" height="55" rx="8" fill="#0284c7"/><circle cx="205" cy="225" r="12" fill="${yellow}"/><circle cx="315" cy="225" r="12" fill="${yellow}"/>` + txt(260, 74, 'M', 28, '#fbbf24', 900);
    if (name === 'transit-tram') return cardBg('#ecfdf5') + `<rect x="115" y="102" width="290" height="132" rx="18" fill="#10b981" stroke="#047857" stroke-width="6"/><path d="M260 102l26-48h-52Z" fill="none" stroke="#334155" stroke-width="7" stroke-linejoin="round"/><path d="M85 52h350" stroke="#64748b" stroke-width="5"/>` + Array.from({ length: 4 }, (_, i) => `<rect x="${140 + i * 62}" y="122" width="46" height="50" rx="6" fill="#ecfdf5"/>`).join('') + `<circle cx="185" cy="240" r="22" fill="#1f2937"/><circle cx="335" cy="240" r="22" fill="#1f2937"/>`;
    if (name === 'transit-bike') return cardBg('#eff6ff') + `<circle cx="160" cy="215" r="52" fill="none" stroke="#2563eb" stroke-width="11"/><circle cx="360" cy="215" r="52" fill="none" stroke="#2563eb" stroke-width="11"/>` + path('M160 215l80-72h80l40 72m-120-72l60 72H160m140-102v30', '#1e40af', 9) + path('M280 112h42m-172 30h42', '#334155', 10);
    if (name === 'transit-walk') return cardBg('#faf7f2') + torso(260, 108, green) + face(260, 92) + path('M240 238l-34 55m68-55l34 55', '#334155', 18) + path('M192 294h32m64 0h34', '#2563eb', 12) + path('M75 304h370', '#cbd5e1', 7);

    if (name === 'board-bus') return cardBg('#eff6ff') + `<rect x="235" y="55" width="205" height="220" rx="18" fill="${blue}" stroke="#1e3a8a" stroke-width="5"/><rect x="262" y="95" width="84" height="162" rx="6" fill="#f8fafc"/>` + torso(145, 142, green) + face(145, 126) + path('M195 185h78m-24-20l24 20-24 20', '#16a34a', 10);
    if (name === 'alight-bus') return cardBg('#f5f3ff') + `<rect x="80" y="55" width="205" height="220" rx="18" fill="${blue}" stroke="#1e3a8a" stroke-width="5"/><rect x="174" y="95" width="84" height="162" rx="6" fill="#f8fafc"/>` + torso(375, 142, purple) + face(375, 126) + path('M242 185h78m-24-20l24 20-24 20', '#e11d48', 10);

    if (name === 'turn-left') return cardBg('#eff6ff') + `<circle cx="260" cy="170" r="108" fill="#dbeafe" stroke="#2563eb" stroke-width="5"/>` + path('M310 252v-72q0-50-50-50h-72', '#1d4ed8', 20) + `<polygon points="155,130 205,96 205,164" fill="#1d4ed8"/>`;
    if (name === 'turn-right') return cardBg('#eff6ff') + `<circle cx="260" cy="170" r="108" fill="#dbeafe" stroke="#2563eb" stroke-width="5"/>` + path('M210 252v-72q0-50 50-50h72', '#1d4ed8', 20) + `<polygon points="365,130 315,96 315,164" fill="#1d4ed8"/>`;
    if (name === 'straight-ahead') return cardBg('#f0fdf4') + `<circle cx="260" cy="170" r="108" fill="#dcfce7" stroke="#16a34a" stroke-width="5"/>` + path('M260 262V108', '#15803d', 20) + `<polygon points="260,72 222,122 298,122" fill="#15803d"/>`;
    if (name === 'cross-street') return cardBg('#f1f5f9') + `<rect x="95" y="58" width="330" height="224" rx="16" fill="#334155"/>` + Array.from({ length: 5 }, (_, i) => `<rect x="${135 + i * 54}" y="78" width="32" height="184" rx="4" fill="#fff"/>`).join('') + path('M115 170h290m-28-22l28 22-28 22', '#fbbf24', 10);
    if (name === 'end-street') return cardBg('#faf7f2') + `<polygon points="145,285 235,105 285,105 375,285" fill="#cbd5e1" stroke="#64748b" stroke-width="4"/>` + `<path d="M260 280V125" stroke="#fff" stroke-width="6" stroke-dasharray="14 10"/>` + `<path d="M260 112q-34-44-34-68a34 34 0 1 1 68 0q0 24-34 68Z" fill="${red}" stroke="${ink}" stroke-width="3.5"/><circle cx="260" cy="44" r="12" fill="#fff"/>`;

    // Clothing items
    if (name === 'cloth-shirt') return cardBg('#eff6ff') + `<path d="M198 82l62 22 62-22 46 50-28 38-28-16v126H208V154l-28 16-28-38Z" fill="#60a5fa" stroke="#1d4ed8" stroke-width="5"/><polygon points="260,104 218,82 260,138" fill="#fff" stroke="#1d4ed8" stroke-width="3"/><polygon points="260,104 302,82 260,138" fill="#fff" stroke="#1d4ed8" stroke-width="3"/>` + [165, 200, 235].map(y => `<circle cx="260" cy="${y}" r="4.5" fill="#1e3a8a"/>`).join('');
    if (name === 'cloth-pants') return cardBg('#eff6ff') + `<path d="M190 72h140l18 205-54 5-34-118-34 118-54-5Z" fill="#1e3a8a" stroke="#0f172a" stroke-width="5"/><rect x="190" y="72" width="140" height="22" fill="#3b82f6"/><circle cx="260" cy="83" r="5" fill="#facc15"/>`;
    if (name === 'cloth-dress') return cardBg('#fff1f2') + `<path d="M225 72h70l18 54 50 150H157l50-150Z" fill="${rose}" stroke="#881337" stroke-width="5"/><path d="M225 72q35 26 70 0" fill="#ffe4e6"/><rect x="212" y="142" width="96" height="14" rx="5" fill="#fecdd3"/>`;
    if (name === 'cloth-skirt') return cardBg('#faf5ff') + `<polygon points="212,92 308,92 352,265 168,265" fill="#a855f7" stroke="#581c87" stroke-width="5"/><rect x="212" y="92" width="96" height="20" fill="#6b21a8"/>` + path('M226 112l-18 152m52-152v152m34-152l18 152', '#e9d5ff', 3.5);
    if (name === 'cloth-sweater') return cardBg('#f0fdfa') + `<path d="M188 85h144l52 52-30 42-30-20v116H196V159l-30 20-30-42Z" fill="#0d9488" stroke="#134e4a" stroke-width="6"/><path d="M225 85q35 22 70 0" fill="#ccfbf1"/>` + path('M196 252h128', '#5eead4', 7);
    if (name === 'cloth-coat') return cardBg('#fffbeb') + `<path d="M182 72h156l42 62-30 42-22-16v124H192V160l-22 16-30-42Z" fill="#b45309" stroke="#451a03" stroke-width="6"/><polygon points="260,72 216,138 260,192 304,138" fill="#fde68a" stroke="#451a03" stroke-width="3"/><circle cx="244" cy="205" r="5.5" fill="#451a03"/><circle cx="276" cy="205" r="5.5" fill="#451a03"/><circle cx="244" cy="242" r="5.5" fill="#451a03"/><circle cx="276" cy="242" r="5.5" fill="#451a03"/>`;
    if (name === 'cloth-sneakers') return cardBg('#fff1f2') + `<g transform="translate(85,115)"><path d="M35 75q45-48 102-12l62 15v42H25Z" fill="#ef4444" stroke="#7f1d1d" stroke-width="4.5"/><rect x="18" y="118" width="190" height="22" rx="9" fill="#ffffff" stroke="#64748b" stroke-width="4"/>${path('M105 68l22 16m-8-22l22 16', '#fff', 4.5)}</g><g transform="translate(225,85) scale(0.88)"><path d="M35 75q45-48 102-12l62 15v42H25Z" fill="#ef4444" stroke="#7f1d1d" stroke-width="4.5"/><rect x="18" y="118" width="190" height="22" rx="9" fill="#ffffff" stroke="#64748b" stroke-width="4"/></g>`;
    if (name === 'cloth-winter') return cardBg('#faf5ff') + `<path d="M205 112q55-55 110 0v36H205Z" fill="${purple}" stroke="${ink}" stroke-width="4"/><circle cx="260" cy="72" r="16" fill="${yellow}" stroke="${ink}" stroke-width="3"/><rect x="195" y="146" width="130" height="26" rx="8" fill="#a78bfa" stroke="${ink}" stroke-width="3.5"/><path d="M150 198h220q22 28-10 40H160q-32-12-10-40Z" fill="${rose}" stroke="${ink}" stroke-width="4"/><rect x="275" y="220" width="48" height="68" rx="6" fill="${rose}" stroke="${ink}" stroke-width="4"/>`;
    if (name === 'cloth-mittens') return cardBg('#fff7ed') + `<g transform="translate(135,82)"><path d="M25 115V55a42 42 0 0 1 84 0v22l18-16a14 14 0 0 1 20 20l-38 34Z" fill="#f97316" stroke="#7c2d12" stroke-width="4.5"/><rect x="20" y="115" width="92" height="28" rx="8" fill="#fed7aa" stroke="#7c2d12" stroke-width="4"/></g><g transform="translate(385,82) scale(-1,1)"><path d="M25 115V55a42 42 0 0 1 84 0v22l18-16a14 14 0 0 1 20 20l-38 34Z" fill="#f97316" stroke="#7c2d12" stroke-width="4.5"/><rect x="20" y="115" width="92" height="28" rx="8" fill="#fed7aa" stroke="#7c2d12" stroke-width="4"/></g>`;

    // 12. Three Continuous/Recent/Future Aspect Cards & Struggle/Invitations
    if (name === 'action-just-done') {
      // venir de + infinitif (Passé récent: just crossed finish line 1 moment ago!)
      return cardBg('#fffbeb') +
        `<rect x="95" y="42" width="330" height="44" rx="22" fill="#fff" stroke="#f59e0b" stroke-width="3"/>` +
        `<circle cx="155" cy="64" r="14" fill="#f59e0b"/>` + path('M150 64l4 4 8-8', '#fff', 3) +
        path('M175 64h170', '#cbd5e1', 5) + `<circle cx="260" cy="64" r="8" fill="#cbd5e1"/><circle cx="365" cy="64" r="8" fill="#cbd5e1"/>` +
        path('M215 115v165', '#94a3b8', 6) + path('M185 185l30 12m32-12l-26 12', red, 6) +
        torso(305, 138, '#f59e0b') + face(305, 122) +
        path('M240 140q-35-25-65 0', '#d97706', 5) + `<polygon points="168,145 178,125 192,142" fill="#d97706"/>`;
    }
    if (name === 'action-now') {
      // être en train de + infinitif (Présent continu: happening LIVE right now!)
      return cardBg('#eff6ff') +
        `<rect x="95" y="42" width="330" height="44" rx="22" fill="#fff" stroke="#2563eb" stroke-width="3"/>` +
        path('M155 64h210', '#cbd5e1', 5) + `<circle cx="155" cy="64" r="8" fill="#cbd5e1"/>` +
        `<circle cx="260" cy="64" r="15" fill="#2563eb"/><polygon points="256,57 256,71 268,64" fill="#fff"/>` +
        `<circle cx="365" cy="64" r="8" fill="#cbd5e1"/>` +
        `<circle cx="260" cy="198" r="84" fill="none" stroke="#3b82f6" stroke-width="8" stroke-dasharray="20 12"/>` +
        torso(260, 152, '#2563eb') + face(260, 134);
    }
    if (name === 'action-future') {
      // aller + infinitif (Futur proche: about to launch forward!)
      return cardBg('#ecfdf5') +
        `<rect x="95" y="42" width="330" height="44" rx="22" fill="#fff" stroke="#10b981" stroke-width="3"/>` +
        path('M155 64h210', '#cbd5e1', 5) + `<circle cx="155" cy="64" r="8" fill="#cbd5e1"/><circle cx="260" cy="64" r="8" fill="#cbd5e1"/>` +
        `<circle cx="365" cy="64" r="15" fill="#10b981"/>` + path('M359 64h12m-5-5l5 5-5 5', '#fff', 2.8) +
        torso(185, 145, '#10b981') + face(185, 128) +
        path('M260 195h135', '#059669', 16) + `<polygon points="415,195 372,165 372,225" fill="#059669"/>`;
    }

    if (name === 'struggle-task') {
      // avoir du mal à + infinitif -> Person sweating & straining to push heavy boulder uphill!
      return cardBg('#fef2f2') +
        `<polygon points="75,290 445,290 445,115" fill="#cbd5e1" stroke="#64748b" stroke-width="4"/>` +
        `<circle cx="305" cy="162" r="56" fill="#64748b" stroke="#334155" stroke-width="5"/>` +
        torso(180, 172, red) + face(190, 154, false, false) +
        path('M215 198l44-22m-42 42l46-18', skin, 13) +
        `<path d="M150 112q-6 14 0 20 6-6 0-20ZM134 128q-6 14 0 20 6-6 0-20Z" fill="#38bdf8"/>`;
    }

    if (name === 'invite-ask') {
      // Ça te dit de... ? -> Friend holding out 2 tickets + speech bubble [🎟️ ☕ ?]
      return cardBg('#faf7f2') +
        torso(170, 148, blue) + face(170, 130) +
        torso(365, 148, '#94a3b8') + face(365, 130) +
        path('M215 186l52-18', skin, 13) +
        `<rect x="262" y="148" width="44" height="28" rx="5" transform="rotate(-12 284 162)" fill="#fbbf24" stroke="#b45309" stroke-width="3"/>` +
        speechBubble(192, 34, 148, 66, 198, 112, txt(266, 67, '🎟️ ☕ ?', 28, '#1d4ed8', 900), '#2563eb');
    }

    if (name === 'invite-accept') {
      // Bonne idée ! -> Beaming friend giving thumbs up + speech bubble [💡 ✓ !]
      return cardBg('#f0fdf4') +
        torso(235, 148, green) + face(235, 130) +
        path('M288 188l42-28', skin, 14) +
        `<circle cx="338" cy="154" r="16" fill="${skin}" stroke="${ink}" stroke-width="2.5"/>` +
        path('M338 142v-18', skin, 11) +
        speechBubble(265, 34, 165, 68, 268, 112, txt(347, 68, '💡 ✓ !', 32, '#15803d', 900), '#16a34a');
    }

    if (name === 'invite-decline') {
      // Je ne suis pas disponible -> Person pointing to full calendar + polite stop hand + [📅 ✕]
      return cardBg('#fef2f2') +
        torso(215, 148, '#64748b') + face(215, 130, false, false) +
        path('M162 185l-30-28', skin, 14) +
        `<rect x="315" y="135" width="115" height="125" rx="14" fill="#fff" stroke="#dc2626" stroke-width="4.5"/>` +
        `<rect x="315" y="135" width="115" height="34" rx="10" fill="#dc2626"/>` +
        path('M345 190l55 50m0-50l-55 50', '#dc2626', 9) +
        speechBubble(235, 32, 145, 62, 240, 108, txt(308, 63, '📅 ✕', 28, '#dc2626', 900), '#dc2626');
    }

    if (name === 'meetup-friends') {
      // se retrouver -> Two friends converging from left & right at a central meeting pin & clock!
      return cardBg('#faf7f2') +
        `<path d="M260 135q-32-42-32-64a32 32 0 1 1 64 0q0 22-32 64Z" fill="${red}" stroke="${ink}" stroke-width="3.5"/>` +
        `<circle cx="260" cy="71" r="14" fill="#fff"/>` +
        torso(125, 155, purple) + face(125, 138) +
        torso(395, 155, teal) + face(395, 138) +
        path('M182 225h52m-16-14l16 14-16 14', purple, 7) +
        path('M338 225h-52m16-14l-16 14 16 14', teal, 7);
    }

    // 13. Market & Bistro Dialogue Role-Play Scenes (Clear Speaker Bubbles!)
    if (name === 'market-vendor') {
      // Qu'est-ce qu'il vous faudra ? -> VENDOR asks shopper!
      return cardBg('#fffbeb') +
        `<polygon points="75,82 445,82 420,42 100,42" fill="${red}" stroke="${ink}" stroke-width="3.5"/>` +
        torso(205, 136, '#15803d') + face(205, 118) +
        `<rect x="95" y="218" width="330" height="72" rx="8" fill="#b45309" stroke="${ink}" stroke-width="3.5"/>` +
        `<circle cx="150" cy="205" r="18" fill="${red}"/><circle cx="182" cy="205" r="18" fill="${red}"/><circle cx="255" cy="205" r="18" fill="#4ade80"/><circle cx="288" cy="205" r="18" fill="#fbbf24"/>` +
        speechBubble(258, 92, 165, 68, 248, 124, txt(340, 126, '🍎🥕 ?', 28, '#15803d', 900), '#15803d');
    }

    if (name === 'market-choose' || name === 'market-tomatoes') {
      // Je vais prendre... -> SHOPPER points at tomatoes and chooses them!
      return cardBg('#faf7f2') +
        torso(155, 145, blue) + face(155, 128) +
        path('M205 185l92-12', skin, 14) +
        `<rect x="295" y="185" width="155" height="92" rx="10" fill="#b45309" stroke="${ink}" stroke-width="3.5"/>` +
        [330, 372, 414].map(x => `<circle cx="${x}" cy="172" r="21" fill="${red}" stroke="${ink}" stroke-width="2.5"/>`).join('') +
        speechBubble(175, 36, 178, 66, 185, 112, txt(264, 69, '🍅 ➜ 🧺 ✓', 26, '#1d4ed8', 900), '#2563eb');
    }

    if (name === 'market-lettuce') {
      return cardBg('#f0fdf4') +
        `<circle cx="260" cy="178" r="92" fill="#86efac" stroke="#15803d" stroke-width="4.5"/>` +
        `<path d="M185 165q35-65 75-20 40-45 75 20 25 55-75 75-100-20-75-75Z" fill="#4ade80" stroke="#15803d" stroke-width="3.5"/>` +
        `<ellipse cx="260" cy="192" rx="42" ry="52" fill="#22c55e" stroke="#166534" stroke-width="3"/>`;
    }

    if (name === 'market-price') {
      // Ils sont à combien ? -> SHOPPER pointing at crate of onions asking [🧅 € ?]
      return cardBg('#fffbeb') +
        torso(150, 148, purple) + face(150, 130) +
        path('M198 188l85 8', skin, 13) +
        `<rect x="285" y="192" width="160" height="88" rx="10" fill="#b45309" stroke="${ink}" stroke-width="3.5"/>` +
        [322, 365, 408].map(x => `<circle cx="${x}" cy="180" r="20" fill="#f59e0b" stroke="#92400e" stroke-width="3"/>`).join('') +
        speechBubble(185, 38, 175, 68, 185, 114, txt(272, 72, '🧅 € ?', 30, '#7c3aed', 900), '#7c3aed');
    }

    if (name === 'market-coins') {
      // Ça nous fera... -> VENDOR at cash register announcing total price [= €€]
      return cardBg('#ecfdf5') +
        torso(355, 145, '#15803d') + face(355, 128) +
        `<rect x="105" y="155" width="155" height="115" rx="14" fill="#334155" stroke="${ink}" stroke-width="4"/>` +
        `<rect x="125" y="112" width="115" height="46" rx="8" fill="#dcfce7" stroke="#15803d" stroke-width="4"/>` +
        txt(182, 135, '12 €', 24, '#14532d', 900) +
        speechBubble(185, 34, 155, 64, 315, 112, txt(262, 66, '🧾 = €', 28, '#15803d', 900), '#15803d');
    }

    if (name === 'hand-give') {
      // Tenez ! -> Smiling person extending hand to give parcel/item directly to receiving hand!
      return cardBg('#faf7f2') +
        torso(145, 148, blue) + face(145, 130) +
        path('M195 186h88', skin, 16) +
        path('M425 196h-82', skinAlt, 16) +
        `<rect x="258" y="140" width="64" height="54" rx="10" fill="#fbbf24" stroke="#b45309" stroke-width="4"/>` +
        path('M290 140v54M258 167h64', red, 5) +
        path('M252 112h68m-20-16l20 16-20 16', green, 7);
    }

    if (name === 'resto-book') {
      // Vous avez réservé ? -> HOST at podium with reservation book asking arriving guest [📅 ✓ ?]
      return cardBg('#faf7f2') +
        torso(175, 142, '#1e293b') + face(175, 124) +
        `<polygon points="225,185 335,165 335,295 225,295" fill="#78350f" stroke="${ink}" stroke-width="4"/>` +
        `<rect x="232" y="148" width="96" height="28" rx="4" fill="#fff" stroke="#475569" stroke-width="3"/>` +
        speechBubble(218, 36, 178, 68, 212, 110, txt(307, 70, '📅 ✓ ?', 30, '#1e293b', 900), '#1e293b');
    }

    if (name === 'resto-table') {
      // Il vous reste de la place ? -> GUEST pointing toward empty two-person bistro table [🪑🍽️ ?]
      return cardBg('#fffbeb') +
        torso(135, 148, purple) + face(135, 130) +
        path('M182 188l82 10', skin, 13) +
        // Empty bistro table with tablecloth + 2 chairs
        `<ellipse cx="355" cy="215" rx="78" ry="26" fill="#ffffff" stroke="#64748b" stroke-width="4"/>` +
        path('M355 241v48m-42 0h84', '#334155', 8) +
        `<path d="M262 170v85m0-38h28m130-47v85m0-38h-28" stroke="#92400e" stroke-width="8" stroke-linecap="round"/>` +
        speechBubble(168, 36, 175, 68, 172, 114, txt(255, 70, '🪑🍽️ ?', 28, '#7c3aed', 900), '#7c3aed');
    }

    if (name === 'resto-host') {
      // Suivez-moi, je vous en prie -> Waiter walking ahead gesturing "follow me ➜" to guest behind!
      return cardBg('#faf7f2') +
        torso(145, 152, '#94a3b8') + face(145, 136) +
        torso(325, 138, '#1e293b') +
        `<polygon points="325,142 312,175 325,188 338,175" fill="#fff"/>` +
        face(325, 120) +
        path('M375 178l65-14', skin, 14) +
        path('M205 268h185m-26-18l26 18-26 18', green, 8);
    }

    if (name === 'resto-order') {
      // Je peux prendre votre commande ? -> Waiter holding notepad & pen asking seated diner [📝🍽️ ?]
      return cardBg('#faf7f2') +
        torso(175, 138, '#1e293b') + face(175, 120) +
        `<rect x="218" y="162" width="46" height="62" rx="6" fill="#fff" stroke="#475569" stroke-width="3.5"/>` +
        path('M255 152l-22 28', '#f59e0b', 6) +
        torso(380, 168, teal) + face(380, 150) +
        speechBubble(195, 34, 172, 66, 205, 108, txt(281, 67, '📝🍽️ ?', 28, '#1e293b', 900), '#1e293b');
    }

    if (name === 'resto-plate') {
      // la garniture -> Dinner plate with bright spotlight ring + arrow specifically on the SIDE DISH!
      return cardBg('#fffbeb') +
        `<circle cx="260" cy="180" r="112" fill="#ffffff" stroke="#94a3b8" stroke-width="7"/>` +
        `<circle cx="260" cy="180" r="82" fill="#f8fafc" stroke="#cbd5e1" stroke-width="3"/>` +
        // Main steak dimmed on left
        `<ellipse cx="212" cy="185" rx="38" ry="26" fill="#a8a29e" opacity="0.45"/>` +
        // Side dish (golden fries + green veggies) highlighted on right!
        `<circle cx="302" cy="175" r="46" fill="#fef3c7" stroke="#f59e0b" stroke-width="4.5" stroke-dasharray="7 4"/>` +
        `<rect x="282" y="148" width="10" height="36" rx="3" transform="rotate(-12 287 166)" fill="#fbbf24" stroke="#b45309" stroke-width="2"/>` +
        `<rect x="298" y="145" width="10" height="38" rx="3" fill="#fbbf24" stroke="#b45309" stroke-width="2"/>` +
        `<rect x="314" y="148" width="10" height="36" rx="3" transform="rotate(12 319 166)" fill="#fbbf24" stroke="#b45309" stroke-width="2"/>` +
        `<circle cx="292" cy="198" r="11" fill="#22c55e"/><circle cx="314" cy="196" r="11" fill="#16a34a"/>` +
        `<path d="M355 78l-32 44" stroke="#d97706" stroke-width="7" stroke-linecap="round"/><polygon points="318,128 321,106 338,118" fill="#d97706"/>`;
    }

    if (name === 'resto-bill') {
      // L'addition, s'il vous plaît ! -> Seated diner with empty cup raising hand asking for bill [🧾 €]
      return cardBg('#faf7f2') +
        torso(195, 148, purple) + face(195, 130) +
        path('M248 182l38-46', skin, 14) +
        `<rect x="95" y="252" width="330" height="24" rx="8" fill="#b45309"/>` +
        `<ellipse cx="225" cy="246" rx="46" ry="10" fill="#fff" stroke="#94a3b8" stroke-width="3"/>` +
        speechBubble(265, 42, 165, 76, 275, 132, txt(347, 80, '🧾 € !', 32, '#7c3aed', 900), '#7c3aed');
    }

    // 14. Ten Distinct Grammar Visual Diagrams (ZERO shared/duplicate scenes!)
    if (name === 'gram-neg-pas' || name === 'gram-negation') {
      // ne... pas -> Simple action crossed out (NOT)
      return cardBg('#fef2f2') +
        `<circle cx="260" cy="170" r="102" fill="#ffffff" stroke="${red}" stroke-width="14"/>` +
        `<polygon points="235,128 235,212 308,170" fill="#64748b"/>` +
        path('M190 100l140 140', red, 14);
    }

    if (name === 'gram-neg-jamais') {
      // ne... jamais -> Calendar with every single day crossed out + 0× badge (NEVER)
      return cardBg('#fef2f2') +
        `<rect x="95" y="58" width="260" height="224" rx="18" fill="#fff" stroke="#334155" stroke-width="5"/>` +
        `<rect x="95" y="58" width="260" height="48" rx="14" fill="#1e293b"/>` +
        Array.from({ length: 6 }, (_, i) => {
          const cx = 145 + (i % 3) * 80, cy = 148 + Math.floor(i / 3) * 72;
          return path(`M${cx - 16} ${cy - 16}l32 32m0-32l-32 32`, red, 6);
        }).join('') +
        `<circle cx="395" cy="170" r="54" fill="${red}" stroke="#fff" stroke-width="4"/>` +
        txt(395, 170, '0×', 42, '#fff', 900);
    }

    if (name === 'gram-neg-plus') {
      // ne... plus -> Split BEFORE [✓] ---> NOW [✕] (NO LONGER / NO MORE)
      return cardBg('#faf7f2') +
        `<rect x="65" y="88" width="160" height="164" rx="20" fill="#dcfce7" stroke="#16a34a" stroke-width="4.5"/>` +
        txt(145, 170, '✓', 72, '#15803d', 900) +
        path('M240 170h40m-14-14l14 14-14 14', '#475569', 8) +
        `<rect x="295" y="88" width="160" height="164" rx="20" fill="#fee2e2" stroke="${red}" stroke-width="4.5"/>` +
        txt(375, 170, '✕', 72, red, 900);
    }

    if (name === 'gram-neg-rien') {
      // ne... rien -> Open empty box + bold empty-set ∅ symbol (NOTHING)
      return cardBg('#f8fafc') +
        `<polygon points="120,165 230,122 340,165 230,208" fill="#e2e8f0" stroke="#475569" stroke-width="4"/>` +
        `<polygon points="120,165 230,208 230,288 120,245" fill="#cbd5e1" stroke="#475569" stroke-width="4"/>` +
        `<polygon points="340,165 230,208 230,288 340,245" fill="#94a3b8" stroke="#475569" stroke-width="4"/>` +
        `<circle cx="385" cy="120" r="54" fill="#fee2e2" stroke="${red}" stroke-width="5"/>` +
        txt(385, 120, '∅', 58, red, 900);
    }

    if (name === 'gram-prep-countries' || name === 'gram-prepositions') {
      // en, au, aux + pays -> World globe + 3 country flag cards (Fém / Masc / Pluriel)
      return cardBg('#eff6ff') +
        `<circle cx="175" cy="170" r="86" fill="#3b82f6" stroke="#1d4ed8" stroke-width="5"/>` +
        `<path d="M125 125q32 8 42 36t-18 58q-30-22-24-94Zm88-10q36 22 28 68t-38 50q-16-38 10-118Z" fill="#4ade80"/>` +
        // 3 country flag badges on right
        `<g transform="translate(305,72)"><rect width="120" height="52" rx="8" fill="#fff" stroke="#334155" stroke-width="3"/><rect width="40" height="52" rx="4" fill="#2563eb"/><rect x="80" width="40" height="52" rx="4" fill="#ef4444"/></g>` +
        `<g transform="translate(305,144)"><rect width="120" height="52" rx="8" fill="#fff" stroke="#334155" stroke-width="3"/><circle cx="60" cy="26" r="15" fill="#ef4444"/></g>` +
        `<g transform="translate(305,216)"><rect width="120" height="52" rx="8" fill="#ef4444" stroke="#334155" stroke-width="3"/><rect y="14" width="120" height="10" fill="#fff"/><rect y="32" width="120" height="10" fill="#fff"/><rect width="52" height="30" rx="4" fill="#1d4ed8"/></g>`;
    }

    if (name === 'gram-prep-cities') {
      // à + ville -> Eiffel Tower & city skyline + giant red city pin
      return cardBg('#faf5ff') +
        `<rect x="85" y="185" width="70" height="95" fill="#cbd5e1"/><rect x="355" y="165" width="80" height="115" fill="#cbd5e1"/>` +
        // Eiffel Tower silhouette
        `<path d="M260 65l-16 115-36 100h28l12-42h24l12 42h28l-36-100Z" fill="#475569" stroke="${ink}" stroke-width="3"/>` +
        `<path d="M355 138q-28-36-28-56a28 28 0 1 1 56 0q0 20-28 56Z" fill="${red}" stroke="${ink}" stroke-width="3.5"/><circle cx="355" cy="82" r="10" fill="#fff"/>` +
        path('M65 280h390', '#64748b', 8);
    }

    if (name === 'gram-prep-chez') {
      // chez + personne -> House cross-section with a smiling PERSON inside + arrow pointing to them!
      return cardBg('#fffbeb') +
        `<polygon points="285,55 145,152 425,152" fill="#f59e0b" stroke="${ink}" stroke-width="4.5"/>` +
        `<rect x="172" y="152" width="226" height="138" rx="6" fill="#ffffff" stroke="${ink}" stroke-width="4.5"/>` +
        torso(285, 165, purple) + face(285, 148) +
        path('M72 195h78m-22-18l22 18-22 18', '#d97706', 10);
    }

    if (name === 'gram-transport-verbs') return cardBg('#eff6ff') + `<rect x="75" y="118" width="155" height="96" rx="18" fill="${blue}" stroke="#1e3a8a" stroke-width="4"/><circle cx="115" cy="218" r="16" fill="#1e293b"/><circle cx="190" cy="218" r="16" fill="#1e293b"/>` + txt(260, 168, '≠', 44, '#64748b', 900) + `<path d="M385 225q-40-52-40-80a40 40 0 1 1 80 0q0 28-40 80Z" fill="${red}" stroke="${ink}" stroke-width="4"/><circle cx="385" cy="145" r="15" fill="#fff"/>`;
    if (name === 'gram-sports-music') return cardBg('#faf7f2') + `<circle cx="160" cy="170" r="56" fill="#fef3c7" stroke="#d97706" stroke-width="8"/>` + path('M120 135q40 35 0 70m80-70q-40 35 0 70', '#d97706', 5) + txt(260, 170, 'vs', 32, '#64748b', 800) + `<ellipse cx="355" cy="198" rx="48" ry="36" fill="#d97706" stroke="#78350f" stroke-width="4"/>` + path('M372 168l55-68', '#78350f', 12);
    if (name === 'gram-timeline') return cardBg('#faf7f2') + path('M85 170h350', '#64748b', 10) + `<polygon points="445,170 410,148 410,192" fill="#64748b"/><circle cx="145" cy="170" r="34" fill="#f59e0b" stroke="#fff" stroke-width="4"/><circle cx="260" cy="170" r="34" fill="#2563eb" stroke="#fff" stroke-width="4"/><circle cx="375" cy="170" r="34" fill="#10b981" stroke="#fff" stroke-width="4"/>` + path('M135 170l8 8 14-16', '#fff', 4) + `<polygon points="255,158 255,182 273,170" fill="#fff"/>` + path('M365 170h20m-7-7l7 7-7 7', '#fff', 4);

    if (name === 'gram-verbes-1er' || name === 'gram-verb-endings') {
      // 1er groupe (-er) -> Badge #1 + regular 6-box paradigm grid
      return cardBg('#f5f3ff') +
        `<circle cx="145" cy="170" r="62" fill="#7c3aed" stroke="#4c1d95" stroke-width="5"/>` +
        txt(145, 170, '1', 64, '#fff', 900) +
        `<g transform="translate(245,88)">` +
        Array.from({ length: 6 }, (_, i) => `<rect x="${(i % 2) * 102}" y="${Math.floor(i / 2) * 58}" width="88" height="44" rx="10" fill="#ede9fe" stroke="#7c3aed" stroke-width="3.5"/>` + path(`M${(i % 2) * 102 + 34} ${Math.floor(i / 2) * 58 + 22}l8 8 16-16`, '#16a34a', 4)).join('') +
        `</g>`;
    }

    if (name === 'gram-verbes-2e') {
      // 2e groupe (-ir : finir) -> Badge #2 + checkered finish flag + plural bridge
      return cardBg('#eff6ff') +
        `<circle cx="145" cy="170" r="62" fill="#2563eb" stroke="#1e3a8a" stroke-width="5"/>` +
        txt(145, 170, '2', 64, '#fff', 900) +
        `<path d="M265 78v185" stroke="#475569" stroke-width="10" stroke-linecap="round"/>` +
        `<g transform="translate(275,82)">${Array.from({ length: 4 }, (_, r) => Array.from({ length: 5 }, (_, c) => `<rect x="${c * 28}" y="${r * 26}" width="28" height="26" fill="${(r + c) % 2 === 0 ? '#1e293b' : '#fff'}"/>`).join('')).join('')}<rect width="140" height="104" fill="none" stroke="#1e293b" stroke-width="3.5"/></g>`;
    }

    if (name === 'gram-verbes-3e') {
      // 3e groupe (-ir : sortir & dormir) -> Badge #3 + open door (sortir) + moon (dormir)
      return cardBg('#ecfdf5') +
        `<circle cx="135" cy="170" r="58" fill="#0d9488" stroke="#134e4a" stroke-width="5"/>` +
        txt(135, 170, '3', 62, '#fff', 900) +
        `<rect x="232" y="88" width="96" height="164" rx="8" fill="#dbeafe" stroke="#1e40af" stroke-width="4.5"/>` +
        `<polygon points="232,88 302,108 302,238 232,252" fill="#2563eb"/>` +
        `<circle cx="405" cy="170" r="52" fill="#1e1b4b"/>` +
        `<path d="M418 142q-26 26 6 46-36 8-40-20-2-20 18-30 0 3 16 4Z" fill="#fbbf24"/>`;
    }

    if (name === 'gram-questions') {
      // 3 question registers -> 3 stacked speech bubbles (casual, standard, formal) with 1, 2, 3 + ?
      return cardBg('#f5f3ff') +
        `<g transform="translate(95,52)"><rect width="330" height="66" rx="18" fill="#dbeafe" stroke="#2563eb" stroke-width="4"/>${txt(260, 33, '1  · · · ?', 30, '#1e40af', 900)}<circle cx="52" cy="33" r="18" fill="#2563eb"/>${txt(52, 33, '1', 20, '#fff', 900)}</g>` +
        `<g transform="translate(95,137)"><rect width="330" height="66" rx="18" fill="#ede9fe" stroke="#7c3aed" stroke-width="4"/>${txt(260, 33, '2  [ · · ] ?', 28, '#5b21b6', 900)}<circle cx="52" cy="33" r="18" fill="#7c3aed"/>${txt(52, 33, '2', 20, '#fff', 900)}</g>` +
        `<g transform="translate(95,222)"><rect width="330" height="66" rx="18" fill="#fef3c7" stroke="#d97706" stroke-width="4"/>${txt(260, 33, '3  ⇄ ?', 30, '#92400e', 900)}<circle cx="52" cy="33" r="18" fill="#d97706"/>${txt(52, 33, '3', 20, '#fff', 900)}</g>`;
    }

    return null;
  }

  window.ParlezIllustrations = { scene };
})();
