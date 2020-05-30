
console.log(['1', '2', '3'].map(parseInt));//[1, NaN, NaN]  // map 接收 item index arr 数组本身 三个或更多个参数

// parseInt('1', 0) 第二个参数表示多少进制 0 默认10进制
// parseInt('2', 1) 一进制 中没有2 NaN
// parseInt('3', 2) 二进制 中没有 3 NAN

// parseInt 多传了一个参，所以造成这样的结果，那如何只接受一个参数，控制函数参数数量的能力

let unary = fn => val => fn(val); //控制只接受一个参数  返回了只接受一个参数的函数
  let parse = unary(parseInt);
['1', '2', '3'].map(parse);
