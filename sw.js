const CACHE_NAME = 'alpa-cache-v1';

// Lista de arquivos exata baseada na sua pasta
const assets = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './logo.jpg',
  './logo1.png',
  './logo-192.png',
  './logo-512.png',
  encodeURI('./presidente-Ludimila Silva.PNG'),
  encodeURI('./vice-presidente Conselho deliberativo - Rosangela silva.PNG'),
  encodeURI('./secretária - carolaine claro.PNG'),
  encodeURI('./vice-presidenta - Eva.PNG'),
  encodeURI('./tesoureira - Gisele Couto.PNG'),
  encodeURI('./Conselho fiscal - Cristiani.PNG'),
  encodeURI('./Conselho fiscal -Marcela.PNG')
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Arquivos cacheados com sucesso');
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});