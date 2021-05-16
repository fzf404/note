<!-- 
title: Git
sort: 
--> 
# Git教程

## 问题

```bash
# ssl error
git config --global http.sslBackend "openssl"
```

## 创建目录

```bash
md git_study	
cd .\git_sudy	# 新建文件夹并进入

git init		# 初始化git仓库
echo 123456 > 1.txt	# 写入东西

git add .\1.txt		# 添加至缓冲区
git commit -m "添加了1.txt"	# 添加至归档区
# 进入github新建仓库
# 如果使用代理，执行如下两条
# git config --global http.proxy 127.0.0.1:port
#git config --global https.proxy 127.0.0.1:port
# 取消
# git config --global --unset http.proxy
git remote remove origin	# 删除旧仓库地址
git remote add origin https://github.com.cnpmjs.org/fzf404/
```

# SSH

```bash
ssh-keygen.exe
# 复制id_rsa.pub到Delpoy keys
git push -u origin master		# push一下commit
# 如果需要输入密码，执行下面命令
# git config --global credential.helper store

# 更新ssh
git remote rm origin	
git push --set-upstream origin master
git remote add origin git@github.com:fzf404/Tech_Note.git
```

## 更多命令

```bash
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
```

## 创建分支

```bash
git branch -v	# 查看当前分支
git checkout -b b1	# 新建分支并切换
git checkout --orphan b2	# 新建无提交分支
# 合并分支
git checkout master	# 回到主分支
git merge b1		# 合并但不删除
# 遇到冲突可将master合并并修改冲突
git pull			# 拉取远端仓库的最新版本并合并
# 相当于如下指令的结合
# fetch/merge
```

## 忽略文件

> 以斜杠`/`开头表示目录；
> 以星号`*`通配多个字符；
> 以问号`?`通配单个字符；
> 以方括号`[]`包含单个字符的匹配列表；
> 以叹号`!`表示不忽略(跟踪)匹配到的文件或目录；

```
/mtk/ 过滤整个文件夹
*.zip 过滤所有.zip文件
/mtk/do.c 过滤某个具体文件
```

## GItee

> github 与 gitee 同步更新

```bash
# 删除已关联名为origin的远程库
git remote rm origin	
# 关联 github 与 gitee
git remote add github git@github.com:
git remote add gitee git@gitee.com:
# 检查
git remote -v
# 上传
git push github master
git push gitee master
# 修改配置文件
notepad .\.git\config
```

## 清理库

```bash
# 浅拷贝
git clone xxx --depth=1

# 切换到新分支
git checkout --orphan latest_branch
# 所有文件加到暂存区
git add -A
git commit -am "Clean old Commit"
# 删掉旧分支
git branch -D master
# 新分支改名
git branch -m master
# 提交
git push -f origin master
```

## 冲突

```bash
# 强制覆盖
git fetch --all
git reset --hard origin/master
```

