/**
 * API 定义集合文件
 * @param {*} data 
 */

 // 登录
 export const login = async (data) => {
    return new Promise((resolve, reject) => {
      fetch('/admin/login', {//fetch('/api/admin/login',
        method: 'POST',
        body: JSON.stringify(data) // 转成
      })
      .then(data => data.json()) // 从数据流中取出数据s
      .then(data => {
        resolve(data)
      })
      .catch(err => {
        console.log(err)
        reject(err)
      })
    })
  }