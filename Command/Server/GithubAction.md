<!-- 
title: GithubAction
sort: 
--> 

> 基础语法
>
> `.github/workflows/xx.yml`

```yml
name: Action_name

on :
  push:
    # 指定分支
    branches:
      - master
    # 指定路径
    paths:
      - *

# 环境变量
env:
  GIT_USER: fzf404
  GIT_EMAIL: nmdfzf404@163.com
  
# 工作  
jobs:
  # job_name
  job1_name:
    runs-on:ubuntu-latest
    steps:
      - name: Checkout source
        uses:actions/checkout@v2
        
      - name: Use Node.js ${{ matrix.node_version }}
        uses: actions/setup-node@v1
        with:
          version:  ${{ matrix.node_version }}
          
      - name: Setup nodejs
        run: |
          date
          npm install
          
      - name: Do job
      - run: |
      	npm version
        npm run build
        npm run test
```

## Rdoc-Note

```yml
name: NOTE_DEPLOY

on:
  push:
    branches:
      - master

env:
  GIT_USER: fzf404
  GIT_EMAIL: nmdfzf404@163.com

jobs:
  build:
    runs-on: Ubuntu-20.04

    steps:
      - name: Checkout source
        uses: actions/checkout@v2

      - name: Use Node.js ${{ matrix.node_version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node_version }}

      - name: Setup rdoc
        env:
          ACTION_DEPLOY_KEY: ${{ secrets.NOTE_DEPLOY_PRI }}

        run: |
          mkdir -p ~/.ssh/
          echo "$ACTION_DEPLOY_KEY" > ~/.ssh/id_rsa
          chmod 600 ~/.ssh/id_rsa
          ssh-keyscan github.com >> ~/.ssh/known_hosts
          git config --global user.email $GIT_USER
          git config --global user.name $GIT_EMAIL
          npm install
          
      - name: Note Theme
        run: |
          git clone https://github.com/fzf404/rdoc-theme-fzf.git
          rm -rf node_modules/rdoc/theme/default/*
          mv rdoc-theme-fzf/* node_modules/rdoc/theme/default/
          
      - name: Note build
        run: |
          npm run build
          
      - name: Note deploy
        run: |
          npm run deploy
```

## Hexo

```bash
# 生成ssh密钥
ssh-keygen -f github-deploy-key
# 将公私钥分别复制到静态界面仓库-配置仓库
repository->setting->Secrets
repository->setting->Deploy keys

# 创建Action配置文件
blog (repository)
└── .github
    └── workflows
        └── deploy.yml
```

> `deploy.yml`

```yml
name: HEXO_DEPLOY

on:
  push:
    branches:
      - master

env:
  GIT_USER: fzf404
  GIT_EMAIL: nmdfzf404@163.com

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout source
        uses: actions/checkout@v2

      - name: Use Node.js ${{ matrix.node_version }}
        uses: actions/setup-node@v1
        with:
          version: ${{ matrix.node_version }}

      - name: Setup hexo
        env:
          ACTION_DEPLOY_KEY: ${{ secrets.HEXO_DEPLOY_PRI }}

        run: |
          mkdir -p ~/.ssh/
          echo "$ACTION_DEPLOY_KEY" > ~/.ssh/id_rsa
          chmod 600 ~/.ssh/id_rsa
          ssh-keyscan github.com >> ~/.ssh/known_hosts
          git config --global user.email $GIT_USER
          git config --global user.name $GIT_EMAIL
          npm install hexo-cli -g
      - name: Hexo deploy
        run: |
          hexo clean
          hexo d
```

> 拷贝hexo配置

```
themes
_config.yml
package.json
```

> 上传github

```yml
git remote add origin git@github.com:xx/xx.git
git branch -M master
git push -u origin master
```