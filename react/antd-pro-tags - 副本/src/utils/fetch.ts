// method string ? typescript 约定不够  get post 。。。。5种
// interface  + type
type HttpMethods = 'get' | 'GET' | 'POST' | 'post' | 'DELETE' | 'delete';
// any ts 什么类型都可以 
// ts type 定义一个类型

type FuncType = (url: string, method: HttpMethods) => Promise<any>; // 特别的函数， return promise

const fetchData: FuncType = (url: string, method: HttpMethods) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.json())
      .then((response) => {
        resolve(response);
      })
      .catch(err => reject(err))
  })
}

// umi antd = elemnt-ui 组件库
// umi  antd pro 已经可以运行的项目(admin) 基于他二次开发

export {
  fetchData
}