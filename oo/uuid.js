
// 钱包
const UUID = require('uuid'); //uuid 后成唯一的ID
// 类的定义
// java  public private 
class Wallet {
  constructor() {
    // replace 功能OK?  /-/g  ""
    // js 对private支持不太好， 编程的约定来做 
    // _id  不可以改的
    this._id = UUID.v1().replace(/-/g, ""); 
    this._createTime = + new Date(); // 时间微秒数
    this._balance =  0 // 金额 初始值 
    this._balanceLastModifiedTime = +new Date(); //上一次金额修改时间
    // console.log(this._createTime);
    //uuid 返回用户id 唯一的 加密生成的 后端开发中  
    // id生成的技能项
    // console.log(this.id);
  }
  // 可读不可写
  getId () {
    return this._id
  }
  getBalance() {
    return this._balance; //便于存储 long int 
  }
  getCreateTime() { //不可以
    return this._createTime;
  }
  getBalanceLastModifiedTime() { //可以 
    return this._balanceLastModifiedTime;
  }
  //加的数量
  increaseBalance(increasedAmount) {
    // 先去check increasedAmount 是正确的钱数
    // 封装
    if (increasedAmount < 0) {
      throw new Error('错误的金额')
    } 
    this._balance += increasedAmount;
    this._balanceLastModifiedTime = + new Date();
  }
  //花钱
  decreaseBalance(decreasedAmount) {
    if (decreasedAmount > this._balance) { //可以花
      throw new Error('没有足够的钱');
    }
    this._balance -= decreasedAmount;
  }
}
// 钱包类 ？ 钱， 
// 马云， 银行还有钱？ 没有， 
// 账本  不可被改写的账本
// 钱是什么？ 一串数字， 区块链 一串不可被改变的数字
// 1. 每个人的钱包， 要有一个不可变id 一串数字
// 钱， 数字， 属于你？ 你在钱里钱包id 
const jayWallet = new Wallet();
// 使用
// jayWallet._id='aaaa';//随意的修改？
// id 生成后 ？ 不能改啊 private
// js 语言对面向对象支持的不那么大语言化， 原型式
// oo, 设计模式 java c++
console.log(jayWallet.getId());
// jayWallet._balance = '1111111111';
// 收到红包
jayWallet.increaseBalance(20);
//至少要去蘑菇街上班了
jayWallet.decreaseBalance(10);
console.log(jayWallet.getBalance());
// jayWallet._id = 'aaa';
console.log(jayWallet.getId());
console.log(jayWallet.getBalance(), jayWallet.getBalanceLastModifiedTime());
