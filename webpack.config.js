const { join, resolve } = require('path')
const webpack = require('webpack')
const glob = require('glob')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const { WebPlugin, AutoWebPlugin } = require('web-webpack-plugin')

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
    // new CommonsChunkPlugin({
    //   name: 'vendors',
    //   filename: 'assets/js/vendors.js?[hash]',
    //   chunks: chunks,
    //   minChunks: chunks.length
    // }),
    //提取公用模块生成css
    new ExtractTextPlugin({
      filename: (getPath) => {
        //获得地址
        let name = getPath('[name]')
        if (!name.match(/vendors/ig)) {
          let arr = name.split('/')
          name = arr[arr.length - 2]//获得文件名
        }
        console.log(name)
        return 'assets/css/' + name + '.css';
      },
      allChunks: true
    }),
    new AutoWebPlugin(
      // 所有页面的入口目录
      './src/pages/user',
      {
        // 以下所有的属性都不是必须的，按照需要选填  

        // {string,function}
        // 所有页面采用的模版文件
        // 如果 template 的类型是 string，template代表模版文件的相对于当前目录根目录的全文件路径
        // 如果 template 的类型是 function，template代表可自定义逻辑的函数 function(pageName)=>newFullPath，告诉你当前页面名称你返回一个新的路径代表当前页面的模版路径
        template(p) {
          return "./src/pages/user/" + p + "/app.ejs"

        },

        // 当前页面的javascript入口文件，如果为空就使用当前page目录下的 index.js 作为入口
        // 如果 entry 的类型是 string，entry代表入口文件的相对于当前目录根目录的全文件路径
        // 如果 entry 的类型是 function，entry代表可自定义逻辑的函数 function(pageName)=>newFullPath，告诉你当前页面名称你返回一个新的路径代表当前页面的入口路径
        entry(p) {

          return "./src/pages/user/" + p + "/app.js"
        },

        // {function}
        // 每个page输出的html的名称，默认按照文件夹名称作为html名称，
        // 设置 filename 为 function(pageName)=>filename 类型 可添加自定义逻辑
        filename: null,

        // 提取出所有页面公共的代码,如果为空就不做提取操作。
        // 透传给 `CommonsChunkPlugin` 插件的属性
        commonsChunk: {
          name: 'vendors',// 必填属性,输出的文件名称
          minChunks: 2,// 来自 CommonsChunkPlugin 插件
        },

        // 在所有入口页面的entry前插入
        // preEntrys: ['./path/to/file1.js'],

        // 在所有入口页面的entry后插入
        // postEntrys: ['./path/to/file2.js'],

        // {string} publicPath for css file,for js file will use webpack.publicPath
        // stylePublicPath: null,

        // page name list will not ignore by AutoWebPlugin(Not output html file for this page name)
        ignorePages: ['pageName'],

        // 是否输出一个名叫 pagemap.json 的文件，这个文件包含所有被AutoWebPlugin解析到的2入口页面，文件格式如下
        // {"page name": "page url",}
        outputPagemap: true,
      }),

  ],
  devServer: {
    port: 8010,
    historyApiFallback: false,
    noInfo: true,
  },
  devtool: '#eval-source-map'
}

//建立HtmlWebpackPlugin 模版
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
    env: process.env.NODE_ENV === 'production',//HtmlWebpackPlugin.options.env 非打包时的处理
    chunks: ['vendors', chunk] //chunk
  }
  // config.plugins.push(new HtmlWebpackPlugin(htmlConf))
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
