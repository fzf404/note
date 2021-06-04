<!-- 
title: Python基础
sort: 
--> 

## Python换源

```bash
# 临时使用
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple some-package
# 换源
pip config set global.index-url https://mirrors.aliyun.com/pypi/simple/

https://mirrors.aliyun.com/pypi/simple/
```

## 生成当前配置
```bash
pip freeze > requirements.txt
pip install -r requirements.txt
```

