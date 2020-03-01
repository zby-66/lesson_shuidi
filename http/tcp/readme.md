## TCP协议灵魂之问，巩固你的网络底层基础

1. tcp和udp 的区别
    共同点： 位于传输层（两种协议，应用场景，传输内容）
    应用层(http)->表示层(解码编码)->会话层（session）->传输层（tcp）->网络层（IP）->数据链路层（mac地址）->物理层 OSI七层（Open System Interconnection）
    Web  Tcp/Ip
    TCP Transmission Contro System 控制


    客户端 Client 浏览器 index.html 10kb html  src 并发http请求
    服务器 Server
    HTTP协议 domain -》 服务器IP 建立请求 req 
    res -> Client 
    10kb 字节流
    Tcp 建立连接 可信 可控制
    index.html 10kb 排序 不能少传
    - TCP 是一个面向链接的，可靠的，基于字节流的传输层协议
