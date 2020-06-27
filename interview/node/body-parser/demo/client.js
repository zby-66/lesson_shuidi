// 发送请求头
var http = require('http');

var options = {
  hostname: '127.0.0.1',
  port: '3000',
  path: '/test',
  method: 'POST',
  headers: {
    'Content-Type': 'text/plain',
    'Content-Encoding': 'identity'
  }
}

http.request(options, (res) => {
  console.log(res);
});

var client = http.request(options, (res) => {
  console.log(res);
});
client.end("chyingp");
