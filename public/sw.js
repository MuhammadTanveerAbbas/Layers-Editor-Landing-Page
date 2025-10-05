// Minimal no-op service worker to prevent 404s during development
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", () => {
  // Claim clients on activation
  self.clients.claim();
});

self.addEventListener("fetch", () => {
  // No-op: let the network handle requests
});
