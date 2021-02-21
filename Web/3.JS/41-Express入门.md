<!-- 
title: 41-Express入门
sort: 
--> 

- 准备

```bash
npm i express
# 检测代码变化并自动重启
npm i nodemon --save-dev
# 模板渲染引擎
npm i hbs
# package.json
"start": "nodemon server.js",
```

## HelloWorld

```js
const express = require('express');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

## Request

- `req.body`：客户端请求体的数据，表单或 JSON 数据
- `req.params`：请求 URI 中的路径参数
- `req.query`：请求 URI 中的查询参数
- `req.cookies`：客户端的 cookies

## Response

```js
// 发送内容
res.send('HTML String');

// 发送文件
res.sendFile('file.zip');

// 渲染模板并发送
res.render('index');

// 设置状态码为 404，并返回字符串
res.status(404).send('Page Not Found');
```

## 功能

```js
// 路由
app.get('/', handle, () => {})
// 中间件
function someMiddleware(req, res, next) {}
app.use(someMiddleware);	// 全局使用
app.get('/',someMiddleware, () => {})	// 单独使用

// 静态文件中间件
app.use(express.static('public'));
```

## mongodb

`npm i mongoose`

- 连接数据库

```js
const mongoose = require('mongoose');
mongoose.connect(`mongodb://39.106.106.202:27017/test`);
```

- Schema

```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model.bind(mongoose);
const ObjectId = mongoose.Schema.Types.ObjectId;

const productSchema = Schema({
  id: ObjectId,
  name: String,
  image: String,
  price: Number,
  description: String,
});

const Product = model('Product', productSchema);
module.exports = { Product, Manufacturer };
```

## 允许跨域

```js
app.all('/*', function(req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});
```

