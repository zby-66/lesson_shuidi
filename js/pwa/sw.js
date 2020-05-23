const CACHE_NAME = 'sw-' + 0;

// window
self.addEventListener('install', (event) => {
  // 等着 我把要缓存都缓存好 才进入下一阶段
  // cache-storage
  // 1. 打开
  let cacheComplete = caches.open(CACHE_NAME).then(cache => {
    return cache.addAll([
      './',                       // http://localhost:8080/
      './sw-lifecycle.png'
    ])
  })
  event.waitUntil(cacheComplete)
})
self.addEventListener('activate', () => {})
// 监听浏览器发出的请求
// 判断 如果在们缓存的空间里面 那么我们 直接取出缓存里面内容返回
// 没在 sw 帮浏览器发出这个请求， 请求完事后再放到缓存里，供下次使用
self.addEventListener('fetch', (event) => {
  // 用什么返回
  // promise 返回值 就是 then 回调里面的返回值 
  let thisReqRes = caches.match(event.request)
  .then((response) => {
    if (response) {
      // 1: 缓存有 return
      return response
    } else {
      return fetch(event.request)
      .then(res => {
        return caches.open(CACHE_NAME).then(function(cache) {
          cache.put(event.request, res.clone());
          // res 流
          // 2: 缓存没有 把请求完的结果 return
          return res;
        })
      })
    }
  })
  event.respondWith(thisReqRes)
})
