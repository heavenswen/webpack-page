//编译状态
const Env = process.env.NODE_ENV === 'production'
const { join, resolve } = require('path')
const webpack = require('webpack')
const glob = require('glob')
// const ImageminPlugin = require('imagemin-webpack-plugin').default;
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')
const LiveReloadPlugin = require('webpack-livereload-plugin')
const ROOT = process.cwd();  // 根目录
// 通过允许您并行转换多个文件， HappyPack使Webpack构建更快。
const HappyPack = require('happypack');
const HappyThreadPool = HappyPack.ThreadPool({ size: (Env ? 10 : 4) });

const release = Env ? '/webpack-page/dist/' : '/'//域名文件夹
//页面对应路口
const entries = {}
//入口对象集
const chunks = []
//页面list
const pagesList = []
//logo
const favicon = "./src/assets/img/logo.png"
// 页面模版
const entryHtml = []

//页面模版
glob.sync("./src/pages/**/*.{ejs,html}").forEach(path => {
  //HtmlWebpackPlugin 不支持 .html 编译 ejs 用.ejs
  let filename = path.split('./src/pages/')[1]

  //入口js文件名 
  let chunk = path.split('./src/pages/')[1].split(/\.(ejs|html)/)[0]
  //设置产出路径
  chunk = 'js/' + chunk
  // 入口js路径
  let js = path

  //js路径
  js = js.replace(/\/pages/ig, '/entry');
  js = js.replace(/\.(ejs|html)/gi, '.js');
  entries[chunk] = js
  //入口js名称名称
  chunks.push(chunk)

  filename = filename.replace(/\.ejs/ig, '.html')
  //获得所有页面 
  pagesList.push(filename)
  let htmlConf = {
    filename: filename,//文件名
    //模版位置
    template: path,
    inject: 'body',
    favicon: favicon,
    hash: Env,
    env: Env,//HtmlWebpackPlugin.options.env 非打包时的处理
    list: pagesList,//页面地址
    chunks: ['vendors', chunk] //chunk
  }

  //保存配置
  entryHtml.push(htmlConf)

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
      //资源
      assets: join(__dirname, '/src/assets'),
      //组件
      components: join(__dirname, '/src/components'),
      //视图
      views: join(__dirname, '/src/views'),
      root: join(__dirname, 'node_modules')

    }
  },
  module: {
    //忽略以下js
    noParse: /node_modules\/(jquey|zepto|moment|chart\.js)/,
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader?id=js',
          options: {
            //es6
            presets: ['es2015']
          }
        }],
      },
      {
        //编译sass 
        test: /\.(scss|sass)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader?id=style',
          use: [{
            loader: 'css-loader?id=style',
            options: {
              //压缩css
              minimize: Env
            }
          }, 'postcss-loader?id=style', 'sass-loader?id=style'],
        })

      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader?id=style',
          use: [{
            loader: 'css-loader?id=style',
            options: {
              //压缩css
              minimize: Env
            }
          }, 'postcss-loader?id=style'],
        })
      },

      {
        //修改html img路径
        test: /\.(html|ejs)$/,
        use: [{
          loader: 'html-loader',
          options: {
            root: resolve(__dirname, 'src'),
            attrs: ['img:src', 'img:data-src', 'img:data-background',"video:src","audio:src", "source:src",'link:href']
          }
        }]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|svgz)(\?.+)?$/,
        exclude: /favicon\.(png|ico)$/,//除外
        loaders: [
          'url-loader?limit=1000&outputPath=assets/img/&name=[name].[ext]?[hash]',
          {
            //图片压缩
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
          }
        }]
      },
      {
        //资源
        test: /\.(apk|docx|doc|exe|mp4|org)(\?.+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: "[name].[ext]?[hash]",
            outputPath: "assets/file/",//产出目录
          }
        }]
      }
    ]
  },
  plugins: [
    //页面即时刷新 会跟--hot冲突，导致js修改时找不到修改对象
    new LiveReloadPlugin({}),
    new HappyPack({
      id: 'js',
      // @see https://github.com/amireh/happypack
      threadPool: HappyThreadPool,
      loaders: ['babel-loader']
    }),
    new HappyPack({
      id: 'styles',
      threadPool: HappyThreadPool,
      loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
    }),
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
          name = arr[arr.length - 1]//获得文件名
        }
        return 'assets/css/' + name + '.css';
      },
   
      allChunks: true
    }),
 
    //webpack3.0
    new webpack.optimize.ModuleConcatenationPlugin()
  ],
  devServer: {
    contentBase: [
      join(ROOT, 'src/')
    ],
    port: 8010,
    //启动路由功能
    //historyApiFallback: false,
    // noInfo: true,
    hot: false,
    //真实地址 可以用局域访问
    disableHostCheck: true,
    //允许其他电脑访问
    host: '0.0.0.0',
  },
  devtool: '#eval-source-map'
}


//页面模版
entryHtml.forEach(function (v) {
  config.plugins.push(new HtmlWebpackPlugin(v));
});

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
    //压缩单元
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

  ])
}
