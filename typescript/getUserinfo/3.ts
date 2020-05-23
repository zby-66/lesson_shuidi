// interface 不好理解
// 基础类型 在多个地方会使用到的时候
// user 实现了Iuser 一样的属性和方法的对象 接口
interface IUser{
    name: string;
    age: number;
}

const getUserInfo3 = (user:IUser) : string=> {
    // if(true){
    //     return 123;
    // }
    return `name: ${user.name}, age: ${user.age}`
}

getUserInfo3({name: 'xxyang', age : 18})