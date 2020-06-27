// const fs = require('fs');
// const zlib = require('zlib');//压缩
// const file = process.argv[2];
// console.log(file);

// // 压缩文件 过程
// //io-》 内存 -> 处理 -> 压缩 -> 写回硬盘
// fs.readFile(file, (err, buffer) => {
//   console.log(buffer); // 文件io 网络 io buffer 大小有上限 需要stream
//   zlib.gzip(buffer, (err, buffer) => {
//     fs.writeFile(file + '.gz', buffer, err => {
//       console.log('File successfully compressed');
//     })
//   })
// })

// stream libuv  事件模型 eventEmitter
// 优雅的编程模型  -》 
fs 
  .createReadStream(file)
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream(file + '.gz'))
  .on('finish', () => console('File successfully compressed'))