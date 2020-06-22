 - 在严格模式中使用Vuex，当用户输入时，v-model会试图直接修改属性值，但这个修改不是在mutation中修改的，所以会抛出一个错误。当需要在组件中使用vuex中的state时，有2种解决方案：
 1、在input中绑定value(vuex中的state)，然后监听input的change或者input事件，在事件回调中调用mutation修改state的值
 2、使用带有setter的双向绑定计算属性。见以下例子（来自官方文档）：
 
 `<input v-model="message"`
 `computed: { message: { get () { return this.$store.state.obj.message }, set (value) { this.$store.commit('updateMessage', value) } } }`

