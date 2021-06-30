<!-- 
title: 02-Vue进阶
sort: 
--> 

## 判断与循环

```vue

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
// 绑定a标签中的href至data
:href="url"
// 绑定class data中要定义isActive
:class="{active: isActive}"
// 实例 url要定义到data里
<a :href="url" :class="{active: isActive}">Link</a>
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

## 计算属性

```js
<table border="1">
  <thead>
    <th>学科</th>
    <th>分数</th>
  </thead>
  <tbody>
    <tr>
      <td>数学</td>
      <td><input type="text" v-model.number="math"></td>
    </tr>
    <tr>
      <td>英语</td>
      <td><input type="text" v-model.number="english"></td>
    </tr>
    <tr>
      <td>平均分</td>
      <td>{{average}}</td>
    </tr>
    <tr>
      <td>总分</td>
      <td>{{sum}}</td>
    </tr>
  </tbody>
</table>

data: {
  math: 98,
  english: 35,
},
computed: {
  sum: function () {
    return this.math + this.english
  },
  average: function () {
    return (this.sum)/2
  }
}
```

