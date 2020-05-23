//O(n3)->O(n2)
function maxSubArray(nums){
    let thissum, i, j, maxsum= -Number.MAX_VALUE;
    for(let i=0; i<nums.length; i++){
        thissum=0;
        for (let j = i; j<nums.length; j++){
            //少一次循环
            thissum += nums[j];
            if(thissum > maxsum){
                maxsum = thissum;
            }
        }
    }
    return maxsum;
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));