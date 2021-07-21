<!-- 
title: 11-Vite
sort: 
--> 

[官方文档](https://vitejs.dev/guide/)

### 安装

```bash
yarn create @vitejs/app
# 插件
yarn add vue-router@4
# 启动 wsl
yarn run dev --host
```

### Router

```typescript
import * as VueRouter from 'vue-router'

import Login from '../pages/Login.vue'
import Index from '../pages/Index.vue'
const routes = [
  { path: '/', component: Index },
  { path: '/login', component: Login },
]

const router = VueRouter.createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: VueRouter.createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

export default router

// main.ts
createApp(App)
  .use(router)
  .mount('#app')

// App.vue
<router-view></router-view>
```

