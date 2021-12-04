<!--
title: 11-自制python库
sort:
-->

# 自己动手做一个 python 库

> 新建一个简单的 python 库，并打包发送至 test.pypi，使用户可通过 pypi 安装~
>
> 建议先建一个虚拟 python 环境

## HelloWorld

### 目录结构

```python
firsst_packaging	# 没什么用的文件名
├── LICENSE			# 证书
├── README.md		# readme
├── fzf_first_pkg	# 代码目录
│   └── __init__.py	# 这个文件是必须的
├── setup.py		# 用于setup打包为python库
└── tests			# 测试文件
```

### 编写`__init()__.py`

```python
print('your first pkg is runing success.')
# 随便写一点东西就好啦~
```

### 编写`setup.py`

```python
import setuptools

with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    name="fzf_first_pkg", # Replace with your own username
    version="0.0.1",
    author="Example Author",
    author_email="author@example.com",
    description="A small example package",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/pypa/sampleproject",
    packages=setuptools.find_packages(),
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires='>=3.6',
)
```

### 创建许可证

```
Copyright (c) 2018 The Python Packaging Authority

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

> 别忘了在 readme 里写一点东西呀~

## 发布

> 当然啦，这个项目是不可能发布至 pypi 的，但 pypi 提供了 test.pypi，我们可以发布至那里~

### 打包

```powershell
pip install setuptools wheel
# 安装打包发布所必须的库
python setup.py sdist bdist_wheel
# 打包，库文件将放在./dist目录当中
# 这就可以使用pip install ./dist/*.whl 安装啦
```

### 发布

> 首先需要创建一个 pypi 账号
>
> [传送门](https://pypi.org/account/register/)
>
> 然后生成一个 api 令牌
>
> [传送门](https://test.pypi.org/manage/account/token/)
>
> 创建成功后记住下面提供的账号和密码
>
> 就可以发布啦~

```powershell
pip install twine
twine upload --repository testpypi dist/*
# 创建成功后将返回这个项目地址
View at:
https://test.pypi.org/project/fzf-first-pkg/0.0.1/
```

> 进入它提供的网址
>
> 惊喜的发现，居然可以安装啦~
>
> ![image-20200715100204102](https://gitee.com/nmdfzf404/Image-hosting/raw/master/20200715100211.png)

## 安装使用

> 复制上面的地址
>
> 回到控制台安装一下~
>
> 接着打开 python 终端
>
> `import fzf_first_pkg`
>
> <p >
>     <img src="https://gitee.com/nmdfzf404/Image-hosting/raw/master/20200715100551.png"align="left"/>
> <p/>

**运行成功啦~**
