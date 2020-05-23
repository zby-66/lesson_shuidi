// api 是从那里开始的？
// 后端 router -》api -> controller
// 约定一个规则，数据格式，类型 值 完整性要先约定

module.exports = function (app) {
  
  app.router.get('/', 'home.index')
}