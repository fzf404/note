<!-- 
title: 10-CSS基础
sort: 
--> 

# CSS基础

## First

![image-20200721103637737](https://gitee.com/nmdfzf404/Image-hosting/raw/master/20200721103644.png)

## 基础

### 选择器

```css
/* id选择器 */
#test { }

/* class选择器 */
.test2 { }

/* 属性选择器 */
[title="test"] { }

/* 子类选择器 */
/* div下所有p */
div p { }

/* 父标签是div的p */
div > p { }

/* a标签下面的div */
.a + div { }
```

### 创建css

```html
<!-- 外链css -->
<head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>

<!-- 内链css -->
<style>
hr {color:sienna;}
p {margin-left:20px;}
body {background-image:url("images/background.png");}
</style>

<p style="color:sienna;margin-left:20px">这是一个段落。</p>
 
<!-- 引入css文件 -->
@import url(test.css)
```

## 背景

```css
background-color
background-image
/* 背景图像的重复方式 */
background-repeat

background-repeat:repeat-x		水平方向平铺
background-repeat:no-repeat		取消平铺
/* 背景是否固定 */
background-attachment

background-position
background-position:right top	位置在右上方
/* 简写 */
body {background:#ffffff url('img_tree.png') no-repeat right top;}
```

## 文本

```css
color:red
/* 对齐方式 */
text-align:cneter
center	中心
right	右侧
justify 每一行宽度相等对齐
/* 删除链接下划线 */
text-decoration:none
/* 上中下线 */
h1 {text-decoration:overline;}
h2 {text-decoration:line-through;}
h3 {text-decoration:underline;}	
/* 设置字体 */
p { font-family:"Times New Roman", Times, serif;}
```


## 伪类

```css
a:link {color:#000000;}		/* 未访问链接*/
a:visited {color:#00FF00;}	/* 已访问链接 */
a:hover {color:#FF00FF;}	/* 鼠标移动到链接上 */
a:active {color:#0000FF;}	/* 鼠标点击时 */
input:focus {outline: none;}/* 选中集中时 */

p:first-letter {}	/* 第一个单词 */
p:after {content: "text"}	/* 末尾添加 */
```

## 列表及表格

### 标记

```css
ul.a {list-style-type: circle;}
ul.b {list-style-type: square;}
 
ol.c {list-style-type: upper-roman;}
ol.d {list-style-type: lower-alpha;}

/* 图像标记 */
ul
{
    list-style-image: url('sqpurple.gif');
}

/* 简写 */
ul
{
    list-style: square url("sqpurple.gif");
}
```

### 表格

```css
/* 边框 */
able, th, td
{
    border: 1px solid black;
}

td
{
    padding:15px;
}

/* 颜色 */
table, td, th
{
    border:1px solid green;
}
th
{
    background-color:green;
    color:white;
}
```

