<template>
  <div id="app">
    <el-button-group>
      <el-button
        type="primary"
        icon="el-icon-loading"
        round
        plain
        @click="upload"
        nativeType="submit"
        loading
      >button</el-button>
      <el-button type="text">文字</el-button>
    </el-button-group>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <el-badge :value="12" class="item">
      <el-button size="small">评论</el-button>
    </el-badge>
    <el-badge :value="111" :max="100" class="item">
      <el-button size="small">评论</el-button>
    </el-badge>
    <div>
      <el-badge type="success" value="小小洋专属" class="item">
        <el-button size="small">评论</el-button>
      </el-badge>
      <el-badge is-dot class="item">
        <el-button size="small">评论</el-button>
      </el-badge>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ElButton from "./components/ElButton.vue";
import ElButtonGroup from "./components/ElButtonGroup.vue";
import ElBadge from "./components/ElBadge.vue";

export default {
  name: "App",
  components: {
    // HelloWorld
    ElButton,
    ElButtonGroup,
    ElBadge
  },
  methods: {
    upload(evt) {
      console.log(evt);
    }
  }
};
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
.item {
  margin-right: 20px;
}
</style>
