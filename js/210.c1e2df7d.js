(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{838:function(n,T){n.exports='\x3c!--\ntitle: 11-Windows编程\nsort:\n--\x3e\n\n# Windows 编程\n\n## 第一个 Windows 程序\n\n```c\n#include <windows.h>\n\nint WINAPI WinMain(HINSTANCE hInstance,\n                   HINSTANCE hPrevInstance,\n                   LPSTR szCmdLine,\n                   int nCmdShow)\n{\n    MessageBox(NULL, TEXT("你好，世界。"), TEXT("First"), MB_YESNO);\n    // null, 正文, 标题, 按钮\n    return 0;\n}\n```\n\n## 参数解释\n\n### 按钮\n\n- 文字\n\n  | 参数                | 含义           | 十六进制值 |\n  | ------------------- | -------------- | ---------- |\n  | MB_OK               | 确定           | 0x00       |\n  | MB_OKCANCEL         | 确定/取消      | 0x01       |\n  | MB_ABORTRETRYIGNORE | 终止/重试/忽略 | 0x02       |\n  | MB_YESNOCANCEL      | 是/否/取消     | 0x03       |\n  | MB_YESNO            | 是/否          | 0x04       |\n  | MB_RETRYCANCEL      | 重试/取消      | 0x05       |\n\n- 图标\n\n  | 参数               | 含义   | 十六进制值 |\n  | ------------------ | ------ | ---------- |\n  | MB_ICONHAND        | 大叉子 | 0x10       |\n  | MB_ICONQUESTION    | 问号   | 0x20       |\n  | MB_ICONEXCLAMATION | 惊叹号 | 0x30       |\n  | MB_ICONASTERISK    | info   | 0x40       |\n  | MB_ICONSTOP        | 大叉子 |            |\n  | MB_ICONERROR       | 大叉子 |            |\n  | MB_ICONWARNING     | 惊叹号 |            |\n  | MB_ICONINFORMATION | info   |            |\n\n- 两个都要\n\n  ```c\n  MessageBox(NULL, TEXT("你好，世界。"), TEXT("First"), 0x21)\t// ❓+确定/取消\n  MessageBox(NULL, TEXT("你好，世界。"), TEXT("First"), MB_ICONHAND|MB_YESNO)\n  // ❌+是/否\n  ```\n\n## 获取点击的按钮\n\n```c\n#include <windows.h>\n\nint WINAPI WinMain(HINSTANCE hInstance,\n                   HINSTANCE hPrevInstance,\n                   LPSTR szCmdLine,\n                   int nCmdShow)\n{\n    int ret = MessageBox(NULL, TEXT("你是小白嘛？"), TEXT("GET_ANSWER"), 0x24);\n    if (ret == IDYES)\n        MessageBox(NULL, TEXT("这么想就对啦~"), TEXT("ANSWER"), 0);\n    else\n        MessageBox(NULL, TEXT("放屁，你在好好想想！"), TEXT("ANSWER"), 0);\n    // null, 正文, 标题, 按钮\n    return 0;\n}\n```\n\n### 返回值的说明\n\n| 参数     | 含义 | 值  |\n| -------- | ---- | --- |\n| IDOK     | 确定 | 1   |\n| IDCANCLE | 取消 | 2   |\n| IDABORT  | 中止 | 3   |\n| IDRETRY  | 重试 | 4   |\n| IDIGNORE | 忽略 | 5   |\n| IDYES    | 是   | 6   |\n| IDNO     | 否   | 7   |\n\n## 写一个小的 HACK 程序\n\n```c\n#include <windows.h>\n\nint WINAPI WinMain(HINSTANCE hInstance,\n                   HINSTANCE hPrevInstance,\n                   LPSTR szCmdLine,\n                   int nCmdShow)\n{\n    MessageBox(NULL, TEXT("你关不掉老子~"), TEXT("HACK"), 0x30);\n    MessageBox(NULL, TEXT("不说了关不掉了嘛。"), TEXT("HACK"), 0x41);\n    MessageBox(NULL, TEXT("嘿嘿嘿~"), TEXT("HACK"), 0x35);\n    MessageBox(NULL, TEXT("怎么样，别试了~，乖乖给我20块钱~"), TEXT("HACK"), 0x42);\n    MessageBox(NULL, TEXT("不要打开任务管理器啊啊啊~~"), TEXT("HACK"), 0x10);\n    MessageBox(NULL, TEXT("我错了还不行嘛"), TEXT("HACK"), 0x10);\n    MessageBox(NULL, TEXT("哈哈哈，你个傻逼，还真相信了~"), TEXT("HACK"), 0x35);\n    while (TRUE)\n        MessageBox(NULL, TEXT("不要打开任务管理器啊啊啊~~"), TEXT("HACK"), 0x10);\n    return 0;\n}\n```\n'}}]);