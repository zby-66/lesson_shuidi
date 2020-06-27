var http = require('http');
const { EventEmitter } = require('events');

var parsePostBody = function(req, done) {
  // node libuv 事件驱动机制 event loop 
  var length = req.headers['content-length'];
  // console.log(length, '----------');
  var arr = [];
  var chunks;
  // console.log(req instanceof EventEmitter, '------------------');
  req.on('data', buff => {
    arr.push(buff);
  });

  req.on('end', () => {
    chunks = Buffer.concat(arr);
    done(chunks);
  })
}

var server = http.createServer(function(req, res) {
  // console.log(req);
  parsePostBody(req, (chunks) => {
    var body = chunks.toString();
    res.end(`Your nick is ${body}`);
  });
});

server.listen(3000);