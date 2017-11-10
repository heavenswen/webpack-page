/**
 * @file  仿网易云搜索UI
 * @author qiu(423822728@qq.com)
 */
; (function () {

    var searchWYY = function (seleter, obj) {
        //触发器
        this.dom = document.querySelector(seleter);

        //更多参数
        function exend(obj) {
            //默认设置
            let json = {
                //默认默认为搜索宽宽度
                margin: '0',
                width: that.xy.w,
                //数据字段
                title: 'title',//分类
                href: 'href',//分类链接
                list: "list",//子类列表
                cell: 'value',//子类名称
                cellHref: 'href',//子类链接
            }
            //过滤
            let data = obj || {};
            for (let key in json) {
                if (!data[key]) data[key] = json[key]
            }

            return data;
        }
        //容器层
        this.parent = this.dom.offsetParent;
        // 获得目标参数
        this.xy = {
            h: this.dom.clientHeight,
            //作为显示栏宽度
            w: this.dom.clientWidth,
            //get xy relative to parent
            y: this.dom.offsetTop,
            x: this.dom.offsetLeft
        };
        //content dom 展示框
        this.htm = document.createElement("section");
        //添加样式组
        this.htm.classList.add("search-com");

        //获得 数据字段名 
        var that = this;

        var keys = exend(obj);

        //显示菜单
        function initSearch() {
            let value = this.value
            //为空时删除
            if (!value) {
                return that.remove();
            };
            //渲染数据
            that.append(value, dataJson);
        }

        var trigger = new Event("trigger", { "bubbles": true, "cancelable": false });

        this.dom.addEventListener("trigger", initSearch)

        this.dom.addEventListener("input", function () {
            this.dom.dispatchEvent(trigger)
        })


        //生成展示框 (查询的值,数据) 
        function addHtmFn(value, json) {
            let htm = '<p class="search-tip">搜索“' + value + '”相关内容</p>';
            //标注
            let reg = RegExp(value, 'ig');
            //class
            for (let k in json) {
                //item
                let cls = json[k];
                let ul = '';
                //获得详情

                for (let i = 0; i < cls[keys.list].length; i++) {
                    let li = cls[keys.list][i]
                    let content = li[keys.cell];
                    //标记关键字
                    content = content.replace(reg, "<span class='search-keys'>" + value + "</span>");
                    ul += " <li><a href = '" + li[keys.cellHref] + "'>" + content + "</a></li>"

                }

                htm += "<div class=\"search-item\">"
                    +
                    "<h4 class='search-tit'><a href='" + cls[keys.href] + "'>" + cls[keys.title] + "</a></h4><ul class='search-cell'>" +
                    ul
                    + "</ul></div>";

            }

            return htm;

        };
        //trigger 生成 搜索框
        this.append = function (value, json) {
            console.log(keys)
            this.htm.style.width = this.xy.w + "px";
            this.htm.style.top = Number(this.xy.y) + Number(this.xy.h) + Number(keys.margin) + "px";
            this.htm.style.left = Number(this.xy.x) + "px";
            this.htm.innerHTML = addHtmFn(value, json)
            //添加dom
            this.parent.appendChild(this.htm)
        }
        //自定义dom
        this.addDom = function (dom) {
            this.htm.innerHTML = dom;
            //添加dom
            this.parent.appendChild(this.htm)
        }
        //删除 搜索框            
        this.remove = function () {
            this.htm.remove();
        }

    }

    window.searchWYY = searchWYY
})()

// AMD Export
if (typeof (module) !== 'undefined') {
    module.exports = window.searchWYY;
}
else if (typeof define === 'function' && define.amd) {
    define([], function () {
        'use strict';
        return window.Swiper;
    });
}