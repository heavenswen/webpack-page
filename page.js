// 页面配置 后缀 ，file ，页面模版
const { ext, pages, htmlTemplate } = require("./page-config")
//node cmd
const { exec } = require('child_process')
const glob = require('glob')
//w文件模块
const fs = require('fs')

const publicPage = "./src/pages/"
const publicEnrty = "./src/entry/"

//已存在页面
let filesPage = [];
glob.sync(publicPage + "**/*.{ejs,html}").forEach(path => {
    let chunk = path.split(publicPage)[1].split(/\.(ejs|html)/)[0]
    filesPage.push(chunk)
})
//入口文件
let filesEnrty = [];
glob.sync(publicEnrty + "**/*.js").forEach(path => {
    let chunk = path.split(publicEnrty)[1].split(/\.js/)[0]
    filesEnrty.push(chunk)
})

// 检查页面
pages.forEach(page => {
    let html = `${publicPage}${page}.${ext}`
    let entry = `${publicEnrty}${page}.js`
    if (filesPage.indexOf(page) == -1) writerFile(html, htmlTemplate)
    if (filesEnrty.indexOf(page) == -1) writerFile(entry)
})

//生成一个文件
function writerFile(file, data) {
    let writerStream = fs.createWriteStream(file)
    // 使用 utf8 编码写入数据
    if (data) writerStream.write(data, 'UTF8');
    // 标记文件末尾
    writerStream.end();
    // 处理流事件 --> data, end, and error
    writerStream.on('finish', function () {
        console.log(`${file}---ok`);
    });
    writerStream.on('error', function (err) {
        console.log(`${file} error: ${err}`);
    });
}

//执行开发环境
function run() {
    exec('npm run dev', { cwd: './' }, (error, stdout, stderr) => {
        if (error) {
            //若失败会出现error
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    });
}
console.log("npm run dev server:127.0.0.1:8010")
run();