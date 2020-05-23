// blog 分类的Schema
const mongoose = require('mongoose');

const schema = mongoose.Schema({
  title: { type: String }
})
// model -> mongodb 存储到底做了什么事情? mongoose
module.exports = mongoose.model('Category', schema, 'categories')
