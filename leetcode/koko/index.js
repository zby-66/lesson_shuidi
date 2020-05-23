const piles = [3,6,7,11] //香蕉
// console.log(piles,length);
// console.log(piles[0]);
function minEatingSpeed(piles,H) {
  //一个个试
  let lo = 1, //最小值
    hi = Math.max(...piles); //最大值   三个点是展开运算符
  //得到数组中的最大值，吃法的约束
//   for (let i = 0; i < piles.length; i++) {
//       if (piles[i] > lo) {
//         //   lo = piles[i];
//         hi = piles[i];
//       }
//   }
// lo -> hi 去试， 最小的能吃完的是不是就这个值？
//   console.log(hi,)

/** 
 * author ikun
 * function 判断是否可吃完
 */

 function canEatAllBananas (piles, H, mid) {
     let h = 0; //吃完花的时间
     for (let j = 0; j < piles.length; j++) {
         h = h + Math.ceil(piles[j] / mid)
     }
     return h <= H;
 }
for (let i = lo; i <= hi; i++) {
   if (canEatAllBananas(piles, H, mid)) {
    return i;
   }
}
   return hi;
// }

console.log(minEatingSpeed(piles,8));
