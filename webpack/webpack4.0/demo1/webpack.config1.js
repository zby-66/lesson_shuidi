// console.log(process.env.NODE_ENV)
// 1. 开发的时， vue-cli , webpack 内存中编译
// 2. 上线时， 压缩， 优化， 代码分离
const path = require('path');
module.exports = {
  entry: './src/main', //入口文件  index.css loader
  mode: process.env.NODE_ENV, // development  product
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}