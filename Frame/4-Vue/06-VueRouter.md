<!--
title: 06-Vue路由
sort:
-->

## Vue-Router@4

```js
import router from '@/router/router'
router.push({ name: 'error', params: { code: 200, msg: '用户名不应为空' }, query: { id: 404 } })

import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route.params) // 隐示传参
console.log(route.query) // 显示传参

// template 使用
$router.back() // 返回
$route.params
$route.query
```

## Vue-Router@3

### 基础

```js
route: 路由信息对象
// 绝对路径
this.$route.path
// 获得url传来的query
this.$route.query(.artid)
this.$route.params(.username)

router: 访问路由实例
this.$router.push({ name: 'Login' , params: { username: 123 }})
this.$router.push({ path: 'Info' , query: { username: 123 }})
// 其他方法
<router-link to="{ name: '404'}">404</router-link>
<router-link to="/404">404</router-link>
// 动态绑定
<router-link :to="url">404</router-link>
```

### 案例

```js
import Vue from "vue";
import Router from "vue-router";
import store from "@/store";
import manageRoutes from "./module/manage";
import infoRoutes from "./module/info";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Index.vue"),
  },
  ...manageRoutes,
  ...infoRoutes,
  {
    path: "*",
    name: "404",
    component: () => import("../views/404.vue"),
  },
];
const router = new Router({
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    // 判断用户是否登录
    if (store.state.userModule.token) {
      next();
    } else {
      router.push({ name: "Home" });
    }
  } else {
    next();
  }
});

export default router;
```
