<!-- 
title: 17-Scss
sort: 
--> 

> `npm i sass -g`

## 基础

> 嵌套

```scss
// 所有子元素
> * {color: }

// 定义变量
$highlight-color: #F90;
// 引用
border: 2px solid $highlight-color
// 父选择器
&:hover { color: red }

// 父选择器前添加选择器
#content aside {
  color: red;
  body.ie & { color: green }
}
// 编译后
#content aside {color: red};
body.ie #content aside { color: green }

// 嵌套选择器
h1, h2, h3 {margin-bottom: .8em}

// 子组合选择器
article > section { border: 1px solid #ccc }

// 同层相邻组合选择器 紧跟|全体
header + p { font-size: 1.1em }
header ~ p { font-size: 1.1em }
```

## 引入

```scss
// 引入 style.scss
@import	"style"
    
// 嵌套引入
.fzf-theme { @import "style" }

// 这种注释内容不会出现在生成的css文件中
/* 这种注释内容会出现在生成的css文件中 */
```

## 混合器

```scss
// 代码复用
@mixin normal-theme {
    color: brown;
    border-radius: 5px;
}
// 在代码中引入
@include normal-theme;

// 混合器传参
@mixin link-colors($normal, $hover, $visited) {
  color: $normal;
  &:hover { color: $hover; }
  &:visited { color: $visited; }
}
// 调用
a {
  @include link-colors(blue, red, green);
}
```

## 继承

```scss
.inherit {
  border: 1px solid red;
  background-color: #fdd;    
}
.normal {
  @extend .inherit;
  border: 3px;
}
```



