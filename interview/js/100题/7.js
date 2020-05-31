let arr = [1, 1, 1, 2, 2, 3, 2, 2, 1, 2, 3, 2, 1, 2, 2, 3];

for (let i = 0; i < arr.length - 1; i++) {
  let item = arr[i];
  for (let j = i + 1; j < arr.length; j++) {
      if (item === arr[j]) {
          // 用最后一项替换当前项
          arr[j] = arr[arr.length - 1];// 原始数组中的顺序会变化，但是不会导致索引前置这种情况（性能好）
          // 最后一项删掉
          arr.length--;
          // 下一轮还和这一项比（因为这一项已经变为最新的最后一项了）
          j--;
      }
  }
}
console.log(arr);



let arr = [1, 2, 3, 1, 1, 4, 2, 3];
let obj = {};
for (let i = 0; i < arr.length; i++) {
    // 把每一次循环得到的当前项，作为对象的属性名和属性值存储进去
    let item = arr[i];
    if (obj[item] !== undefined) {
        // 证明对象中有这个属性（也就是之前存储过，数组中之前就有这个值），当前值是重复的，我们需要把当前这项的值删掉即可
        arr[i] = arr[arr.length - 1];
        arr.length--;
        i--;
        continue;
    }
    obj[item] = item;
}
console.log(arr);



let arr=[1,2,1,3,3,2,3];
let newAry=[];
  /*把原数组中的每一项，只要在新数组中没存在过，我们就把它放进去，最后newAry就是咱们最终要的数组*/
  
for(let i=0;i<arr.length;i++){
       let item=arr[i];
       if(newAry.indexOf(item)==-1){
        newAry.push(item);
       }
   }
arr = newAry;
console.log(arr);


/* ES6中没有提供现成的去重办法，但是提供了一些去重的方式 ：Set数据结构*/
let obj = { y: 200 };
let arr = [obj, 1, 2, 3, 1, obj, 1, 4, 2, 3, '3', { x: 100 }, { x: 100 }];
arr = Array.from(new Set(arr));
console.log(arr);
