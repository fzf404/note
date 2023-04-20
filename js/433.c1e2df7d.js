(window.webpackJsonp=window.webpackJsonp||[]).push([[433],{1061:function(n,t){n.exports='\x3c!--\ntitle: 11-BootStrap进阶\nsort:\n--\x3e\n\n## data-xxx\n\n> data-toggle: 绑定事件,终止链接默认行为\n>\n> data-trigger: 定义如何触发弹出框\n>\n> data-target: 绑定目标\n\n```scss\n// 下拉菜单\n// 按钮绑定 data-toggle=dropdown->按钮按下\n<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">xxx</button>\n<div class="dropdown-menu">xxx</div>\n\n// 折叠\n// data-toggle=collapse 折叠 data-target 绑定隐藏目标\n<button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#demo">简单的折叠</button>\n<div id="demo">xxx</div>\n\n// 动态选项卡\n<ul class="nav nav-tabs">\n\t<li class="nav-item">\n\t\t<a class="nav-link" data-toggle="tab" href="#demo1">Link</a>\n\t</li>\n\t<li class="nav-item">\n\t\t<a class="nav-link" data-toggle="tab" href="#demo2">Link</a>\n\t</li>\n</ul>\n\n// 折叠导航栏\n<nav class="navbar navbar-expand-md bg-dark navbar-dark">\n\t// logo\n  <a class="navbar-brand" href="#">Navbar</a>\n\t// 默认隐藏按钮\n  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">\n\t\t// 折叠后的图标\n    <span class="navbar-toggler-icon"></span>\n  </button>\n\t// 折叠div\n  <div class="collapse navbar-collapse" id="collapsibleNavbar">\n\t\t// 导航栏本尊\n    <ul class="navbar-nav">\n      <li class="nav-item">\n        <a class="nav-link" href="#">Link</a>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link" href="#">Link</a>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link" href="#">Link</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n// 设定弹出框条件\n<a href="#" title="Header" data-toggle="popover" data-trigger="hover" data-content="一些内容">鼠标移动到我这</a>\n```\n\n## 轮播\n\n```scss\n<div id="demo" class="carousel slide" data-ride="carousel">\n\n  \x3c!-- 指示符 --\x3e\n  <ul class="carousel-indicators">\n    <li data-target="#demo" data-slide-to="0" class="active"></li>\n    <li data-target="#demo" data-slide-to="1"></li>\n    <li data-target="#demo" data-slide-to="2"></li>\n  </ul>\n\n  \x3c!-- 轮播图片 --\x3e\n  <div class="carousel-inner">\n    <div class="carousel-item active">\n      <img src="https://static.runoob.com/images/mix/img_fjords_wide.jpg">\n    </div>\n    <div class="carousel-item">\n      <img src="https://static.runoob.com/images/mix/img_nature_wide.jpg">\n    </div>\n    <div class="carousel-item">\n      <img src="https://static.runoob.com/images/mix/img_mountains_wide.jpg">\n    </div>\n  </div>\n\n  \x3c!-- 左右切换按钮 --\x3e\n  <a class="carousel-control-prev" href="#demo" data-slide="prev">\n    <span class="carousel-control-prev-icon"></span>\n  </a>\n  <a class="carousel-control-next" href="#demo" data-slide="next">\n    <span class="carousel-control-next-icon"></span>\n  </a>\n\n</div>\n```\n\n## 模态框\n\n```html\n\x3c!-- 按钮：用于打开模态框 --\x3e\n<button\n  type="button"\n  class="btn btn-primary"\n  data-toggle="modal"\n  data-target="#myModal"\n>\n  打开模态框\n</button>\n\n\x3c!-- 模态框 --\x3e\n<div class="modal fade" id="myModal">\n  \x3c!-- 大小 +modal-lg sm --\x3e\n  <div class="modal-dialog">\n    <div class="modal-content">\n      \x3c!-- 模态框头部 --\x3e\n      <div class="modal-header">\n        <h4 class="modal-title">模态框头部</h4>\n        <button type="button" class="close" data-dismiss="modal">\n          &times;\n        </button>\n      </div>\n\n      \x3c!-- 模态框主体 --\x3e\n      <div class="modal-body">模态框内容..</div>\n\n      \x3c!-- 模态框底部 --\x3e\n      <div class="modal-footer">\n        <button type="button" class="btn btn-secondary" data-dismiss="modal">\n          关闭\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n```\n\n## 提示框\n\n> 使用 jquery\n>\n> 调用`tooltip()`方法\n\n```html\n<div class="container">\n  <h3>提示框实例</h3>\n  <br />\n  <a href="#" data-toggle="tooltip" data-placement="top" title="我是提示内容!"\n    >鼠标移动到我这</a\n  >\n  <a\n    href="#"\n    data-toggle="tooltip"\n    data-placement="bottom"\n    title="我是提示内容!"\n    >鼠标移动到我这</a\n  >\n  <a href="#" data-toggle="tooltip" data-placement="left" title="我是提示内容!"\n    >鼠标移动到我这</a\n  >\n  <a href="#" data-toggle="tooltip" data-placement="right" title="我是提示内容!"\n    >鼠标移动到我这</a\n  >\n</div>\n\n<script>\n  $(document).ready(function () {\n    $(\'[data-toggle="tooltip"]\').tooltip();\n  });\n<\/script>\n```\n\n## 弹出框\n\n```html\n<button\n  type="button"\n  class="btn btn-secondary"\n  data-container="body"\n  data-toggle="popover"\n  data-placement="top"\n  data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n>\n  Popover on top\n</button>\n\n<button\n  type="button"\n  class="btn btn-secondary"\n  data-container="body"\n  data-toggle="popover"\n  data-placement="right"\n  data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n>\n  Popover on right\n</button>\n\n<button\n  type="button"\n  class="btn btn-secondary"\n  data-container="body"\n  data-toggle="popover"\n  data-placement="bottom"\n  data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n>\n  Popover on bottom\n</button>\n\n<button\n  type="button"\n  class="btn btn-secondary"\n  data-container="body"\n  data-toggle="popover"\n  data-placement="left"\n  data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n>\n  Popover on left\n</button>\n\n<script>\n  $(document).ready(function () {\n    $(\'[data-toggle="popover"]\').popover();\n  });\n<\/script>\n```\n\n## 滚动监听\n\n```html\n<body data-spy="scroll" data-target=".navbar" data-offset="50">\n  <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">\n    <ul class="navbar-nav">\n      <li class="nav-item">\n        <a class="nav-link" href="#section1">Section 1</a>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link" href="#section2">Section 2</a>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link" href="#section3">Section 3</a>\n      </li>\n      <li class="nav-item dropdown">\n        <a\n          class="nav-link dropdown-toggle"\n          href="#"\n          id="navbardrop"\n          data-toggle="dropdown"\n        >\n          Section 4\n        </a>\n        <div class="dropdown-menu">\n          <a class="dropdown-item" href="#section41">Link 1</a>\n          <a class="dropdown-item" href="#section42">Link 2</a>\n        </div>\n      </li>\n    </ul>\n  </nav>\n\n  <div\n    id="section1"\n    class="container-fluid bg-success"\n    style="padding-top:70px;padding-bottom:70px"\n  >\n    <h1>Section 1</h1>\n    <p>\n      Try to scroll this section and look at the navigation bar while scrolling!\n      Try to scroll this section and look at the navigation bar while scrolling!\n    </p>\n    <p>\n      Try to scroll this section and look at the navigation bar while scrolling!\n      Try to scroll this section and look at the navigation bar while scrolling!\n    </p>\n  </div>\n  <div\n    id="section2"\n    class="container-fluid bg-warning"\n    style="padding-top:70px;padding-bottom:70px"\n  >\n    <h1>Section 2</h1>\n    <p>\n      Try to scroll this section and look at the navigation bar while scrolling!\n      Try to scroll this section and look at the navigation bar while scrolling!\n    </p>\n    <p>\n      Try to scroll this section and look at the navigation bar while scrolling!\n      Try to scroll this section and look at the navigation bar while scrolling!\n    </p>\n  </div>\n  <div\n    id="section3"\n    class="container-fluid bg-secondary"\n    style="padding-top:70px;padding-bottom:70px"\n  >\n    <h1>Section 3</h1>\n    <p>\n      Try to scroll this section and look at the navigation bar while scrolling!\n      Try to scroll this section and look at the navigation bar while scrolling!\n    </p>\n    <p>\n      Try to scroll this section and look at the navigation bar while scrolling!\n      Try to scroll this section and look at the navigation bar while scrolling!\n    </p>\n  </div>\n  <div\n    id="section41"\n    class="container-fluid bg-danger"\n    style="padding-top:70px;padding-bottom:70px"\n  >\n    <h1>Section 4 Submenu 1</h1>\n    <p>\n      Try to scroll this section and look at the navigation bar while scrolling!\n      Try to scroll this section and look at the navigation bar while scrolling!\n    </p>\n    <p>\n      Try to scroll this section and look at the navigation bar while scrolling!\n      Try to scroll this section and look at the navigation bar while scrolling!\n    </p>\n  </div>\n  <div\n    id="section42"\n    class="container-fluid bg-info"\n    style="padding-top:70px;padding-bottom:70px"\n  >\n    <h1>Section 4 Submenu 2</h1>\n    <p>\n      Try to scroll this section and look at the navigation bar while scrolling!\n      Try to scroll this section and look at the navigation bar while scrolling!\n    </p>\n    <p>\n      Try to scroll this section and look at the navigation bar while scrolling!\n      Try to scroll this section and look at the navigation bar while scrolling!\n    </p>\n  </div>\n</body>\n```\n\n## 弹性布局\n\n```html\nd-inline-flex: 行内Flex flex-row: 子元素水平显示 flex-row-reverse:\n子元素水平反向显示 flex-column: 垂直显示 flex-wrap: 自动换行\njustify-content-center/between/around: 横向排列 align-content-start: 垂直排列\nalign-self-start: 元素对齐\n\n<div class="d-flex p-3 bg-secondary text-white">\n  <div class="p-2 bg-info">Flex item 1</div>\n  // 占满整行\n  <div class="p-2 bg-warning flex-fill">Flex item 2</div>\n  // 排序3\n  <div class="p-2 bg-primary order-1">Flex item 3</div>\n</div>\n```\n\n## 多媒体对象\n\n```html\n<div class="media border p-3">\n  <img\n    src="https://static.runoob.com/images/mobile-icon.png"\n    alt="John Doe"\n    class="mr-3 mt-3 rounded-circle"\n    style="width:60px;"\n  />\n  <div class="media-body">\n    <h4>菜鸟教程</h4>\n    <p>学的不仅是技术，更是梦想！！！</p>\n  </div>\n</div>\n```\n'}}]);