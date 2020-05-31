// MVVM 数据劫持

// var arr = [1];
// arr[10000] = 1;

// // function a() {
// //   console.time();
// //   for (var i = 0; i < arr.length; i++){
// //     console.log(1)
// //   }
// //   console.timeEnd();
// // }

// // a();


// function b() {
//   console.time();
//   arr.forEach(item => { console.log(2) })
//   console.timeEnd();
// }

// b()

//性能代价和获取的用户体验不成正比
// defineProperty 是可以对数组进行劫持， 不过对新增的数据项没有效果
//defineProperty不支持新增数组的代理
var arr = [1, 2, 3, 4];
arr.forEach((item, index) => {
  // 对每一个属性单独的数据劫持， get set
  Object.defineProperty(arr, index, {
    set: function (val) {
      console.log('set');
      item = val
    },
    get: function (val) {
      console.log('get');
      return item;
    }
  })
})

arr[1];
// arr[1] = 1;
// arr[5] = 2;
// arr.push(5);