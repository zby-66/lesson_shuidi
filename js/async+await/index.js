let p = Promise.resolve(1);
let p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(234)
  }, 2000)
})
// 不是 简单 async -> *  yield -> await
// 转完之后 还得保证 顺序
function* test() {
  let a = yield p;
  console.log(a)
  let b = yield p2;
  console.log(b);
}
// 简单版本的实现
// 1：执行 generate 2： 而且保证顺序
function asyncTogenerate(gen) {
  let g = gen();
  function step(value) {
    // 处理 yield 返回值问题
    let info = g.next(value);
    if (info.done) {
      return;
    } else {
      // 把 yield 后面的东西(info.value) 直接 resolve
      Promise.resolve(info.value).then((res) => {
        // 下一个 yield 下一个 递归
        // 第一次 1
        step(res);
      })
    }
  }
  step();
}
asyncTogenerate(test);