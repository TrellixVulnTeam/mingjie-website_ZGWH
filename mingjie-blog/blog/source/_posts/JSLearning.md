---
title: JS Learning
categories: ['front-end']
tags: ['JS', 'JavaScript', 'Learning']
comments: true
date: 2021-04-03 22:16:36
img: /img/JS.png
---
# JS study guide

## 1. anchor link href javascript

```html
<a href="javascript:alert('display something')">hyperlink</a>
```

虽然可以卸载标签的属性中，但是不方便维护，不推荐使用

## 2. where should i place my js

```html
<script typr="text/javascript" src="location/jsfile.js"></script>
```

一旦引入文件，就不能编写代码了，即使写了，浏览器也不会执行；可以创建一个新的script来写

## 3. html js execution order

js executes based on the order;  it will execute the upper part and then the lower part. 

## 4. JS comment format

```js
/*
	这是js的多行注释
 */

/*
 *	这也是多行注释
 */

// 单行注释
alert("hello");
document.write('hello');
console.log('hello');
```

## 5. JS 变量

```js
// declare a variable
var a;
// assign the value
a = 123;
// declare and assign the value in one line
var b = 123;

// js variable name
// char in name can include char, num, _, $
var abc_$; // correct
// cannot start with num
var 1bac = 123; // this is wrong!!!!!
// cannot be the saved words in ES
var var = 123; // this is wrong!!!!!
// camel word naming
var helloWorld;
```

## 6. JS type

> String
>
> - \ “ -> “
> - \ ‘ -> ’
> - \ n -> newline
> - \ t -> tab
> - \ \ -> \
>
> Number
>
> - all integer and float number belongs to **Number** type
> - Number.MAX_VALUE; if num exceeds this value; will return **Infinity**
> - Number.MIN_VALUE; if num is smaller than this value; will return **-Infinity**
> - typeof Infinity = “number”
> - NaN is a special number -> Not a Number
> - may get an inaccurate result if we do float number calculation
>
> Boolean
>
> Null & Undefined
>
> ``` js
> // 专门用来表示一个空对象
> var a = null;
> typeof a = "object";
> 
> // 表示未定义，声明了，未赋值
> var b;
> typeof b = "undefined"
> ```
>
> Object

## 7. JS type conversion

### 1. convert to String

```js
var a = 123;

// Method 1. toString()
//    will not affect the origional var; return the new value
var b = a.toString();
typeof a = "number";
// cannot user toString on null and undefined
// null and undefined doesn't have toString method
a = null; 
a.toString() //报错！！！！！
a = undefined;
a.toString() //报错！！！！！

// Method 2. 调用String()函数
a = 123;
a = String(a);
// 对于基本数据类型，也是调用toString()
// 对于null, 就会直接返回"null"
// 对于undefined，就会直接返回"undefined"
```

### 2. convert to Number

```js
var a = "123";
// Method 1. Number()
// 1. 纯数字字符串，直接转换
// 2, 有非数字内容，会转换为NaN
// 3, 字符串是一个空串，或全是空格，转换为0
// 4. true -> 1; false -> 0;
// 5. null -> 0;
// 6. undefined -> NaN
a = Number(a); // 123
a = "abc";
a = Number(a); // NaN

// Method 2. parseInt()
// 把字符串转为Number;提出整数部分，转换为Number
a = "123px";
a = parseInt(a); // 123

// Method 3. parseFloat()
// 提出一个有效的小数，转换为Number
a = "123.456px";
a = parseFloat(a); // 123.456

// Note
// parseInt, parseFloat 会将非string的值转换为string在计算
a = true;
a = pareseInt(a); // NaN
```

### 3. convert to Boolean

```js
// Method 1. Boolean();
// - 数字转boolean; 除了0和NaN,其他的都是true
// - 字符串转boolean；除了空串其他都是true
// - null -> false
// - undefined -> false
var a = 123; // true
a = -123; // true
a = 0; // false
a = Infinity; // true
a = NaN; // false
```

