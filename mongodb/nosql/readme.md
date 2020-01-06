- NOSQL
MYSQL 关系型数据库，
databasde->table->fields
NOSQL 不需要写SQL 
JSON objecj{} .save()
find({})
适合于碎片化，结构性不是很良好的数据存储
Mongodb 云开发数据库就是线上版的Mongodb

- MONGODB                              MYSQL
  NOSQL   应用于Facebook  文档型     关系型数据库
 show dbs;show database;
                    use db;
 show collections;                  show tables;
 支持js 语法的面向对象api              SQL
 db.order.find({})




- 连接mongodb
  url  拥有mongodb://
- db.createCollection('site', function(err,res){
    // err 先处理出错
    // 异步的，耗时的，
    //js 里执行的代码不会阻塞，
    db.close();//一定要放里面
})
    代码顺序
    1. createCollection
    2. db.close()  在外面
    执行顺序
    1. create->去到mongodb->create->回来跟我说
    2. 接着往后执行

- 数据库， 后端开发框架
    express 
    node, 后端就是app
    app.get('/', (req, res) =>
    res.send('hello world'))//访问首页
    app.listen(3000,)