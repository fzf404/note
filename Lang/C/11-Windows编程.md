<!-- 
title: 11-Windows编程
sort: 
--> 
# Windows编程

## 第一个Windows程序

```c
#include <windows.h>

int WINAPI WinMain(HINSTANCE hInstance,
                   HINSTANCE hPrevInstance,
                   LPSTR szCmdLine,
                   int nCmdShow)
{
    MessageBox(NULL, TEXT("你好，世界。"), TEXT("First"), MB_YESNO);
    // null, 正文, 标题, 按钮
    return 0;
}
```

## 参数解释

### 按钮

- 文字

  | 参数                | 含义           | 十六进制值 |
  | ------------------- | -------------- | ---------- |
  | MB_OK               | 确定           | 0x00       |
  | MB_OKCANCEL         | 确定/取消      | 0x01       |
  | MB_ABORTRETRYIGNORE | 终止/重试/忽略 | 0x02       |
  | MB_YESNOCANCEL      | 是/否/取消     | 0x03       |
  | MB_YESNO            | 是/否          | 0x04       |
  | MB_RETRYCANCEL      | 重试/取消      | 0x05       |

- 图标

  | 参数               | 含义   | 十六进制值 |
  | ------------------ | ------ | ---------- |
  | MB_ICONHAND        | 大叉子 | 0x10       |
  | MB_ICONQUESTION    | 问号   | 0x20       |
  | MB_ICONEXCLAMATION | 惊叹号 | 0x30       |
  | MB_ICONASTERISK    | info   | 0x40       |
  | MB_ICONSTOP        | 大叉子 |            |
  | MB_ICONERROR       | 大叉子 |            |
  | MB_ICONWARNING     | 惊叹号 |            |
  | MB_ICONINFORMATION | info   |            |

- 两个都要

  ```c
  MessageBox(NULL, TEXT("你好，世界。"), TEXT("First"), 0x21)	// ❓+确定/取消
  MessageBox(NULL, TEXT("你好，世界。"), TEXT("First"), MB_ICONHAND|MB_YESNO)
  // ❌+是/否
  ```

## 获取点击的按钮

```c
#include <windows.h>

int WINAPI WinMain(HINSTANCE hInstance,
                   HINSTANCE hPrevInstance,
                   LPSTR szCmdLine,
                   int nCmdShow)
{
    int ret = MessageBox(NULL, TEXT("你是小白嘛？"), TEXT("GET_ANSWER"), 0x24);
    if (ret == IDYES)
        MessageBox(NULL, TEXT("这么想就对啦~"), TEXT("ANSWER"), 0);
    else
        MessageBox(NULL, TEXT("放屁，你在好好想想！"), TEXT("ANSWER"), 0);
    // null, 正文, 标题, 按钮
    return 0;
}
```

### 返回值的说明

| 参数     | 含义 | 值   |
| -------- | ---- | ---- |
| IDOK     | 确定 | 1    |
| IDCANCLE | 取消 | 2    |
| IDABORT  | 中止 | 3    |
| IDRETRY  | 重试 | 4    |
| IDIGNORE | 忽略 | 5    |
| IDYES    | 是   | 6    |
| IDNO     | 否   | 7    |

## 写一个小的HACK程序

```c
#include <windows.h>

int WINAPI WinMain(HINSTANCE hInstance,
                   HINSTANCE hPrevInstance,
                   LPSTR szCmdLine,
                   int nCmdShow)
{
    MessageBox(NULL, TEXT("你关不掉老子~"), TEXT("HACK"), 0x30);
    MessageBox(NULL, TEXT("不说了关不掉了嘛。"), TEXT("HACK"), 0x41);
    MessageBox(NULL, TEXT("嘿嘿嘿~"), TEXT("HACK"), 0x35);
    MessageBox(NULL, TEXT("怎么样，别试了~，乖乖给我20块钱~"), TEXT("HACK"), 0x42);
    MessageBox(NULL, TEXT("不要打开任务管理器啊啊啊~~"), TEXT("HACK"), 0x10);
    MessageBox(NULL, TEXT("我错了还不行嘛"), TEXT("HACK"), 0x10);
    MessageBox(NULL, TEXT("哈哈哈，你个傻逼，还真相信了~"), TEXT("HACK"), 0x35);
    while (TRUE)
        MessageBox(NULL, TEXT("不要打开任务管理器啊啊啊~~"), TEXT("HACK"), 0x10);
    return 0;
}
```

