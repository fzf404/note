<!-- 
title: Webpack入门
sort: 
--> 

> `yarn add webpack webpack-cli`
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
// 目录树
|- dist
   |- index.html
|- src
   |- index.js
   |- sayhi.js


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
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <script src="./index.js" type="text/javascript"></script>
</body>
</html>
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

### 绑定处理函数

```js
function onClick(id, callback) {
    document.querySelector(`#${id}`).addEventListener('click',callback)
}

onClick('move-to-left',function () {
    moveToLeft()
})
```

### 编译ES6

```
yarn add @babel/core @babel/preset-env babel-loader 
```

- `.babelrc`

  ```json
  {
      "presets": [
          "@babel/preset-env",
      ]
  }
  ```

- `webpack.config.js`

  ```js
  module: {
          rules: [
              {
                  test: /.js$/,
                  use: 'babel-loader'
              },
           ]
        }
  ```

### 引入css

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

```js
// 在js中引入css
import './style.css'
```

