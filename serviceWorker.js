let appCache;

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open('view-ui').then(cache => appCache = cache));
});

self.addEventListener('fetch', e => {

  const { method, destination } = e.request;

  if (method === "GET" && destination === 'script') {
    const promise = caches.match(e.request)
      .then(response => {
        if (response) {
          return response;
        } else {
          appCache && appCache.add(e.request);
          return fetch(e.request);
        }
      });
    e.respondWith(promise);
  } else {
    e.respondWith(new Promise((resolve) => {
      resolve(fetch(e.request));
    }));
  }

});

// self.addEventListener('activate', e => {
//   console.log("activate");
// });