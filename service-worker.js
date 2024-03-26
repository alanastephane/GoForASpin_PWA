var cacheName = 'GoForASpin+-v1.0';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',

        './assets/css/fontawesome-all.min.css',
        './assets/css/main.css',
        './assets/css/noscript.css',

        './assets/js/breakpoints.min.js',
        './assets/js/browser.min.js',
        './assets/js/jquery.min.js',
        './assets/js/jquery.scrollex.min.js',
        './assets/js/main.js',
        './assets/js/util.js',

        './assets/img/background.png',
        './assets/img/favicon.png',
        './assets/img/logo.png',
        './assets/img/128.png',
        './assets/img/icon_144.png',
        './assets/img/152.png',
        './assets/img/167.png',
        './assets/img/180.png',
        './assets/img/icon_192.png',
        './assets/img/256.png',
        './assets/img/512.png',
        './assets/img/1-Centro-de-Recife-1.jpg',
        './assets/img/esculturas.png',
        './assets/img/maisMarcozero.jpeg',
        './assets/img/paço do frevo.jpg',
        './assets/img/paço do frevo1.jpg',
        './assets/img/torrecristal.jpg',

        './assets/components/_icon.scss',
        './assets/components/_icons.scss',
        './assets/components/maain.scss',



      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
    try {
      return await fetch(event.request);
    } catch (err) {
      return caches.match(event.request);
    }
  }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});