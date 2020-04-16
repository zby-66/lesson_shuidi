# webpack 打包一切静态资源， loader


## webpack为web应用工作

- 入口核心文件.js文件 放在底部加载
  dev webpack 把工作放在内存中
  express web server dist.js webpack内部生成  就是static_server起作用

1. css-loader(负责引入解析css文件) style-loader（把解析的静态资源内联到标签里面） 的区别
   
   ### 如果在JS中导入了css，那么就需要使用 css-loader 来识别这个模块，通过特定的语法规则进行转换内容最后导出css-loader会处理 import / require（） @import / url 引入的内容。

   ### style-loader 是通过一个JS脚本创建一个style标签，里面包含一些样式。style-loader是不能单独使用的，应为它并不负责解析 css 之前的依赖关系，每个loader的功能都是单一的，各自拆分独立。(样式插入到DOM中)

    js 引入css 
    webpack 建立依赖关系的过程
    import require path extension
    ext => loader 对应的
    package.json 分析 报错
2. use 定制性 webpack 不是用来学的， 是用来用的，用来修的 webpack 考点多半来自你是否会修
   loader
   js 处理 css 
   web 应用而来  style 行内样式<style></style>
   css 文件 引入<link>

3. base64 何时启动？ webpack 打包图片时有什么优化功能，度怎么把握？
   base64优秀在减少了请求的数量，减少了网页请求并发数，减少网页打开时间
   确定图片太大时，js 体积暴增  需要给图片大小设置一个上限

4. loader 由下至上执行