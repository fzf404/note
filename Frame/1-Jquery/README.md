<!-- 
title: JQuery
sort: 
-->

> 初学JS

## 常用

### 平滑跳转

```js
$(".nav-link").click(function () {
	$($(this).attr("href")).get(0).scrollIntoView({ block: 'center', behavior: 'smooth' })
});
```

### 幻灯片特效

> [文档](https://owlcarousel2.github.io/OwlCarousel2/)

```js
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/owl.carousel@2.3.4/dist/assets/owl.carousel.min.css">
<script src="https://cdn.jsdelivr.net/npm/owl.carousel@2.3.4/dist/owl.carousel.min.js"></script>

<div class="owl-carousel owl-theme"></div>

$('.owl-carousel').owlCarousel({
	loop: true,
	autoplay: true,
	autoplayTimeout: 4000,
	responsive: {
		0: {
			items: 1
		},
		500: {
			items: 2
		},
		750: {
			items: 3
		},
		1000: {
			items: 4
		}
	}
})
```

### 存储

```js
// 会话存储
window.sessionStorage.setItem('data', data.data.token);
window.sessionStorage.getItem('data')

// 本地存储
window.localStorage.setItem('data', data.data.token);
window.localStorage.getItem('data')

// object存储
window.sessionStorage.setItem('data', JSON.stringify(data));
```
