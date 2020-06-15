function debounce(fn) {
  let timeout = null; //创建应该标记来存放定时器的返回值
  return function () {
    clearTimeout(timeout); // 每当用户输入的时候把前一个 settimeout clear 掉
    timeout = setTimeout(() => { // 然后又创建一个新的 settimeout, 这样就能包装输入字符后的 interval 间隔内如果还有字符输入话，就不会执行 fn 函数
      fn.apply(this, arguments);
    }, 500);
  }
}


function throttle(fn) {
  let canRan = true; // 通过闭包保存一个标记
  return function () {
    if (!canRan) return; // 在函数开头判断标记是否为true, 不为true则return
    canRan = false; // 立即设置过i为false
    setTimeout(() => { // 将外部传入的函数的执行放在setTimeout中
      fn.apply(this, arguments);
      // 完成后设置为true
      canRun = true;
    }, 500);
  }
}