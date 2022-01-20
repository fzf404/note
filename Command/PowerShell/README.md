<!--
title: PowerShell
sort:
-->

> 对于这个新型的 Windows 控制台，大部分人都知之甚少呀~
>
> 当然我也是…

### 代理

```powershell
netsh winhttp set proxy 127.0.0.1:10809
netsh winhttp reset proxy	# 取消
netsh winhttp show proxy	# 展示
```

### 问题

```powershell
# 此系统上禁止运行脚本
set-executionpolicy remotesigned
```