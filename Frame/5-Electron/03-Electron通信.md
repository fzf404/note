<!--
title: 03-通信
sort:
-->

## IPC

> 从主进程到渲染进程的异步通信。

- 主进程

```js
const { app, BrowserWindow, ipcMain } = require("electron");

// 接受渲染进程发来的消息
ipcMain.on("asynchronous-message", (event, args) => {
  const reply = args.split("").reverse().join("");
  console.log("reply: ", reply);
  // 发送消息到渲染进程
  event.reply("asynchronous-reply", reply);
});
```

- 渲染进程

```html
<div>
  <input type="text" id="message" />
  <br />
  <button id="submit">Submit</button>
</div>
<script>
  const { ipcRenderer } = require("electron");
  document.getElementById("submit").onclick = () => {
    let message = document.getElementById("message").value;
    // 向主进程发消息
    ipcRenderer.send("asynchronous-message", message);
  };
  // 接收消息
  ipcRenderer.on("asynchronous-reply", (event, args) => {
    alert(args);
  });
</script>
```

## remote

> 在渲染进程中使用主进程模块。

- 主进程

```js
webPreferences: {
	nodeIntegration: true,
	enableRemoteModule: true
}
```

- 渲染进程

```js
const { remote } = require("electron");
const BrowserWindow = remote.BrowserWindow;
let win = new BrowserWindow({ width: 500, height: 400 });
win.loadURL("https://google.com");
```

## WebContents

> 渲染以及控制 web 页面
