<!-- 
title: 31-TypeScript
sort: 
--> 

> 使用TypeScrip开发

```bash
yarn add typescript
yarn tsc filename.ts --watch
```

## 变量

```ts
let a: string = 'abc';
let b: number = 1;
let c: string[] = ['a', 'b', 'c'];
let d: number[] = [1, 2, 3];
let e: boolean = true;
let f: [number, string] = [1, 'hello'];
let g: any = 1;
let h: any = 'a';
function fun(): void {
    alert(1);
}
let hello = (name: string): string => `Hello ${name}`
let obj = { a: 1, b: 1 }
let add = ({ a, b }: { a: number, b: number }) => { a + b };
```

## 类

```ts
class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    greet() {
        return `${this.name} say: hi~`
    }
}

let fzf = new Person('fzf');
console.log(fzf.greet())
// fzf say: hi~

// 继承
class Student extends Person {
    private major: string;
    constructor(name: string, major: string) {
        super(name)
        this.major = major;
    }
    studentGreet() {
        return `${this.major} manjor's ${this.name} say hi~.`
    }
}

let fzf = new Student('fzf', 'anime')
console.log(fzf.studentGreet()) 
// anime manjor's fzf say hi~.
```

