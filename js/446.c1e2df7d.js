(window.webpackJsonp=window.webpackJsonp||[]).push([[446],{1074:function(n,e){n.exports='\x3c!--\ntitle: 30-ES6标准\nsort:\n--\x3e\n\n## 变量\n\n```js\n// 不可重复定义 可修改\nlet a = 404;\n// 不可修改\nconst a = 4;\n\nlet s1 = Symbol("same");\nlet s2 = Symbol("same");\ns1 === s2; // false\n\n// Symbol为变量赋值\nlet obj = {\n  [Symbol("name")]: "fzf",\n  age: 18,\n};\nObject.keys(obj);\nObject.getOwnPropertySymbols(obj);\nReflect.ownKeys(obj);\n```\n\n## 箭头函数\n\n> 一个参数可省`()`\n>\n> 一个`return`可省`{}`\n\n```js\nlet show = function (a) {\n  return a * 2;\n};\nlet show = (a) => a * 2;\n\n// 参数扩展\nlet array1 = [1, 2, 3];\nlet array2 = [5, 6, 7];\nlet array = [...array1, ...array2];\n// [1, 2, 3, 5, 6, 7]\n```\n\n## 解构赋值\n\n```js\nlet [a, b, c] = [1, 2, 3];\nlet { a, b, c } = { a: 1, b: 2, c: 3 };\n```\n\n## 数组\n\n> map: 映射 reduce: 汇总 filter: 过滤器 foreach: 迭代\n\n```js\nlet arr = [1, 2, 3];\n// map 映射\nlet result = arr.map((item) => (item % 2 == 0 ? 1 : 0)); // [0,1,0]\n// reduce 汇总\nlet result = arr.reduce((tmp, item) => tmp + item); // 6\n// 求平均数\nlet result = arr.reduce((tmp, item, index) =>\n  index != arr.length - 1 ? tmp + item : (tmp + item) / arr.length\n); //2\n// filter 过滤器\nlet result = arr.filter((item) => item % 2); // [1, 3]\n// foreach: 迭代\narr.forEach((item) => alert(item));\narr.forEach((item, index) => alert(index + ":" + item));\n```\n\n## 字符串\n\n> 新方法：`startsWith` `endsWith`\n\n```js\n`反单引号`;\nlet a = 404;\nlet str = `fzf${a}`;\n("fzf404");\n```\n\n## 面向对象\n\n> 添加`class`关键字\n\n## JSON\n\n```js\nlet json = { f: 4, z: 0 };\nlet str = \'{"f":4,"z":0}\';\nencodeURIComponent(JSON.stringify(json));\n// "%7B%22f%22%3A4%2C%22z%22%3A0%7D"\nJSON.parse(str);\n// {f: 4, z: 0}\n\nlet json = {\n  fzf: 404,\n  show() {\n    console.log(this.fzf);\n  },\n};\njson.show();\n```\n\n## Promise\n\n```js\nfunction createPromise(num) {\n  return new Promise((resolve, reject) => (num > 60 ? resolve() : reject()));\n}\ncreatePromise(61).then(\n  () => alert("及格了"),\n  () => alert("失败了")\n);\n//\nPromise.all([createPromise(59), createPromise(61)]).then(\n  () => alert("及格了"),\n  () => alert("失败了")\n);\n```\n\n## Generator\n\n```js\nfunction* show() {\n  alert("Running");\n  yield 404;\n  alert("Running2");\n}\nlet genObj = show();\nlet res1 = genObj.next();\n// 404 Running\nlet res1 = genObj.next();\n```\n\n## Proxy\n\n```js\nlet user = new Proxy({},{\n    get: (obj,prop)=>{\n        if(prop == \'fuck\'){\n        \treturn \'fuck \' + obj.fname)\n        }\n        return obj.fname + obj.lname\n    }\n})\nuser.fname = \'fzf\'\nuser.lname = 404\n\nuser.anything\n// fzf404\nuser.fuck\n// fuck fzf\n```\n'}}]);