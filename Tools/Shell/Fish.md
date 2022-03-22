<!--
title: Fish
sort:
-->

> 终端新秀

```bash
# 配置文件
mkdir -p ~/.config/fish/
vim ~/.config/fish/config.fish

# 配置
source /opt/env.fish	# 载入配置文件
set PATH = "/usr/local/xxx" $PATH

# oh-my-fish
curl -L https://get.oh-my.fish | fish
# 设置
fish_config
```

## 安装nvm

```bash
# 安装 fish
apt install fish

# 安装 oh-my-fish
# with git
$ git clone https://hub.fastgit.xyz/oh-my-fish/oh-my-fish
$ cd oh-my-fish
$ bin/install --offline

# 安装 bass
omf install bass

# 配置nvm
function nvm
  bass source ~/.nvm/nvm.sh --no-use ';' nvm $argv
end
```



