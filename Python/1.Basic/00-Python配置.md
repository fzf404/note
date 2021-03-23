<!-- 
title: 00-Python配置
sort: 
--> 

> [Anaconda](https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/?C=M&O=D)

## Conda

### 换源

> 生成配置文件: `conda config --set show_channel_urls yes`
>
> 清除索引缓存: `conda clean -i`

```python
# .condarc
channels:
  - defaults
show_channel_urls: true
default_channels:
  - https://anaconda.mirrors.sjtug.sjtu.edu.cn/pkgs/r
  - https://anaconda.mirrors.sjtug.sjtu.edu.cn/pkgs/main
custom_channels:
  conda-forge: https://anaconda.mirrors.sjtug.sjtu.edu.cn/cloud/
  pytorch: https://anaconda.mirrors.sjtug.sjtu.edu.cn/cloud/

# 代理设置
proxy_servers:
  http: http://127.0.0.1:7890
  https: https://127.0.0.1:7890
ssl_verify: false
```

> 虚拟环境

```powershell
conda env list

conda create -n <name>
conda remove -n <name> --all
conda init <shell_name>
# restart shell

conda activate <name>
conda deactivate

# 进入环境
conda init
conda deactivate
# 默认不启动/启动
conda config --set auto_activate_base false
conda config --set auto_activate_base true
# 清除缓存包
conda clean --packages --tarballs
```

> 实战

```python
conda create -n learn-pytorch
# 重命名
conda create -n ltorch --clone conda remove -n <name> --all
conda remove -n learn-pytorch --all
```

### 问题

> ==powershell==
>
> `在此系统上禁止运行脚本 profile.ps1`

```bash
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
```

> `Crypto`

```
pip install pycryptodome
```



## 批量

```python
# 生成当前配置
pip freeze > requirements.txt
pip install -r requirements.txt
```

## 虚拟环境

> 创建一个与外界隔绝的python环境
>
> `virtualenv`

```bash
pip install virtualenv
virtualenv <env_name>
cd <env_name>
# 进入
./bin/active
```

> `virtualenvwrapper`
>
> 方便管理虚拟环境

```bash
pip install virtualenvwrapper
mkvirtualenv --python=<python_path> <name>
# 管理
workon <name>	# 进入
rmvirtualenv <name>	# 删除
deactivate	# 退出
# 列表
lsvirtualenv <name>
# 进入目录
cdvirtualenv demo
```
