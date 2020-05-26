// Koa  类的提供   iphone  简约之美
let http = require('http');
let EventEmitter = require('events')
let context = require('./context')
let request = require('./request')
let response = require('./response')

class Koa extends EventEmitter {
  constructor() {
    super()
    // 未来中间件 
    this.fn = undefined; // 数组   callback 
    this.context = context;
    this.request = request;
    this.response = response;
  }
  use(fn) { // 先支持一个函数的callback 
    // 异步
    this.fn = fn;  // function callback   middlewares 
  }
  createContext (req, res) { // 创建ctx  
    // es6  context  ctx   context.js 模块   fn ctx.body 
    const ctx = Object.create(this.context); // 继承原对象 ctx 在增加属性时不影响原对象
    // ctx.body = 'dfdfdf';
    const request = ctx.request = Object.create(this.request);
    const response = ctx.response = Object.create(this.response);
    ctx.req = request.req = response.req = req;
    ctx.res = request.res = response.res = res;
    request.response = response;
    response.request = request;
    
    return ctx;
  }
  handleRequest(req, res) {
    // 加工  ctx 
    let ctx = this.createContext(req, res); //创建ctx 
    this.fn(ctx); // 调用用户给的回调, 把ctx 给用户用
    res.end(ctx.body); // ctx.body = 'hello world'  返回给用户
  }
  listen(...args) { // args  port   callback 
    // this.fn 接受的是  (req, res) => { } 怎么实现
    // 交给中间处理函数， req, res 加工成   ctx 他的内部调用  this.fn 
    let server = http.createServer(this.handleRequest.bind(this)); // callback 
    server.listen(...args) // 
  }
}

module.exports = Koa