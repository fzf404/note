<!-- 
title: 02-React入门
sort: 
--> 

## 第一个程序

> HelloWorld

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Demo1</title>
    <!-- CDN 组件 -->
    <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
</head>

<body>
    <div id="app"></div>
    <script>
        var hello = React.createElement('h1',{},"HelloWorld");
        ReactDOM.render(hello,document.getElementById('app'));
    </script>
</body>

</html>
```

> babel6语法糖

```html
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Demo1</title>
    <!-- <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script> -->
    <!-- <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script> -->
    <script src="node_modules\react\umd\react.development.js"></script>
    <script src="node_modules\react-dom\umd\react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.26.0/babel.min.js"></script>
</head>

<body>
    <div id="app"></div>
    <script type="text/babel">
        ReactDOM.render(
        	<h1>HelloWorld</h1>
        	,document.getElementById('app'));
    </script>
</body>

</html>
```

### 动态渲染

> 动态渲染，无需刷新

```react
function tick() {
    var time = new Date().toLocaleTimeString();
    var ele = <div>
        <h1 className="red" name="fzf">Hello, fzf</h1>
        <h2>{time}</h2>
    </div>;
    ReactDOM.render(
        ele
        , document.getElementById('app'));
}
setInterval(tick, 1000);
```
