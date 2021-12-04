<!--
title: 02-PythonHack
sort:
-->

## 0x1 使用类

```python
import os

class Domain(object):
    def __init__(self, domain, port, protocol):
        self.domain = domain
        self.port = port
        self.protocol = protocol

    def url(self):
        if self.protocol == 'http':
            return 'http://' + self.domain + ':' + self.port
        if self.protocol == 'https':
            return 'https://' + self.domain + ':' + self.port

    def lookup(self):
        os.system("start " + self.url())

domain = Domain('www.freebuf.com', '80', 'http')
domain.lookup()

```

## 0x2 接收命令行参数

```python
import sys

script = sys.argv[0]
ip = sys.argv[1]
port = sys.argv[2]
print('[+] The script name is ' + script)
print('[+] The ip is ' + ip + ':' + port)
```

## 0x3 使用`socket`写一个端口扫描

```python
import socket
ports = [21, 22, 53, 445, 80, 443, 3389, 8080]
hosts = ['127.0.0.1', '10.10.10.10', '192.168.1.1']
for host in hosts:
    for port in ports:
        try:
            s = socket.socket()
            print("[+] Attempting to connect to " + host + ":" + str(port))
            s.connect((host, port))
            s.send('absdkfbsdafblabldsfdbfhasdflbf /n')
            banner = s.recv(1024)
            if banner:
                print("[+] " + host + ":" + str(port) + " open: \n" + banner)
            s.close()
        except:
            pass
```

## 0x4 Fuzzer

> fuzz 是利用暴力实现对目标程序的测试

```python
import sys, socket
from time import sleep

# set first argument given at CLI to 'target' variable
target = sys.argv[1]
# create string of 50 A's '\x41'
#生成50个A，41是‘A’的16进制ascii码
buff = '\x41'*50
#  每次向目标IP地址的21端口发送50个‘A'
# loop through sending in a buffer with an increasing length by 50 A's
while True:
  # The "try - except" catches the programs error and takes our defined action
  try:
    # Make a connection to target system on TCP/21
    s=socket.socket(socket.AF_INET,socket.SOCK_STREAM)
    s.settimeout(2)
    s.connect((target,21))
    s.recv(1024)

    print "Sending buffer with length: "+str(len(buff))
    # Send in string 'USER' + the string 'buff'
    s.send("USER "+buff+"\r\n")
    s.close()
    sleep(1)
    # Increase the buff string by 50 A's and then the loop continues
    buff = buff + '\x41'*50

  except: # If we fail to connect to the server, we assume its crashed and print the statement below
    print "[+] Crash occured with buffer length: "+str(len(buff)-50)
    sys.exit()
```

## 0x5 Web Requests

1. 首先创建一个`index.html`

2. 在终端下输入`python -m http.server`

3. 开始写程序

   ```python
   from urllib import request
   url = "http://127.0.0.1:8000"
   r = request.urlopen(url)
   print(r.readlines())
   print(r.getheaders())
   ```

4. 使用 bs4 解析

   ```python
   parse = BeautifulSoup(r.read(), features='html.parser')
   print(parse.title)
   print(parsed.find_all('h2'))
   ```
