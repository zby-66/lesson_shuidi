//贪心 从后往前

/**
 * @param {number[]} nums
 * @return {boolean}
 *动态规划
 */
var canJump = function(nums) {
    const totalLength = nums.length;
    const memo = Array(totalLength).fill(0);
    memo[totalLength - 1] = 1;

    for(let i=totalLength-2;i>=0;i--){
        const maxJump = Math.min(i+nums[i],totalLength-1);
        for(let j=i+1; j=maxJump;i++){
            if(memo[j] ===1){
                memo[i] = 1;
                break;
            }
        }
    }
    if(memo[0] === 1){
        return true;
    }else{
        return false;
    }
}