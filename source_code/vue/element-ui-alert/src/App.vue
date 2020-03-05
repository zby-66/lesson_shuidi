  
<template>
  <div id="app">
    <el-alert 
    title="成功提示的文案"
    type="success" 
    :showIcon="true" 
    :closable="true" 
    closeText="" 
    description="success"
    ></el-alert>
    <el-alert 
    title="警告"
    type="warning" 
    :showIcon="false" 
    :closable="true" 
    closeText="" 
    description="warning"
    ></el-alert>
     <el-alert 
    title="错误"
    type="error" 
    :showIcon="true" 
    :closable="true" 
    closeText="这里是关闭按钮" 
    description="error"
    ></el-alert>
    <!-- 有两个参数title和type(会对应不同的css) -->
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- :showIcon="false"
    传递number Boolean object array类型的时候注意，做动态绑定，否则传递过去的参数类型会不正确，比如number会变成String 
    :closable="true" closeText="关闭"-->
  </div>
</template>

<script>
import ElAlert from './components/ElAlert.vue'
export default {
  name: 'App',
  components: {
    'el-alert':ElAlert  //导入了组件要记得写一下，然后建相应的文件ElAlert.vue
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
