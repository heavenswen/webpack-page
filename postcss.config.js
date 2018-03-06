//postcss
module.exports = {
    plugins: [
        require('autoprefixer')({
            // 兼容
            "browserslist": [
                "defaults",
                "not ie < 10",
                "last 2 versions",
                "> 1%",
                "iOS 7",
                "last 3 iOS versions"
            ]
        }),
        //px to vw
        require('postcss-px2viewport')
    ],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!postcss-loader"
            }
        ]
    },
    postcss: function () {
        //px to vw 
        //css 标记
        // /*px*/的，则转换为[data-dpr="1"]、[data-dpr="2"]、[data-dpr="3"]三种不同的字体
        // /*no*/的，则不做处理，依然使用px进行布局
        return [px2viewport({ viewportWidth: 750,viewportHeight:1334 })];
    }
}
// autoprefixer 配置
//2.package.json内增加如下示例
// "browserslist": [
//   ">= 1%", //全球浏览器使用率大于1%或大于等于1%（上例中则是1%）。
//   "last 2 versions", //每个浏览器中最新的两个版本。
//   "ie 6-8", //选择包含ie6-8的版本。
//  "Firefox > 20" //火狐版本号大于20。
// ]
// 3.webpack.config.js使用LoaderOptionsPluginplugins: [
// plugins: [
//     new webpack.LoaderOptionsPlugin({
//         options: {
//             postcss: function(){
//                 return [
//                     require("autoprefixer")({
//                         browsers: ['ie>=8','>1% in CN']
//                     })
//                 ]
//             }
//         }
//     })
// ]