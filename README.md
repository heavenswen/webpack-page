#webpack-page

config说明：

webpack 多页环境搭建 jquery,window引入方法 分离公用css、js,生成对应入口css、js ,压缩img,css、js， html生成对应页面,支持 vue ，sass，es6编译
--地址请使用绝对地址，可以修改webpack.config ：release



npm 操作

<h4>下载依赖</h4>
<pre>npm i</pre>

<h4>测试服务器</h4>
<pre>npm run dev </pre>
//局域网地址<a href='http://127.0.0.1'>localhost:8010</a>

<h4>npm run work <h4>
nodemon监控webpack.config 
<h4>npm run mon <h4>
nodemon监控webpack.config 和 /pages 并重启webopack dev,但重启应用时间过长，希望还是使用work模式

<h4>发布</h4>
<pre>npm run build</pre>

<ul>
<h4>文件结构</h4>
<li>-dist //生成发布目录
<li>-src //源码
<li>--assets //资源库
<li>---js //js库
<li>---css //样式库
<li>--pages //页面资源
<li>---index.ejs //单页面 生成时对应名称 ejs将生成html
<li>--user //页面入口
<li>---index.js//入口为同名js
<li>--views //视图模块
<li>--components /组件库
</ul>

 
//使用nodemon 监控文件webpack.config ，页面模版 在变化时重新执行 webpack

$ npm i nodemon -D


package.json
//命令
"scripts": {
     "start": "nodemon "
 }

nodemon.json
//配置表
{
    "restartable": "rs",
    //忽略
    "ignore": [
        ".git",
        "node_modules/"
    ],
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
    //
    "runOnChangeOnly":true, 
    //监控目标
    "watch": [
        "src/user/",
        "webpack.config.js"
    ],
    "env": {
        "NODE_ENV": "development",
        "PORT": "3000"
    },
    //监控的后缀
    "ext": "ejs html js",
    "legacy-watch": false
}
