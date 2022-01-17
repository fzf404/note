<!--
title: 05-弹性布局
sort:
-->

> `display: flex;`
>
> `display: grid;`

## Flex 布局

### 父容器

```scss
// 排列反向
flex-direction: row | row-reverse | column | column-reverse;
// 换行
flex-wrap: nowrap | wrap | wrap-reverse;
// 合并前两个
flex-flow: column wrap;
// 水平对齐
justify-content:
//	开头		结尾		中心
flex-start | flex-end | center |
//	两头		中心		等距
space-between | space-around | space-evenly
// 垂直对齐
align-items:
// 拉伸		顶部			底部		中心
stretch | flex-start | flex-end | center |
baseline	// 中心线
// 多行对齐
align-content:
stretch | flex-start | flex-end | center |
space-between | space-around | space-evenly | baseline
```

### 子项目

```scss
order: 			// 顺序
flex-grow:		// 拉伸比例
flex-shrink: 	// 收缩比率
flex-basis:		// 基本宽度
flex:			// 前三者和
// 子项目对齐方式
align-self：
auto | flex-start | flex-end | center | stretch | baseline
```

### 实例

```css
/* 居中对齐 */
display: flex;
justify-content: center;
align-items: center;

/* 导航栏 */
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
```

## Grid 布局

```scss
display: grid;

// 垂直排列
grid-template-rows: 10rem 30%;
// 两行, 每行 50px
grid-template-rows: repeat(2, 50px);
// 水平排列 自动 剩余空间占1份 最小100px/最大占2份
grid-template-columns: auto 1fr minmax(100px, 2fr);
// 自动填充, 每个单元格 200px
grid-template-columns: repeat(auto-fill, 200px);

// 间距
row-gap: 2rem;
column-gap: 2rem;
// 简写
grid-gap: 2rem 2rem;

// 相对父容器对齐
justify-content: center;
align-content: center;

// 子元素对齐
justify-items: center; // 水平对齐
align-items: center; // 垂直对齐

// 子元素操作
.item:nth-child(2) {
  justify-self: start;
  align-items: start;
}

// 子元素
// 大小为1, 左边框在第一个网格线, 右边框在第二个网格线
grid-column-start: 1;
grid-column-end: 2;
// 大小为2, 左边框在第二个网格线, 右边框在第四个网格线
grid-column-start: 2;
grid-column-end: 4;
```
