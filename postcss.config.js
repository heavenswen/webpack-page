//postcss
module.exports = {
    plugins: [
        require('autoprefixer')
    ]
}
// package.json内增加如下示例
// "browserslist": [
//   ">= 1%", //全球浏览器使用率大于1%或大于等于1%（上例中则是1%）。
//   "last 2 versions", //每个浏览器中最新的两个版本。
//   "ie 6-8", //选择包含ie6-8的版本。
//  "Firefox > 20" //火狐版本号大于20。
// ]