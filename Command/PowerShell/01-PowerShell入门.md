<!-- 
title: 01-PowerShell入门
sort: 
--> 
# PowerShell入门

## 特性

- 输出基于对象而非文本

- 本机命令称为 cmdlet，可扩展

- 命令帮助：`-?`

- 列出包含特定谓词的所有命令

  ```powershell
  Get-Command -Verb Get
  gcm -v get
  ```

- `Get-Alias` cmdlet 显示别名的真实名称。

  ```powershell
  Get-Alias cp / gal cp
  > cp -> Copy-Item
  ```

  

## 使用

示例缩写：

| 名词或谓词 | 缩写 |
| :--------- | :--- |
| get        | g    |
| Set        | s    |
| Item       | i    |
| local      | l    |
| Command    | cm   |
| Alias      | al   |

- 例子

  ```
  sal -name ll -value ls
  ```


### 存储对象

```powershell
$loc	# 创建变量
$loc = Get-Location		# 将命令输出传给变量
```

### 管道

```powershell
Get-ChildItem -Path C:\windows\system32 | Out-Host -Paging
# 分页显示
```
