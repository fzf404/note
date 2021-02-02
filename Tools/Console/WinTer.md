<!-- 
title: WinTer
sort: 
--> 
# Windows Terminal入门

### 开启WSL2

```powershell
Enable-WindowsOptionalFeature -Online -FeatureName VirtualMachinePlatform
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
# https://docs.microsoft.com/nl-nl/windows/wsl/wsl2-kernel
wsl --set-default-version 2
```

> 进入应用商店安装想要的发行版即可
>
> 彩蛋：`wslfetch`

## 配置

- 主题

  > 添加到powershell{}里
  
  `"colorScheme": "One Half Dark"`

## 使用

- 搜索

  可以通过键入 `ctrl+shift+f `打开搜索对话框.