function bubbleSort(arr) {
  var flag;
  for (var i = arr.length - 1; i >= 0; i--){
    flag = false;
    for (j = 0; j < i; j++){
      if (arr[j] > arr[j + 1]) {
        flag = true;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

      }
    }
    if (!flag) {
      break;
    }
  }
}

function bubbleSort2(arr) {
  var flag;
  for (var i = arr.length - 1; i >= 0; i--){
    flag = false;
    for (var j = 0; j < i; j++){
      if (arr[j] > arr[j + 1]) {
        flag = true;
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
      }
    }
    if (!flag) {
      break;
    }
  }
}