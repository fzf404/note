<!--
title: 02-Electron&Vue
sort:
-->

## 安装

```bash
yarn create vite electron-vue
yarn add electron electron-builder -D
```

## 使用

```js
# 调用 electron api
# vue.config.js
module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true
    }
  }
}
```

