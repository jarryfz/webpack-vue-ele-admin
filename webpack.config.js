const path = require('path')
const isProductionMode = process.env.NODE_ENV === 'production'
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 提取css为单独文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 压缩css
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const ESLintWebpackPlugin = require('eslint-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: isProductionMode ? '[name].[contenthash].js' : '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
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
          // 'style-loader', // 创建style标签，将js中的样式资源插入，添加到head中生效
          isProductionMode ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          isProductionMode ? MiniCssExtractPlugin.loader : 'style-loader',
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
          filename: isProductionMode ? 'img/[name].[contenthash:10].[ext]' : 'img/[name].[hash].[ext]'
        }
      },
      // 处理字体资源
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: isProductionMode ? 'font/[name].[contenthash:10].[ext]' : 'font/[name].[hash].[ext]'
        }
      }
    ]
  },
  plugins: [
    // 打包前清理dist文件
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack-vue-cli',
      template: './public/index.html',
      // html压缩
      minify: {
        removeComments: !!isProductionMode, // 移除HTML中的注释
        collapseWhitespace: !!isProductionMode // 删除空白符与换行符
      }
    }),
    new MiniCssExtractPlugin({
      filename: isProductionMode ? 'css/[name].[contenthash].css' : 'css/[name].css'
    }),
    new ESLintWebpackPlugin({
      fix: true,
      extensions: ['js', 'json', 'coffee'],
      exclude: '/node_modules/'
    }),
    new VueLoaderPlugin()
  ],
  optimization: {
    // 代码分离
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
    // 运行的公用文件，设置为single时会将所有的共享依赖合并成一个文件，当有多个入口文件时需要这样做
    runtimeChunk: 'single',
    minimizer: [
      new CssMinimizerWebpackPlugin()
    ]
  },
  resolve: {
    // 配置省略文件路径后缀名
    extensions: ['.vue', '.js', '.css'],
    alias: {
      // 在import时使用了别名需要安装eslint-import-resolver-webpack
      '_c': path.resolve(__dirname, 'src/components'),
      '_v': path.resolve(__dirname, 'src/views')
    }
  },
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
  },
  devtool: 'source-map',
  mode: 'development'
}
