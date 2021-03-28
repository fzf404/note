<!-- 
title: Chart.js
sort: 
--> 

> [文档](https://chartjs.bootcss.com/docs/)

## HelloWorld

> [jsdelivr](https://www.jsdelivr.com/package/npm/chart.js?path=dist)

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js"></script>
  <title>Document</title>
</head>

<body>
  <canvas id="myChart" width="400" height="400"></canvas>
  <script>
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
          label: "My Money",
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(200, 100, 100)',
          data: [0, 10, 5, 3, 20, 30, 45],
        }]
      },
      options: {}
    });
  </script>
</body>

</html>
```

## 参数

### 布局

```html
// 长宽修改
<div class="chart-container">
	<canvas id="myChart" width="400" height="400"></canvas>
</div>

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {})

myChart.canvas.parentNode.style.width = '400px';
ctx.parentNode.style.width = '400px';

// 布局
options: {
  layout: {
    padding: {
      left: 30,
      right: 0,
      top: 30,
      bottom: 0
    }
  },
}
```

#### 标题

```js
// options里
title:{
  display:'true',
  fontSize: 22,
  text:'fzf404\'s money'
},
```

### 事件

```js
options: {
  onClick: ()=>{
    console.log('Click Me!')
  }
}
```

## Charts

### 折线图

```js
var myLineChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    datasets: [{
      label: "Random",
      data: [-3, -4, 8, 9, 1, -2, -8, -4, -4, 6, -10, 8],
    }]
  },
  options: {
    scales: {
      yAxes: [
        {
          stacked: true
        }
      ]
    }
  }
});
```

### 柱状图

```js
var myBarChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    datasets: [{
      label: "Random",
      data: [-3, -4, 8, 9, 1, -2, -8, -4, -4, 6, -10, 8],
      backgroundColor: ['green', 'yellow', 'red', 'red', 'red', 'yellow', 'blue', 'yellow',
        'green', 'red', 'red', 'red']
    }]
  },
  options: {
```

> 其他: 用到的时候再看
> [文档](https://chartjs.bootcss.com/docs/charts/doughnut.html)

### 混合图表

> bar与line的结合

```js
var myLineChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    datasets: [{
      label: "Random",
      data: [-3, -4, 8, 9, 1, -2, -8, -4, -4, 6, -10, 8],
      backgroundColor: "rgb(255,100,130)"
    }, {
      label: "Random",
      data: [1, 8, -6, -10, -6, 7, -2, 7, -3, -10, -6, 7],
      backgroundColor: ['green', 'yellow', 'red', 'red', 'red', 'yellow', 'blue', 'yellow',
        'green', 'red', 'red', 'red'],
      type: "bar"
    }]
  },
  options: {}
});
```

