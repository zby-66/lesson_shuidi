function _new(fn, ...arg) {
  const obj = Object.create(fn.prototype);
  const ret = fn.apply(obj, arg);
  return ret instanceof Object ? ret : obj;
}

/**
 *
 *
 * @param {Function} fn
 */
function _new(fn, ...args) {
	const obj = {};
	Object.setPrototypeOf(obj, fn.prototype);
	const result = fn.apply(obj, args);
	// 根据规范，返回 null 和 undefined 不处理，依然返回obj
	return result instanceof Object ? result : obj;
}

// 先理清楚 new 关键字调用函数都的具体过程，那么写出来就很清楚了

// 首先创建一个空的对象，空对象的__proto__属性指向构造函数的原型对象
// 把上面创建的空对象赋值构造函数内部的this，用构造函数内部的方法修改空对象
// 如果构造函数返回一个非基本类型的值，则返回这个值，否则上面创建的对象
function _new(fn, ...arg) {
  var obj = Object.create(fn.prototype);
  const result = fn.apply(obj, ...arg);
  return Object.prototype.toString.call(result) == '[object Object]' ? result : obj;
}


function _ne(fn, ...arg) {
  var obj = Object.create(fn.prototype);
  const result = fn.apply(obj, ...arg);
  // return result instanceof Object ? result : obj;
  return Object.prototype.toString.call(result) == '[obkect Object]' ? result : obj;
}