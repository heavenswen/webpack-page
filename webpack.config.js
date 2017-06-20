const { join, resolve } = require('path')
const webpack = require('webpack')
const glob = require('glob')
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const release = process.env.NODE_ENV === 'production' ? '/cxtdemo/' : '/'//域名文件夹
//页面对应路口
const entries = {}
//入口对象集
const chunks = []
//页面list
const pagesList = []
//logo
const favicon = "./src/assets/img/logo.png"

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
    //忽略以下js
    noParse: /node_modules\/(jquey|moment|chart\.js)/,
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
      // {
      //   //图形资源
      //   test: /\.(png|jpg|jpeg|gif|svg|svgz)(\?.+)?$/,
      //   exclude: /favicon\.(png|ico)$/,
      //   use: [{
      //     loader: 'url-loader',
      //     options: {
      //       limit: 1000,
      //       name: "[name].[ext]?[hash]",
      //       outputPath: "assets/img/",
      //       publicPath: release + "assets/img/"
      //     }
      //   }]
      // },
      {
        test: /\.(png|jpg|jpeg|gif|svg|svgz)(\?.+)?$/,
        exclude: /favicon\.(png|ico)$/,//除外
        loaders: [
          'url-loader?limit=1000&outputPath=assets/img/&name=[name].[ext]?[hash]',
          {
            loader: 'image-webpack-loader',
            options: {
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 1,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              mozjpeg: {
                progressive: true,
                quality: 65
              }
            }
          }
        ]
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
            //publicPath: release + "assets/fonts/"
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
    port: 8010,
    historyApiFallback: false,
    noInfo: true,
  },
  devtool: '#eval-source-map'
}

glob.sync("./src/pages/user/**/*.{ejs,html}").forEach(path => {
  //HtmlWebpackPlugin 不支持 .html 编译 ejs 用.ejs
  let filename = path.split('./src/pages/')[1].split(/\/app.(ejs|html)/)[0]
  let chunk = path.split('./src/pages/')[1].split(".ejs")[0] //入口文件名

  //获得对应名称 产出到跟目录
  if (filename.match(/\//ig)) {
    let arr = filename.split('/')
    filename = arr[arr.length - 1]
  }
  //获得所有页面
  pagesList.push(filename)
  let htmlConf = {
    filename: filename + ".html",//文件名
    template: path,
    inject: 'body',
    favicon: favicon,
    hash: process.env.NODE_ENV === 'production',
    env: process.env.NODE_ENV === 'production',//HtmlWebpackPlugin.options.env 非打包时的处理
    list: pagesList,
    chunks: ['vendors', chunk] //chunk
  }
  if (filename) config.plugins.push(new HtmlWebpackPlugin(htmlConf))

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
      // 最紧凑的输出
      beautify: false,
      // 删除所有的注释
      comments: false,
      compress: {
        // 在UglifyJs删除没有用到的代码时不输出警告  
        warnings: false,
        // 删除所有的 `console` 语句
        // 还可以兼容ie浏览器
        drop_console: true,
        // 内嵌定义了但是只用到一次的变量
        collapse_vars: true,
        // 提取出出现多次但是没有定义成变量去引用的静态值
        reduce_vars: true,
      }
    }),

    //压缩单独的css
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    }),
    new ImageminPlugin({
      disable: process.env.NODE_ENV !== 'production', // Disable during development
      pngquant: {
        quality: '95-100'
      }
    })
  ])
}
