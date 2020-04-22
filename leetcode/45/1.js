/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let maxReach = 0;
    let step = 0;
    let end = 0;

    for(let i =0; i<nums.length-1;i++){
        maxReach=Math.max( nums[i]+i, maxReach);
        if(i===end){
            step++;
            end=maxReach;
        }

    }
    return step;
};