const fs = require('fs');
const image = 
fs.readFileSync('./cp.jpg').toString("base64");//同步执行 区别于回调函数

const AipOcrClient = require('baidu-aip-sdk').ocr;

const client = new AipOcrClient('17712423',
'EdwqyEWN9mVxQPGK3pyxxLGZ',
'S4GkboVfVUCVT1bfVKwtK4w2i0vRZWGd');

const options = {};
options["multi_detect"] = true;

client.licensePlate(image,options)
  .then(function(result) {
      console.log(result);
  })
  