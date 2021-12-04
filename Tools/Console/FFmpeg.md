<!--
title: FFmpeg
sort:
-->

# FFmpeg 入门

### 常用功能

```bash
# 合并m4s音频与视频
ffmpeg -i .\video.m4s -i .\audio.m4s -codec copy out.mp4
# 提取音频
ffmpeg -i .\video.mp4 -acodec copy -vn output.aac

# mkv转MP4
ffmpeg -i "test.mkv" -vcodec copy -acodec aac 'test.mp4'
```

## 安装

[FFmpeg 下载](https://ffmpeg.zeranoe.com/builds/)

`choco install ffmpeg`

## 参数

### 主要参数

```powershell
-i # 设定输出流
-f # 设定输出格式
-ss	# 设定开始时间
```

### 视频参数

```powershell
-b # 设定视频码率，默认200kbit/s
-r # 设定帧率，默认25
-s # 设置宽高
-aspect	# 画面比例
-vn	# 不处理视频
-vcodec # 设定视频解码器
```

### 音频参数

```powershell
-ar # 设定采样率
-ac # 设定声音的Channel数
-acodec # 设定声音编解码器，未设定时则使用与输入流相同的编解码器
-an # 不处理音频
```

## 使用

- 格式转换

  `ffmpeg -i input.mp4 output.avi`

- 提取音频

  `ffmpeg -i *.mp4 -acodec aac -vn output.aac`

- 提取视频

  `ffmpeg -i input.mp4 -vcodec copy -an output.mp4`

- 视频剪裁

  `ffmpeg -ss 00:00:15 -t 00:00:05 -i input.mp4 -vcodec copy -acodec copy output.mp4`

- 码率控制

  > fmpeg 控制码率有 3 种选择：`-minrate -b:v -maxrate`
  >
  > -b:v 平均码率
  >
  > `ffmpeg -i input.mp4 -b:v 2000k output.mp4`
  > -bufsize 用于设置码率控制缓冲器的大小
  >
  > `ffmpeg -i input.mp4 -b:v 2000k -bufsize 2000k output.mp4`
  >
  > -minrate -maxrate 设置码率阈值
  >
  > `ffmpeg -i input.mp4 -b:v 2000k -bufsize 2000k -maxrate 2500k output.mp4`

- 编码转换

  `ffmpeg -i input.mp4 -vcodec h264 output.mp4`

- 过滤器

  > 添加 logo：
  >
  > `ffmpeg -i input.mp4 -i iQIYI_logo.png -filter_complex overlay output.mp4`

- 抓取视频帧

  > `ffmpeg -i input.mp4 -r 1 -q:v 2 -f image2 pic-%03d.jpeg`
  >
  > -r 每秒抓取帧数
  >
  > `ffmpeg -i input.mp4 -ss 00:00:20 -t 10 -r 1 -q:v 2 -f image2 pic-%03d.jpeg`
  >
  > 设置时间段

### 总结
