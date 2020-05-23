function Person(name) {
    this.name = name;
}
Person.prototype.getName = function() {
    console.log(this.name);
}

// Person('qing');作为函数 this 指向window（全局/自己）
const qing = new Person('琴');
console.log(qing.getName());
//构造函数
console.log(Person.prototype.constructor);//constructor 构造函数
console.log(qing.__proto__, Person.prototype, qing.__proto__ == Person.prototype);//prototype 属性使您有能力向对象添加属性和方法。