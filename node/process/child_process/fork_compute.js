const longComputation = () => {
    let sum = 0;
    console.info('计算开始');
    console.time('计算耗时');
    for(let i=0; i<1e10; i++){
        sum += i;
    }
    console.info('计算结束');
    console.timeEnd('计算耗时');
    return sum;
}


process.on('message', msg => {
    console.log(msg, 'process.pid', process.pid, 'process.ppid', process.ppid);
    sum = longComputation();
    process.send(sum);
})