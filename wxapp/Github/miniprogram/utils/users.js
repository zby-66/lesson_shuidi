// 将用户模块独立
const signIn = (token) => new Promise((reslove,reject) =>{
    wx.setStorageSync('token', token);
    wx.request({
        url: 'https://api.github.com/user',
        data: {},
        header: Object.assign({'Authorization': token},
        {}),
        method: 'GET',
        success: function(res) {
            wx.setStorage({
                key: 'user',
                data: res.data
            })
            reslove(res.data);
        }
    })
})
module.exports ={
    signIn
}