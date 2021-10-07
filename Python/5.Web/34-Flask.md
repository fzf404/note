<!-- 
title: 34-Flask
sort: 
--> 
# Flask入门

## HelloWorld

```python
from flask import Flask

server = Flask(__name__)

@server.route('/')
def index():
    return '<h2>Flask Running...</h2>'
 
server.run('127.0.0.1',port=8080)
```

## 上传文件

```python
from flask import request

@server.route('/upload', methods=['GET', 'POST'])
def upload():
    keygen = request.form.get('keygen')
    fname = request.files['upload']
    if keygen == 'passwd' and 'fname':
        t = time.strftime('%Y-%m-%d_%H-%M-%S_')
        name = t + fname.filename
        fname.save('./upload/' + name)
        return '<h2>Upload Success!</h2>'
    else:
        return '<h2>Please Select File!</h2>'
```

## POST

```python
# Get参数获取
request.args.get('mess')
request.args['mess']
# form-data获取
request.form.get('mess')
# paload-json获取
request.json['mess']
```

## 跨域请求

```python
from flask_cors import *
CORS(app, supports_credentials=True)
```

## Json

```python
from flask import jsonify
@server.route('/')
def index():
    return jsonify({
    'code': 200,
    'msg': '成功'     
    })
```

