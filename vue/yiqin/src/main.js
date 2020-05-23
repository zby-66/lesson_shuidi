import Vue from 'vue'
import App from './App.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import View from './views/View.vue'
// 1.引入vue-router
import VueRouter from 'vue-router'
// 2. 如何实现 不同城市疫情的查看?
// 热干面， 页面支持热更新  SPA single page application
// http://101.200.145.232/#/jiangxi
// http://101.200.145.232/#/hubei   全家桶 vue-router
//全局启用router
Vue.use(VueRouter) //全家桶 路由 url 改变， 页面热干面 

Vue.config.productionTip = false
// 入口  倚天剑vue  屠龙刀react 
// 2. router放到 实例上去
//网站是有很多个路径的 路由对象 点链接 vue-router 哨兵
//前端路由  路由规则
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home //首页组件
  },
  {
    path: '/about', //新路径 前端路由 
    name: 'Home', //名字
    component: About //首页组件
  },
  {
    //各个省份 
    path: '/*',  /* * 匹配所有  jiangxi  hubei  guangxi*/
    name: 'view',
    component: View
  }
]

const router = new VueRouter({
  mode: 'hash', //路由模式
  base: process.env.BASE_URL,
  routes
}) //生成一个路由对象

new Vue({
  router, //全国  省份 启用路由 
  render: h => h(App),
}).$mount('#app')
