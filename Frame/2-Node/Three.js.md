<!-- 
title: Three.js
sort: 
--> 

## 步骤

1. 创建摄像机
2. 新建场景
3. 增加光照
4. 创建物体
5. 创建材质
6. 动起来

### HelloWorld

> 创建一个立方体
>
> [预览](https://threejsfundamentals.org/threejs/threejs-fundamentals-with-light.html)

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <canvas id="demo"></canvas>
  <script src="https://cdn.jsdelivr.net/npm/three"></script></script>
  <script>
    function main() {
      const canvas = document.querySelector('#demo');
      const renderer = new THREE.WebGLRenderer({ canvas });
      // 摄像机参数
      const fov = 75;     // 视野范围75°
      const aspect = 2;   // 画布宽高比
      const near = 0.1;   // 可视最近距离
      const far = 5;      // 可视最远距离
      const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
      // 相机默认在坐标原点，先Z轴正方向移动2，即可看到原点图像
      camera.position.z = 2;
      // 新建场景
      const scene = new THREE.Scene();
      // 光照效果
      {
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 4);
        scene.add(light);
      }
      // 创建盒子
      const boxWidth = 1;
      const boxHeight = 1;
      const boxDepth = 1;
      const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

      // 创建材质
      const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 });  // greenish blue

      // 创建一个网格对象
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      // 动起来
      function render(time) {
        time *= 0.001;  // 毫秒转换为秒

        cube.rotation.x = time;
        cube.rotation.y = time;
        // 重新渲染新一帧
        renderer.render(scene, camera);
        requestAnimationFrame(render);
      }
      requestAnimationFrame(render);
    }

    main();
  </script>
</body>

</html>
```

### 材质

```js
// 贴图
const material = new THREE.MeshPhongMaterial({ 
  map: new THREE.TextureLoader().load("logo.jpg")
});

// 透明材质
const material = new THREE.MeshPhongMaterial({
  side: THREE.DoubleSide,     // 双边渲染
  transparent: true,          // 是否透明
  map: new THREE.TextureLoader().load("logo.png"),
  alphaTest: 0.1,             // alpha通道小于0.1的像素点不显示
});
```

### 物体创建

```js
// 批量创建物体
function makeInstance(geometry, color, x) {
  const material = new THREE.MeshPhongMaterial({color});
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  cube.position.x = x;
  return cube;
}
const cubes = [
  makeInstance(geometry, 0x44aa88,  0),
  makeInstance(geometry, 0x8844aa, -2),
  makeInstance(geometry, 0xaa8844,  2),
];
```

### 跟随鼠标旋转

```js
// 滚动参数
let targetRotationX = 0;
let targetRotationY = 0;
// 鼠标点击时的角度状态
let targetRotationXOnMouseDown = 0;
let targetRotationYOnMouseDown = 0;
let mouseX = 0, mouseY = 0;
// 距窗口中心线的位置
let mouseXOnMouseDown = 0;
let mouseYOnMouseDown = 0;
// 窗口半长宽
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

// 触摸事件处理
function onDocumentTouchStart(event) {
  if (event.touches.length === 1) {
    mouseXOnMouseDown = event.touches[0].pageX - windowHalfX;
    mouseYOnMouseDown = event.touches[0].pageY - windowHalfY;
    targetRotationXOnMouseDown = targetRotationX;
    targetRotationYOnMouseDown = targetRotationY;
  }
}
function onDocumentTouchMove(event) {
  if (event.touches.length == 1) {
    mouseX = event.touches[0].pageX - windowHalfX;
    mouseY = event.touches[0].pageY - windowHalfY;
    targetRotationX = targetRotationXOnMouseDown + (mouseX - mouseXOnMouseDown
    targetRotationY = targetRotationYOnMouseDown + (mouseY - mouseYOnMouseDown
  }
}

// 鼠标点击事件
function onDocumentMouseDown(event) {
  document.addEventListener('mousemove', onDocumentMouseMove, false);
  document.addEventListener('mouseup', onDocumentMouseUp, false);
  document.addEventListener('mouseout', onDocumentMouseOut, false);
  // 求鼠标相对窗口中线的位置
  mouseXOnMouseDown = event.clientX - windowHalfX;
  mouseYOnMouseDown = event.clientY - windowHalfY;
  // 保存当前角度值
  targetRotationXOnMouseDown = targetRotationX;
  targetRotationYOnMouseDown = targetRotationY;
}
// 鼠标移动事件
function onDocumentMouseMove(event) {
  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;
  targetRotationX = targetRotationXOnMouseDown + (mouseX - mouseXOnMouseDown) 
  targetRotationY = targetRotationYOnMouseDown + (mouseY - mouseYOnMouseDown) 
}
// 鼠标抬起事件
function onDocumentMouseUp(event) {
  document.removeEventListener('mousemove', onDocumentMouseMove, false);
  document.removeEventListener('mouseup', onDocumentMouseUp, false);
  document.removeEventListener('mouseout', onDocumentMouseOut, false);
}
// 鼠标移开事件
function onDocumentMouseOut(event) {
  document.removeEventListener('mousemove', onDocumentMouseMove, false);
  document.removeEventListener('mouseup', onDocumentMouseUp, false);
  document.removeEventListener('mouseout', onDocumentMouseOut, false);
}
// 鼠标滚轮事件
function onDocumentMouseWheel(event) {
  if (event.wheelDelta > 0) {   //当滑轮向上滚动时
    fov -= (minFov < fov ? 2 : 0);
  }
  else {   // 当滑轮向下滚动时
    fov += (fov < far ? 2 : 0);
  }
  // 改变fov值，更新场景渲染
  camera.fov = fov;
  camera.updateProjectionMatrix();
  renderer.render(scene, camera);
}

document.addEventListener('mousedown', onDocumentMouseDown, false);
document.addEventListener('mousewheel', onDocumentMouseWheel, false);
document.addEventListener('touchstart', onDocumentTouchStart, false);
document.addEventListener('touchmove', onDocumentTouchMove, false);

// 渲染场景和相机
function render(time) {
  cube.rotation.y += 0.006
  targetRotationX += 0.006
  // cube.rotation.x += 0.01
  // targetRotationY += 0.01
  cube.rotation.y += (targetRotationX - cube.rotation.y) * 0.01; // 旋转
  cube.rotation.x += (targetRotationY - cube.rotation.x) * 0.01;
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
requestAnimationFrame(render);
```

