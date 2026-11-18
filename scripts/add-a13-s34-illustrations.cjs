// Add 40 new illustrations for A1.3 Séances 3–4 to public/illustrations.js
const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../public/illustrations.js');
let content = fs.readFileSync(filePath, 'utf8');

const newIllustrations = `
    // A1.3 · Séances 3–4 (40 Rich Visual Scenes)
    if (name === 'park-amusement-main') {
      return cardBg('#f0fdf4') +
        \`<circle cx="260" cy="150" r="85" fill="none" stroke="\${purple}" stroke-width="6" stroke-dasharray="14 10"/>\` +
        \`<polygon points="260,150 200,280 320,280" fill="none" stroke="\${ink}" stroke-width="6"/>\` +
        \`<rect x="70" y="190" width="80" height="90" rx="10" fill="#fbcfe8" stroke="\${ink}" stroke-width="4"/>\` +
        \`<polygon points="60,190 110,130 160,190" fill="#f43f5e" stroke="\${ink}" stroke-width="4"/>\` +
        \`<rect x="370" y="190" width="80" height="90" rx="10" fill="#fed7aa" stroke="\${ink}" stroke-width="4"/>\` +
        \`<polygon points="360,190 410,130 460,190" fill="#f97316" stroke="\${ink}" stroke-width="4"/>\` +
        txt(260, 230, '🎡 🎪 🎢', 46, ink, 900);
    }

    if (name === 'park-rollercoaster-ride') {
      return cardBg('#eff6ff') +
        \`<path d="M40 260 Q 150 40 260 220 T 480 90" fill="none" stroke="#2563eb" stroke-width="8" stroke-linecap="round"/>\` +
        \`<path d="M40 280 L 40 260 M 120 280 L 120 120 M 200 280 L 200 150 M 260 280 L 260 220 M 340 280 L 340 180 M 420 280 L 420 140" stroke="#93c5fd" stroke-width="4"/>\` +
        \`<rect x="190" y="140" width="70" height="42" rx="8" fill="#ef4444" stroke="\${ink}" stroke-width="3.5" transform="rotate(-25 225 161)"/>\` +
        txt(225, 161, '🎢', 36, ink, 900);
    }

    if (name === 'park-carousel-spin') {
      return cardBg('#fff1f2') +
        \`<polygon points="260,60 130,130 390,130" fill="#fb7185" stroke="\${ink}" stroke-width="4"/>\` +
        \`<line x1="260" y1="40" x2="260" y2="60" stroke="\${ink}" stroke-width="5"/>\` +
        \`<rect x="150" y="130" width="220" height="130" rx="6" fill="#fff" stroke="\${ink}" stroke-width="4"/>\` +
        \`<line x1="200" y1="130" x2="200" y2="260" stroke="#f43f5e" stroke-width="4"/>\` +
        \`<line x1="260" y1="130" x2="260" y2="260" stroke="#f43f5e" stroke-width="4"/>\` +
        \`<line x1="320" y1="130" x2="320" y2="260" stroke="#f43f5e" stroke-width="4"/>\` +
        txt(200, 200, '🎠', 40, ink, 900) +
        txt(320, 200, '🎠', 40, ink, 900);
    }

    if (name === 'park-picnic-lawn') {
      return cardBg('#ecfdf5') +
        \`<ellipse cx="260" cy="270" rx="230" ry="80" fill="#86efac" stroke="\${ink}" stroke-width="3"/>\` +
        \`<rect x="170" y="200" width="180" height="90" rx="12" fill="#fee2e2" stroke="#ef4444" stroke-width="3"/>\` +
        \`<path d="M170 230 H350 M170 260 H350 M215 200 V290 M260 200 V290 M305 200 V290" stroke="#ef4444" stroke-width="2.5" stroke-dasharray="4 4"/>\` +
        txt(260, 160, '🧺 🥪 🌳', 48, ink, 900);
    }

    if (name === 'expr-cant-wait-clock') {
      return cardBg('#fef3c7') +
        face(260, 120, false, true) +
        torso(260, 150, '#f59e0b') +
        \`<path d="M190 190 Q150 140 170 100" fill="none" stroke="\${ink}" stroke-width="8" stroke-linecap="round"/>\` +
        \`<path d="M330 190 Q370 140 350 100" fill="none" stroke="\${ink}" stroke-width="8" stroke-linecap="round"/>\` +
        \`<circle cx="410" cy="110" r="42" fill="#fff" stroke="\${ink}" stroke-width="4"/>\` +
        \`<polyline points="410,85 410,110 428,110" fill="none" stroke="#ef4444" stroke-width="4" stroke-linecap="round"/>\` +
        txt(120, 100, '✨🤩✨', 36, ink, 900);
    }

    if (name === 'tickets-online-phone') {
      return cardBg('#eff6ff') +
        \`<rect x="180" y="50" width="160" height="250" rx="22" fill="#1e293b" stroke="\${ink}" stroke-width="4"/>\` +
        \`<rect x="195" y="75" width="130" height="200" rx="14" fill="#ffffff"/>\` +
        \`<rect x="205" y="95" width="110" height="65" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>\` +
        \`<rect x="205" y="175" width="110" height="65" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>\` +
        txt(260, 128, '🎟️ ✓', 32, '#1d4ed8', 900) +
        txt(260, 208, '🎟️ ✓', 32, '#1d4ed8', 900);
    }

    if (name === 'gym-fitness-room') {
      return cardBg('#f8fafc') +
        \`<rect x="70" y="80" width="380" height="190" rx="14" fill="#e2e8f0" stroke="\${ink}" stroke-width="4"/>\` +
        \`<line x1="70" y1="210" x2="450" y2="210" stroke="\${ink}" stroke-width="4"/>\` +
        txt(150, 150, '🏋️‍♂️', 56, ink, 900) +
        txt(260, 150, '🏃‍♀️', 56, ink, 900) +
        txt(370, 150, '🧘', 56, ink, 900);
    }

    if (name === 'action-start-sports-dumbbells') {
      return cardBg('#fef2f2') +
        torso(260, 150, '#ef4444') + face(260, 120) +
        \`<rect x="140" y="130" width="240" height="16" rx="6" fill="#64748b" stroke="\${ink}" stroke-width="3"/>\` +
        \`<rect x="120" y="105" width="30" height="66" rx="6" fill="#1e293b" stroke="\${ink}" stroke-width="3.5"/>\` +
        \`<rect x="370" y="105" width="30" height="66" rx="6" fill="#1e293b" stroke="\${ink}" stroke-width="3.5"/>\` +
        txt(260, 60, '💪 🔥 💪', 36, ink, 900);
    }

    if (name === 'gym-membership-card') {
      return cardBg('#faf5ff') +
        \`<rect x="120" y="80" width="280" height="180" rx="18" fill="#e9d5ff" stroke="#7e22ce" stroke-width="4"/>\` +
        \`<rect x="150" y="110" width="55" height="42" rx="6" fill="#fbbf24" stroke="\${ink}" stroke-width="2.5"/>\` +
        \`<line x1="220" y1="120" x2="360" y2="120" stroke="#7e22ce" stroke-width="5" stroke-linecap="round"/>\` +
        \`<line x1="220" y1="140" x2="330" y2="140" stroke="#a855f7" stroke-width="4" stroke-linecap="round"/>\` +
        \`<line x1="150" y1="185" x2="360" y2="185" stroke="#7e22ce" stroke-width="6" stroke-linecap="round"/>\` +
        txt(340, 225, 'CARD 🪪', 28, '#7e22ce', 900);
    }

    if (name === 'class-dance-yoga-pose') {
      return cardBg('#ecfeff') +
        \`<ellipse cx="260" cy="280" rx="180" ry="30" fill="#a5f3fc" opacity=".6"/>\` +
        \`<rect x="120" y="240" width="280" height="18" rx="8" fill="#06b6d4" stroke="\${ink}" stroke-width="3"/>\` +
        txt(190, 150, '🧘‍♀️', 60, ink, 900) +
        txt(320, 150, '💃', 60, ink, 900);
    }

    if (name === 'swim-pool-water') {
      return cardBg('#eff6ff') +
        \`<rect x="60" y="90" width="400" height="170" rx="16" fill="#38bdf8" stroke="\${ink}" stroke-width="4"/>\` +
        \`<line x1="60" y1="145" x2="460" y2="145" stroke="#ffffff" stroke-width="4" stroke-dasharray="14 12"/>\` +
        \`<line x1="60" y1="205" x2="460" y2="205" stroke="#ffffff" stroke-width="4" stroke-dasharray="14 12"/>\` +
        txt(260, 145, '🏊‍♂️ 💦 🏊‍♀️', 54, ink, 900);
    }

    if (name === 'med-cabinet-cross') {
      return cardBg('#f1f5f9') +
        \`<rect x="160" y="60" width="200" height="230" rx="14" fill="#ffffff" stroke="\${ink}" stroke-width="4"/>\` +
        \`<line x1="260" y1="60" x2="260" y2="290" stroke="\${ink}" stroke-width="3"/>\` +
        \`<rect x="235" y="125" width="50" height="18" rx="4" fill="#22c55e"/>\` +
        \`<rect x="251" y="109" width="18" height="50" rx="4" fill="#22c55e"/>\` +
        \`<circle cx="245" cy="190" r="5" fill="\${ink}"/>\` +
        \`<circle cx="275" cy="190" r="5" fill="\${ink}"/>\` +
        txt(260, 240, '💊 🩹 🧴', 32, ink, 900);
    }

    if (name === 'med-bandaids-box') {
      return cardBg('#fff7ed') +
        \`<rect x="150" y="90" width="220" height="160" rx="14" fill="#fdba74" stroke="\${ink}" stroke-width="4"/>\` +
        \`<rect x="180" y="120" width="160" height="50" rx="10" fill="#ffffff" stroke="\${ink}" stroke-width="3"/>\` +
        \`<circle cx="260" cy="145" r="14" fill="#ef4444"/>\` +
        txt(260, 205, '🩹 🩹 🩹', 38, ink, 900);
    }

    if (name === 'med-thermometer-temp') {
      return cardBg('#fef2f2') +
        \`<rect x="245" y="70" width="30" height="150" rx="15" fill="#e2e8f0" stroke="\${ink}" stroke-width="4"/>\` +
        \`<circle cx="260" cy="240" r="32" fill="#ef4444" stroke="\${ink}" stroke-width="4"/>\` +
        \`<rect x="252" y="110" width="16" height="100" fill="#ef4444"/>\` +
        \`<line x1="280" y1="90" x2="295" y2="90" stroke="\${ink}" stroke-width="3"/>\` +
        \`<line x1="280" y1="120" x2="295" y2="120" stroke="\${ink}" stroke-width="3"/>\` +
        \`<line x1="280" y1="150" x2="295" y2="150" stroke="\${ink}" stroke-width="3"/>\` +
        txt(350, 150, '🌡️ 38.5°', 36, '#dc2626', 900);
    }

    if (name === 'med-ointment-tube-muscle') {
      return cardBg('#f0fdfa') +
        \`<polygon points="170,190 280,120 310,135 200,205" fill="#2dd4bf" stroke="\${ink}" stroke-width="4"/>\` +
        \`<rect x="145" y="180" width="25" height="35" rx="4" fill="#0f766e" stroke="\${ink}" stroke-width="3.5"/>\` +
        \`<circle cx="340" cy="115" r="12" fill="#ccfbf1" stroke="#0d9488" stroke-width="3"/>\` +
        txt(370, 200, '💪 🧴', 48, ink, 900);
    }

    if (name === 'med-cough-syrup-spoon') {
      return cardBg('#fffbeb') +
        \`<rect x="160" y="80" width="90" height="170" rx="14" fill="#fde68a" stroke="\${ink}" stroke-width="4"/>\` +
        \`<rect x="185" y="55" width="40" height="25" rx="5" fill="#d97706" stroke="\${ink}" stroke-width="3"/>\` +
        \`<ellipse cx="320" cy="180" rx="40" ry="22" fill="#f59e0b" stroke="\${ink}" stroke-width="3.5"/>\` +
        \`<line x1="360" y1="180" x2="430" y2="180" stroke="\${ink}" stroke-width="6" stroke-linecap="round"/>\` +
        txt(205, 160, '🥄 🍯', 36, ink, 900);
    }

    if (name === 'med-sleeping-pills-bottle') {
      return cardBg('#f5f3ff') +
        \`<rect x="160" y="90" width="100" height="160" rx="14" fill="#ddd6fe" stroke="\${ink}" stroke-width="4"/>\` +
        \`<rect x="180" y="65" width="60" height="25" rx="6" fill="#7c3aed" stroke="\${ink}" stroke-width="3.5"/>\` +
        \`<path d="M350 110 A 35 35 0 1 0 380 160 A 45 45 0 1 1 350 110 Z" fill="#fde047" stroke="\${ink}" stroke-width="3"/>\` +
        txt(210, 170, '💊', 40, ink, 900) +
        txt(330, 210, '😴 💤', 34, '#6d28d9', 900);
    }

    if (name === 'med-aspirin-tube-caps') {
      return cardBg('#ecfdf5') +
        \`<rect x="230" y="70" width="60" height="190" rx="12" fill="#a7f3d0" stroke="\${ink}" stroke-width="4"/>\` +
        \`<rect x="225" y="55" width="70" height="20" rx="5" fill="#059669" stroke="\${ink}" stroke-width="3"/>\` +
        \`<circle cx="340" cy="170" r="22" fill="#ffffff" stroke="\${ink}" stroke-width="3.5"/>\` +
        \`<line x1="325" y1="170" x2="355" y2="170" stroke="#94a3b8" stroke-width="3"/>\` +
        txt(340, 110, '🫧 🫧', 30, ink, 900) +
        txt(150, 170, '💊', 36, ink, 900);
    }

    if (name === 'pro-pharmacist-counter') {
      return cardBg('#f8fafc') +
        torso(260, 150, '#ffffff') + face(260, 120) +
        \`<rect x="80" y="210" width="360" height="80" rx="10" fill="#e2e8f0" stroke="\${ink}" stroke-width="4"/>\` +
        \`<rect x="130" y="160" width="55" height="45" rx="6" fill="#86efac" stroke="\${ink}" stroke-width="3"/>\` +
        txt(157, 182, 'Rx', 20, '#15803d', 900) +
        txt(360, 170, '⚕️ 🟢', 36, ink, 900);
    }

    if (name === 'pro-tow-truck-crane') {
      return cardBg('#fff7ed') +
        \`<rect x="100" y="150" width="160" height="90" rx="12" fill="#f97316" stroke="\${ink}" stroke-width="4"/>\` +
        \`<circle cx="140" cy="245" r="22" fill="#334155" stroke="\${ink}" stroke-width="4"/>\` +
        \`<circle cx="220" cy="245" r="22" fill="#334155" stroke="\${ink}" stroke-width="4"/>\` +
        \`<line x1="180" y1="150" x2="270" y2="90" stroke="\${ink}" stroke-width="6"/>\` +
        \`<line x1="270" y1="90" x2="310" y2="140" stroke="\${ink}" stroke-width="4"/>\` +
        \`<rect x="300" y="160" width="120" height="70" rx="10" fill="#94a3b8" stroke="\${ink}" stroke-width="3.5"/>\` +
        txt(390, 130, '⚠️ 💨', 32, ink, 900);
    }

    if (name === 'ticket-metro-stamp-machine') {
      return cardBg('#fefce8') +
        \`<rect x="210" y="70" width="100" height="210" rx="16" fill="#facc15" stroke="\${ink}" stroke-width="4.5"/>\` +
        \`<rect x="235" y="120" width="50" height="12" rx="4" fill="#1e293b"/>\` +
        \`<rect x="230" y="100" width="60" height="50" rx="6" fill="#ffffff" stroke="\${ink}" stroke-width="2.5"/>\` +
        \`<polygon points="260,180 250,160 270,160" fill="#16a34a"/>\` +
        txt(140, 160, '🎫 ➜', 38, ink, 900) +
        txt(360, 160, '✓ 🔔', 36, ink, 900);
    }

    if (name === 'iron-put-away-shirt-closet') {
      return cardBg('#faf5ff') +
        \`<line x1="90" y1="210" x2="250" y2="210" stroke="\${ink}" stroke-width="6"/>\` +
        \`<polygon points="120,210 140,280 200,280 220,210" fill="none" stroke="\${ink}" stroke-width="4"/>\` +
        \`<rect x="140" y="170" width="60" height="35" rx="6" fill="#3b82f6" stroke="\${ink}" stroke-width="3"/>\` +
        \`<rect x="290" y="80" width="140" height="200" rx="12" fill="#ede9fe" stroke="#7c3aed" stroke-width="4"/>\` +
        txt(170, 140, '💨', 28, ink, 900) +
        txt(360, 170, '👔 ✨', 42, ink, 900);
    }

    if (name === 'know-place-person-bistro') {
      return cardBg('#fffbeb') +
        \`<rect x="70" y="90" width="380" height="180" rx="14" fill="#fef3c7" stroke="\${ink}" stroke-width="4"/>\` +
        \`<rect x="100" y="130" width="80" height="120" rx="8" fill="#d97706" opacity=".3"/>\` +
        torso(210, 160, blue) + face(210, 130) +
        torso(310, 160, green) + face(310, 130) +
        txt(260, 100, '🤝 ☕ 🥐', 40, ink, 900);
    }

    if (name === 'know-skill-swim-stroke') {
      return cardBg('#eff6ff') +
        \`<rect x="80" y="100" width="360" height="150" rx="16" fill="#60a5fa" stroke="\${ink}" stroke-width="4"/>\` +
        \`<path d="M80 150 Q 170 130 260 150 T 440 150" fill="none" stroke="#ffffff" stroke-width="6"/>\` +
        \`<path d="M80 190 Q 170 170 260 190 T 440 190" fill="none" stroke="#ffffff" stroke-width="6"/>\` +
        txt(260, 140, '🏊 🎓 ✓', 48, ink, 900);
    }

    if (name === 'know-fact-map-direction') {
      return cardBg('#f8fafc') +
        \`<rect x="110" y="80" width="300" height="190" rx="14" fill="#e2e8f0" stroke="\${ink}" stroke-width="4"/>\` +
        \`<line x1="160" y1="80" x2="160" y2="270" stroke="#cbd5e1" stroke-width="3"/>\` +
        \`<line x1="260" y1="80" x2="260" y2="270" stroke="#cbd5e1" stroke-width="3"/>\` +
        \`<line x1="360" y1="80" x2="360" y2="270" stroke="#cbd5e1" stroke-width="3"/>\` +
        txt(260, 170, '📍 💡 🧭', 52, ink, 900);
    }

    if (name === 'pronoun-cod-look-direct') {
      return cardBg('#fdf4ff') +
        torso(160, 160, purple) + face(160, 130) +
        \`<path d="M220 150 L 330 150" stroke="#a855f7" stroke-width="8" stroke-linecap="round"/>\` +
        \`<polygon points="345,150 325,140 325,160" fill="#a855f7"/>\` +
        \`<rect x="360" y="100" width="90" height="110" rx="12" fill="#fae8ff" stroke="#a855f7" stroke-width="4"/>\` +
        txt(405, 155, '📺', 44, ink, 900) +
        txt(280, 120, 'COD', 24, '#7e22ce', 900);
    }

    if (name === 'pronoun-cod-semi-aux') {
      return cardBg('#f0fdf4') +
        \`<rect x="70" y="90" width="110" height="140" rx="14" fill="#bbf7d0" stroke="#16a34a" stroke-width="4"/>\` +
        \`<rect x="210" y="90" width="100" height="140" rx="14" fill="#fef08a" stroke="#ca8a04" stroke-width="4"/>\` +
        \`<rect x="340" y="90" width="110" height="140" rx="14" fill="#bbf7d0" stroke="#16a34a" stroke-width="4"/>\` +
        txt(125, 140, 'VAIS', 26, '#15803d', 900) +
        txt(125, 180, 'DOIS', 24, '#15803d', 900) +
        txt(260, 160, 'LA / L’', 26, '#854d0e', 900) +
        txt(395, 140, 'VOIR', 26, '#15803d', 900) +
        txt(395, 180, 'ACHETER', 20, '#15803d', 900);
    }

    if (name === 'pronoun-cod-accord-avoir') {
      return cardBg('#eff6ff') +
        \`<rect x="90" y="90" width="150" height="140" rx="14" fill="#dbeafe" stroke="#2563eb" stroke-width="4"/>\` +
        \`<rect x="280" y="90" width="150" height="140" rx="14" fill="#dbeafe" stroke="#2563eb" stroke-width="4"/>\` +
        txt(165, 135, 'LA (♀)', 26, '#1d4ed8', 900) +
        txt(165, 180, 'AVANT', 22, '#2563eb', 800) +
        txt(260, 160, '➜', 40, '#2563eb', 900) +
        txt(355, 135, 'VU + E', 28, '#dc2626', 900) +
        txt(355, 180, 'VUE !', 26, '#16a34a', 900) +
        timeline('past');
    }

    if (name === 'pronoun-coi-talk-phone') {
      return cardBg('#ecfeff') +
        torso(160, 160, '#0284c7') + face(160, 130) +
        \`<path d="M220 150 Q 280 120 340 150" fill="none" stroke="#0284c7" stroke-width="6" stroke-dasharray="8 6"/>\` +
        \`<circle cx="360" cy="150" r="38" fill="#e0f2fe" stroke="#0284c7" stroke-width="3.5"/>\` +
        txt(360, 150, '📱 🗣️', 30, ink, 900) +
        txt(280, 110, 'LUI (COI)', 22, '#0369a1', 900);
    }

    if (name === 'pronoun-coi-parents-letter') {
      return cardBg('#fef2f2') +
        torso(150, 160, rose) + face(150, 130) +
        \`<line x1="210" y1="160" x2="310" y2="160" stroke="#f43f5e" stroke-width="6"/>\` +
        \`<rect x="330" y="110" width="130" height="100" rx="12" fill="#ffe4e6" stroke="#f43f5e" stroke-width="4"/>\` +
        txt(395, 160, '👨‍👩‍👧 💌', 34, ink, 900) +
        txt(260, 135, 'LEUR', 24, '#e11d48', 900);
    }

    if (name === 'pronoun-coi-offer-drink') {
      return cardBg('#f0fdf4') +
        torso(160, 160, green) + face(160, 130) +
        torso(360, 160, blue) + face(360, 130) +
        \`<rect x="235" y="150" width="50" height="70" rx="8" fill="#fef08a" stroke="\${ink}" stroke-width="3"/>\` +
        txt(260, 130, '🧃 ➜ 🤝', 28, ink, 900);
    }

    if (name === 'pronoun-cod-coi-meet-greet') {
      return cardBg('#faf5ff') +
        torso(150, 160, purple) + face(150, 130) +
        torso(370, 160, '#f97316') + face(370, 130) +
        \`<path d="M210 140 Q 260 110 310 140" fill="none" stroke="\${ink}" stroke-width="4"/>\` +
        txt(260, 115, 'COD ➜ COI', 20, '#7c3aed', 900) +
        txt(260, 180, '👋 Bonjour !', 26, '#c2410c', 900);
    }

    if (name === 'opinion-find-beautiful-art') {
      return cardBg('#fdf2f8') +
        torso(160, 160, rose) + face(160, 130) +
        \`<rect x="280" y="80" width="170" height="170" rx="14" fill="#fbcfe8" stroke="#db2777" stroke-width="4"/>\` +
        txt(365, 165, '✨ 🏰 🌟', 42, ink, 900) +
        txt(160, 80, '😍', 36, ink, 900);
    }

    if (name === 'people-friendly-welcome-warm') {
      return cardBg('#fef3c7') +
        torso(260, 160, '#f59e0b') + face(260, 130) +
        \`<path d="M190 180 Q 140 160 150 120" fill="none" stroke="\${ink}" stroke-width="7" stroke-linecap="round"/>\` +
        \`<path d="M330 180 Q 380 160 370 120" fill="none" stroke="\${ink}" stroke-width="7" stroke-linecap="round"/>\` +
        txt(260, 80, '🤗 ☕ 💖', 44, ink, 900);
    }

    if (name === 'enjoy-like-city-heart') {
      return cardBg('#eff6ff') +
        \`<polygon points="120,240 120,130 150,110 180,130 180,240" fill="#93c5fd" stroke="\${ink}" stroke-width="3"/>\` +
        \`<polygon points="220,240 220,100 250,80 280,100 280,240" fill="#60a5fa" stroke="\${ink}" stroke-width="3"/>\` +
        \`<polygon points="320,240 320,140 350,120 380,140 380,240" fill="#93c5fd" stroke="\${ink}" stroke-width="3"/>\` +
        txt(250, 60, '❤️ 🕌 ❤️', 40, '#dc2626', 900);
    }

    if (name === 'gram-connaitre-savoir-rule') {
      return cardBg('#faf7f2') +
        \`<rect x="50" y="80" width="190" height="170" rx="14" fill="#dcfce7" stroke="#16a34a" stroke-width="4"/>\` +
        txt(145, 120, 'CONNAÎTRE', 24, '#15803d', 900) +
        txt(145, 165, '+ NOM', 28, '#166534', 900) +
        txt(145, 210, 'personne / lieu', 18, '#15803d', 700) +
        \`<rect x="280" y="80" width="190" height="170" rx="14" fill="#dbeafe" stroke="#2563eb" stroke-width="4"/>\` +
        txt(375, 120, 'SAVOIR', 24, '#1e40af', 900) +
        txt(375, 165, '+ VERBE / FAIT', 24, '#1e3a8a', 900) +
        txt(375, 210, 'infinitif / où, que', 18, '#1e40af', 700);
    }

    if (name === 'gram-cod-position-rule') {
      return cardBg('#f5f3ff') +
        \`<rect x="60" y="75" width="400" height="85" rx="12" fill="#ede9fe" stroke="#6d28d9" stroke-width="3.5"/>\` +
        txt(260, 117, 'Je [ LE / LA ] regarde', 28, '#5b21b6', 900) +
        \`<rect x="60" y="175" width="400" height="85" rx="12" fill="#ede9fe" stroke="#6d28d9" stroke-width="3.5"/>\` +
        txt(260, 217, 'Je vais [ LA ] voir (infinitif)', 26, '#5b21b6', 900);
    }

    if (name === 'gram-cod-accord-rule') {
      return cardBg('#fff1f2') +
        \`<rect x="60" y="80" width="400" height="160" rx="16" fill="#ffe4e6" stroke="#e11d48" stroke-width="4"/>\` +
        txt(260, 120, 'COD AVANT + AVOIR', 28, '#9f1239', 900) +
        txt(260, 165, '➜ ACCORD DU PARTICIPE', 26, '#e11d48', 900) +
        txt(260, 205, 'la voiture ➜ je l’ai vue (+e)', 22, '#be123c', 800);
    }

    if (name === 'gram-coi-verbes-a-rule') {
      return cardBg('#ecfeff') +
        \`<rect x="60" y="80" width="400" height="160" rx="16" fill="#cffafe" stroke="#0891b2" stroke-width="4"/>\` +
        txt(260, 120, 'VERBE + À + PERSONNE', 26, '#155e75', 900) +
        txt(260, 165, '➜ LUI (sing.) / LEUR (plur.)', 26, '#0e7490', 900) +
        txt(260, 205, '🚫 PAS D’ACCORD AU PASSÉ !', 22, '#dc2626', 800);
    }

    if (name === 'gram-trouver-plaire-rule') {
      return cardBg('#fffbeb') +
        \`<rect x="60" y="80" width="190" height="160" rx="14" fill="#fef3c7" stroke="#d97706" stroke-width="4"/>\` +
        txt(155, 125, 'TROUVER', 26, '#92400e', 900) +
        txt(155, 165, '+ COD + ADJ', 22, '#b45309', 800) +
        txt(155, 205, 'Je la trouve belle', 18, '#92400e', 700) +
        \`<rect x="270" y="80" width="190" height="160" rx="14" fill="#fef3c7" stroke="#d97706" stroke-width="4"/>\` +
        txt(365, 125, 'PLAIRE À', 26, '#92400e', 900) +
        txt(365, 165, 'CHOSE + ME PLAÎT', 20, '#b45309', 800) +
        txt(365, 205, 'La ville me plaît', 18, '#92400e', 700);
    }
`;

const target = '    return null;\n  }\n\n  window.ParlezIllustrations';
const targetCRLF = '    return null;\r\n  }\r\n\r\n  window.ParlezIllustrations';

if (content.includes(targetCRLF)) {
  content = content.replace(targetCRLF, newIllustrations + '\r\n' + targetCRLF);
} else if (content.includes(target)) {
  content = content.replace(target, newIllustrations + '\n' + target);
} else {
  console.error('Target not found in illustrations.js');
  process.exit(1);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully appended 40 new illustrations to illustrations.js!');
