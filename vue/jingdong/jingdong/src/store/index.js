import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: ''
  },
  mutations: {
    //设置vuex的token
    settoken(state,token){
      state.token=token
    }
  },
  actions: {
  },
  modules: {
  },
  getters:{

  }
})
