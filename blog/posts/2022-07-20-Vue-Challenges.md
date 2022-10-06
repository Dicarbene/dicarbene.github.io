---
layout: Post
title: Vue Challenges Solutions
subtitle: vue3 挑战题解
author: dicarbene
date: 2022-07-20
useHeaderImage: true
headerImage: /img/in-post/2022-06-05/7.png
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - Vue
  - 笔记
---

> wxj 的 `Vue Challenges`题解

## Easy

### Lifecycle Hooks

For this challenge, you'll use the Composition API: Lifecycle Hooks to complete the challenge. Here's what you need to implement 👇:

```js
// Child.vue

<script setup lang="ts">
import { onMounted, inject } from "vue"

const timer = inject('timer')
const count = inject('count')


onMounted(() => {
  // The timer will work abnormally when the child component is toggled. Lets fix it.
  timer.value = window.setInterval(() => {
    count.value++
  }, 1000)
})

</script>

<template>
  <div>
    <p>
      Child Component: {{ count }}
    </p>
  </div>
</template>
```

问题: 多次点击 toggle 按钮后, 计时显示错误(每秒多次增加)
原因: 使用`v-if`每次都会创建一个新实例新的 interval 会增加至之前存在的实例上, 造成异常快速增加计数

题解:
1):
在组件取消挂载时清除计数

```js
<script setup lang="ts">
import { onMounted, inject, onUnmounted } from "vue"

const timer = inject("timer")
const count = inject("count")

onMounted(() => {
  timer.value = window.setInterval(() => {
    count.value++
  }, 1000)
})

onUnmounted(() => {
  window.clearInterval(timer.value);
})
</script>

<template>
  <div>
    <p>
      Child Component: {{ count }}
    </p>
  </div>
</template>
```

2):
将`v-if`改成`v-show` (v-show 使用 css 实现组件的显示, 不会创建新实例)

### Next DOM update flush

When you mutate a reactive state in Vue.js, the resulting DOM updates are not applied synchronously.

```js
<script setup>
import { ref } from "vue"

const count = ref(0)

function increment() {
  count.value++

  /**
   * DOM is not yet updated, how can we make sure that the DOM gets updated
   * Make the output be true
  */

  console.log(+document.getElementById("counter").textContent === 1)
}
</script>

<template>
  <button id="counter" @click="increment">
    {{ count }}
  </button>
</template>
```

题解:
调用`nextTick()`, 有两种写法

1. async/await
2. 将需要进行的操作作函数传入`nextTick()`

```js
<script setup>
import { ref, nextTick } from "vue"

const count = ref(0)

async function increment() {
  count.value++
  await nextTick();
  console.log(+document.getElementById("counter").textContent === 1)
}
</script>

<template>
  <button id="counter" @click="increment">
    {{ count }}
  </button>
</template>
```
