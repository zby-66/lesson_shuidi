# react ts 
  思想 入门 和webpack结合起来
  react + ts 是必问

  webpack-dev-server webpack  实时编译 编译同时，启动live-server http服务
  Start dev
  webpack 编译 nginx docker 阿里云 编译阶段 buil node 
  1. --inline   --hot
   热更新，让我们的页面从左到局部更新 不用丢失组件状态 MVVM data
    //1. 打开浏览器--open
    //2. 刷新浏览器--inline
    //3. 重新加载改变的部分--hot
  2. hash是什么？ 
     文件指纹
     文件版本
  3. babelrc presets env
  4. entry 从某个文件 require import webpack __require__
     单点入口， 组织起来一个依赖关系 业务常变 hash 需要 通知客户端更新
     把几个月，永远不更新的文件 作为独立的入口，
     entry 可以有多个打包的入口吗？ 为什么
     vendor 库 vue.js vuex vue-router
     提升了编译速度， 同时保障及改善了用户的浏览体验 缓存