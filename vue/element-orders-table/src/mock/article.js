// 模块化
import Mock from 'mockjs'
import { param2Obj } from '@/utils'
const list = [];
const count = 100


const baseContent = '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>';
const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'

for (let i = 0;  i < count; i++) {
  list.push(Mock.mock({
    id: '@increment',
    timestamp: +Mock.Random.date('T'), // 返回时间搓 133333
    author: '@first',
    reviewer: '@first',
    title: '@title(5, 10)',
    content_short: 'mock data',
    content: baseContent,
    forecate: '@float(0, 100, 2, 2)',
    importance: '@integer(1,3)',
    'type|1':['CN', 'US', 'JP', 'EU'],
    'status|1': ['published', 'draft'],
    display_time: '@datetime',
    comment_disabled: true,
    pageviews: '@integer(300, 5000)',  // 阅读量
    image_uri,
    platforms: ['a-platform']
  }))
}
// GET 
// new RegExp("\d+")   /\d+/
Mock.mock(new RegExp('/vue-element-admin/article/list'), 'get', (config) => {
  console.log(config);
  // list 根据params 分页
  const { page = 1, limit = 20, title , author , value} = param2Obj(config.url)
  // console.log(page, limit);
  // title , 重要性 ， 时间， 状态查询
  let mockList = list.filter(item => {
    // 条件一个个加，对选项进行过滤
    if (title && item.title.indexOf(title) < 0) return false;
    // ....... 
    if (author && item.author.indexOf(author) < 0) return false;

    return true;
   
    // .......
   
  });
  if (value) {
    value == 'asc' && mockList.sort((a, b) => a.id - b.id)
    value == 'desc' && mockList.sort((a, b) => b.id - a.id)
  }

  const pageList =  mockList.filter((item, index) => 
  index < limit *page && index >= limit *(page-1));//某页数据 
  return {
    list:pageList, 
    total: mockList.lengths
  }
})

export default Mock