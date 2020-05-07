// 云函数入口文件
// 云sdk
const cloud = require('wx-server-sdk')//wx-server-sdk小程序云服务器短的sdk
const got = require('got')
//初始化
cloud.init()

// 云函数入口函数
//async表示异步 await
//event 出事 小程序客户端 callFunction event 代表小程序 
//context 上下文
exports.main = async (event, context) => {
  let getResponse = await got('httpbin.org/get')
  //console.log(getResponse, '+++++++++++++++');
  let postResponse = await got('httpbin.org/post',{
    method: 'POST',//加密的
    headers:{
      'Content-Type':
      'application/json'
    },
    body: JSON.stringify({
      title: '这是标题',
      value: 123
    })

  })
  return postResponse.body

    //url:getResponse.url
  
  
//   const wxContext = cloud.getWXContext()

//   return {//return给小程序
//     event,
//     openid: wxContext.OPENID,
//     appid: wxContext.APPID,
//     unionid: wxContext.UNIONID,
//   }
}