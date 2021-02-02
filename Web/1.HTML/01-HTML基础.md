<!-- 
title: 01-HTML基础
sort: 
--> 

# HTML基础

## 第一个HTML

> 半角：`&ensp`;
> 全角：`&emsp`;

```html
<!DOCTYPE html>
<html>
    <head>
        <!-- 声明编码 -->
		<meta charset="utf-8">
		<title>First</title>
	</head>
    <body>
        <h1>我是一个标题</h1>
        <p>我是一个段落</p>
    </body>
</html>
```

## 基础标签

- `<h>`

- `<a href="https://www.baidu.com"`

  > 使用`target`定义何处显示
  >
  > `target="_blank"`：新标签页
  >
  > `herf`后跟`#`打开但不跳转
  >
  > `id`可用来跳转至某一位置

- `<img src="*" width="960" height="720"`

- `<em> # 斜体`

- `<strong> # 黑体`

- `<br> # 换行`

- `<hr> # 水平线`

### 属性参考

| 属性  | 描述             |
| ----- | ---------------- |
| class | .类名（可重复    |
| id    | #唯一的id        |
| style | 样式             |
| title | 额外信息，工具条 |

### 内联样式

```html
<body style="background-color:dark">
    <h2 style="background-color:red">H2header</h2>
    <p style="background-color:blue;color:white">
        This is a paragraph<br>
        233333</p>
</body>

```

### 内链样式表

```html
<head>
    <style type="text/css">
    body {background-color:black;}
    p{background-color:red;color:white}
    </style>
</head>
<body>
    <p>
        This is a paragraph<br>
        233333</p>
</body>

```

### 外联样式表

```html
<head>
	<link rel="stylesheet" type="text/css" href="https://www.w3cschool.cn/html/mystyle.css">
</head> 
```

### 头部

- 定义基本连接目标

```html
<head>       
<base href="//www.w3cschool.cn/images/" target="_blank">      
</head>
```

- `mate`：提供元数据

  > 每30s刷新界面
  >
  > `<meta http-equiv="refresh" content="30">`