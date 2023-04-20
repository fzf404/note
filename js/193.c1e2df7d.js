(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{821:function(n,i){n.exports='\x3c!--\ntitle: 10-QT入门\nsort:\n--\x3e\n\n[Qt 下载](https://download.qt.io/new_archive/qt)\n\n## 串口点灯\n\n> Qt Creator\n\n### Arduino\n\n```c\nvoid setup() {\n  pinMode(LED_BUILTIN, OUTPUT);\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  char val = Serial.read();\n  if(val==\'T\'){\n    digitalWrite(LED_BUILTIN, HIGH);\n  } else if (val==\'F\'){\n    digitalWrite(LED_BUILTIN, LOW);\n  }\n}\n```\n\n### QT\n\n1. 编辑 pro 文件\n\n```properties\n# 增加依赖\nQT += serialport\n# 设置图标\nRC_ICONS = led.ico\n```\n\n2. 打开`*.ui`文件，设计布局\n\n![image-20210429212434541](https://img-1257284600.cos.ap-beijing.myqcloud.com/2021/20210429212441.png)\n\n3. 头文件引入库`*.h`\n\n```cpp\n#include <QSerialPort>\n#include <QSerialPortInfo>\n\n// 新建serialPort对象\nprivate:\n    Ui::MainWindow *ui;\n    QSerialPort *serialPort;\n};\n```\n\n4. 编写主程序\n\n```cpp\nMainWindow::MainWindow(QWidget *parent) :\n    QMainWindow(parent),\n    ui(new Ui::MainWindow)\n{\n    QStringList serialNamePort;\n\n    ui->setupUi(this);\n    this->setWindowTitle("serial_led");\n\n    /* 创建一个串口对象 */\n    serialPort = new QSerialPort(this);\n\n    /* 搜索全部串口对象 */\n    foreach (const QSerialPortInfo &inf0, QSerialPortInfo::availablePorts()) {\n        serialNamePort<<inf0.portName();\n    }\n    ui->serialBox->addItems(serialNamePort);\n}\n```\n\n5. 编写信号处理的槽函数\n\n> 右键单击按钮转到槽\n\n```cpp\n#include <QMessageBox>\n\nvoid MainWindow::on_openSerial_clicked()\n{\n    /* 串口设置 */\n    serialPort->setPortName(ui->serialBox->currentText());\n    serialPort->setBaudRate(ui->baudrateBox->currentText().toInt());\n    serialPort->setDataBits(QSerialPort::Data8);\n    serialPort->setStopBits(QSerialPort::OneStop);\n    serialPort->setParity(QSerialPort::NoParity);\n\n    /* 打开串口提示框 */\n    if (true == serialPort->open(QIODevice::ReadWrite))\n    {\n        QMessageBox::information(this, "提示", "串口打开成功");\n    }\n    else\n    {\n        QMessageBox::critical(this, "提示", "串口打开失败");\n    }\n}\n\nvoid MainWindow::on_closeSerial_clicked()\n{\n    serialPort->close();\n    QMessageBox::critical(this, "提示", "串口关闭成功");\n}\n\nvoid MainWindow::on_openLight_clicked()\n{\n    serialPort->write("T");\n    qDebug("ON\\n");\n}\n\nvoid MainWindow::on_closeLight_clicked()\n{\n    serialPort->write("F");\n    qDebug("OFF\\n");\n}\n```\n\n6. 打包\n\n> 构建转至`Release`\n>\n> 项目文件夹中会多出 Release 目录，将 exe 文件复制出来\n>\n> 打开`Qt for Desktop`，运行`windeployqt xx.exe`\n\n![image-20210429215913826](https://img-1257284600.cos.ap-beijing.myqcloud.com/2021/20210429215915.png)\n'}}]);