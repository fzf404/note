<!--
title: 05-Vue更多
sort:
-->

## 混合器

> 功能复用

```js
// 需要复用的方法
var base = {
  methods: {
    show: function () {
      this.visible = true;
    },
    hide: function () {
      this.visible = false;
    },
    toggle: function () {
      this.visible = !this.visible;
    },
  },
  data: function () {
    return {
      visible: false,
    };
  },
};

Vue.component("tooltip", {
  template: `
  <div>
    <span @mouseenter="show" @mouseleave="hide">bys</span>
    <div v-if="visible">
    白岩松
    </div>
  </div>
  `,
  mixins: [base],
});

Vue.component("popup", {
  template: `
  <div>
    <button @click="toggle">Popup</button>
    <div v-if="visible">
      <span @click="hide">X</span>
      <h4>title</h4>
      <p>Lorem</p>
    </div>
  </div>
  `,
  mixins: [base],
});

<div id="app">
  <tooltip></tooltip>
  <popup></popup>
</div>;
```

## 插槽

> 在 html 里插东西

```js
Vue.component('panel', {
  template: '#panel-tpl',
})

new Vue({
  el: '#app',
  data: {}
})

// html
<div id="app">
  <panel>
    <div slot="title">
      Yo.dsf
    </div>
  </panel>
</div>
<template id="panel-tpl">
  <div class="panel">
    <div class="title">
      <slot name="title"></slot>
    </div>
  </div>
</template>
```
