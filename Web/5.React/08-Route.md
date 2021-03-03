<!-- 
title: 08-Router
sort: 
--> 

> 使用路由进行跳转
>
> `yarn add react-route-dom`

### Route.js

```js
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react'

import App from "./pages/App";
import Result from "./pages/Result";

export default function IRouter() {
  return <Router>
    // Switch 精准匹配
    <Switch>
      <Route exact path="/" component={App}></Route>
      <Route path="/result" component={Result}></Route>
  		// 404匹配
  		<Route path="*" component={NoMatch} />
    </Switch>
  </Router>
}
```

## 动态路由

> 动态交互的地方需要动态路由

```js
<Route path="/detail/:id" component={Detail}></Route>
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

