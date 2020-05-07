# 箭头函数很简便， 功能也被简化了
1. this 没有  作用域查找，  父级的this
不够的 
简约， arrow function  缺了很多东西

- super 关键字 举出应用场景吗？ 
  super 是继承关系里
  class Person {
    constructor() {
      super()
      this.
    }
  }
 函数  super arguments this
 class super 用法
 别的可能性让我们的js 函数有super的使用吗？

 - 对象间继承关系的新方法   Object.setPrototypeOf(childObject, fatherObject)
 - 函数 this arguments super.
2. 'super' keyword unexpected here 箭头函数没有super 关键字
3. 箭头函数不适合用来做构造函数， new.target 没有这个

js 一切皆对象 对象 函数  区分一下
对象有__proto__属性 原型对象
函数 prototype  
生成对象时， 对象的__proto__属性指向函数的prototype书信
4. 箭头函数是不可以被new 的   this 