// 1.构建一个coffee 类
// js 面向对象比较特别
var Coffee = function () { //匿名函数 值是函数
    console.log('开始给您泡制咖啡，请等等');
};
Coffee.prototype.boilWater = function () {
    console.log('把水煮沸');
}
Coffee.prototype.brewCoffeeGriends = function () {
    console.log('用沸水冲泡咖啡');
}
Coffee.prototype.pourInCup = function () {
    console.log('把咖啡倒进杯子')
}
// 在类的原型上添加一个方法
Coffee.prototype.addSugarAndMilk = function () {
    console.log('加糖和牛奶');
}
//抽象 隐去一些细节
Coffee.prototype.makeCoffee = function () {
    this.boilWater();
    this.brewCoffeeGriends();
    this.pourInCup();
    this.addSugarAndMilk();
    console.log('咖啡做好了， 请喝吧');
}

var coffee = new Coffee();
coffee.makeCoffee();


var Tea = function (type) {
    //茶类
    console.log('开始给您泡茶，请稍等')
    this.type = type;
};
Tea.prototype.boilWater = function () {
    console.log('把水煮沸')

}
Tea.prototype.seepTeaBag = function () {
    console.log('用沸水泡茶')

}
Tea.prototype.pourInCup = function () {
    console.log('把茶倒进杯子')

}
Tea.prototype.addLemon = function () {
    console.log('加柠檬')

}
Tea.prototype.makeTea = function () {
    //this指向实例后的对象
    this.boilWater();
    this.seepTeaBag();
    this.pourInCup();
    this.addLemon();
    console.log('茶泡好了，请请喝')
}
const tea = new Tea('乌龙茶');
tea.makeTea();
console.log(tea.type);

