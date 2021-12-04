<!--
title: 24-PyEcharts
sort:
-->

![img](https://user-images.githubusercontent.com/19553554/57307650-8a4d0280-7117-11e9-921f-69b8e9c5e4aa.png)

```python
bar = Bar(init_opts=opts.InitOpts(theme=ThemeType.LIGHT)) # 主题
  .add_xaxis(['nmd','fzf','404']) # x轴
  .add_yaxis("测试",[123,234,345]) # y轴
  .reversal_axis() # 坐标轴反转
  # 选项
  .set_global_opts(
    title_opts=opts.TitleOpts(title="主标题", subtitle="副标题")
    yaxis_opts=opts.AxisOpts(name="y轴"),
    xaxis_opts=opts.AxisOpts(name="量"),
    datazoom_opts=opts.DataZoomOpts(type_="inside")
  )
```
