<!-- 
title: JavaScript
sort: 
--> 

## 常用功能

```js
// 对象转字符串
JSON.stringify(obj)
// 字符串转对象
JSON.parse(str)
// 深拷贝
JSON.parse(JSON.stringify(obj))
```

## 文件列表

```js
const fs = require('fs');
const path = require('path');

const pathName = './';  // 需遍历的文件夹路径
const jsonPath = './files.json';  // 生成 json 的文件路径

function readFileList(dir, record = true) {
  let filesList = []
  const files = fs.readdirSync(dir);
  files.forEach((item, index) => {
    let fullPath = path.join(dir, item);
    let stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      filesList.push(readFileList(path.join(dir, item)));  // 递归读取文件
    } else if (record && item.endsWith('.md')) {
      filesList.push('/' + fullPath.replace(/\\/g, '/'));
    }
  });
  return record ? { [dir.substr(dir.lastIndexOf('\\') + 1, dir.length)]: filesList } : filesList;
}

filesList = readFileList(pathName, false)

fs.writeFile(jsonPath, JSON.stringify(filesList, '', '\t'), err => err);

console.log('成功')
```

