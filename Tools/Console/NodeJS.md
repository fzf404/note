<!--
title: NodeJS
sort:
-->

## NodeJS

> `node.js`是基于 chrome v8 引擎的 JS 运行环境
>
> [包管理器安装](https://nodejs.org/zh-cn/download/package-manager/)

```bash
# Using Ubuntu
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# Using Debian, as root
curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
apt-get install -y nodejs

# 安装特定版本
setup_12.x

# 版本管理工具
curl -sL https://git.io/fisher | source && fisher install jorgebucaran/fisher
fisher install jorgebucaran/nvm.fish
# nvm使用
nvm install 13
nvm use 13
```

### 工具

```bash
# 内网穿透
yarn global add localtunnel # 安装
lt --port 8080 # 映射 8080 端口
> your url is: https://cowardly-termite-80.loca.lt

# 在线使用
npx localtunnel --port 8000 

# 开启文件服务
npm install -g http-server
http-server # 使用
# 禁止缓存
http-server -c-1
```

### Npm

> [npmjs](https://www.npmjs.com/)

```powershell
node	# 进入JS运行环境
npm init
npm install [-g]	# 全局安装
	-S	--save-dev	# 安装为开发依赖
# 换源
npm config set registry https://registry.npm.taobao.org
# 发布包时换回原来的源
npm config set registry https://registry.npmjs.org
# 发布插件
npm adduser | npm publish
# 删除
npm unpublish --force
```

### Yarn

> `npm i yarn -g`
>
> 弥补了 npm 的一些缺陷
>
> [中文文档](https://yarn.bootcss.com/)

```powershell
npm i yarn@1.22.0 -g 	# 安装特定版本
npm upgrade yarn -g		# 更新

yarn config set registry https://registry.npm.taobao.org

yarn -v
# 初始化项目
yarn init
yarn install
yarn add/remove # 添加依赖包
yarn upgrade packeage@latest # 更新依赖包
yarn global add	# 全局安装
yarn publish # 发布包

# 更多
yarn upgrade-interactive --latest	# 手动选择更新
```

> 搭建环境

```powershell
yarn init
yarn add xx --save	# 添加新插件
yarn install		# 拉取旧插件

yarn login			# 登录
yarn logout			# 登出
```

> 编辑 Package

```json
"scripts": {
    "ver": "npm -v"
},
```

## Nvm

> nodejs 版本管理工具

```bash
nvm ls-remote
nvm install vxx.xx.x
```
