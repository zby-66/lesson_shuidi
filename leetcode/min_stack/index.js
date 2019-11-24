//操作系统底层进程
const arr = [];
arr.push('建宁');//向数组中加入元素
arr.push('曾柔');
arr.push('双儿');
arr.push('阿珂');
//队列， 栈
console.log(arr);
const ake = arr.pop();//出栈
//先进后出
console.log(arr);
arr.unshift(ake);//插入到队头
console.log(arr);
arr.unshift('苏荃');
console.log(arr);
const sq = arr.shift();//出队
arr.push(sq);
console.log(arr);