<!--
title: LVGL
sort:
-->

> 嵌入式 GUI 库

## 安装

1. 安装[Visual_Studio](https://visualstudio.microsoft.com/zh-hans/vs/)

2. 选择安装组件

   - 使用 C++的桌面开发
   - 对 v142 生成工具的 C++/CLI 支持

3. clone 项目

   ```bash
   git clone --recurse-submodules https://github.com/lvgl/lv_sim_visual_studio.git -b release/v7
   ```

4. 使用 vs 打开

5. 修改模式为 x64

6. 工程右键属性 -> 平台工具集 -> Visual Studio 2019 (v142)

7. 查看`LVGL.Simulator.cpp`下的例子

8. 运行
