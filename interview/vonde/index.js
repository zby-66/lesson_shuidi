const ncname = '[a-zA-Z_][\\w\\-\\.]*';
// 有什么作用？ ()  match   不包括\s 
const qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')'
const startTagOpen = new RegExp('^<' + qnameCapture );
const singleAttrIdentifier = /([^\s"'<>/=]+)/
const singleAttrAssign = /(?:=)/
const singleAttrValues = [
  /"([^"]*)"+/.source,  // 双引号
  /'([^']*)'+/.source, // 单引号
  /([^\s"'=<>`]+)/.source // 
]
const attribute = new RegExp(
  '^\\s*' + singleAttrIdentifier.source +
  '(?:\\s*(' + singleAttrAssign.source + ')' +
  '\\s*(?:' + singleAttrValues.join('|') + '))?'
)
{/* <div id="fdfdf"   >
<div id="fdfdf"   /> */}
const startTagClose = /^\s*(\/?)>/       // (\/?)

let html = '<div :class="c" class="demo" v-if="isShow"><span v-for="item in sz">{{item}}</span></div>'
let index = 0;
// {
//   tag: 'div',
//   attrs: {},
//   children:
// }
// 功能函数
function advance(n) {
  index += n;
  html = html.substring(n);
}

function parseStartTag() {
  const start = html.match(startTagOpen);
  if (start) {
    const match = { // ast
      tagName: start[1],
      attrs: [],
      start: index
    }
    advance(start[0].length);
   //  属性
    let end, attr;   //  attr 属性  end 结束
    // match 是数组
    // > 结束标签， 或属性一直去匹配
    while(!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
      advance(attr[0].length);
      match.attrs.push({
        name: attr[1],
        value: attr[3]
      })
    }
    
    if (end) {
    //  \s \\/ >
      advance(end[0].length);
      match.end = index;
      return match
    } 
  }
 
  // if (start) {

  // }
}

function parseHTML() {
  while(html) { // html为空
    let textEnd = html.indexOf('<'); // 一切的开始
    if (textEnd === 0) {
      // 一开始就是html正确标签
      // 正则 开始标签  ()  标签名
      // console.log(html.match(startTagOpen));
      // return;
      if (html.match(startTagOpen)) {
        // console.log()
        // 解析刚开始的标签 交给一个函数去单独做
        const startTagMatch = parseStartTag();
        console.log(startTagMatch);
        return;
      }
    } else {
      // 不是html标签?   用于什么内容逻辑？
      // 文本
    }
    // 1. 标签
    // 2. 所有的属性
    // 3. 特殊的属性 指令特殊处理
    // 4. 子元素， while , 
  }
}
function parse() {
  return parseHTML();
}
// 虚拟DOM 不是概念， 而是在大脑的内存里， 
// 下一个阶段  n
// Abstract Syntax Tree
const ast = parse(); // ast  vue/react template  -> 抽象语法树(vue, bable) ->   虚拟DOM

console.log(ast);