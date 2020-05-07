<template>
<div class="index">
    <div class="search">
      <div @click="toMappage">{{cityName}}</div>
      <div @click="toSearch">
        <input type="text" placeholder="搜索商品">
        <span class="icon"></span>
      </div>
      <div class="swiper">
        <swiper class="swiper-container" indicator-dots="true" autoplay ="true" interval="3000" circular="true" duration="500">
          <block v-for="(item, index) in banner" :key="index">
            <swiper-item class="swiper-item">
              <image class="slide-image" :src ="item.image_url"></image>
            </swiper-item>
          </block>
        </swiper>
      </div>
    </div>
</div>
</template>

<script>
import amapFile from "../../utils/amap-wx.js";
import { mapState, mapMutations } from "vuex";
import {get} from '../../utils'
export default {
  data () {
    return {
        banner: []
      }
    },
    computed: {
    ...mapState(["cityName"])
  },
  methods: {
    ...mapMutations(["update"]),
    toMappage() {
      var _this = this;
      // 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
      wx.getSetting({
        success(res) {
          //如果没有同意授权,打开设置
          if (!res.authSetting["scope.userLocation"]) {
            wx.openSetting({
              success: res => {
                _this.getCityName();
              }
            });
          } else {
            wx.navigateTo({
              url: "/pages/mappage/main"
            });
          }
        }
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
          _this.update({ cityName: data[0].regeocodeData.formatted_address });
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
    async getDate(){
      const data = await get('/index/index')// 后端接口
      console.log(data);
    },
    toSearch() {
      wx.navigateTo({
        url: "/pages/search/main"
      });
    },
  }
}
</script>

<style lang="less" scoped>
@import "./style.less";

</style>