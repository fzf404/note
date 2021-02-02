<!-- 
title: 07-ReactRouter
sort: 
--> 

> 使用路由进行跳转
>
> `yarn add react-route-dom`

### Route.js

```js
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// 哈希路由，自动加#, 路由, 匹配开关, 重定向
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import App from './pages/app'
import Login from './pages/login'
import Home from './pages/home'
import Detail from './pages/detail'
import NoMatch from './pages/404'

export default function IRouter() {
  return <Router>
    <Switch>
      <Route exact path="/" component={App}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/home" component={Home}>
        <Redirect to='/login'></Redirect>
      </Route>
      <Route path="/detail/:id" component={Detail}></Route>
      <Route path="*" component={NoMatch}></Route>
    </Switch>
  </Router>
}
```

### App.js

```js
import React from 'react'
import { Link } from 'react-router-dom'
// import { Button } from 'antd'
// import 'antd/dist/antd.css'
import './app.scss'

// 无状态
export default function App() {
    return <div class="container">
        <h1>React Route Test</h1>
        <Link to="login">To Login</Link>
        <br />
        <Link to="home">To Home</Link>
        <br />
    </div>
}

// 有状态
// export default class App extends React.Component {

//   handleJump = () =>{
//     this.props.history.push('/login');
//   }

//   render() {
//     return <div class="container">
//       <h1>React Route Test</h1>
//       <Link to="login">To Login</Link>
//       <br />
//       <Link to="home">To Home</Link>
//       <br />
//       <Button onClick={this.handleJump}>Click Me</Button>
//     </div>
//   }
// }
```

## 动态路由

> 动态交互的地方需要动态路由

```js
<Route path="/detail/:id" component={Detail}></Route>

// /detail/:id
import React from 'react'
import { Link } from 'react-router-dom'
import './app.scss'

export default function Detail() {
    return <div class="container">
        <h1>React Route Detail Test</h1>
    </div>
}
```

## Hooks

> useState, useEffect

```js
import React, { useState,useEffect } from 'react'
import { Button } from 'antd'
import 'antd/dist/antd.css'
import './app.scss'

// 无state
export default function App() {

  // 返回数组
  const [count, setCount] = useState(10);

  useEffect(()=>{
    console.log('useEffect Running');
    setCount(100)
  },[])

  return <div class="container">
    <p>
      Value of Count: {count}
    </p>
    <Button onClick={()=>setCount(count+1)}>Add</Button>
  </div>
}

```

### RouteHooks

> useParams, useHistory
>
> 获取动态路由的params，跳转

```js
import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Button } from 'antd'
import 'antd/dist/antd.css'
import './app.scss'

export default function Detail() {
  const params = useParams();
  const history = useHistory();
  return <div className="container">
    <h1>React Route Detail Test</h1>
    <p>Value of ID: {params.id}</p>
    <Button onClick={()=>
      history.push('/')
      }>Return</Button>
  </div>
}

/*
export default class App extends React.Component {

  handleJump = () => {
    this.props.history.push('/login');
  }

  render() {
    return <div class="container">
      <h1>React Route Detail Test</h1>
      <p>Value of ID: {this.props.match.params.id}</p>
    </div>
  }
}
*/
```

