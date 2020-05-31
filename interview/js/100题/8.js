// 格式化时间
(proto => {
  function formatTime(template = '{0}年{1}月{2}日 {3}时{4}分{5}秒') {
      let arr = this.match(/\d+/g);
      return template.replace(/\{(\d+)\}/g, (_, n) => {
          let item = arr[n] || '0';
          item.length < 2 ? item = '0' + item : null;
          return item;
      });
  }
  proto.formatTime = formatTime;
})(String.prototype);

let time = '2020-3-11 14:10:0';
console.log(time.formatTime());//=>2020年03月11日 14时10分00秒
console.log(time.formatTime('{1}-{2} {3}:{4}'));//=>03-11 14:10
console.log(time.formatTime('{0}年{1}月{2}日'));//=>2020年03月11日
