/**
 * @file 公共类 单体模式
 * @author qiu(423822728@qq.com)
 * 采用es6 编译 在线编译 http://google.github.io/traceur-compiler/demo/repl.html#const%20a%20%3D%201%0Alet%20b%20%3D%201%0Avar%20c%20%3D%20%60123%24%7Bb%7D%60
 */
; (function () {
    // classList 兼容 ie9+
    if (!("class1" in document.documentElement)) {
        Object.defineProperty(HTMLElement.prototype, 'class1', {
            get() {
                //获得当前DOM节点
                let obj = this;

                /**
                 * 处理函数
                 * @param {Function} 回调具体执行方法
                 * @return {Function}  
                 */
                //数组所有classname
                let classes = obj.className.split(/\s+/g)
                function update(fn) {
                    // 暴露接口
                    return function (value) {
                        //当前index
                         let  index = classes.indexOf(value);
                        //type 处理
                        fn(index, value);
                        //合并数组classname
                        if(classes)obj.className = classes.join(" ");
                    }
                }
                /**
                 * classList 对象
                 * @namespace
                 */
                class ClassObj extends Array {
                    constructor(...val) {
                        super(...val);
                        this.value = obj.className//classList.value 真实的值 "classname classname"
                        //添加
                        this.add = update(function (index, value) {
                            if(classes.length==1&&classes[0] == '')classes = [];
                                //按位取反 布尔取反 
                                if (!~index) classes.push(value);
                        })
                        // 删除
                        this.remove = update(function (index) {
                                //按位取反 ~-1 == 0
                                if (~index) classes.splice(index, 1);
                        })
                        // 切换
                        this.toggle = update(function (index, value) {
                            //toggle 时只能有一个值
                            if (~index){
                                classes.splice(index, 1);
                            }
                            else{
                                   classes.push(value);
                            }
                        })
                        // 检查
                        this.contains = function (value) {
                            //~0 == -1 !!-1 == true 
                            return !!~obj.className.split(/\s+/g).indexOf(value);
                        }
                        //获取指定
                        this.item = function (i) {
                            return obj.className.split(/\s+/g)[i] || null;
                        }
                    }
                }

                return new ClassObj(...classes);
            }
        });
    }
    //dataset 兼容
    if (!("dataset" in document.documentElement)) {
        Object.defineProperty(HTMLElement.prototype, 'dataset', {
            get() {
                //获得当前DOM节点
                let obj = this

                return {}
            }


        })
    }

    /**
     * @namespace
     */
    const COMMON = {
        winHref: window.location.href,
        /** 
         *同级选择器
         *@param {DOM} dom 对象
         *@param {String} traget 要查找的同级选择器
         *@return {Array} 同级对象列表
        */
        siblings(dom, traget) {
            //父级
            let list = dom.parentNode.querySelectorAll(traget)
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
         * @param {String} traget css选择器
         * @param {String} trigger Event
         * @param {function} fn 函数
         */
        addEvent(traget, trigger, fn) {
            let list = document.querySelectorAll(traget)
            for (let obj of list) {
                obj.addEventListener(traget, trigger, fn, false);
            }
            return list;
        },
        /**
         * 多对象删除事件
         * @param {String} traget css选择器
         * @param {String} trigger Event
         * @param {function} fn 函数
         */
        removeEvent(traget, trigger, fn) {
            let list = document.querySelectorAll(traget)
            for (let obj of list) {
                obj.removeEventListener(traget, trigger, fn, false);
            }
            return list;
        },
        /* rem 方案
        * 避开谷歌下最小12px的问题 ，尺寸320下5%，640下10%
        * @param {number} num 比例
        */
        rem(num = 100) {
            let docEl = document.documentElement
            let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
            function recalc() {
                docEl.style.fontSize = num * (docEl.clientWidth / 640) + 'px'
            }
            //绑定浏览器旋转与加载 时
            window.addEventListener(resizeEvt, recalc, false)
            document.addEventListener('DOMContentLoaded', recalc, false)
        },
        /**
         * 自动选中导航链接,正则比对 请默认设置在 index页 应该到空时无法检索到
         * @param {string} traget 导航列表组对象
         * @param {string} find 链接对象 
         * @param {string} active className 默认“active”
         * @param {Function} fn 回调事件
         */
        navActive(traget, find = "a", active = 'active', fn) {
            //当前链接
            let win = this.winHref
            //获得导航列表组
            let list = document.querySelectorAll(traget)

            for (let obj of list) {

                //间接集搜索
                let as = obj.querySelectorAll(find);

                for (var a of as) {
                    //链接目标对象
                    var href = a.href;
                    if (!href) return;
                    //转义
                    href = href.replace(/(\?|\.)/g, "\\$1");
                    var reg = RegExp(href, "ig");
                    //匹配最接近的一个
                    if (win.match(reg)) {
                        //obj同级class
                        this.setClass(this.siblings(obj, active), "remove", active);
                        obj.classList.add(active);
                        //a同级class
                        this.setClass(this.siblings(a, active), "remove", active);
                        a.classList.add(active);
                    }
                }
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