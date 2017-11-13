/**
 * @file  仿网易云搜索UI 菜单会直接插入父层定位容器中
 * @author qiu(423822728@qq.com)
 * @class
 */
; (function () {

    /**
     * 初始化
     * @param {string} seleter  css选择器 
     * @param {Object} object 配置 
     * @param {number} object.margin 上边距
     * @param {width} object.number 显示宽度
     * @param {Object} object.keys 数据key
     * @param {string}  object.keys.title 分类标题
     * @param {string}  object.keys.href 分类链接
     * @param {array}  object.keys.list 分类子集
     * @param {string}  object.keys.list 分类子集
     * @param {function=} object.callback 返回数据给组件
     */
    var searchWYY = function (seleter, object) {

        //触发对象

        this.trigger = document.querySelector(seleter);


        // 获得目标参数
        this.xy = {
            //
            h: this.trigger.clientHeight,
            //作为显示栏宽度
            w: this.trigger.clientWidth,
            //get xy relative to parent
            y: this.trigger.offsetTop,
            x: this.trigger.offsetLeft
        };

        /**
         * 默认配置
         * @const
         * @type {Obejct} 
         */
        var CONFIG = {
            //默认默认为搜索宽宽度
            margin: 0,
            width: this.trigger.clientWidth,
            //数据字段
            keys: {

                title: 'title',//分类
                href: 'href',//分类链接
                list: "list",//子类列表
                cell: 'title',//子类名称
                cellHref: 'href',//子类链接
            },
            //触发回调 输入宽的值，和执行生成的方法
            callBack: function (val, callbackFn) {

                console.log("init callBack function")
            },

        }

        if (!object) object = {};
        //合并同类项
        for (var k in CONFIG) {
            object[k] = object[k] ? object[k] : CONFIG[k];
        }
        this.CONFIG = object;

        //获得触发对象的上层容器
        this.parent = this.trigger.offsetParent;

        //菜单对象生成
        //content dom 展示框
        this.obj = document.createElement("section");
        //添加样式组
        this.obj.classList.add("search-com");

        this.parent.appendChild(this.obj);
        var that = this;
        /**
         * 显示
         * @event input
         */
        this.trigger.addEventListener("input", function () {
            //获得输入的值
            var val = this.value;
            if (!val) {
                that.empty();
                return;
            }
            //回调输入的参数 返回数据
            var json = that.CONFIG.callBack(val);
            var htm = that.addDomNav(val, json)
            that.obj.innerHTML = htm;
            that.objPosition();

            that.obj.classList.add("isshow");

            /**
             * a链接不冒泡到blur
             * @event click
             */
            var as = that.obj.querySelectorAll("a");
            for (var i = 0; i < as.length; i++) {
                var a = as[i];
                a.addEventListener("click", function (e) {
                    e.stopPropagation();
                })
            }

        })
        /**
         * 显示
         * @event focus
         */
        this.trigger.addEventListener("focus", function () {
            that.obj.classList.add("isshow");
        })

        /**
         * 隐藏
         * @event focus
         */
        this.trigger.addEventListener("blur", function () {
            that.obj.classList.remove("isshow");
        })
    }


    /**
     * 定位显示框
     * 
     */
    searchWYY.prototype.objPosition = function () {
        this.obj.style.width = this.CONFIG.width + "px";
        var top = Number(this.xy.y) + Number(this.xy.h) + Number(this.CONFIG.margin);
        this.obj.style.top = top + "px";
        this.obj.style.left = Number(this.xy.x) + "px";
    }

    /**
     * 生成菜单组件
     * @param {string} val 搜索的值 
     * @param {Obeject} json 列表数组
     * @event
     * @public
     */
    searchWYY.prototype.addDomNav = function (value, json) {
        //标题
        var htm = '<p class="search-tip">搜索“' + value + '”相关内容</p>';
        //标注
        var reg = RegExp(value, 'g');
        //分类
        for (var k in json) {
            //一维数据
            var data = json[k];

            var ul = '';
            //生成菜单详情
            for (var i = 0; i < data[this.CONFIG.keys.list].length; i++) {
                var li = data[this.CONFIG.keys.list][i]
                var content = li[this.CONFIG.keys.cell];
                //标记关键字
                content = content.replace(reg, "<span class='search-keys'>" + value + "</span>");
                ul += " <li><a href = '" + li[this.CONFIG.keys.cellHref] + "'>" + content + "</a></li>"

            }
            //生成 搜索框列表容器
            htm += "<div class=\"search-item\">"
                + "<h4 class='search-tit'>"
                + "<a href='" + data[this.CONFIG.keys.href] + "'>"
                + data[this.CONFIG.keys.title]
                + "</a>"
                + "</h4>"
                + "<ul class='search-cell'>"
                + ul
                + "</ul>"
                + "</div>";

        }
        return htm;
    }

    /**
     * 删除 搜索框组件   
     *@public
     */
    searchWYY.prototype.empty = function () {
        this.obj.innerHTML = '';
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