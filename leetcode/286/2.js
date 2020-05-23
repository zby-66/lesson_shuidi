var massage = function (nums) {
    var a = 0 ;
    var b = 0;
    for(var i = 0;i < nums.length; i++){
        var c = Math.max(b, a + nums[i]);
        a = b;
        b = c;
    }
    return b;
}
