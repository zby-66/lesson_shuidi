// 在base config 之后插上babel 处理
// webpack-chain
// 曾今有一次我手搭起工作流程

module.exports = (config, resolve) => {
  
    // babel 的js 化
    // webpack 使用module 生产模块单元
    // 基本原则
    const baseRule = config.module.rule('js').test(/.js$/);
    const babelPath = resolve('babel.js'); // .babelrc的原因
    const babelConf = require(babelPath); //  js 
    // babel  js 灵魂对碰的时候
    // console.log(babelConf, '-------------')
    // 理解
    const version = require(
      resolve('node_modules/@babel/core/package.json')).version;
    // console.log(version, '+++++++')

  return () => {
    console.log(babelConf({
      version
    }));
    baseRule
      .use('babel')
      // 将js 文件
      .loader(require.resolve('babel-loader'))
      .options(babelConf({
        version
      }))
  }
}