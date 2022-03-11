const webpack = require('webpack')
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery'
      })
    ]
  },
  devServer: {
    // disableHostCheck: true, // 依赖一些工具可实现内网穿透 (这里没什么用)
    port: 8080, //本地项目端口
    proxy: {
      "/api": { // 这个意思是：原先以 /api 开头的请求
        target: 'https://nft-dev.ratafee.nl/', // 凡是以 /api 开头的请求，通通请求这个服务器
        changeOrigin: true, // 允许跨域
        pathRewrite: {
        //   '^/a': ''  // 上面那个 /api 替换成这个(如果原来的请求中没有这个 /api，可以使用这个方法将以 /api 开头的这个去掉)
        }
      },
      "/media": { // static files
        target: 'https://nft-dev.ratafee.nl/', // 凡是以 /api 开头的请求，通通请求这个服务器
        changeOrigin: true, // 允许跨域
        pathRewrite: {
          //'^/a': ''  // 上面那个 /api 替换成这个(如果原来的请求中没有这个 /api，可以使用这个方法将以 /api 开头的这个去掉)
        }
      }
    }
  },
  productionSourceMap: false,
  lintOnSave: false,
  chainWebpack: config => {
    config.entry.app = ["babel-polyfill", resolve(
      'src/main.js')],
      config.resolve.alias
        .set('@', resolve('src'))
        .set('@assets', resolve('src/assets'))
        .set('@components', resolve('src/components'))
        .set('@font', resolve('src/font'));
  },

}
