// commonjs es
import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import Header from '../components/Header.jsx';

const app = express();
// 把 static 目录做了静态资源的一个映射
app.use(express.static('static'))
// ejs jsp jade vue-template
app.get('*', (req, res) => {
  //入口组件
  const App = (<Header />)
  const htmlStr = renderToString(App);
  console.log(htmlStr)
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id="root">${htmlStr}</div>

    <script src="/index.js"></script>
  </body>
  </html>`)
      // localhost:3000/index.js 文件 是不是前端打包的代码
    //浏览器执行 hydrate 绑定事件
})


app.listen(3000, () => {
  console.log('server is running 3000 port');
})