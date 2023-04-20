(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{788:function(n,i){n.exports='\x3c!--\ntitle: 02-寄存器点灯\nsort:\n--\x3e\n\n> 51 单片机 8 位的\n>\n> Stm32 为 32 位\n>\n> 这四倍的提升在操作层面有什么不同呢？\n\n# 点亮第一个 LED\n\n## 寄存器版\n\n> 参考手册下载地址：[STM32F10x 参考手册](https://www.stmcu.org.cn/document/detail/index/id-200272)\n\n```c\n// 点亮PC13的LED\nint main()\n{\n\t*(unsigned int*)0x40021018 |=(1<<4);\t// 打开时钟\n\t*(unsigned int*)0x40011004 &=~(0x0F<<(4*5));\t// 初始化\n\t*(unsigned int*)0x40011004 |=(1<<20);\t// 配置输出模式\n\t*(unsigned int*)0x4001100C &=~(1<<13);\t// 配置输出低电平\n\n\twhile(1);\n}\n\nvoid SystemInit(void)\n{\n\n}\n```\n\n### 详解\n\n> `0x4001 1000`是 GPIO_C 的基地址，偏移地址为`0x04`\n\n![image-20201105164046145](https://img-1257284600.cos.ap-beijing.myqcloud.com/2020/20201105164046.png)\n\n> 低寄存器：`GPIOC_CRL`\n\n![image-20201105221909067](https://img-1257284600.cos.ap-beijing.myqcloud.com/2020/20201105221909.png)\n\n> 每 4 位控制一个引脚，\n>\n> 一共能控制 8 个引脚。\n>\n> 但 PC 共有 16 个引脚，\n>\n> 所以还有高寄存器\n\n![image-20201105220813208](https://img-1257284600.cos.ap-beijing.myqcloud.com/2020/20201105220813.png)\n\n> 点亮 LED 使用 10MHz 输出模式+推挽输出\n\n![image-20201105165149321](https://img-1257284600.cos.ap-beijing.myqcloud.com/2020/20201105165149.png)\n\n> 想要操作的寄存器是 GPIO_C13\n>\n> 在高寄存器第 20-23 位(4\\*13-36)\n>\n> 第一步先清零：`*(unsigned int*)0x40011004 &=~(0x0F<<(20));`\n>\n> 向右移动 20 位并取反进行与操作，操作后 20-23 位变成 0\n\n![image-20201105220850636](https://img-1257284600.cos.ap-beijing.myqcloud.com/2020/20201105220850.png)\n\n> 高电平：`*(unsigned int*)0x4001100C |=(1<<13);`\n>\n> 低电平(点亮)：`*(unsigned int*)0x4001100 C &=~(1<<13);`\n\n### 时钟\n\n> stm32 每使用一个引脚都需要启用时钟\n\n![P28](https://img-1257284600.cos.ap-beijing.myqcloud.com/2020/20201105211118.png)\n\n![image-20201105211326724](https://img-1257284600.cos.ap-beijing.myqcloud.com/2020/20201105211326.png)\n\n> 确定地址为`0x4002 1018`\n\n**操作地址**\n\n![image-20201105211810137](https://img-1257284600.cos.ap-beijing.myqcloud.com/2020/20201105211810.png)\n\n> `*(unsigned int*)0x40021018 |=(1<<4)`\n>\n> 1 向左移 4 位`0x0001 0000`并与地址进行或运算\n>\n> 该地址的第 4 位就变成 1\n\n### 头文件版\n\n> stm32f10x.h\n>\n> ![image-20201106102356645](https://img-1257284600.cos.ap-beijing.myqcloud.com/2020/20201106102403.png)\n\n```c\n// 寄存器起始地址\n#define PERIPH_BASE ((unsigned int)0x40000000)\n// 三条总线的起始地址\n#define APB2PERIPH_BASE (PERIPH_BASE + 0x10000)\n#define AHBPERIPH_BASE (PERIPH_BASE + 0x20000)\n#define GPIOC_BASE (APB2PERIPH_BASE + 0x1000)\n// 高寄存器、输入数据寄存器、输出数据寄存器\n#define GPIOC_CRH *(unsigned int *)(GPIOC_BASE + 0x04)\n#define GPIOC_IDR *(unsigned int *)(GPIOC_BASE + 0x08)\n#define GPIOC_ODR *(unsigned int *)(GPIOC_BASE + 0x0C)\n// 时钟使能\n#define RCC_BASE (AHBPERIPH_BASE + 0x1000)\n#define RCC_APB2ENR *(unsigned int *)(RCC_BASE + 0x18)\n```\n\n> main.c\n\n```c\n#include "stm32f10x.h"\nint main()\n{\n\tRCC_APB2ENR |=(1<<4);\t// 打开时钟\n\tGPIOC_CRH &=~(0x0F<<(4*5));\t// 初始化\n\tGPIOC_CRH |=(1<<20);\t// 配置输出模式\n\tGPIOC_ODR &=~(1<<13);\t// 配置输出低电平\n\n\twhile(1);\n}\n\nvoid SystemInit(void)\n{\n\n}\n```\n\n### 使用结构体\n\n> stm32f10x.h\n\n```c\n#include <stdint.h>\n\n#define PERIPH_BASE ((unsigned int)0x40000000)\n\n#define APB2PERIPH_BASE (PERIPH_BASE + 0x10000)\n#define AHBPERIPH_BASE (PERIPH_BASE + 0x20000)\n\n#define GPIOC_BASE (APB2PERIPH_BASE + 0x1000)\n#define RCC_BASE (AHBPERIPH_BASE + 0x1000)\n\ntypedef struct\n{\n    uint32_t CRL;\n    uint32_t CRH;\n    uint32_t IDR;\n    uint32_t ODR;\n    uint32_t BSRR;\n    uint32_t BRR;\n    uint32_t LCKR;\n} GPIO_TypeDef;\n\ntypedef struct\n{\n    uint32_t CR;\n    uint32_t CFGR;\n    uint32_t CIR;\n    uint32_t APB2RSTR;\n    uint32_t APB1RSTR;\n    uint32_t AHBENR;\n    uint32_t APB2ENR;\n    uint32_t APB1ENR;\n    uint32_t BDCR;\n    uint32_t CSR;\n} RCC_TypeDef;\n\n// 将基地址映射至数组\n#define GPIOC ((GPIO_TypeDef*)GPIOC_BASE)\n#define RCC ((RCC_TypeDef*)RCC_BASE)\n```\n\n> main.c\n\n```c\n#include "stm32f10x.h"\nint main()\n{\n\tRCC->APB2ENR |=(1<<4);\t// 打开时钟\n\tGPIOC->CRH &=~(0x0F<<(4*5));\t// 初始化\n\tGPIOC->CRH |=(1<<20);\t// 配置输出模式\n\tGPIOC->ODR &=~(1<<13);\t// 配置输出低电平\n\n\twhile(1);\n}\n\nvoid SystemInit(void)\n{\n\n}\n```\n\n### 模块化\n\n> BSRR 用于操作 ODR(端口输出数据寄存器)\n>\n> 高 16 位用于置 0\n>\n> 低 16 位用于置 1\n\n![image-20201106224649258](https://img-1257284600.cos.ap-beijing.myqcloud.com/2020/20201106224649.png)\n\n> 用 BRR 清除端口\n\n![image-20201106225742037](https://img-1257284600.cos.ap-beijing.myqcloud.com/2020/20201106225742.png)\n\n> 分别为：`main.c` `stm32f10x.h` `stm32f10x_gpio.c` `smt32f10x_gpio.h`\n\n```c\n#include "stm32f10x_gpio.h"\n\nint main()\n{\n\tRCC->APB2ENR |=(1<<4);\t// 打开时钟\n\tGPIOC->CRH &=~(0x0F<<(4*5));\t// 初始化\n\tGPIOC->CRH |=(1<<20);\t// 配置输出模式\n\t// G PIOC->ODR &=~(1<<13);\t// 配置输出低电平\n\tGPIO_ResetBits(GPIOC,GPIO_Pin_13);\t// 配置输出低电平\n\n\twhile(1);\n}\n\nvoid SystemInit(void)\n{\n\n}\n\n```\n\n```c\n#ifndef __STM32F10X_H\n#define __STM32F10X_H\n\n#include <stdint.h>\n\n#define PERIPH_BASE ((unsigned int)0x40000000)\n\n#define APB2PERIPH_BASE (PERIPH_BASE + 0x10000)\n#define AHBPERIPH_BASE (PERIPH_BASE + 0x20000)\n\n#define GPIOC_BASE (APB2PERIPH_BASE + 0x1000)\n#define RCC_BASE (AHBPERIPH_BASE + 0x1000)\n\ntypedef struct\n{\n    uint32_t CRL;\n    uint32_t CRH;\n    uint32_t IDR;\n    uint32_t ODR;\n    uint32_t BSRR;\n    uint32_t BRR;\n    uint32_t LCKR;\n} GPIO_TypeDef;\n\ntypedef struct\n{\n    uint32_t CR;\n    uint32_t CFGR;\n    uint32_t CIR;\n    uint32_t APB2RSTR;\n    uint32_t APB1RSTR;\n    uint32_t AHBENR;\n    uint32_t APB2ENR;\n    uint32_t APB1ENR;\n    uint32_t BDCR;\n    uint32_t CSR;\n} RCC_TypeDef;\n\n// 将基地址映射至数组\n#define GPIOC ((GPIO_TypeDef*)GPIOC_BASE)\n#define RCC ((RCC_TypeDef*)RCC_BASE)\n\n#endif\n\n```\n\n```c\n#include "stm32f10x_gpio.h"\n\nvoid GPIO_SetBits (GPIO_TypeDef*GPIOx, uint16_t GPIO_Pin)\n{\n    GPIOx->BSRR|=GPIO_Pin;\n}\nvoid GPIO_ResetBits (GPIO_TypeDef*GPIOx, uint16_t GPIO_Pin)\n{\n    GPIOx->BRR|=GPIO_Pin;\n}\n\n```\n\n```c\n#ifndef __STM32F10X_GPIO_H\n\n#define __STM32F10X_GPIO_H\n#include "stm32f10x.h"\n\n#define GPIO_Pin_0 ((uint16_t)0x0001)\n#define GPIO_Pin_1 ((uint16_t)0x0002)\n#define GPIO_Pin_2 ((uint16_t)0x0004)\n#define GPIO_Pin_3 ((uint16_t)0x0008)\n#define GPIO_Pin_4 ((uint16_t)0x0010)\n#define GPIO_Pin_5 ((uint16_t)0x0020)\n#define GPIO_Pin_6 ((uint16_t)0x0040)\n#define GPIO_Pin_7 ((uint16_t)0x0080)\n#define GPIO_Pin_8 ((uint16_t)0x0100)\n#define GPIO_Pin_9 ((uint16_t)0x0200)\n#define GPIO_Pin_10 ((uint16_t)0x0400)\n#define GPIO_Pin_11 ((uint16_t)0x0800)\n#define GPIO_Pin_12 ((uint16_t)0x1000)\n#define GPIO_Pin_13 ((uint16_t)0x2000)\n#define GPIO_Pin_14 ((uint16_t)0x4000)\n#define GPIO_Pin_15 ((uint16_t)0x8000)\n#define GPIO_Pin_all ((uint16_t)0xFFFF)\n\nvoid GPIO_SetBits (GPIO_TypeDef*GPIOx, uint16_t GPIO_Pin);\nvoid GPIO_ResetBits (GPIO_TypeDef*GPIOx, uint16_t GPIO_Pin);\n\n#endif\n\n```\n\n> 还可使用枚举\n'}}]);