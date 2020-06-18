# 浏览器和node的事件循环的区别


 先上链接：
 
 * [浏览器与Node的事件循环(Event Loop)有何区别?](https://juejin.im/post/5c337ae06fb9a049bc4cd218#heading-12)
 * [html#event-loops](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops)
 * [Node.js 事件循环，定时器和 process.nextTick()](https://nodejs.org/zh-cn/docs/guides/event-loop-timers-and-nexttick/)
 
 第一个链接里面大佬讲的已经非常透彻了我来总结一下。
 
## 浏览器
 **关于微任务和宏任务在浏览器的执行顺序是这样的：**
 
 * 执行一只task（宏任务）
 * 执行完micro-task队列 （微任务）
 
 如此循环往复下去
 
  浏览器的task（宏任务）执行顺序在 [html#event-loops](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops) 里面有讲就不翻译了
  常见的 task（宏任务） 比如：setTimeout、setInterval、script（整体代码）、 I/O 操作、UI 渲染等。
  常见的 micro-task 比如: new Promise().then(回调)、MutationObserver(html5新特性) 等。
 
 ## Node
 Node的事件循环是libuv实现的，引用一张官网的图：
 
 ![default](https://user-images.githubusercontent.com/20101525/53734427-eba9e880-3ebe-11e9-8511-eb4948e336ae.png)
 
 大体的task（宏任务）执行顺序是这样的：
 
 * timers定时器：本阶段执行已经安排的 setTimeout() 和 setInterval() 的回调函数。
 * pending callbacks待定回调：执行延迟到下一个循环迭代的 I/O 回调。
 * idle, prepare：仅系统内部使用。
 * poll 轮询：检索新的 I/O 事件;执行与 I/O 相关的回调（几乎所有情况下，除了关闭的回调函数，它们由计时器和 setImmediate() 排定的之外），其余情况 node 将在此处阻塞。
 * check 检测：setImmediate() 回调函数在这里执行。
 * close callbacks 关闭的回调函数：一些准备关闭的回调函数，如：socket.on('close', ...)。
 
 **微任务和宏任务在Node的执行顺序**
 
 Node 10以前：
 
 * 执行完一个阶段的所有任务
 * 执行完nextTick队列里面的内容
 * 然后执行完微任务队列的内容
 
 Node 11以后：
 和浏览器的行为统一了，都是每执行一个宏任务就执行完微任务队列。

