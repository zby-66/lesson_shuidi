const Koa = require('./lib/application');
let app = new Koa();

app.use((ctx) => { // ctx 对象的构建放弃了
  // res.end('hello world');
  console.log(ctx.req.url);
  console.log(ctx.request.req.url);
  ctx.body = 'hello world'
})

app.listen(3000)