<!--
title: VsCode
sort:
-->

## 基本

- `.vscode`中存着配置文件
- 正则表达式搜索

  > 搜索: `code.(.*).fzf`
  >
  > 替换: `code.$1.fzf`

## 配置

- 快捷键

  `Ctrl+K S`

## 问题

### RemoteSSH

- 连接报错

> 在这写.ssh/config

![image-20201122222158054](https://gitee.com//nmdfzf404/Image-hosting/raw/master/2020/image-20201122222158054.png)

- 连接报错

> ` Resolver error: Error: Connecting with SSH timed out`

```json
"remote.SSH.useLocalServer": false
```

### Shell

- `get bad result from install script`

> 原因是 conda 卸载后 cmd AutoRun 指向空文件，CMD 打不开
>
> 解决：
>
> 打开注册表编辑器
>
> `\HKEY_CURRENT_USER\SOFTWARE\Microsoft\Command Processor`
>
> 将 `AutoRun`设置为空

### CodeRunner

- 乱码

> 进入 setting.json，添加如下字段：
>
> `"code-runner.runInTerminal": true`

### Go

> 安装依赖

```
go get -v github.com/uudashr/gopkgs/v2/cmd/gopkgs
go get -v github.com/ramya-rao-a/go-outline
go get -v github.com/cweill/gotests/gotests
go get -v github.com/fatih/gomodifytags
go get -v github.com/josharian/impl
go get -v github.com/haya14busa/goplay/cmd/goplay
go get -v github.com/go-delve/delve/cmd/dlv
go get -v honnef.co/go/tools/cmd/staticcheck
go get -v golang.org/x/tools/gopls
```



## 插件推荐

- KoroFileHeader

  > `ctrl+alt+i`: 文件注释
  >
  > `ctrl+alt+t`: 函数注释

- Debugger for Microsoft Edge

  > 配置`launch.json`
  >
  > 配合`five server`进行 debug
