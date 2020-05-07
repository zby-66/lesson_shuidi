function Person(name, age) {
    this.name = name
    this.age = age;
}
//覆盖了Object上原有的toString方法
Person.prototype.toString = function() {
    return 'I am a Person, my name is ' + this.name;
}

function Man(name, age) {
    // Person 构造函数 把父类的构造函数执行一下
    Person.apply(this, arguments);//arguments 调用的所有参数
    console.log(arguments, '------');
}
Man.prototype = Object.create(Person.prototype);
var cxc = new Man("陈新初", 19);
console.log(cxc+ "");
// toString 覆盖了
Man.prototype.toString = function() {
    return 'I am a 007, my name is '+ this.name;
}
console.log(cxc+ "");

var person = new Person('张博扬', 20);
console.log(person + "");//类型转化
const arr = ['陈新初', '陈方闻'];
console.log(Object.prototype.toString.call(arr));//{ }
// [object Array]
