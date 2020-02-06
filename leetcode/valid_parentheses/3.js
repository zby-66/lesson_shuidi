function longestValidParentheses(s) {
    //leetcode 32
    var max = 0; //最长长度
    if (s.length == 0 || s.length == 1) return max; //不匹配
    var stack = []; //使用了栈来实现匹配 空间复杂度O（n）
    //嵌套循环
    // 每位的括号它的有效匹配长度是可以跟有效匹配是一样的
    for (var i = 0; i < s.length; i++) {
        var tmpMax = 0; //当前括号的有效匹配长度 每次都重新开始
        for (var j = i; j < s.length; j++) { //从i开始，自己也算+1
            if (s[j] == '(') {
                stack.push('(');
                tmpMax++;
            } else if (s[j] == ')') {
                //右括号
                if (stack.length < 1) {
                    //栈是空的.有效匹配结束，算和
                    max = max < tmpMax ? tmpMax : max;
                    break;
                } else {
                    stack.pop(); //出栈
                    tmpMax++;
                }
            }

        }
        if (stack.length == 0){ //都匹配， 从当前位置到最后一个字符都是有效括号
            max = max<tmpMax?tmpMax:max;
        }
        stack = []; //清空为本次括号的服务
    }
    return max;
}

console.log(longestValidParentheses('()))()()'));
console.log(longestValidParentheses('(()))()()()'));