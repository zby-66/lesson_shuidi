原生JS灵魂拷问
概念篇：
1. js原始数据类型有哪些?引用数据类型有哪些？
原始类型：boolean,null,undefined,number,string,symbol,bigint
引用类型： 对象OBJECT （普通对象，数组对象，正则对象，日期对象，数学函数，函数对象）
2. null是对象吗？为什么？
   null不是对象
   虽然typeof null 会输出 object，但是这只是js存在的一个悠久Bug。在JS的最初版本中使用的是32位系统，为了性能考虑使用低位存储变量的类型信息，000开头代表是对象然而null表示为全零，所以将它错误的判断为object。
3. '1'.toString()为什么可以调用？
   ```js
   var s = new Object('1');
   s.toString();
   s = null;
   ```
   第一步： 创建object类实例。注意为什么不是String?由于Symbol和BigInt的出现，对它们调用new都会报错，目前ES6规范也不建议用new来创建基本类型的包装类。
   第二步：调用实例方法。
   第三步： 执行完方法累计销毁这个实例。
   整个过程体现了基本包装类型的性质，而基本包装类型恰恰属于基本数据类型，包括Boolean,Number,和String.
4. 如何理解BigIn