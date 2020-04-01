
const path = require('path');
const rimraf = require('rimraf');
rimraf.sync('dist');
// 链式的webpack 配置
const Config = require('webpack-chain');
const config = new Config(); //实例化
const resolve = (src) => {
	return path.join(process.cwd(), src)
}
config
	.entry('./src/index')
	.add(resolve('./src/index.js'))
	.end()
	.set('mode', process.env.NODE_ENV)
	.output
		.path(resolve('dist'))
		.filename('[name].bundle.js') // entry main.js  name main  bundle.js

config.module
	.rule('css')
	.test(/\.css/)
	.use('css')
	.loader('css-loader')

module.export = config.toConfig();
