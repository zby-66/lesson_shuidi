import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'amfe-flexible'


Vue.config.productionTip = false
Vue.prototype.$http=axios//挂载axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
