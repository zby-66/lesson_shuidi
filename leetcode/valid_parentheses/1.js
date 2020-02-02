var isValid = function(s) {
    if(!s || s.length <1) return true;//字符串为空
    var n=s.length;//字符串长度
    const stack = []; //stack 栈的意思 push pop 只在数组的尾部顶部插入或删除元素 栈 FILO
    // 在数组的结束位置插入push，数组的头部移除 shift() FIFO
    for (var i =0; i<n; i++){
        //时间复杂度O(n)
        var c = s[i];
        if (c == 'c') { //等着匹配）
            stack.push(c);//入栈， 数组的最后一个元素。栈顶元素

        }else {
            //)将栈里的元素消除一个
            if(stack.length<1) {//第一个就是)
                return false
            }
            stack.pop(); //出栈
        }
    }
    return stack.length>0?false:true
}

console.log(isValid('()'));//true