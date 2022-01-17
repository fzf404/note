<!--
title: 04-ElectronAPI
sort:
-->

### BrowserWindow

```js
const win = BrowserWindow({
    x: 10,
    y: 30,
    width: 400,
    minWidth: 400,
    height: 200,
    minHeight: 200,
    transparent: true, // 透明
    hasShadow: false, // 阴影
    frame: false, // 隐藏边框
    fullscreenable: false, // 禁止全屏
    resizable: false, // 不可调整大小
    alwaysOnTop: true, // 置顶
    opacity: 0.9, // 不透明度
    vibrancy: 'dark', // mac 毛玻璃
    visualEffectState: 'active', // 自动应用
})

// 事件监听
win.on('move',function(){
  console.log(win.getPosition())
})

// 置顶/取消置顶
win.setAlwaysOnTop(!win.isAlwaysOnTop())
```

