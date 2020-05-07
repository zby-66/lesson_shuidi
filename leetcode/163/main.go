func majorityElement(nums []int)  int{
	majority,count := nums[0], 1
	for i :=1; i < len(nums);	i++ {
		if count == 0{
			majority = nums[i]
		}
		if nums[i] == majority{
			count++;
		}else{
			count--;
		}
	}
	return majority;
}
