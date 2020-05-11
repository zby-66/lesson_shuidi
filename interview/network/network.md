- web 交互的数据格式是什么？有没有方法 在用户请求时提供多种数据返回格式的选择？
  Ajax json/html
  传统老浏览器 text/html
  动态web ajax text/json
  mvc mvvm 请求头的分析
- 计算机网络这块的知识
  1. 为什么http createServer callback req+res 表达出来呢？
   浏览器n和服务器1之间的通信  HTTP协议
   http协议构建与tcp/ip协议之上的 网络应用协议
HTTP/0.9  1991 用于学术交流，在网络之间传输HTML 超文本内容
   采用请求响应的模式
   tcp 安全连接管道
   - http 基于tcp 客户端 ip地址（dns domain),端口，三次握手，建立连接
      dns 是一个递归查找的过程
      浏览器缓存 -》 host 文件 没有找到-》运营商 还没有-》美国服务器dns源头

      四次挥手 断开连接 1：n
      发送完请求后
      1.  A-》tcp 发送完毕 B FIN 报文
      2. B 接受到后，不会立即用FIN 报文回复主机A，主机A发送一个确认ACK，同时通知之间相信的应用程序，（防止A 多次发送FIN）
      3. TCP向A发送FIN 报文
      4. A收到FIN报文，B ACK 表示彻底释放

1.0 版本
  1994年 支持多文件下载
  text/html  image/png text/css  text/js
  accept：text/html
  accept-encoding： gzip
  accept-Charset: utf-8
  accept-language: zh_CN
  请求体 POST
  状态码
  Cache 机制 Last Modify
  userAgent 作用：User Agent中文名为用户代理，是Http协议中的一部分，属于头域的组成部分，User Agent也简称UA。它是一个特殊字符串头，是一种向访问网站提供你所使用的浏览器类型及版本、操作系统及版本、浏览器内核、等信息的标识。通过这个标识，用户所访问的网站可以显示不同的排版从而为用户提供更好的体验或者进行信息统计。
  - iphone/android 判断是手机还是电脑，型号
  - log日志处理 阿里下单的30% iphone 用户花了70%的钱



  2. 在哪个版本HTTP支持 png的解析
  3. 雪碧图 http 请求，合并到一张背景图上，前端性能优化技术，为什么现在不问，哪个http版本
  4. userAgent 在哪个版本出现
  5. 哪个版本极大提升了下载速度