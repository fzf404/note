<!--
title: 04-GPIO工作模式
sort:
-->

![image-20210706171642966](https://img-1257284600.cos.ap-beijing.myqcloud.com/2021/20210706171643.png)

## HAL 库

```c
// GPIO 初始化
void HAL_GPIO_Init(GPIO_TypeDef *GPIOx, GPIO_InitTypeDef *GPIO_Init);
// 恢复为默认状态
void HAL_GPIO_DeInit(GPIO_TypeDef *GPIOx, uint32_t GPIO_Pin);
// 电平状态，返回1/0
GPIO_PinState HAL_GPIO_ReadPin(GPIO_TypeDef *GPIOx, uint16_t GPIO_Pin);
// 写0或1
void HAL_GPIO_WritePin(GPIO_TypeDef *GPIOx, uint16_t GPIO_Pin, GPIO_PinState PinState);
// 电平翻转
void HAL_GPIO_TogglePin(GPIO_TypeDef *GPIOx, uint16_t GPIO_Pin);
// 锁定GPIO值
HAL_StatusTypeDef HAL_GPIO_LockPin(GPIO_TypeDef *GPIOx, uint16_t GPIO_Pin);
// 清除中断标志位
void HAL_GPIO_EXTI_IRQHandler(uint16_t GPIO_Pin);
// 中断处理函数
void HAL_GPIO_EXTI_Callback(uint16_t GPIO_Pin);

// 调用形式
HAL_GPIO_ReadPin(GPIOC, GPIO_PIN_13);
```
