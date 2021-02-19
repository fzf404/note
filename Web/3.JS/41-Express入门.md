<!-- 
title: 41-Express入门
sort: 
--> 

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

## 路由

```
app.get('/', handle)
```

## nodemon

> `npm install nodemon --save-dev`