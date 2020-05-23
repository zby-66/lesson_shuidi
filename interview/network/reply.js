var http = require('http');

http.createServer(function (req, res) {
  //一份代码， 满足后端两种需求，
  // 1. axios proxy  /api/posts 前后端分离 mvvm   text/json 
  // 2. 传统的后端驱动型开发  HTML MySQL+ 套页面  mvc text/html
  // mysql 取出来的
  let posts = [{
    id: '5e8c94a7f265da47a74126d4',
    title: '怎么排查堆内存溢出呀？'
  }, {
    id: '5eb7ebea5188256d723151fb',
    title: '给前端工程师的一张Dart语言入场券'
  }]

  if (req.url === "/posts") {
    if (req.headers["content-type"] === "text/json") {
      // 头部
      // vue/react
      // api 很灵活
      res.end(JSON.stringify(posts));
    } else {
      // 后端自己建站 mvc
      let postHTML = posts
        .map(
          (post) =>
            `<li>
        ${post.id}
        ${post.title}
      </li>`
        )
        .join("");
      res.writeHead(200,{'content-type': 'text/html;charset=utf8'})
      res.end(`
      <html>
        <head></head>
        <body>
          <ul>
            ${postHTML}
          </ul>
        </body>
      </html>
    `);
    }
  }
  res.end('xiaop')
}).listen(1314);