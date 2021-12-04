<!--
title: 36-Django入门
sort:
-->

## 创建

```bash
# 创建项目
django-admin startproject demo
# 运行项目
python manage.py runserver

demo
├── demo              				// 项目全局文件目录
│   ├── __init__.py
│   ├── settings.py          	// 全局配置
│   ├── urls.py              	// 全局路由
│   └── wsgi.py
└── manage.py                	// 项目管理脚本

# 创建自定义app
python manage.py startapp news

news                     // news 应用目录
├── __init__.py          // 初始化模块
├── admin.py             // 后台管理配置
├── apps.py              // 应用配置
├── migrations           // 数据库迁移文件目录
│   └── __init__.py      // 数据库迁移初始化模块
├── models.py            // 数据模型
├── tests.py             // 单元测试
└── views.py             // 视图
```

## 入门

### 路由

1. 全局路由: `demo/urls.py`

   ```python
   from django.contrib import admin
   from django.urls import path, include

   urlpatterns = [
   	path('admin/', admin.site.urls),
   	# 引用子路由表
   	path('', include('news.urls')),
   ]
   ```

2. 子应用路由表: `news/usls.py`

   ```python
   from django.urls import path

   from . import views

   urlpatterns = [
     # 子路由表
     path('', views.index, name='index')
   ]
   ```

3. 视图: `news/views.py`

   ```python
   from django.http import HttpResponse

   def index(request):
     return HttpResponse('Hello Django')
   ```

### 渲染

1. 渲染模板`news/templates/news`

   ```python
   {% if news_list %}
     <ul>
     {% for elem in news_list %}
       <li>
         <h3>{{ elem.title }}</h3>
         <p>{{ elem.content }}</p>
       </li>
     {% endfor %}
     </ul>
   {% else %}
     <p>NULL</p>
   {% endif %}
   ```

2. 渲染`news/views.py`

   ```python
   from django.shortcuts import render

   def index(request):
       context = {
           'news_list': [
               {
                   "title": "123",
                   "content": "12345",
               },
               {
                   "title": "123",
                   "content": "12345",
               },
   		]}
       return render(request, 'news/index.html', context=context)
   ```

### 数据库

> `ORM`: 面向对象的语法,完成关系型数据库的操作

```python
# 查询所有模型 SELECT * FROM Blog
Blog.objects.all()

# 查询单个模型 SELECT * FROM Blog WHERE ID=1
Blog.objects.get(id=1)

# 添加单个模型
# INSERT INTO Blog (title, content) VALUES ('hello', 'world')
blog = Blog(title='hello', content='world')
blog.save()
```

1. 数据模型`news/models.py`

   ```python
   from django.db import models

   # Create your models here.
   class Post(models.Model):
       title = models.CharField(max_length=200)
       content = models.TextField()

       def __str__(self):
           return self.title

   # 生成迁移脚本 news\migrations\0001_initial.py
   python manage.py makemigrations
   # 进行数据迁移
   python manage.py migrate
   # 新建用户 localhost:8000/admin
   python manage.py createsuperuser
   ```

2. 配置后台管理接口

   ```python
   # 引入之前配置好的数据模型
   from .models import Post

   admin.site.register(Post)
   ```

3. 视图中加入数据查询代码

   ```python
   from .models import Post

   def index(request):
       context = { 'news_list': Post.objects.all() }
       return render(request, 'news/index.html', context=context)
   ```

4. 完工

   ![image-20210209123700262](https://gitee.com/nmdfzf404/Image-hosting/raw/master/2021/image-20210209123700262.png)
