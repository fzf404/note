<!-- 
title: Arm汇编
sort: 
--> 

## 环境

> 树莓派
>
> [gef](https://github.com/hugsy/gef)

## HelloWorld

```assembly
# demo.s
.data          /*.data段是动态创建的，无法预测 */
var1: .word 3  /* 内存中的变量var1=3*/
var2: .word 4  /* 内存中的变量var2=4*/

.text          /* 代码段开始位置 */ 
.global _start

_start:
    ldr r0, adr_var1  @ 通过标签adr_var1获得变量var1的地址，并加载到R0。
    ldr r1, adr_var2  @ 通过标签adr_var2获得变量var2的地址，并加载到R1。
    ldr r2, [r0]      @ 通过R0内的地址获取到该地址处的值（0x03)，加载到R2。
    str r2, [r1]      @ 将R2内的值（0x03）存储到R1中的地址处。 
    bkpt             

adr_var1: .word var1  /* 变量var1的地址位置 */
adr_var2: .word var2  /* 变量var2的地址位置 */

# 编译运行
as demo.s -o demo.o
ld demo.o -o demo
# gef调试
gdb -f demo
# 打断点
gef> br _start
gef> run			# 运行
gef> nexti 		# 运行下一条命令
gef> info register r0	# 查看寄存器的值
r0 = 0x20090 					# r0的值是var1的地址
gef> x/w 0x20090			# 查看内存的值
```

## 数据类型

![img](https://gitee.com/nmdfzf404/Image-hosting/raw/master/2021/data-types-1.png)

```assembly
ldr = Load Word
ldrh = Load unsigned Half Word
ldrsh = Load signed Half Word
ldrb = Load unsigned Byte
ldrsb = Load signed Bytes

str = Store Word
strh = Store unsigned Half Word
strsh = Store signed Half Word
strb = Store unsigned Byte
strsb = Store signed Byte
```

## 寄存器

|   ARM    |                 Description                 |           x86           |
| :------: | :-----------------------------------------: | :---------------------: |
|    R0    |               General Purpose               |           EAX           |
|  R1-R5   |               General Purpose               | EBX, ECX, EDX, ESI, EDI |
|  R6-R10  |               General Purpose               |            –            |
| R11 (FP) |                Frame Pointer                |           EBP           |
|   R12    |            Intra Procedural Call            |            –            |
| R13 (SP) |                Stack Pointer                |           ESP           |
| R14 (LR) |              记录父函数的地址               |            –            |
| R15 (PC) | <- Program Counter / Instruction Pointer -> |           EIP           |
|   CPSR   |    Current Program State Register/Flags     |         EFLAGS          |

### 状态寄存器

| thumb        | fast     | interrupt | overflow | carry    | zero     | negative |
| ------------ | -------- | --------- | -------- | -------- | -------- | -------- |
| 工作状态标志 | 用户模式 | 中断标志  | 溢出标志 | 进位标志 | 零标志位 | 符号标志 |

## 指令集

### ARM和Thumb模式

> ARM模式下指令集始终是32-bit
>
> Thumb模式下可以是16-bit或者32-bit

### 指令

> 指令的格式

```assembly
MNEMONIC{S}{condition} {Rd}, Operand1, Operand2
MNEMONIC     - 操作指令（机器码对应的助记符）。
{S}          - 可选后缀. 如果指定了该后缀，那么条件标志将根据操作结果进行更新。
{condition}  - 执行指令所需满足的条件。
{Rd}         - 目标寄存器，存储操作结果。
Operand1     - 第一操作数（寄存器或者立即数）
Operand2     - 第二操作数. 立即数或者带有位移操作后缀（可选）的寄存器。
  #123                    - 立即数。
  Rx                      - 寄存器x (如 R1, R2, R3 ...)。
  Rx, ASR n               - 寄存器x，算术右移n位 (1 = n = 32)。
  Rx, LSL n               - 寄存器x，逻辑左移n位 (0 = n = 31)。
  Rx, LSR n               - 寄存器x，逻辑右移n位 (1 = n = 32)。
  Rx, ROR n               - 寄存器x，循环右移n位 (1 = n = 31)。
  Rx, RRX                 - 寄存器x，扩展的循环位移，右移1位。

ADD   R0, R1, R2         - R1与R2的值相加，存储到R0。
ADD   R0, R1, #2         - R1内的值加2，存储到R0。
MOVLE R0, #5             - 仅当满足条件LE（R0<=5）时，将立即数5移动到R0（编译器会把它看作MOVLE R0, R0, #5）。
MOV   R0, R1, LSL #1     - 将寄存器R1的内容向左移动一位然后移动到R0（Rd）。因此，如果R1值是2，它将向左移动一位，并变为4。然后将4移动到R0。
```

### 指令表

| Instruction | Description            | Instruction | Description                   |
| :---------: | :--------------------- | :---------: | :---------------------------- |
|     MOV     | 移动数据               |     EOR     | Bitwise XOR                   |
|     MVN     | Move and negate        |     LDR     | 内存加载到寄存器              |
|     ADD     | Addition               |     STR     | 寄存器存到内存                |
|     SUB     | Subtraction            |     LDM     | 批量加载                      |
|     MUL     | Multiplication         |     STM     | Store Multiple                |
|     LSL     | Logical Shift Left     |    PUSH     | Push on Stack                 |
|     LSR     | Logical Shift Right    |     POP     | Pop off Stack                 |
|     ASR     | Arithmetic Shift Right |      B      | Branch                        |
|     ROR     | Rotate Right           |     BL      | Branch with Link              |
|     CMP     | Compare                |     BX      | Branch and eXchange           |
|     AND     | Bitwise AND            |     BLX     | Branch with Link and eXchange |
|     ORR     | Bitwise OR             |   SWI/SVC   | System Call                   |

### 内存指令

```assembly
# R0内存地址的值存到R2
LDR R2, [R0]   @ [R0] - R0中保存的值是源地址。
LDR R2, [R0, #12]		@ 相对寻址，R0+12的地址的值
# R2的值存到R1内存地址
STR R2, [R1]   @ [R1] - R1中保存的值是目标地址

str r2, [r1, #2]  @ R2值存到R1+2地址中，R1值不变。
str r2, [r1, #4]! @ R2值存到R1+2地址中，R1值+4。
ldr r3, [r1], #4  @ R1地址的值加载到R3，R1值+4。

str r2, [r1, r2]  @ R1+R2偏移地址的值加载到R2，R1不变
str r2, [r1, r2]! @ 同上，R1变为R1+R2
ldr r3, [r1], r2  @ R1地址的值加载到R3，R1值+R2。

str r2, [r1, r2, LSL#2]  @ R1+R2左移两位地址的值加载到R2，R1不变
str r2, [r1, r2, LSL#2]! @ 同上上
ldr r3, [r1], r2, LSL#2  @ R1地址的值加载到R3，R1值+R2左移2位。
```

### 批量操作

```assembly
words:
 .word 0x00000000             /* words[0] */
 .word 0x00000001             /* words[1] */
 .word 0x00000002             /* words[2] */
 .word 0x00000003             /* words[3] */
 .word 0x00000004             /* words[4] */
 .word 0x00000005             /* words[5] */
 .word 0x00000006             /* words[6] */

adr r0, words+12	@ 将word[3]的地址放到r0中
ldm r0, {r4,r5}  	@ 批量加载r0地址的值到r4,r5
```

### 立即数

> arm32位指令
>
> 分配到立即数只有12位(4096位

1. 使用较小的值构造较大值`MOV r0, #256 `和`ADD r0, #255`

2. `LDR r1, = 511`