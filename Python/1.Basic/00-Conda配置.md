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
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2
custom_channels:
  conda-forge: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  msys2: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  bioconda: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  menpo: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  pytorch: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  simpleitk: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud

# 代理设置
proxy_servers:
  http: http://127.0.0.1:1087
  https: http://127.0.0.1:1087
ssl_verify: false
```

> 虚拟环境

```powershell
# 初始化环境
conda init <shell_name>
# 取消初始化
conda init <shell_name> --reverse

# 取消自动激活
onda config --set auto_activate_base false

# 全部环境列表
conda env list

# 创建环境
conda create -n <name> python=3.8.10
conda remove -n <name> --all

# 激活环境
conda activate <name>
conda deactivate

# 默认不启动/启动
conda config --set auto_activate_base false
conda config --set auto_activate_base true
# 清除缓存包
conda clean --packages --tarballs

# 安装依赖库
conda install --yes --file requirements.txt
```

> 实战

```python
conda create -n learn-pytorch
# 指定python版本
conda create -n chat python=3.6
# 重命名
conda create -n ltorch --clone conda remove -n <name> --all
# 删除
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

> 卸载后无法使用 cmd

```bash
# regedit
Computer\HKEY_CURRENT_USER\SOFTWARE\Microsoft\Command Processor
# AutoRun 设置为空
```
