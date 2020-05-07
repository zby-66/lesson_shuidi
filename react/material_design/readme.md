# material design 来自google 的UI风格
从css风格到组件化再到react入门

波浪的感觉
- material design 的灵魂， 在于对交互的创新
    波浪感，进度条的进度感
    移动端细节 ， cursor: pointer 用的是非button 组件
    user-select: none;
    stylus 嵌入式 ::after :active::after


1. background-image
    背景图片 url 引入的方式， 在移动时代, 渐变也可以生成
    既生成了背景，同时又没有用图片
    10%白 1%透明 （带来了奇特），
    trsform: scale(12->0)

- 做一堆按钮
    为开发准备好基础组件 小程序里面用过组件，
    要用到的按钮，这里都会有， warning？ 大一些，块一级
    提供 通用的， 变通的，各种常见要求,就叫组件
    css 有一些变化（状态， primary circle block），如何变化封装进去？
    html 区别
    1. 把它的样式封装进去
        button? 样式是样式


- ReactDOM React 跟DOM交互的库
基本语法：
组件是强大的， 定义了一个BUTTON组件
type文字 block .....有通用性的需求
1. ReactDOM.render(<div><button>, docuemnt.getElementByld('root))
    JSX语法
    才可以在root 里面显示组件 组件 要编译
    https://blog.csdn.net/weixin_41012753/article/details/78771436
2. function Button(props){
    let {  } =props// 定义组件好方便
    return{
        <div></div>
    }
}
https://www.jianshu.com/p/2a40300a7884
3. 只写一次，以后要用按钮就它了...
