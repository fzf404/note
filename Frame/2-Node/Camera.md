<!-- 
title: 调用摄像头
sort: 
--> 

## 例子

```js
// 展示用标签
let showLabel = document.querySelector('.show');
let recordLabel = document.querySelector('a');
let choiceLabel = document.querySelector('.choice');
// 拍照绘图
let canvas = document.createElement('canvas');
let context = canvas.getContext('2d');
let recorder;
// 默认配置
let showOpt = {
  audio: false,
  video: true,
};

// 获取媒体设备列表
let getMedia = () => {
  navigator.mediaDevices.enumerateDevices()
    .then(devices => {
      devices.forEach((device) => {
        // 判断设备是否为视频类型
        if (device.kind === "videoinput") {
          // 增加select标签
          choiceLabel.insertAdjacentHTML('beforeend', `<option value="${device.deviceId}">${device.label}</option>`);
        }
      });
    }).catch(err => {
      console.log(`${err.name}:${err.message}`);
    })
}

// 展示
let showVideo = () => {
  navigator.mediaDevices.getUserMedia(showOpt)
    .then(mediaStream => {
      showLabel.srcObject = mediaStream;
      showLabel.onloadedmetadata = e => {
        showLabel.play();
      };
    })
    .catch(err => {
      console.log(`${err.name}:${err.message}`);
    });
}

// 切换摄像头
let chVideo = () => {
  // 获取列表元素的id值
  let deviceId = choiceLabel.value;
  showOpt = {
    audio: false,
    video: {
      optional: [{
        sourceId: deviceId
      }]
    },
  }
  showVideo();
}

// 拍照
let takePhoto = () => {
  //创建canvas标签
  canvas.width = showLabel.videoWidth;
  canvas.height = showLabel.videoHeight;
  //利用video画图
  context.drawImage(showLabel, 0, 0);
  //将canvas图像转换为base64字符串，设置格式以及压缩比例
  let image = canvas.toDataURL('image/jpeg', 90 / 100);

  // 下载标签更新并点击
  recordLabel.href = image;
  recordLabel.click();
}

// 录像
let recordVideo = () => {
  // 转换Opt为局部变量
  let recordOpt = showOpt;
  // 开启音频录制
  recordOpt.audio = true;
  console.log('start');
  // 获取音视频流
  navigator.mediaDevices.getUserMedia(recordOpt)
    .then(mediaStream => {
      // 初始化记录对象
      recorder = new MediaRecorder(mediaStream);
      recorder.ondataavailable = e => {
        let recordData = e.data;
        recordLabel.href = URL.createObjectURL(recordData);
      };
      recorder.start();
      // 按钮变色
      document.getElementsByClassName("start")[0].classList.add('disable');
      document.getElementsByClassName("stop")[0].classList.remove('disable');

    })
    .catch(err => {
      console.log(`${err.name}:${err.message}`);
    });
}

// 停止录制
let stopVideo = () => {
  recorder.stop();
  console.log('stop!');
  // 修改按钮颜色
  document.getElementsByClassName("stop")[0].classList.add('disable');
  document.getElementsByClassName("start")[0].classList.remove('disable');
  // 延时加载
  setTimeout(
    () => recordLabel.click(),
    1000
  )
}

// 退出
let exit = () => {
  window.utools.outPlugin();
}

// 执行
getMedia();
showVideo();
```

