function maxSubArray(nums){
    let thissum,maxsum=-Number.MAX_VALUE;
    for (let i = 0; i < nums.length; i++) {
        for(let j=i;j<nums.length; j++) {
            // 每一趟的和是
            thissum=0;
            for(let k=i;k<=j;k++){
                // 最大子和的数
                thissum += nums[k];
            }
            if(thissum>maxsum){
                maxsum=thissum;
            }
        }
    }
    return maxsum;
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
