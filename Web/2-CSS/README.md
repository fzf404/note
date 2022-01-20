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

### div 居中

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

### 滚动条样式

```css
/* 整体样式 */
::-webkit-scrollbar {
  width: 8px;
  /* 不显示横向滑块 */
  height: 0;
}

/* 滑块与导轨共有样式 */
::-webkit-scrollbar-thumb,
::-webkit-scrollbar-track {
  border-radius: 8px;
}

/* 滑块 */
::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.06);
}

/* 导轨 */
::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.04);
}
```

### 禁止选择

```css
user-select: none;
-webkit-user-selet: none;
-moz-user-select: none;
```

