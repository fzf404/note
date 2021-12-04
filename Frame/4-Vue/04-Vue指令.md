<!--
title: 04-Vue指令
sort:
-->

## 过滤器

> 为变量添加

```js
// 定义名为meter的过滤器，第二个参数需要传
Vue.filter('meter',function(val,unit){
  val = val || 0;
  unit = unit || 'm';
  return (val/1000).toFixed(2)+unit;
})

Vue.filter('currency',function(val,unit){
  val = val || 0;
  unit = unit || '$'
  return unit+val;
})

new Vue({
  el:'#app',
  data:{
    price:10,
    length:0,
  }
})

// html
<div id="app">
  <input v-model="length">mm
  <br>
  {{length | meter('m')}}
  <hr>
  <input v-model="price">
  <br>
  {{ price | currency('￥') }}
</div>
```

## 自定义指令

```js
// 定义名为pin的指令，el为元素，binding为指令对象
Vue.directive('pin', function (el, binding) {
  var pinned = binding.value;
  if (pinned) {
    el.style.position = 'fixed';
    el.style.top = '10px';
    el.style.left = '10px';
  } else {
    el.style.position = 'static';
  }
})

new Vue({
  el: '#app',
  data: {
    card1: {
      pinned: false,
    },
    card2: {
      pinned: false,
    },
  }
})

// html
<div id="app">
  <div v-pin="card1.pinned" class="card">
    	// 绑定事件
      <button @click="card1.pinned = !card1.pinned">钉住/取消</button>
      Lorem ipsum dolor sit amet, consectetur
  </div>
  <div v-pin="card2.pinned" class="card">
      <a @click="card2.pinned = !card2.pinned" href="#">pin it</a>
      Lorem ipsum dolor sit amet, consectetur
  </div>
</div>
```

## 指令传参

```js
Vue.directive('pin', function (el, binding) {

  var pinned = binding.value;
  // 获得修饰符
  var position = binding.modifiers;
  // 获得参数
  var warning = binding.arg;
  console.log(pinned,position,warning);

  if (pinned) {
    el.style.position = 'fixed';

    for (var key in position) {
      if (position[key]) {
        el.style[key] = '10px';
      }
    }
    if (warning === 'true') {
      el.style.background = 'yellow';
    }
  } else {
    el.style.position = 'static';
  }
})

new Vue({
  el: '#app',
  data: {
    card1: {
      pinned: false,
    },
    card2: {
      pinned: false,
    },
  }
})

// html
<div id="app">
  // 指令:传参.修饰符
  <div v-pin:true.bottom.left="card1.pinned" class="card">
    <button @click="card1.pinned = !card1.pinned">钉住/取消</button>
    Lorem ipsum dolor sit amet, consectetur
  </div>
  <div v-pin="card2.pinned" class="card">
    <a @click="card2.pinned = !card2.pinned" href="#">pin it</a>
    Lorem ipsum dolor sit amet, consectetur
  </div>
```
