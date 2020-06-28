//复制存储
//将其返回
//调用时的区别

Function.prototype.myBind = function(objThis, ...params) { // 先传一部分参数
  const thisFn = this; //  存储源函数的this
  let fToBind = function(...secondParams) { //  最后还是要执行的
    const isNew = this instanceof fToBind // new 调用
    const context = isNew ? this : Object(objThis) ; // this 覆盖为上下文对象
    return thisFn.call(context, ...params, ...secondParams); // 
  }


  if (thisFn.prototype) {
    fToBind.prototype = Object.create(thisFn.prototype);
  }
  
  return fToBind; 
}