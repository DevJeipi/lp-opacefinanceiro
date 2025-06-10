const CACHE_NAME = 'pace-financeiro-v1'
const urlsToCache = [
    '/',
    '/static/css/main.css',
    '/static/js/main.js',
    '/imagemdefundologin-optimized.webp',
    '/foto-otavio-17-removebg.webp',
]

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
    )
})
