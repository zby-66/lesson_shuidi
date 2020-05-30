// 下面代码a 在什么情况下会打印1？
// var a = ?;
// var a = {
//   i: 1,
//   toString() {
//     return a.i++;
//   }
// } // 简单数据类型不可能
// a 是变化的 对象

//方法2
// var a = {
//   num: 0
// };
// a.valueOf = function () {
//   return ++a.num;
// }

// 方法3
// let a = {
//   gn: (function* () {
//     yield 1;
//     yield 2;
//     yield 3;
//   })(),
//   valueOf() {
//     return this.gn.next().value;
//   }
// }

//4
Object.defineProperty(window, 'a', {
  get: function () {
    return this.value += 1;
  }
})

if (a == 1 && a == 2 && a == 3) {
  console.log(1)
}

//隐式类型转换 number在判断的时候会调用对象的 valueOf 方法