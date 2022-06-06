---
layout: Post
title: JavaScript notes
subtitle: dicarbene's shitty notes about the cute javascript
author: dicarbene
date: 2022-06-05
useHeaderImage: true
headerImage: /img/in-post/2022-06-05/2.jpg
headerMask: rgb(67, 65, 47, .2)
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - 笔记
---
<!-- more -->
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

在初始化变量时定义为将来要使用的类型值 <code>let found = false //boolean</code>

在使用匈牙利表示法--在变量名前面前缀一个或多个字符表示数据类型

`let bFound; //boolean`

使用类型注释, 即在声明变量时将类型注释放在变量名后面

`let found /*boolean*/ = false`

#### 直接使用typescript
定义方式: `let found:Boolean = false //boolean`
