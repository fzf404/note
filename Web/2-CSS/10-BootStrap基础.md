<!-- 
title: 10-BootStrap基础
sort: 
--> 

## 引入

```html
<link href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/4.5.3/css/bootstrap.min.css" rel="stylesheet">

<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdn.bootcdn.net/ajax/libs/popper.js/1.16.0/umd/popper.js"></script>
<script src="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/4.5.3/js/bootstrap.min.js"></script>
```

## 小工具

```scss
// 引导标题
<span class="lead">text</span>
.small			更小的文本
.text-left	左对齐
.text-right center
// 添加边框
<span class="border">text</span>
<span class="border border-0">text</span>
<span class="border border-top-0">text</span>
<span class="border border-primary"></span>		// 边框颜色
// 圆角边框
<span class="rounded"></span>
<span class="rounded-top"></span>
<span class="rounded-circle"></span>
// 浮动
<span class="float-left">左浮动</span>
<span class="float-right">右浮动</span>
// margin
<span class="m-auto">居中</span>
<span class="mx-auto">x轴居中</span>
<span class="ml-3">margin-left: 1rem</span>
<span class="mt-5">margin-top: 3rem</span>
// padding
<span class="p-3">padding: 1rem</span>
// 宽高度
<div class="w-25 bg-warning">宽度 25%</div>
<div class="mw-100 bg-warning">最大宽度 100%</div>
// 小屏幕隐藏
d-none d-sm-block
// 图片居中
d-block mx-auto
```

## 布局

```scss
.contianer	// 居中

// 栅格 - 共12列
// 指定设备大小，小于某个值自动变小
.col- sm md lg xl -auto
sm 540px md 720px lg 960px xl 1140px
// 行
row row-cols-2
// 栅格垂直对齐
align-items-start center end
// 元素垂直对齐
align-self-start * *
// 栅格水平对齐
justify-items-start center end
justify-self-start * *
// 向右偏移
offset-lg-4
// 向左右移动
ml-auto	
mr-lg-auto
// 消除间隙
no-gutters
// 排序
order-1 ~ 12 first
```

### 实例

```html
<div class="container-fluid">
  <div class="row">
    <div class="col-sm-3 col-md-6">
      <p>PC:50% PAD:25% PHONE:100%</p>
    </div>
    <div class="col-sm-9 col-md-6">
      <p>PC:50% PAD:75% PHONE:100%</p>
    </div>
  </div>
</div>
```

## 内容

```scss
// 比h1更大的标题
<h1 class="display-4">display</h1>
// 更小
<small>little</small>
// 高亮文本
<mark>test</mark>
// 下划线说明
<abbr title="你们的小f">fzf404</abbr>

// 引用
<blockquote class="blockquote">
  <p>不记笔记是没有好结果的~</p>
  <footer class="blockquote-footer">From fzf404</footer>
</blockquote>

// 描述列表元素
<h2 class="display-4">Compare</h2>
  <p>different form fzf to p2p</p>
<dl>
  <dt>fzf404</dt>
  <dd>- smart man</dd>
  <dt>p2p404</dt>
  <dd>- ugly things</dd>
</dl>

// 代码
<code>import bootstrap4</code>
    
// 按键
<kbd>Ctrl+D</kbd>

// 等宽字体
<pre>Coding in there</pre>
```

## 颜色

```scss
<p class="text-muted">柔和的文本。</p>
<p class="text-primary">重要的文本。</p>
<p class="text-success">执行成功的文本。</p>
<p class="text-info">代表一些提示信息的文本。</p>
<p class="text-warning">警告文本。</p>
<p class="text-danger">危险操作文本。</p>
<p class="text-secondary">副标题。</p>
<p class="text-dark">深灰色文字。</p>
<p class="text-light">浅灰色文本（白色背景上看不清楚）。</p>
<p class="text-white">白色文本（白色背景上看不清楚）。</p>

bg-xx: 	// 背景颜色
```
## 表格

```scss
<table class="table">

table-striped: 条纹表格
table-bordered: 带边框表格
table-hover: 鼠标悬停表格
table-black: 黑表格
<tr class="table-xx">: 颜色同上

table-responsive-: 响应式表格
```

## 图像

```scss
// 圆角照片
<img src="xx.jpg" class="rounded">
rounded-circle: 圆照片
img-thumbnail: 图片缩略图
float-left: 对齐方式
img-fluid: 自动调整大小
```

## 提示框

```scss
alert
alert-success
alert-dismissible: 可关闭
fade show: 关闭时淡入淡出
```

## 按钮

```scss
// 可用于a button input元素上
<button type="button" class="btn">基本按钮</button>
<button type="button" class="btn btn-primary">主要按钮</button>
<button type="button" class="btn btn-secondary">次要按钮</button>
<button type="button" class="btn btn-success">成功</button>
<button type="button" class="btn btn-info">信息</button>
<button type="button" class="btn btn-warning">警告</button>
<button type="button" class="btn btn-danger">危险</button>
<button type="button" class="btn btn-dark">黑色</button>
<button type="button" class="btn btn-light">浅色</button>
<button type="button" class="btn btn-link">链接</button>
// 边框
btn-outline-primary
// 大小
btn-sm lg
// 块级按钮
btn-block
// 禁用与按下
disabled active
// 按钮组
<div class="btn-group">
	<button>...
</div>
btn-group-vertical		// 垂直按钮组
dropdown-menu
```

## 徽章

```scss
<h1>测试标题 <span class="badge badge-secondary">New</span></h1>
<span class="badge badge-primary">主要</span>
<span class="badge badge-secondary">次要</span>
<span class="badge badge-success">成功</span>
<span class="badge badge-danger">危险</span>
<span class="badge badge-warning">警告</span>
<span class="badge badge-info">信息</span>
<span class="badge badge-light">浅色</span>
<span class="badge badge-dark">深色</span>
+badge-pill: 药丸型
// 可嵌入按钮
```

## 进度条

```scss
<div class="progress" style="height:10px;">
  <div class="progress-bar bg-success" style="width:70%"></div>
</div>
// 颜色
bg-success warning info danger
progress-bar-striped: 条纹进度条
progress-bar-animated: 进度条动画
```

## 分页

```scss
设置大小 +pagination-lg/sm
<ul class="pagination">
  <li class="page-item"><a class="page-link" href="#">Previous</a></li>
  <li class="page-item"><a class="page-link" href="#">1</a></li>
  <li class="page-item active"><a class="page-link" href="#">2</a></li>
  <li class="page-item"><a class="page-link" href="#">3</a></li>
  <li class="page-item disable"><a class="page-link" href="#">Next</a></li>
</ul
// 面包屑导航2
<ul class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Photos</a></li>
    <li class="breadcrumb-item"><a href="#">Summer 2017</a></li>
    <li class="breadcrumb-item"><a href="#">Italy</a></li>
    <li class="breadcrumb-item active">Rome</li>
  </ul>
```

## 列表组

```scss
<ul class="list-group">
  <li class="list-group-item .list-group-item-success">First item</li>
  <li class="list-group-item active">Second item</li>
  <li class="list-group-item disable">Third item</li>
</ul>
// 链接列表
  <div class="list-group">
    <a href="#" class="list-group-item list-group-item-action">First item</a>
    <a href="#" class="list-group-item list-group-item-action">Second item</a>
    <a href="#" class="list-group-item list-group-item-action">Third item</a>
  </div>
```

## 卡片

```scss
<div class="card bg-success text-white">
  <div class="card-header">头部</div>
  <div class="card-body">内容</div> 
  <div class="card-footer">底部</div>
</div>
// 图片展示
<div class="card" style="width:400px">
  <img class="card-img-top" src="https://static.runoob.com/images/mix/img_avatar.png" alt="Card image"
    style="width:100%">
  <div class="card-body">
    <h4 class="card-title">John Doe</h4>
    <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
    <a href="#" class="btn btn-primary">See Profile</a>
  </div>
</div>
// 图片做背景
card-body -> card-img-overlay
```

## 下拉菜单

```scss
<div class="dropdown">
	// 按钮须添加 .dropdown-toggle 和 data-toggle="dropdown"
	<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
  </button>
  <div class="dropdown-menu">
		<h5 class="dropdown-header">Dropdown header</h5>		// 下拉菜单标题
    <a class="dropdown-item" href="#">Link 1</a>
    <a class="dropdown-item" href="#">Link 2</a>
    <a class="dropdown-item" href="#">Link 3</a>
    <div class="dropdown-divider"> </div>								// 分割线
    <a class="dropdown-item" href="#">Another link</a>
  </div>
</div>
// 不同方向 -dropdown
dropright dropup dropleft
// 点击与菜单分开
dropdown-toggle-split
```

## 折叠

>  `a`元素上你可以使用` href`属性来代替`data-target`属
>
> 默认隐藏，使用.show显示

```scss
<button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#demo">简单的折叠</button>
<div id="demo" class="collapse">

  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

</div>
// 手风琴
<div class="card">
  <div class="card-header">
    <a class="card-link" data-toggle="collapse" href="#collapseOne">
      选项一
    </a>
  </div>
  <div id="collapseOne" class="collapse show" data-parent="#accordion">
    <div class="card-body">
      #1 内容1111111111
    </div>
  </div>
</div>
<div class="card">
  <div class="card-header">
    <a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
    选项二
  </a>
  </div>
  <div id="collapseTwo" class="collapse" data-parent="#accordion">
    <div class="card-body">
      #2 内容2222222222
    </div>
  </div>
</div>
<div class="card">
  <div class="card-header">
    <a class="collapsed card-link" data-toggle="collapse" href="#collapseThree">
      选项三
    </a>
  </div>
  <div id="collapseThree" class="collapse" data-parent="#accordion">
    <div class="card-body">
      #3 内容33333333333
    </div>
  </div>
</div>
```

## 导航

```scss
ul-justify-content-center: 居中显示 
   justify-content-end: 右对齐
   flex-column: 垂直导航
   nav-pills: 胶囊导航
   nav-justified: 元素等宽展示

li-dropdown-toggle: 下拉菜单
   data-toggle="tab"
   动态选项卡

<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item active">
    <a class="nav-link" href="#">Link</a>
  </li>
	// 下拉菜单
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Dro
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Link 1</a>
      <a class="dropdown-item" href="#">Link 2</a>
      <a class="dropdown-item" href="#">Link 3</a>
    </div>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>
```

## 导航栏

```scss
// 水平导航栏
<nav class="navbar navbar-expand-sm bg-light navbar-light">
	// Logo
	<a class="navbar-brand" href="#">Logo</a>
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#">Link 1</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link 2</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link 3</a>
    </li>
  </ul>
</nav>

- navbar-expand-sm: 垂直导航栏
bg-success navbar-success: 颜色
fixed-top: 固定导航栏
fixed-bottom

// 导航栏搜索框
<form class="form-inline">
	<input class="form-control" type="text" placeholder="Search">
	<button class="btn btn-success" type="button">Search</button>
</form>

// 导航栏文本-不放在ul里
<span class="navbar-text">
```

## 折叠导航栏

```scss
// 主nav栏
<nav class="navbar navbar-expand-md bg-dark navbar-dark">
	// logo
  <a class="navbar-brand" href="#">Navbar</a>
	// 默认隐藏按钮
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
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
```

## 面包屑导航

```scss
<ol class="breadcrumb">
  <li class="breadcrumb-item"><a href="#">Home</a></li>
  <li class="breadcrumb-item"><a href="#">Library</a></li>
  <li class="breadcrumb-item active">Data</li>
</ol>
// 实例
<nav class="breadcrumb">
  <a class="breadcrumb-item" href="#">Home</a>
  <a class="breadcrumb-item" href="#">Library</a>
  <a class="breadcrumb-item" href="#">Data</a>
  <span class="breadcrumb-item active">Bootstrap</span>
</nav>
```

## 表单

```scss
// 堆叠表单
<form>
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" id="email">
  </div>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" id="pwd">
  </div>
  <div class="form-check">
    <label class="form-check-label">
      <input class="form-check-input" type="checkbox"> Remember me
    </label>
  </div>
	// radio
  <div class="radio">
    <label><input type="radio" name="optradio">Option 1</label>
  </div>
  <div class="radio">
    <label><input type="radio" name="optradio">Option 2</label>
  </div>
	// radio 单行显示
	<label class="radio-inline"><input type="radio" name="optradio">Option 1</label>
	<label class="radio-inline"><input type="radio" name="optradio">Option 2</label
	// textarea
  <div class="form-group">
    <label for="comment">评论:</label>
    <textarea class="form-control" rows="5" id="comment"></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
	// 下拉菜单
  <div class="form-group">
  	<label for="sel1">单选下拉菜单:</label>
  	<select class="form-control" id="sel1">
  		<option>1</option>
  		<option>2</option>
  		<option>3</option>
  	</select>
	</div>
</form>
```

## 输入框组

```scss
<form>
	// margin-bottom
  <div class="input-group mb-3">
		// 前缀
    <div class="input-group-prepend">
      <span class="input-group-text">@</span>
    </div>
    <input type="text" class="form-control" placeholder="Username">
  </div>
 
  <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Your Email">
		// 后缀
    <div class="input-group-append">
      <span class="input-group-text">@runoob.com</span>
    </div>
  </div>
</form>

<form action="/action_page.php">
  // 自定义复选框
  <div class="custom-control custom-checkbox mb-3">
    <input type="checkbox" class="custom-control-input" id="customCheck" name="example1">
    <label class="custom-control-label" for="customCheck">自定义复选框</label>
  </div>  
  // 默认复选框
  <input type="checkbox" id="defaultCheck" name="example2">
  <label for="defaultCheck">默认复选框</label>
  <br>
  // 自定义单选框
  <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="customRadio" name="example1">
    <label class="custom-control-label" for="customRadio">单选框1</label>
  </div>    
	<div class="custom-control custom-radio">
      <input type="radio" class="custom-control-input" id="customRadio2" name="example2">
      <label class="custom-control-label" for="customRadio2">单选框2</label>
  </div> 
  // 自定义下拉菜单
  <select name="cars" class="custom-select-sm">
    <option selected>自定义选择菜单</option>
    <option value="Google">Google</option>
    <option value="Runoob">Runoob</option>
    <option value="Taobao">Taobao</option>
  </select>
  <button type="submit" class="btn btn-primary">提交</button>
</form>
        
custom-control-inline: 一行显示
```

