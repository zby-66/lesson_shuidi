// // 跨域解决方案 ngnix
// module.exports = {
//     devServer: {
//       // 127.0.0.0.1:8000/api/admin/login
//       proxy: { // 代理
//         '/api': {
//           // 转发到 http://127.0.0.0.1:3000
//           target: 'http://127.0.0.1:3000',
//           changeOrigin: true, // 换源
//           pathRewrite: {
//             '^/api': '' // 去掉 api 变成 http://127.0.0.0.1:3000/admin/login
//           }
//         }
//       }
//     }
//   }

//  跨域解决方案  ngnix vue-clie 3.0
module.exports = {
  publicPath: "/admin/",
  // a <->   proxy(中介 代理 58)  <->    b
  devServer: {
    //     /api/admin/login'    /admin/login
    proxy: {
      // 网络
      '/api': {
        //转发到 伪装成3000
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        // http://127.0.0.1:3000/admin/login
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: {
    performance: {
      hints: 'warning',
      //入口起点的最大体积 整数类型（以字节为单位）
      maxEntrypointSize: 50000000,
      //生成文件的最大体积 整数类型（以字节为单位 300k）
      maxAssetSize: 30000000,
      //只给出 js 文件的性能提示
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith('.js');
      }
    }
  }
}