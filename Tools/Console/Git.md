<!--
title: Git
sort:
-->

# Git 教程

## 问题

```bash
# ssl error
git config --global http.sslBackend "openssl"

# name & email
git config --global user.name "fzf404"
git config --global user.email me@fzf404.art

# WARNING: UNPROTECTED PRIVATE KEY FILE!
chmod 600 ~/.ssh/*

# 本地与远程冲突解决
git stash
git pull
git stash pop
```

## 常用

```bash
# clone
git clone <remote_url>
# 克隆链接的第三方仓库
git clone --recurse-submodules <remote_url>
# 或
git submodule update --init --recursive

# 代理
git config --global http.proxy http://127.0.0.1:10808
git config --global https.proxy http://127.0.0.1:10808
git config --global https.proxy socks5://127.0.0.1:10808
git config --global --unset http.proxy

# tag 操作
set tag v0.4.0
git tag -d $tag # 删除标签
git push --delete origin $tag # 删除远程 tag

git tag $tag # 新增标签
git push --tags # 推送 tag 到远程

# 更新远程地址
git remote remove origin
git remote add origin <remote_url>

# 强制覆盖
git fetch --all
git reset --hard origin/master

# 清除某次提交前的全部提交
echo '🔥 主页v2.0' | git commit-tree c6b4418^{tree}
> fb27a3e558d45bf7725dbe3dd6a204ff74454472
git rebase --onto e4a0dc c6b4418		# Hash值前六位 目标Hash值

# 从所有提交中删除某个文件
git filter-branch --index-filter \
    'git rm -rf --cached --ignore-unmatch xxx.xx' HEAD
# 推荐的做法
brew install git-filter-repo
git filter-repo --invert-paths --path 'xxx.xx' --use-base-name

# 修改提交信息
git log --oneline -5 # 最近5次提交信息
git rebase -i ce53go # 修改特定信息
git rebase -i HEAD~5 # 修改近5次的提交信息

git push -f # 强制推送

# 修改日期
https://github.com/PotatoLabs/git-redate
# 修改近4次提交记录
git redate -c 4

# 修改初始提交时间
git filter-branch --env-filter \
"if test \$GIT_COMMIT = '448827e9ef01bb245ccd3939bfbddc2681c6d9c8'
then
    export GIT_AUTHOR_DATE='Sun May 7 02:23:03 2017 +0000'
    export GIT_COMMITTER_DATE='Sun May 7 02:23:03 2017 +0000'
fi" && rm -fr "$(git rev-parse --git-dir)/refs/original/"

```

## SSH

```bash
# 生成 ssh 密钥
ssh-keygen

# 更新ssh
git remote rm origin
git push --set-upstream origin master
git remote add origin git@github.com:fzf404/Tech_Note.git
```

## 更多命令

```bash
git init		# 初始化git仓库
echo 123456 > 1.txt	# 写入东西
git add .\1.txt		# 添加至缓冲区
git commit -m "添加了1.txt"	# 添加至归档区

git status		# 显示当前状态
git add . 		# 添加所有文件
git commit -m "two commit"
git log			# 查看过去操作
git reflog		# 查看操作记录

git reset <>	# 归档区回滚
	--mixed		# (默认)回滚归档区与缓冲区
	--hard		# 回滚三个区
	--soft		# 回滚归档去
git reset HEAD <file>	# 撤销add文件
git checkout --<file>	# 撤销工作区的修改

git revert <>	# 抹除某次提交

git remote -v	# 查看服务端地址
git remote remove origin	# 删除重新添加
git remote add origin git@github.com:fzf404/gitdemo.git
git branch --set-upstream-to=origin/master master

# 浅拷贝
git clone xxx --depth=1
```

### 操作

```bash
# 清理旧的提交
git checkout --orphan latest_branch
# 所有文件加到暂存区
git add -A
git commit -am "Clean old Commit"
# 强制提交
git push -f origin master

# Github Gitee 同步更新
git remote rm origin
# 关联 github 与 gitee
git remote add github git@github.com:
git remote add gitee git@gitee.com:
# 检查
git remote -v
# 上传
git push github master
git push gitee master
```

### 分支

```bash
git branch -v	# 查看当前分支
git checkout -b b1	# 新建分支并切换
git checkout --orphan b2	# 新建无提交分支
git branch -D master	# 删掉旧分支
git branch -m master	# 新分支改名
# 合并分支
git checkout master	# 回到主分支
git merge b1		# 合并但不删除
# 遇到冲突可将master合并并修改冲突
git pull			# 拉取远端仓库的最新版本并合并
# 相当于如下指令的结合
# fetch/merge

# 新建空分支并切换
```

### 忽略文件

> 以斜杠`/`开头表示目录；
> 以星号`*`通配多个字符；
> 以问号`?`通配单个字符；
> 以方括号`[]`包含单个字符的匹配列表；
> 以叹号`!`表示不忽略(跟踪)匹配到的文件或目录；

## 原理

```bash
# 查看数据库
tree .git/objects

# 读取文件类型
git cat-file -t 58c9
blob # 缓冲区
tree # 归档区 - 目录结构快照
commit # 归档区 - 提交信息

# 读取文件具体内容
git cat-file -p 58c9

# 分支信息
cat .git/HEAD
cat .git/refs/heads/master

# 修改配置文件
vim .\.git\config
```

