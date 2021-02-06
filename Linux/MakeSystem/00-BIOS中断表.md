<!-- 
title: !-BIOS中断表
sort: 
--> 

| 中断                                            | 描述                                                         |
| ----------------------------------------------- | ------------------------------------------------------------ |
| INT 00h                                         | CPU: 除零错，或商不合法时触发                                |
| INT 01h                                         | CPU: 单步陷阱，TF标记为打开状态时，每条指令执行后触发        |
| INT 02h                                         | CPU: [非可屏蔽中断](https://zh.wikipedia.org/w/index.php?title=非可屏蔽中断&action=edit&redlink=1)，如[引导自我测试](https://zh.wikipedia.org/wiki/開機自我測試)时发生内存错误 |
| INT 03h                                         | CPU: 第一个未定义的中断向量，约定俗成仅用于调试程序          |
| INT 04h                                         | CPU: 算数溢出<br />通常由INTO指令在置溢出位时触发            |
| INT 05h                                         | 在按下Shift-[Print Screen](https://zh.wikipedia.org/wiki/Print_Screen)或BOUND指令检测到范围异常时触发 |
| INT 06h                                         | CPU: 非法指令                                                |
| INT 07h                                         | CPU: 没有[数学协处理器](https://zh.wikipedia.org/wiki/8087协处理器)时尝试执行浮点指令触发 |
| INT 08h                                         | IRQ0: 可编程中断控制器每 55 毫秒触发一次，即每秒 18.2 次     |
| INT 09h                                         | IRQ1: 每次键盘按下、按住、释放                               |
| INT 0Ah                                         | IRQ2:                                                        |
| INT 0Bh                                         | IRQ3: [COM2/COM4](https://zh.wikipedia.org/wiki/串口)        |
| INT 0Ch                                         | IRQ4: [COM1/COM3](https://zh.wikipedia.org/wiki/串口)        |
| INT 0Dh                                         | IRQ5: 硬盘控制器（PC/XT 下）或 [LPT2](https://zh.wikipedia.org/wiki/并口) |
| INT 0Eh                                         | IRQ6: 需要时由[软盘控制器](https://zh.wikipedia.org/wiki/軟碟控制器)调用 |
| INT 0Fh                                         | IRQ7: [LPT1](https://zh.wikipedia.org/wiki/并口)             |
| [INT 10](https://zh.wikipedia.org/wiki/INT_10)h | 显示服务 - 由BIOS或操作系统设定以供软件调用<br />Ah =00h 设定显示模式<br />Ah =01h 设定游标形态<br />Ah =02h 设置光标位置<br />Ah =03h 获取光标位置与形态<br />Ah =04h 获取光标位置<br />Ah =05h 设置显示页<br />Ah =06h 清除或滚动栏画面(上)<br />Ah =07h 清除或滚动栏画面(下)<br />Ah =08h 读取游标处字符与属性<br />Ah =09h 更改游标处字符与属性<br />Ah =0Ah 更改游标处字符<br />Ah =0Bh 设定边界颜色<br />Ah =0Ch 写像素<br />Ah =0Dh 读像素<br />Ah =0Eh 在TTY模式下写字符<br />Ah =0Fh 获取当前显示模式Ah =13h 写字符串 |
| INT 11h                                         | 返回设备列表                                                 |
| INT 12h                                         | 获取常规内存容量                                             |
| INT 13h                                         | 低级磁盘服务<br />Ah =00h 复位磁盘驱动器<br />Ah =01h 检查磁盘驱动器状态<br />Ah =02h 读扇区<br />Ah =03h 写扇区<br />Ah =04h 校验扇区<br />Ah =05h 格式化磁道<br />Ah =08h 获取驱动器参数<br />Ah =09h 初始化硬盘驱动器参数<br />Ah =0Ch 寻道<br />Ah =0Dh 复位硬盘控制器<br />Ah =15h 获取驱动器类型<br />Ah =16h 获取软驱中盘片的状态 |
| INT 14h                                         | 串口通信例程<br />Ah =00h 初始化串口<br />Ah =01h 写出字符<br />Ah =02h 读入字符<br />Ah =03h 状态 |
| INT 15h                                         | 其它（系统支持例程）<br />Ah =4Fh 键盘拦截<br />Ah =83h 事件等待<br />Ah =84h 读游戏杆<br />Ah =85h SysRq 键<br />Ah =86h 等待<br />Ah =87h 块移动<br />Ah =88h 获取扩展内存容量<br />Ah =C0h 获取系统参数<br />Ah =C1h 获取扩展 BIOS 数据区块<br />Ah =C2h 指针设备功能<br />Ah =E8h , AL=01h  (AX = E801h )获取扩展内存容量,  64MB 以上的内存容量<br />Ah =E8h , AL=20h  (AX = E820h )查询系统地址映射<br />该功能取代了 AX=E801h  和 Ah =88h |
| INT 16h                                         | 键盘通信例程<br />Ah =00h 读字符<br />Ah =01h 读输入状态<br />Ah =02h 读 Shift 键（修改键）状态<br />Ah =10h 读字符（增强版）<br />Ah =11h 读输入状态（增强版）<br />Ah =12h 读 Shift 键（修改键）状态（增强版） |
| INT 17h                                         | 打印服务<br />Ah =00h 打印字符<br />Ah =01h 初始化打印机<br />Ah =02h 检查打印机状态 |
| INT 18h                                         | 执行磁带上的 BASIC 程序: <br />“真正的”IBM 兼容机在 ROM 里内置 BASIC 程序，当引导失败时由 BIOS 调用此例程解释执行<br />（例: 打印“Boot disk error. Replace disk and press any key to continue...”这类提示信息） |
| INT 19h                                         | [加电自检](https://zh.wikipedia.org/wiki/加电自检)之后加载操作系统 |
| INT 1Ah                                         | 实时钟服务<br />Ah =00h 读取实时钟<br />Ah =01h 设置实时钟<br />Ah =02h 读取实时钟时间<br />Ah =03h 设置实时钟时间<br />Ah =04h 读取实时钟日期<br />Ah =05h 设置实时钟日期<br />Ah =06h 设置实时钟闹铃<br />Ah =07h 重置实时钟闹铃 |
| INT 1Bh                                         | Ctrl+Break，由 IRQ 9 自动调用                                |
| INT 1Ch                                         | 预留，由 IRQ 8 自动调用                                      |
| INT 1Dh                                         | 不可调用: 指向视频参数表（包含视频模式的数据）的指针         |
| INT 1Eh                                         | 不可调用: 指向软盘模式表（包含关于软驱的大量信息）的指针     |
| INT 1Fh                                         | 不可调用: 指向视频图形字符表（包含从 80h  到 FFh  的 [ASCII](https://zh.wikipedia.org/wiki/EASCII) 字符的数据）的信息 |
| INT 41h                                         | 地址指针: 硬盘参数表（第一硬盘）                             |
| INT 46h                                         | 地址指针: 硬盘参数表（第二硬盘）                             |
| INT 4Ah                                         | 实时钟在闹铃时调用                                           |
| INT 70h                                         | IRQ8: 由实时钟调用                                           |
| INT 74h                                         | IRQ12: 由鼠标调用                                            |
| INT 75h                                         | IRQ13: 由数学协处理器调用                                    |
| INT 76h                                         | IRQ14: 由第一个 IDE 控制器所调用                             |
| INT 77h                                         | IRQ15: 由第二个 IDE 控制器所调用                             |