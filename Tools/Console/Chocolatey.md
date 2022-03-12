<!--
title: Choco
sort:
-->

> Windows 命令行安装应用
>
> [Chocolatey](https://chocolatey.org/install)

```powershell
choco install -y
choco uninstall
choco upgrade

# 代理
netsh winhttp set proxy 127.0.0.1:7890

# auto
choco install -y git github-desktop vscode nodejs-lts firefox everything potplayer rufus filezilla postman fiddler wechat adb nmap picgo freedownloadmanager obsidian docker-desktop vmwareworkstation obs-s -y
```

## 常用软件

```powershell
# normal
choco install googlechrome
choco install firefox
choco install ccleaner
choco install microsoft-windows-terminal
choco install everything
choco install powertoys
choco install potplayer

# Develop
choco install git
choco install mingw
choco install ojdkbuild
choco install python3
choco install anaconda3
choco install nodejs
choco install yarn
choco install golang
choco install cmake
choco install texlive

# Hard
choco install arduino
choco install sdrsharp

# Code
choco install typora
choco install vim
choco install neovim
choco install vscode
choco install sublimetext3
choco install notion
choco install dosbox

# Tools
choco install github-desktop
choco install rufus
choco install android-sdk
choco install cheatengine
choco install vmwareworkstation
choco install freedownloadmanager

# Serves
choco install mobaxterm
choco install filezilla
choco install docker-desktop

# Network
choco install wget
choco install wireshark
choco install postman
choco install nmap
choco install fiddler
choco install burp-suite-free-edition

# Relax
choco install blender
choco install telegram
choco install unity
choco install tim

```
