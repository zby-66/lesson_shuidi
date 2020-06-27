var array = 'hello'.split('').map(v => {
  return '0x' + v.charCodeAt(0).toString(16)
})
console.log(array);

const buf = new Buffer(array);
// buf 存的16进制 转成高级的内容
console.log(buf.toString());