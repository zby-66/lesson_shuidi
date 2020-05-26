- js 内存
- js是单线程的，请问这个单线程包括 setTimeout promise addEventListener 这些吗？
  什么的是单线程？
   渲染进程 input dom input(file) -> css 通过与浏览器主进程通信， 主进程读取磁盘图片数据返回给渲染进程，(URL FileReader ) 渲染进程里面的js 发起ajax 请求，是通过浏览器主进程去调用网络进程发起请求，还是渲染进程可以直接调用网络进程发送请求？

  是通过浏览器主进程去调用网络进程发起请求

  Ajax 请求 XMLHttpRequest 单线程
    js ie6 它是以什么方式登场的， （ActiveXObject）

  chrome 打开进程  为什么每个tab 新开一个进程？

   更快， dom， css layout js 执行 页面越来越复杂的时候 2008 RIA 3-2
   更安全 沙箱
chrome 之前， 所有的tab 都是公用一个进程

1. JS 单线程是指V8引擎的单线程 词法语法 上下文环境 ast
   tab 启动 新的进程 主线程 mianThread

   1. GUI 渲染进程
   负责渲染浏览器界面 html css 构建DOM树， render树， 布局与绘制
   底部的js 会执行
   多线程会让 简单的web编程变得复杂 
   2. 事件触发进程
   事件循环队列
   不属于我们的渲染线程，属于浏览器
   3. http请求线程
   4. 定时器触发线程

  js的单线程 = js 引擎线程 v8

  闭包，引用式赋值，动态 作用域 隐式内容转换 - 在js 内存的理解

  理解JS 内存机制 可以解决
  