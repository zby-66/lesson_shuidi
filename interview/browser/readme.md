# 从出入URL到页面展示，这中间发生了什么？ 越细越好
1. 多进程架构
2. IPC（Inter-Process Communication，进程间通信）：提供了各种进程间通信的方法


3. 注重细节
4. 从想当然到理所应当 V8引擎及浏览器架构
5. 全面考察前端是否具有完整计算机本科学习能力的代表
6. web 开发 网络 操作系统
7. 然后规范的回答这道题，分水岭


动手实操
1. 浏览器 proxy 通过浏览器来代理我们访问的页面
    可以当搜索框使用 默认的搜索引擎
    url 
    juejin.im 补全为 htts://juejin.im/ 用户体验做的很好 补全协议
2. 浏览器中 操作系统里的进程
   细节， 像代码架构分层，流程细化
   web 访问 浏览器chrome 多进程的架构模式，最流畅，用更多的内存 比IE优秀
   打开一个页面 至少有四个进程 （浏览器主进程、）

    chrome 多进程架构带来现代浏览器的快速访问体验， 我们以chrome为例
   - 浏览器主进程（高并发）：
        1. 启动浏览器: 提供的交互（输入URL） 子进程管理（进程间通信）
        2. 文件存储功能:  文件缓存 cookie localstorage sessionstorage .... BOM Browser Object Model
   - GPU渲染进程  DOM树渲染 : 提供html css js 图片 可交互的页面
   - NetWork Service（网络进程）：提供下载功能

  执行过程
    注：访问过程 问题回答清楚 执行流程 进程间的流程
    1. 浏览器进程就收到用户输入URL 请求时  在主进程， IPC 将url 交给 网络进程
    2. 网络进程中发起真正的URL请求 url 请求是由 c++模块 node -> c++
        2.1 request

        2.2 response
    3. 网络进程响应头数据，（头 + body) 通知 渲染进程开始准备干活
        text/html test/json image/jpg 提前通知渲染 
        网络协议 TCP HTTP
        1. DNS 解析 DNS 服务器 Domain name server  domain -> ip
   
        浏览器进程 提交导航信息（CommitNavigation) 消息到渲染进程
    4. 渲染进程收到提交导航信息后， 开始准备接受html 直接和网络进程建立数据通道
    5. 渲染进程会向浏览器进程发送“确定提交”，准备好接受和解析页面数据
    6. if/else 移除之前的页面 body 到了 渲染进程渲染。页面的重绘和重排 提交 确定文档消息
   <!-- 主进程 管家 chrome 浏览器
   子进程
   GPU 进程 渲染进程 GPU加速 3d 渲染 three.js  css transform 3d
   NetWork Service -->
   标签页
   并行执行
3. 发送请求？