/**
 * @file 公共类 单体模式
 * @author qiu(423822728@qq.com)
 * 采用es6 编译 在线编译 https://babeljs.cn/repl/#?babili=false&browsers=&build=&builtIns=false&code_lz=Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=6.26.0&envVersion=
 * 同级对象，多对象class操作，多对象实际绑定事件，导航条获得焦点，
 * classlist dataset ie11+
 */
; (function () {
    /**
     * 公共类
     * @namespace
     */
    const COMMON = {
        winHref: window.location.href,
        /** 
         *同级选择器
         *@param {DOM} dom 对象
         *@param {String} target 要查找的同级选择器
         *@return {Array} 同级对象列表
        */
        siblings(dom, target) {
            //父级
            let list = dom.parentNode.querySelectorAll(target)
            let arr = []
            for (let obj of list) {
                if (obj != dom) {
                    arr.push(obj);
                }
            }
            return arr;
        },
        /**
         * className 批量操作
         * @param {DOM} list 目标对象
         * @param {String} type toggle,add ,remove 三种
         * @param {String} className 
         */
        setClass(list, type = 'add', className) {
            for (let obj of list) {
                obj.classList[type](className);
            }
        },
        /**
         * 多对象事件
         * @param {String} target css选择器
         * @param {String} trigger Event
         * @param {function} fn 函数
         */
        addEvent(target, trigger, fn) {
            let list = document.querySelectorAll(target)
            for (let obj of list) {
                obj.addEventListener(target, trigger, fn, false);
            }
            return list;
        },
        /**
         * 多对象删除事件
         * @param {String} target css选择器
         * @param {String} trigger Event
         * @param {function} fn 函数
         */
        removeEvent(target, trigger, fn) {
            let list = document.querySelectorAll(target)
            for (let obj of list) {
                obj.removeEventListener(target, trigger, fn, false);
            }
            return list;
        },
        /**
         * 自动选中导航链接,正则比对,尾部匹配
         * @param {string} target 导航列表组对象
         * @param {string} find 链接对象 
         * @param {string} active className 默认“active”
         * @param {string} index 导航上首页地址 / || index.* 
         * @param {Function} fn 回调匹配的对象 和链接对象
         */
        navActive(target,index='', find = "a", active = 'active',fn) {

      
            //当前链接
            let win = this.winHref

            //获得导航列表组
            let list = document.querySelectorAll(target)

            // win = `http://192.168.1.107:8010/index.html?a=index&b=nav`
            // 检测 ‘/’状态
            win = win.replace(/\/$/i, "\/"+index)


            for (let obj of list) {
                let as = obj.querySelectorAll(find);
                //链接集搜索
                for (var a of as) {
                    //链接目标对象
                    var href = a.href;
                    if (!href) return;
                    //转义
                    href = href.replace(/(\?|\.)/g, "\\$1")+'$';
                    var reg = RegExp(href, "ig");
                    //匹配最接近的一个
                    if (win.match(reg)) {
                        if (fn) {
                            fn(obj, a);
                        } else {
                            let sibs = this.siblings(obj, "." + active)
                            this.setClass(sibs, "remove", active);
                            obj.classList.add(active);
                            //a同级class
                            this.setClass(this.siblings(a, active), "remove", active);
                            a.classList.add(active);
                        }
                    }
                }
            }

            /**
             * 链接数据获取
             */
            function foreach(obj) {

            }


        },

    }
    window.Common = COMMON;
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