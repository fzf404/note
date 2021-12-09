<!--
title: 01-基础样式
sort:
-->

### 背景

```css
/* 声明全部属性 */
/* 颜色 路径 重复方式 固定方式 位置*/
background: #00FF00 url(background.jpg) no-repeat fixed top;

background-color: #00FF00;
background-image: url(background.jpg);

/* 背景图像的重复方式 */
background-repeat:repeat-x;		/* 水平方向平铺 */
background-repeat:no-repeat;	/* 取消平铺 */

/* 背景是否固定 */
background-attachment: fixd;
/* 位置在右上方 */
background-position:right top

/* 渐变 */
background: linear-gradient(to bottom right, #7ffb, #4bfb);
```

### 文本

```css
/* 颜色 */
color:red;

/* 对齐方式 */
text-align:cneter;
  center 中心
  right 右侧
  justify 每一行宽度相等对齐

/* 删除链接下划线 */
text-decoration:none;

/* 行高 */
text-decoration:none;

/* 上中下线 */
h1 {text-decoration:overline;}
h2 {text-decoration:line-through;}
h3 {text-decoration:underline;}

/* 设置字体 */
p { font-family:"Times New Roman", Times, serif;}
```

### 列表

```css
/* 圆点 */
ul.a {
  list-style-type: circle;
}
/* 方点 */
ul.b {
  list-style-type: square;
}
/* 罗马数字 */
ol.c {
  list-style-type: upper-roman;
}
/* 英文字母 */
ol.d {
  list-style-type: lower-alpha;
}

/* 标记改为图像 */
ul {
  list-style-image: url("sqpurple.gif");
}

/* 简写 */
ul {
  list-style: square url("sqpurple.gif");
}
```

### 表格

```css
/* 边框 */
table,
th,
td {
  border: 1px solid black;
}
/* 边距 */
td {
  padding: 15px;
}

/* 颜色 */
th {
  background-color: green;
  color: white;
}
```
