<!--
title: 04-权限+读wiki
sort:
-->

- [ ] 操作权限
- [ ] 读英文文档
- [ ] 挂载 u 盘

## 权限

> 运行不成功，除了命令输错，剩下便是权限问题了。

## 基础命令

- id

  > 显示用户身份

- chmod

  ```bash
  chmod 755 [file]	# -rwxr-xr-x
  chmod +x [file]		# -nnxnnxnnx 所有用户加运行权限，默认为a
  chmod o-w [file]	# other用户除去write权限
  chmod 777 -R [folder]	# 递归增加权限
  ```

- addusr

  > 新建用户
  >
  > deluser

- su

  > 切换用户

- chown

  > 更改文件所有者
  >
  > `chown root:users`：文件所有者改成 root，用户组改成 users
  >
  > `chown root:`：文件所有者改成 root，文件用户组也改成 root

- chgrp

  > 更改用户组所有权
  >
  > 前一个命令不能改文件夹的

## LInux 小技巧

`Ctrl+A`: 回到开头

`alias`: 别名

## vim

| 命令    | 用法        |
| ------- | ----------- |
| r       | replace     |
| x       | delete      |
| /       | find        |
| v       | visual      |
| shift+v | line visual |

## 阅读 Arch Wiki

> 为什么有人说 Arch 是邪教?
