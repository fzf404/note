<!-- 
title: 00-Conda配置
sort: 
--> 

> [Anaconda](https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/?C=M&O=D)

## Conda

> [清华源下载](https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/)

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
  http: 127.0.0.1:10808
  https: 127.0.0.1:1
ssl_verify: false
```

> 虚拟环境

```powershell
# 初始化环境
conda init <shell_name>
# 取消初始化
conda init <shell_name> --reverse

# 全部环境列表
conda env list

# 创建环境
conda create -n <name>
conda remove -n <name> --all

# 激活环境
conda activate <name>
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

> 卸载后无法使用cmd

```bash
# regedit
Computer\HKEY_CURRENT_USER\SOFTWARE\Microsoft\Command Processor
# AutoRun 设置为空
```

