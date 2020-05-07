const mongoose = require('mongoose');//数据库驱动
    Schema = mongoose.Schema;
//数据结构
const articleSchema = new Schema({
    title: String,
    data: Date,
    content: String
});
const linkSchema = new Schema({
    name: String,
    href: String,
    newPage: Boolean
});
const userSchema =  new Schema({
    name: String,
    password: String,
    email: String,
    emailCode: String,
    createdTime: Number,
    articles: [articleSchema],
    links: [linkSchema]
});

// 对数据库物理， 对象抽象 ORM 封装映射
// 操作数据库更容易
// 由Schema构造生成的模型，除了Schema定义的数据库骨架以外，还具有数据库操作的行为，类似于管理数据属性、行为的类。
const User = mongoose.model('User', userSchema);
// 最消耗性能的 IO开销
mongoose.connect('mongodb://192.168.31.128:27017/text');
let db = mongoose.connection;
db.on('error', function(){
    console.log('数据库连接失败');
});
db.once('open' , function(){
    console.log('db opened');
});


// //model mvc 
// new User({
//     name: '小小洋',
//     password: '000000',
//     email: '1753058819@qq.com',
//     emailCode: '1314',
//     createdTime: Date.now(),
//     article: []
// }).save(function(err){

// });


// User.findOne({email: '1753058819@qq.com'},
// function(err, doc){
//     if(err) {
//         return console.log(err)
//     }
//     console.log(doc);
// });


// User.findOne({name: '小小洋'}, function(err,doc){
//     if(doc) {
//         const article = {
//             title: '盗墓笔记',
//             date: new Date(),
//             content: '盗墓必备'
//         };
//         doc.articles.push(article);
//         doc.save(function(err){
//             if(err) return console.log(err)
//             console.log(doc);
//         })
//     }
// })

User.findOne({name: '小小洋'}, function(err, doc){
    if(err) {
        return console.log(err);
    }else if (doc) {
        const link = {
            name: '哔哩哔哩',
            href: 'www.bilibili.com',
            newPage: true
        }
        doc.links = [];
        doc.links.push(link);
        doc.save(function(err){
            if(err) return console.log(err);
            console.log('ok', doc);
        })
    }
})