# 简历提升 关键词变关键句

- 如何设置一个科学合理的url
  RESTFul 它是后端暴露资源的解决方案， 多年来一直受追捧 url里不要有动词
  1. HTTP动词
    GET/POST/DELETE/PATCH/PUT.... 动词仅限这些
  2. 每一个url代表一种资源 /posts/1 名词
  3. 客户端通过HTTP动词，对服务器资源进行操作，实现表现层状态转化
   
- 设计一个url 网上汇款，从账户1向账户2汇款1314元，url？
  错误 POST /accounts/1/transfer/1314/to/2
  正确 /transaction 交易
  POST /transaction HTTP/1.1
  Host: 127.0.0.1
  
  from=1&to=2&amount=1314.00


 - GraphQL,让前端更好的使用及定义接口， swagger API文档， Apollo 不浪费数据， 数据格式更加严谨