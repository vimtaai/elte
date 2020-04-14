const cacheName = "my-cache";

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll([
        "./index.html", // cache your index page
        "./style.css", // cache app.main css
        "./manifest.webmanifest",
      ]);
    })
  );
});

self.addEventListener("fetch", function (event) {
  console.log("fetch", event.request);
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
