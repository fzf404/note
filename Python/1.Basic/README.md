<!--
title: Python基础
sort:
-->

## Python 换源

```bash
# 临时使用
pip install -i https://mirrors.aliyun.com/pypi/simple/ some-package
# 换源
pip config set global.index-url \
https://pypi.mirrors.ustc.edu.cn/simple # 中科大
https://mirrors.aliyun.com/pypi/simple	# 阿里
```

## Pip 使用

```bash
pip freeze > requirements.txt
pip install -r requirements.txt
# 忽略安装某个库
pip install xxx --ignore-installed xxx
```
