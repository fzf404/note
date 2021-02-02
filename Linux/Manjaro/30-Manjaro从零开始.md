<!-- 
title: 30-Manjaro从零开始
sort: 
--> 

## 换源

```bash
sudo pacman-mirrors -i -c China -m rank
sudo vim /etc/pacman.conf
# 添加如下配置
[archlinuxcn]
SigLevel = Optional TrustedOnly
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch
# 导入 GPG key
sudo pacman -Sy archlinuxcn-keyring
# 更新系统
sudo pacman -Syyu
```

## 常用软件

```bash
sudo pacman -Sy yay
yay -S google-chrome
yay -S typora
yay -S utools
```

## 翻墙

```bash
yay -S clash
# 保存为服务
vim tc/systemd/system/clash.service
# 添加如下内容
[Unit]
Description=Clash Daemon

[Service]
ExecStart=/usr/bin/clash -d /etc/clash/

[Install]
WantedBy=multi-user.target
# 开启服务
systemctl enable clash
systemctl start clash
# 看日志
journalctl -u clash
```

