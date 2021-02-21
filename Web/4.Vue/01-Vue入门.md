<!-- 
title: 01-Vue入门
sort: 
--> 

> 比React简单,写起来没有React爽
>
> 使用`Vue2.16.2`

## HelloWorld

```vue
<div id="app">
  <h2>Hello, {{name}}</h2>
</div>

<script src="https://unpkg.com/vue"></script>
<script>
  const app = new Vue({
    // id选择器
    el: '#app',
    data: {
      name: 'fzf'
    }
  })
</script>
```

### 对接API

> 使用b站[API](http://api.bilibili.com/x/web-interface/ranking/region?rid=1)

```vue
<div id="app">
  <ul>
    <!-- for 循环 -->
    <li v-for="(name,index) in names">
      {{name}}<br />{{bvs[index]}}<br/>{{coins[index]}}
      <!-- if判断是否显示 -->
      <b v-if="coins[index]>=100000">-- Conin Too Much</b>
    </li>
  </ul>
  <h2>Total Number: {{totalCoins}}</h2>
</div>

<script src="https://unpkg.com/vue"></script>
<script>
  // 创建Vue实例 
  const app = new Vue({
    el: '#app',
    data: {
      names: [],
      bvs: [],
      coins: []
    },
    computed:{
      totalCoins(){
        return this.coins.reduce((sum,coins)=>sum+coins)
      },
      addCoins(){
        this.coins[0]+=1
      }
    },
    // 创建异步请求
    created() {
      fetch('data.json')
        // 解析JSON数据
        .then(response => response.json())
        .then(json => {
          json.data.map(data => {
            // PUSH进列表
            this.names.push(data.title);
            this.bvs.push(data.bvid);
            this.coins.push(data.coins);
          })
        })
    }
  })
</script>
```

## 判断与循环

```vue
// 使用v-if v-else 判断渲染哪个标签
<span v-if="isEditing">Update Product</span>
<span v-else>Add Product</span>

<script>
export default {
  data: { isEditing: false },
}
</script>
```

## 双向绑定

> 属性与data值同时改变

```js
<input v-model="name">
v-model.lazy="name"		// 惰性更新
v-model.trim="name"		// 去空格
v-model.number="name"		// 转换成数字
```

## 绑定

> 绑定属性值

```js
v-bind:href="url"
// 绑定a标签中的href
:href="url"
// 绑定class data中要定义isActive
:class="{active: isActive}
// 实例 url要定义到data里
<a :href="url" :class="{active: isActive} >Link</a>
```

## 事件

```js
v-on="{click: onClick, keyup: onKeyup}"
// 绑定点击事件
@click="onClick"
// 保护刷新
@submit.prevent="onSubmit()"
// 键盘Enter抬起
@keyup.enter="onKeyup">

// 实例
<button 
  v-on="{mouseenter: onEnter, mouseout: onOut, click: onClick}"
  :class="{active: changeColor}"
>点我</button>

var app = new Vue({
  el: '#app',
  data:{
    changeColor: false,
  },
  // 定义事件
  methods: {
    onClick: () => {
      console.log('click')
      app.changeColor=true
    },
    onEnter: () => {
      console.log('mouse in')
    },
    onOut: () => {
      console.log('mouse out')
      app.changeColor=false
    },
  }
});
```

