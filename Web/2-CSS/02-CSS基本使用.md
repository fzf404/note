<!-- 
title: 02-基本使用
sort: 
--> 

### 引入样式表

```html
<link rel="stylesheet" href="style.css">
<!-- 移动端适配 -->
<link media="(min-width: 800px)" rel="stylesheet" href="desktop.css">
<link media="(max-width: 800px)" rel="stylesheet" href="mobile.css">
```

```css
/* 引入其他样式表 */
@import url(font.css)
  
/* 移动端适配 */
@media only screen and (max-width:1000px) {
	.demo {
		width: 80v
	}
}
```

## 用法

```css
/* 更改鼠标光标 */
cursor: pointer;

/* 延时响应 */
transition: background-color 150ms;

```



## 盒模型

### 外边距

```css
margin-top:100px;
margin-bottom:100px;
margin-right:50px;
margin-left:50px;

/* 上 右 下 左  */
margin: 10px 10px 10px 0;
/* 上 左右 下  */
margin: 10px 5px 20px;
/* 上下 左右  */
margin: 10px 5px;
```

### 内边距

> 同上

### 边框

- style

    > none: 默认无边框
    >
    > dotted: 定义一个点线边框
    >
    > dashed: 定义一个虚线边框
    >
    > solid: 定义实线边框
    >
    > double: 定义两个边框。 两个边框的宽度和 border-width 的值相同
    >
    > groove: 定义3D沟槽边框。效果取决于边框的颜色值
    >
    > ridge: 定义3D脊边框。效果取决于边框的颜色值
    >
    > inset:定义一个3D的嵌入边框。效果取决于边框的颜色值
    >
    > outset: 定义一个3D突出边框。 效果取决于边框的颜色值

```css
/* 不同方向的样式 */
border-top-style: dotted;
border-right-style: solid;
border-bottom-style: dotted;
border-left-style: solid;

/* 指定方式同上 */
border-style: dotted solid;

/* 边框宽度 */
border-width: 3px;

/* 边框颜色 */
border-color: red;

/* 同时指定 */
border: 3px solid red;

/* Outline */
/* border外面不占空间的轮廓 */
/* 颜色 | 样式 | 宽度 */

outline:green dotted 4px;
```

### 阴影