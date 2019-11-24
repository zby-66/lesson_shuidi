Page({
  scanCode() {
    wx.scanCode({
      onlyFromCamera: true,
      scanType: ['barCode'],
      success: res => {
        // wx.showToast({
        //   title: JSON.stringify(res.result),
        //   duration: 10000
        let isbn = res.result;
        // isbn ->到云了查一下
        //})
        //委派一朵云去查API
        wx.cloud.callFunction({
          name: 'bookinfo',
          data:{
            isbn: isbn
          },
          success: res => {
            console.log(res.result);
          }
        })
      }
    })
  }
})

