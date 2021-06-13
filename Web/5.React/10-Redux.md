<!-- 
title: 10-Redux
sort: 
--> 

> 状态容器
>
> `yarn add  redux`
>
> chrome插件`Redux Dev Tools`

## 入门

```react
import { createStore } from 'redux'
import reducer from './reducer'

function reducer(state){
    return {
        count: 42
    }
}

// 创建store
const store = createStore(reducer)

export default store
```

## 使用

1. 建立store文件夹：`store/index.js`

```jsx
import { createStore } from 'redux'
import reducer from './reducer'

// 创建store
const store = createStore(reducer)

export default store
```

2. `store/reducer.js`

```jsx
// 数据
const defaultState = {
  inputValue: 'something',
}

// reducer处理函数
// state为数据，action为修改时传入的参数
const reducer = (state = defaultState, action = {}) => {
  // 判断修改时传入的type
  if (action.type === 'changeInput') {
    // 深拷贝
    let newState = JSON.parse(JSON.stringify(state))
    // 修改值
    newState.inputValue = action.value
    return newState
  }
  return state
}

export default reducer
```

3. 读取修改数据

```jsx
// import store from './store/index'
import store from './store'

// store.getState()获取数据
const [state, setState] = useState(store.getState())

// store修改时触发函数
let storeChange = () => {
  setState(store.getState())
}
store.subscribe(storeChange)

// 触发修改
const changeInputValue = (e) => {
  // 创建action
  const action = {
    type: 'changeInput',
    value: e.target.value
  }
  // 发送action
  store.dispatch(action)
}

// 组件
return (
    <input value={state.inputValue} onChange={changeInputValue} />
  );
```

