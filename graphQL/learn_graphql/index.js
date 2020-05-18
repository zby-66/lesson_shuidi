// 新的接口
// node 快速支持 import   ? 
import express  from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema'; // 模型定义文件


const app = express();


// 数据playground 
app.use('/graphql', graphqlHTTP({
  // 在前端也有向mongodb  schema 严格约定接口， 
  schema,
  graphiql: true
}))


app.listen(8080);