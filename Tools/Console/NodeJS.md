<!-- 
title: NodeJS
sort: 
--> 

## NodeJS

> `node.js`是基于chrome v8引擎的JS运行环境
>
> [包管理器安装](https://nodejs.org/zh-cn/download/package-manager/)

```bash
# Using Ubuntu
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# Using Debian, as root
curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
apt-get install -y nodejs
```

### 工具

```bash
# 内网穿透
npx localtunnel --port 8000
# 开启文件服务
npm install -g http-server
http-server
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
  > 弥补了npm的一些缺陷
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
yarn global add	# 全局安装
yarn publish
yarn run
  ```

  > 搭建环境

  ```powershell
yarn init
yarn add xx --save	# 添加新插件
yarn install		# 拉取旧插件

yarn login			# 登录
yarn logout			# 登出
  ```

  > 编辑Package

  ```json
"scripts": {
    "ver": "npm -v"
},
  ```

## Nvm

> nodejs版本管理工具

```bash
nvm ls-remote
nvm install vxx.xx.x
```