#webpack-page config说明：
<h2>
    webpack 多页环境搭建
</h2>
<h4>功能说明</h4>
<ul>
    </li>
    <li>
        编译：es6 （babel）,scss(node-sass), vue(vue-loader) 语法编译 --webpack.config
    </li>
    <li>
        兼容 自动添加浏览器前缀 (postcss)
    </li>
    <li>
        压缩：js(webpack),css(webpack),gif,jpg,png,svg(image-webpack-loader) --webpack.config
    </li>
    <li>
        资源引入，页面引入(ejs) --index.js
        <p>
            <code>
                <%= require(`../common/_meta.html`)  %>
            </code>
        </p>
        <P>
            <code>
                &lt;img src="<%= require(`assets/img/big.png`) %>" alt=""&elt;
            </code>
        </P>
        <P>
            <small>无法引入带ejs的页面</small>
        </P>
    </li>
    <li>
        实时代码查看，自动刷新浏览器(livereload) --index.ejs
    </li>
    <li>
        自动生成分页(glob) --webpack.config
    </li>
    <li>
        支持引入jquery,vue 公用 --index.js
    </li>
</ul>
<h4>问题</h4>
<ul>
    <li>开发模式中无法对新建页面进行编译</li>
</ul>

<h2>
    npm 操作
</h2>
<h4>下载依赖</h4>
<code>
    <pre>npm i</pre>
</code>

<h4>发布</h4>
<code>

    <pre>npm run build</pre>
</code>

<h4>实时编译开发</h4>
<code>
    <pre>npm run dev </pre>
</code>
<a href='http://127.0.0.1'>localhost:8010</a>

<h4>
    config 开发模式
</h4>
<code>npm run config</code>

<h4>文件结构</h4>
<ul>
    <li>dist //生成发布目录</li>
    <li>src //源码</li>
    <li>--assets //资源库</li>
    <li>----js //js库</li>
    <li>----css //样式库</li>
    <li>--pages //页面模板</li>
    <li>----index.ejs //单页面 生成时对应名称 ejs将生成html</li>
    <li>----spa.ejs vue路由dome</li>
    <li>--entry//页面入口</li>
    <li>----index.js//入口为同名js</li>
    <li>--views //vue视图模块</li>
    <li>--components //vue组件库</li>
</ul>

<h5>nodemon 配置</h5>
//使用nodemon 监控文件webpack.config ，页面模版 在变化时重新执行 webpack $ npm i nodemon -D package.json //命令 "scripts": { "start": "nodemon
" } nodemon.json //配置表 { "restartable": "rs", //忽略 "ignore": [ ".git", "node_modules/" ], //输出详细启动与重启信息 "verbose": true,
//运行服务的后缀名和对应的运行命令 "execMap": { "js": "webpack-dev-server" }, //运行到某些状态时的一些触发事件 "events": { //开始 "start":"webpack-dev-server",
//重新启动 "restart": "webpack-dev-server" }, // "runOnChangeOnly":true, //监控目标 "watch": [ "src/user/", "webpack.config.js" ],
"env": { "NODE_ENV": "development", "PORT": "3000" }, //监控的后缀 "ext": "ejs html js", "legacy-watch": false }