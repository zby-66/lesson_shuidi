<template>
<div class="index">
    <div class="search">
      <div @click="toMappage">{{cityName}}</div>
      <div @click="toSearch">
        <input type="text" placeholder="搜索商品">
        <span class="icon"></span>
      </div>
    </div>
</div>
</template>

<script>
import amapFile from "../../utils/amap-wx.js";
export default {
  data () {
    return {
      cityName: '南昌'
    }
  },
  methods: {
    toMappage () {
      //通过wx.getSetting 先查询用户是否授权 "scoped.record"
      let _this = this;
     wx.getSetting({
        success(res) {
          //如果没有同意授权,打开设置
          // console.log(res)
          if (!res.authSetting["scope.userLocation"]) {
            wx.openSetting({
              success: res => {
                //获取授权位置信息
                _this.getCityName();
              }
            })
          } else {
            wx.navigateTo({
              url: "/pages/mappage/main"
            });
          }
        },
        fail: (err) =>{
          console.log(err)
        },
        complete: () =>{}
      });
    },
    getCityName() {
      var _this = this;
      var myAmapFun = new amapFile.AMapWX({
        key: "e545e7f79a643f23aef187add14e4548"
      });
      myAmapFun.getRegeo({
        success: function (data) {
          //成功回调
          console.log(data);
          // data[0].regeocodeData.formatted_address
          // _this.cityName = data[0].regeocodeData.formatted_address;
          // _this.update({ cityName: data[0].regeocodeData.formatted_address });
        },
        fail: function (info) {
          //失败回调
          console.log(info);
          //如果用户拒绝授权
          // 默认为北京
          _this.cityName = "北京市";
          _this.update({ cityName: "北京市" });
        }
      });
    },
  }
}
</script>

<style lang="less" scoped>
@import "./style.less";

</style>