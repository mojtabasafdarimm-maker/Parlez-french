/* Hand-authored, word-free retrieval scenes. Shared by review, grammar and Library. */
(function () {
  'use strict';
  const ink = '#423954', skin = '#edbca2', purple = '#8a7bbd';
  const path = (d, color, width = 8) => `<path d="${d}" fill="none" stroke="${color}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"/>`;
  const face = (x, y, closed = false) => `<ellipse cx="${x}" cy="${y}" rx="44" ry="51" fill="${skin}"/>
    <path d="M${x-44} ${y-8}q-5-62 47-54 43 3 40 51-24-8-34-28-18 24-53 31" fill="${ink}"/>
    ${closed ? path(`M${x-24} ${y+8}q8 7 16 0m16 0q8 7 16 0`, ink, 3) : `<circle cx="${x-16}" cy="${y+7}" r="3.5" fill="${ink}"/><circle cx="${x+16}" cy="${y+7}" r="3.5" fill="${ink}"/>`}
    ${path(`M${x-10} ${y+30}q10 7 20 0`, '#ad7079', 3)}`;
  const torso = (x, y, color = purple) => `<path d="M${x-57} ${y+137}l7-75q8-27 50-27t50 27l7 75Z" fill="${color}"/>`;
  const mattress = `<rect x="65" y="222" width="305" height="65" rx="15" fill="#c4b6df"/><path d="M68 286v23m297-23v23" stroke="#81739f" stroke-width="12"/><rect x="70" y="207" width="102" height="35" rx="13" fill="#fffdf8"/>`;
  const moon = `<path d="M421 46q-31 33 7 57-48 10-53-24-2-26 22-38 0 4 24 5" fill="#e7ba66"/>`;
  const morningSun = `<g stroke="#e4b052" stroke-width="5" stroke-linecap="round"><path d="M424 37v-12m0 81v-12m29-29h12m-82 0h12m9-23-9-9m49 49 9 9m-9-49 9-9m-49 49-9 9"/></g><circle cx="424" cy="65" r="23" fill="#f6ce7c"/>`;
  function bedroom(scene) {
    if (scene === 'wake') return morningSun + mattress + `<path d="M171 224q80-36 177 8v41H167Z" fill="${purple}"/>` + face(135,190) + `<rect x="43" y="154" width="43" height="39" rx="10" fill="#f6ce7c"/>` + path('M64 161v14l10 4m-36-24-8-9m63 9 8-9', '#b18454', 4);
    if (scene === 'rise') return morningSun + mattress + torso(292,105) + face(292,107) + path('M272 242l50 18 11 44m-29-64 52 12 22 47', '#626587', 17) + path('M333 305h22m24-5h21', ink, 10) + path('M251 177l-18 52m101-52 22 39', skin, 13);
    if (scene === 'bedtime') return moon + mattress + torso(270,107) + face(270,110) + path('M249 243l-18 28-45-3m104-25 39 18-4 41', '#626587', 17) + `<path d="M166 222l44-23 95 12-8 58H166Z" fill="#a797ce"/>` + path('M225 180l-27 24m119-23-17 30', skin, 13);
    return moon + mattress + `<path d="M176 226q70-33 174 9v40H166Z" fill="${purple}"/>` + face(135,190,true) + `<g opacity=".45" transform="translate(307 51) scale(.48)">${face(135,190)}</g>` + path('M365 179q-9 23-32 27m10-14-12 15 19 0', '#b0a0cd', 4);
  }
  function grooming(scene) {
    if (scene === 'brush') return `<rect x="66" y="32" width="388" height="276" rx="38" fill="#e3f0f2"/>` + torso(254,152,'#88b5a5') + face(254,137) +
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
  function eating(scene) {
    const before=scene==='eat-before', now=scene==='eat-now';
    return torso(260,107,'#86a7b4') + face(260,93) +
      `<rect x="86" y="234" width="348" height="44" rx="12" fill="#dec2aa"/><path d="M115 277v32m290-32v32" stroke="#b89b87" stroke-width="10"/><ellipse cx="260" cy="237" rx="77" ry="26" fill="#fffdf8" stroke="#cbbcb5" stroke-width="4"/><ellipse cx="260" cy="237" rx="59" ry="17" fill="none" stroke="#e3dad2" stroke-width="2"/>` +
      (before || now ? `<ellipse cx="256" cy="236" rx="${before?39:22}" ry="13" fill="#e6b361"/><circle cx="${before?287:278}" cy="233" r="8" fill="#8db18c"/><circle cx="239" cy="233" r="6" fill="#ca7c68"/>` : `<circle cx="240" cy="239" r="2" fill="#ba936a"/><circle cx="273" cy="232" r="2.5" fill="#ba936a"/>`) +
      (now ? `<ellipse cx="263" cy="122" rx="9" ry="6" fill="#9f6871"/>` + path('M304 172q45 24 37-11l-44-17',skin,14) + path('M299 145l-25-19m-7-6 7 7m-3-11 7 7m-3-11 7 7','#737d8c',4) + `<circle cx="273" cy="126" r="7" fill="#e6b361"/>` :
       before ? path('M211 176l-26 29m125-29 27 29',skin,14) + path('M171 215v38m-5-38v13h10v-13m174 0v38','#737d8c',4) :
       path('M211 177q-27 17 13 29m83-29q27 17-13 29',skin,14) + path('M231 225l49 21m-44-27 49 21','#737d8c',4)) +
      `<g transform="translate(384 40)"><circle cx="0" cy="0" r="24" fill="#fffdf8" stroke="#d2c7df" stroke-width="3"/>${before ? path('M-9 0h18m-7-7 7 7-7 7',purple,4) : now ? `<circle r="8" fill="#7caa94"/>` : path('M-10 0l7 7 14-15','#7caa94',4)}</g>`;
  }
  function scene(name) {
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
    if (['wake','rise','bedtime','sleep'].includes(name)) return bedroom(name);
    if (['hair','brush'].includes(name)) return grooming(name);
    if (['eat-before','eat-now','eat-after'].includes(name)) return eating(name);
    if (name==='shirt') return `<path d="M214 73h92l58 47-35 54-27-22v137h-88V152l-27 22-35-54Z" fill="#89a9c7" stroke="#6586a7" stroke-width="4"/><path d="M234 74l26 29 26-29m-52 0-20 36 27 12 19-19 19 19 27-12-20-36" fill="#e2eaf1"/><path d="M260 105v181" stroke="#c6d5e3" stroke-width="5"/>${[139,173,207,241,273].map(y=>`<circle cx="266" cy="${y}" r="3" fill="#4c6f91"/>`).join('')}<path d="M280 143h17v25h-17Z" fill="#9cb8d1"/>`;
    if (name==='red-dress') return face(260,87) + `<path d="M235 128h50l10 72 52 99H173l52-99Z" fill="#c94d5c"/><path d="M226 144l-27 67m95-67 27 67" stroke="${skin}" stroke-width="13" stroke-linecap="round"/><path d="M236 299v17m48-17v17" stroke="${skin}" stroke-width="12"/>`;
    if (name==='morning') return `<rect x="18" y="52" width="225" height="236" rx="23" fill="#e9e2f7"/><rect x="277" y="52" width="225" height="236" rx="23" fill="#f7ead6"/><g transform="translate(14 100) scale(.47)">${bedroom('wake')}</g>` + path('M246 174h27m-8-8 8 8-8 8',purple,4) + `<ellipse cx="389" cy="242" rx="96" ry="20" fill="#d5b79b"/><ellipse cx="361" cy="225" rx="47" ry="15" fill="#fffdf8"/><path d="M335 219q26-40 52 0Z" fill="#dda75c"/><rect x="418" y="180" width="42" height="48" rx="7" fill="#fffdf8"/><ellipse cx="439" cy="182" rx="20" ry="5" fill="#94705c"/>` + path('M460 189q24-2 18 18-3 8-17 7','#c4ac96',5) + path('M430 166q-7-11 0-22m15 22q-7-11 0-22','#c4ac96',3);
    if (name==='sport') return torso(260,90,'#8aa9ba') + face(260,80) + `<path d="M210 215h100l-4 35h-40l-6-22-6 22h-40Z" fill="#666b98"/>` + path('M230 255l-9 35m70-35 9 35',skin,16) + `<path d="M209 283h22l4 16-8 11h-43q-9-12 4-17Z" fill="#8c7cba"/><path d="M290 283h22l22 11q13 11 1 16h-43l-8-11Z" fill="#8c7cba"/>` + path('M184 309h46m64 0h42','#fffdf8',5) + path('M210 153l-21 53m121-53 21 53',skin,13) + path('M205 295h14m80 0h14','#fffdf8',3);
    return null;
  }
  window.ParlezIllustrations = {scene};
})();
