<!-- 
title: Vim
sort: 
--> 

# Vim

![img](https://img-blog.csdn.net/20170325161428570?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvc2luYXRfMzYxMDEzNTQ=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

## 模式

- 正常模式

  > `esc`键切换至Normal-mode

- 插入模式

  > 字母功能键触发

- 命令模式

  > `:`进入命令模式

- 可视模式

  > `v V Ctrl+v`键

## 使用

### 常用

| 快捷键  | 全程               |
| ------- | ------------------ |
| r[char] | 修改当前光标下字符 |
| i       | Insert             |
| a       | Approach           |
| o       | 下一行             |
| u       | Undo               |
| x       | 删除               |
| S       | 删除当前行并插入   |
| b       | Back 上一个词      |
| w       | Word 下一个词      |
| v       | 按下左键           |
| H/gg、G | 移动到最先后一行   |
| %       | 跳转到()/{}/[]     |
| J       | 连接行             |

### 组合

> <option操作> + <motion动作>
>
> Ctrl+v 选中  [大写i] 输入 按Esc：同时编辑多行

| 快捷键                                                       | 功能                             |
| ------------------------------------------------------------ | -------------------------------- |
| Shift+A                                                      | 行末插入                         |
| Shift+I                                                      | 行首插入                         |
| Shift+O                                                      | 上一行写入                       |
| d                                                            | 删除                             |
| p                                                            | 粘贴                             |
| y                                                            | 【yank】复制                     |
| c [ciw]                                                      | 【change in word】删除并进入写入 |
| f [f*]                                                       | find * 单词                      |
| Shift+V                                                      | 选中当前行                       |
| Ctrl+V                                                       | 随便选                           |
| Ctrl+v 向下选 I[upper i] 输入 Esc                            | 同时编辑                         |
| : normal i TEXT                                              | 选中文本后同时插入               |
| %s/sStr/oStr/g<br />%: 指定要操作的行号,%代表所有<br />s: 查找并替换<br />g: 全局 | 全局替换 substitute / globe      |
| :%s/s/o/gc                                                   | 每次替换提示                     |
| qa [write] q 5@a                                             | 定义宏                           |
| Ctrl+f/b                                                     | 下一页、上一页                   |

## 命令

> PlugInstall：安装插件
>
> split：分屏
>
> edit

## 插件

> [vim-plug](https://github.com/junegunn/vim-plug)
>
> [airline](https://github.com/vim-airline/vim-airline)

- 自动补全

```bash
yay -S cmake clang
# 翻墙
git config --global http.proxy 'http://127.0.0.1:12333'
git config --global https.proxy 'http://127.0.0.1:12333'

export all_proxy=http://127.0.0.1:12333 
# export http_proxy=http://127.0.0.1:12333 
# export https_proxy=http://127.0.0.1:12333

# un翻墙
git config --global --unset http.proxy 
git config --global --unset https.proxy
unset ALL_PROXY
# clone
cd ~/.vim/plugged
git clone https://github.com/ycm-core/YouCompleteMe
# Update submodule
git submodule update --init --recursive

./install.py --all --clangd-completer

```

### 插件使用

- wildfire

  > Enter 自动选中括号中的内容

- surround

  > 选中+S  
  >
  > `cs "'` 把”变成‘

## 高级

| 快捷键   | 用途          |
| -------- | ------------- |
| Ctrl+A X | 当前数字+1/-1 |
|          |               |
|          |               |

## Vscode

> `vim Handle Keys`: 关闭快捷键