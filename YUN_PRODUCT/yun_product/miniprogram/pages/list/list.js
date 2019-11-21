const db =wx.cloud.database();//上云
const productsCollection =db.collection('products');//表 collection

Page({
    data(){
        products:[]
    },
    onLoad(){
        productsCollection
        .get()
        .then(res=>{
           this.setData({
               products:res.data
           })
        })
    }

})