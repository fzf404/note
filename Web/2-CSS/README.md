<!-- 
title: CSS实战
sort: 
--> 

## 全屏

```scss
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
  width: 100%;
}

// canvas全屏
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
```

### div居中

```css
/* 方式1 */
.center {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
  margin: auto;
  text-align: center;
}

/* 方式2 */
.center {
  position: absolute;
  /* 最左侧位于中心 */
  left: 50%;
  top: 50%;
  /* 中心 */
  transform: translate(-50%, -50%);
  
  text-align: center;
}
```





