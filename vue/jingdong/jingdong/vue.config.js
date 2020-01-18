module.exports = {
    configureWebpack:{
        devServer: {
            port:8080,//端口号
            open: true,//自动打开浏览器
            //mock 接口编写的地方 //假数据 //每次做更改配置文件时，都必须重启项目才会生效
            before(app){
            //     app.get('请求地址',(req,res) =>{
            //         res.json({
            //             xinxi
            //         })
                // })
            //注册接口
            //用户信息池
            let userpoor = [
                {
                    username:'xxyang',password:'123456'
                },
                {
                    username:'liuqiangdong',password:'888888'
                }
            ]
            app.get('/api/register',(req,res) =>{
                const {username,password}=req.query
                const userlength=userpoor.filter(v =>v.username==username).length//过滤 查找是否存在用户名
                if(userlength>0){
                    res.json({
                        success:false,
                        message:'用户名已存在'
                    })
                }else{
                    res.json({
                        success:true,
                        message:'注册成功'
                    })
                }
            })
            }
        }
    },

    css: {
      loaderOptions: {
        stylus: {
          'resolve url': true,
          'import': [
            './src/theme'
          ]
        }
      }
    },

    pluginOptions: {
      'cube-ui': {
        postCompile: true,
        theme: true
      }
    }
}
