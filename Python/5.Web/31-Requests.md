<!-- 
title: 31-Requests
sort: 
--> 
# Requests库入门

## 发送请求

1. `Respponse`对象

   这是requests中最重要的对象
   
   ```python
   r = requests.get('https://www.bilibili.com', timeout=5)	# 创建r对象
    r2 = requests.post('https://passport.bilibili.com/login', data = {'user':'hack'})
   ```
   
2. 传参

   ```python
   payload = {'key1': 'value', 'key2': 'value2'}
   r = requests.get('https://www.bilibili.com', params=payload)
   r.url
   # https://www.bilibili.com/?key1=value&key2=value2
   ```

3. 获得内容

   ```python
   r.status_code	# 状态码
   r.status_code == requests.codes.ok	# 查询状态码
   r.text		# 自动解码并展示html
   r.encoding = 'utf-8'	# 改变编码
   r.content		# 二进制格式
   r.json()		# 解析json的方法
   r.raw			# 原数据
   # 将原始数据保存到文件
   for i in r.iter_content():  # 迭代的content
       f.write(i)
   
   ```

4. 请求头

   ```python
   url = 'https://www.bilibili.com'
   header = {'user-agent': 'my-app/0.0.1'}
   r = requests.get(url, headers=header)
   # 真·请求头
   r = requests.head(url)
   print(r.headers)
   
   ```
   
5. POST

   ```python
   payload = {'key1': 'value1', 'key2': 'value2'}
   r = requests.post("http://httpbin.org/post", data=payload)
   r = requests.post(url, json=payload)	# 使用json
   r.headers	# 查看请求头
   r.headers['Content-Type']
   ```
   
6. 重定向

   > Requests 会自动处理所有重定向。

   ```python
   r.history		# 追踪重定向
   r = requests.get(url, allow_redirects=False)	# 拒绝重定向
   ```


## Session

> 能够跨请求保持某些参数，在同一个 Session 实例发出的所有请求之间保持 cookie。

1. 保持cookie

   ```python
   s = requests.session()
   r = s.get('http://www.baidu.com')		# 获取cookie
   print(r.cookies)
   '''
   <RequestsCookieJar[<Cookie BDORZ=27[3]15 for .baidu.com/>]>
   '''
   ```
   
2. 传入传出cookies

   ```python
   s = requests.Session()
   r = s.get("https://www.baidu.com")
   # 将CookieJar转为字典：
   cookie_dict = requests.utils.dict_from_cookiejar(r.cookies)
   # 将字典转为CookieJar：两种方法
   requests.utils.add_dict_to_cookiejar(s.cookies, cookie_dict)
   s.cookies = requests.utils.cookiejar_from_dict(cookie_dict, cookiejar=None, overwrite=True)
   ```

3. 提供缺省值数据

   ```python
   s = requests.Session()
   s.auth = ('user', 'pass')
   s.headers.update({'x-test': 'true'})
   
   # b'x-test' and 'x-test2' 都被发送
   r = s.get('http://httpbin.org/headers', headers={'x-test2': 'true'})
   print(r.text)
   '''{
     "headers": {
       "Accept": "*/*",
       "Accept-Encoding": "gzip, deflate",
       "Authorization": "Basic dXNlcjpwYXNz",
       "Host": "httpbin.org",
       "User-Agent": "python-requests/2.23.0",
       "X-Amzn-Trace-Id": "Root=1-5ed8e20e-bca4639c82a80f6e0fd6308e",        
       "X-Test": "true",
       "X-Test2": "true"
     }
   }'''
   # 方法级别的参数不会被保留
   
   s = requests.Session()
   
   r = s.get('http://httpbin.org/cookies', cookies={'from-my': 'browser'})
   print(r.text)
   # '{"cookies": {"from-my": "browser"}}'
   
   r = s.get('http://httpbin.org/cookies')
   print(r.text)
   # '{"cookies": {}}'
   ```

4. 使用前后文管理器确认退出

   ```python
   with requests.session() as s:
       s.get('http://httpbin.org')
   ```

## 请求与响应对象

- 头部信息

  ```python
  r.headers		# 响应头
  r.request.headers	# 请求头
  ```

## SSL 证书验证

- 导入本地证书

  ```python
  s = requests.Session()
  s.verify = '/path/to/certfile'
  # 不启用验证
  requests.get('https://kennethreitz.org', verify=False)
  # 使用本地证书
  requests.get('https://kennethreitz.org', cert=('/path/client.cert', '/path/client.key'))
  # 保持在会话中
  s = requests.Session()
  s.cert = '/path/client.cert'
  ```

## 响应内容工作流

默认请求后，响应体立即被下载，使用`stream`参数覆盖行为

```python
requests.get(url, stream = True)
# 此时只有响应头被下载，链接保持
# 使用with
with requests.get('http://httpbin.org/get', stream=True) as r:
    # 在此处理响应。
```

## 上传

支持流式上传

```python
with open('massive-body') as f:
    requests.post('http://some.url/streamed', data=f)
```

## 自定义身份验证

自定义的身份验证机制作为 `requests.auth.AuthBase` 的子类来实现

```python
from requests.auth import AuthBase

class PizzaAuth(AuthBase):

    def __init__(self, username):
        # setup any auth-related data here
        self.username = username

    def __call__(self, r):
        # modify and return the request
        r.headers['X-Pizza'] = self.username
        return r

requests.get('http://pizzabin.org/admin', auth=PizzaAuth('kenneth'))
```

## 代理

```python
requests.get(url, proxies = {'http':'http://user:pass@127.0.0.1:8888/'})
# 安装requests[socks]可使用sock代理
```

## HTTP动词

```python
>>> r = requests.get('https://api.github.com/requests/kennethreitz/requests/issues/482')
>>> r.status_code
200

>>> issue = json.loads(r.text)

>>> print(issue[u'title'])
Feature any http verb in docs

>>> print(issue[u'comments'])
3
>>> r = requests.get(r.url + u'/comments')
>>> r.status_code
200
>>> comments = r.json()
>>> print(comments[0].keys())	# 获取全部key
[u'body', u'url', u'created_at', u'updated_at', u'user', u'id']
>>> print(comments[2][u'body'])
Probably in the "advanced" section
```

PATCH一个issue

```python
>>> from requests.auth import HTTPBasicAuth
>>> auth = HTTPBasicAuth('fake@example.com', 'not_a_real_password')
>>> body = json.dumps({u"body": u"Sounds great! I'll get right on it once I feed my cat."})

>>> url = u"https://api.github.com/repos/requests/requests/issues/comments/5804413"

>>> r = requests.patch(url=url, data=body, auth=auth)
>>> r.status_code
200
```

