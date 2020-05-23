// /**
//  * @param {number[]} digits
//  * @return {number[]}
//  */
// var plusOne = function(digits) {
//     for(let i=digits.length-1;i>=0;i--){
//         if(digits[1] !==9){
//             digits[i]++;
//             return digits;
//             // break;
//         }else{
//             digits[i] = 0;
//             continue

//         }
//     }
//     // 只要可以到这个就一定全是9
//     const arr = [1,...digits];
//     // const arr = [1].concat(digits);
//     // const arr = digits.unshift(1)
//     // const arr = digits.join('').split
    
//     return arr;
//     // digits.unshift(1);
//     // return digits;
//     // digits = new Array(digits.length+1).fill(0);
//     // digits[0] = 1;
// };



// /**
//  * @param {number[]} digits
// //  * @return {number[]}
// //  */
// // var plusOne = function(digits) {
// //     for(let i = digits.length - 1;i >= 0;i--){
// //         if(digits[i] == 9){
// //             digits[i] = 0;
// //         }else{
// //             digits[i]++;
// //             return digits;
// //         }
// //     }
// //     digits.unshift(1);
// //     return digits;
// // };

var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] !== 9) {
        digits[i]++
        return digits
      } else {
        digits[i] = 0
        // continue
      }
    }
    return [1, ...digits]
  }
  
  console.log(plusOne([9]))