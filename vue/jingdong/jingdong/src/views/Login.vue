<template>
  <div>
      <img class="headerimg" src="https://www.baidu.com/img/bd_logo1.png" alt="">
    <cube-form
      :model="model"
      :schema="schema"
      @submit="submitHandler"
    ></cube-form>
  </div>
</template>
<script>
export default {
    data(){
        return{
            model:{//数据源
                username:'',
                password:''
            },
            schema:{//生成表单依赖的模式
                fields:[//子配置项 模式用于定义表单中的各个字段，可以选择是否分组。 无分组
                //用户名配置
                    {
                        type:'input',//字段类型
                        modelKey:'username',//在表单的 model 数据源对象中所对应的 key 名字
                        label:'用户名',//字段的标签值
                        props:{
                            placeholder: '请输入用户名',
                        },
                        rules:{
                            //校验规则
                            required: true,
                            type: 'string',
                            min: 3,
                            max: 15,
                        },
                        trigger: 'blur',//如果设置为 'blur' 那么则会在离焦后校验
                        messages:{
                            required: '用户名不能为空',
                            min: '用户名不能少于三个字符',
                            max: '用户名不能超过十五个字符',
                        }
                    },
                    //密码配置
                    {
                        type:'input',//字段类型
                        modelKey:'password',//在表单的 model 数据源对象中所对应的 key 名字
                        label:'密码',//字段的标签值
                        props:{
                            placeholder: '请输入密码',
                            type:'password',
                            eye:{
                                open: false,
                            }
                        },
                        rules:{
                            required:true,
                        },
                        trigger: 'blur',
                    },
                    {
                        type:'submit',
                        label: '登陆'
                    }
                ]
            }
        }
    },
    methods: {
        async submitHandler(e) {
            e.preventDefault()
            try{
                const result = await this.$http.get('/api/login',{params:this.model})
                // console.log(result.data.token)
                if(result.code == '0'){
                    // alert(result.data.message)
                    this.$store.commit('settoken', result.token)
                    window.localStorage.setItem('token', result.token)
                    this.$router.replace({path:'/botnav/index'})
                }else{
                    alert(result.message)
                }
            }catch(err){
                console.log(err)
            }
        },
    }
};
</script>

<style lang="stylus" scoped>
    .headerimg
        height 130px
        width 100%
</style>