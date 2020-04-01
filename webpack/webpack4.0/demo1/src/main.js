// webpack 怎么在js文件里处理css文件
const css = require('css-loader!./index.css')
const a = 100

console.log(a,css)
