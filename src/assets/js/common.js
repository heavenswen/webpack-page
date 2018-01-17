/**
 * @file 公共类 单体模式
 * @author qiu(423822728@qq.com)
 */
; (function () {
    var common = {
        winHref: window.location.href,
        /**
         * rem 方案
         * 避开谷歌下最小12px的问题 ，尺寸320下5%，640下10%
         * @param {number} num 比例
         */
        rem: function (num) {
            num = num || 100;
            const docEl = document.documentElement;
            const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
            function recalc() {
                docEl.style.fontSize = num * (docEl.clientWidth / 640) + 'px';
            }
            //绑定浏览器旋转与加载 时
            window.addEventListener(resizeEvt, recalc, false);
            document.addEventListener('DOMContentLoaded', recalc, false);
        },
        /**
         * 自动选中导航链接 请默认设置在 index页
         * @param {string} listStr 导航列表组对象
         * @param {string} aStr 链接对象
         * @param {string} active className 默认“active”
         */
        navActive: function (listStr, aStr, active) {
            //当前链接
            var win = this.winHref;
            //默认值
            active = active || "active";
            //获得导航列表组
            var list = document.querySelectorAll(listStr);

            for (var i = 0; i < list.length; i++) {
                //对象
                var li = list[i];

                //子集搜索
                var as = li.querySelectorAll(aStr);

                var bool = false;

                for (var k in as) {
                    //链接目标对象
                    var a = as[k];
                    var href = a.href;
                    if (!href) return;
                    //转义
                    href = href.replace(/(\?|\.)/g, "\\$1");
                    var reg = RegExp(href, "ig");
                    
                    //匹配完成
                    if (win.match(reg)) {
                        //跳出循环
                        b = true;
                        //li同级class
                        var li_s = this.siblings(li, active);
                        setClass(li_s,"remove",active);
                        li.classList.add(active);
                        //a同级class
                        var a_siblings = this.siblings(a, active);
                        setClass(a_siblings,"remove",active);
                        a.classList.add(active);
                        break;
                    }
                }
                // 跳出
                if (bool) break;
            }
        },
        /** 
         *同级选择器
         *@param {DOM} dom 对象
         *@param {String} str 要查找的同级选择器
         *@return {Array} 对象列表
        */
        siblings:function (dom, str) {
            var list = dom.parentNode().querySelectorAll(str);
            var doms = undefined;
            for (var k in list) {
                var cell = list[k];
                if (dom != cell) {
                    if (!doms) doms = [];
                    doms.push(cell);
                }
            }
            return doms;
        },
        /**
         * className 批量操作
         * @param {String} type toggle,add ,remove 三种
         */
        setClass:function(dom,type,className){
            for (var key in dom) {
                var obj = dom[key];
                obj.classList[type](className);
            }
        },
        /**
         * 多对象点击事件
         * @param {String} traget css选择器
         * @param {String} trigger Event
         * @param {function} fn 函数
         */
        addEvent:function(traget,trigger,fn){
            var list = document.querySelectorAll(traget);
            if(!list.length)return undefined;
            for(var i = 0;i<list.length;i++){
                var li = list[i];
                li.addEventListener(traget,trigger,fn,false);
            }
            return list;
        }
    }
    window.Common = common;
})()
// AMD Export
if (typeof (module) !== 'undefined') {
    module.exports = window.Common;
}
else if (typeof define === 'function' && define.amd) {
    define([], function () {
        'use strict';
        return window.Common;
    });
}