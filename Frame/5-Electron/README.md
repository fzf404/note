<!--
title: Electron
sort:
-->

> 有多想少人想开发出一个属于自己的 PC 应用呢？

## 自动构建

### GithubAction

```js
name: Monit Release

on: 
 push:
    tags:
      - 'v*.*.*'

jobs:
  release:
    runs-on: ${{ matrix.os }}

    strategy:
      matrix:
        os: [macos-latest, windows-latest]

    steps:
      - name: Check out Git repository
        uses: actions/checkout@v2

      - name: Install Node.js, NPM and Yarn
        uses: actions/setup-node@v2
        with:
          node-version: 14

      - name: Build/release Electron app
        uses: samuelmeuli/action-electron-builder@v1
        with:
          github_token: ${{ secrets.token }}
          release: ${{ startsWith(github.ref, 'refs/tags/v') }}
          use_vue_cli: true # 使用 vue cli 构建
```

### 提交

```
git tag -v0.0.1
git push --tags
```

