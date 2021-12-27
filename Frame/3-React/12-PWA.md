<!--
title: 32-PWA
sort:
-->

1. `manifest.json`

    ```json
    {
      "name": "PWA-DEMO",
      "short_name": "PWA",
      "decription": "fzf404's pwa page.",
      "display": "standalone",
      "start_url": "/pwa",
      "theme_color": "#ffffff",
      "background_color": "#ffffff",
      "icons": [
        {
          "src": "logo.png",
          "sizes": "256x256",
          "type": "image/png"
        }
      ]
    }

    ```

2. `index.html`

    ```html
    <!DOCTYPE html>
    <html lang="zh-CN">
      <head>
        <link rel="manifest" href="manifest.json" />
      </head>
    
      <body>
        <h2>This is a PWA example ⏱</h2>
        <script>
          if (navigator.serviceWorker != null) {
            navigator.serviceWorker.register('sw.js').then((reg) => {
              console.log('Registered events at scope: ', reg.scope)
            })
          }
        </script>
      </body>
    </html>
    
    ```

    

3. `sw.js`

    ```js
    console.log('1. Service Worker Loading...')
    
    const cacheStorageKey = 'intro-1'
    
    const cacheList = ['/', 'index.html', 'logo.png']
    
    // 安装
    self.addEventListener('install', (e) => {
      console.log('2. Installing...')
      e.waitUntil(
        caches
          .open(cacheStorageKey)
          .then((cache) => {
            console.log('2-1. Adding File to Cache: ', cacheList)
            return cache.addAll(cacheList)
          })
          .then(function () {
            console.log('2-2. Skip Waiting')
            return self.skipWaiting()
          })
      )
    })
    
    // 更新
    self.addEventListener('activate', (e) => {
      console.log('3, Activate Running...')
      e.waitUntil(
        caches.keys().then((cacheNames) => {
          Promise.all(
            cacheNames
              .map((name) => {
                if (name !== cacheStorageKey) {
                  console.log(`3-1. Removeing: ${caches[name]}`)
                  return caches.delete(name)
                }
              })
          ).then(() => {
            console.log('3-2. Update Reload')
          })
        })
      )
    })
    
    // 获取
    self.addEventListener('fetch', (e) => {
      console.log('4. Fetch:', e.request.url)
      e.respondWith(
        caches.match(e.request).then((res) => {
          if (res != null) {
            console.log('4-1. Using cache for:', e.request.url)
            return res
          }
          console.log('4-2. Fallback to fetch:', e.request.url)
          return fetch(e.request.url)
        })
      )
    })
    
    ```

    