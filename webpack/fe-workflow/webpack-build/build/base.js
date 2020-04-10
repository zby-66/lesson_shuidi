const { findSync } = require('../lib')
const Config = require('webpack-chain') // 配置
const config = new Config() // 配置实例
const path = require('path')
const resolve = (src) => {
    return path.join(process.cwd(), src)
}
const files = findSync('config')

