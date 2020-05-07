//es6 支持的
// 手写一个findIndex
function isBigEonough(element) {
    console.log(element);
    return element >= 15;
}
console.log([12,5,8,130,44].findIndex(isBigEonough));