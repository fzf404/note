<!-- 
title: 00-kali
sort: 
--> 
## 基础配置

```bash
sudo vim /etc/apt/sources.list		# 更改镜像源
deb http://mirrors.aliyun.com/kali kali-rolling main non-free contrib
apt-get update && apt-get upgrade	# 同步
sudo apt-get install fcitx-googlepinyin		# 安装输入法
sudo passwd root		# 第一次设置root密码
sudo apt-get install python3-pip
```

