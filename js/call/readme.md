- this 是有原则的， 
    1. 作为普通函数被调用 this 指向window/global 
    2. 方法做为对象的方法被调用时，this指向对象
    3. 被new 运行时， this 指向实例化后的对象 
    'use strict' 严格模式下 为undefined
- call 手动指定函数运行时的this， 并将函数运行 
  bar.call(foo) 函数运行
- bar.call 
    函数是对象 
    手写一个call ? 