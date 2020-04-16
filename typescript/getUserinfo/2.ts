const getUserInfo2 = function(user :{name:string, age: number}) {// 参数随意
    // argument js 不靠谱 Javascript 语言精粹， 
    
    return `name : ${user.name}, age: ${user.age}`
    }
    // js 不会做运行前检查， 是一个动态语言 Java ts静态语言
    // 先编译在运行 ts 会先检测再编译
    // console.log(getUserInfo2({name: "大张", age:"18"}));

    //以防中间过程意料不到的可能， 数据从数据库里面取得
    console.log(getUserInfo2({name: 'xiaop', age: 18}));