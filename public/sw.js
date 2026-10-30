const CACHE = 'parlez-v27-a12-s9-10';
const ASSETS = ['./', './index.html', './styles.css?v=27', './app.js?v=27', './noun-gender.js?v=27', './pronunciation-trainer.js?v=27', './phonetics-dict.js?v=27', './cards-curriculum.js?v=27', './grammar-game.js?v=27', './verb-conjugations.js?v=27', './illustrations.js?v=27', './manifest.webmanifest', './assets/icon.svg', './assets/icon-192.png', './assets/icon-512.png', './assets/icon-apple.png', './assets/scenes/blush-face.webp', './assets/scenes/chat-friends.webp', './assets/scenes/chore-cooking.webp', './assets/scenes/chore-groceries.webp', './assets/scenes/chore-vacuum.webp', './assets/scenes/feel-tired.webp', './assets/scenes/market-all.webp', './assets/scenes/market-scale.webp', './assets/scenes/polite.webp', './assets/scenes/reflect-think.webp', './assets/scenes/thanks.webp', './assets/scenes/wake.webp'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(names => Promise.all(names.filter(n => n !== CACHE).map(n => caches.delete(n)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if(event.request.method !== 'GET' || new URL(event.request.url).origin !== location.origin) return;
  event.respondWith(fetch(event.request, { cache: 'no-cache' }).then(response => {
    if(response.ok && ['document','script','style','image'].includes(event.request.destination)){
      const clone=response.clone(); caches.open(CACHE).then(cache => cache.put(event.request,clone));
    }
    return response;
  }).catch(() => caches.match(event.request, { ignoreSearch: true }).then(r => r || (event.request.mode==='navigate'?caches.match('./index.html', { ignoreSearch: true }):Response.error()))));
});
