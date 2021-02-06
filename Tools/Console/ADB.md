<!-- 
title: ADB
sort: 
--> 
# ADB命令入门

## 操作

```powershell
# 安装应用
adb install *.apk
# 屏幕截图
adb shell screencap /sdcard/screen.png
# 文件传送至电脑
adb pull /sdcard/screen.png d:\test\
# 点击屏幕 100,100像素
adb shell input tap 100 100
# 滑动 开始坐标 结束坐标 延迟时间
adb shell input swipe 500 1500 500 500 500
# 设备信息 -s 
adb devices
```

## 模拟按键

```powershell
adb shell input keyevent <keycode>
```

| keycode | 含义                           |
| :------ | :----------------------------- |
| 3       | HOME 键                        |
| 4       | 返回键                         |
| 5       | 打开拨号应用                   |
| 6       | 挂断电话                       |
| 24      | 增加音量                       |
| 25      | 降低音量                       |
| 26      | 电源键                         |
| 27      | 拍照（需要在相机应用里）       |
| 64      | 打开浏览器                     |
| 82      | 菜单键                         |
| 85      | 播放/暂停                      |
| 86      | 停止播放                       |
| 87      | 播放下一首                     |
| 88      | 播放上一首                     |
| 122     | 移动光标到行首或列表顶部       |
| 123     | 移动光标到行末或列表底部       |
| 126     | 恢复播放                       |
| 127     | 暂停播放                       |
| 164     | 静音                           |
| 176     | 打开系统设置                   |
| 187     | 切换应用                       |
| 207     | 打开联系人                     |
| 208     | 打开日历                       |
| 209     | 打开音乐                       |
| 210     | 打开计算器                     |
| 220     | 降低屏幕亮度                   |
| 221     | 提高屏幕亮度                   |
| 223     | 系统休眠                       |
| 224     | 点亮屏幕                       |
| 231     | 打开语音助手                   |
| 276     | 如果没有 wakelock 则让系统休眠 |

## Scrcpy

> 显示并控制通过 USB (或 TCP/IP) 连接的安卓设备

```bash
# 修改码率 默认2M
scrcpy -b 2M
# 限制帧率
scrcpy --max-fps 15
# 设置范围 0,0 为原点的1080x1440像素
scrcpy --crop 1080:1440:0:0
# 旋转
scrcpy --lock-video-orientation 0   # 自然方向
scrcpy --lock-video-orientation 1   # 逆时针旋转 90°
scrcpy --lock-video-orientation 2   # 180°
scrcpy --lock-video-orientation 3   # 顺时针旋转 90°
# 录制
scrcpy -r file.mkv
scrcpy -Nr file.mkv		# 默认录制
# 远程连接
adb shell ip route		# ip地址
adb tcpip 5555				# 开启端口
adb connect 192.168.0.106:5555
# 多设备
adb devices
scrcpy -s 0123456789abcdef	# 选择设备

# 实用
scrcpy --window-borderless	# 无边框
scrcpy --always-on-top			# 保持最前
scrcpy -f 									# 全屏
```

