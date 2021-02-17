<!-- 
title: 02-Cocos2D组件
sort: 
--> 

## 生命周期

- onLoad

- onEnable

  > `enable`变为True时执行

- start

  ```
  this.node.active = false;
  this.node.destroy();  
  ```

  

-  update

   ```js
   // 前一帧的时间
   update (dt) {
   	cc.log(dt);
     this.node.y += 1;
   },
   ```

-  lateUpdate

- onDisable

  > `enable`变为False时执行

- onDestroy

## 节点组件

```js
// 获取子节点
let child = this.node.children;
let childByName = this.node.getChildByName(Name);
let node = cc.log(childByName);
```

