# login



## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org

- npm init -y 项目的初始化
  Java 一样来做后端 企业级开发框架
  npm init egg --type=simple

  - app
    node 应用程序 主要代码
  - config 配置文件夹 
  - test 测试目录


  - egg 架构
    脚手架快速构建项目结构
    web http协议
    router.js 配置了路由
    ->controller(ctx.request body)
    -> model

- npm i sequelize -D
 -D？表示上现时不需要 devDpendencies
 开发阶段的依赖 MySQL 的处理
 创建表 
 执行SQL 
 sequelize-cli command-line
 命令行

 - sequelize 命令行集锦
   sequelize init 初始化mysql的工作目录
    - config.json
    sequelize db:create 
    创建一个表 
    sequelize migration:undo 撤销