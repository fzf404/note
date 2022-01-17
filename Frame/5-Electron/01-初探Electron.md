<!--
title: 01-初探Electron
sort:
-->

## 安装

```bash
mkdir first-electron && cd electron
yarn init
yarn add --dev electron
```

## 使用

> `main.js`

```js
const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // 引入渲染器
      preload: path.join(__dirname, 'preload.js'),
    },
  })
  // 加载 index.html
  win.loadFile('index.html')
  // 打开开发工具
  // mainWindow.webContents.openDevTools()
}
// 监听 Ready
app.whenReady().then(() => {
  // 创建窗口
  createWindow()
  // 兼容 Mac
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
// 监听应用退出
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

```

> `index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <!-- https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP -->
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'" />
    <meta http-equiv="X-Content-Security-Policy" content="default-src 'self'; script-src 'self'" />
    <title>Hello World!</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    We are using Node.js <span id="node-version"></span>, Chromium <span id="chrome-version"></span>, and Electron
    <span id="electron-version"></span>.
  </body>
</html>

```

> `preload.js`

```js
window.addEventListener('DOMContentLoaded', () => {
  // 替换文本
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }
})

```

## 运行/打包

```bash
yarn add --dev @electron-forge/cli
npx electron-forge import
# 运行
yarn start
# 打包
yarn make
# 打包目录
out/
├── out/make/zip/darwin/x64/xxx.zip
├── ...
└── out/xxx/xxx/Contents/MacOS/xxx
```
