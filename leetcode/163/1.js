var majorityElement = function(nums) {
    let count = 1, // 次数的计数
      majority = nums[0]; //假设第一个数是majority
    // 算法回归运算  
    for (let i = 1; i < nums.length; i++) {
      //投票  更换被选举人
      // [1,2,3,2,2,2]// 没有负数
      if (count == 0) { //少数派
        majority = nums[i]; //派人了
      }
      // [1,2,2]
      // majority n/2+1
  
      //投票算法 n/2 
      // 少数派投出去  
      //
      if (nums[i] == majority) {
        count++;
      } else {
        count--; //少数投出去 
      }
      // majority ?  count ?
      // count < 0 这个数不是我们要的，
      // majority  那个数 
      // 如果再出现这个数， count++ 
      // 不一样的数， count-- 
      // 不一样的数， 慢慢的被销灭 
      // 选举出来的， n/2
    }
    return majority;
  }
  