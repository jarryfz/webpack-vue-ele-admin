const path = require('path')

const { VueLoaderPlugin } = require('vue-loader')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 提取css为单独文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 导入配置文件
// const config = require('../config/index')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const isProd = process.argv[2] !== 'serve'

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: isProd ? '[name].[contenthash].js' : '[name].js',
    clean: true
  },
  resolve: {
    // 配置省略文件路径后缀名
    extensions: ['.vue', '.js', '.css', '.less'],
    // 配置别名
    alias: {
      // 在import时使用了别名需要安装eslint-import-resolver-webpack
      '@': path.resolve(__dirname, '../src'),
      '_c': path.resolve(__dirname, '../src/components'),
      '_v': path.resolve(__dirname, '../src/views')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          preserveWhitepace: true, // 清除文本换行等情况空格
          extractCSS: true, // 把vue的css提取到单独的文件，默认
          cssModules: {} // 用法：<style module>
          // hotReload: true // 热更新，默认会自动判断是否开发环境自动开启关闭，其实关闭后也会刷新页面更新
        },
        exclude: '/node_modules/'
      },
      /**
       * css与less样式文件处理
       * 提取css单独文件 mini-css-extract-plugin插件
      */
      {
        test: /\.css$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
          options: {
            // 开启babel缓存
            // 第二次构建时，会读取之前的缓存
            cacheDirectory: true
          }
        }
      },
      // 处理图片资源 webpack5已经废弃url-loader，使用type
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: isProd ? 'img/[name].[contenthash].[ext]' : 'img/[name].[hash].[ext]'
        }
      },
      // 处理字体资源
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: isProd ? 'font/[name].[contenthash].[ext]' : 'font/[name].[hash].[ext]'
        }
      }
    ]
  },
  plugins: [
    // 每次构建清理dist文件夹
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      title: 'webpack-vue-ele-admin',
      // 压缩html
      minify: {
        removeComments: isProd, // 移除html中的注释
        collapseWhitespace: isProd // 删除空白符和换行符
      }
    })
  ]
}