---
layout: Post
title: Frontend Interview Problems
subtitle: Frontend Interview Problems frontendinterviewhandbook.com
author: dicarbene
date: 2022-10-06
useHeaderImage: true
headerImage: /img/in-post/2022-10-06/1.jpg
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - 开发
  - 笔记
---

Frontend Interview Problems from the [Frontend interview handbook](https://www.frontendinterviewhandbook.com/zh/)

## Interview Questions

### Google

#### JavaScript

- Implement the outline view for a Google doc.

  duuno what this suppose me to do tho.

- DFS on HTML nodes.

  ```js
  const dfs = (node) => {
    node.childNodes.forEach((n) => {
      dfs(n);
    });
  };
  dfs(node);
  ```

- Implement throttle.

  Throttle mean save flow, basically it mean a method can only be used once for a time period.

  ```js
  function throttle(f, wait) {
    let timer;
    return (...args) => {
      if (timer) return;
      timer = setTimeout(() => {
        f(...args);
        timer = null;
      }, wait);
    };
  }
  ```

- How do you make a function that only calls input function f every 50 milliseconds?
- How do you make a function that takes f and returns a function that calls f on a timeout?
- Given a timeline write the JavaScript to select all nodes within selection of timeline.
