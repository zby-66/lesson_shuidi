中间件实现， 手写 body-parser
面试管  ？

1. 基础如何？ 
  处理请求, 网络基础， 报文， 

  POST 请求的报文

  POST /test  HTTP/1.1
  Host: 127.0.0.1:3000
  Content: text/plain;charset=utf-8
  Content-Encoding: gzip 

  请求体  chyingp

  缺什么东西？

2. bodyParser 这些需求 
  - 处理不同类型的请求体
  - 处理不同的编码 
  - 处理不同的压缩类型
  - 异常 开发中的需求