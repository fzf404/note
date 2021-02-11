<!-- 
title: Webpack入门
sort: 
--> 

> `npm install webpack webpack-cli --save-dev`
>
> 用于打包编译代码

## 入门

1. 配置文件`webpack.config.js`

```js
'use strict'
const path = require('path');
module.exports = {
  // 打包入口
  entry: {
    index: './src/index.js',
  },
  // 输出地址
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js'
  },
  // 开发环境
  mode: 'production',
}
```

2. 源代码`src`

```js
// sayhi.js
export function sayHi() {
  return 'Hello Webpack~'
}
// index.js
import {sayHi} from './sayhi'
document.write(sayHi())
```

3. 引用代码`dist/index.html`

```html
<script src="./index.js" type="text/javascript"></script>
```

4. 编译

```bash
# 不够优雅的方法
./node_modules/.bin/webpack

# package.json添加
"build": "webpack"
# 运行
npm run build

```

## 引入css

> `npm i style-loader css-loader -D`

1. 配置文件

```json
module: {
  rules: [
    {
      test: /.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    },
  ]
},
```

2. 添加css文件，执行编译命令