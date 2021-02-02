<!-- 
title: VsCode
sort: 
--> 
# VsCode配置

## 基本

- `.vscode`中存着配置文件

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

### Sync

1. [Github生成token](https://github.com/settings/tokens)
2. [新建gist](https://gist.github.com/)
3. 接下来粘贴进去~



## ==问题==

> RemoteSSH
>
> 连接报错
>
> 在这写.ssh/config

![image-20201122222158054](https://gitee.com//nmdfzf404/Image-hosting/raw/master/2020/image-20201122222158054.png)

> CodeRunner乱码
>
> 进入setting.json，添加如下字段：
>
> `"code-runner.runInTerminal": true`

