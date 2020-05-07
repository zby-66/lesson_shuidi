- 浏览器端的JS 最大的boss是
window BOM
BrowserObjectModel 天空
DOM
  bonus 声明在全局范围内
  window.bonus 卫星
  ..... 对全局变量的污染问题

- JS的编写，其实应该在页面加载之后，JS只有在html，css加载完成后，再去运行，生命周期 window.onload
- window.onload 的执行函数 内部创造一个局部的作用域
  bonus 函数不会污染全局作用域 window
- 如果有了新的type后，你怎么改这个函数
- 把事情做复杂了？ 把之前的switch case，拆成了多个函数来做技术大牛，做大项目 设计模式：策略模式
  发工资 策略 复杂
 - 随意加新的等级
 - 将策略细节隐去

- js 的哪些数据类型
  数值型 Number  1
  字符串 '1'
  布尔值 true
  undefined类型 js中可以只声明不赋值 晚点再赋值
  null 空类型 赋了值， 但是值为空
  之上的都是原子类型 简单数据类型
  object 其他的都是对象 复杂数据类型 
   数组 可以被迭代的对象 iterable
   函数 可以被运行的对象 function ()
   JSON 对象字面量 { } 可以被 key:value 的对象

- typeof null  'object' ?
-  怎么样区别 [] {}  typeof ?

- 变量名name 值value
  let func; //内存中申请分配  地址
  undefined ? 类型还未定义 
  js 是弱类型语言 有别于Java c++等静态类型语言
  js 的变量的类型是由值来决定的 

  npm install -g nodemon



