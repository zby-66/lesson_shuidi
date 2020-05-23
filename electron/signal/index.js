const WebSocket = require('ws');
// const events = require('events');
const code2ws = new Map()  // Map 维护了连接关系
// {"event":"login"}
//JSON.stringify({event: 'control', data: {remote:192615}})
// 长长久久 办会员，  ID
const wss = new WebSocket.Server({
  port: 8010
})

// console.log(wss instanceof events.EventEmitter);
wss.on('connection', function connection(ws, request) {
  // ws 每一个 用户
  // console.log(ws);
  let code = Math.floor(Math.random()*(999999-100000)) + 100000;
  code2ws.set(code, ws);

  ws.on('message', function incoming(message) {
    // 字符串，  二进制流 
    console.log('incoming', message);
    ws.sendData = (event, data) => {
      ws.send(JSON.stringify({event, data}))
    }
    // A B
    let parseMessage = {};
    // 下面的代码有什么风险？ 
    // node 的出错 单线程 crash  pm2 
    try {
      parseMessage = JSON.parse(message);
    } catch(e) {
      ws.sendError('message invalid')
      console.log('parse message error');
    }
    let { event, data} = parseMessage
    console.log(event, '+++++++++');
    if (event === 'login') {
      console.log('---------------');
      ws.sendData('logined', {code})
    } else if (event === 'control') {
      let remote = data.remote;
      console.log(remote)
      if (code2ws.has(remote)) {
        ws.sendData('controlled', { remote })
        ws.sendRemote = code2ws.get(remote).sendData
        ws.sendRemote('be-controlled', {
          remote: code
        })
      }
    }
  })

  
})