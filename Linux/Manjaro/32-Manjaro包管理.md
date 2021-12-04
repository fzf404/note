<!--
title: 32-Manjaro包管理
sort:
-->

# Manjaro 包管理

## 清理垃圾

```bash
sudo pacman -R $(pacman -Qdtq)		# 清理n无用包
sudo pacman -Scc			# 清楚已安装的下载包
```

## pacmam

```bash
sudo pacman -S 软件名　# 安装
sudo pacman -R 软件名　# 删除单个软件包，保留其全部已经安装的依赖关系
sudo pacman -Rs 软件名 # 除指定软件包，及其所有没有被其他已安装软件包使用的依赖关系
sudo pacman -Ss 软件名  # 查找软件
sudo pacman -Sc # 清空并且下载新数据
sudo pacman -Syu　# 升级所有软件包
sudo pacman -Qs # 搜索已安装的包
```

## yay

```bash
yay -S package # 从 AUR 安装软件包
yay -Rns package # 删除包
yay -Syu # 升级所有已安装的包
yay -Ps # 打印系统统计信息
yay -Qi package # 检查安装的版本
```

## wget

```bash
wget -c -r -np -k -L -p http://
```

## Snap

要在 Arch Linux 上安装 Snapd，你可以使用 pacman 包管理器或 AUR：

```bash
sudo pacman -S snapd
# yay -S --noconfirm --needed snapd
# 启动并启用snapd服务：
sudo systemctl enable --now snapd.socket
# 确认服务状态，运行
systemctl status snapd.socket
# 在/var/lib/snapd/snap和/snap之间创建符号链接：
sudo ln -s /var/lib/snapd/snap /snap
# 添加环境变量
echo "export PATH=\$PATH:\/snap/bin/" | sudo tee -a /etc/profile
# 获取新path
source /etc/profile
```

### 使用介绍

- 通过安装 hello-world snap 来测试你的系统，并确保它正确运行：

  `$ sudo snap install hello-world`

- 列出已安装的 snaps：

  `$ snap list`

- 删除 snap：

  `$ sudo snap remove hello-world`

- 安装 OneNote

  [OneNote](https://github.com/patrikx3/onenote)
