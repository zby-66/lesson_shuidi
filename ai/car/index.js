// fileSystem node的内置模块  读取项目中的文件
const fs = require('fs');
const AipImageClassifyCLient = require("baidu-aip-sdk").imageClassify;//引入百度aip分类客户端
// console.log('hello node');
const image = fs.readFileSync("car.jpg").toString("base64");//将图片字符串化打印成base64格式
// console.log(image);
const client = new AipImageClassifyCLient('17711761', 'M6LPCUomgCL2dI75lzuwFTbu', 'd4x1xM3zh5WKU9SvToaj5CiAWtwOCsUX');

client
    .carDetect(image)
    .then(function(result) {
        console.log(result)
    })
// AipImageClassifyCLient
// //回调函数
// // 文件在哪？磁盘里
// // js 在哪里运行？ 内存 I/O操作
// fs.readFile('./textfddss.txt', function(err,data) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log(data.toString());
// })
