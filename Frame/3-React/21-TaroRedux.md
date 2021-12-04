<!--
title: 21-Taro中使用Redux
sort:
-->

## 创建 Redux

`\src\store\index.jsx`

```react
import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
	count: (state = 42, action) => {
		if (action.type === 'SET_COUNT') {
			return action.count
		}
		return state
	}
})

const store = createStore(reducers)

export default store
```

`\src\app.js`

```react
import { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import './app.scss'



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
```

## 使用

```react
import { connect } from "react-redux";

class Index extends Component {

  countIncrease = () => {
    this.props.setCount(this.props.count + 1)
  }

  countDecrease = () => {
    this.props.setCount(this.props.count - 1)
  }

  render() {
    return (
      <View>
        <View>{this.props.count}</View>
        <AtButton onClick={() => this.countIncrease()}>
          +
        </AtButton>
        <AtButton onClick={() => this.countDecrease()}>
          -
        </AtButton>
      </View>
    )
  }
}
// 设置值
const mapDispatchToProps = dispatch => {
  return {
    setCount: count => dispatch({ type: 'SET_COUNT', count })
  }
}

// 读取值
const mapStateToProps = state => {
  return { count: state.count }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
```
