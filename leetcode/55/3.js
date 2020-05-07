//贪心
//让自身可跳的步数加上已经跳的步数与到达目标需要跳的步数进行对比，最快，逆向思维。
/**
 * @param {number[]} nums
 * @return {boolean}
 *
 */
var canJump = function(nums) {
    let maxJump = nums.length -1;
    for(let i=nums.length-2;i>=0;i--){
        if(i+nums[i]>= maxJump){
            maxJump = i;
        }
    }
    return maxJump === 0;
}
