<!--
title: ZSH
sort:
-->

# zsh 安装与配置

## 安装

```bash
# sudo pacman -S zsh
chsh -s /usr/bin/zsh		# 切换zsh /bin/zsh
# 安装oh-my-zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

## 配置主题

```bash
kate ~/.zshrc
# 解决问题
[+] ZSH_DISABLE_COMPFIX=true
# ZSH_THEME=random	# 随机主题
# p10k
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/themes/powerlevel10k
ZSH_THEME="powerlevel10k/powerlevel10k"
# 重新加载zsh
source .zshrc
```

## 插件

```bash
# zsh-syntax-highlighting
# 命令行高亮
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
# zsh-autosuggestions
# 记住你之前使用过的命令
git clone git://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions
# autojump
# 跳转目录
yay -S autojump
# 命令查找
yay -S fzf
# fuck
yay -S thefuck
# 插件管理器
curl -sL --proto-redir -all,https https://raw.githubusercontent.com/zplug/installer/master/installer.zsh | zsh
# 字体安装
https://www.nerdfonts.com/
```

- 配置文件

  ```bash
  ## 启用所有插件
  nano ~/.zshrc
  # 将plugins=(git)改为:
  plugins=(git zsh-syntax-highlighting zsh-autosuggestions autojump sudo extract)
  # sudo功能，在你输入的命令的开头添加sudo ，方法是双击Esc。
  # extract +你要解压的文件名
  # 在source $ZSH/oh-my-zsh.sh下面输入：
  source ~/.oh-my-zsh/custom/plugins/incr/incr*.zsh
  # 在文件末尾输入：
  eval $(thefuck --alias)
  # vscode font  设置
  Hack Nerd Font

  ## clone
  git clone https://github.com/fzf404/linux_config.git
  ln linux_config/.zshrc .zhsrc
  ```

### 插件使用

- git

  ```bash
  gapa    git add --patch
  gc!    git commit -v --amend
  gcl    git clone --recursive
  gclean    git reset --hard && git clean -dfx
  gcm    git checkout master
  gcmsg    git commit -m
  gco    git checkout
  gd    git diff
  gdca    git diff --cached
  gp    git push
  grbc    git rebase --continue
  gst    git status
  gup    git pull --rebase
  ```

- extract

  > 解压文件，无需参数

### 使用技巧

- 命令历史记录

  > 使用`r`来执行上一条命令
  >
  > 使用`Ctrl+R`搜索命令历史记录

- 目录选择

  > 连按两次`Tab`会列出所有的补全直接选择，可以使用 ctrl+n/p/f/b 上下左右切换
  >
  > 使用`j folder`直接进行目录跳转
  >
  > `j --stat`查看历史路径库
  >
  > `/usr/local/bin` 你可以输入` cd /u/l/b` 然后按/
