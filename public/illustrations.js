/* Hand-authored, word-free retrieval scenes. Shared by review, grammar, vocab and Library. */
(function () {
  'use strict';
  const ink = '#423954', skin = '#edbca2', purple = '#8a7bbd', blue = '#688db5', green = '#78a78e', yellow = '#e6b361', red = '#c8636e';
  const path = (d, color, width = 8) => `<path d="${d}" fill="none" stroke="${color}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"/>`;
  const face = (x, y, closed = false) => `<ellipse cx="${x}" cy="${y}" rx="44" ry="51" fill="${skin}"/>
    <path d="M${x-44} ${y-8}q-5-62 47-54 43 3 40 51-24-8-34-28-18 24-53 31" fill="${ink}"/>
    ${closed ? path(`M${x-24} ${y+8}q8 7 16 0m16 0q8 7 16 0`, ink, 3) : `<circle cx="${x-16}" cy="${y+7}" r="3.5" fill="${ink}"/><circle cx="${x+16}" cy="${y+7}" r="3.5" fill="${ink}"/>`}
    ${path(`M${x-10} ${y+30}q10 7 20 0`, '#ad7079', 3)}`;
  const torso = (x, y, color = purple) => `<path d="M${x-57} ${y+137}l7-75q8-27 50-27t50 27l7 75Z" fill="${color}"/>`;
  const mattress = `<rect x="65" y="222" width="305" height="65" rx="15" fill="#c4b6df"/><path d="M68 286v23m297-23v23" stroke="#81739f" stroke-width="12"/><rect x="70" y="207" width="102" height="35" rx="13" fill="#fffdf8"/>`;
  const moon = `<path d="M421 46q-31 33 7 57-48 10-53-24-2-26 22-38 0 4 24 5" fill="#e7ba66"/>`;
  const morningSun = `<g stroke="#e4b052" stroke-width="5" stroke-linecap="round"><path d="M424 37v-12m0 81v-12m29-29h12m-82 0h12m9-23-9-9m49 49 9 9m-9-49 9-9m-49 49-9 9"/></g><circle cx="424" cy="65" r="23" fill="#f6ce7c"/>`;

  function bedroom(s) {
    if (s === 'wake') return morningSun + mattress + `<path d="M171 224q80-36 177 8v41H167Z" fill="${purple}"/>` + face(135,190) + `<rect x="43" y="154" width="43" height="39" rx="10" fill="#f6ce7c"/>` + path('M64 161v14l10 4m-36-24-8-9m63 9 8-9', '#b18454', 4);
    if (s === 'rise') return morningSun + mattress + torso(292,105) + face(292,107) + path('M272 242l50 18 11 44m-29-64 52 12 22 47', '#626587', 17) + path('M333 305h22m24-5h21', ink, 10) + path('M251 177l-18 52m101-52 22 39', skin, 13);
    if (s === 'bedtime') return moon + mattress + torso(270,107) + face(270,110) + path('M249 243l-18 28-45-3m104-25 39 18-4 41', '#626587', 17) + `<path d="M166 222l44-23 95 12-8 58H166Z" fill="#a797ce"/>` + path('M225 180l-27 24m119-23-17 30', skin, 13);
    return moon + mattress + `<path d="M176 226q70-33 174 9v40H166Z" fill="${purple}"/>` + face(135,190,true) + `<g opacity=".45" transform="translate(307 51) scale(.48)">${face(135,190)}</g>` + path('M365 179q-9 23-32 27m10-14-12 15 19 0', '#b0a0cd', 4);
  }

  function grooming(s) {
    if (s === 'brush') return `<rect x="66" y="32" width="388" height="276" rx="38" fill="#e3f0f2"/>` + torso(254,152,'#88b5a5') + face(254,137) +
      `<rect x="232" y="162" width="45" height="18" rx="6" fill="#fffdf8" stroke="#b77d80" stroke-width="2"/>` + path('M243 164v12m10-12v12m10-12v12', '#d8cfcd', 2) +
      path('M303 217q52 39 64-9l-8-30',skin,18) +
      `<rect x="246" y="176" width="116" height="9" rx="4" fill="#4f95ac"/><rect x="239" y="175" width="39" height="10" rx="4" fill="#4f95ac"/>` +
      Array.from({length:9},(_,i)=>path(`M${242+i*4} 174v-9`,'#fff',3)).join('') +
      path('M352 178l-2 12',skin,14) + `<circle cx="279" cy="162" r="7" fill="#fff"/><circle cx="285" cy="171" r="5" fill="#fff"/>` + path('M214 171h-17m14-9-9-5','#82b1ba',3);
    return `<rect x="66" y="32" width="388" height="276" rx="38" fill="#ebe4f6"/><path d="M184 219q-21-167 73-171 91-6 87 176l-43 16h-82Z" fill="${ink}"/>` + torso(257,153,'#b09acb') + face(257,139) +
      path('M218 116q-33 43-20 112m110-110q30 47 12 110',ink,22) + path('M310 240q62-27 78-105l-9-49',skin,19) +
      `<g transform="rotate(-27 329 115)"><rect x="290" y="99" width="106" height="14" rx="6" fill="#ad87c5" stroke="#665286" stroke-width="3"/>${Array.from({length:12},(_,i)=>path(`M${295+i*5} 114v21`,'#b79ad2',4)).join('')}</g>` +
      path('M379 80l3 11',skin,13) + path('M321 158q9 19 4 40','#79688f',3) + path('M352 172q4 18-2 28m-5-8 4 10 8-8','#b6a1cd',3);
  }

  function eating(s) {
    const before = s === 'eat-before', now = s === 'eat-now';
    return torso(260,107,'#86a7b4') + face(260,93) +
      `<rect x="86" y="234" width="348" height="44" rx="12" fill="#dec2aa"/><path d="M115 277v32m290-32v32" stroke="#b89b87" stroke-width="10"/><ellipse cx="260" cy="237" rx="77" ry="26" fill="#fffdf8" stroke="#cbbcb5" stroke-width="4"/><ellipse cx="260" cy="237" rx="59" ry="17" fill="none" stroke="#e3dad2" stroke-width="2"/>` +
      (before || now ? `<ellipse cx="256" cy="236" rx="${before?39:22}" ry="13" fill="#e6b361"/><circle cx="${before?287:278}" cy="233" r="8" fill="#8db18c"/><circle cx="239" cy="233" r="6" fill="#ca7c68"/>` : `<circle cx="240" cy="239" r="2" fill="#ba936a"/><circle cx="273" cy="232" r="2.5" fill="#ba936a"/>`) +
      (now ? `<ellipse cx="263" cy="122" rx="9" ry="6" fill="#9f6871"/>` + path('M304 172q45 24 37-11l-44-17',skin,14) + path('M299 145l-25-19m-7-6 7 7m-3-11 7 7m-3-11 7 7','#737d8c',4) + `<circle cx="273" cy="126" r="7" fill="#e6b361"/>` :
       before ? path('M211 176l-26 29m125-29 27 29',skin,14) + path('M171 215v38m-5-38v13h10v-13m174 0v38','#737d8c',4) :
       path('M211 177q-27 17 13 29m83-29q27 17-13 29',skin,14) + path('M231 225l49 21m-44-27 49 21','#737d8c',4)) +
      `<g transform="translate(384 40)"><circle cx="0" cy="0" r="24" fill="#fffdf8" stroke="#d2c7df" stroke-width="3"/>${before ? path('M-9 0h18m-7-7 7 7-7 7',purple,4) : now ? `<circle r="8" fill="#7caa94"/>` : path('M-10 0l7 7 14-15','#7caa94',4)}</g>`;
  }

  function scene(name) {
    // Existing core scenes
    if (['wake','rise','bedtime','sleep'].includes(name)) return bedroom(name);
    if (['hair','brush'].includes(name)) return grooming(name);
    if (['eat-before','eat-now','eat-after'].includes(name)) return eating(name);
    if (name==='walk' || name==='no-walk') return `<path d="M40 294q190-90 440 0" fill="none" stroke="#cbd9b5" stroke-width="24"/><path d="M85 142v115m350-115v115" stroke="#a1ac82" stroke-width="13"/><circle cx="85" cy="111" r="48" fill="#a9c9a1"/><circle cx="435" cy="111" r="48" fill="#bfd5aa"/>` +
      torso(260,97,'#b09acb') + face(260,82) + path('M239 232l-25 36-28 29m94-65 22 32 33 19','#626587',17) + path('M187 300l-20 5m170-20 20 5',ink,10) + path('M212 158l-28 31-26-12m150-19 20 24 30-17',skin,14) +
      (name==='no-walk'?`<circle cx="375" cy="72" r="34" fill="#fffdf8" stroke="#d28293" stroke-width="7"/>`+path('M352 49l46 46','#d28293',7):'');
    if (name==='dress') return `<rect x="59" y="40" width="132" height="252" rx="14" fill="#e8dfd0"/><path d="M125 50v230" stroke="#c9bba6" stroke-width="3"/><circle cx="115" cy="171" r="4" fill="#a99b87"/>` +
      path('M270 238v61m38-61 9 61','#626587',20) + face(290,92) +
      `<path d="M251 164l-24-49-31 18 38 90 22-14-8 40h86l-7-40 22 14 38-90-31-18-24 49-16-20h-31Z" fill="#9bbdad" stroke="#7a9f90" stroke-width="3"/>` +
      path('M210 126l-10-25m170 25 10-25',skin,13) + path('M278 149q12 20 24 0','#d8ebe1',6) + path('M271 186v35m18-38v36m18-36v36','#bcd7ca',3);
    if (name==='dishes') return `<rect x="69" y="237" width="380" height="61" rx="12" fill="#c7c2da"/><ellipse cx="203" cy="239" rx="105" ry="28" fill="#dfeaf0"/><ellipse cx="203" cy="242" rx="80" ry="18" fill="#b6d1dd"/>` +
      path('M101 218v-43q0-26 27-26h22v21','#8e9aa5',9) + path('M149 182v34','#8fc9dc',6) +
      torso(347,105,'#aa9ac9') + face(347,91) + `<ellipse cx="224" cy="211" rx="41" ry="45" fill="#fffdf8" stroke="#9ea9c6" stroke-width="5"/><ellipse cx="224" cy="211" rx="28" ry="32" fill="none" stroke="#d2d8e7" stroke-width="3"/>` +
      path('M299 172l-39 43-9 9m142-51-46 54-100-32',skin,14) + `<rect x="229" y="183" width="32" height="18" rx="5" fill="#e9c96a" transform="rotate(15 245 192)"/>` +
      [176,192,210].map((x,i)=>`<circle cx="${x}" cy="${225-i*16}" r="${7+i}" fill="#f8ffff" stroke="#c0dfeb" stroke-width="2"/>`).join('');
    if (name==='plants') return `<path d="M102 244h83l-13 61h-57Z" fill="#cd947b"/><path d="M144 249v-97" stroke="#679f82" stroke-width="7"/><ellipse cx="124" cy="177" rx="13" ry="32" transform="rotate(-43 124 177)" fill="#86b499"/><ellipse cx="165" cy="158" rx="13" ry="32" transform="rotate(43 165 158)" fill="#6da78e"/><ellipse cx="124" cy="218" rx="12" ry="26" transform="rotate(-55 124 218)" fill="#8abb9e"/>` +
      torso(350,109,'#b294b0') + face(350,93) + path('M330 244l-9 58m47-58 9 58','#626587',17) +
      `<g transform="rotate(-20 239 200)"><path d="M213 176h62v52h-62Z" fill="#88b7ce"/><path d="M214 192l-46-22-8 14 54 35Z" fill="#88b7ce"/><path d="M268 182q39-19 33 13-4 15-27 13" fill="none" stroke="#6f9caf" stroke-width="8"/></g>` +
      path('M303 173l-23 17m118-13-48 43-74-6',skin,14) + path('M169 184l-15 34m4-39-14 29m3-24-11 21','#87bbd1',3);
    if (name==='coffee') return `<rect x="64" y="89" width="144" height="101" rx="8" fill="#817fa7"/><rect x="74" y="100" width="124" height="79" rx="3" fill="#dddbee"/><path d="M54 196h164" stroke="#b8b1cb" stroke-width="11"/><rect x="50" y="210" width="182" height="15" rx="7" fill="#d0b49c"/><path d="M69 224v77m141-77v77" stroke="#b2957f" stroke-width="9"/>` +
      torso(353,110,'#8caeb5') + face(353,93) + path('M331 247l-8 53m48-53 11 53','#626587',17) +
      `<rect x="292" y="174" width="46" height="43" rx="7" fill="#fffdf8" stroke="#b8a9cd" stroke-width="3"/><ellipse cx="315" cy="176" rx="21" ry="5" fill="#a47959"/>` + path('M337 183q26-2 19 17-4 7-18 6','#b8a9cd',5) +
      path('M306 160q-7-12 0-23m14 23q-7-12 0-23','#b9a9bc',3) + path('M307 172l-9 50 20 4m81-53-23 45-38-19',skin,14);
    if (name==='work') return torso(297,106,'#8cafb5') + face(297,91) +
      path('M277 242l-40 32 2 29m79-61 28 35 4 25','#626587',17) +
      `<rect x="99" y="229" width="327" height="20" rx="8" fill="#d6b79e"/><path d="M120 249v57m284-57v57" stroke="#b99a80" stroke-width="10"/><path d="M143 153h108l12 71H155Z" fill="#8585ad" stroke="#676b91" stroke-width="4"/><path d="M155 224h157" stroke="#8e93b5" stroke-width="9" stroke-linecap="round"/><circle cx="203" cy="188" r="9" fill="#dddcee"/>` +
      path('M346 172l21 39-66 11m-50-52 6 32 22 17',skin,14) + path('M289 217l-11 6m21-4-9 6',skin,8);
    if (name==='makebed') return morningSun +
      `<rect x="56" y="209" width="313" height="74" rx="13" fill="#c9bce4"/><path d="M62 279v27m300-27v27" stroke="#8f7fa9" stroke-width="12"/><rect x="66" y="197" width="103" height="35" rx="13" fill="#fffdf8"/>` +
      path('M394 218l-10 76m42-76 12 76','#626587',17) + path('M383 298h-20m76 0h19',ink,10) +
      `<path d="M372 143q24-13 53 5l13 83h-65Z" fill="#88b5a5"/><g transform="translate(151 43) scale(.63)">${face(396,100)}</g>` +
      `<path d="M165 206q53 9 97-4l56-11 48 35-25 34H163Z" fill="#a08bc5" stroke="#8974af" stroke-width="3"/><path d="M165 206l32 12-24 11 35 13-45 18" fill="#c5b5df"/>` +
      path('M378 158l-29 20-31 13m107-28-14 41-45 22',skin,13) +
      path('M317 190l8 7m40 28 9 2',skin,11) + path('M229 222l65-19m-44 37 76-12','#c6b5df',3);
    if (name==='shirt') return `<path d="M214 73h92l58 47-35 54-27-22v137h-88V152l-27 22-35-54Z" fill="#89a9c7" stroke="#6586a7" stroke-width="4"/><path d="M234 74l26 29 26-29m-52 0-20 36 27 12 19-19 19 19 27-12-20-36" fill="#e2eaf1"/><path d="M260 105v181" stroke="#c6d5e3" stroke-width="5"/>${[139,173,207,241,273].map(y=>`<circle cx="266" cy="${y}" r="3" fill="#4c6f91"/>`).join('')}<path d="M280 143h17v25h-17Z" fill="#9cb8d1"/>`;
    if (name==='red-dress') return face(260,87) + `<path d="M235 128h50l10 72 52 99H173l52-99Z" fill="#c94d5c"/><path d="M226 144l-27 67m95-67 27 67" stroke="${skin}" stroke-width="13" stroke-linecap="round"/><path d="M236 299v17m48-17v17" stroke="${skin}" stroke-width="12"/>`;
    if (name==='morning') return `<rect x="18" y="52" width="225" height="236" rx="23" fill="#e9e2f7"/><rect x="277" y="52" width="225" height="236" rx="23" fill="#f7ead6"/><g transform="translate(14 100) scale(.47)">${bedroom('wake')}</g>` + path('M246 174h27m-8-8 8 8-8 8',purple,4) + `<ellipse cx="389" cy="242" rx="96" ry="20" fill="#d5b79b"/><ellipse cx="361" cy="225" rx="47" ry="15" fill="#fffdf8"/><path d="M335 219q26-40 52 0Z" fill="#dda75c"/><rect x="418" y="180" width="42" height="48" rx="7" fill="#fffdf8"/><ellipse cx="439" cy="182" rx="20" ry="5" fill="#94705c"/>` + path('M460 189q24-2 18 18-3 8-17 7','#c4ac96',5) + path('M430 166q-7-11 0-22m15 22q-7-11 0-22','#c4ac96',3);
    if (name==='sport') return torso(260,90,'#8aa9ba') + face(260,80) + `<path d="M210 215h100l-4 35h-40l-6-22-6 22h-40Z" fill="#666b98"/>` + path('M230 255l-9 35m70-35 9 35',skin,16) + `<path d="M209 283h22l4 16-8 11h-43q-9-12 4-17Z" fill="#8c7cba"/><path d="M290 283h22l22 11q13 11 1 16h-43l-8-11Z" fill="#8c7cba"/>` + path('M184 309h46m64 0h42','#fffdf8',5) + path('M210 153l-21 53m121-53 21 53',skin,13) + path('M205 295h14m80 0h14','#fffdf8',3);

    // --- A1.1 Curriculum Scenes (Greetings, Identity, Tastes, Hobbies, City, Family, Professions) ---
    if (name==='greeting-day') return morningSun + torso(170,120,purple) + face(170,105) + torso(350,120,blue) + face(350,105) +
      path('M135 170l-28-42m185 42l28-42', skin, 12) + path('M107 128q14-16 10-34m203 34q-14-16-10-34', yellow, 4);

    if (name==='greeting-night') return moon + `<rect x="135" y="110" width="250" height="150" rx="16" fill="#312a45"/>` +
      `<rect x="155" y="130" width="95" height="110" rx="8" fill="#f6ce7c"/><rect x="270" y="130" width="95" height="110" rx="8" fill="#f6ce7c"/>` +
      path('M202 130v110M155 185h95M317 130v110M270 185h95', '#312a45', 4) +
      `<circle cx="105" cy="75" r="4" fill="#ffd78a"/><circle cx="280" cy="50" r="3" fill="#ffd78a"/>`;

    if (name==='wave-hand') return torso(260,110,purple) + face(260,95) +
      path('M215 170l-35 45m85-45l45-55 15-20', skin, 14) + path('M335 55q15-10 25 0m-35 15q20-15 35 0', yellow, 5);

    if (name==='thanks') return `<circle cx="260" cy="155" r="95" fill="#fbf2ea"/>` +
      `<path d="M260 110q32-45 65-5 35 45-65 95-100-50-65-95 33-40 65 5Z" fill="${red}"/>` +
      path('M195 240q65 20 130 0', skin, 16) + path('M230 220l30 35 30-35', skin, 12);

    if (name==='polite') return `<ellipse cx="260" cy="245" rx="160" ry="35" fill="#e7e0d3"/>` +
      `<rect x="185" y="145" width="150" height="95" rx="14" fill="#fffdf8" stroke="#cfc7b6" stroke-width="4"/>` +
      `<ellipse cx="260" cy="150" rx="65" ry="16" fill="#b08d74"/><path d="M335 170q35 0 25 35-10 25-25 20" fill="none" stroke="#cfc7b6" stroke-width="8"/>` +
      path('M240 125q-10-25 0-45m20 45q-10-25 0-45m20 45q-10-25 0-45', '#cfc7b6', 4);

    if (name==='chat-friends') return torso(175,130,blue) + face(175,115) + torso(345,130,green) + face(345,115) +
      `<g transform="translate(260,105)"><circle cx="-25" cy="-25" r="28" fill="#fff" stroke="${purple}" stroke-width="3"/>` +
      `<circle cx="25" cy="0" r="32" fill="#fff" stroke="${blue}" stroke-width="3"/>` +
      `<circle cx="-35" cy="-25" r="4" fill="${purple}"/><circle cx="-25" cy="-25" r="4" fill="${purple}"/><circle cx="-15" cy="-25" r="4" fill="${purple}"/>` +
      `<circle cx="15" cy="0" r="4" fill="${blue}"/><circle cx="25" cy="0" r="4" fill="${blue}"/><circle cx="35" cy="0" r="4" fill="${blue}"/></g>`;

    if (name==='handshake') return `<rect x="70" y="50" width="380" height="240" rx="25" fill="#f3eff8"/>` +
      path('M110 180l70-30 45 25 35-15', blue, 24) +
      path('M410 180l-70-30-45 25-35-15', purple, 24) +
      `<circle cx="260" cy="165" r="35" fill="none" stroke="${skin}" stroke-width="22"/>` +
      `<ellipse cx="260" cy="165" rx="18" ry="12" fill="${skin}"/>`;

    if (name==='wave-bye') return torso(240,110,purple) + face(240,95) +
      path('M210 230l-20 60m40-60l20 60', '#626587', 16) +
      path('M270 160l45-45 15-20', skin, 13) + path('M335 85q15-12 25 0', yellow, 4) +
      path('M100 295h320', '#d8d2ea', 8);

    if (name==='calendar-tomorrow') return `<rect x="150" y="60" width="220" height="230" rx="20" fill="#fff" stroke="#cfc7db" stroke-width="6"/>` +
      `<path d="M150 60h220v65H150Z" fill="${red}"/>` +
      `<circle cx="200" cy="80" r="8" fill="#fff"/><circle cx="320" cy="80" r="8" fill="#fff"/>` +
      `<path d="M220 180l40 40 50-60" fill="none" stroke="${green}" stroke-width="14" stroke-linecap="round"/>` +
      `<path d="M370 125l-45 45v-45Z" fill="#e9e3f4"/>`;

    if (name==='sun-day') return morningSun + `<circle cx="260" cy="170" r="60" fill="#ffe299"/>` +
      `<g stroke="#f5b842" stroke-width="8" stroke-linecap="round">${Array.from({length:8},(_,i)=>{const a=i*Math.PI/4;return `<line x1="${260+Math.cos(a)*80}" y1="${170+Math.sin(a)*80}" x2="${260+Math.cos(a)*105}" y2="${170+Math.sin(a)*105}"/>`;}).join('')}</g>`;

    if (name==='moon-evening') return moon + `<rect x="90" y="210" width="340" height="85" rx="12" fill="#2d2942"/>` +
      `<polygon points="260,110 120,210 400,210" fill="#463c63"/>` +
      `<rect x="235" y="160" width="50" height="50" rx="8" fill="#ffd78a"/><path d="M260 160v50M235 185h50" stroke="#463c63" stroke-width="4"/>`;

    if (name==='listen-repeat') return `<path d="M210 100q50-40 80 15 25 45-15 75-20 15-20 40" fill="none" stroke="${purple}" stroke-width="16" stroke-linecap="round"/>` +
      `<circle cx="255" cy="245" r="14" fill="${purple}"/>` +
      `<path d="M160 165a110 110 0 0 1 190-60" fill="none" stroke="${blue}" stroke-width="8" stroke-linecap="round" stroke-dasharray="14 10"/>` +
      `<polygon points="350,90 375,110 345,125" fill="${blue}"/>`;

    if (name==='spell-letters') return `<g transform="translate(85,100)">` +
      `<rect x="0" y="0" width="100" height="100" rx="16" fill="#e8e1f5" stroke="${purple}" stroke-width="5"/>` +
      path('M25 75l25-50 25 50m-40-18h30', purple, 8) +
      `<rect x="125" y="0" width="100" height="100" rx="16" fill="#e1edf5" stroke="${blue}" stroke-width="5"/>` +
      path('M150 25v50h25q15 0 15-13t-15-12h-25m25 0q15 0 15-12t-15-13h-25', blue, 8) +
      `<rect x="250" y="0" width="100" height="100" rx="16" fill="#e5f4ec" stroke="${green}" stroke-width="5"/>` +
      path('M325 35q-30-20-45 5t5 50 45-5', green, 8) + `</g>`;

    if (name==='clock-late') return `<circle cx="230" cy="160" r="95" fill="#fff" stroke="${red}" stroke-width="9"/>` +
      path('M230 160v-65m0 65l55 25', red, 8) + `<circle cx="230" cy="160" r="10" fill="${red}"/>` +
      path('M340 180l45 40 40-20m-35-15l30 45', skin, 14) + path('M350 260h70', ink, 6);

    if (name==='tired-head') return `<rect x="90" y="220" width="340" height="70" rx="14" fill="#cfbba8"/>` +
      torso(260,125,'#859bb3') + face(260,110,true) +
      path('M205 180l30 40 45-20', skin, 13) +
      path('M270 70q25-25 45 0t-35 30 25 25', '#9a94b8', 5);

    if (name==='heart-like') return `<circle cx="260" cy="165" r="110" fill="#feeef0"/>` +
      `<path d="M260 115q38-55 75-5 40 55-75 110-115-55-75-110 37-50 75 5Z" fill="${red}"/>` +
      `<circle cx="345" cy="95" r="12" fill="#ffd78a"/><circle cx="175" cy="120" r="8" fill="#ffd78a"/>`;

    if (name==='dislike') return `<circle cx="260" cy="165" r="105" fill="#fbf0f0"/>` +
      `<circle cx="260" cy="165" r="75" fill="none" stroke="${red}" stroke-width="14"/>` +
      path('M205 110l110 110', red, 14);

    if (name==='adore-star') return `<circle cx="260" cy="165" r="115" fill="#fff9eb"/>` +
      `<polygon points="260,65 285,130 355,135 300,180 320,245 260,205 200,245 220,180 165,135 235,130" fill="${yellow}" stroke="#dba135" stroke-width="4"/>` +
      `<circle cx="170" cy="85" r="8" fill="${red}"/><circle cx="350" cy="85" r="10" fill="${red}"/>`;

    if (name==='music-notes') return `<circle cx="260" cy="165" r="110" fill="#f3effa"/>` +
      `<ellipse cx="205" cy="210" rx="28" ry="20" transform="rotate(-20 205 210)" fill="${purple}"/>` +
      `<ellipse cx="305" cy="180" rx="28" ry="20" transform="rotate(-20 305 180)" fill="${purple}"/>` +
      path('M228 200v-95l100-25v95m-100-65l100-25', purple, 9) +
      `<path d="M145 130q25-20 40 5" fill="none" stroke="${blue}" stroke-width="5" stroke-linecap="round"/>`;

    if (name==='book-reading') return `<rect x="75" y="240" width="370" height="50" rx="10" fill="#ddcfbe"/>` +
      `<path d="M120 210q70-20 140 0 70-20 140 0v-95q-70-20-140 0-70-20-140 0Z" fill="#fffef9" stroke="#b8acc7" stroke-width="5"/>` +
      `<path d="M260 115v95" stroke="#8d7ea7" stroke-width="6"/>` +
      path('M150 145h65m-65 25h65m85-25h65m-65 25h65', '#d4cae1', 5);

    if (name==='sport-running') return `<path d="M80 280h360" stroke="#cfc7e0" stroke-width="8" stroke-linecap="round"/>` +
      torso(240,110,blue) + face(255,95) +
      path('M220 220l-45 40-30-20m105-20l40 30 40 10', '#4e5b7c', 16) +
      path('M210 160l-35-30-25 15m95-20l35 25 30-15', skin, 13);

    if (name==='hiking-trail') return `<polygon points="70,270 200,100 310,270" fill="#a4b89e"/>` +
      `<polygon points="230,270 330,120 440,270" fill="#88a181"/>` +
      `<polygon points="200,100 170,140 230,140" fill="#fff"/>` +
      path('M140 270q80-50 130-15t110-35', '#cfba9f', 12);

    if (name==='dog') return `<ellipse cx="260" cy="205" rx="75" ry="55" fill="#c79b76"/>` +
      `<ellipse cx="205" cy="135" rx="40" ry="35" fill="#c79b76"/>` +
      `<polygon points="180,95 200,135 170,135" fill="#996f4b"/>` +
      `<circle cx="195" cy="130" r="5" fill="${ink}"/><ellipse cx="175" cy="145" rx="8" ry="6" fill="${ink}"/>` +
      path('M230 255v35m45-35v35m50-65q30-20 40-50', '#c79b76', 14);

    if (name==='cat') return `<ellipse cx="260" cy="205" rx="65" ry="50" fill="#aba5bf"/>` +
      `<circle cx="215" cy="140" r="35" fill="#aba5bf"/>` +
      `<polygon points="190,110 205,125 185,135" fill="#807899"/><polygon points="225,110 240,125 220,135" fill="#807899"/>` +
      `<circle cx="205" cy="138" r="4" fill="${ink}"/><circle cx="225" cy="138" r="4" fill="${ink}"/>` +
      path('M175 145h20m-20 8h20m45-8h20m-20 8h20', '#fff', 3) +
      path('M320 220q35-25 10-60', '#aba5bf', 12);

    if (name==='cup-coffee') return `<ellipse cx="260" cy="255" rx="120" ry="25" fill="#d9d0c3"/>` +
      `<path d="M190 150h140v65q0 35-70 35t-70-35Z" fill="#fff" stroke="#baa89b" stroke-width="5"/>` +
      `<path d="M330 165q30 0 25 30t-25 20" fill="none" stroke="#baa89b" stroke-width="7"/>` +
      path('M235 125q-8-20 0-35m25 35q-8-20 0-35m25 35q-8-20 0-35', '#c29d84', 4);

    if (name==='cup-tea') return `<ellipse cx="260" cy="255" rx="120" ry="25" fill="#cde2d9"/>` +
      `<path d="M190 150h140v65q0 35-70 35t-70-35Z" fill="#e7f4ee" stroke="#79a997" stroke-width="5"/>` +
      `<rect x="245" y="170" width="25" height="35" rx="4" fill="#d7ba9d"/>` +
      path('M255 170v-35q0-10 15-10h15', '#b29173', 3) +
      `<rect x="280" y="120" width="16" height="20" rx="3" fill="#e88288"/>`;

    if (name==='chess-board') return `<rect x="120" y="80" width="280" height="190" rx="12" fill="#d5bfa7" stroke="#8d6e52" stroke-width="8"/>` +
      `<g transform="translate(140,95)">${Array.from({length:4},(_,r)=>Array.from({length:6},(_,c)=>`<rect x="${c*40}" y="${r*40}" width="40" height="40" fill="${(r+c)%2===0?'#fff9f2':'#795548'}"/>`).join('')).join('')}</g>` +
      `<path d="M220 220v-45h15l10-15h20l10 15h15v45Z" fill="#2d2926"/>`;

    if (name==='guitar') return `<ellipse cx="230" cy="210" rx="65" ry="50" fill="#cf8e5b"/>` +
      `<ellipse cx="280" cy="170" rx="45" ry="38" fill="#cf8e5b"/>` +
      `<circle cx="260" cy="185" r="20" fill="#4d2f1d"/>` +
      path('M295 155l95-75', '#a56738', 14) +
      path('M220 210l170-130', '#f4ede6', 3);

    if (name==='symbol-at') return `<circle cx="260" cy="165" r="105" fill="#edf4fb"/>` +
      `<path d="M295 145a38 38 0 1 0-15 32v-32a18 18 0 1 1-18-18 18 18 0 0 1 18 18c0 18 12 25 24 15 16-14 16-44-6-64-28-26-72-18-92 14-22 36-10 84 26 102 38 18 84 4 100-24" fill="none" stroke="${blue}" stroke-width="12" stroke-linecap="round"/>`;

    if (name==='symbol-dot') return `<circle cx="260" cy="165" r="105" fill="#f5effa"/>` +
      `<circle cx="260" cy="205" r="30" fill="${purple}"/>` +
      path('M260 85v45', purple, 14);

    if (name==='symbol-dash') return `<rect x="110" y="115" width="90" height="90" rx="14" fill="#e8e1f5"/>` +
      `<rect x="320" y="115" width="90" height="90" rx="14" fill="#e8e1f5"/>` +
      path('M225 160h70', purple, 18);

    if (name==='symbol-underscore') return `<rect x="110" y="100" width="80" height="100" rx="12" fill="#e2edf5"/>` +
      `<rect x="330" y="100" width="80" height="100" rx="12" fill="#e2edf5"/>` +
      path('M210 215h100', blue, 18);

    if (name==='phone-call') return `<rect x="190" y="70" width="140" height="210" rx="24" fill="#fff" stroke="#504868" stroke-width="7"/>` +
      `<rect x="205" y="95" width="110" height="150" rx="10" fill="#eaf0f8"/>` +
      `<circle cx="260" cy="262" r="7" fill="#504868"/>` +
      path('M350 140q35 25 0 60m20-80q55 45 0 100', green, 6);

    if (name==='house-home') return `<polygon points="260,75 130,165 390,165" fill="#d26666"/>` +
      `<rect x="160" y="165" width="200" height="110" fill="#faeee3" stroke="#bfaa99" stroke-width="4"/>` +
      `<rect x="235" y="195" width="50" height="80" rx="6" fill="#8d6e53"/>` +
      `<circle cx="245" cy="235" r="4" fill="#ffd78a"/><rect x="320" y="100" width="30" height="50" fill="#996055"/>`;

    if (name==='city-living') return `<rect x="120" y="90" width="110" height="195" fill="#869db5"/>` +
      `<rect x="250" y="60" width="150" height="225" fill="#5b6e8a"/>` +
      Array.from({length:4},(_,r)=>Array.from({length:2},(_,c)=>`<rect x="${140+c*45}" y="${110+r*40}" width="25" height="25" rx="4" fill="#ffd98a"/>`).join('')).join('') +
      Array.from({length:5},(_,r)=>Array.from({length:3},(_,c)=>`<rect x="${270+c*40}" y="${80+r*38}" width="24" height="24" rx="4" fill="#ffd98a"/>`).join('')).join('');

    if (name==='num-70') return `<circle cx="260" cy="165" r="105" fill="#fef6eb"/>` +
      `<rect x="160" y="110" width="90" height="110" rx="14" fill="${yellow}"/><rect x="270" y="110" width="90" height="110" rx="14" fill="${yellow}"/>` +
      path('M180 135h50l-30 65m85-65h45v65', '#fff', 9);

    if (name==='num-80') return `<circle cx="260" cy="165" r="105" fill="#eff5fb"/>` +
      `<g transform="translate(160,110)">` +
      `<circle cx="50" cy="25" r="22" fill="none" stroke="${blue}" stroke-width="9"/>` +
      `<circle cx="50" cy="75" r="28" fill="none" stroke="${blue}" stroke-width="9"/>` +
      `<ellipse cx="145" cy="50" rx="25" ry="42" fill="none" stroke="${blue}" stroke-width="9"/>` + `</g>`;

    if (name==='num-90') return `<circle cx="260" cy="165" r="105" fill="#f5f0fa"/>` +
      `<g transform="translate(160,110)">` +
      `<circle cx="45" cy="30" r="25" fill="none" stroke="${purple}" stroke-width="9"/>` +
      path('M70 30v55q0 20-30 20', purple, 9) +
      `<ellipse cx="145" cy="50" rx="25" ry="42" fill="none" stroke="${purple}" stroke-width="9"/>` + `</g>`;

    if (name==='num-100') return `<circle cx="260" cy="165" r="105" fill="#edf7f1"/>` +
      path('M165 140l25-25v80m55-40a25 35 0 1 0 50 0 25 35 0 1 0-50 0m65 0a25 35 0 1 0 50 0 25 35 0 1 0-50 0', green, 9);

    if (name==='num-1000') return `<circle cx="260" cy="165" r="105" fill="#fdf0f1"/>` +
      `<g transform="scale(0.85) translate(65,30)">` +
      path('M135 145l20-20v70m45-35a20 30 0 1 0 40 0 20 30 0 1 0-40 0m50 0a20 30 0 1 0 40 0 20 30 0 1 0-40 0m50 0a20 30 0 1 0 40 0 20 30 0 1 0-40 0', red, 8) +
      `</g>`;

    if (name==='question-who') return torso(260,130,purple) + face(260,115) +
      `<circle cx="345" cy="115" r="38" fill="none" stroke="${yellow}" stroke-width="9"/>` +
      path('M372 142l28 28', yellow, 12);

    if (name==='question-what') return `<rect x="175" y="125" width="170" height="135" rx="16" fill="#fff" stroke="${blue}" stroke-width="6"/>` +
      `<path d="M175 175h170M260 125v135" stroke="${red}" stroke-width="12"/>` +
      path('M245 90q0-25 25-25t25 20q0 20-25 25v15m0 20h.01', purple, 8);

    if (name==='map-pin') return `<polygon points="120,240 210,210 310,240 400,210 400,120 310,150 210,120 120,150" fill="#f6eedf" stroke="#c9bba6" stroke-width="4"/>` +
      `<path d="M260 190q-35-45-35-70a35 35 0 1 1 70 0q0 25-35 70Z" fill="${red}"/>` +
      `<circle cx="260" cy="120" r="14" fill="#fff"/>`;

    if (name==='calendar-when') return `<rect x="160" y="70" width="200" height="210" rx="18" fill="#fff" stroke="#cfc7db" stroke-width="6"/>` +
      `<rect x="160" y="70" width="200" height="55" rx="6" fill="${blue}"/>` +
      `<circle cx="260" cy="190" r="32" fill="none" stroke="${red}" stroke-width="8"/>` +
      path('M200 155h30m60 0h30m-120 70h30m60 0h30', '#c8c2d6', 6);

    if (name==='question-how') return `<circle cx="225" cy="165" r="55" fill="none" stroke="${blue}" stroke-width="14"/>` +
      `<circle cx="315" cy="140" r="35" fill="none" stroke="${yellow}" stroke-width="12"/>` +
      path('M225 150v30m-15-15h30', blue, 6);

    if (name==='price-tag') return `<polygon points="170,105 285,105 355,175 240,290 125,220" fill="#fff" stroke="${green}" stroke-width="6"/>` +
      `<circle cx="205" cy="145" r="14" fill="${green}"/>` +
      path('M245 185l45 45', green, 8);

    if (name==='question-why') return torso(260,130,green) + face(260,115) +
      `<g transform="translate(320,60)"><path d="M0 25q0-20 20-20t20 18q0 18-20 22v12m0 16h.01" fill="none" stroke="${purple}" stroke-width="7" stroke-linecap="round"/></g>`;

    if (name==='library-shelves') return `<rect x="100" y="60" width="320" height="235" rx="10" fill="#c7b198" stroke="#8d6e53" stroke-width="7"/>` +
      `<path d="M100 135h320M100 210h320" stroke="#8d6e53" stroke-width="9"/>` +
      Array.from({length:8},(_,i)=>`<rect x="${125+i*34}" y="${70}" width="22" height="65" rx="3" fill="${[red,blue,green,purple][i%4]}"/>`).join('') +
      Array.from({length:8},(_,i)=>`<rect x="${125+i*34}" y="${145}" width="22" height="65" rx="3" fill="${[yellow,purple,blue,green][i%4]}"/>`).join('');

    if (name==='neighborhood-street') return `<rect x="80" y="110" width="140" height="150" fill="#e7dee9"/>` +
      `<path d="M70 110l80-45 80 45Z" fill="${purple}"/>` +
      `<rect x="250" y="125" width="190" height="135" fill="#f4ebd9"/>` +
      `<path d="M245 125h200l-20 30H265Z" fill="${red}"/>` +
      path('M50 270h420', '#c5bccf', 10) + `<circle cx="380" cy="200" r="35" fill="${green}"/>`;

    if (name==='city-hall') return `<rect x="110" y="120" width="300" height="145" fill="#fff" stroke="#cfc7d8" stroke-width="5"/>` +
      `<polygon points="260,50 90,120 430,120" fill="#a497b7"/>` +
      Array.from({length:4},(_,i)=>`<rect x="${150+i*60}" y="${120}" width="22" height="145" fill="#e7e2ee"/>`).join('') +
      `<circle cx="260" cy="95" r="12" fill="#ffd78a"/>`;

    if (name==='speech-bubbles') return `<g transform="translate(120,70)">` +
      `<path d="M0 40q0-40 60-40h80q60 0 60 40v30q0 40-60 40h-40l-30 25v-25H60q-60 0-60-40Z" fill="${purple}"/>` +
      `<circle cx="65" cy="55" r="7" fill="#fff"/><circle cx="100" cy="55" r="7" fill="#fff"/><circle cx="135" cy="55" r="7" fill="#fff"/></g>` +
      `<g transform="translate(220,135)">` +
      `<path d="M0 35q0-35 50-35h70q50 0 50 35v25q0 35-50 35h-30l-25 20v-20H50q-50 0-50-35Z" fill="${blue}"/>` +
      `<circle cx="55" cy="45" r="6" fill="#fff"/><circle cx="85" cy="45" r="6" fill="#fff"/><circle cx="115" cy="45" r="6" fill="#fff"/></g>`;

    if (name==='casual-shrug') return torso(260,130,purple) + face(260,115) +
      path('M195 160l-35-15-20 25m140-10l35-15 20 25', skin, 13) +
      path('M140 170q15-10 25 5m170-5q15-10 25 5', yellow, 4);

    if (name==='daily-train') return `<rect x="90" y="115" width="340" height="120" rx="20" fill="#4d6f8f"/>` +
      `<path d="M90 190h340" stroke="#f6ce7c" stroke-width="12"/>` +
      Array.from({length:4},(_,i)=>`<rect x="${120+i*75}" y="${135}" width="50" height="40" rx="8" fill="#eaf2f8"/>`).join('') +
      path('M60 270h400m-360-15l15 30m70-30l15 30m70-30l15 30m70-30l15 30', '#8b8499', 7);

    if (name==='family-parents') return torso(200,120,blue) + face(200,105) + torso(320,120,purple) + face(320,105) +
      path('M200 170l60 20m60-20l-60 20', skin, 12);

    if (name==='family-father') return torso(260,115,blue) + face(260,100) + path('M245 225l-20 65m50-65l20 65', '#49526e', 16);
    if (name==='family-mother') return torso(260,115,purple) + face(260,100) + path('M235 155q25 35 50 0', '#ffd78a', 5);
    if (name==='family-brother') return torso(260,125,green) + face(260,110) + `<circle cx="260" cy="110" r="3" fill="${ink}"/>`;
    if (name==='family-sister') return torso(260,125,'#d67b86') + face(260,110) + path('M210 110q50-40 100 0', ink, 12);
    if (name==='family-children') return torso(200,140,green) + face(200,125) + torso(310,140,'#e4929d') + face(310,125) + path('M200 185l55 10m55-10l-55 10', skin, 10);
    if (name==='family-uncle') return torso(260,115,'#708a73') + face(260,100) + `<circle cx="245" cy="105" r="9" fill="none" stroke="${ink}" stroke-width="3"/><circle cx="275" cy="105" r="9" fill="none" stroke="${ink}" stroke-width="3"/><path d="M254 105h12" stroke="${ink}" stroke-width="3"/>`;
    if (name==='family-aunt') return torso(260,115,'#b784ab') + face(260,100) + `<path d="M230 145q30 25 60 0" fill="none" stroke="#ffe099" stroke-width="8"/>`;

    if (name==='prof-teacher') return `<rect x="80" y="60" width="220" height="150" rx="8" fill="#3f5e51" stroke="#87674e" stroke-width="8"/>` +
      torso(360,115,purple) + face(360,100) + path('M315 160l-55-30', skin, 12) + `<rect x="250" y="125" width="12" height="6" rx="2" fill="#fff"/>`;

    if (name==='prof-doctor') return torso(260,115,'#fff') + face(260,100) +
      path('M230 140q30 50 60 0m-40 25l-10 40m30-40l10 40', blue, 6) + `<circle cx="240" cy="210" r="7" fill="${blue}"/>`;

    if (name==='prof-lawyer') return torso(260,115,'#292534') + face(260,100) +
      `<rect x="235" y="145" width="50" height="60" rx="4" fill="#fff"/>` +
      path('M220 170l-35 30m115-30l35 30', skin, 12);

    if (name==='prof-nurse') return torso(260,115,'#60a3bc') + face(260,100) +
      `<rect x="140" y="130" width="70" height="95" rx="6" fill="#fff" stroke="#90a2b5" stroke-width="4"/>` +
      path('M155 160h40m-40 20h40m-40 20h25', '#90a2b5', 4);

    if (name==='prof-hairdresser') return torso(260,120,purple) + face(260,105) +
      path('M185 160l-30-20m180 20l30-20', skin, 12) +
      `<circle cx="145" cy="130" r="9" fill="none" stroke="${ink}" stroke-width="4"/><circle cx="145" cy="148" r="9" fill="none" stroke="${ink}" stroke-width="4"/>` +
      path('M150 135l30-20m-30 18l30 20', ink, 4);

    if (name==='prof-architect') return `<rect x="80" y="210" width="360" height="70" rx="10" fill="#d2c4b2"/>` +
      `<rect x="110" y="215" width="220" height="50" rx="4" fill="#6a89cc"/>` +
      torso(370,120,blue) + face(370,105) + path('M320 160l-45 55m5 0l40-25', skin, 12);

    if (name==='prof-pilot') return torso(260,125,'#1e272e') + face(260,110) +
      `<rect x="225" y="60" width="70" height="30" rx="6" fill="#1e272e"/><polygon points="215,85 305,85 295,95 225,95" fill="#f6ce7c"/>` +
      `<circle cx="260" cy="75" r="8" fill="#f6ce7c"/>`;


    // --- A1.2 & Grammar Scenes ---
    if (name==='watch-screen' || name==='mexican-film') return `<rect x="110" y="70" width="300" height="180" rx="16" fill="#1e293b" stroke="#475569" stroke-width="8"/>` +
      `<rect x="130" y="90" width="260" height="140" rx="6" fill="#38bdf8" opacity=".85"/>` +
      `<polygon points="230,130 230,190 290,160" fill="#fff"/>` +
      path('M220 250l-20 40h120l-20-40', '#475569', 10);

    if (name==='finish-flag') return `<path d="M160 60v220" stroke="#718096" stroke-width="12" stroke-linecap="round"/>` +
      `<rect x="172" y="60" width="160" height="110" fill="#fff" stroke="#4a5568" stroke-width="4"/>` +
      `<g transform="translate(172,60)">${Array.from({length:4},(_,r)=>Array.from({length:6},(_,c)=>`<rect x="${c*26.6}" y="${r*27.5}" width="26.6" height="27.5" fill="${(r+c)%2===0?'#2d3748':'#fff'}"/>`).join('')).join('')}</g>` +
      `<circle cx="160" cy="55" r="14" fill="${yellow}"/>`;

    if (name==='choose-path') return `<path d="M260 290v-90m-80-60l80 60 80-60" fill="none" stroke="#bfa68a" stroke-width="26" stroke-linecap="round" stroke-linejoin="round"/>` +
      `<path d="M255 100v170" stroke="#7c6045" stroke-width="14" stroke-linecap="round"/>` +
      `<polygon points="260,110 140,110 120,130 140,150 260,150" fill="${blue}"/>` +
      `<polygon points="260,165 380,165 400,185 380,205 260,205" fill="${green}"/>` +
      path('M150 130h60m-20-15l20 15-20 15', '#fff', 4) +
      path('M370 185h-60m20-15l-20 15 20 15', '#fff', 4);

    if (name==='blush-face') return `<circle cx="260" cy="165" r="95" fill="#fcefe6" stroke="#e8bfa6" stroke-width="5"/>` +
      `<circle cx="215" cy="145" r="8" fill="${ink}"/><circle cx="305" cy="145" r="8" fill="${ink}"/>` +
      `<ellipse cx="195" cy="178" rx="24" ry="14" fill="#f87171" opacity=".7"/>` +
      `<ellipse cx="325" cy="178" rx="24" ry="14" fill="#f87171" opacity=".7"/>` +
      path('M225 195q35 28 70 0', '#b91c1c', 6);

    if (name==='reflect-think') return torso(260,130,purple) + face(260,115) +
      path('M290 170l-30 45 10-60', skin, 13) +
      `<ellipse cx="360" cy="70" rx="36" ry="26" fill="#fff" stroke="${blue}" stroke-width="4"/>` +
      `<circle cx="330" cy="102" r="7" fill="#fff" stroke="${blue}" stroke-width="3"/>` +
      `<circle cx="312" cy="120" r="4" fill="#fff" stroke="${blue}" stroke-width="2"/>` +
      `<circle cx="360" cy="70" r="10" fill="${yellow}"/>`;

    if (name==='exit-door') return `<rect x="180" y="65" width="160" height="215" rx="8" fill="#e2e8f0" stroke="#718096" stroke-width="8"/>` +
      `<polygon points="180,65 300,90 300,265 180,280" fill="#3b82f6"/>` +
      `<circle cx="280" cy="180" r="6" fill="${yellow}"/>` +
      path('M110 200h100m-30-25l30 25-30 25', green, 10);

    if (name==='suitcase-depart') return `<rect x="160" y="110" width="200" height="150" rx="20" fill="${blue}" stroke="#2563eb" stroke-width="6"/>` +
      `<rect x="160" y="150" width="200" height="18" fill="#1e40af"/>` +
      path('M220 110v-35q0-10 10-10h60q10 0 10 10v35', '#475569', 10) +
      `<circle cx="195" cy="265" r="14" fill="#334155"/><circle cx="325" cy="265" r="14" fill="#334155"/>` +
      path('M385 160h65m-20-20l20 20-20 20', yellow, 8);

    if (name==='sleep-zzz') return moon + `<ellipse cx="260" cy="180" rx="90" ry="70" fill="#ede9fe" stroke="${purple}" stroke-width="5"/>` +
      path('M205 175q25 15 50 0m60 0q25 15 50 0', purple, 5) +
      path('M320 90h25l-25 30h25m30-45h18l-18 20h18', '#c4b5fd', 5);

    if (name==='serve-tray') return `<ellipse cx="260" cy="235" rx="140" ry="24" fill="#cbd5e1"/>` +
      `<path d="M150 230q0-110 110-110t110 110Z" fill="#94a3b8" stroke="#64748b" stroke-width="6"/>` +
      `<circle cx="260" cy="110" r="16" fill="${yellow}"/>` +
      path('M220 90q10-25 0-45m40 45q10-25 0-45m40 45q10-25 0-45', '#94a3b8', 4);

    if (name==='feel-good') return `<circle cx="260" cy="165" r="110" fill="#fef9c3"/>` +
      torso(260,130,green) + face(260,115) +
      path('M210 170l-30-30m130 30l30-30', skin, 13) +
      `<circle cx="150" cy="90" r="10" fill="${yellow}"/><circle cx="370" cy="90" r="10" fill="${yellow}"/>` +
      path('M150 75v30M135 90h30M370 75v30M355 90h30', yellow, 4);

    if (name==='feel-tired') return `<circle cx="260" cy="165" r="110" fill="#f1f5f9"/>` +
      torso(260,135,'#94a3b8') + face(260,120,true) +
      path('M210 190l-20 40m120-40l20 40', skin, 12) +
      path('M245 75q20 15 0 30m30-30q20 15 0 30', '#94a3b8', 4);

    if (name==='near-distance') return `<rect x="110" y="140" width="80" height="90" rx="8" fill="#93c5fd"/>` +
      `<polygon points="150,90 100,140 200,140" fill="${blue}"/>` +
      `<rect x="230" y="140" width="80" height="90" rx="8" fill="#86efac"/>` +
      `<polygon points="270,90 220,140 320,140" fill="${green}"/>` +
      path('M195 190h30', green, 10) +
      path('M190 190l10-10m-10 10l10 10m35-10l-10-10m10 10l-10 10', green, 4);

    if (name==='far-distance') return `<rect x="80" y="140" width="70" height="80" rx="8" fill="#93c5fd"/>` +
      `<polygon points="115,100 70,140 160,140" fill="${blue}"/>` +
      `<rect x="370" y="140" width="70" height="80" rx="8" fill="#fca5a5"/>` +
      `<polygon points="405,100 360,140 450,140" fill="${red}"/>` +
      path('M165 185q50-40 100 0t100 0', '#94a3b8', 6);

    if (name==='transit-bus') return `<rect x="100" y="90" width="320" height="140" rx="24" fill="${blue}" stroke="#1e40af" stroke-width="6"/>` +
      `<rect x="120" y="115" width="60" height="50" rx="8" fill="#e0f2fe"/>` +
      `<rect x="195" y="115" width="60" height="50" rx="8" fill="#e0f2fe"/>` +
      `<rect x="270" y="115" width="60" height="50" rx="8" fill="#e0f2fe"/>` +
      `<rect x="345" y="115" width="55" height="90" rx="8" fill="#e0f2fe"/>` +
      `<circle cx="170" cy="235" r="28" fill="#1e293b"/><circle cx="170" cy="235" r="12" fill="#94a3b8"/>` +
      `<circle cx="340" cy="235" r="28" fill="#1e293b"/><circle cx="340" cy="235" r="12" fill="#94a3b8"/>` +
      `<circle cx="115" cy="190" r="10" fill="${yellow}"/>`;

    if (name==='transit-metro') return `<path d="M120 270v-140q0-80 140-80t140 80v140Z" fill="#334155"/>` +
      `<rect x="160" y="110" width="200" height="150" rx="18" fill="#f8fafc" stroke="#0ea5e9" stroke-width="7"/>` +
      `<rect x="180" y="130" width="160" height="55" rx="8" fill="#0284c7"/>` +
      `<circle cx="205" cy="225" r="12" fill="${yellow}"/><circle cx="315" cy="225" r="12" fill="${yellow}"/>` +
      path('M130 270h260', '#94a3b8', 8);

    if (name==='transit-tram') return `<rect x="120" y="100" width="280" height="135" rx="18" fill="#10b981" stroke="#047857" stroke-width="6"/>` +
      `<path d="M260 100l25-50h-50" fill="none" stroke="#334155" stroke-width="8" stroke-linecap="round"/>` +
      `<path d="M100 45h320" stroke="#64748b" stroke-width="5"/>` +
      Array.from({length:4},(_,i)=>`<rect x="${145+i*60}" y="${120}" width="45" height="50" rx="6" fill="#ecfdf5"/>`).join('') +
      `<circle cx="190" cy="240" r="22" fill="#1f2937"/><circle cx="330" cy="240" r="22" fill="#1f2937"/>` +
      path('M80 265h360', '#475569', 6);

    if (name==='transit-bike') return `<circle cx="160" cy="210" r="50" fill="none" stroke="#2563eb" stroke-width="10"/>` +
      `<circle cx="360" cy="210" r="50" fill="none" stroke="#2563eb" stroke-width="10"/>` +
      path('M160 210l80-70h80l40 70m-120-70l60 70H160m140-100v30', '#1e40af', 9) +
      path('M280 110h40m-170 30h40', '#475569', 10);

    if (name==='transit-walk') return `<g transform="translate(140,80)">` +
      `<ellipse cx="60" cy="90" rx="28" ry="48" transform="rotate(15 60 90)" fill="#475569"/>` +
      `<ellipse cx="60" cy="155" rx="20" ry="24" transform="rotate(15 60 155)" fill="#475569"/>` +
      `<ellipse cx="160" cy="40" rx="28" ry="48" transform="rotate(15 160 40)" fill="#3b82f6"/>` +
      `<ellipse cx="160" cy="105" rx="20" ry="24" transform="rotate(15 160 105)" fill="#3b82f6"/>` +
      `</g>`;

    if (name==='board-bus') return `<rect x="220" y="60" width="200" height="210" rx="16" fill="${blue}"/>` +
      `<rect x="250" y="100" width="80" height="150" fill="#f8fafc"/>` +
      path('M220 250h110', '#334155', 10) +
      torso(160,150,green) + face(160,135) +
      path('M170 230l30 20 20-30', skin, 13);

    if (name==='alight-bus') return `<rect x="100" y="60" width="200" height="210" rx="16" fill="${blue}"/>` +
      `<rect x="190" y="100" width="80" height="150" fill="#f8fafc"/>` +
      path('M190 250h110', '#334155', 10) +
      torso(320,150,purple) + face(320,135) +
      path('M310 230l20 30 20-10', skin, 13);

    if (name==='turn-left') return `<circle cx="260" cy="165" r="105" fill="#eff6ff"/>` +
      path('M310 250v-70q0-50-50-50h-70', blue, 18) +
      `<polygon points="160,130 205,100 205,160" fill="${blue}"/>`;

    if (name==='turn-right') return `<circle cx="260" cy="165" r="105" fill="#eff6ff"/>` +
      path('M210 250v-70q0-50 50-50h70', blue, 18) +
      `<polygon points="360,130 315,100 315,160" fill="${blue}"/>`;

    if (name==='straight-ahead') return `<circle cx="260" cy="165" r="105" fill="#f0fdf4"/>` +
      path('M260 260V110', green, 18) +
      `<polygon points="260,75 225,120 295,120" fill="${green}"/>`;

    if (name==='cross-street') return `<rect x="100" y="60" width="320" height="210" rx="14" fill="#334155"/>` +
      Array.from({length:5},(_,i)=>`<rect x="${140+i*52}" y="${80}" width="30" height="170" rx="4" fill="#fff"/>`).join('') +
      path('M70 165h380', '#fbbf24', 6);

    if (name==='end-street') return `<polygon points="160,270 240,110 280,110 360,270" fill="#cbd5e1"/>` +
      path('M260 270v-160', '#f59e0b', 6) +
      `<circle cx="260" cy="100" r="32" fill="${red}"/>` +
      `<rect x="238" y="94" width="44" height="12" fill="#fff"/>`;

    if (name==='cloth-shirt') return `<path d="M200 90l60 20 60-20 40 45-25 35-25-15v120H210V155l-25 15-25-35Z" fill="#60a5fa" stroke="#2563eb" stroke-width="5"/>` +
      `<polygon points="260,110 220,90 260,140" fill="#fff"/>` +
      `<polygon points="260,110 300,90 260,140" fill="#fff"/>` +
      `<circle cx="260" cy="170" r="4" fill="#1e3a8a"/><circle cx="260" cy="205" r="4" fill="#1e3a8a"/><circle cx="260" cy="240" r="4" fill="#1e3a8a"/>`;

    if (name==='cloth-pants') return `<path d="M190 80h140l15 190-50 5-35-110-35 110-50-5Z" fill="#1e3a8a" stroke="#172554" stroke-width="5"/>` +
      `<rect x="190" y="80" width="140" height="20" fill="#3b82f6"/>` +
      `<circle cx="260" cy="90" r="5" fill="#facc15"/>`;

    if (name==='cloth-dress') return `<path d="M225 80h70l20 50 45 140H160l45-140Z" fill="${red}" stroke="#991b1b" stroke-width="5"/>` +
      `<path d="M225 80q35 25 70 0" fill="#fee2e2"/>` +
      `<rect x="210" y="145" width="100" height="14" rx="4" fill="#7f1d1d"/>`;

    if (name==='cloth-skirt') return `<polygon points="215,100 305,100 345,260 175,260" fill="#a855f7" stroke="#7e22ce" stroke-width="5"/>` +
      `<rect x="215" y="100" width="90" height="18" fill="#6b21a8"/>` +
      path('M225 118l-15 142m50-142v142m50-142l15 142', '#d8b4fe', 3);

    if (name==='cloth-sweater') return `<path d="M190 90h140l50 50-30 40-30-20v110H200V160l-30 20-30-40Z" fill="#0d9488" stroke="#115e59" stroke-width="6"/>` +
      `<path d="M225 90q35 20 70 0" fill="#ccfbf1"/>` +
      path('M200 240h120', '#14b8a6', 6);

    if (name==='cloth-coat') return `<path d="M180 80h160l40 60-30 40-20-15v115H190V165l-20 15-30-40Z" fill="#78350f" stroke="#451a03" stroke-width="6"/>` +
      `<polygon points="260,80 220,135 260,190 300,135" fill="#d97706"/>` +
      `<circle cx="280" cy="180" r="5" fill="#451a03"/><circle cx="280" cy="220" r="5" fill="#451a03"/>`;

    if (name==='cloth-sneakers') return `<g transform="translate(110,120)">` +
      `<path d="M40 70q40-40 90-10l50 10v40H30l10-40Z" fill="#ef4444"/>` +
      `<rect x="20" y="110" width="170" height="20" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="4"/>` +
      path('M100 65l20 15m-15-20l20 15', '#fff', 4) +
      `</g>`;

    if (name==='cloth-winter') return `<path d="M210 110q50-50 100 0v35H210Z" fill="${purple}"/>` +
      `<circle cx="260" cy="75" r="14" fill="${yellow}"/>` +
      `<rect x="200" y="145" width="120" height="25" rx="8" fill="#a78bfa"/>` +
      `<path d="M160 190h200q20 30-10 40H170q-30-10-10-40Z" fill="${red}"/>` +
      `<rect x="270" y="215" width="45" height="60" rx="4" fill="${red}"/>`;

    if (name==='cloth-mittens') return `<g transform="translate(150,90)">` +
      `<path d="M30 90q-30-40 0-70t50 20l10 50Z" fill="#f97316"/>` +
      `<rect x="20" y="90" width="70" height="25" rx="8" fill="#fdba74"/>` +
      `<path d="M170 90q30-40 0-70t-50 20l-10 50Z" fill="#f97316"/>` +
      `<rect x="110" y="90" width="70" height="25" rx="8" fill="#fdba74"/>` +
      path('M55 115q45 50 90 0', '#fed7aa', 4) +
      `</g>`;

    if (name==='action-now') return `<circle cx="260" cy="165" r="95" fill="#eff6ff"/>` +
      `<circle cx="260" cy="165" r="60" fill="none" stroke="${blue}" stroke-width="12" stroke-dasharray="25 15"/>` +
      `<circle cx="260" cy="165" r="22" fill="${blue}"/>`;

    if (name==='action-just-done') return `<circle cx="260" cy="165" r="95" fill="#fef3c7"/>` +
      `<circle cx="260" cy="165" r="70" fill="none" stroke="${yellow}" stroke-width="10"/>` +
      path('M260 165V110M260 165l-40 20', '#b45309', 7) +
      path('M220 100a65 65 0 0 0-50 50', red, 6) +
      `<polygon points="160,150 175,135 180,160" fill="${red}"/>`;

    if (name==='action-future') return `<circle cx="260" cy="165" r="95" fill="#f0fdf4"/>` +
      path('M170 165h150', green, 14) +
      `<polygon points="340,165 295,135 295,195" fill="${green}"/>` +
      `<polygon points="370,110 376,125 392,125 380,135 384,150 370,140 356,150 360,135 348,125 364,125" fill="${yellow}"/>`;

    if (name==='routine-wake') return morningSun +
      `<circle cx="260" cy="190" r="65" fill="#fff" stroke="${red}" stroke-width="8"/>` +
      path('M260 190v-40m0 40l30 20', red, 6) +
      path('M205 130l-20-20m130 20l20-20', red, 8);

    if (name==='routine-rise') return mattress +
      torso(280,120,purple) + face(280,105) +
      path('M260 240l25 30 15 25m25-55l20 30 15 25', '#475569', 14) +
      `<ellipse cx="325" cy="298" rx="16" ry="6" fill="#f59e0b"/><ellipse cx="360" cy="298" rx="16" ry="6" fill="#f59e0b"/>`;

    if (name==='chore-groceries') return `<polygon points="150,150 370,150 340,265 180,265" fill="#d97706" stroke="#92400e" stroke-width="6"/>` +
      path('M170 150q90-90 180 0', '#78350f', 8) +
      `<rect x="220" y="90" width="30" height="70" rx="10" transform="rotate(-15 220 90)" fill="#fde68a" stroke="#d97706" stroke-width="3"/>` +
      `<rect x="280" y="80" width="24" height="80" rx="4" fill="#22c55e"/>`;

    if (name==='chore-cooking') return `<ellipse cx="260" cy="220" rx="110" ry="35" fill="#475569"/>` +
      `<rect x="360" y="210" width="90" height="16" rx="8" fill="#1e293b"/>` +
      `<path d="M180 180q30-50 40 0t40 0" fill="none" stroke="${red}" stroke-width="5"/>` +
      `<circle cx="240" cy="215" r="14" fill="${yellow}"/><circle cx="280" cy="215" r="12" fill="${green}"/>`;

    if (name==='chore-vacuum') return `<rect x="150" y="180" width="120" height="80" rx="30" fill="${blue}"/>` +
      `<circle cx="180" cy="255" r="18" fill="#1e293b"/><circle cx="240" cy="255" r="18" fill="#1e293b"/>` +
      path('M270 200q70-40 70 40v30', '#64748b', 10) +
      `<rect x="320" y="265" width="60" height="15" rx="4" fill="#334155"/>`;

    if (name==='chore-laundry') return `<rect x="170" y="80" width="180" height="205" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="7"/>` +
      `<circle cx="260" cy="190" r="55" fill="#60a5fa" stroke="#2563eb" stroke-width="6"/>` +
      `<circle cx="260" cy="190" r="38" fill="#93c5fd"/>` +
      `<circle cx="205" cy="110" r="10" fill="#3b82f6"/>` +
      path('M245 180q15 20 30 0', '#fff', 6);

    if (name==='chore-dishes') return `<rect x="100" y="220" width="320" height="60" rx="10" fill="#94a3b8"/>` +
      `<ellipse cx="220" cy="210" rx="55" ry="20" fill="#fff" stroke="#cbd5e1" stroke-width="4"/>` +
      path('M300 220v-70q0-20-20-20h-20', '#64748b', 10) +
      path('M260 130v30', '#38bdf8', 4) +
      `<circle cx="220" cy="190" r="8" fill="#e0f2fe"/><circle cx="240" cy="180" r="6" fill="#e0f2fe"/>`;

    if (name==='struggle-task') return `<polygon points="100,270 420,270 420,150" fill="#e2e8f0"/>` +
      `<rect x="230" y="150" width="80" height="80" rx="8" transform="rotate(-18 270 190)" fill="#64748b"/>` +
      torso(190,180,red) + face(190,165) + path('M210 210l30-20', skin, 12);

    if (name==='invite-ask') return torso(220,130,blue) + face(220,115) +
      path('M250 170l50-20 20 20', skin, 12) +
      `<path d="M320 80h80q20 0 20 20v30q0 20-20 20h-50l-20 20v-20q-10 0-10-20V100q0-20 20-20Z" fill="${yellow}"/>` +
      path('M355 105q0-10 10-10t10 10q0 10-10 15v10m0 10h.01', ink, 4);

    if (name==='invite-accept') return `<circle cx="260" cy="165" r="105" fill="#f0fdf4"/>` +
      `<circle cx="260" cy="165" r="75" fill="${green}"/>` +
      path('M225 165l25 25 50-50', '#fff', 12);

    if (name==='invite-decline') return `<circle cx="260" cy="165" r="105" fill="#fef2f2"/>` +
      `<circle cx="260" cy="165" r="75" fill="${red}"/>` +
      path('M230 135l60 60m0-60l-60 60', '#fff', 12);

    if (name==='meetup-friends') return torso(180,130,purple) + face(180,115) +
      torso(340,130,green) + face(340,115) +
      path('M205 170l55-10m75 10l-55-10', skin, 12) +
      `<path d="M260 60v220" stroke="#64748b" stroke-width="8"/>` +
      `<circle cx="260" cy="90" r="28" fill="#fff" stroke="#64748b" stroke-width="6"/>` +
      path('M260 90v-16m0 16l10 8', '#64748b', 4);

    if (name==='market-vendor') return `<polygon points="120,110 400,110 380,60 140,60" fill="${red}"/>` +
      `<rect x="140" y="110" width="240" height="15" fill="#facc15"/>` +
      torso(260,140,blue) + face(260,125) +
      `<rect x="140" y="210" width="240" height="60" fill="#b45309"/>`;

    if (name==='market-tomatoes') return `<rect x="130" y="140" width="260" height="120" rx="8" fill="#b45309"/>` +
      Array.from({length:3},(_,i)=>`<circle cx="${180+i*80}" cy="${180}" r="32" fill="${red}"/><ellipse cx="${180+i*80}" cy="${155}" rx="10" ry="4" fill="${green}"/>`).join('') +
      Array.from({length:2},(_,i)=>`<circle cx="${220+i*80}" cy="${225}" r="32" fill="${red}"/><ellipse cx="${220+i*80}" cy="${200}" rx="10" ry="4" fill="${green}"/>`).join('');

    if (name==='market-scale') return `<path d="M260 80v170M180 250h160" stroke="#475569" stroke-width="10" stroke-linecap="round"/>` +
      path('M150 110l110-20 110 20', '#475569', 8) +
      path('M150 110l-30 60h60Z', '#94a3b8', 4) +
      path('M370 130l-30 60h60Z', '#94a3b8', 4);

    if (name==='market-lettuce') return `<circle cx="260" cy="175" r="85" fill="#86efac"/>` +
      `<ellipse cx="260" cy="175" rx="65" ry="75" fill="#4ade80"/>` +
      `<ellipse cx="260" cy="185" rx="45" ry="55" fill="#22c55e"/>` +
      `<ellipse cx="260" cy="195" rx="25" ry="35" fill="#16a34a"/>`;

    if (name==='market-price') return `<rect x="170" y="70" width="180" height="140" rx="10" fill="#1e293b" stroke="#b45309" stroke-width="10"/>` +
      `<path d="M260 210v70" stroke="#b45309" stroke-width="12" stroke-linecap="round"/>` +
      `<circle cx="260" cy="140" r="30" fill="none" stroke="#fff" stroke-width="6"/>` +
      path('M245 130h30m-30 20h30', '#fff', 6);

    if (name==='market-bag') return `<path d="M170 140h180l-20 130H190Z" fill="#d97706" stroke="#92400e" stroke-width="6"/>` +
      path('M210 140v-40q0-20 25-20h50q25 0 25 20v40', '#78350f', 8) +
      `<rect x="235" y="60" width="20" height="90" rx="8" transform="rotate(-15 235 60)" fill="#fde68a"/>` +
      `<ellipse cx="285" cy="115" rx="25" ry="18" fill="${green}"/>`;

    if (name==='market-coins') return `<rect x="230" y="110" width="140" height="85" rx="8" fill="#86efac" stroke="#16a34a" stroke-width="5"/>` +
      `<circle cx="300" cy="152" r="18" fill="none" stroke="#16a34a" stroke-width="5"/>` +
      `<ellipse cx="180" cy="195" rx="35" ry="14" fill="#fbbf24" stroke="#d97706" stroke-width="4"/>` +
      `<ellipse cx="180" cy="180" rx="35" ry="14" fill="#fbbf24" stroke="#d97706" stroke-width="4"/>` +
      `<ellipse cx="180" cy="165" rx="35" ry="14" fill="#fbbf24" stroke="#d97706" stroke-width="4"/>`;

    if (name==='hand-give') return `<g transform="translate(100,100)">` +
      path('M20 70h80q20 0 40 20l30 20', skin, 16) +
      path('M280 120h-80l-40-20', skin, 16) +
      `<circle cx="155" cy="75" r="18" fill="${yellow}" stroke="#d97706" stroke-width="4"/>` +
      `</g>`;

    if (name==='resto-book') return `<path d="M260 210v70" stroke="#78350f" stroke-width="14" stroke-linecap="round"/>` +
      `<rect x="140" y="80" width="240" height="140" rx="10" fill="#f8fafc" stroke="#92400e" stroke-width="8"/>` +
      `<path d="M260 80v140" stroke="#92400e" stroke-width="6"/>` +
      `<rect x="165" y="110" width="70" height="10" rx="4" fill="#cbd5e1"/>` +
      `<rect x="165" y="135" width="70" height="10" rx="4" fill="#cbd5e1"/>` +
      `<rect x="285" y="110" width="70" height="10" rx="4" fill="#cbd5e1"/>` +
      path('M250 80v80l10-15 10 15V80', red, 4);

    if (name==='resto-table') return `<ellipse cx="260" cy="200" rx="130" ry="40" fill="#fff" stroke="#cbd5e1" stroke-width="5"/>` +
      path('M260 240v50m-70 0h140', '#475569', 10) +
      `<ellipse cx="260" cy="180" rx="30" ry="12" fill="#e2e8f0"/>` +
      `<path d="M220 140v20q0 15 15 15h0q15 0 15-15v-20Z" fill="#fca5a5" stroke="#ef4444" stroke-width="2"/>` +
      path('M235 175v20', '#ef4444', 3);

    if (name==='resto-host') return torso(260,125,'#1e293b') + face(260,110) +
      `<polygon points="260,110 240,160 260,175 280,160" fill="#fff"/>` +
      path('M220 160l-30 30m110-30l30-20 20 20', skin, 12);

    if (name==='resto-order') return torso(260,125,'#334155') + face(260,110) +
      `<rect x="180" y="150" width="55" height="75" rx="6" fill="#f8fafc" stroke="#64748b" stroke-width="4"/>` +
      path('M250 170l-30 15', '#f59e0b', 6);

    if (name==='resto-plate') return `<circle cx="260" cy="165" r="105" fill="#f8fafc" stroke="#cbd5e1" stroke-width="8"/>` +
      `<circle cx="260" cy="165" r="75" fill="#fff" stroke="#e2e8f0" stroke-width="4"/>` +
      `<ellipse cx="230" cy="165" rx="30" ry="20" fill="#b45309"/>` +
      `<circle cx="280" cy="150" r="14" fill="#facc15"/><circle cx="285" cy="175" r="12" fill="#facc15"/>` +
      path('M250 145q10-15 20 0', green, 5);

    if (name==='resto-bill') return `<rect x="160" y="70" width="200" height="190" rx="14" fill="#451a03"/>` +
      `<rect x="180" y="90" width="160" height="150" rx="6" fill="#fff"/>` +
      Array.from({length:4},(_,i)=>`<rect x="${200}" y="${115+i*25}" width="120" height="8" rx="3" fill="#cbd5e1"/>`).join('') +
      `<circle cx="300" cy="215" r="10" fill="${yellow}"/>`;

    if (name==='gram-negation') return `<rect x="140" y="110" width="240" height="110" rx="55" fill="#cbd5e1"/>` +
      `<circle cx="195" cy="165" r="45" fill="#64748b"/>` +
      `<circle cx="260" cy="165" r="85" fill="none" stroke="${red}" stroke-width="16"/>` +
      path('M200 105l120 120', red, 16);

    if (name==='gram-prepositions') return `<circle cx="260" cy="165" r="105" fill="#eff6ff"/>` +
      `<path d="M260 80l20 50 50 20-50 20-20 50-20-50-50-20 50-20Z" fill="${blue}"/>` +
      `<circle cx="260" cy="150" r="14" fill="#fff"/>` +
      `<path d="M170 110q50-40 90-20t90 30" fill="none" stroke="${yellow}" stroke-width="6" stroke-dasharray="10 8"/>`;

    if (name==='gram-transport-verbs') return `<rect x="100" y="110" width="150" height="100" rx="16" fill="${blue}"/>` +
      `<circle cx="140" cy="210" r="16" fill="#1e293b"/><circle cx="210" cy="210" r="16" fill="#1e293b"/>` +
      `<path d="M370 190q-30-40-30-65a30 30 0 1 1 60 0q0 25-30 65Z" fill="${red}"/>` +
      `<circle cx="370" cy="125" r="12" fill="#fff"/>` +
      path('M260 160h45m-15-15l15 15-15 15', green, 8);

    if (name==='gram-sports-music') return `<circle cx="170" cy="160" r="50" fill="none" stroke="${yellow}" stroke-width="10"/>` +
      path('M140 195l-40 40', '#78350f', 12) +
      `<ellipse cx="330" cy="190" rx="45" ry="35" fill="#d97706"/>` +
      path('M345 160l45-55', '#78350f', 10);

    if (name==='gram-timeline') return path('M100 165h320', '#94a3b8', 12) +
      `<polygon points="420,165 385,145 385,185" fill="#94a3b8"/>` +
      `<circle cx="160" cy="165" r="26" fill="${blue}"/>` +
      `<circle cx="260" cy="165" r="26" fill="${yellow}"/>` +
      `<circle cx="360" cy="165" r="26" fill="${green}"/>`;

    if (name==='gram-verb-endings') return `<g transform="translate(130,90)">` +
      `<rect x="0" y="0" width="110" height="110" rx="16" fill="${purple}"/>` +
      `<rect x="120" y="0" width="110" height="110" rx="16" fill="${blue}"/>` +
      path('M45 55h20m-10-10v20m120-10h20', '#fff', 8) +
      `</g>`;

    if (name==='gram-questions') return `<path d="M120 80h260q30 0 30 30v70q0 30-30 30h-70l-40 35v-35h-150q-30 0-30-30v-70q0-30 30-30Z" fill="${purple}"/>` +
      path('M190 125q0-15 15-15t15 12q0 12-15 16v10m0 12h.01', '#fff', 6) +
      path('M250 120q0-18 18-18t18 15q0 15-18 20v12m0 14h.01', yellow, 7) +
      path('M315 125q0-15 15-15t15 12q0 12-15 16v10m0 12h.01', '#fff', 6);

    return null;
  }

  window.ParlezIllustrations = { scene };
})();
