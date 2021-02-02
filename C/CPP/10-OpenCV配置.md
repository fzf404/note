<!-- 
title: 10-OpenCV配置
sort: 
--> 

# OpenCV配置

> 开源图像处理库

## 准备

1. [MinGW](https://sourceforge.net/projects/mingw-w64/files/Toolchains%20targetting%20Win64/Personal%20Builds/mingw-builds/8.1.0/threads-posix/seh/x86_64-8.1.0-release-posix-seh-rt_v6-rev0.7z)

   > 使用MinGW64

2. Cmake

3. OpenCV

   > 3.4.12版

## 配置

> 使用Vscode

1. 打开`Cmake-gui.exe`，选择opencv目录以及build目录

   ![image-20201104173345270](https://gitee.com/nmdfzf404/Image-hosting/raw/master/2020/20201104173352.png)

2. `Configure`一下

   ![image-20201104173556692](C:\Users\44153\AppData\Roaming\Typora\typora-user-images\image-20201104173556692.png)
   
   > 接下来配置一下c/c++的编译器位置，忘记截图了😋
   >
   > 接下来会自动加载

3. 这时勾选支持C11

   ![image-20201104174304854](https://gitee.com/nmdfzf404/Image-hosting/raw/master/2020/20201104174304.png)

   > 选择后按Generate

4. 编译OpenCV源码

   > 切换到build目录运行
   >
   > `minGW32-make`
   >
   > `minGW32-make install`

5. 环境变量

   > mingw64与opencv/mingw/bin

### Vscode配置

> 根据自己的目录重新编辑

> c_cpp_properties.json

```json
{
    "configurations": [
      {
        "name": "win32",
        "includePath": ["${workspaceFolder}/**",
            "C:/mingw64/bin",
            "D:/opencv/build/x64/MinGW/install/include",
            "D:/opencv/build/x64/MinGW/install/include/opencv",
            "D:/opencv/build/x64/MinGW/install/include/opencv2",
            "D:/opencv/build/x64/MinGW/install/x64/mingw/lib"],
        "defines": ["_DEBUG", "UNICODE", "_UNICODE"],
        "compilerPath": "C:\\mingw64\\bin\\gcc.exe",
        "cStandard": "c11",
        "cppStandard": "c++17",
        "intelliSenseMode": "clang-x64"
      }
    ],
    "version": 4
  }
```

> launch.json

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "g++.exe build and debug active file",
      "type": "cppdbg",
      "request": "launch",
      "program": "${fileDirname}\\${fileBasenameNoExtension}",
      "args": [],
      "stopAtEntry": false,
      "cwd": "${workspaceFolder}",
      "environment": [],
      "externalConsole": true,
      "MIMode": "gdb",
      "miDebuggerPath": "C:\\mingw64\\bin\\gdb.exe",
      "setupCommands": [
        {
          "description": "Enable pretty-printing for gdb",
          "text": "-enable-pretty-printing",
          "ignoreFailures": false
        }
      ],
      "preLaunchTask": "g++.exe build active file"
    }
  ]
}
```

> tasks.json

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "type": "shell",
      "label": "g++.exe build active file",
      "command": "C:\\mingw64\\bin\\g++.exe",
      "args": [
        "-g",
        "${file}",
        "-o",
        "${fileDirname}\\${fileBasenameNoExtension}.exe",
        "-I",
        "D:/opencv/build/x64/MinGW/install/include",
        "-I",
        "D:/opencv/build/x64/MinGW/install/include/opencv",
        "-I",
        "D:/opencv/build/x64/MinGW/install/include/opencv2",
        "-L",
        "D:/opencv/build/x64/MinGW/install/x64/mingw/lib",
        "-L",
        "D:/opencv/build/x64/MinGW/bin",
        "-llibopencv_core3412",
        "-llibopencv_imgproc3412",
        "-llibopencv_imgcodecs3412",
        "-llibopencv_video3412",
        "-llibopencv_ml3412",
        "-llibopencv_highgui3412",
        "-llibopencv_objdetect3412",
        "-llibopencv_flann3412",
        "-llibopencv_imgcodecs3412",
        "-llibopencv_photo3412",
        "-llibopencv_videoio3412",
      ],
      "options": {
        "cwd": "C:\\mingw64\\bin"
      },
      "problemMatcher": [
        "$gcc"
      ],
      "group": {
        "kind": "build",
        "isDefault": true
      }
    }
  ]
}
```

### 第一个OpenCV程序

> show一张图片并转成png
>
> F5运行

```cpp
#include <opencv2/core.hpp>
#include <opencv2/imgcodecs.hpp>
#include <opencv2/highgui.hpp>

#include <iostream>

using namespace cv;
//! [includes]

int main(int argc, char const *argv[])
{
    //! [imread]
    std::string image_path = samples::findFile("starry_night.jpg");
    Mat img = imread(image_path, IMREAD_COLOR);
    //! [imread]

    //! [empty]
    if (img.empty())
    {
        std::cout << "Could not read the image: " << image_path << std::endl;
        return 1;
    }
    //! [empty]

    //! [imshow]
    imshow("Display window", img);
    int k = waitKey(0); // Wait for a keystroke in the window
    //! [imshow]

    //! [imsave]
    if (k == 's')
    {
        imwrite("starry_night.png", img);
    }
    //! [imsave]

    return 0;
}
```

