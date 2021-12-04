<!--
title: 01-入门
sort:
-->

## HelloWorld

> `index.js`
>
> `index.html`

```js
let electron = require('electron')

electron.app.on('ready', ()=>{
    let mainWindow = new electron.BrowserWindow({width: 960,height: 720})
    mainWindow.loadFile('index.html')
})

electron .
```

## First

![electron](https://gitee.com/nmdfzf404/Image-hosting/raw/master/2020/20201214222757.png)

> `main.js`

```js
const { app, BrowserWindow } = require("electron");

// 窗体创建函数
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    // 允许子页面调用api
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // 加载文件
  mainWindow.loadFile("src/index.html");

  // 开启调试工具
  mainWindow.webContents.openDevTools();
};

// 初始化完成后创建窗口
app.whenReady().then(createWindow);

// 关闭所有窗口后推出
app.on("window-all-closed", () => {
  // OS X除外
  if (process.platform !== "darwin") {
    app.quit();
  }
});
```

> `index.html`

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello Electron</title>
  </head>

  <body>
    <h1>💖 Hello Electron</h1>
    <button id="btn">Get Info</button>
    <div class="info"></div>
    <script>
      const fs = require("fs");

      window.onload = () => {
        let btn = this.document.getElementById("btn");
        let info = this.document.getElementsByClassName("info");
        btn.onclick = () => {
          fs.readFile("info.txt", (err, data) => {
            info[0].innerHTML = `<p>${data}</p>`;
          });
        };
      };
    </script>
  </body>
</html>
```

## 打包

```bash
yarn create electron-app .
yarn start
yarn make
```
