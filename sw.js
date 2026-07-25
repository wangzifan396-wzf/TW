
// TW Hub Service Worker - offline cache
var CACHE_NAME = 'tw-hub-v5';
var ASSETS = ['./', './index.html', './manifest.json'];
self.addEventListener('install', function(e){
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
      return cache.addAll(ASSETS).catch(function(){});
    }).then(function(){
      self.skipWaiting();
    })
  );
});
self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(names){
      return Promise.all(
        names.filter(function(n){return n!==CACHE_NAME;})
          .map(function(n){return caches.delete(n);})
      );
    }).then(function(){
      self.clients.claim();
    })
  );
});
self.addEventListener('fetch', function(e){
  if(e.request.method!=='GET')return;
  e.respondWith(
    caches.match(e.request).then(function(cached){
      if(cached)return cached;
      return fetch(e.request).then(function(response){
        if(!response||response.status!==200||response.type!=='basic')return response;
        var clone=response.clone();
        caches.open(CACHE_NAME).then(function(cache){
          cache.put(e.request, clone);
        }).catch(function(){});
        return response;
      }).catch(function(){
        return caches.match('./index.html');
      });
    })
  );
});
