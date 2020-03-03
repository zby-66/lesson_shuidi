<template>
  <div class="login_page fillcontain">
    <!-- Vue 内置组件 实现特效 -->
    <transition name="form-fade">
      <section class="form_container" v-show="showLogin">
        <div class="manage_tip">
          <p>elm后台管理系统</p>
        </div>
        <!-- element-ui 表单组件 收集数据 -->
        <el-form :model="loginForm" :rules="rules" ref="loginForm">
          <!-- el-form-item 容器 -->
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" placeholder="密码" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')" class="submit-btn">登录</el-button>
          </el-form-item>
        </el-form>
      </section>
    </transition>
  </div>
</template>

<script>
// 后端请求都应该在 api 中
import {login} from '@/api/getData'
export default {
  name: 'Login',
  data() {
    return {
      showLogin: false,
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  mounted() {
    this.showLogin = true
  },
  methods: {
    async submitForm(formName) {
      // console.log(this.$refs[loginForm])
      this.$refs[formName].validate(async (valid) => {
        console.log(valid)
        if (valid) { // 跟后端 api 通信，登录
          // 异步 ajax 请求
          const res = await login({user_name: this.loginForm.username, password: this.loginForm.password})
          // console.log(res)
          // 快速模拟 先把能写的代码写完 减少不确定性
          if (res.status == 1) {
            this.$message({
              type: 'success',
              message: '登录成功'
            })
          } else {
            this.$message({
              type: 'error',
              message: res.message
            })
          }
        } else {
          // this -> component.prototye -> Vue 根实例 -> Vue.use()
          this.$notify.error({
            title: '错误',
            message: '请输入正确的用户名和密码',
            offset: 100
          })
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.login_page
  height 100vh
  background-color #324057
  
.manage_tip
  position absolute
  width 100%
  top -100px
  left 0
  p
    font-size 34px
    color #ffffff
.form_container
  width 320px
  height 240px
  position absolute
  top 50%
  left 50%
  box-sizing border-box
  padding 25px
  margin-top -120px
  margin-left -160px
  border-radius 5px
  text-align center
  background-color #fff
  .submit_btn
    width 100%
    font-size 16px
// 动态产生的四个类
.form-fade-enter-active,.form-fade-leave-active
  transition all 1s
// 刚开始时 透明度为0 设置进入的初始状态
// 只有一帧的时间
.form-fade-enter, .form-date-leave-active
  transform translate3d(0, -50px, 0)
  opacity 0
</style>