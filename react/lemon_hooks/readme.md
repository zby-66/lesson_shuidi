1. sourcemap
2. --inline
3. polyfill
4. css 处理
5. react 新特性带来的fragment


react/vue 开发， 打包成/dist目录，给后端 或自己的dockers或者nginx 服务代理

es6+ 低端浏览器可以被支持
两种功劳 1.babel-preset-env + babel-core 降级处理
2. polyfill 会把一些无法降级 Promise Array map reduce 手工实现一下  垫片（补全）
3. inline hot 区别
   都是改变后刷新内容  inline 强制刷新 ，弊端是mvvm状态会丢失 
   hot  hmr hot module reload --inline --hot 如果是hmr（状态） 部分有更新 hot
   如果不是hmr部分，使用inline 强制刷新

css 压缩 OptimizeCssAssetsPlugin

webpack 定位错误怎么做  sourcemap