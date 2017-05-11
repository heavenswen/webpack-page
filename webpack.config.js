const { join, resolve } = require('path')
const webpack = require('webpack')
const glob = require('glob')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const release = process.env.NODE_ENV === 'production' ? '/cxtdemo/' : '/'//域名文件夹
const myHost = "192.168.4.30"
//页面对应路口
const entries = {}
//入口对象集
const chunks = []

//获得入口js
glob.sync('./src/pages/**/*.js').forEach(path => {
  const chunk = path.split('./src/pages/')[1].split('.js')[0]
  entries[chunk] = path
  chunks.push(chunk)
})

const config = {
  entry: entries,
  output: {
    path: resolve(__dirname, './dist'),
    filename: '[name].js',
    publicPath: release
  },
  resolve: {
    //路径检索
    extensions: ['.js', '.vue'],
    alias: {
      assets: join(__dirname, '/src/assets'),
      components: join(__dirname, '/src/components'),
      root: join(__dirname, 'node_modules')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      // {
      //   //html-withimg-loader
      //   test: /\.(htm|html|ejs)$/i,
      //   use: 'html-withimg-loader'
      // },
      //提取css
      // {
      //   //编译sass 
      //   test: /\.(scss|sass)$/,

      //   use: ['style-loader', 'css-loader', 'sass-loader'],

      // },
      //  {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader'],
      // },
      {
        //编译sass 
        test: /\.(scss|sass)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader'],
        })

      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader'],
        })
      },

      {
        //修改html img路径
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            root: resolve(__dirname, 'src'),
            attrs: ['img:src', 'img:data-src', 'img:data-background', 'link:href']
          }
        }]
      },
      {
        //图形资源
        test: /\.(png|jpg|jpeg|gif|svg|svgz)(\?.+)?$/,
        exclude: /favicon\.png$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1000,
            name: "[name].[ext]?[hash]",
            outputPath: "assets/img/",
            publicPath: release + "assets/img/"
          }
        }]
      },
      {
        //文字资源
        test: /\.(eot|ttf|woff|woff2)(\?.+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1000,
            name: "[name].[ext]?[hash]",
            outputPath: "assets/fonts/",//产出目录
            publicPath: release + "assets/fonts/"
          }
        }]
      }
    ]
  },
  plugins: [
    //获取公用模块生成js
    new CommonsChunkPlugin({
      name: 'vendors',
      filename: 'assets/js/vendors.js?[hash]',
      chunks: chunks,
      minChunks: chunks.length
    }),
    //提取公用模块生成css
    new ExtractTextPlugin({
      filename: (getPath) => {
        //获得地址
        let name = getPath('[name]')
        if (!name.match(/vendors/ig)) {
          let arr = name.split('/')
          name = arr[arr.length - 2]//获得文件名
        }
        return 'assets/css/' + name + '.css';
      },
      allChunks: true
    }),

  ],
  devServer: {
    host: myHost,
    port: 8010,
    historyApiFallback: false,
    noInfo: true,
    proxy: {
      '/api': {
        target: 'http://' + myHost + ':8010',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
  },
  devtool: '#eval-source-map'
}

glob.sync("./src/pages/**/*.{ejs,html}").forEach(path => {
  //HtmlWebpackPlugin 不支持 .html 编译 ejs 用.ejs
  let filename = path.split('./src/pages/')[1].split(/\/app.(ejs|html)/)[0]
  const chunk = path.split('./src/pages/')[1].split(".ejs")[0] //入口文件名

  if (filename.match(/\//ig)) {
    let arr = filename.split('/')
    filename = arr[arr.length - 1]
  }
  const htmlConf = {
    filename: filename + ".html",//文件名
    template: path,
    inject: 'body',
    favicon: './src/assets/img/logo.png',
    hash: process.env.NODE_ENV === 'production',
    chunks: ['vendors', chunk] //chunk
  }
  config.plugins.push(new HtmlWebpackPlugin(htmlConf))
})

module.exports = config

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]),
    //压缩单独的css
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    })
}
