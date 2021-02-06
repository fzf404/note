<!-- 
title: 03-React组件
sort: 
--> 

## 组件与props

```react
<script type="text/babel">
    function Hello(props) {
        return <div>
            <h1>Hello,{props.name}</h1>
            <p>age: {props.age}</p>
            <p>skill: Draw</p>
        </div>
    }

    ReactDOM.render( 
        <Hello name="fzf" age="19" />
        , document.getElementById('app'));
</script>
```

## 组件类

> 加载组件：`<component_name/>`

```react
class Hellofzf extends React.Component {
    render() {
        return <div>
            <h1>Hello,{this.props.name}</h1>
            <p>age: {this.props.age}</p>
            <p>skill: Draw</p>
        </div>
    }
}
ReactDOM.render(
    <Hellofzf name="fzf" age="19" />
    , document.getElementById('app'));
```

## 生命周期

> chrome console

![image-20201125152041383](https://gitee.com/nmdfzf404/Image-hosting/raw/master/2020/20201125152041.png)

![img](https://gitee.com/nmdfzf404/Image-hosting/raw/master/2021/image-8c0b915b0ef1289a.png)

```react
// 组件名称必须大写
class Hello extends React.Component {
    // 构造函数，传给父类
    constructor(props) {
        console.log('初始化阶段')
        // 初始化props
        super(props)
        // 初始化状态
        this.state = {
            name: 'fzf',
            age: 19
        }
    }
    componentWillMount() {
        console.log('组件加载前');
    }
    // 这时调用render加载组件
    componentDidMount() {
        console.log('组件加载后')
    }
    // 更改state的值
    updateUser = () => {
        this.setState({
            name: 'Tim',
            age: 20
        })
    }
    shouldComponentUpdate() {
        console.log('数据是否需要更新')
        return true
    }
    componentWillUpdate() {
        console.log('数据即将更新')
    }
    componentDidUpdate() {
        console.log('数据已经更新')
    }
    render() {
        console.log('组件加载或数据更新')
        return <div>
            <h1>Hello,{this.state.name}</h1>
            <p>age: {this.state.age}</p>
            <p>skill: Draw</p>
            <button onClick={this.updateUser}>Update</button>
        </div>
    }
}
ReactDOM.render(
    <Hello />
    , document.getElementById('app'));
```

