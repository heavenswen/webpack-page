import 'assets/css/react.scss'

//仿网易云音乐搜索
import  "assets/css/search-wyy.css"
import Search from "assets/js/search-wyy"
//焦点提示框
import 'assets/css/Focus-tip.css'
import Tip from "assets/js/Focus-tip.js"

import "assets/js/cpdf.js"
//搜索框
var search = new Search("#search", {
    callBack: function (v, fn) {

        return [
            {
                title: "视频",
                href: "#",
                list: [
                    {
                        title: "3d制作",
                        href: "url"
                    },
                    {
                        title: "3d制作",
                        href: "url"
                    }
                ]
            },
            {
                title: "视频",
                href: "#",
                list: [
                    {
                        title: "3d制作",
                        href: "url"
                    },
                    {
                        title: "3d制作",
                        href: "url"
                    }
                ]
            },
        ];
    }
});

//焦点提示
var tip = new Tip();

tip.initObj("input");



