<!--
title: 34-Flask
sort:
-->

# Flask 入门

- [官方文档](https://dormousehole.readthedocs.io/en/latest/)
- [SocketIO 文档](https://flask-socketio.readthedocs.io/en/latest/getting_started.html)

## Flask

```python
from flask import Flask

app = Flask(__name__)

@server.route('/')
def index():
    return '<h2>Flask Running...</h2>'

app.run('127.0.0.1',port=8080)
```

### 参数获取

```python
# parme获取
request.args.get('mess')
request.args['mess']
# form-data获取
request.form.get('mess')
# json获取
request.json['mess']
# 文件获取/保存
f = request.files['img']
f.save('public/' + name)
```

### 跨域请求

```python
from flask_cors import *
CORS(app, supports_credentials=True)
```

## SocketIO

### 基础

```python
from flask_socketio import SocketIO

# 连接事件
@socketio.on('connect')
def test_connect():
    global user_number
    user_number += 1
    socketio.emit('number', user_number)

# 断开连接事件
@socketio.on('disconnect')
def test_disconnect():
    global user_number
    user_number -= 1
    socketio.emit('number', user_number)

# 默认message事件
@socketio.on('message')
def handle_message(msg):
    chat_logger.info(msg)
    socketio.send(msg)

if __name__ == '__main__':
    socketio.run(app, '0.0.0.0', port='8080')
```

### 跨域

```python
socketio = SocketIO(app, cors_allowed_origins="*")
```
