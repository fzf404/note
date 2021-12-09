<!--
title: 31-Manjaro配置
sort:
-->

# Manjaro 配置

`screenfetch`

## 安装

```bash
Secure boot disenable
```

## 配置中国镜像

> ```bash
> sudo pacman-mirrors -i -c China -m rank
> # 查看是否有China条目
> # cat /etc/pacman.d/mirrorlist
> kate /etc/pacman.conf
> # 添加如下条目
> [archlinuxcn]
> SigLevel = Optional TrustedOnly
> Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch
> # Ctrl+S	保存
> # 导入 GPG key
> sudo pacman -Sy archlinuxcn-keyring
> # 更新系统
> sudo pacman -Syyu
> ```

## 安装软件包

- SSH

  ```bash
  systemctl enable sshd.service
  systemctl start sshd.service
  ```

- 输入法

  ```bash
  # 安装中文输入法
  yay -S fcitx-im kcm-fcitx fcitx-sogoupinyin
  kate ~/.xprofile
  # 添加如下条目
  	export GTK_MODULE=fcitx
  	export QT_IM_MODULE=fcitx
  	export XMODIFIERS="@im=fcitx"
  ```

- 翻墙

  > [electron-ssr](https://github.com/qingshuisiyuan/electron-ssr-backup)
  >
  > ```shell
  > # 翻墙
  > git config --global http.proxy 'http://127.0.0.1:12333'
  > git config --global https.proxy 'http://127.0.0.1:12333'
  >
  > export all_proxy=http://127.0.0.1:12333
  > # export http_proxy=http://127.0.0.1:12333
  > # export https_proxy=http://127.0.0.1:12333
  >
  > # un翻墙
  > git config --global --unset http.proxy
  > git config --global --unset https.proxy
  > unset ALL_PROXY
  > ```

- 各种软件

  ```bash
  sudo pacman -S yay		# 安装arch的包管理工具
  # 更换yay的源文件
  # yay --aururl "https://aur.tuna.tsinghua.edu.cn" --save
  # yay -P -g	查看配置文件
  yay -S typora	# Markdown编辑器
  yay -S netease-cloud-music
  yay -S google-chrome-dev
  yay -S visual-studio-code-bin	# 直接使用code
  yay -S deepin.com.qq.office
  # deepin-wine-tim
  yay -Sy gnome-settings-daemon
  # 安装过程输入n
  # 安装wine-mono
  yay -S vim
  # c语言环境
  yay -S gcc gdb
  # 录屏
  yay -S simplescreenecorder
  # 显示输入
  yay -S screenkey
  yay -S github-cli	# githubCLI
  yay -S figlet		# word2paint
  yay -S dotnet-host dotnet-runtime dotnet-sdk	# CSharp

  gimp
  # polybar
  mkdir ~/.config/polybar
  cp /usr/share/doc/polybar/config ~/.config/polybar
  ```

- 专业软件

  ```bash
  curl -sLf https://spacevim.org/cn/install.sh | bash
  ```

### docker

1. 安装

   `yay -S docker`

2. 运行

   ```bash
   sudo systemctl start docker
   sudo systemctl enable docker	# 开机自启
   sudo docker version		# docker版本
   sudo docker login		# 登录
   sudo docker run hello-world		# 运行hello-world
   ```

3. 擦的权限管理

   ```bash
   cat /etc/group | grep docker # 查找 docker 组，确认其是否存在
   groups # 列出自己的用户组，确认自己在不在 docker 组中

   # 如果 docker 组不存在，则添加之：
   sudo groupadd docker

   # 将当前用户添加到 docker 组
   sudo gpasswd -a ${USER} docker

   # 重启服务
   sudo service docker restart

   # 切换一下用户组（刷新缓存）
   newgrp - docker;
   newgrp - `groups ${USER} | cut -d' ' -f1`; # TODO：必须逐行执行，不知道为什么，批量执行时第二条不会生效
   # 或者，注销并重新登录
   pkill X
   ```

4. 运行

   ```bash
   docker run -d -p 8080:8888 jupyter/datascience-notebook
   docker logs ~
   # 再次运行
   docker start ~
   ```

## 问题

- 时间不同步

  ```bash
  sudo timedatectl set-local-rtc 1
  ```

- 声音

  ```bash
  sudo alsamixer		# 修改音量
  sudo alsactl store	# 保存设置
  ```

- TIM

  ```bash
  kate ~/.zshrc
  alias tim="echo "2309" | /opt/deepinwine/apps/Deepin-TIM/start.sh"
  alias ll='ls -al'
  alias la='ls -a'
  # 在run.sh中添加
  export XMODIFIERS="@im=fcitx"
  export GTK_IM_MODULE="fcitx"
  export QT_IM_MODULE="fcitx"
  ```

- `yay -R hardcode-fixer`
