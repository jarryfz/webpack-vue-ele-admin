const path = require('path')
const { merge } = require('webpack-merge')
// 公共webpack配置
const common = require('./webpack.common')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const smp = new SpeedMeasurePlugin()
// 导入配置文件
const config = require('../config/index')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = merge(common, smp.wrap({
  mode: 'development',
  // cache: {
  //   type: 'filesystem' // 使用文件缓存(快速提升二次构建速度)
  // },
  devtool: 'eval-cheap-module-source-map',
  module: {
    rules: [
    ]
  },
  plugins: [
    // 定义全局变量
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    new HtmlWebpackPlugin({
      title: 'webpack-vue-admin',
      filename: 'index.html',
      template: './public/index.html'
    }),
    // 把public的一些静态文件复制到指定位置，排除html文件
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public'),
          // to: path.resolve(__dirname, '../dist'),
          globOptions: {
            dot: true,
            gitignore: true,
            ignore: ['**/*.html']
          }
        }
      ]
    })
  ],
  /**
   * 开发服务器devServer：用来自动化（自动编译，自动打开浏览器，自动刷新浏览器）
   * 特点：只会在内存中编译打包，不会有任何输出
   * 启动命令：npx webpack-dev-server
  */
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    compress: true,
    hot: true,
    port: 3000,
    open: true
  }
}))
