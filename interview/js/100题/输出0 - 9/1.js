// 改造下面的代码，使之输出0 - 9，写出你能想到的所有解法。
// for (var i = 0; i< 10; i++){
// 	setTimeout(() => {
// 		console.log(i);
//     }, 1000)
// }

//1
// for (var i = 0; i< 10; i++){
// 	setTimeout((i) => {
// 		console.log(i);
//     }, 1000,i)
// }

// 2
// for (let i = 0; i< 10; i++){
//   setTimeout(() => {
//     console.log(i);
//   }, 1000)
// }

// 3
for (var i = 0; i< 10; i++){
  ((i) => {
    setTimeout(() => {
      console.log(i);
    }, 1000)
 })(i)
}