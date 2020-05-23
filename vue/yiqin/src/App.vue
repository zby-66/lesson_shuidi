<template>
  <div id="app">
    <!-- 全局的 Vue.user(VueRouter) -->
    <!-- <h1>页面标题</h1> -->
    <!-- 单页应用的头部导航 -->
    <nav class="nav">
      <ul>
        <li>
          <!-- ?  router-link?  它是怎么生效的？
           VueRouter全局组件  Vuse.user(VueRouter) 
            在单页应用中不用a 
           代替a标签
            -->
          <router-link to="/" >首页</router-link>
        </li>
        <li>
          <router-link to="/about" >关于</router-link>
        </li>
        <li>
          <router-link to="/jiangxi" >江西</router-link>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
