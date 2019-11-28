//async 函数的修饰
const cloud = require('wx-server-sdk')
exports.main = async(event, context) =>{
  return event.userInfo
}