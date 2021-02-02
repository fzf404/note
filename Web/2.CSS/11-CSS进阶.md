<!-- 
title: 11-CSS进阶
sort: 
--> 
## CSS进阶

## 模型

> Margin	外边距
> Border	边框
> Padding	内边距
> Content	内容

![CSS box-model](https://www.runoob.com/images/box-model.gif)

## 边框border

### `border-style`

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

### 其他

- `border-width`

- `border-color`

- ```css
  p
  {
      border-top-style:dotted;
      border-right-style:solid;
      border-bottom-style:dotted;
      border-left-style:solid;
  }
  /* 或 */
  border-style:dotted solid;
  ```

- 简写：`border:5px solid red;`

  > border-style：属性1，属性2，属性3，属性4
  >
  > 上->右->下->左
  >
  > border-style：属性1，属性2，属性3
  >
  > 上->左右->下
  >
  > border-style：属性1，属性2
  >
  > 上下->左右
  >
  > border-style：属性1
  >
  > 上下左右属性相同

## 轮廓outline

> 轮廓（outline）是绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用。
>
> `line-height`与`line-width`

## ![Outline](https://www.runoob.com/images/box_outline.gif)

## 外边距margin

| 值       | 说明                                        |
| :------- | :------------------------------------------ |
| auto     | 设置浏览器边距。 这样做的结果会依赖于浏览器 |
| *length* | 定义一个固定的margin（使用像素，pt，em等）  |
| *%*      | 定义一个使用百分比的边距                    |

![img](https://www.runoob.com/wp-content/uploads/2013/08/VlwVi.png)

### 简写

```css
margin-top:100px;
margin-bottom:100px;
margin-right:50px;
margin-left:50px;
/* 
上 右 下 左 
上 左右 下
上下 左右
*/
margin:100px 50px;
```

## 填充padding

```css
padding-top:25px;
padding-bottom:25px;
padding-right:50px;
padding-left:50px;

padding:25px 50px;
```

## 嵌套

```css
p
{
    color:blue;
    text-align:center;
}
.marked
{
    background-color:red;
}
.marked p
{
    color:white;
}
p.marked{
    text-decoration:underline;
}
```

## 隐藏

- 隐藏占空间：`h1 {visibility:hidden;}`
- 隐藏不占空间：`h1 {display:none;}`

