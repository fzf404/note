<!-- 
title: Mac
sort: 
--> 

## 软件

```bash
# brew
https://brew.sh/index_zh-cn		# Install Website
alias brew=/opt/homebrew/bin/brew  # config

# fish
mkdir -p ~/.config/fish/
vim ~/.config/fish/config.fish

# brew 换源
cd "$(brew --repo)"
git remote set-url origin https://mirrors.aliyun.com/homebrew/brew.git
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://mirrors.aliyun.com/homebrew/homebrew-core.git
# 应用生效
brew update

# fish 配置
set HOMEBREW_BOTTLE_DOMAIN = "https://mirrors.aliyun.com/homebrew/homebrew-bottles"
set PATH = "/opt/homebrew/bin" $PATH

# 代理
alias setproxy="export ALL_PROXY=socks5://127.0.0.1:1080"
```

## 问题

```bash
# ImportError: cannot import name 'PackageFinder' from 'pip._internal.index'
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py && python3 get-pip.py && rm get-pip.py

# Unknown command: code
> Shell Command: Install 'code'

# 无法打开img
sudo xattr -r -d com.apple.quarantine *.img
```

