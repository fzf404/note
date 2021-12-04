<!--
title: 20-Taro
sort:
-->

> 使用 React 开发微信小程序

## 安装

```bash
yarn global add @tarojs/cli
# 创建新项目
taro init taroTest
# 预览
npm dev:weapp
yarn dev:weapp
yarn build:weapp
```

## 使用

1. 建立 Page

   ```jsx
   import { Component } from "react";
   import { View } from "@tarojs/components";

   import { AtButton } from "taro-ui";

   import "./index.scss";

   export default class Index extends Component {
     state = {};

     onChange = () => {
       this.setState({});
     };

     render() {
       return (
         <View className="container">
           <AtButton className="select-button" type="primary">
             Hello
           </AtButton>
         </View>
       );
     }
   }
   ```

2. 编写组件

   ```jsx
   import { Component } from "react";
   import Taro from "@tarojs/taro";

   import { AtTabBar } from "taro-ui";

   export default class Index extends Component {
     constructor() {
       super(...arguments);
       this.state = {
         current: parseInt(this.props.current),
       };
     }

     handleClick(value) {
       if (value == this.state.current) {
         return;
       }
       this.setState({
         current: value,
       });

       switch (value) {
         case 0:
           Taro.navigateTo({
             url: "/pages/index/index",
           });
           break;
         case 1:
           Taro.navigateTo({
             url: "/pages/home/index",
           });
           break;
         default:
           break;
       }
     }

     render() {
       return (
         <AtTabBar
           fixed
           tabList={[
             { title: "首页", iconType: "home" },
             { title: "个人信息", iconType: "user" },
           ]}
           onClick={this.handleClick.bind(this)}
           current={this.state.current}
         />
       );
     }
   }
   ```

3. 路由

   ```jsx
   // 跳转到目的页面，打开新页面
   Taro.navigateTo({
     url: "/pages/page/path/name",
   });

   // 跳转到目的页面，在当前页面打开
   Taro.redirectTo({
     url: "/pages/page/path/name",
   });

   // 传入参数 id=2&type=test
   Taro.navigateTo({
     url: "/pages/page/path/name?id=2&type=test",
   });

   // 获得参数
   import { getCurrentInstance } from "@tarojs/taro";
   getCurrentInstance().router.params;
   ```

### 配置

```js
// 配置导航栏
// app.config.js

tabBar: {
  color: "#454545",
  selectedColor: "#E0620D",
  list: [
    {
      pagePath: "pages/index/index",
      text: "首页 ",
      // 未点击时显示的图片
      iconPath: "assets/index.png",
      // 点击后显示的图片
      selectedIconPath: "assets/index-select.png"
    },
    {
      pagePath: "pages/home/index",
      text: "个人中心",
      iconPath: "assets/my.png",
      selectedIconPath: "assets/my-select.png"
    }
  ]
}

// 头配置
// index.config.js
export default {
  navigationStyle: 'default',
  backgroundTextStyle: 'light',
  navigationBarBackgroundColor: '#fff',
  navigationBarTitleText: '选择日期',
  navigationBarTextStyle: 'black'
}

// 无头配置
export default {
  navigationStyle: 'custom'
}
```

### 修改默认样式

> [主题色生成器](https://nervjs.github.io/taro-ui-theme-preview/)

```scss
$at-button-bg: #ff971b;
$at-button-border-color-secondary: #ff971b;
$at-button-color: #cc7815;
$color-brand: #ff971b;

@import "~taro-ui/dist/style/index.scss";

.at-button {
  &--primary {
    border: none;
  }
}
```
