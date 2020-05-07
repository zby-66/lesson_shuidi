"use strict";
// interface Array<T> {
//   pop(): T | undefined
//   some(callbackfn: (value: T, index: number, arr: T[]) => boolean): boolean
// }
// // 1
// let arr: number[] = [1, 2, 3, 4];
// // 2：泛型
// let arr1: Array<string> = ['4', '5', '6'];
// let a = arr1.pop();
// let b = arr.pop();
// let flag = arr.some((num, i, arr) => num > 2);
// 每一项
// class Stack {
//   constructor() {
//   }
//   push() {}
//   pop() {
//   }
// }
// 类型的抽象
function foo(arg) {
    return arg;
}
function foo1(arg) {
    return arg;
}
function foo2(arg) {
    return arg;
}
foo(1);
foo1('1');
foo2(true);
// 输入类 输出类型 不一致
// number ： string
// function foo3(arg: any): any {
//   return arg;
// }
// 不一致的地方：类型
// 公共地方： 功能
// 使用函数的时候，可以传入一个类型，多定义了参数，这个参数是个类型 T U K
// 
function myfoo(arg) {
    return arg;
}
myfoo(123);
myfoo('123');
// 靠js数组实现
// js数组：指定数组类型
// number 写死？？ string ？？
// T 用户 
var Stack = /** @class */ (function () {
    function Stack() {
        this.eles = [];
    }
    Stack.prototype.push = function (arg) {
        this.eles.push(arg);
    };
    Stack.prototype.pop = function () {
        return this.eles.pop();
    };
    return Stack;
}());
var st = new Stack();
st.push('3');
var st1 = new Stack();
st1.push({ name: 'n', age: 89, say: 78 });
//# sourceMappingURL=axios.js.map