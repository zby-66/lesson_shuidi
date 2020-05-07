var temp = []
function uniq(array){
  var result = []
  recursion(array) // 调用递归将多维数组变为一维数组再去重
  for (var i = 0, len = temp.length;i < len;i ++){
    for(var j = i + 1; j < len;j ++){
      if (temp[i] === temp[j]) {
        i ++
        j = i
      }
    }
    result.push(temp[i])
  }
  return result
}

// 新增递归函数
function recursion(array){
  var len = array.length
  for (var i = 0; i < len ;i ++) {
    if (typeof array[i] == 'object') { // 如若数组元素类型是object，则递归
      recursion(array[i])
    } else {
      temp.push(array[i]) // 否则添加到temp数组中
    }
  }
}
var arr = [1,[2,3],[3,2,[1,6,[3,5,'3']]]]
console.log(uniq(arr))
