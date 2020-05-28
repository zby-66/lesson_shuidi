const arr = [0, 1, 9, 8, 4];

//一次快排 能够给一个基准值
//1. provit 找到正确的位置
// 2. 左边都是小于 provit 的数 右边都是大于
const quickSort = function (arr) {
  if (arr.length <= 1) return arr;
  let provit = arr[0];
  let left = [], right = [];
  for (let i = 1; i < arr.length; i++){
    if (arr[i] < provit) left.push(arr[i]);
    if (arr[i] > provit) right.push(arr[i]);
  }
  return [...quickSort(left), provit, ...quickSort(right)]
}

console.log(quickSort(arr))