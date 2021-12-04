<!--
title: 21-PyQt入门
sort:
-->

# PyQt5

- 安装：`pip install pyqt5`

## 第一个 QT5 程序

```python
from PyQt5.QtWidgets import QApplication, QLabel

app = QApplication([])	# 创建QApplication对象，传入list
# 这是必须的，就像你找对象一样，只能有一个，多了少了报都不行。
label = QLabel('Hello World')	# 创建一个标签，并传递显示的内容
label.show()	# 展示一下对象
app.exec_()		# 一直展示，除非用户恰柠檬
```

## 入门

```python
from PyQt5.QtWidgets import *
import sys

class MyWindows(QMainWindow):
    def __init__(self,*args,**kwargs):
        # 调用父类的init
        super(MyWindows, self).__init__(*args,**kwargs)

        # 中心放一串文字
        label = QLabel('添加一个文本')
        self.setCentralWidget(label)


# 窗口实例化
app = QApplication(sys.argv)
windows = MyWindows()
windows.show()
app.exec_()
```

### 设置属性样式

```python
# __init__() 中
label = QLabel()
label.setText('Some Text.')
label.setStyleSheet('color: red')
# 中心对齐 from PyQt5.QtCore import Qt
label.setAlignment(Qt.AlignCenter)
self.setCentralWidget(label)
```

### 布局

```python
# 建立框架
widget = QWidget()		# 最基本的容器
layout = QVBoxLayout()	# 建立一个布局
# layout = QHBoxLayout() 水平布局

# Layout中的内容
label = QLabel('添加一个文本')
button = QPushButton('按钮')
# 添加Widget
layout.addWidget(label)
layout.addWidget(button)

# 整合
widget.setLayout(layout)
self.setCentralWidget(widget)

```

#### 表格布局

```python
# 建立框架
widget = QWidget()
layout = QGridLayout()
# Layout中的内容
label = QLabel('添加一个文本')
button1 = QPushButton('按钮1')
button2 = QPushButton('按钮2')
button3 = QPushButton('按钮3')
button4 = QPushButton('按钮4')
# 添加Widget
layout.addWidget(label, 0, 0)
layout.addWidget(button1, 1, 0)
layout.addWidget(button2, 1, 1)
layout.addWidget(button3, 2, 1)
layout.addWidget(button4, 2, 0)
# 整合
widget.setLayout(layout)
self.setCentralWidget(widget)
```

## 数据及含义

### Widgets（'不知名的'小器物）

> Qt 程序中每个东西都称之为一个`widget`
>
> 包括：按钮、标签、窗口、对话框……

- 常用的`widget`

  ![YcZl.png](https://s1.ax1x.com/2020/05/16/YcZlcD.png)

  > 上下左右的顺序，分别为：
  >
  > - [QLabel](https://links.jianshu.com/go?to=http%3A%2F%2Fdoc.qt.io%2Fqt-5%2Fqlabel.html)
  > - [QComboBox](https://links.jianshu.com/go?to=http%3A%2F%2Fdoc.qt.io%2Fqt-5%2Fqcombobox.html)
  > - [QCheckBox](https://links.jianshu.com/go?to=http%3A%2F%2Fdoc.qt.io%2Fqt-5%2Fqcheckbox.html)
  > - [QRadioButton](https://links.jianshu.com/go?to=http%3A%2F%2Fdoc.qt.io%2Fqt-5%2Fqradiobutton.html)
  > - [QPushButton](https://links.jianshu.com/go?to=http%3A%2F%2Fdoc.qt.io%2Fqt-5%2Fqpushbutton.html)
  > - [QTableWidget](https://links.jianshu.com/go?to=http%3A%2F%2Fdoc.qt.io%2Fqt-5%2Fqtablewidget.html)
  > - [QLineEdit](https://links.jianshu.com/go?to=http%3A%2F%2Fdoc.qt.io%2Fqt-5%2Fqlineedit.html)
  > - [QSlider](https://links.jianshu.com/go?to=http%3A%2F%2Fdoc.qt.io%2Fqt-5%2Fqslider.html)
  > - [QProgressBar](https://links.jianshu.com/go?to=http%3A%2F%2Fdoc.qt.io%2Fqt-5%2Fqprogressbar.html)

### Layouts（布局）

告诉 qt 如何安放`widgets`

```python
from PyQt5.QtWidgets import QApplication, QWidget, QPushButton, QVBoxLayout

app = QApplication([])	# 先创建QApplication
window = QWidget()		# 创建一个Widget(作为一个容器)
layout = QVBoxLayout()	# 建了一个layout
layout.addWidget(QPushButton('Top'))	# layout中添加widget
layout.addWidget(QPushButton('Bottom'))
window.setLayout(layout)	# 告诉widget使用这个布局
window.show()				# 展示
app.exec_()		# 持续直到退出

```

## 自定义风格

使用`.setStyle()`

默认风格是`Flusion`

```python
from PyQt5.QtWidgets import *
app = QApplication([])
app.setStyle('Windows')	# 换成windows风格
...
```

## 自定义颜色

使用`QPalette`

```python
from PyQt5.QtCore import Qt
from PyQt5.QtGui import QPalette
from PyQt5.QtWidgets import QApplication, QPushButton

app = QApplication([])
app.setStyle('Fusion')
palette = QPalette()	# 创建颜色类
palette.setColor(QPalette.ButtonText, Qt.red)
app.setPalette(palette)	# 设置颜色
button = QPushButton('Hello World')
button.show()
app.exec_()
```

## 面板风格

```python
from PyQt5.QtWidgets import QApplication, QPushButton
app = QApplication([])
app.setStyleSheet("QPushButton { margin: 10ex; }")
button = QPushButton('Hello World')
button.show()
app.exec_()
```

## 事件响应

```python
from PyQt5.QtWidgets import *
app = QApplication([])
button = QPushButton('Click')
def on_button_clicked():
    alert = QMessageBox()
    alert.setText('You clicked the button!')
    alert.exec_()

button.clicked.connect(on_button_clicked)	# 假如点击则连接函数
button.show()
app.exec_()
```
