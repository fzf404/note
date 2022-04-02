<!--
title: 04-React事件处理
sort:
-->

## 事件处理

```react
updateTime = () => {
    this.setState({
        time: new Date().toTimeString()
    })
}

// 其他方法
updateTime() {
    this.setState({
        time: new Date().toTimeString()
    })
}

// 在构造函数中绑定this指针
this.updateTime = this.updateTime.bind(this)
// 渲染render函数中传入this指针
<button onClick={() => this.updateTime()}>Update</button>
<button onClick={this.updateTime.bind(this)}>Update</button>
```

## 条件处理

```react
// 获取button组件
function Login() {
  return <button>Login</button>
}
function Logout() {
  return <button>Logout</button>
}
// 组件类
class App extends React.Component {
  state = {
    isLogin: false
  }
	updateLog = () => {
    	console.log(this)
    	this.setState({
        	isLogin: true
    	})
	}
  render() {
    const isLogin = this.state.isLogin;
    let button;
    if (isLogin) {
      button = <Login />
    } else {
      button = <Logout />
    }
    // 三元运算符  {isLogin?<Login/>:<Logout/>}
    return <div>
      <h1>Hello,{this.props.name}</h1>
      {button}
      <button onClick={this.updateLog}>Update</button>
    </div>
  }
}
```

### 解构

```react
render() {
    const {isLogin} = this.state;
    let button;
    return <div>
        <h1>Hello,{this.props.name}</h1>
        {isLogin?<Login/>:<Logout/>}
        <button onClick={this.updateLog}>Update Status</button>
    </div>
}

```

### 子组件触发父组件

```react
function Login(props) {
    return <button onClick={props.updateLog}>Login</button>
}
function Logout(props) {
    return <button onClick={props.updateLog}>Logout</button>
}
class App extends React.Component {
    state = {
        isLogin: false
    }
    updateLog = () => {
        console.log(this)
        this.setState({
            isLogin: !this.state.isLogin
        })
	}
    render() {
        const isLogin = this.state.isLogin;
        let button;
        // 向子组件传入props
        return <div>
            <h1>Hello,{this.props.name}</h1>
            {isLogin?<Login updateLog={this.updateLog}/>:<Logout updateLog={this.updateLog}/>}
        </div>
    }
}
ReactDOM.render(
    <App name="admin" />
    , document.getElementById('app')
)
```

## 列表渲染

```react
class List extends React.Component {
    state = {
        list:[1,2,3,4,5]
    }

    render() {
        const arr = this.state.list;
        const listItem = []
        // 处理list
        arr.map((item)=>{
            let li = <li>{item}</li>
            listItem.push(li)
        })
        return <div>
            <ul>
                {listItem}
            </ul>
        </div>
    }
}
ReactDOM.render(
    <List/>
    , document.getElementById('app')
)
```

### kw 列表渲染

```react
state = {
    list:[
        {id:1,text:'JS'},
        {id:2,text:'Python'},
        {id:3,text:'Golang'},
        {id:4,text:'C#'}
    ]
}

render() {
    const arr = this.state.list;
    const listItem = []
    // 使用for循环
    for(var i=0;i<arr.length;i++){
        // 缓存不变的key提高效率
        let li = <li key={arr[i].id}>{arr[i].text}</li>
            listItem.push(li)
    }
    return <div>
        <ul>
            {listItem}
        </ul>
    </div>
}
```

## 表单应用

![image-20201206140905850](https://img-1257284600.cos.ap-beijing.myqcloud.com/2020/20201206140912.png)

```react
state = {
    val: '',
    list: []
}
// Input标签改动后,自动触发event添加至State.value
handleInput = (event) => {
    this.setState({
        val: event.target.value
    })
}
// 更新list
handleAdd = () => {
    // 解构，把state的值赋给val和list
    const { val, list } = this.state;
    list.push(val);
    this.setState({
        // 语法糖，简写list:list
        list
    })
}
render() {
    const val = this.state.val;
    const arr = this.state.list;
    const listItem = []
    arr.map((item,index) => {
        // 添加索引key
        let li = <li key = {index}>{item}</li>
        listItem.push(li)
    })
    return <div>
        <div>
            <input type="text" value={val} onChange={this.handleInput}></input>
            <button onClick={this.handleAdd}>Insert</button>
        </div>
        <ul>
            {listItem}
        </ul>
    </div>
}
```
