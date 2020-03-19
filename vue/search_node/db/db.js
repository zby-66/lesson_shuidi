const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://127.0.0.1:27017/blog', {
  useNewUrlParser:true,
  useUnifiedTopology: true
});
mongoose.Promise = global.Promise
const db = mongoose.connection;
db.once('open', () => {
  console.log('连接数据库成功');
});
db.on('error', () => {
})

module.exports = db;

