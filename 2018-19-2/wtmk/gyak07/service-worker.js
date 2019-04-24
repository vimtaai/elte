const CACHE_NAME = "main-cache";
const CACHE_ITEMS = ["/cat.gif", "manifest.webmanifest"];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log("Opened cache");
      return cache.addAll(CACHE_ITEMS);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // Cache hit - return response
      if (response) {
        console.log("Serving", event.request.url, "from cache");
        return response;
      }

      console.log("Serving", event.request.url, "from network");
      return fetch(event.request);
    })
  );
});
