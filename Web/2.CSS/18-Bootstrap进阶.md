<!-- 
title: 18-BootStrap进阶
sort: 
--> 

## data-xxx

> data-toggle: 绑定事件,终止链接默认行为
>
> data-trigger: 定义如何触发弹出框
>
>  data-target: 绑定目标

```scss
// 下拉菜单
// 按钮绑定 data-toggle=dropdown->按钮按下
<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">xxx</button>
<div class="dropdown-menu">xxx</div>

// 折叠 
// data-toggle=collapse 折叠 data-target 绑定隐藏目标
<button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#demo">简单的折叠</button>
<div id="demo">xxx</div>

// 动态选项卡
<ul class="nav nav-tabs">
	<li class="nav-item">
		<a class="nav-link" data-toggle="tab" href="#demo1">Link</a>
	</li>
	<li class="nav-item">
		<a class="nav-link" data-toggle="tab" href="#demo2">Link</a>
	</li>
</ul>

// 折叠导航栏
<nav class="navbar navbar-expand-md bg-dark navbar-dark">
	// logo
  <a class="navbar-brand" href="#">Navbar</a>
	// 默认隐藏按钮
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
		// 折叠后的图标
    <span class="navbar-toggler-icon"></span>
  </button>
	// 折叠div
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
		// 导航栏本尊
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>    
    </ul>
  </div>  
</nav>
// 设定弹出框条件
<a href="#" title="Header" data-toggle="popover" data-trigger="hover" data-content="一些内容">鼠标移动到我这</a>
```

## 轮播

```scss
<div id="demo" class="carousel slide" data-ride="carousel">
 
  <!-- 指示符 -->
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
 
  <!-- 轮播图片 -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://static.runoob.com/images/mix/img_fjords_wide.jpg">
    </div>
    <div class="carousel-item">
      <img src="https://static.runoob.com/images/mix/img_nature_wide.jpg">
    </div>
    <div class="carousel-item">
      <img src="https://static.runoob.com/images/mix/img_mountains_wide.jpg">
    </div>
  </div>
 
  <!-- 左右切换按钮 -->
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
 
</div>
```

## 模态框

```html
<!-- 按钮：用于打开模态框 -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
  打开模态框
</button>
 
<!-- 模态框 -->
<div class="modal fade" id="myModal">
  <!-- 大小 +modal-lg sm -->
  <div class="modal-dialog">
    <div class="modal-content">
 
      <!-- 模态框头部 -->
      <div class="modal-header">
        <h4 class="modal-title">模态框头部</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
 
      <!-- 模态框主体 -->
      <div class="modal-body">
        模态框内容..
      </div>
 
      <!-- 模态框底部 -->
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
      </div>
 
    </div>
  </div>
</div>
```

## 提示框

> 使用jquery
>
> 调用` tooltip() `方法

```html
<div class="container">
  <h3>提示框实例</h3><br>
  <a href="#" data-toggle="tooltip" data-placement="top" title="我是提示内容!">鼠标移动到我这</a>
  <a href="#" data-toggle="tooltip" data-placement="bottom" title="我是提示内容!">鼠标移动到我这</a>
  <a href="#" data-toggle="tooltip" data-placement="left" title="我是提示内容!">鼠标移动到我这</a>
  <a href="#" data-toggle="tooltip" data-placement="right" title="我是提示内容!">鼠标移动到我这</a>
</div>

<script>
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});
</script>
```

## 弹出框

```html
<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on top
</button>

<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on right
</button>

<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on bottom
</button>

<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on left
</button>

<script>
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
});
</script>
```

## 滚动监听

```html
<body data-spy="scroll" data-target=".navbar" data-offset="50">
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#section1">Section 1</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#section2">Section 2</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#section3">Section 3</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
          Section 4
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#section41">Link 1</a>
          <a class="dropdown-item" href="#section42">Link 2</a>
        </div>
      </li>
    </ul>
  </nav>

  <div id="section1" class="container-fluid bg-success" style="padding-top:70px;padding-bottom:70px">
    <h1>Section 1</h1>
    <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at
      the navigation bar while scrolling!</p>
    <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at
      the navigation bar while scrolling!</p>
  </div>
  <div id="section2" class="container-fluid bg-warning" style="padding-top:70px;padding-bottom:70px">
    <h1>Section 2</h1>
    <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at
      the navigation bar while scrolling!</p>
    <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at
      the navigation bar while scrolling!</p>
  </div>
  <div id="section3" class="container-fluid bg-secondary" style="padding-top:70px;padding-bottom:70px">
    <h1>Section 3</h1>
    <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at
      the navigation bar while scrolling!</p>
    <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at
      the navigation bar while scrolling!</p>
  </div>
  <div id="section41" class="container-fluid bg-danger" style="padding-top:70px;padding-bottom:70px">
    <h1>Section 4 Submenu 1</h1>
    <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at
      the navigation bar while scrolling!</p>
    <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at
      the navigation bar while scrolling!</p>
  </div>
  <div id="section42" class="container-fluid bg-info" style="padding-top:70px;padding-bottom:70px">
    <h1>Section 4 Submenu 2</h1>
    <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at
      the navigation bar while scrolling!</p>
    <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at
      the navigation bar while scrolling!</p>
  </div>
</body>
```

## 弹性布局

```html
d-inline-flex: 行内Flex
flex-row: 子元素水平显示
flex-row-reverse: 子元素水平反向显示
flex-column: 垂直显示
flex-wrap: 自动换行

justify-content-center/between/around: 横向排列
align-content-start: 垂直排列

align-self-start: 元素对齐

<div class="d-flex p-3 bg-secondary text-white">  
  <div class="p-2 bg-info">Flex item 1</div>
  // 占满整行
  <div class="p-2 bg-warning flex-fill">Flex item 2</div>
  // 排序3
  <div class="p-2 bg-primary order-1">Flex item 3</div>
</div>
```

## 多媒体对象

```html
<div class="media border p-3">
  <img src="https://static.runoob.com/images/mobile-icon.png" alt="John Doe" class="mr-3 mt-3 rounded-circle" style="width:60px;">
  <div class="media-body">
    <h4>菜鸟教程</h4>
    <p>学的不仅是技术，更是梦想！！！</p>      
  </div>
</div>
```

