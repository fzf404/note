<!--
title: 01-Vue入门
sort:
-->

## HelloWorld

```vue
<div id="app">
  <h2>Hello, {{name}}</h2>
</div>

<script src="https://unpkg.com/vue"></script>
<script>
const app = new Vue({
  // id选择器
  el: "#app",
  data: {
    name: "fzf",
  },
});
</script>
```

### 对接 API

> 使用 b 站[API](http://api.bilibili.com/x/web-interface/ranking/region?rid=1)

```vue
<div id="app">
  <ul>
    <!-- for 循环 -->
    <li v-for="(name,index) in names" :key="index">
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
  el: "#app",
  data: {
    names: [],
    bvs: [],
    coins: [],
  },
  computed: {
    totalCoins() {
      return this.coins.reduce((sum, coins) => sum + coins);
    },
    addCoins() {
      this.coins[0] += 1;
    },
  },
  // 创建异步请求
  created() {
    fetch("data.json")
      // 解析JSON数据
      .then((response) => response.json())
      .then((json) => {
        json.data.map((data) => {
          // PUSH进列表
          this.names.push(data.title);
          this.bvs.push(data.bvid);
          this.coins.push(data.coins);
        });
      });
  },
});
</script>
```
