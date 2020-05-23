// web worker 计算hash 新创建线程 
const http = require('http');
const fork = require('child_process').fork;// 创建新的进程



http.createServer((req, res) =>{
    const compute = fork('./fork_compute.js');
    // const sum = longComputation();
    compute.send('开启一个新的进程');
    compute.on('message', sum => {
        res.end(`小彭算出sum 为${sum}`);//无法识别中文
    })
}).listen(5200, () =>{
    console.log(process.pid);
});