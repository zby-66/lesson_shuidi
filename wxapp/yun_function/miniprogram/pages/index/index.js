Page({
  http(){
    //要去其他网站拿数据
    //上云吧 上云之后计算能力特别强 构建前端， 后端合作
    wx.cloud.callFunction({
      name: 'http'
    })
    //从云下来
    .then(res =>{
      console.log(res);
    })
  }
})