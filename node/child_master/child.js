//process node 进程全局对象
process.on('message', (str) => {
    console.log('child' + str);
    //子进程 把活给干了后， 偷偷的跑到另一个CPU 挂载一个进 把多核能力运用起来
    process.send('hehe');
})