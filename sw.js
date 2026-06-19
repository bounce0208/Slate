var CACHE = 'slate-v3';
var ASSETS = ['./index.html', './manifest.json', './icon-192.png', './icon-512.png'];

// Install: pre-cache the shell with fresh copies (bypassing the HTTP cache).
// Each asset is added individually so one missing file can't abort the whole update.
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(c) {
      return Promise.all(ASSETS.map(function(u) {
        return c.add(new Request(u, { cache: 'reload' })).catch(function() {});
      }));
    }).then(function() { return self.skipWaiting(); })
  );
});

// Activate: drop old version caches and take control immediately.
self.addEventListener('activate', function(e) {
  e.waitUntil(caches.keys().then(function(keys) {
    return Promise.all(keys.filter(function(k) { return k !== CACHE; }).map(function(k) { return caches.delete(k); }));
  }).then(function() { return self.clients.claim(); }));
});

// Let the page tell a waiting worker to activate now.
self.addEventListener('message', function(e) {
  if (e.data === 'skipWaiting') self.skipWaiting();
});

self.addEventListener('fetch', function(e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var isNav = req.mode === 'navigate' || (req.headers.get('accept') || '').indexOf('text/html') !== -1;

  if (isNav) {
    // HTML: always try the network with the HTTP cache bypassed, so a new deploy
    // is picked up the moment the device is online. Fall back to cache offline.
    e.respondWith(
      fetch(req, { cache: 'no-store' }).then(function(res) {
        var clone = res.clone();
        caches.open(CACHE).then(function(c) { c.put('./index.html', clone); });
        return res;
      }).catch(function() {
        return caches.match(req).then(function(m) { return m || caches.match('./index.html'); });
      })
    );
    return;
  }

  // Everything else: cache-first (the cache is version-pinned and refreshed on install), network fallback.
  e.respondWith(
    caches.match(req).then(function(m) {
      return m || fetch(req).then(function(res) {
        var clone = res.clone();
        caches.open(CACHE).then(function(c) { c.put(req, clone); });
        return res;
      });
    })
  );
});
