<!-- 
title: 03-时钟
sort: 
--> 

![img](https://img-blog.csdnimg.cn/2019080810214187.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2FzNDgwMTMzOTM3,size_16,color_FFFFFF,t_70)

### 时钟源

> HSI：高速内部时钟，RC振荡器，频率为8MHz，精度不高。
>
> LSI：低速内部时钟，RC振荡器，频率为40kHz，提供低功耗时钟。
>
> - 作为IWDGCLK(独立看门狗)时钟源和RTC时钟源而独立使用
>
> HSE：高速外部时钟，可接石英/陶瓷谐振器，或者接外部时钟源，频率范围为4MHz~16MHz。
>
> LSE：是低速外部时钟，接频率为32.768kHz的石英晶体。

- PLL

  锁相环倍频输出，输入源可选择为HSI/2、HSE或HSE/2，倍频可选择为**2~16**倍，最大不得超过72MHz。

### AHB分频器

1. 内核总线：送给AHB总线、内核、内存和DMA使用的HCLK时钟。 

2. Tick定时器：通过/8分频后送给Cortex的系统定时器时钟。 
3. I2S总线：直接送给Cortex的空闲运行时钟FCLK。 
4. APB1外设：送给APB1分频器。APB1分频器可选择1、2、4、8、16分频，其输出一路供APB1外设使用(PCLK1，最大频率36MHz)，另一路送给通用定时器使用。该倍频器可选择1或者2倍频，时钟输出供定时器2-7使用。 
5. APB2外设：送给APB2分频器。APB2分频器可选择1、2、4、8、16分频，其输出一路供APB2外设使用(PCLK2，最大频率72MHz)，另一路送给高级定时器。该倍频器可选择1或者2倍频，时钟输出供定时器1和定时器8使用。

