(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{690:function(n,e){n.exports='\x3c!--\ntitle: 40-NodeJS入门\nsort:\n--\x3e\n\n## 全局对象\n\n> Node 没有 `document` 和 `window` 等全局对象。\n>\n> Node 的全局对象是 `process`。\n\n### process\n\n- `pid`：进程编号\n- `env`：系统环境变量\n- `argv`：命令行执行此脚本时的输入参数\n- `platform`：当前操作系统的平台\n\n### Buffer\n\n> 处理二进制数据\n\n```js\nconst buf = Buffer.from(\'fzf404\', \'ascii\');\n<Buffer 66 7a 66 34 30 34>\nbuf.toString(\'hex\')\nbuf.toString(\'base64\')\n```\n\n## 模块机制\n\n- 编写模块\n\n```js\nconst os = require("os");\n\nfunction printProgramInfo() {\n  console.log("当前用户", os.userInfo().username);\n  console.log("当前进程 ID", process.pid);\n  console.log("当前脚本路径", __filename);\n}\n\nfunction getCurrentTime() {\n  const time = new Date();\n  return time.toLocaleString();\n}\n\n// 导出单个函数\nmodule.exports = printProgramInfo;\n// 导出多个\nmodule.exports = { printProgramInfo, printProgramInfo };\n// 导出\nexports.sayHi = () => {\n  return "Hello nodejs~";\n};\n```\n\n- 导入模块\n\n```js\nconst { printProgramInfo, getCurrentTime } = require("./demo");\nprintProgramInfo();\ngetCurrentTime();\n```\n\n## 命令行\n\n> 使用 npm 安装依赖\n\n### commander\n\n> `yarn add commander`\n\n```js\nconst { Command } = require("commander");\nconst program = new Command();\n\n// 配置选项\nprogram\n  .option("-d, --debug", "output extra debugging")\n  // 选项 延迟输出 默认值\n  .option("-t, --time <number>", "delay time", 10)\n  .option("-m, --message <string>", "output message", "Hello Command");\n\nprogram.parse(process.argv);\n\n// 获取选项参数\nconst options = program.opts();\n// debug选项激活则打印所有参数\nif (options.debug) console.log(options);\n\n// 延时打印\nsetTimeout(() => {\n  console.log(options.message);\n}, options.time);\n```\n\n## 监听与事件\n\n### event\n\n> 事件触发与事件监听器功能\n\n```js\nconst { EventEmitter } = require("events");\n\nconst emitter = new EventEmitter();\n\n// 监听 connect 事件，注册回调函数\nemitter.on("connect", (username) => {\n  console.log(`${username} 已连接`);\n});\n\n// 触发 connect 事件\nemitter.emit("connect", "fzf404");\n```\n\n## 服务\n\n```js\nconst http = require("http");\n\nconst hostname = "localhost";\nconst port = 3000;\n\nconst server = http.createServer((req, res) => {\n  res.statusCode = 200;\n  res.setHeader("Content-Type", "text/html");\n  res.end("Hello World\\n");\n});\n\nserver.listen(port, () => {\n  console.log(`Server running at http://${hostname}:${port}/`);\n});\n```\n'}}]);