//主进程
const cp = require('child_process');//创建子进程
const child_process = cp.fork(__dirname + '/child.js')//fork（）函数通过系统调用创建一个与原来进程几乎完全相同的进程，
// 也就是两个进程可以做完全相同的事，但如果初始参数或者传入的变量不同，两个进程也可以做不同的事。
// 一个进程调用fork（）函数后，系统先给新的进程分配资源，例如存储数据和代码的空间。
// 然后把原来的进程的所有值都复制到新的新进程中，只有少数值与原来的进程的值不同。相当于克隆了一个自己。

// 公司 天下没有难做的生意 18人 员工
child_process.send('hah');   //有些任务要交给他
child_process.on('message', (str) => {
    console.log('parent', str);
})