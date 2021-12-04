<!--
title: 04-基础布局
sort:
-->

## 定位

### static(默认)

> 固定位置，不随窗口而移动

```css
div {
  position: static;
  border: 3px solid #73ad21;
}
```

### fixed

> 相对浏览器窗口为固定位置

```css
p {
  position: fixed;
  top: 30px;
  right: 5px;
}
```

### relative

> 相对与当前位置的定位，不可层叠
>
> **常作为绝对定位元素的容器块**

```css
h2 {
  position: relative;
  left: -20px;
}
```

### absolute

> 对于父元素的绝对定位，可层叠

```css
p {
  position: absolute;
  left: 100px;
  top: 150px;
}
```

### sticky

> 粘贴定位，元素到达浏览器边缘后固定,不会出页面。
>
> `position: sticky;`

```css
div {
  position: sticky;
  top: 0;
}
```

### display

> 元素布局方式

```css
display: block 块级元素 inline-block 行内块元素 inline 行内元素 none 隐藏;
```

## Overflow

> 页面内滚动条

| 值      | 描述                                                     |
| :------ | :------------------------------------------------------- |
| visible | 默认值。内容不会被修剪，会呈现在元素框之外。             |
| hidden  | 内容会被修剪，并且其余内容是不可见的。                   |
| scroll  | 内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。 |
| auto    | 如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。 |
| inherit | 规定应该从父元素继承 overflow 属性的值。                 |

```css
div {
  width: 200px;
  height: 50px;
  background-color: #eee;
  overflow: auto;
}
```

## 对齐

```css
/* 浮动 */
float: right;

/* 元素居中 */
margin: auto;

/* 文字居中 */
text-align: center;

/* 垂直居中 */
vertical-align: top;

/* 垂直居中*/
width: 200px;
margin: 0 auto;

/* 靠右对齐 */
position: absolute;
right: 0px;
```
