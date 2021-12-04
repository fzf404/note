<!--
title: 23-Pywin32
sort:
-->

```python
import win32gui
import win32con

# FindWindow(窗体类名, 窗口名) 返回窗口句柄
win = win32gui.FindWindow('Notepad', '无标题 - 记事本')
# 返回Edit子窗口句柄
tid = win32gui.FindWindowEx(win, None, 'Edit', None)

# SendMessage(窗口句柄,发送方式,类型,信息) 发送消息
win32gui.SendMessage(tid, win32con.WM_SETTEXT, None, 'hello word!')
win32gui.PostMessage(tid, win32con.WM_KEYDOWN, win32con.VK_RETURN, 0)
```

### 实战

```python
import win32gui
import win32con
import win32clipboard as cb
import time

def send(name, msg):
    cb.OpenClipboard()    # 打开剪贴板
    cb.SetClipboardData(win32con.CF_UNICODETEXT, msg)       # 设置剪贴板内容
    # cb.GetClipboardData() # 获取剪贴板内容
    # cb.EmptyClipboard()   # 清空剪贴板
    cb.CloseClipboard()     # 关闭剪贴板
    # 获取qq窗口句柄
    handle = win32gui.FindWindow(None, name)
    if handle == 0:
        print('未找到窗口！')
    # 显示窗口
    win32gui.ShowWindow(handle, win32con.SW_SHOW)
    # 把剪切板内容粘贴到qq窗口
    win32gui.SendMessage(handle, win32con.WM_PASTE, 0, 0)
    # 按下后松开回车键，发送消息
    win32gui.SendMessage(handle, win32con.WM_KEYDOWN, win32con.VK_RETURN, 0)
    win32gui.SendMessage(handle, win32con.WM_KEYUP, win32con.VK_RETURN, 0)
    time.sleep(1)  # 延缓进程

def main():
    name = '私がでした'  # QQ聊天窗口的名字
    print('开始')
    for i in range(1, 6):
        send(name, '第'+str(i)+'次测试')
    print('结束')


main()

```
