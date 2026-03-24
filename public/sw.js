self.addEventListener('install', (event) => {
    self.skipWaiting()
})

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim())
})

self.addEventListener('fetch', (event) => {
    // Service worker obrigatório para evitar 404, mas não altera cache por enquanto
})
