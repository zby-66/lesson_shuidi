# Async/Await 如何通过同步的方式实现异步?
- async/await 是 Generator 的语法糖, 通过 Generator/yield 实现
```js
// Generator
run(function*() {
  const res1 = yield readFile(path.resolve(__dirname, '../data/a.json'), { encoding: 'utf8' });
  console.log(res1);
  const res2 = yield readFile(path.resolve(__dirname, '../data/b.json'), { encoding: 'utf8' });
  console.log(res2);
});

// async/await
const readFile = async ()=>{
  const res1 = await readFile(path.resolve(__dirname, '../data/a.json'), { encoding: 'utf8' });
  console.log(res1);
  const res2 = await readFile(path.resolve(__dirname, '../data/b.json'), { encoding: 'utf8' });
  console.log(res2);
  return 'done'；
}
const res = readFile();
```
- 可以看到，async function 代替了 function*，await 代替了 yield，同时也无需自己手写一个自动执行器 run 了
- 现在再来看看async/await 的特点：
  - 当 await 后面跟的是 Promise 对象时，才会异步执行，其它类型的数据会同步执行
  - 执行 const res = readFile(); 返回的仍然是个 Promise 对象，上面代码中的 return 'done'; 会直接被下面 then 函数接收到
```js
res.then(data => {
  console.log(data); // done
});
```
# 异步笔试题
```js
async function async1() {
    console.log('async1 start');//2
    await async2();
    console.log('async1 end');//6
}
async function async2() {
    console.log('async2');//3
}
console.log('script start');//1
setTimeout(function() {
    console.log('setTimeout');//8
}, 0)
async1();
new Promise(function(resolve) {
    console.log('promise1');//4
    resolve();
}).then(function() {
    console.log('promise2');//7
});
console.log('script end');//5
```