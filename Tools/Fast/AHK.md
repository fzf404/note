<!-- 
title: AHK
sort: 
--> 

> 模拟热键

## 模拟点击

```vb
stop := false
s::
  stop := true
Return

r::
  stop := false
  Loop{
    Click % "860,960"
    Sleep, 1500
    Click % "920,810"
  }
  Until stop
Return
```

