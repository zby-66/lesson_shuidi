function longestValidParentheses(s) {
    if (!s || s.length < 1) return 0; //空
    var left = right = max = 0; //用两个变量代替模拟栈的意义
    // left 是当前还在匹配的左边括号的数量，right是当前右边括号的数量
    for (var i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            left++; //入的数量
        } else {
            right++; //右边入栈
        }
        if (left == right) {
            max = Math.max(max, 2 * right);
        } else if (right > left) {
            //后面就无效了
            left = right = 0; //重新开始
        }
    }
    left = right =0;
    for (var i = s.length-1; i>=0;i--){
        //倒着遍历一遍，不需要栈来概念化的表达匹配
        if(s[i] == '('){
            left++;
        }else{
            right++;
        }
        if(left ==right){
            max = Math.max(max, 2*left);
        }else if(left>right){
            left = right = 0;
        }
    }
    return max;
}

console.log(longestValidParentheses('(()'));