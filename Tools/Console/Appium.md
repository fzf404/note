<!-- 
title: Appium
sort: 
--> 

> 安卓自动化测试

## 安装

1. `pip install appium`

2. Android SDK

3. [JDK1.8](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

4. [Appium](http://appium.io/)

   > 修改设置

## 使用

> 点击`Start Inspector Session`，获得布局信息

```json
{
  "platformName": "Android",  
  "platformVersion": "10",  
  "deviceName": "mi",  
  "appPackage": "tv.danmaku.bili",  
  "appActivity": ".ui.splash.SplashActivity",  
  "unicodeKeyboard": true,  
  "resetKeyboard": true,  
  "noReset": true,  
  "newCommandTimeout": 6000,
  "automationName": "UiAutomator2"
}
```

> `expand_search`: 搜索框ID

```python
from appium import webdriver
# 初始化参数
desired_caps = {
    'platformName': 'Android', 
    'platformVersion': '10', 
    'deviceName': 'mi',  # 设备名
    'appPackage': 'tv.danmaku.bili',  # 启动Package
    'appActivity': '.ui.splash.SplashActivity',  # 启动Activity
    'unicodeKeyboard': True,  # 使用默认Unicode输入法
    'resetKeyboard': True,  # 结束后恢复默认输入法
    'noReset': True,  # 执行后不重置App
    'newCommandTimeout': 6000,
    'automationName': 'UiAutomator2'
}
# 初始化连接Appium Server
driver = webdriver.Remote('http://localhost:4723/wd/hub', desired_caps)
# 设置等待延时
driver.implicitly_wait(5)
# 点击搜索框
driver.find_element_by_id("expand_search").click()
driver.find_element_by_id("search_src_text").send_keys("咒术回战")
# 回车
driver.keyevent(66)
# 点击播放按钮
driver.find_element_by_id("play_button").click()
# 退出
# driver.quit()
```

