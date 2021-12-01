<!-- 
title: tmux
sort: 
--> 

> 终端复用神器

## 入门

> Session > Window > pane

## 快捷键

> `ctrl+b`: Prefix键

| 快捷键 | 功能               |
| ------ | ------------------ |
| %      | 左右分屏           |
| “      | 上下分屏           |
| o/;    | 切换Pane           |
| z      | 全屏Pane           |
| x      | 关闭Pane           |
| [      | 翻页模式 PgUp/PgDn |
| c      | 新建Window         |
| &      | 关闭Window         |
| :      | 新建Session        |
| s/w    | 切换Session        |
| d      | 离开Session        |
| tmux a | 进入Session        |

## 命令

```bash
# 保存第三个pane中 642-5557 行
tmux capture-pane -t 3 -S -5557 -E -642 
# 保存全部内容
tmux capture-pane -S -
```

