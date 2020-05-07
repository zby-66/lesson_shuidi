// umi 就是这么好  开发框架， 约定大于一切 `
import { Request, Response } from  'express'; // express 服务
// mock mock.js 配置一堆  一分钟搞定
const getTags = (req: Request, res: Response) => {
  // console.log(req, res)
  res.json({
    data:[
      {
        id: 1,
        title: 'vue'
      },
      {
        id: 2,
        title: 'react'
      },
      {
        id: 3,
        title: 'antd' // ui 框架
      },
      {
        id: 4,
        title: 'umi' // 开发框架
      },
    ]
  })
}

export default {
  'GET /api/tag/all': getTags
}