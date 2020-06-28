function isArray(obj) {
  Object.prototype.toString.call(obj) == '[object Array]'
}

function isObject(obj) {
  Object.prototype.toString.call(obj) == '[object Object]'
}


function flatten(arr) {
  var arr = arr || [],
    resArr = [],
    len = arr.length
  for (var i = 0; i < len; i++) {
    if (isArray(arr[i])) {
      resArr = resArr.concat(flatten(arr[i]))
    } else {
      resArr.push(arr[i])
    }
  }
  return resArr
}

Array.prototype.flatten = function () {
  var resArr = []
  this.forEach(function (item) {
    Object.prototype.toString.call(item) == '[object Array]' ? resArr = resArr.concat(item.flatten()) : resArr.push(item)
  })
  return resArr
}

function flatten1(arr) {
  var arr = arr || []
  return arr.reduce(function (prev, next) {
    return Object.prototype.toString.call(next) == '[object Array]' ? prev.concat(flatten1(next)) : prev.concat(next)
  },[])
}

// Array.prototype.reduce(cb, init)

const flatten2 = arr => arr.reduce((prev, next) => Object.prototype.toString.call(next) == '[object Array]' ? prev.concat(flatten1(next)) : prev.concat(next))