const VERSION="e6d4-2f58-d535",CACHE_KEYS={PRE_CACHE:`precache-${VERSION}`,RUNTIME:`runtime-${VERSION}`},EXCLUDED_URLS=[],PRE_CACHE_URLS=["/","/404.html","/index.html","/about/index.html","/contact/index.html","/favicon.ico","/images/social-share.png","/images/icons/favicon.svg","/images/icons/icon-72x72.png","/images/icons/icon-96x96.png","/images/icons/icon-128x128.png","/images/icons/icon-144x144.png","/images/icons/icon-152x152.png","/images/icons/icon-192x192.png","/images/icons/icon-384x384.png","/images/icons/icon-512x512.png","/images/icons/maskable_icon.png","/styles/index.css"],IGNORED_HOSTS=["localhost"],addItemsToCache=function(e,t=[]){caches.open(e).then(n=>n.addAll(t))};self.addEventListener("install",e=>{e.waitUntil(addItemsToCache(CACHE_KEYS.PRE_CACHE,PRE_CACHE_URLS))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(t=>t.filter(n=>!Object.values(CACHE_KEYS).includes(n))).then(t=>Promise.all(t.map(n=>caches.delete(n)))).then(()=>self.clients.claim()))}),self.addEventListener("fetch",e=>{const{hostname:t}=new URL(e.request.url);if(IGNORED_HOSTS.indexOf(t)>=0)return;if(EXCLUDED_URLS.some(n=>e.request.url.indexOf(n)>-1))return;e.respondWith(caches.match(e.request).then(n=>n||caches.open(CACHE_KEYS.RUNTIME).then(s=>fetch(e.request).then(a=>s.put(e.request,a.clone()).then(()=>a)).catch(()=>{}))))});
