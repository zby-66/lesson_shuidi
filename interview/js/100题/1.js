// var a = 2; 变量的查询 LHS查询
//试图找到变量的容器本身， 从而的其赋值

// RHS 查询 简单的查找某个变量的值，别无二致 出现在赋值运算符 = 右侧
function chageObjProperty(o) {// o 形参 是 LHS 还是 RHS 查询
  o.siteUrl = "http://www.baidu.com";
  o = new Object();//重新创建了一个对象，分配了新的栈地址，不会影响之前的对象，所以最后答案不会被覆盖  LHS 从右到左执行
  o.siteUrl = "http://www.google.com";
}


let webSite = new Object();
chageObjProperty(webSite);
console.log(webSite.siteUrl); //http://www.baidu.com