- Koa 是最流行的node 轻量级框架
egg.js 基于koa的二次开发
- koa new -> app -> listen
    /bin/www
    www文件就是网站项目的启动文件
    http.createServer(app.callback());
- 模板
    views
    koa-views()
    app.use() 启用views中间件
    模板在哪里，使用哪种模板引擎 pug
- 路由 分层
    routes/index.js
    koa-routes()
    .get post
    index.routes()
    app.use()
- logger
    koa-logger use
- 出错模块
- https://img.bosszhipin.com/
- 静态资源 服务器端资源
IP
静态资源
img.bosszhipin.com
dns 解析？网络供应商 列表
公司会在网络供应商机房里去装一些cdn机器
本地没有？ 去中央服务器里请求一次 缓存在本地
