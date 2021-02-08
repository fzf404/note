<!-- 
title: 40-NodeJS入门
sort: 
--> 

## 全局对象

> Node 没有 `document` 和 `window` 等全局对象。
>
> Node 的全局对象是 `process`。

### process

- `pid`：进程编号
- `env`：系统环境变量
- `argv`：命令行执行此脚本时的输入参数
- `platform`：当前操作系统的平台

### Buffer

> 处理二进制数据

```js
const buf = Buffer.from('fzf404', 'ascii');
<Buffer 66 7a 66 34 30 34>
buf.toString('hex')
buf.toString('base64')
```

## 模块机制

- 编写模块

```js
const os = require('os');

function printProgramInfo() {
	console.log('当前用户', os.userInfo().username);
	console.log('当前进程 ID', process.pid);
	console.log('当前脚本路径', __filename);
}

function getCurrentTime() {
	const time = new Date();
	return time.toLocaleString();
}

// 导出函数
module.exports.printProgramInfo = printProgramInfo;
module.exports.getCurrentTime = getCurrentTime;      
```

- 导入模块

```js
const { printProgramInfo, getCurrentTime } = require('./demo')
printProgramInfo()
getCurrentTime()
```

## 命令行

> 使用npm安装依赖

### commander

> `yarn add commander`

```js
const { Command } = require('commander');
const program = new Command();

// 配置选项
program
  .option('-d, --debug', 'output extra debugging')
  // 选项 延迟输出 默认值
  .option('-t, --time <number>', 'delay time', 10)
  .option('-m, --message <string>', 'output message', 'Hello Command');

program.parse(process.argv);

// 获取选项参数
const options = program.opts();
// debug选项激活则打印所有参数
if (options.debug) console.log(options);

// 延时打印
setTimeout(() => {
  console.log(options.message);
}, options.time);
```

## 监听与事件

### event

> 事件触发与事件监听器功能

```js
const {EventEmitter} = require('events');

const emitter = new EventEmitter();

// 监听 connect 事件，注册回调函数
emitter.on('connect', username => {
  console.log(`${username} 已连接`);
});

// 触发 connect 事件
emitter.emit('connect', 'fzf404');
```

## 服务

```js
let http = require('http');
let querystring = require('querystring');

// 数据
let my_result = [{
  date: '2016-05-02',
  name: '王小虎',
  address: '上海市普陀区金沙江路 1518 弄'
}, {
  date: '2016-05-04',
  name: '王小虎',
  address: '上海市普陀区金沙江路 1517 弄'
}, {
  date: '2016-05-01',
  name: '王小虎',
  address: '上海市普陀区金沙江路 1519 弄'
}, {
  date: '2016-05-03',
  name: '王小虎',
  address: '上海市普陀区金沙江路 1516 弄'
}]

// 创建服务
let server = http.createServer((req, res) => {
  // 获取form-data的内容
  let post = '';
  req.on('data', function (chunk) {
    post += chunk;
  });

  req.on('end', function () {
    // 响应头
    res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8'
    })
    // 字节流转换成字符串
    post = querystring.parse(post);
    console.log('post-data:', post);
    // 返回数据
    if (post) {
      let result = {
        code: 200,
        msg: "获取成功"
        data: my_result
      }
      res.end(JSON.stringify(result));
    } else {
      let result = {
        code: '0',
        msg: '没有接受到数据'
      }
      res.end(JSON.stringify(result));
    }
  });
});
// 开启服务
server.listen(8886)
```

