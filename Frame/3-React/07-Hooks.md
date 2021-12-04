<!--
title: 07-Hooks
sort:
-->

## 入门

```jsx
import React, { useState, useEffect } from "react";

export default function App() {
  // 定义变量及它的修改者
  const [globalStats, setGlobalStats] = useState({});
  // 初始化时执行，第二参数的值改变时执行
  useEffect(() => {
  	const response = await fetch('...');
  // ...
	}, [globalStats]);

```

## 路由 Hooks

> 获得路由的参数

```jsx
import {useParams,useHistory} from "react-router-dom";

export default function Detail() {

  const params = useParams();
  const history = useHistory();

  // history显式传参
  history.push('/api/somdata')
  // 路由配置
  <Route path="/api/:data" component={api}></Route>
  // 获得
  data = params.data

  // history 隐藏传参
  history.push({
    pathname: '/api',
    state: {
      "data": data
    }
  })
  // 获得参数
  const data = props.location.state.data

  return <div>
    <p>{params.Data}</p>
    <Button onClick={ () => {
      history.push('/')
	  }}>To Home</Button>
  </div>
```

## 子组件调用

```jsx
// 子组件
import { useImperativeHandle, forwardRef } from 'react'

function Child(props,ref) {
  useImperativeHandle(ref, () => ({
    getValue: () => {
      return 'somthing'
    }
  }))

export default forwardRef(Child);

// 父组件
const childRef = useRef();
  const getCode = () => {
    childRef.current.getValue()
  }
```
