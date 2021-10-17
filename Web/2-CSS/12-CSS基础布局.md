

<!-- 
title: 12-CSS基础布局
sort: 
--> 

## 定位

### static

> 固定位置，不随窗口而移动
>
> 默认position

```css
div {
    position: static;
    border: 3px solid #73AD21;
}
```

### fixed

> 相对浏览器窗口为固定位置

```css
p
{
	position:fixed;
	top:30px;
	right:5px;
}
```

### relative

> 相对与当前位置的定位，不可层叠
>

![image-20200726100439709](https://gitee.com/nmdfzf404/Image-hosting/raw/master/20200726100446.png)

```css
h2
{
    position:relative;
    left:-20px;
}
h2
{
    position:relative;
    left:20px;
}
```

### absolute

> 对于父元素的绝对定位，可层叠
>
> `position:absolute;`

### sticky

> 粘贴定位，元素不会出页面。
>
> `position: sticky;`

## Overflow

> 页面内滚动条
>
> | 值      | 描述                                                     |
> | :------ | :------------------------------------------------------- |
> | visible | 默认值。内容不会被修剪，会呈现在元素框之外。             |
> | hidden  | 内容会被修剪，并且其余内容是不可见的。                   |
> | scroll  | 内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。 |
> | auto    | 如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。 |
> | inherit | 规定应该从父元素继承 overflow 属性的值。                 |

```css
div {
    width: 200px;
    height: 50px;
    background-color: #eee;
    overflow: auto;
}
```

## 浮动

> 在元素的水平方向浮动，不能上下
>
> `float:right;`
>
> 清除： `clear:both`

## 对齐

> 元素居中：`margin: auto;`
>
> 文本居中：`text-align: center;`
>
> 垂直：`vertical-align: top`
>
> 定位对齐：`position: absolute; right: 0px;`
>
> 将div使用overflow，使元素包括
>
> 垂直居中：`padding: 70px 0; text-align: center`

## 选择

> `div p{}`：选择div中所有p元素
>
> `div>p`：直接p元素
>
> `div+p`：div后的第一个p元素
>
> `div~p`：div后的所有p元素

## 伪类

```css
a:link {color:#FF0000;} /* 未访问的链接 */
a:visited {color:#00FF00;} /* 已访问的链接 */
a:hover {color:#FF00FF;} /* 鼠标划过链接 */
a:active {color:#0000FF;} /* 已选中的链接 */

a.red:visited {color:#FF0000;}	/* 与class配合使用 */
/* 匹配第一个子元素 */
p:first-child {}
/* 匹配所有p中第一个<i>元素 */
p > i:first-child
/* 匹配第一个p中所有<i>元素 */
p:first-child i
```

### 伪元素

> `p:first-line`：p的第一行
>
> `h1:before `：h1之前
>
> `h1:after`：h1之后