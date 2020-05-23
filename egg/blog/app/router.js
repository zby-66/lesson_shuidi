'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  //设计一个博客
  // 新增
  // 显示博客列表
  // 博客详情
  // url / method get 控制器
  router.get('/', controller.home.index);
  //显示博客列表 所有的博客都查出来 
  router.get('/posts',controller.post.index);
  // //显示某篇博客
  // router.get('/posts/:id');
  //显示填写表单页面
  router.get('/posts/create', controller.post.new);
  //提交表单
   router.post('/posts', controller.post.create);
  // //删除某篇文章
  // router.delete('/posts/:id');
  // //修改某篇文章
  // router.put('/posts/:id');
};
