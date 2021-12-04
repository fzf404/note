<!--
title: 42-Socket编程
sort:
-->

# Socket 编程

## 入门

### 创建 tcp/udp 套接字

```python
import socket

udp_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
upd_socket.close()
```

`socket.socker(AdressFamily, Type)`

> 参数一：
>
> `socket.AF_INET` IPv4
>
> 参数二：
>
> `socket.SOCK_DGRAM` UDP
>
> `SOCK_STREAM` TCP

### 使用

#### 发送

```python
import socket

udp = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

udp.sendto("hello".encode(), ("192.168.0.101",777))
udp.close()
```

#### 接收

```python
import socket

udp = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
udp.bind(('', 9999))

udp.sendto("hello".encode(), ('127.0.0.1',40404))

recv = udp.recvfrom(1024)
print(recv[0].decode('gbk'))

udp.close()
```

### 广播

> 广播地址：255.255.255.255 xxx.xxx.xxx.255

```python
# SOL_SOCKET 当前套接字
# SO_BROADCAST 广播
# 设置套接字参数（套接字，参数名，参数）
udp.setsockopt(socket.SOL_SOCKET, socket.SO_BROADCAST, True)
udp.sendto("hello".encode(), ('255.255.255.255',8080))

```

## TCP

### 客户端

```python
import socket

tcp = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# 服务端信息
tcp.connect(('127.0.0.1',8080))
# 发送
tcp.send('hi~'.encode('gbk'))

content = tcp.recv(1024).decode('gbk')
print(content)
```

### 服务端

```python
import socket

tcp = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# 绑定地址
tcp.bind(('',8080))
# 设置监听，不得主动发送数据，最大连接数为128
tcp.listen(128)
# 自动进入阻塞状态，等待连接，返回socket对象
# recv[0]为socket对象，[1]为客户端地址
client_socket, client_addr = tcp.accept()
# 设定接收
recv_text = client_socket.recv(1024).decode('gbk')
print(recv_text)

client_socket.close()
tcp.close
```

#### 增强

```python
import socket

tcp = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
tcp.bind(('',8080))
tcp.listen(128)

client_socket, client_addr = tcp.accept()

while True:
    recv_text = client_socket.recv(1024).decode('gbk')
    if recv_text:
        print(recv_text)
        client_socket.send('I get your message.'.encode())
    else:
        print("Client Close!")
        break

client_socket.close()
tcp.close()
```

- 地址重用

  ```python
  # SOL_SOCKET 当前套接字
  # socket.SO_REUSEADDR 重用地址 reuseaddr
  # 设置套接字参数（套接字，参数名，参数）
  tcp.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, True)  python、python
  ```

## HTTP

### 基本

```python
import socket

http_header = 'HTTP/1.1 200 OK\r\n\r\n'
content = '<h1>Hello</h1>'
response = http_header+content

tcp = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
tcp.bind(('',8080))
tcp.listen(128)

client_socket, client_addr = tcp.accept()
recv_text = client_socket.recv(1024).decode('gbk')
if recv_text:
    print(recv_text)
    client_socket.send(response.encode())
else:
    print("Client Close!")

client_socket.close()
tcp.close()
```
