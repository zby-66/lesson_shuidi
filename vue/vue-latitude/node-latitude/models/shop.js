
const mongoose = require('mongoose')

const shopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true //一定要有
  },
  location: {
    type:  [Number],  // [lng, lat]
    index: "2d", //建立索引
    sparse: true
  }
})

const Shop = mongoose.model('Shop', shopSchema)
module.exports = Shop