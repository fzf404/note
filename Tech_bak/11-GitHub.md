<!-- 
title: 11-Git与hub
sort: 
--> 

## 🚛Gitee

> 免费的国内代码托管机构
>
> 除了👉速度快
>
> 目前还没发现其他的优势

- Branch

  > 分支管理

- Issues

  > 问题反馈与解决

- PullRequests

  > 参与贡献代码

- Wiki

  > 说明文档

## 🚄GitHub

> 全球最大的代码托管机构

## 🦼Git

```bash
git config --global user.name fzf
git config --global user.email nmdfzf404@163.com

# 最基础的三个命令
git init
echo "Hello Git~" > hi.txt
git add hi.txt
# git add .
# git add -A
git commit -a -m "🛵Update hi~"

# 连接到远程仓库
git remote add origin https://example.com/demo.git
git push

# clone
git clone https://example.com/demo.git
git pull

# 状态命令
git status
git log

# 分支
git checkout -b newB
git checkout master
git branch -d newB

# 撤回更改
git checkout .
git reset HEAD^ -- hi.txt
git reset --hard hi.txt

.gitignore
```

## VSC & GithubDesktop

> 造福初学者

## SSH

> 何为SSH？

```bash
ssh-keygen
# 添加密钥
git remote rm origin
git remote add origin git@github.com:xxx/xx.git
```

## 笔记

1. OneNote
2. Typora
3. Notion
4. WoLai
5. 