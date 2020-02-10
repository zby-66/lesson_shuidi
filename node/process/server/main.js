const http = require('http');

const server = http.createServer();

server.on('request', (req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');

    setTimeout(() => {
        res.end('hello');
    }, 1000)
});

server.listen(1314, () => {
    process.title = '小彭小彭可爱爆棚';
    console.log('进程id', process.pid);
})