'use strict';
// 1. bar 函数运行， 内部this 指向 foo
// 2. bar.call 函数即对象，
// Function.prototype.call
// bar.call(foo)
//任何函数都具有prototype属性
Function.prototype.call2 = function (context) {
    // func()??? this 函数
    // this();
    context.fn = this;
    context.fn();
    //    console.log('手动模拟call的功能');
    // console.log(context);
    // 1. 把原来的函数执行运行，
    // 2. 并且它内部的指针指向context 

}

function func() {
    console.log(this.value);
}
var foo = {
    value: 1
}
func.call2(foo);