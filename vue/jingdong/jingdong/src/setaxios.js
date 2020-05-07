import axios from 'axios'
import store from './store'
import router from './router'


//http 全局拦截
//token 要放在我们请求的header上面带回去给反馈

export default function sexAxios() {
    axios.interceptors.request.use(
        config => {
            if(store.state.token){
                config.headers.token = store.state.token
            }
            return config
        }
    )
        //每次请求有返回的都是先经过拦截器的
    axios.interceptors.response.use(
        response => {
            if(response.status == 200){
                const data = response.data
                if(data.code == -1){
                    //登陆过期 需要重新登陆 清空vuex和localstorage 的token
                    store.commit('settoken','')
                    localStorage.removeItem('token')
                    //跳转到login页面
                    router.replace({path:'/login'})
                }
                return data
            }
            return response
        }
    )
}