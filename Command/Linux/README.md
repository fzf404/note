<!--
title: Linux
sort:
-->

> 居然还有人用 Windows?!

## 问题解决

```bash
# 修改主机名
vim /etc/hostname

# 修改时区
timedatectl set-timezone Asia/Shanghai

# ssh
sudo apt-get install openssh-server
```

## 脚本

```bash
# 一键换源
bash <(curl -sSL https://gitee.com/SuperManito/LinuxMirrors/raw/main/ChangeMirrors.sh)

# 一键安装docker
bash <(curl -sSL https://gitee.com/SuperManito/LinuxMirrors/raw/main/DockerInstallation.sh)
```
