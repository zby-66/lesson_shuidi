# waimai

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


- 组件式开发
页面由组件构成（拼乐高），而非标签（传统切页面）
Facebook 由一万多个组件拼起来，复用
components/header/header 效力于多个页面
- Object.assign({}, .....)   方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
来自ES6

-组件化思维
    一方面是一个页面由好多组件构成，页面开发可以划分任务
    催生的是大量的团队合作
    每个组件要解耦 
    scoped
    #app[data-v-12121]
- Vue 禁止DOM 操作
    ref= ""
    this.$refs.

npm install --save better-scroll
 npm i   stylus  
