//数组去重
/**
 * 
 * @param {Array} arr
 * @return {Array} 
 */
// function unique(arr) { es5
//function 关键字没有， 
// es6 箭头函数 （） => { }
let fn;
console.log(typeof fn);// undefined 未定义
fn = null;
console.log(typeof fn);// null 打印出来是object
fn = () => { };
console.log(typeof fn); // function
const unique = (arr) => {
    let res = [];//数组
    for (var i = 0, arrLen = arr.length; i < arrLen; i++) {
        var current = arr[i]; // 基地 局部变量， 缓存值
         if (res.indexOf(arr[i]) == -1 ) {
             res.push(current)

         }
        //如果res 数组中就不能加入
        //arr[i]
        // let isIn = false;
        /* /for (var j = 0; j < res.length; j++) {
            if (arr[i] === res[j]) {
                // isIn = true;
                break;
            }
        }*/
        //没有出现
        // if (!isIn) {
        //     res.push(arr[i]);
        // }
        // 否则push res
        if (j === res.length) {
            res.push(arr[i]);
        }
    }

    return res;
}

var arr = ['1', 2, 3, 2, 4, 1];
console.log(unique(arr));
console.log(typeof unique == 'function' && unique
    (arr))
