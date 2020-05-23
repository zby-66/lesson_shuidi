const path = require('path')
const resolve = dir => path.join(__dirname, dir)
const fs = require('fs')

module.exports = {
  baseUrl: './',
  runtimeCompiler: true,
  // 配置路径别名
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components/'))
      .set('_as', resolve('src/assets/img/'))
  },
  // 传递第三方插件选项
  pluginOptions: {
    'AMap': 'AMap',
    'QRCode': 'QRCode'
  },
  // 全局注入通用样式
  css: {
    loaderOptions: {
      stylus: {
        data: fs.readFileSync('./src/assets/stylus/mixins.styl', 'utf-8')
      }
    },
    resolve: {
        alias: {
        'plugin': 'src/common/plugin.js'
        }
        }
  }
}
