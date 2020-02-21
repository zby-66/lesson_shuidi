// blog 分类的Schema
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const schema = mongoose.Schema({
  username: {
    type: String
  },
  password: {
    type: String,
    // 获取用户数据的时候， 不要把密码取出去
    select: false, // select 查询  设置  update insert 
    set(val) { // insert 操作  123456
      // npm 123456 -> dfadlfjdslafjdasjlvlcxvjxlkj
      return bcrypt.hashSync(val, 10) // 不会存明文密码
    }
  },
  // 用户和文章的关系 ？ 
})
// model -> mongodb 存储到底做了什么事情? mongoose
module.exports = mongoose.model('User', schema, 'users')
