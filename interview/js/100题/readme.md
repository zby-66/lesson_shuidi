Vue 的响应式原理中Object.defineProperty 有什么缺陷？

- Proxy 代理整个对象  defineProperty 每个属性单独代理
- 在vue 2.0 中， defineProperty 并没有对 数组提供完全的数据劫持
  因为有一个前端性能的坑， n empty object 数组 这个坑
  支持 push pop 常用的方法

1. Object.defineProperty 无法监控到数组下标的变化（VUE） vue对push 等常用操作支持  不能实时响应
2. Object.defineProperty 只能劫持对象的属性， proxy 可以代理（劫持） 整个对象，并返回一个新的对象
3. proxy 不仅可以代理对象，还可以代理数组