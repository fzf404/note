<!-- 
title: 45-WebAssembly
sort: 
--> 

> [编译器SDK](https://github.com/emscripten-core/emscripten)
>
> [在线编译](http://mbebenita.github.io/WasmExplorer/)

### 安装

```bash
git clone https://github.com/emscripten-core/emsdk.git
./emsdk install latest
./emsdk activate latest

# h
source /opt/emsdk/emsdk_env.fish 
```

## 例子

> 计算斐波那契数列

### CPP

```c++
#include <iostream>
#include <ctime>

using namespace std;

int fib(int x)
{
	if (x <= 0)
		return 0;
	if (x <= 2)
		return 1;
	return fib(x - 1) + fib(x - 2);
}

int main()
{

	int t0, t1;

	t0 = clock();
	fib(40);
	t1 = clock();

	cout << (t1 - t0) / 1000 << "ms" << endl;

	return 0;
}

// -O0 385ms 
// -O1 253ms 
// -O2/3 197ms 
```

### JS

```js
const fib = x => {
	if (x <= 0)
		return 0
	if (x <= 2) {
		return 1
	}
	return fib(x - 1) + fib(x - 2)
}
console.time("Fib Time")
let result = fib(40)
console.timeEnd("Fib Time")

// Fib Time: 640ms
```

### cc

```c++
extern "C"
{
	int fib(int x)
	{
		if (x <= 0)
			return 0;
		if (x <= 2)
			return 1;
		return fib(x - 1) + fib(x - 2);
	}
}
```

### 编译

```
emcc fib.cpp -o fib.js
emcc fib.cc -o fib -s EXPORTED_FUNCTIONS='["_fib"]' -O2
```

### 浏览器使用

```js
fetch('./fib.wasm').then(res =>
	res.arrayBuffer()
).then(bytes =>
	WebAssembly.compile(bytes)
).then(mod => {
	const instance = new WebAssembly.Instance(mod)
	const fib = instance.exports.fib
	console.time("Fib Time")
	let result = fib(40)
	console.timeEnd("Fib Time")
})
// Fib Time: 370ms
```

