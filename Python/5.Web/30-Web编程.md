<!-- 
title: 30-Web编程
sort: 
--> 
# PythonWeb编程

> CS架构与BS架构
>
> `Client/Server`与``Browser/Server`

## WSGI

Web Server Gateway Interface

### 运行WSGI服务

- 先写一个符合WSGI标准的函数

  ```python
  def application(environ, start_response):
      # environ:包含所有http请求信息的dict
      # start_response:发送http响应的函数
      start_response('200 OK', [('Content-Type', 'text/html')])
      return [b'<h1>Hello, web!</h1>']
  ```

- 再写一个启动器

  ```python
  # server.py
  # 从wsgiref模块导入:
  from wsgiref.simple_server import make_server
  # 导入我们自己编写的application函数:
  from hello import application
  
  # 创建一个服务器，IP地址为空，端口是8000，处理函数是application:
  httpd = make_server('', 8000, application)
  print('Serving HTTP on port 8000...')
  # 开始监听HTTP请求:
  httpd.serve_forever()
  ```

- 更复杂的函数

  ```python
  def application(environ, start_response):
      start_response('200 OK', [('Content-Type', 'text/html')])
      body = '<h1>Hello, %s!</h1>' % (environ['PATH_INFO'][1:] or 'web')
      # 获取URL并显示
      return [body.encode('utf-8')]
  ```

## 使用Flask框架

- 示例程序

  ```python
  from flask import Flask
  from flask import request
  
  app = Flask(__name__)	# 文件名
  
  
  @app.route('/', methods=['GET', 'POST'])	# 使用装饰器
  def home():
      return '<h1>Home</h1>'
  
  
  @app.route('/signin', methods=['GET'])
  def signin_form():
      return '''<form action="/signin" method="post">
                <p><input name="username"></p>
                <p><input name="password" type="password"></p>
                <p><button type="submit">Sign In</button></p>
                </form>'''
  
  
  @app.route('/signin', methods=['POST'])
  def signin():
      # 需要从request对象读取表单内容：
      if request.form['username'] == 'admin' and request.form['password'] == 'password':
          return '<h3>Hello, admin!</h3>'
      return '<h3>Bad username or password.</h3>'
  
  
  if __name__ == '__main__':
      app.run()
  ```

## 使用模板

即MVC：Model-View-Controller，中文名“模型-视图-控制器”

- 变量的实例模板的叫V
- 定义变量的字典叫M

### 修改前一个程序

```python
from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def home():
    return render_template('home.html')

@app.route('/signin', methods=['GET'])
def signin_form():
    return render_template('form.html')

@app.route('/signin', methods=['POST'])
def signin():
    username = request.form['username']
    password = request.form['password']
    if username=='admin' and password=='password':
        return render_template('signin-ok.html', username=username)
    return render_template('form.html', message='Bad username or password', username=username)

if __name__ == '__main__':
    app.run()
```

- form.html

  ```html
  <html>
  <head>
    <title>Please Sign In</title>
  </head>
  <body>
    {% if message %}
    <p style="color:red">{{ message }}</p>
    {% endif %}
    <form action="/signin" method="post">
      <legend>Please sign in:</legend>
      <p><input name="username" placeholder="Username" value="{{ username }}"></p>
      <p><input name="password" placeholder="Password" type="password"></p>
      <p><button type="submit">Sign In</button></p>
    </form>
  </body>
  </html>
  ```


### 处理

- jinja2

  > 在Jinja2模板中，用`{{ name }}`表示一个需要替换的变量。
  >
  > 用`{% ... %}`表示指令。
  >
  > 循环输出页码
  >
  > ```jinja2
  > {% for i in page_list %}
  >     <a href="/page/{{ i }}">{{ i }}</a>
  > {% endfor %}
  > ```
  >
  > 