var removeDuplicates = function(nums) {
    const size = nums.length; //原数组的长度
    let slowP = 0; //慢指针pre
    for(let fastp = 0; fastp<size; fastp++){//快指针cur
        // console.log(nums[fastp]);
        if(nums[fastp] !== nums[slowP]) {//从同一个位置0
            slowP++;//不一样
            //solwp 挪窝了，新的位置要确立新的数， cur 指向的数
            nums[slowP]= nums[fastp];//设置每个位置为不重复的数 确立了地位
        }
    }
    return slowP + 1;//slowp停下来的地方
    return nums
}

console.log(removeDuplicates([1,1,2,6]));