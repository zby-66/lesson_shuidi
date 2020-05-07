//predicate 用户自定义函数
//返回合条件的元素下标 如果没有找到返回-1
'use strict';
function findIndex(array, predicate, context) {
    for(var i =0;i<array.length; i++){
        // 函数执行的， 要考虑他的上下文环境
        if(predicate(array[i], i)){
            return i;//predicate 是断言，大部分情况也是个断言函数，主要用于做匹配用的

        }
    }
    return -1;
}
//函数作为参数  JS里函数是一等对象

console.log(findIndex([1,2,3,4], function(item, i){
    console.log(this);
    if(item == 3) return true;
},[1,2,3,4]));