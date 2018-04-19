# webpack 多页环境搭建

### 功能说明

+ 编译：es6 （babel）,scss(node-sass), vue(vue-loader) 语法编译 --webpack.config
+ 兼容 自动添加浏览器前缀 (postcss)，vw单位转换等
+ 压缩：js(webpack),css(webpack),gif,jpg,png,svg(image-webpack-loader) --webpack.config
+ 资源引入，页面引入(ejs) --index.js
```
  <%= require(`../common/_meta.html`)  %>
  <img src="<%= require(`assets/img/big.png`) %>" alt="">
```
无法引入带ejs的页面
+ 实时代码查看，自动刷新浏览器(livereload) --index.ejs
+ 自动生成分页(glob) --webpack.config
+ 支持引入jquery,vue 公用 --index.js
+ 分页模版自己的生成，重启环境 --page.js 

## npm 操作

#### 下载依赖
```
npm i
```
#### 发布
```
npm run build
```

#### 实时编译开发
```
npm run dev
```
[localhost:8010](http://localhost:8010)


####  分页开发模式
page-config 添加分页，自动生成对应页面,但使用child_process模块，将无法看到编译过程，重新和开始可能较缓慢，只是节省了人工重启webpack的动作请耐心等待。错误查看请在浏览器F12上查看。
```
npm run page
```

### 文件结构

+ dist //生成发布目录
+ src //源码
    + assets //资源库
        + js //js库
        + css //样式库
    + pages //页面模板
    生成时对应名称ejs将生成html
        + index.ejs //样式库demo
        + spa.ejs //单页程序dome
        + demo.ejs //模块化js demo
        + nav.ejs //ejs demo
    + entry//页面入口
        + index.js//入口为同名js
    + views //vue视图模块
    + components //vue组件库
+ postcss.config.js //postcss 配置
+ package-lock.json //锁定安装时的包的版本号，并且需要上传到git，以保证其他人在npm install时大家的依赖能保证一致。
+ webpack.config.js //编译解析逻辑
+ .eslintrc.js  //
+ .gitignore  //git 过滤
+ LICENSE //开源协议
+ page.js //页面生成脚本
+ page-config.js//页面配置文件

### ejs说明
html-webpack-plugin可以用html作为模版文件，但是这会和全局配置的html-loader冲突造成无法用ejs语法嵌入图片。
将模版文件全部替换成ejs文件（默认模版，官方推荐）

这样做的原因是即使使用了全局的html-loader来加载html文件，但是它也加载不到.ejs结尾的ejs文件。这样有效避免了html-loader对ejs fallback的影响。

因为有全局html-loader的存在，所以不需要加（html-loader!）前缀
```
<%= require('../layout/left.html') %> //如果嵌入文件是html文件
```
因为是ejs文件不会被全局html-loader加载，所以要加前缀
(引入的ejs文件里的ejs并不会生效)
```
<%= require('html-loader!../layout/left.ejs') %> //如果嵌入文件是ejs文件
```
直接可以使用require来嵌入图片
```
<img src=<%= require( '../img/test.jpg') %> />
```
[参考](https://www.imooc.com/article/18513?block_id=tuijian_wz)

### CSS BEM規範
提高CSS的可读化和oocss思想让css的可复用性更强
(推荐)使用 rel='' 表示来做css选择器，避免class的滥用，data-*作为数据的存储
```
    //写法 区块__元件--修饰
    block__element--modaifer
    //多个单词组成
    block-name
```
### css样式库 
类bs布局
+ _common.scss 样式库
+ _const.scss 样式中的基础数值
+ _align.scss 对齐 flex
+ _container 主容器
+ _form 表单类 
+ _icon 直接用标签生成简单图标

###### Block 区块
主要描述组件的主体

###### Element 元素
用来描述组件的单元
###### Modifer 修饰
用来描述样式和修饰，不重写组件基础样式，多种修饰应该分开写

BEM写法虽然会加大代码量，但也很好的实现了OOCSS的思想，并且开服务器开启Gzip时，并不会增大多少体积。

### postcss说明

#### autoprefixer 配置
autoprefixer可以自动添加浏览器所需要的前缀
1. postcss.confug.js
```
 plugins: [
        require('autoprefixer')({
            // 兼容
            "browserslist": [
                "defaults",
                "not ie < 10",
                "last 2 versions",
                "1%",
                "iOS 7",
                "last 3 iOS versions"
            ]
        }),
        //px to vw
        // require('postcss-px2viewport')
    ],
```
2. package.json内增加
```
"browserslist": [
   ">= 1%", //全球浏览器使用率大于1%或大于等于1%（上例中则是1%）。
   "last 2 versions", //每个浏览器中最新的两个版本。
   "ie 6-8", //选择包含ie6-8的版本。
  "Firefox 20" //火狐版本号大于20。
]
```
3. webpack.config.js使用LoaderOptionsPluginplugins
```

 plugins: [
    new webpack.LoaderOptionsPlugin({
        options: {
            postcss: function(){
                return [
                    require("autoprefixer")({
                        browsers: ['ie>=8','>1% in CN']
                    })
                ]
            }
        }
    })
]
```

#### postcss-px2viewport说明
vw方案是处理手机端自适应解决方案，设置设计稿尺寸，编写时能将我们编写的px转换成vw单位
postcss.config.js 
```
plugins:[
    require('postcss-px2viewport')
]
postcss: function () {
        return [px2viewport({ viewportWidth: 750,viewportHeight:1334 })];
}
```
.css 标记
/*px*/的，则转换为[data-dpr="1"]、[data-dpr="2"]、[data-dpr="3"]三种不同的字体
/*no*/的，则不做处理，依然使用px进行布局


### nodemon 配置
使用nodemon 监控文件webpack.config ，页面模版 在变化时重新执行 webpack 
install
```
$ npm i nodemon -D 
```
--watch 监控文件  --exec 执行命令
``` 
"scripts": { 
    "start": "nodemon --watch file||path --exec \"node page \"" }
``` 
nodemon.json 
配置表说明
```
{ 
    "restartable": "rs", 
    //忽略 
    "ignore": [ ".git", "node_modules/" ], 
    //输出详细启动与重启信息 
    "verbose": true,
    //运行服务的后缀名和对应的运行命令 
    "execMap": { 
        "js": "webpack-dev-server" 
        }, 
    //运行到某些状态时的一些触发事件 
    "events": { 
        //开始 
        "start":"webpack-dev-server",
        //重新启动 
        "restart": "webpack-dev-server" 
    },
    "runOnChangeOnly":true, 
    //监控目标 
    "watch": [ "src/user/", "webpack.config.js" ],
    "env": { "NODE_ENV": "development", "PORT": "3000" }, 
    //监控的后缀 
    "ext": "ejs html js", 
    "legacy-watch": false 
}
```