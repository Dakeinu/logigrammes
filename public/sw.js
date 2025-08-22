// Nom du cache (change-le à chaque release pour invalider)
const CACHE = "logigramme-v1";

// Fichiers critiques à cacher dès l'install (optionnel mais utile)
const ASSETS = [
  "/",
  "/favicon.ico",
  "/icons/icon-192.png",
  "/icons/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Stratégie cache d'abord avec repli réseau
self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  event.respondWith(
    caches.match(request).then((cached) => {
      const fetchPromise = fetch(request).then((network) => {
        // Cache une copie si OK
        if (network && network.status === 200 && network.type === "basic") {
          const clone = network.clone();
          caches.open(CACHE).then((cache) => cache.put(request, clone));
        }
        return network;
      }).catch(() => cached); // hors-ligne -> sert le cache si dispo

      return cached || fetchPromise;
    })
  );
});