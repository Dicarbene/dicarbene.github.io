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


### JavaScript

- deepClone

```js
function copy(aObject) {
  if (!aObject) return aObject;
  let bObject = Array.isArray(aObject) ? [] : {};
  let value;
  for (const key in aObject) {
    // Prevent self-references to parent object
    if (Object.is(aObject[key], aObject)) continue;
    value = aObject[key];
    bObject[key] = typeof value === "object" ? copy(value) : value;
  }
  return bObject;
}
```

- Promise.all()

```js
function myPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        let results = new Array(promises.length);
        let count = 0;
        for (let i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i]).then(res => {
                count++;
                results[i] = res;
                if (count === promises.length) {
                    resolve(results);
                }
            },
                err => reject(err));
        }
    })
}

let p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(1)
    }, 1000)
})
let p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(2)
    }, 2000)
})
let p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(3)
    }, 3000)
})
myPromiseAll([p3, p1, p2]).then(res => {
    console.log(res) // [3, 1, 2]
})
```

- promise.race()

```js
function myRace(promises) {
    return new Promise((resolve, reject) => {
        promises.forEach((promise) => {
            Promise.resolve(promise).then(res => {
                resolve(res);
            }, err => {
                reject(err);
            })
        })
    })
}
```

- Promise implement

```js
class Prom {
  static resolve(value) {
    if (value && value.then) {
      return value;
    }
    return new Prom((resolve) => resolve(value));
  }

  constructor(fn) {
    this.value = undefined;
    this.reason = undefined;
    this.status = "PENDING";

    // 维护一个 resolve/pending 的函数队列
    this.resolveFns = [];
    this.rejectFns = [];

    const resolve = (value) => {
      // 注意此处的 setTimeout
      setTimeout(() => {
        this.status = "RESOLVED";
        this.value = value;
        this.resolveFns.forEach(({ fn, resolve: res, reject: rej }) =>
          res(fn(value))
        );
      });
    };

    const reject = (e) => {
      setTimeout(() => {
        this.status = "REJECTED";
        this.reason = e;
        this.rejectFns.forEach(({ fn, resolve: res, reject: rej }) =>
          rej(fn(e))
        );
      });
    };

    fn(resolve, reject);
  }

  then(fn) {
    if (this.status === "RESOLVED") {
      const result = fn(this.value);
      // 需要返回一个 Promise
      // 如果状态为 resolved，直接执行
      return Prom.resolve(result);
    }
    if (this.status === "PENDING") {
      // 也是返回一个 Promise
      return new Prom((resolve, reject) => {
        // 推进队列中，resolved 后统一执行
        this.resolveFns.push({ fn, resolve, reject });
      });
    }
  }

  catch(fn) {
    if (this.status === "REJECTED") {
      const result = fn(this.value);
      return Prom.resolve(result);
    }
    if (this.status === "PENDING") {
      return new Prom((resolve, reject) => {
        this.rejectFns.push({ fn, resolve, reject });
      });
    }
  }
}

Prom.resolve(10)
  .then((o) => o * 10)
  .then((o) => o + 10)
  .then((o) => {
    console.log(o);
  });

return new Prom((resolve, reject) => reject("Error")).catch((e) => {
  console.log("Error", e);
});
```

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

```js
fuction interval(f){
  setInterval(f,50);
}
```

- How do you make a function that takes f and returns a function that calls f on a timeout?

```js

```

- Given a timeline write the JavaScript to select all nodes within selection of timeline.
