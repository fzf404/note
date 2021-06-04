<!-- 
title: Three.js
sort: 
--> 

> 使用

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
  <script src="https://cdn.bootcdn.net/ajax/libs/three.js/r128/three.js"></script>
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

### Fun

```js
// 贴图
const material = new THREE.MeshPhongMaterial({ 
  map: new THREE.TextureLoader().load("logo.jpg")
});
```

