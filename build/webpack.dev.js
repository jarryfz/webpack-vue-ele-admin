const { merge } = require('webpack-merge')
// 公共webpack配置
const common = require('./webpack.common')
// 导入配置文件
const config = require('../config/index')
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
    ]
  },
  plugins: [
    // 定义全局变量
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    })
  ],
  /**
   * 开发服务器devServer：用来自动化（自动编译，自动打开浏览器，自动刷新浏览器）
   * 特点：只会在内存中编译打包，不会有任何输出
   * 启动命令：npx webpack-dev-server
  */
  devServer: {
    static: {
      publicPath: '/'
    },
    compress: true,
    hot: true,
    port: 3000,
    open: true
  }
})
