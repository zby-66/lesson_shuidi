'use strict';//严格模式

var foo = {
    value: 1
}

function bar() {
    // this指向的是foo, 
    console.log(this);
    console.log(this.value);
}

//.call指定并手动指定函数内部的this 指向第一个参数 
bar.call(foo);
// console.log(foo.value);
bar();//this 跟函数的运行方式相关
//普通函数 this 指向全局  global window