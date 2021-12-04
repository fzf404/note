<!--
title: 07-Vuex
sort:
-->

## Vuex

> 方便各个嵌套组件中参数的传递
>
> `yarn add vuex`

### 速查表

```js
// 获取store中state的值
this.$store.state.data;
// 触发mutations
this.$store.commit('SET_DATA', { data })
// 触发Action
this.$store.dispatch('getData')

// 辅助函数映射
import { mapState, mapActions } from 'vuex'

...mapState('userModule', {
      username: state => state.username
    })
...mapActions('userModule', { login: 'login' , info: 'info'}),
```

### 状态属性 (state)

```vue
<script>
export default {
  computed: {
    product() {
      // 从store中获取state
      return this.$store.state.products[0];
    },
  },
};
</script>
```

### 修改属性 (mutations)

> 修改 state 的值

```vue
<script>
export default {
  mutations: {
    ADD_TO_CART(state, payload) {
      const { product } = payload;
      state.cart.push(product);
    },
    REMOVE_FROM_CART(state, payload) {
      const { productId } = payload;
      state.cart = state.cart.filter((product) => product._id !== productId);
    },
  },
};
</script>

// 触发
<script>
export default {
  methods: {
    addToCart(product) {
      this.$store.commit("ADD_TO_CART", {
        product,
      });
    },
  },
};
</script>
```

### 响应事件 (action)

> 响应视图层分发的事件

```vue
// 定义
<script>
actions: {
  allProducts({ commit }) {
    commit('ALL_PRODUCTS')

    axios.get(`${API_BASE}/products`).then(response => {
      console.log('response', response);
      commit('ALL_PRODUCTS_SUCCESS', {
        products: response.data,
      });
    })
  }
}
</script>

// 触发
<script>
// 生命周期
created () {
  if (this.products.length === 0) {
    // 触发父组件action
    this.$store.dispatch('allProducts')
  }
},
</script>
```
