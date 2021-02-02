<!-- 
title: 06-Vue路由
sort: 
--> 

```js
// 定义路由
var routes = [
  {
    path: '/',
    component: {
      template: '#home',
    },
  },
  {
    path: '/about',
    component: {
      template: '#about',
    },
  },
  {
    path: '/user/:name',
    component: {
      template: '#user',
    },
  },
];
// 绑定路由
var router = new VueRouter({
  routes: routes,
});

new Vue({
  el: '#app',
  router: router,
});

// html
<div id="app">
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/user/1">user·1</router-link>
    <router-link to="/user/2">user·2</router-link>
  </div>
  <div>
    <router-view></router-view>
  </div>
</div>
<template id="home">
  <div>
    <h1>Home</h1>
  </div>
</template>
<template id="about">
  <div>
    <h1>About</h1>
  </div>
</template>
<template id="user">
  <div>
    <div>Name: {{$route.params.name}}</div>
    <div>Age: {{$route.query.age}}</div>
  </div>
</template>
```

