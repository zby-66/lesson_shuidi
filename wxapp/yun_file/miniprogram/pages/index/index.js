const db = wx.cloud.database();
const userInfo = db.collection('userInfo');
Page({
  navigateTo() {
  },
  getUserInfo: function (result) {
    console.log(result);
    //反馈信息有限，上云后会拿到用户的openid
    wx.cloud.callFunction({
      name: 'getOpenId',
      complete: res => {
        console.log(res);
        //怎么存储，怎么做。
        userInfo
          .where({
            _openid: res.result.openId
          })
          .count()
          .then(res => {
            console.log(res);
            if (res.total == 0) {
              userInfo.add({
                data: result.detail.userInfo
              })
                .then(res => {
                  console.log(res);
                  wx.navigateTo({
                    url: '../add/add',
                  })
                })
                .catch(err => {
                  console.log(err)
                })
            } else {
              wx.navigateTo({
                url: '../add/add',
              })
            }
          })

      }
    })
  }
})
