#聊聊 Vue 的双向数据绑定，Model 如何改变 View，View 又是如何改变 Model 的

 **核心是利用ES5的Object.defineProperty,这也是Vue.js为什么不能兼容IE8及以下浏览器的原因。**
 
 * Object.defineProperty方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回这个对象。
 
  Object.defineProperty(
  obj, // 定义属性的对象
  prop, // 要定义或修改的属性的名称
  descriptor, // 将被定义或修改属性的描述符【核心】
 
 * **observe**的功能就是用来监测数据的变化。实现方式是给非VNode的对象类型数据添加一个Observer,如果已经添加过则直接返回，否则在满足一定条件下去实例化一个Observer对象实例。
 
  Observer是一个类,它的作用是给对象属性添加getter和setter,用于 **依赖收集** 和 **派发更新**
 
 **依赖收集getter**（重点关注以下两点）
 
 * `*const dep = new Dep() // 实例化一个Dep实例`
 * `*在get函数中通过dep.depend做依赖收集`
 
 Dep是一个Class,它定义了一些属性和方法，它有一个静态属性target，这是一个全局唯一Watcher【同一时间内只能有一个全局的Watcher被计算】。Dep实际上就是对Watcher的一种管理，Dep脱离Watcher单独存在是没有意义的。Watcher和Dep就是典型的观察者设计模式。
 
 Watcher是一个Class,在它的构造函数中定义了一些和Dep相关的属性：
 
 ```
 this.deps = []
 this.newDeps = []
 this.depIds = new Set()
 this.newDepIds = new Set()				
 ```
 
 **收集过程**：当我们实例化一个渲染watcher的时候，首先进入watcher的构造函数逻辑，然后执行他的`this.get()`方法，进入get函数把Dep.target赋值为当前渲染watcher并压栈（为了恢复用）。接着执行`vm._render()`方法，生成渲染VNode,并且在这个过程对vm上的数据访问，这个时候就触发数据对象的getter（在此期间执行`Dep.target.addDep(this)`方法，将watcher订阅到这个数据持有的dep的subs中，为后续数据变化时通知到哪些subs做准备）。然后递归遍历添加所有子项的getter。
 
  _Watcher在构造函数中初始化两个Dep实例数组。newDeps代表新添加的Dep实例数组，deps代表上一次添加的Dep实例数组。
  依赖清空：在执行清空依赖（cleanupDeps）函数时，会首先遍历deps,移除对dep的订阅，然后把newDepsIds和depIds交换，newDeps和deps交换，并把newDepIds和newDeps清空。考虑场景，在条件渲染时，及时对不需要渲染数据的订阅移除，减少性能浪费。_
 
 考虑到Vue是数据驱动的，所以每次数据变化都会重写Render,那么`vm._render()`方法会再次执行，并再次触发数据
 
 收集依赖的目的是为了当这些响应式数据发生变化，触发它们的setter的时候，能知道应该通知哪些订阅者去做相应的逻辑处理【**派发更新**】
 
 **派发更新setter**（重点关注以下两点）
 
 * `*childOb = !shallow && observe(newVal) // 如果shallow为false的情况，会对新设置的值变成一个响应式对象`
 * `*dep.notify() // 通知所有订阅者`
 
 **派发过程**：当我们组件中对响应的数据做了修改，就会触发setter的逻辑，最后调用`dep.notify()`方法，它是Dep的一个实例方法。具体做法是遍历依赖收集中建立的subs，也就是Watcher的实例数组【subs数组在依赖收集getter中被添加，期间通过一些逻辑处理判断保证同一数据不会被添加多次】，然后调用每一个watcher的update方法。
 
 update函数中有个`queueWatcher(this)`方法引入了队列的概念，是vue在做派发更新时优化的一个点，它并不会每次数据改变都会触发watcher回调，而是把这些watcher先添加到一个队列中，然后在nextTick后执行watcher的run函数
 
 **队列排序保证：**
 
 1. 组件的更新由父到子。父组件创建早于子组件，watcher的创建也是
 2. 用户自定义watcher要早于渲染watcher执行，因为用户自定义watcher是在渲染watcher前创建的
 3. 如果一个组件在父组件watcher执行期间被销毁，那么它对应的watcher执行都可以被跳过，所以父组件的watcher应该先执行。
 
 * 队列遍历：排序完成后，对队列进行遍历，拿到对应的watcher,执行`watcher.run()`。
 
 **run函数解析**：先通过`this.get()`得到它当前的值，然后做判断，如果满足新旧值不等、新值是对象类型、deep模式任何一个条件，则执行watcher的回调，注意回调函数执行的时候会把第一个参数和第二个参数传入新值value和旧值oldValue，这就是当我们自己添加watcher时候可以在参数中取到新旧值的来源。对应渲染watcher而言，在执行`this.get()`方法求值的时候，会执行getter方法。因此在我们修改组件相关数据时候，会触发组件重新渲染，接着重新执行patch的过程
 
 ### 手写一个数据绑定：
 ```
 <input id="input" type="text" /
 <div id="text"</div
 
 let input = document.getElementById("input");
 let text = document.getElementById("text");
 let data = { value: "" };
 Object.defineProperty(data, "value", {
   set: function(val) {
     text.innerHTML = val;
     input.value = val;
   },
   get: function() {
     return input.value;
   }
 });
 input.onkeyup = function(e) {
   data.value = e.target.value;
 };
 ```

