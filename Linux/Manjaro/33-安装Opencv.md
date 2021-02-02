<!-- 
title: 33-安装Opencv
sort: 
--> 

> 从github下载源码

## 安装依赖

```bash
sudo pacman -S cmake
sudo pacman -S git
sudo pacman -S base-devel
sudo pacman -S gtk2
sudo pacman -S pkg-config
sudo pacman -S python
sudo pacman -S ffmpeg

sudo pacman -S intel-tbb   
sudo pacman -S libdc1394  
sudo pacman -S jasper 
sudo pacman -S libjpeg-turbo libjpeg6-turbo 
sudo pacman -S libtiff 
```

## 编译安装

```bash
cd <opencv-src>
mkdir build
cd build

cmake -D CMAKE_BUILD_TYPE=RELEASE -D \
CMAKE_INSTALL_PREFIX=/usr/local ..
# 失败请删除CMakeCache.txt

make -j8 # 8线程编译
sudo make install
```

## peizhi

```bash
# cd /etc/ld.so.conf.d/
# sudo touch opencv3.conf
# sudo sh -c 'echo "/usr/local/lib" > opencv3.conf'

# sudo ldconfig	# pkg-config

# 复制文件
sudo cp -f /usr/local/lib/pkgconfig/opencv.pc  /usr/lib/pkgconfig/

sudo vim /etc/bash.bashrc

PKG_CONFIG_PATH=$PKG_CONFIG_PATH:/ucdsr/lib/pkgconfig
export PKG_CONFIG_PATH

```

## ceshi

```bash
pkg-config --libs opencv
pkg-config --cflags opencv
pkg-config --modversion opencv # 查看版本号

# yun
cd ~/opencv-3.4.12/samples/cpp
g++ `pkg-config --libs opencv` drawing.cpp `pkg-config --cflags opencv` -o drawing.out

```



