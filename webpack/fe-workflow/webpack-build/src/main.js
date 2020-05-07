// require('./style/index.css')
// 2 引入css文件 webpack bundler 一切静态资源
//1 const e6->es5 env
const h2 = document.createElement('h2');
h2.innerText = "xiaop";
h2.className = 'test';
// 2 挂载点 ，HTML template
document.body.append(h2);