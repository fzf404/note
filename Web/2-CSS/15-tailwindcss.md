<!--
title: 15-tailwindcss
-->

## 安装

```bash
# vue-cli
vue add tailwind
```

## 核心概念

### 响应式设计

```js
// 屏幕宽度
class="w-16 md:w-32 lg:w-48 xl:w-64 2xl-96"
// 状态类 滑过 聚焦 点击 禁用 访问过
class="hover:bg-red-700 focus:ring-2 active:bg-green-700 disabled:opacity-50 visited:text-purple-600"
// 父元素状态传递给子元素
class="group"
class="group-hover:text-gray-900"
// 子元素状态给父元素
class="focus-within:text-gray-600"
// 判断自己是否为父元素的first/end/奇数/偶数子元素
class="first:rotate-45 last:rotate-45 odd:rotate-45 even:rotate-45"
```

### 暗黑模式

```js
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

// Whenever the user explicitly chooses light mode
localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme')
```

### 自定义组件

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn-blue {
    @apply py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75;
  }
}
```

## 基础

### 布局

```css
/* 容器 */
container
/* 垂直居中 */
flex flex-col items-center
/* 完全居中 */
flex flex-col flex-wrap justify-center items-center
/* grid布局 */
h-screen grid grid-cols-3 grid-rows-3
/* 子项目 */
col-span-2 row-span-2
```

### 效果

```css
// 外部环
ring-4 ring-offset-4
```

