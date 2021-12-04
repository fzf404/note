<!--
title: 01-第一节课
sort:
-->

- [ ] linux 软件包管理
- [ ] vim 基本操作
- [ ] html 基础
- [ ] 何为 github?
- [ ] nginx 搭建第一个网站

## Linux 基础

> Linux 有众多发行版
>
> 学长开的虚拟机是 debian

### 换源

> Linux 安装软件极为方便
>
> 但默认源服务器在国外
>
> 访问速度达到了惊人的 30kb/s
>
> 所以要换到国内的镜像源

```bash
# 这不是今天重点
# 我写了个脚本自动换源,复制运行即可
wget http://dl.fzf404.top/autosrc.sh && sh autosrc.sh
# 自己动手丰衣足食
https://developer.aliyun.com/mirror/
# 食不了了,aliyun没更新debian10.....
deb http://mirrors.aliyun.com/debian/ buster main non-free contrib
deb http://mirrors.aliyun.com/debian/ buster-updates main non-free contrib
deb http://mirrors.aliyun.com/debian/ buster-backports main non-free contrib
deb-src http://mirrors.aliyun.com/debian/ buster main non-free contrib
deb-src http://mirrors.aliyun.com/debian/ buster-updates main non-free contrib
deb-src http://mirrors.aliyun.com/debian/ buster-backports main non-free contrib
deb http://mirrors.aliyun.com/debian-security/ buster/updates main non-free contrib
deb-src http://mirrors.aliyun.com/debian-security/ buster/updates main non-free contrib
```

### apt

> 一个软件包管理器

```bash
# 先更新一下软件源
apt update
# 安装一个十分有趣的小脚本
apt install sl
# 安装后运行他
/usr/games/sl
# 卸载
apt remove sl
# 更多命令直接输入apt即可获得说明
```

## Vim

> vim 天下第一（逃

1. 分享 vim 使用心得

   > 好用的插件
   >
   > 批量处理文件
   >
   > 代码补全

2. 键位图

   ![img](https://www.runoob.com/wp-content/uploads/2015/10/vi-vim-cheat-sheet-sch1.gif)

3. 入门键位图

   ![img](https://www.runoob.com/wp-content/uploads/2015/10/vi-vim-cheat-sheet-sch1.gif)

   > 这里只放了我认为初学者需要掌握的 4 张
   >
   > 更多参考: [VIm-Key](https://www.runoob.com/w3cnote/all-vim-cheatsheat.html)

   ![vi-vim-tutorial-1](http://www.runoob.com/wp-content/uploads/2015/10/vi-vim-tutorial-1.gif)

   ![vi-vim-tutorial-2](http://www.runoob.com/wp-content/uploads/2015/10/vi-vim-tutorial-2.gif)

   ![img](https://www.runoob.com/wp-content/uploads/2015/10/vi-vim-tutorial-3.gif)

   ![vi-vim-tutorial-4](https://www.runoob.com/wp-content/uploads/2015/10/vi-vim-tutorial-4.gif)

## HTML

> 推荐一本入门书:`HeadFirstHTML&CSS`

### 第一个网页

> 写个很草的网页
>
> 详细解释课上说

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-7" />
    <title>HelloWorld</title>
  </head>

  <body>
    <h1>Welcom to my website.</h1>
    <p>I can answer all your question</p>
    <a href="https://baidu.com">Click me!I will reply you.</a>
  </body>
</html>
```

## Github

> 每一位程序员最先了解的应是 github

```bash
apt install git
# 这是一个开源的2048游戏,接下来就用nginx搭建他
git clone https://gitee.com/zzburning/2048.git
```

## Nginx

> 高性能的 web 代理服务器
>
> 新浪网易都在用

### 安装

```bash
apt install nginx
# 安装后访问你服务器的ip,就会看到网页啦~
```

### 配置文件

```bash
vim /etc/nginx/sites-enabled/default
```

#### 聊聊配置文件

```nginx
root /www/demo;
location /baidu {
	echo "fzf";		# 输出内容
    proxy_pass https://baidu.com/;		# 重定向
}
```
