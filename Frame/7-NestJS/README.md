<!-- 
title: NestJS
sort: 
--> 

> Node开发服务端
>
> [官网](https://nestjs.bootcss.com/)

## 安装

```bash
yarn global add @nestjs/cli	# 安装脚手架
nest new project-name		# 创建项目
nest start --watch			# 运行

# RESTful APIs
yarn add @nestjs/swagger swagger-ui-express

# config
yarn add dotenv

# MongoDB
yarn add @nestjs/mongoose mongoose
# redis
yarn add nestjs-redis

# s
yarn add @nestjs/websockets @nestjs/platform-socket.io
yarn a@types/socket.io
 
# crypto
yarn add crypto

# token
yarn add @nestjs/passport @nestjs/jwt passport passport-local passport-jwt

yarn add @types/passport-local -D

# 格式化代码
yarn format
```

## 问题

```bash
# Error: Cannot find module '@nestjs/core/router/route-path-factory'
nest update -f -t latest
```

