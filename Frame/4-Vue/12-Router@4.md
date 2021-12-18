<!-- 
title: 12-VueRouter@4
sort: 
-->

## 使用

```
yarn add vue-router@4
```

### `Router.js`

```js
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/pages/index.vue'),
    meta: {
      title: 'fzf404 | 服务',
    },
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/pages/404.vue'),
    meta: {
      title: 'fzf404 | 404',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '404',
  },
]

// 导出路由
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// 修改 title
router.beforeEach((to, from) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
})

export default router
```

## 跳转 & 传参

### script

```js
import router from '@/router/router'

// 跳转到 success 界面, 并传入隐式参数
router.push({ name: 'success', params: { data: JSON.stringify(state.data) } })
// 跳转到 error 界面, 并传入显式参数
router.push({ name: 'error', query: state.data })

// 读取参数
import { useRoute } from 'vue-router'
useRoute().query
```

### template

```jsx
<!-- 返回首页 -->
<router-link to="/">返回</router-link>
<!-- 返回上一级 -->
<a @click="$router.back()">返回</a>

<!-- 读取 params -->
{{ $route.params.data }}
<!-- 读取 query -->
{{ $route.query.data }}
```

