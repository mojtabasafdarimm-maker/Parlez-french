const CACHE = 'parlez-v5-visual-mnemonics';
const ASSETS = ['./', './index.html', './styles.css', './app.js', './hints.js', './manifest.webmanifest', './assets/icon.svg', './assets/icon-192.png', './assets/icon-512.png', './assets/icon-apple.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(names => Promise.all(names.filter(n => n !== CACHE).map(n => caches.delete(n)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if(event.request.method !== 'GET' || new URL(event.request.url).origin !== location.origin) return;
  event.respondWith(fetch(event.request).then(response => {
    if(response.ok && ['document','script','style','image'].includes(event.request.destination)){
      const clone=response.clone(); caches.open(CACHE).then(cache => cache.put(event.request,clone));
    }
    return response;
  }).catch(() => caches.match(event.request).then(r => r || (event.request.mode==='navigate'?caches.match('./index.html'):Response.error()))));
});
