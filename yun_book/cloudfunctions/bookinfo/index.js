// // 云函数入口文件
// const cloud = require('wx-server-sdk')

// cloud.init()

// // 云函数入口函数
// exports.main = async (event, context) => {
//   const wxContext = cloud.getWXContext()

//   return {
//     event,
//     openid: wxContext.OPENID,
//     appid: wxContext.APPID,
//     unionid: wxContext.UNIONID,
//   }
// }
var clound = require('wx-server-sdk');//云服务器
var rp = require('request-promise');// npm 各APi 发出请求
clound.init();

exports.main = async(event, context) => {
  console.log(`http://feedback.api.juhe.cn/ISBN?sub=${event.isbn}&key=cd258034cdf4920d342c6d490f0a7471`);
  var res = rp (`http://feedback.api.juhe.cn/ISBN?sub=${event.isbn}&key=cd258034cdf4920d342c6d490f0a7471`)
  .then(html => {
    return html;
  })
  return res;
}