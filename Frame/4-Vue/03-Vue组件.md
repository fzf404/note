<!--
title: 03-Vue组件
sort:
-->

## HelloWorld

> 点赞按钮

```js
Vue.component('like', {
  template:`
    <button @click="toggleLike()" :class="{liked,liked}">
      👍 {{likeCount}}
    </button>`,
  data: function () {
    return {
      likeCount: 10,
      liked: false,
    }
  },
  methods: {
    toggleLike: function () {
      if (!this.liked)
        this.likeCount++;
      else
        this.likeCount--;
      this.liked = !this.liked
    }
  }
})

new Vue({
  el: '#app',
})

// html
<div id="app">
  <like></like>
</div>
```

> `template`放置在 html 里

```js
// 模板使用id选择器
template:'#like-component-template-tpl'

<template id="like-component-template-tpl">
  <button @click="toggleLike()" :class="{liked,liked}">
    👍 {{likeCount}}
  </button>
</template>
```

## 父子通信

> 子组件可以使用`props`获得父组件数据。

```js
// 子组件添加props
Vue.component("alert", {
  template: `<a :href="\'/user/\'+username">{{username}}</a>`,
  props: ["username"],
  methods: {},
});

new Vue({
  el: "#app",
});

// 父组件传入props
<div id="app">
  <alert username="fzf404"></alert>
</div>;
```

## 调度器

```js
// Event调度器
var Event = new Vue();

Vue.component('isay', {
  template: `
	<div>
		我说:<input @keyup="on_change" v-model="i_said"/>
	</div>
	`,
  methods: {
    on_change: function () {
      // 触发said-something事件,传入i_said参数
      Event.$emit('said-something', this.i_said)
    }
  },
  data: function () {
    return {
      i_said: '',
    }
  }
})

Vue.component('hsay', {
  template: `
  <div>
  他说:{{h_said}}
  </div>
	`,
  data: function () {
    return {
      h_said: '',
    };
  },
  // 初始化完毕后加载
  mounted: function () {
    var me = this;
    // 钩子监听said-something,触发则执行事件
    Event.$on('said-something', function (data) {
      me.h_said = data;
    });
  },
})

// html
<div id="app">
  <isay></isay>
	<hsay></hsay>
</div>
```
