<!-- 
title: VsCode
sort: 
--> 
# VsCode配置

## 基本

- `.vscode`中存着配置文件

- 正则表达式搜索

  > 搜索: `code.(.*).fzf`
  >
  > 替换:  `code.$1.fzf`

## 配置

- **同步github**

  > 在vs控制台输入：
  >
  > `git config --global user.name "fzf"`
  >
  > `git config --global user.email "nmdfzf404@163.com"`
  >
  > 接着初始化git：
  >
  > `git init`
  >
  > 新建密钥：
  >
  > `ssh-keygen.exe`
  >
  > 复制`id_rsa.pub`到Delpoy keys

- 自己配置快捷键

  `Ctrl+K S`

## ==问题==

### RemoteSSH

- 连接报错

> 在这写.ssh/config

![image-20201122222158054](https://gitee.com//nmdfzf404/Image-hosting/raw/master/2020/image-20201122222158054.png)

- `get bad result from install script`

> 原因是conda卸载后cmd AutoRun 指向空文件，CMD打不开
>
> 解决：
>
> 打开注册表编辑器
>
> `\HKEY_CURRENT_USER\SOFTWARE\Microsoft\Command Processor`
>
> 将`AutoRun`设置为空

### CodeRunner

- 乱码

> 进入setting.json，添加如下字段：
>
> `"code-runner.runInTerminal": true`

## 插件推荐

- `KoroFileHeader`

  > `ctrl+alt+i`: 文件注释
  >
  > `ctrl+alt+t`: 函数注释
