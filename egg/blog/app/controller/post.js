const Controller = require('egg').Controller;

class PostController extends Controller {
    async index (){
        await this.ctx.render('index.tpl');
    }
    async new() {

       // this.ctx.body = 'hi post';
       await this.ctx.render('new.tpl');
    }
    async create() {
        const {ctx} = this;
        let { title,body } = ctx.request.body;//请求体
        // console.log(title,body);
        // this.ctx.body = '在这里提交表单';

        await ctx.service.post.newPost(title,body);
        ctx.redirect('/posts');
    }
}

module.exports =PostController;