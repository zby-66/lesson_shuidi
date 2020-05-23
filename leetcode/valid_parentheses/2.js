//空间复杂度为O（1） 不用栈
function isValid(s){
    if (!s || s.length <1){
        return true;
    }

    var n = s.length; //括号字符串长度
    var sum=0; //用变量代替
    for (var i=0;i<n;i++){
        var c = s[i];
        if(c == '('){
            sum++;
        }else{
            if(sum == 0){
                return false;
            }else{
                sum--;
            }
        }
    }
    return sum == 0? true:false;
}
console.log(isValid('()'));//true