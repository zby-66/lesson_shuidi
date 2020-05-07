let request = require('request-promise');
let cheerio = require('cheerio');
let fs = require('fs');
const main = async () => {
    //进程
    let html = await request({
        url: 'http://movie.douban.com/top250'
    });

    // console.log(html);
    //在内存中构建一个DOM
    let $ = cheerio.load(html);
    let movieNodes = $('#content .article .grid_view').find('.item');
    let movies = [];
    //console.log(movieNodes);
    for (let i = 0; i < movieNodes.length; i++) {
        let item = cheerio.load(movieNodes[i]);
        let titles = $('.info .hd span');

        titles = ([]).map.call(titles, t => {
            return $(t).text();
        })
        //console.log(titles);
        let bd = $('.info .bd');
        let info = bd.find('p').text();
        let score = bd.find('.star .rating_num').text();
        movies.push({
            'titles' : titles,
            'info': info,
            'score' : score
        })
  }
  //console.log(movies);
  fs.writeFile('./output.json',  JSON.stringify(movies),'utf-8',(err)=>{
      if(err)
      console.log('写入失败');
      console.log('写入json文件成功，爬取完成');
  });
}

main();