<!-- 
title: 调用摄像头
sort: 
--> 

```js
let opt = {
  audio: false,
  video: {
    width: 720,
    height: 480
  }
};

// 获取摄像头对象
navigator.mediaDevices.getUserMedia(opt)
  .then(mediaStream => {
    let video = document.querySelector('video');
    video.srcObject = mediaStream;
    video.onloadedmetadata = e => {
      video.play();
    };
  })
  .catch(err => {
    console.log(err.name + ": " + err.message);
  });

// 拍照
let takePhoto = () => {
  //创建canvas标签
  let canvas = document.createElement('canvas');
  canvas.width = 720;
  canvas.height = 480;
  //获取之前获取到的视频video标签
  let video = document.querySelector('video');
  //利用video画图
  let context = canvas.getContext('2d');
  context.drawImage(video, 0, 0, 720, 480);
  //将canvas图像转换为base64字符串，设置格式以及压缩比例
  let datauri = canvas.toDataURL('image/jpeg', 90 / 100);
  //将base64字符串放入页面图片显示区域，显示拍照的图片
  let photo = document.querySelector('img');
  photo.src = datauri;
  console.log(datauri);
}
```

