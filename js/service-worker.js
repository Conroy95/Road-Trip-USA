const CACHE_NAME = 'roadtrip-cache-v1';
const urlsToCache = [
  '/',
  'index.html',
  'css/style.css',
  'js/script.js',
  // Images
  'img/stad1.jpg',
  'img/stad2.jpg',
  'img/stad3.jpg',
  'img/stad4.jpg',
  'img/stad5.jpg',
  'img/stad6.jpg',
  'img/stad7.jpg',
  'img/stad8.jpg',
  'img/stad9.jpg',
  'img/stad10.jpg',
  'img/stad11.jpg',
  'img/stad12.jpg',
  'img/stad13.jpg',
  // Pages
  '1.html',
  '2.html',
  '3.html',
  '4.html',
  '5.html',
  '6.html',
  '7.html',
  '8.html',
  '9.html',
  '10.html',
  '11.html',
  '12.html',
  '13.html',
  '14.html',
  // Favicons
  'fav/favicon-96x96.png',
  'fav/favicon.svg',
  'fav/favicon.ico',
  'fav/apple-touch-icon.png',
  'fav/site.webmanifest',  
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});


urlsToCache.map(url =>
  cache.add(url).catch(err => {
    console.warn(`⚠️ Fout bij: ${url}`, err);
  })
)
