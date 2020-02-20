// 电商设计？  模型层  mongoose
// products   商口  collection
// 小米   商家 collection mi-products mi manufacturer 厂家
// 1. Schema ? 设计
// new Schema   save 存好数据
// 从设计数据库开始 数据库模型设计
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model.bind(mongoose);
const ObjectId = mongoose.Schema.Types.ObjectId;

//第一表  products
const productSchema = Schema({
  id: ObjectId,//唯一 mongodb id ObjectId hash mysql 自增的
  name: String, //商品名
  image: String,
  price: Number, /*10000 9999*/
  description: String, /*1亿相素 */
  // 非关系型数据库 NOSQL
  manufacturer: { type: ObjectId, ref: 'Manufacturer' } 
})
// mysql 关系型数据库是什么关系？ 一对多
//第二个表manufacturer
const manufacturerSchema = Schema({
  id: ObjectId,
  name: String
})
// 2. 生成模型类映射数据库表 
const Product = model('Product', productSchema);
const Manufacturer = model('Manufacturer', manufacturerSchema);

module.exports = {
  Product,
  Manufacturer
}
