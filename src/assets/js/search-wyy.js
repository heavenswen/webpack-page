/**
 * @file  仿网易云搜索UI
 * @author qiu(423822728@qq.com)
 */

//搜索详情框会添加到 目标元素的父级中，一绝对定位的形式展现
; (function () {

    /**
     * 
     * @param {string} seleted css选择器
     * @param {object} obj config data
     */
    var searchWYY = function (seleted, obj) {
        /**
         * 获取目标对象
         * @public 
         */
        this.dom = document.querySelector(seleted);
        /**
         *菜单将插入容器中
         * @private
         */
        this.parent = this.dom.offsetParent;
        /**
         * 获取目标的位置
         * @private
         */
        this.xy = {
            h: this.dom.clientHeight,
            //作为显示栏宽度
            w: this.dom.clientWidth,
            //get xy relative to parent
            y: this.dom.offsetTop,
            x: this.dom.offsetLeft
        };
        /**
         * 菜单对象
         * @public
         */
        this.htm = document.createElement("section");
        //添加样式组
        this.htm.classList.add("search-com");
        //用于函数内热操作
        var that = this;
        /**
         * 保存自动 宽度配置
         * @public
         */
        this.config = exend(obj);

        /**
         * 默认菜单对应字段
         * @const
         * @param {number} margin 距离上面的高
         * @param {number} width 对象的宽度
         * @param {string} title 分类标题字段
         * @param {string} href 分类跳转链接键
         * @param {string} list 子类自动列表键
         * @param {string} cell 子类名字键
         * @param {string} cellHref 子类链接 
         */

        var CONFIG = {
            //默认默认为搜索宽宽度
            margin: '0',
            width: this.xy.w,
            //数据字段
            title: 'title',//分类
            href: 'href',//分类链接
            list: "list",//子类列表
            cell: 'value',//子类名称
            cellHref: 'href',//子类链接
        }

        /**
         * 修改配置
         * @param {object} obj 字段和宽度
         * @private 
         */
        function exend(obj) {

            //过滤
            var data = obj || {};
            for (let key in CONFIG) {
                if (!data[key]) data[key] = json[key]
            }

            return data;
        }


        //生成展示框 (查询的值,数据) 
        /**
         * 生成菜单列表
         * @param {string} value 搜素的内容 
         * @param {object} json 显示的内容 
         */
        function addHtmFn(value, json) {
            var htm = '<p class="search-tip">搜索“' + value + '”相关内容</p>';
            //标注
            var reg = RegExp(value, 'ig');
            //class
            for (var k in json) {
                //item
                var cls = json[k];
                var ul = '';
                //获得详情

                for (let i = 0; i < cls[that.config.list].length; i++) {
                    var li = cls[that.config.list][i]
                    var content = li[that.config.cell];
                    //标记关键
                    content = content.replace(reg,
                        "<span class='search-keys'>"
                        + value
                        + "</span>");

                    ul += " <li><a href = '" + li[that.config.cellHref] + "'>" + content + "</a></li>"

                }

                htm += "<div class=\"search-item\">"
                    +
                    "<h4 class='search-tit'><a href='" + cls[that.config.href] + "'>" + cls[that.config.title] + "</a></h4><ul class='search-cell'>" +
                    ul
                    + "</ul></div>";

            }

            return htm;

        };

        /**
         *生成菜单的dom 
         * @param {string} value 搜索值
         * @param {object} json 菜单值  
         */
        this.append = function (value, json) {

            //设置菜单宽度
            this.htm.style.width = this.config.w + "px";

            this.htm.style.top = Number(this.xy.y) + Number(this.xy.h) + Number(this.config.margin) + "px";
            
            this.htm.style.left = Number(this.xy.x) + "px";
            
            this.htm.innerHTML = addHtmFn(value, json)

            //生成菜单
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
    module.exports = window.SearchWYY;
}
else if (typeof define === 'function' && define.amd) {
    define([], function () {
        'use strict';
        return window.SearchWYY;
    });
}
