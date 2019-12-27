- 发布者订阅模式
- 事件监听 执行逻辑？
    浏览器 chrome.exe 进程
    js 是chrome里的语言编译器来执行的
    HTML+css  DOM树 树 数据结构
    js 执行 脚本 
    事件 异步
- 注册事件？micro event 回调函数
- 事件发生时怎么执行？ 
js 单线程语言  onLoad
轮循注册事件的地方


订阅 ，发布者模式

房 楼房  发布者（有房卖的信息）
买房者 订阅者
建模 

- listen 加订阅者 
saleOffice.clientList.push(fn); 形成订阅关系
- saleOffice 发布者
    trigger 有事通知 
    把所有的订阅者都执行一遍
- apply 函数除运行外， 指定其this指向 arguments 

- document.body.addEventListener('click', fn);
    发布者 document.body 有订阅者 fn
- document.body.events = []
    click
    trigger 
        event.each(fn)

