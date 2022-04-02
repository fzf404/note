<!--
title: MQTT
sort:
-->

> 基于发布/订阅的轻量级通讯协议
>
> 构建于 TCP/IP 协议上

[EMPX](https://www.emqx.cn/downloads#broker)

1. 开启服务

```bash
sudo emqx start
# dashboard
http://127.0.0.1:18083/
admin-public
# 通用->监听器
```

2. 使用 Node-Red 编写服务

![image-20210429162729619](https://img-1257284600.cos.ap-beijing.myqcloud.com/2021/20210429162731.png)

3. [MQTT.js](https://github.com/mqttjs/MQTT.js)

```
var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://l')

client.on('connect', function () {
  client.subscribe('presence', function (err) {
    if (!err) {
      client.publish('presence', 'Hello mqtt')
    }
  })
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
})
```
