<!-- 
title: 30-WebSocket
sort: 
--> 

## 原生WebSocket

```js
// 初始化WebSocket
let ws = new WebSocket('ws://17.0.0.1:1880/wx')

// 监听消息事件
ws.onmessage=(msg)=>console.log(msg.data)

// 发送信息
ws.send("fzf404")
```

## SocketIO

```js
let socket = io(`${base_url}`);

// 接受数据处理
socket.on("message", (data) => {
  console.log(`${data.user_name}: ${data.message}`)
});



// 连接成功
socket.on("connect", () => {
  // 发送
  socket.send({ user_name: user_name, message: "已加入" });
});

```

