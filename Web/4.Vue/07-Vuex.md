<!-- 
title: 07-Vuex
sort: 
--> 

## Vuex

> 方便各个嵌套组件中参数的传递

- state 相当于 data属性

- getters 相当于computed属性
- mutations, actions就相当于vue中的方法

### 状态属性 (state)

```vue
<script>
export default {
  computed: {
    product() {
      // 从store中获取state
      return this.$store.state.products[0];
    }
  }
}
</script>
```

### 修改属性 (mutations)

> 修改state的值

```vue
<script>
export default {
	mutations: {
    ADD_TO_CART (state, payload) {
      const { product } = payload
      state.cart.push(product)
    },
    REMOVE_FROM_CART (state, payload) {
      const { productId } = payload
      state.cart = state.cart.filter(product => product._id !== productId)
    }
  }
}
</script>

// 触发
<script>
export default {
  methods: {
    addToCart (product) {
      this.$store.commit('ADD_TO_CART', {
        product
      })
    }
  }
}
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

### 计算属性 (getter)

```

```

