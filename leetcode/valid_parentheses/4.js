function longestValidParentheses(s){
    //时间复杂度O（n）
    var max = 0;//返回最大长度初始化为零
    if (s.length == 0 || s.length ==1) return max;
    // 下标减法就是长度值
    var stack = [-1];//栈服务于有效口号匹配 刚开始匹配的 有一个哨兵结点-1
    for (var i =0; i<s.length; i++){
        //下标法，只要一次遍历。时间复杂度为O（n）
        if (s[i] == '('){
            //左括号 下标入栈
            stack.push(i);//i就是下标
        }else{
            stack.pop();//右括号，下标出栈
            if(stack.length<1){
                stack.push(i);//栈顶元素都没有了，那么前面的有效匹配结束，后面的开始，那就要减去当前的下标（-1），所有push当前的下标
            }else{
                max= Math.max(max, i-stack[stack.length -1]);//有效括号匹配
            }
        }
    }
    return max;
}
console.log(longestValidParentheses('(()))()'));