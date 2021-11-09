<!-- 
title: 01-Mac常用工具
sort: 
--> 

## man

> [Github地址](https://github.com/man-pages-zh/manpages-zh)

```bash
# clone源码
mkdir tmp && cd tmp
git clone https://github.com/man-pages-zh/manpages-zh .

# 增加文档
mkdir ~/Document/.man-zh
cp -R src/* ~/Document/.man-zh/

# 修改配置文件
sudo vim /etc/man.conf
# 增加文档路径
MANPATH /Users/fzf/Documents/.man-zh

# 配置alias
alias man-zh="man -M $HOME/Documents/.man-zh"
```

## brew

```bash
# 安装intel
arch -x86_64 /bin/bash -c "$(curl -fsSL https://cdn.jsdelivr.net/gh/ineo6/homebrew-install/install.sh)"
alias ibrew="arch -x86_64 /usr/local/bin/brew"

CFLAGS="-I$(ibrew --prefix openssl)/include -I$(ibrew --prefix bzip2)/include -I$(ibrew --prefix readline)/include -I$(xcrun --show-sdk-path)/usr/include" LDFLAGS="-L$(ibrew --prefix openssl)/lib -L$(ibrew --prefix readline)/lib -L$(ibrew --prefix zlib)/lib -L$(ibrew --prefix bzip2)/lib" arch -x86_64 pyenv install --patch 3.6.8 < <(curl -sSL https://github.com/python/cpython/commit/8ea6353.patch\?full_index\=1)

```

