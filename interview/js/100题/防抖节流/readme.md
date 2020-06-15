# 什么是防抖和节流？有什么区别？如何实现？

## 防抖
> 触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
- 思路
> 每次触发事件时都取消之前的延时调用方法

```js
function debounce(fn) {
  let timeout = null; //创建应该标记来存放定时器的返回值
  return function () {
    clearTimeout(timeout); // 每当用户输入的时候把前一个 settimeout clear 掉
    timeout = setTimeout(() => { // 然后又创建一个新的 settimeout, 这样就能包装输入字符后的 interval 间隔内如果还有字符输入话，就不会执行 fn 函数
      fn.apply(this, arguments);
    }, 500);
  }
}
```

## 节流
> 高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率
- 思路

```js
function throttle(fn) {
  let canRan = true; // 通过闭包保存一个标记
  return function () {
    if (!canRan) return; // 在函数开头判断标记是否为true, 不为true则return
    canRan = false; // 立即设置过i为false
    setTimeout(() => { // 将外部传入的函数的执行放在setTimeout中
      fn.apply(this, arguments);
      // 完成后设置为true
      canRun = true;
    }, 500);
  }
}
```