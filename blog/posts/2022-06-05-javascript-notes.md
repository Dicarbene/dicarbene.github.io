---
layout: Post
title: JavaScript notes
subtitle: dicarbene's shitty notes about the cute javascript
author: dicarbene
date: 2022-06-05
useHeaderImage: true
headerImage: /img/in-post/2022-06-05/6.jpg
headerMask: rgb(67, 65, 47, .4)
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - 笔记
---

<!-- more -->

## 基本引用类型

Date, RegExp, 原始值包装类型, 单例内置对象

原始值包装类型: Boolean, Number, String

单例内置对象: Global, Math

## 集合引用类型

Object, Array, 定型数组, Map, WeakMap, Set, WeakSet

### 迭代与扩展操作

## 对象、类与面向对象编程

创建对象->继承->类

## 代理与反射

## 函数

## 期约与异步函数

## 最佳实践

可维护的代码: 容易理解、符合常识、容易适配、容易扩展、容易调试

### 命名规则

- 变量名应该是名词, 如 car
- 函数名以动词开始, 例如 getName()
- 对函数和变量使用符合逻辑的名称, 不需要担心长度,长名字的问题可以在之后解决。
- 变量、函数和方法应该以小写字母开头, 使用 camelCase 形式, 如 getName() 和 isPerson()。类名首字母大写，如 Person、RequestFactory。常量全部大写以下划线连接，如 REQUEST_TIMEOUT。
- 名称使用描述性和直观的词汇，尽量简洁。

避免完全没有用的变量名。

### 变量类型透明化

在初始化变量时定义为将来要使用的类型值

```js
let found = false; //boolean
```

在使用匈牙利表示法 -- 在变量名前面前缀一个或多个字符表示数据类型

```js
let bFound; //boolean
```

使用类型注释, 即在声明变量时将类型注释放在变量名后面

```js
let found /*boolean*/ = false;
```

#### 直接使用 typescript

定义方式:

```ts
let found: Boolean = false; //boolean
```

### 松散耦合

从其他耦合到数据耦合

#### 解耦 HTML/JavaScript

HTML 是数据, JavaScript 是行为. 需要让数据层和行为层解耦, 避免 debug 困难.
例如避免在 JavaScript 中插入大量 HTML 代码. 这样做可以减少 debug 时间.

个人理解:

例子: 在 vue 中使用 `v-if, v-show` 等, 避免使用 js 操纵大量 HTML 代码

#### 解耦 CSS/JavaScript

方法: 使用 JavaScript 操纵 ==CSS 类名== 而不是具体的 ==CSS 内容==

```js
element.style.color = "red";
//to =>
element.className = "edit";
```

#### 解耦应用程序逻辑/事件处理程序

```js
function handleKeyPress(event) {
  if (event.keyCode == 13) {
    let target = event.target;
    let value = 5 * parseInt(target.value);
    if (value > 10) {
      document.getElementById("error-msg").style.display = "block";
    }
  }
}
```

应用程序逻辑和时间处理程序分离 to =>

```js
function validateValue(value) {
  value = 5 * parseInt(value);
  if (value > 10) {
    document.getElementById("error-msg").style.display = "block";
  }
}
function handleKeyPress(event) {
  if (event.keyCode == 13) {
    let target = event.target;
    validateValue(target.value);
  }
}
```

### 性能

#### 作用域意识

访问全局变量始终比访问局部变量慢, 因为必须遍历作用域链, 任何可以缩短遍历作用域链时间的措施都能提升代码性能

##### 避免全局查找

```js{1,3,5}
  let imgs = document.getElementByTagName("img");
  for(let i = 0, len = imgs.length();i<len;++i){
    imgs[i].title = "${document.title} image ${i}";
  }
  let msg = document.getElementById("msg");
  msg.innerHTML = "Update comp";
```

在高亮部分引用了全局 document 对象, 且可能在 for 循环中引用 document 多次

在局部作用域链中保存 document 对象的引用, 能够明显提升性能

```js{1}
  let doc = document;
  let imgs = doc.getElementByTagName("img");
  for(let i = 0, len = imgs.length();i<len;++i){
    imgs[i].title = "${doc.title} image ${i}";
  }
  let msg = doc.getElementById("msg");
  msg.innerHTML = "Update comp";
```

#### 选择正确的方法

##### 避免不必要的属性查找

只要使用某个 object 属性超过一次, 就应该将其保存在局部变量中.

##### 优化循环

trick: 展开循环

- 对于短的循环, 直接进行多次调用即可
- 对于长的循环, 使用 Duff's device 的 trick 将循环展开为 8 的倍数即可

#### 优化 DOM 交互

个人理解: 多多使用 Vue, React 之类的 MVVM 框架(使用 Virtulal-DOM 方法)就可以避免大多数的 DOM 操作性能问题啦~
