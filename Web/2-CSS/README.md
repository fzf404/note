<!-- 
title: CSS
sort: 
--> 

## 加特技

```scss
// 渐变
background: linear-gradient(to bottom right, #7ffb, #4bfb);

// 阴影
/* x偏移量 | y偏移量 | 阴影模糊半径 | 阴影扩散半径 | 阴影颜色 */
box-shadow: 7px 7px 10px 7px rgba(0, 0, 0, 0.2);

// 文字阴影
/* x偏移量 | y偏移量 | 阴影模糊半径  | 阴影颜色 */
text-shadow: 5px 5px 5px 5px #fffb;

// 背景图
background: url(bgimg.gif) no-repeat 5px 5px;

margin: 
/* 二值语法  纵向 横向 */
/* 三值语法 上 横向 下 */
/* 四值语法 上 右 下 左 */

text-align: center;		/* 文字居中 */

// canvas全屏
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
  width: 100%;
}

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
```

### div居中

```css
/* 方式1 */
.center {
  margin: auto;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
  text-align: center; /* 让div内部文字居中 */

  background-color: #fff;
  border-radius: 20px;
  width: 300px;
  height: 350px;
}

/* 方式2 */
.center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  
  text-align: center;

  background-color: #fff;
  border-radius: 20px;
  width: 300px;
  height: 350px;
}
```

### 移动端适配

```css
@media only screen and (max-width:1000px) {
	.demo {
		width: 80v
	}
}
```

