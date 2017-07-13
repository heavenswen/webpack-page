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
<h4>npm start <h4>
监控ser/pages 修改 并重启webopack dev
<p>(因为监控的是修改，添加和删除无法触发)</p>

<h4>发布</h4>
<pre>npm run build</pre>

<ul>
<h4>文件结构</h4>
<li>-dist //生成发布目录
<li>-src //源码
<li>--assets //资源库
<li>---js
<li>----index.js入口为同名js
<li>---css
<li>--pages //页面资源
<li>---user //页面库
<li>----index.ejs //单页面 生成时对应名称 ejs将生成html
</ul>
