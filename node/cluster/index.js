const cluster = require('cluster');//多进程
const os =require('os');
if(cluster.isMaster){
    for(let i=0; i<os.cpus().length/2; i++) {
        //不做具体执行
        cluster.fork();
    }
}else{
    require('./app');
}
// console.log(os.cpus());