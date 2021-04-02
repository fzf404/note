<!-- 
title: Video.js
sort: 
--> 

```html
<!DOCTYPE html>
<html lang="zh-CN">

<head>
  <meta charset="UTF-8">
  <title>CCTV-1</title>
  <link href="https://cdn.bootcdn.net/ajax/libs/video.js/7.11.4/alt/video-js-cdn.min.css" rel="stylesheet">
  <script src="https://cdn.bootcdn.net/ajax/libs/video.js/7.11.4/alt/video.core.min.js"></script>
  <script src="https://cdn.bootcdn.net/ajax/libs/videojs-contrib-hls/5.15.0/videojs-contrib-hls.min.js"></script>
</head>

<body>
  <style>
    body {
      background: #1E242C;
    }

    h1 {
      color: #aab;
    }

    #cctv1 {
      display: flex;
      flex-flow: column wrap;
      align-items: center;
    }
  </style>
  <div id="cctv1">
    <h1>fzf's CCTV-1</h1>
    <video id="myvideo" class="video-js" controls width="720" height="480"
      poster="https://www.baidu.com/img/flexible/logo/pc/result.png">
      <source src="http://ivi.bupt.edu.cn/hls/cctv1.m3u8">
    </video>
    <script>
      var player = videojs('myvideo', {}, function () { console.log('video.js Init Success') })
      player.play();
    </script>
  </div>
</body>
```

