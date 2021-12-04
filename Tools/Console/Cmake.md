<!--
title: Cmake
sort:
-->

## HelloWorld

> main.cpp

```cpp
#include <iostream>

int main(int argc, char *argv[])
{
   std::cout << "Hello CMake!" << std::endl;
   return 0;
}
```

> CMakeLists.txt

```cmake
cmake_minimum_required(VERSION 2.6)	# 设置CMake最小版本
project (hello_cmake)	# 工程名
add_executable(${PROJECT_NAME} main.cpp)	# 生成可执行文件,执行文件名称为工程名
```

```bash
# 构建
mkdir build
cd build/
cmake ..
```

## 包含头文件

| 变量名                   | 信息                                                         |
| :----------------------- | :----------------------------------------------------------- |
| CMAKE_SOURCE_DIR         | 根源代码目录，工程顶层目录。暂认为就是 PROJECT_SOURCE_DIR    |
| CMAKE_CURRENT_SOURCE_DIR | 当前处理的 CMakeLists.txt 所在的路径                         |
| PROJECT_SOURCE_DIR       | 工程顶层目录                                                 |
| CMAKE_BINARY_DIR         | 运行 cmake 的目录。外部构建时就是 build 目录                 |
| CMAKE_CURRENT_BINARY_DIR | The build directory you are currently in.当前所在 build 目录 |
| PROJECT_BINARY_DIR       | 暂认为就是 CMAKE_BINARY_DIR                                  |

### 文件树

```bash
├── CMakeLists.txt
├── include
│   └── Hello.h
└── src
    ├── Hello.cpp
    └── main.cpp
```

CMakeLists.txt

```cmake
cmake_minimum_required(VERSION 3.5)

# Set the project name
project (hello_headers)

# 需要编译cpp文件列表
set(SOURCES
    src/Hello.cpp
    src/main.cpp
)

# 所有的源文件生成一个可执行文件
add_executable(hello_headers ${SOURCES})

# 包含的库的路径
target_include_directories(hello_headers
    PRIVATE
        ${PROJECT_SOURCE_DIR}/include
)
```

构建

```bash
# 构建
mkdir build
cd build/
cmake ..
make
```
