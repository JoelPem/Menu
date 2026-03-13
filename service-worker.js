const CACHE_NAME="fpsboostlab-v1"

const urls=[
"/",
"/index.html",
"/css/style.css",
"/js/script.js",
"/img/logo.png"
]

self.addEventListener("install",e=>{
e.waitUntil(
caches.open(CACHE_NAME).then(cache=>{
return cache.addAll(urls)
})
)
})

self.addEventListener("fetch",e=>{
e.respondWith(
caches.match(e.request).then(res=>{
return res||fetch(e.request)
})
)
})