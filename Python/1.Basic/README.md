<!-- 
title: Python基础
sort: 
--> 

## Python换源

```bash
# 临时使用
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple some-package
# 换源
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```

### windows

- %HOMEPATH%\pip\pip.ini

```ini
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple

# 报错添加如下行
trusted-host=pypi.tuna.tsinghua.edu.cn
```


### Linux

#### **修改本用户**

- 修改 : `~/.pip/pip.conf`


```ini
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
```

- 修改root账户：`/etc/pip.conf`

```bash
sudo pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```

## 生成当前配置
```bash
pip freeze > requirements.txt
pip install -r requirements.txt
```

