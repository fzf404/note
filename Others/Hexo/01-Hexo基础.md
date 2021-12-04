<!--
title: 01-Hexo基础
sort:
-->

# Hexo 基础

## 介绍

- Vue 使用的是 Hexo。

- hexo 是一个博客工具，不需要部署到服务器。
- 也就是说，它是一个静态界面生成、上传的工具。

## 安装

- 需要 git 与 node.js
- npm 换源：`npm install -g cnpm --registry=https://registry.npm.taobao.org`
- 使用 cnpm 安装 Hexo：`cnpm install -g hexo-cli`

## 建站

- 初始化 hexo 文件夹：（需要翻墙）

  ```bash
  hexo init <folder>
  cd <folder>
  npm install
  ```

- 建立第一个网站：

  ```bash
  hexo g			# 建立public文件
  hexo s			# 开启服务
  ```

- 写下第一篇文章：

  ```bash
  hexo new 'post title'			# 建立一篇标题为“post title”的文章
  hexo new draft 'draft title'	# 建立一篇不被渲染的草稿
  ```

- makedown 的默认配置：`Front Matter`

## 命令

- `hexo init [folder]`

  > 新建一个网站

- `hexo new [layout] <title>`

  > 新建一篇文章
  >
  > 如果没有设置`layout`，默认使用\_config,yml

  | 参数          | 描述                         |
  | ------------- | ---------------------------- |
  | -p, --ptah    | 自定义文章路径               |
  | -r, --replace | 存在同名文章则替换           |
  | -s, --slug    | 新文章的文件名和发布后的 URL |

  ```bash
  hexo --path about/me "about me"
  # 创建一个 source/about/me.md 文件，Front Matter 的 title 为 "About me"
  ```

- `hexo generate(g)`

  > 生成静态文件

  | 选项         | 描述                   |
  | ------------ | ---------------------- |
  | -d, --deploy | 文件生成后立即部署网站 |
  | -w, --watch  | 监视文件变动（调试用） |
  | -b, --bail   | 抛出异常               |
  | -f, --force  | 强制重新生成文件       |

- `hexo publish [layout] <filename>`

  > 发表草稿

- `hexo sever`

  > 启动服务器，默认为：http://localhost:4000

  | 选项         | 描述           |
  | ------------ | -------------- |
  | -p, --port   | 重设端口       |
  | -s, --static | 只使用静态文件 |
  | -l, --log    | 启用日志       |

- `hexo deploy(d)`

  > github 部署网站

  - `npm install --save hexo-deployer-git`

  - 编辑`_congig.yml`

    ```yml
    deploy:
      type: git
      repo: git@github.com:fzf404/fzf404.github.io.git
      master: master
    ```

- `hexo render -o`

  > 批量渲染文件
  >
  > -o, --output：输出路径

- `hexo clean`

  > 清理缓存文件

- `hexo list <type>`

  > 列出网站资料

- `hexo --cwd /path/to/cwd`

  > 自定义工作目录的路径
