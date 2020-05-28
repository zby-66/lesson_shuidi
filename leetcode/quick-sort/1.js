// 1. provit 找到正确的位置(数组里面的索引)
// 2. [xx < provit < xx ] < provit <  右边 大于 provit 的数 
// 分治
// [8, 9, 7, -1, 5, 4, 3, 2, 1]
// j ++: 交换的时候 大的数不断来到右边
// piovt 的位置就是 j
function partition(nums, left, right) {
  if (left >= right) return;
  let piovt = nums[left];
  // 左边 -> 右边
  let j = left;  // 记录 比 piovt > 的数
  // j: 0
  for (let i = left + 1; i <= right; i ++) {
    if (nums[i] < piovt) {
      //交换
      // i: 1
      j ++;
      swap(nums, i, j)
    }
  }
  swap(nums, j, left);
  // j k
  partition(nums, left, j - 1);
  partition(nums, j + 1, right);
}
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
function quickSort(arr) {
  partition(arr, 0, arr.length - 1)
}
const arr = [8, 9, 7, -1, 5, 4, 3, 2, 1];
quickSort(arr);
console.log(arr);