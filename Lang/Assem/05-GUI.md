<!-- 
title: 05-图形化
sort: 
--> 

> 如何拥有图形化界面?

![image-20210104223703406](https://gitee.com/nmdfzf404/Image-hosting/raw/master/2020/20210104223710.png)

## 窗口

> 调用10h-06h中断

```asm
; 特定位置显示窗口
%macro crtWin  6        ; 建立窗口,行数-前景:背景色-左上角YX-右上角YX
    mov ah, 06h
    mov al, %1
    mov bh, %2
    mov ch, %3
    mov cl, %4
    mov dh, %5
    mov dl, %6
    int 10h
%endmacr

; 特定位置显示字符
%macro printStr  4      ; 打印字符, Num-Attr-Row-Column
    mov cx, %1       ; 字符数量
    mov ah, 13h
    mov al, 01h      ; 显示属性->BL, 光标位置改变
    mov bh, 0        ; 页
    mov bl, %2       ; 属性
    mov dh, %3       ; 行
    mov dl, %4       ; 列
    int 10h
%endmacr
```

## 绘图

> 调用10h-0ch

![image-20210108200400585](https://gitee.com/nmdfzf404/Image-hosting/raw/master/2020/20210108200408.png)

```asm
jmp start

start:
  call   windows    ; 绘图
  ; 带返回值中断
  mov ah,4ch
  int 21h

windows:
  call setmode
  call alllines    ; 打印背景
  call win1
  call win2
  call win3
  call win4
  ret


setmode:
  mov  bx,0x4105    ; 设置图形模式：1024×768 256色
  mov  ax,0x4f02
  int  10h
  ret

alllines: 
  mov  dx,0        ; 列计数
goon2:   
  mov  cx,0       ; 行计数
  call oneline
  inc  dx
  cmp  dx,767
  jne  goon2
  ret

oneline:           ; 第dx行画水平线
  ;mov cx,0        ; x坐标
  ;mov dx,0        ; y坐标
  mov al,00010001b     ; 写入像素 xxxxARGB
  mov ah,0ch       ; 
goon:   
  inc cx
  cmp cx,1023
  int 10h
  jne goon
  ret

win1:    
  mov dx,200      ; 200行开始
linew1:  
  mov cx,300      ; 300列
goonw1: 
  mov al,0100b     ;颜色
  mov ah,0ch       ;写入点像
  inc cx
  int 10h
  cmp cx,500      ; 至500
  jne goonw1
  inc dx
  cmp dx,400      ; 至400
  jne linew1
  ret

win2:    
  mov dx,200      
linew2:  
  mov cx,520
goonw2: 
  mov al,0010b     
  mov ah,0ch       
  inc cx
  int 10h
  cmp cx,720
  jne goonw2
  inc dx
  cmp dx,400
  jne linew2
  ret

win3:    
  mov dx,420      
linew3:  
  mov cx,300
goonw3: 
  mov al,0001b     
  mov ah,0ch       
  inc cx
  cmp cx,500
  int 10h
  jne goonw3
  inc dx
  cmp dx,620
  jne linew3
  ret

win4:    
  mov dx,420      
linew4:  
  mov cx,520
goonw4: 
  mov al,0110b     
  mov ah,0ch       
  inc cx
  cmp cx,720
  int 10h
  jne goonw4
  inc dx
  cmp dx,620
  jne linew4
  ret
```

## 调用显存

> 调用显卡创建调色板端口
>
> 写入`0xa000`

![image-20210108214311169](https://gitee.com/nmdfzf404/Image-hosting/raw/master/2020/20210108214311.png)

```asm
colorfuncport equ 3c8h   ; 设置调色板功能端口
colorsetport equ 3c9h    ;设置调色板颜色端口
displayadd equ 0xa000    ;图像模式显存起始地址


call  setmode     ; 显示模式 320*200
call  backgroud   ; 背景色设置
call  colorset
call  win1
call  win2
call  win3
call  win4
; call drawimg
mov   ax,0ch
int   21h
jmp   $

setmode:
  mov ah,0
  mov al,13h         
  int 10h
  ret

setmode2:         ; 1024*768
  mov AX,4F02H
  mov bx,4105H       
  int 10h
  ret

backgroud:         
  mov dx, colorfuncport
  mov al, 0               ; 建调色板索引0号

  ; 外设的操作通过专门的端口读写指令来完成
  out dx,al               ; Out: al的值写入显卡调色板功能端口

  mov dx, colorsetport    ;设置黑灰色背景
  mov al,8                ; R分量
  out dx,al
  mov al,8                ; G分量
  out dx,al
  mov al,8               ; B分量
  out dx,al
  ret

colorset:                 ; 显示色设置
  mov dx, colorfuncport
  mov al, 1               ; 建调色板索引1号
  out dx, al
  mov dx, colorsetport    ;设置红色调色板
  mov al,32               
  out dx,al
  mov al,0               
  out dx,al
  mov al,0               
  out dx,al

  mov dx, colorfuncport
  mov al, 2                 ; 建调色板索引2号
  out dx,al
  mov dx,  colorsetport     ;设置蓝色调色板
  mov al,0          
  out dx,al
  mov al,0           
  out dx,al
  mov al,32         
  out dx,al

  mov dx,  colorfuncport
  mov al, 3                 ;建调色板索引3号
  out dx,al
  mov dx,  colorsetport     ;设置绿色
  mov al,0           
  out dx,al
  mov al,32           
  out dx,al
  mov al,0          
  out dx,al

  mov dx, colorfuncport
  mov al, 4                 ;建调色板索引4号
  out dx,al

  mov dx,  colorsetport     ;设置黄色
  mov al,32              
  out dx,al
  mov al,32           
  out dx,al
  mov al,0          
  out dx,al

  ret


drawimg:           ; 满屏画同一颜色
  mov bl,4
  mov ax,displayadd
  mov es,ax
  mov cx,0xffff    ; 设置距离
  mov di,0
  
nextpoint:
  mov  [es:di],bl   ; 调色板颜色索引送往显存地址
  inc  di
  loop nextpoint
  ret

win1:
  mov bl,1              ; 填充颜色
  mov dx,50             ; 起始行
  mov ax,320*50/10h     ; 起始行前像素点数量
  add ax,displayadd
  mov es,ax
win1line:
  mov cx,50           ; 矩形长度 es:di计数
  mov di,100          ; 起始列
win1point:
  mov  [es:di],bl     ; 调色板颜色索引送往显存地址
  inc di
  loop win1point
  inc dx
  mov ax,es
  add ax,0x14         ; 显卡内存每一行增加一次es段地址   320*x+y 320=140h
  mov es,ax
  cmp dx,100          ; 矩形高度
  jne win1line
  ret

win2:
  mov bl,2
  mov dx,110         ; 起始行
  mov ax,320*110/10h
  add ax,displayadd
  mov es,ax
  win2line:
  mov cx,50         
  mov di,100          ; 起始列     
  win2point:
  mov  [es:di],bl   
  inc di
  loop win2point
  inc dx
  mov ax,es
  add ax,0x14      
  mov es,ax
  cmp dx,160       
  jne win2line
  ret

win3:
  mov bl,3
  mov dx,50         ; 起始行
  mov ax,320*50/10h
  add ax,displayadd
  mov es,ax
  win3line:
  mov cx,50          
  mov di,160         ; 起始列
  win3point:
  mov  [es:di],bl    
  inc di
  loop win3point
  inc dx
  mov ax,es
  add ax,0x14      
  mov es,ax
  cmp dx,100       
  jne win3line
  ret

win4:
  mov bl,4
  mov dx,110         ; 起始行
  mov ax,320*110/10h
  add ax,displayadd
  mov es,ax
  win4line:
  mov cx,50         
  mov di,160         ; 起始列
  win4point:
  mov  [es:di],bl  
  inc di
  loop win4point
  inc dx
  mov ax,es
  add ax,0x14     
  mov es,ax
  cmp dx,160      
  jne win4line
  ret
```

