var massage = function (nums) {
    var len = nums.length;
    if (len === 0) return 0;
    if (len === 1) return nums[0];
    var dp = [];
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for (var i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }
    return dp[len - 1];
};
