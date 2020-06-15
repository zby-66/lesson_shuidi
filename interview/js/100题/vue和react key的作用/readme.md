# 写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？
- https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/1

- 没有绑定key的情况下，并且在遍历模板简单的情况下，会导致虚拟新旧节点对比更快，节点也会复用。而这种复用就是就地复用，一种鸭子辨型的复用。
  ```html
  <div id="app">
    <div v-for="i in dataList">{{ i }}</div>
  </div>

  var vm = new Vue({
    el: '#app',
    data: {
      dataList: [1, 2, 3, 4, 5]
    }
  })
  ```

以上例子，v-for的内容会生成一下dom的节点数组，我们标记身份：

```html
 [
    '<div>1</div>', // id： A
    '<div>2</div>', // id:  B
    '<div>3</div>', // id:  C
    '<div>4</div>', // id:  D
    '<div>5</div>'  // id:  E
  ]
```
> 1.改变dataList数据，进行数据位置替换，对比改变后的数据
```
vm.dataList = [4, 1, 3, 5, 2] // 数据位置替换

 // 没有key的情况， 节点位置不变，但是节点innerText内容更新了
  [
    '<div>4</div>', // id： A
    '<div>1</div>', // id:  B
    '<div>3</div>', // id:  C
    '<div>5</div>', // id:  D
    '<div>2</div>'  // id:  E
  ]

  // 有key的情况，dom节点位置进行了交换，但是内容没有更新
  // <div v-for="i in dataList" :key='i'>{{ i }}</div>
  [
    '<div>4</div>', // id： D
    '<div>1</div>', // id:  A
    '<div>3</div>', // id:  C
    '<div>5</div>', // id:  E
    '<div>2</div>'  // id:  B
  ]
```
> 增删dataList列表项



```html
  vm.dataList = [3, 4, 5, 6, 7] // 数据进行增删

  // 1. 没有key的情况， 节点位置不变，内容也更新了
  [
    '<div>3</div>', // id： A
    '<div>4</div>', // id:  B
    '<div>5</div>', // id:  C
    '<div>6</div>', // id:  D
    '<div>7</div>'  // id:  E
  ]

  // 2. 有key的情况， 节点删除了 A, B 节点，新增了 F, G 节点
  // <div v-for="i in dataList" :key='i'>{{ i }}</div>
  [
    '<div>3</div>', // id： C
    '<div>4</div>', // id:  D
    '<div>5</div>', // id:  E
    '<div>6</div>', // id:  F
    '<div>7</div>'  // id:  G
  ]
```


从以上来看，不带有key，并且使用简单的模板，基于这个前提下，可以更有效的复用节点，diff速度来看也是不带key更加快速的，因为带key在增删节点上有耗时。这就是vue文档所说的默认模式。但是这个并不是key作用，而是没有key的情况下可以对节点就地复用，提高性能。


这种模式会带来一些隐藏的副作用，比如可能不会产生过渡效果，或者在某些节点有绑定数据（表单）状态，会出现状态错位。VUE文档也说明了 **这个默认的模式是高效的，但是只适用于不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出.**




## 但是KEY的作用是什么呢？

> key是给每一个vnode的唯一id，可以依赖key，更准确，更快的拿到oldVnode中对应的vnode节点。
1. 更准确

   因为带key就不是就地复用了，在sameNode函数 `a.key === b.key`对比中可以避免就地复用的情况。所以会更准确。
2. 更快
   
   利用key的唯一性生成map对象来获取对应的节点，比遍历方式更快。
  