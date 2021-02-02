<!-- 
title: i3wm
sort: 
--> 

# i3wm配置

## 安装

```bash
yay -S i3
yay -S alacritty	# new shell
yay -S picom	# shell渲染器
picom
yay -S dmenu	# super+d
yay -S i3-gaps	# i3边框
yay -S lxappearance		# layout								
yay -S variety	 feh	# wallpaper
yay -S kdenlive gimp ranger	libreoffice # 视频 图像 文件 办公
```

## config

```bash
Super+Enter	# open shell
Super+Nem	# change desktop
# ResolutionHppjphhghhYAY
Super+V		# Verticallycc
Super+H		# Horizontally
Super+F		# FULL screen
Super+Shift+Q	# Quit
# Layout
Super+E		# change Layout
Super+S		# stacking
Super+W		# table
# Use
Super+Shift+Num		# Mov Window
Super+Direct	# change window
Super+R			# change windows size
Super+_Shift+R		# Restart i3
vim ~/.Xresources
vim ~/.config/i3/config
	new_window 1pixel	# del `c`
```

### 更改键盘

```bash
yay -S xorg		# 键盘配置擦的
xmodmap -pke > .XMODMAP
xev		# 按键显示
vi
```

## u盘挂载

```bash
mkdir /mnt/usbstick1
lsblk -f
# /dev/disk/by-id
mount device_node /mnt/usbstick
mount -U UUID /mnt/usbstick
sudo mount -o remount,rw /partition/identifier /mount/point
```

