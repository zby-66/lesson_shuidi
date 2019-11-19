- talk in js
泡一杯咖啡？
编程有规则
结果？
类 对象 
new Coffee();
- js 中构建一个类， 不用class关键字(es5)
  function Coffee() {  //首字母大写的函数就是类

  }
  new   将我们的现实思维和代码规则结合 将情商发挥出来
- 把水煮沸 ？ 动作？ 方法名   上下文之中？ 类  属性+方法
- 用沸水冲泡咖啡
- 把咖啡倒进杯子
- 加糖和牛奶

类 抽象概念 不是用来运行的， 对象是在内存变量， new出来的
调用方法 构造函数 constructor
function Coffee() {
    //构造函数
}
coffee.prototype.boilWater = function() {}
- 每次调用咖啡类的时候，都要对类的四个步骤很清楚，加大了使用类的难度
- 面向对象 
  类的设计者架构师 和类的使用者(业务开发者)， 不一样

- 茶的类设计
 - 把水煮沸 boilWater
 - 用沸水浸泡茶叶 seepTeaBag
 - 把茶水倒进杯子pourInCup
 - 加柠檬 addLemon

 咖啡 茶 饮料 继承
 祖先类， 父类，  ？

    共同点    不同点
    boilWater 
    用沸水     茶叶   咖啡
    方法    重写

- JS的继承不是血缘关系 
Coffee.prototype = new Beverage(); //原型对象
var coffee = new Coffee();
coffee -> Coffee -> prototype -> Beverage -> prototype -> boilWater 原型链


