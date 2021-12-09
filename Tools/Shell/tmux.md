<!--
title: tmux
sort:
-->

> 终端复用神器

## 入门

> Session > Window > pane

## 快捷键

> `ctrl+b`: Prefix 键

| 快捷键 | 功能               |
| ------ | ------------------ |
| %      | 左右分屏           |
| “      | 上下分屏           |
| o/;    | 切换 Pane          |
| z      | 全屏 Pane          |
| x      | 关闭 Pane          |
| [      | 翻页模式 PgUp/PgDn |
| c      | 新建 Window        |
| &      | 关闭 Window        |
| :      | 新建 Session       |
| s/w    | 切换 Session       |
| d      | 离开 Session       |
| tmux a | 进入 Session       |

## 命令

```bash
# 保存第三个pane中 642-5557 行
tmux capture-pane -t 3 -S -5557 -E -642
# 保存全部内容
tmux capture-pane -S -
```
