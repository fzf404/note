<!-- 
title: Arm汇编进阶
sort: 
--> 

## 条件状态和分支

```assembly
.global main

main:
  mov     r0, #2     /* 初始化变量 */
  cmp     r0, #3     /* 将R0中的值与3比较，负数位置1 */
  addlt   r0, r0, #1 /* 如果上一条比较结果是小于（查看CPSR），则将R0加1 */
  cmp     r0, #3     /* 将R0中的值再与3比较， 零位置1，同时负数位重置为0 */
  addlt   r0, r0, #1 /* 如果上一条比较结果是小于（查看CPSR），则将R0加1 */
  bx      lr					@ 跳转到lr寄存器地址处，也就是子程序返回
```

### IT指令

IT：If-Then（下一条指令是条件的）；

ITT：If-Then-Then（后两条指令是条件的）；

ITE：If-Then-Else（后两条指令是条件的）；

ITTE：If-Then-Then-Else（后三条指令是条件的）；

ITTEE：If-Then-Then-Else-Else（后四条指令是条件的）；

```assembly
.syntax unified    @ 非常重要!
.text
.global _start

_start:
    .code 32
    add r3, pc, #1   @ PC的值加1并存储到R3。
    @ R3中的值最低有效位为1
    bx r3            @ 切换到Thumb模式

    .code 16         @ Thumb模式
    cmp r0, #10      
    ite eq           @ 如果R0等于10...
    addeq r1, #2     @ ... 那么 R1 = R1 + 2
    addne r1, #3     @ ... 否则 R1 = R1 + 3
    bkpt
```

### 分支

```
.global main
​
main:
  mov     r1, #2     /* 设置初始变量a */
  mov     r2, #3     /* 设置初始变量b */
  cmp     r1, r2     /* 比较两个变量值看哪个更大 */
  blt     r1_lower   /* R2更大(N==1)，跳转到r1_lower */
  mov     r0, r1     /* 没有跳转，将R1的值存储到R0 */
  b       end        /* 结束 */
  
 r1_lower:
  mov			r0, r2     /* R1小于R2时跳转, R2的值存储到R0 */
  b				end        /* 结束 */
  
end:
  bx lr              /* THE END */
```

- 分支实现循环

```assembly
.global main
​
main:
        mov     r0, #0     /* 设置初始变量a */
loop:
        cmp     r0, #4     /* 比较a==4 */
        beq     end        /* 如果a==4，结束 */
        add     r0, r0, #1 /* 否则将R0中的值递增1 */
        b loop             /* 跳转到loop开始位置 */
end:
        bx lr              /* THE END */
```

### B、BX、BLX指令

> B：直接跳转至函数
>
> BL：将PC+4的值保存到LR寄存器，然后跳转。
>
> BX、BLX用来切换ARM模式到Thumb模式。

