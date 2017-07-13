#webpack-page

config说明：

webpack 多页环境搭建 jquery,window引入方法 分离公用css、js,生成对应入口css、js ,压缩img,css、js， html生成对应页面,支持 vue ，sass，es6编译
--地址请使用绝对地址，可以修改webpack.config ：release

缺点：
    webpack是根据配置编译后执行到缓存中，目前无法监控模版文件的添加和删除

npm 操作

<h4>下载依赖</h4>
<pre>npm i</pre>

<h4>测试服务器</h4>
<pre>npm run dev</pre>
//局域网地址 127.0.0.1:8010
<h4>测试服务器</h4>
<pre>npm run work</pre>
//局域网地址 192.168.4.30 --host 192.168.4.30(去掉为127.0.0.1)
//webpack-dev-server --inline --hot --host 192.168.4.30

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
