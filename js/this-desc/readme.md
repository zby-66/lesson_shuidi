1. js在创建上下文执行的时候就生成了this
2. 非严格模式下浏览器指向window，严格模式下指向undefined,node全局指向global

3. 如果一个函数中有this，都是它没有被上一级对象调用，那么this指向的就会是window
   如果一个函数中有this，都是它有被上一级对象调用，那么this指向的就会是上一级对象
   如果一个函数中有this，尽管这个函数是被最外层的对象所调用的，this还是会指向它的上一级对象

4. 修改this作用域的方法，有 call, apply, bind 
   使用bind方法给一个函数进行this作用域的绑定，它是一个永久的绑定会覆盖掉call apply的指向

5. this和return
      如果返回是一个对象，那么this就指向返回的对象，如果返回的不是对象，那么this还是指向函数实例，如果返回的是null,this还是指向函数实例

6. 箭头函数
      es6箭头函数中this的指向取决于创建的位置！