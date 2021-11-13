<!-- 
title: 03-选择器
sort: 
--> 

## 基础

```css
/* id选择器 */
#test { }

/* class选择器 */
.test2 { }

/* 属性选择器 */
[title="test"] { }
```

## 子类选择器

```css
/* 子类选择器 */
/* div下所有p */
div p { }

/* 父标签是div的p */
div > p { }

/* 跟着p标签的同级a标签 */
p + a { }

/* 跟着p标签的全部同级a标签 */
p ~ a { }

/* 所有子节点里第一个a标签 */
a:first-child {}
```

## 伪类

```css
a:link {color:#000000;} /* 未访问链接*/
a:visited {color:#00FF00;} /* 已访问链接 */
a:hover {color:#FF00FF;} /* 鼠标移动到链接上 */
a:active {color:#0000FF;} /* 鼠标点击时 */
input:focus {outline: none;} /* 选中集中时 */

p:first-letter {} /* 第一个单词 */
```

## 伪元素

```css
/* a标签前同级伪元素 */
a:before { }
/* a标签后同级伪元素 */
a:after { }
```

