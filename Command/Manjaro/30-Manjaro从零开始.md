<!--
title: 30-Manjaro从零开始
sort:
-->

> 还记得去年入手了我的第一台 mac ，到如今凑齐了苹果全家桶：13mini、ipad pro、macbook air m1、airpods pro。
>
> 然后就把我的 Manjaro + Windows 双系统笔记本给我妈用了。
>
> 不得不说 mac 真香，但还是忘不了 i3wm 时的快乐，于是打算拿我的小米笔记本再折腾一遍啦～

## 系统

首先先排除 Ubuntu、Debian、Deepin、Arch等发行版。

后来在 Gentoo 和 Manjaro 犹豫了一会儿，还是选择了 Manjaro（年纪大了呜呜，不像小时候那么喜欢折腾了）

## 安装

（假如以前没有玩过，可以试试呀，最后我会教你如何还原回单系统的）

我的 Windows 笔记本是 RedmiBook Pro 15，16 + 512 锐炬显卡。

既然之前折腾过肯定经验满满，先上 [官网](https://manjaro.org/download/) 下载 KDE 的镜像。

在下载镜像的过程，先找出一个U盘，然后把磁盘配置一下。

### 磁盘配置

按 Win + x 打开磁盘管理器（让我猜猜看有多少人不知道这个快捷键

![202206012027482](https://img-1257284600.cos.ap-beijing.myqcloud.com/2022/202206012027482.jpeg)

右键单击C盘，点击压缩卷

![202206012029784](https://img-1257284600.cos.ap-beijing.myqcloud.com/2022/202206012029784.jpeg)

从 c 盘中分出 128G 空间，131072MB = 128GB（假如随便玩玩的话 20G 就够，假如想试试推荐 40G - 80G

![202206012030646](https://img-1257284600.cos.ap-beijing.myqcloud.com/2022/202206012030646.jpeg)

此时等待镜像下载完成，然后使用 rufus 创建安装盘

![202206012044213](https://img-1257284600.cos.ap-beijing.myqcloud.com/2022/202206012044213.jpeg)

等待写入完成后就可以安装双系统啦

### 修改启动项

关机后按 F2 进入BIOS（其他电脑可能不一样

先把安全启动关掉（古董电脑应该不需要这个操作

![202206012100873.jpeg](https://img-1257284600.cos.ap-beijing.myqcloud.com/2022/202206012100873.jpeg)

然后把 u盘 启动优先级调高

![202206012101042](https://img-1257284600.cos.ap-beijing.myqcloud.com/2022/202206012101042.jpeg)

接下来 F10 保存并推出

### 安装进系统

接下来就可以安装系统啦

调整时区和语言，核显直接选 open source 进入，独显选 proprietary 进入（英伟达最近也开源了，所以未来可能只有一个选项？

![202206012105339](https://img-1257284600.cos.ap-beijing.myqcloud.com/2022/202206012105339.jpeg)

进入系统后点击桌面上的 Install，然后就进入安装程序啦

首先将语言调整为中文

![202206012108143](https://img-1257284600.cos.ap-beijing.myqcloud.com/2022/202206012108143.jpeg)

其他的默认就好，在分区页面，选择手动分区（选别的也可以，前提是你不怕 windows 被覆盖掉

![202206012109150](https://img-1257284600.cos.ap-beijing.myqcloud.com/2022/202206012109150.jpeg)

选中刚刚分出来的 128G 空闲空间，选择创建

![202206012111494](https://img-1257284600.cos.ap-beijing.myqcloud.com/2022/202206012111494.jpeg)

将大小调整为 300MB，文件系统为 fat32，挂载到 /boot/efi 上（创建 Manjaro 的 UEFI 引导盘

![202206012112366](https://img-1257284600.cos.ap-beijing.myqcloud.com/2022/202206012112366.jpeg)

保存后点击剩余的空间，大小默认为全部剩余空间，文件系统调整为 ext4 ，挂载点调整为根目录 /

![202206012117458](https://img-1257284600.cos.ap-beijing.myqcloud.com/2022/202206012117458.jpeg)

![202206012117532](https://img-1257284600.cos.ap-beijing.myqcloud.com/2022/202206012117532.jpeg)

接下来创建用户名密码，最后确认一下分区情况

![202206012119966](https://img-1257284600.cos.ap-beijing.myqcloud.com/2022/202206012119966.jpeg)

点击安装，安装完成后就能看到如下界面啦

![202206012120094](https://img-1257284600.cos.ap-beijing.myqcloud.com/2022/202206012120094.jpeg)

### 调整启动顺序

还是像之前一样进入 BIOS ，将 Manjaro 的启动分区调整到前面

![202206012121606](https://img-1257284600.cos.ap-beijing.myqcloud.com/2022/202206012121606.jpeg)

### 进入系统

首先要做的第一件事肯定换源，然后安装中文输入法啦～

#### 安装中文输入法

按 Ctrl + Space 打开 Konsole

```bash
# 换成国内源
sudo pacman-mirrors -i -c China -m rank
# 安装包管理工具
sudo pacman -S yay

# 安装中文输入法
yay -S fcitx5 fcitx5-configtool fcitx5-qt fcitx5-gtk fcitx5-chinese-addons fcitx5-material-color
# 写入输入法变量
cat <<EOT >> ~/.pam_environment
GTK_IM_MODULE DEFAULT=fcitx
QT_IM_MODULE  DEFAULT=fcitx
XMODIFIERS    DEFAULT=@im=fcitx
EOT
# 桌面环境自动载入输入法
echo "fcitx5 &" > ~/.xprofile
```

#### 科学上网

接下来可以使用应用商店安装应用啦～

未完待续...
