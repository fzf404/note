<!-- 
title: React
sort: 
--> 

## npm

```bash
npm init -y
npm install react --save
```

## yarn

```bash
yarn init
yarn add react --save	# 添加新插件
yarn install		# 拉取旧插件
```

## 脚手架

```bash
yarn global add -g create-react-app
create-react-app my-app
# 预览
yarn start
# 暴露配置文件
yarn eject
```

### 展示

```react
// 方式1
{
  isActive
  : 
  <p>show</p>
  ?
  <p>no show</p>
}

// 方式2
style={{
  display: isActive ? 'none' : '',
}}
```

### 批量渲染

```react
// 列表渲染
data.map((item, index) => {
  <div key={index}>
    {item]}
  </div>
}
         
// 对象渲染
Object.keys(data).map((item, index) => {
  <div key={index}>
    {data}: {data[item]}
  </div>
}
```

