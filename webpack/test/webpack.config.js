// 打包配置
//如果没有这个文件，默认配置
//src/ 开发目录
//dist/
//src/index.js
//require
const path = require('path');

module.exports = {
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        // babel,
        // stylus,
        //静态资源
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                use: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    }
}