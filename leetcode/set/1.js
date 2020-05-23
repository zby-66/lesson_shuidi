/**
* 思路：获取没重复的最右一值放入新数组
* 从第一个值开始，将其与后面的值依次比较，
* 如若相等则终止当前循环并进入顶层循环的下一轮判断
*/
function uniq(array) {
  var temp = []
  var index = []
  var i = array.length
  for (var i = 0;i < l;i ++){
    for(var j = i + 1; j < l;j ++){
      if (array[i] === array[j]) {
        i ++
        j = i
      }
    }
    temp.push(array[i])
    index.push[i]
  }
  return temp
}
var arr = [1,2,7,3,5,2,3,2]
console.log(uniq(arr))
