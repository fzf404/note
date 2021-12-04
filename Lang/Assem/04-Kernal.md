<!--
title: 04-进入内核
sort:
-->

> 分成两个文件：
>
> `Loader.asm`&`Kernal.asm`
>
> 这时不需要减去 512 字节的偏移地址

```bash
# 连接两个文件
copy /b /Y 2-Loader.bin+3-Kernel.bin Boot.bin
```

## 颜色

| 二进制数 | 颜色       | 例子          |
| -------- | ---------- | ------------- |
| 0000     | 0-黑色     | black         |
| 0001     | 1-蓝色     | blue          |
| 0010     | 2-绿色     | green         |
| 0011     | 3-青色     | cyan          |
| 0100     | 4-红色     | red           |
| 0101     | 5-紫红色   | magenta       |
| 0110     | 6-棕色     | brown         |
| 0111     | 7-银色     | light gray    |
| 1000     | 8-灰色     | gray          |
| 1001     | 9-淡蓝色   | light blue    |
| 1010     | A-淡绿色   | light green   |
| 1000     | B-淡青色   | light cyan    |
| 1100     | C-淡红色   | light red     |
| 1101     | D-淡紫红色 | light magenta |
| 1110     | E-黄色     | yellow        |
| 1111     | F-白色     | white         |

## FAT 文件

> Loader 放在软盘的第 1 扇区
>
> 必须要严格遵守 FAT 格式 BPB 结构
>
> 再把 Kernel 以文件方式放到软盘里

- `Loader.asm`

```asm
jmp short start     ;  jmp short 占位2字节

DB  0x90            ; 第三字节必须为90
DB  "FZF40404"      ; 8字节名称
DW  512
DB  1               ; 簇(cluster)的大小必须为1个扇区
DW  1               ; FAT的起始位置(一般从第一个扇区开始)
DB  2               ; FAT的个数(必须为2)
DW  224             ; 根目录的大小(一般设为244项)
DW  2880            ; 该磁盘的的大小(必须为2880扇区)
DB  0xf0            ; 磁盘的种类(必须为0xfd)
DW  9               ; FAT的长度(必须为9扇区)
DW  18              ; 一个磁道(track)有几个扇区(必须为18)
DW  2               ; 磁头数(必须为2)
DD  0               ; 不使用分区(必须为0)
DD  2880            ; 重写一次磁盘大小
DB  0,0,0x29        ; 意义不明，固定
DD  0xffffffff      ; (可能是)卷标号码
DB  "FZF-OS-DISC"   ; 磁盘名称(11字节)
DB  "FAT12   "      ; 磁盘格式名称(8字节)
RESB    18          ; 先腾出18字
```

## 制作镜像

> 使用 WinImage

```
->Image -> Boot sector properties -> Open...
>Loader.bin
@See Oem string & Serial Number
->OK
Load Kernel.bin
Save as boot.IMA
```
