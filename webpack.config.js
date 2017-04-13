const { join, resolve } = require('path')
const webpack = require('webpack')
const glob = require('glob')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')

//页面对应路口
const entries = {}
const chunks = []

//获得入口
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
    publicPath: ''
  },
  resolve: {
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
          use: ['css-loader', 'sass-loader'],
        })

      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        })
      },

      {
        //修改html img路径
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            root: resolve(__dirname, 'src'),
            attrs: ['img:src', 'img:data-src', 'link:href']
          }
        }]
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        exclude: /favicon\.png$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: "[name].[ext]?[hash]"
          }
        }]
      }
    ]
  },
  plugins: [
    //获取公用模块生成js
    new CommonsChunkPlugin({
      name: 'vendors',
      filename: 'assets/js/vendors.js',
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
      // allChunks: true //只留公共
    })
  ],
  devServer: {
    host: '127.0.0.1',
    port: 8010,
    historyApiFallback: false,
    noInfo: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
  },
  devtool: '#eval-source-map'
}

glob.sync('./src/pages/**/*.html').forEach(path => {
  let filename = path.split('./src/pages/')[1].split('/app.html')[0] 
  const chunk = path.split('./src/pages/')[1].split('.html')[0]
  if(filename.match(/\//ig)){
    let arr = filename.split('/')
    filename = arr[arr.length-1]
  }
  const htmlConf = {
    filename: filename+".html",//文件名
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
  ])
}
