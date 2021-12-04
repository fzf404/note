<!--
title: 03-时钟
sort:
-->

![img](https://img-blog.csdnimg.cn/2019080810214187.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2FzNDgwMTMzOTM3,size_16,color_FFFFFF,t_70)

### 时钟源

> HSI：高速内部时钟，RC 振荡器，频率为 8MHz，精度不高。
>
> LSI：低速内部时钟，RC 振荡器，频率为 40kHz，提供低功耗时钟。
>
> - 作为 IWDGCLK(独立看门狗)时钟源和 RTC 时钟源而独立使用
>
> HSE：高速外部时钟，可接石英/陶瓷谐振器，或者接外部时钟源，频率范围为 4MHz~16MHz。
>
> LSE：是低速外部时钟，接频率为 32.768kHz 的石英晶体。

- PLL

  锁相环倍频输出，输入源可选择为 HSI/2、HSE 或 HSE/2，倍频可选择为**2~16**倍，最大不得超过 72MHz。

### AHB 分频器

1. 内核总线：送给 AHB 总线、内核、内存和 DMA 使用的 HCLK 时钟。

2. Tick 定时器：通过/8 分频后送给 Cortex 的系统定时器时钟。
3. I2S 总线：直接送给 Cortex 的空闲运行时钟 FCLK。
4. APB1 外设：送给 APB1 分频器。APB1 分频器可选择 1、2、4、8、16 分频，其输出一路供 APB1 外设使用(PCLK1，最大频率 36MHz)，另一路送给通用定时器使用。该倍频器可选择 1 或者 2 倍频，时钟输出供定时器 2-7 使用。
5. APB2 外设：送给 APB2 分频器。APB2 分频器可选择 1、2、4、8、16 分频，其输出一路供 APB2 外设使用(PCLK2，最大频率 72MHz)，另一路送给高级定时器。该倍频器可选择 1 或者 2 倍频，时钟输出供定时器 1 和定时器 8 使用。
