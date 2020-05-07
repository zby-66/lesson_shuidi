// 数据库层的分离 向外提供
module.exports = app => {
    // mongodb 的驱动
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/myblog', {
      useNewUrlParser: true
    })
    
  }
  