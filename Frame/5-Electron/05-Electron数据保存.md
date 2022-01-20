<!--
title: 05-Electron数据保存
sort:
-->

> [Gihub地址](https://github.com/sindresorhus/electron-store)

```
import Store from 'electron-store'

// 会在项目根目录创建 config.json
const store = new Store()

// 取信息
store.get('height')
// 判断
const width = store.get('width') === undefined ? 10 : store.get('width')

// 存值
store.set('value', 30)

// 删除
store.delete('p');
```

