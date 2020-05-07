## 前端工作流 fe workflow   webpack


- webpack 配置
  6个知识点
  二线面试必备
- webpack 架构
  1. 源头 package.json
    webpack 不直接出厂？ 架构 dev build
    cross-env 服务器无差别环境变量配置 node npm
    哪些？
    并行同时考虑工作流架构
    将编译工作（工作流）通过目录 开发框架的一项
  2. webpack 重要性
    写代码， 养孩子一样 每天运营项目，
    改一点点， webpack 天天用
  3. base.js 同时服侍 dev.js build.js
   模块化   把基础配置做好， 向外输出
  4. webpack 其他的module及插件处理
     config.js
  5. lib 把module 放在config 目录 一个文件一件事
    findSync 所有js 文件 组成数组