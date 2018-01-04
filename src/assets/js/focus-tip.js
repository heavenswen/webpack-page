/**
 * new FocusTip()配置
 * 开发模式-模板模式 （配置init（））；
 * .initObj("")执行绑定事件  
 * @file 表单选中获得焦点提示说明
 * @author qiu(423822728@qq.com)
 * @class
 */
; (function () {
    /**
     * 全局配置
     * @param {Object} object 配置
     * @param {boolen} visible 可视
     * @param {string} parent 插入的层
     * @param {number} marginTop 上间隔
     * @param {number} marginBottom 下间隔
     * @param {function=} callback 获取title content 的方法 
     */

    function FocusTip(object) {

        /**
         * 默认配置
         * @const
         * @type {OBject} 
         */
        var CONFIG = {
            visible: false,
            marginTop: 0,
            marginBottom: 0,
            time: 0,
            callback: function (obj) {
                var data = '';
                //获得显示内容
                var content = obj.dataset.content || '';
                //获得标题
                var title = obj.dataset.title || '';

                if (content && title) {
                    data = { title: title, content: content };
                }
                return data;
            }
        }

        //合并配置
        if (!object) object = {};

        for (var k in CONFIG) {
            var data = object[k];
            if (!data) {
                object[k] = CONFIG[k];
            }
        }


        /**
         *配置 
         * @const 
         */
        this.CONFIG = object;


        //创建显示对象
        this.obj = document.createElement("div");
        this.obj.classList.add("focus-tip");
        if (this.CONFIG.visible) {
            this.obj.classList.add("isshow");
        }
        //内容模块
        this.title = document.createElement("div");
        this.title.classList.add("focus-t-top");
        this.content = document.createElement("div");
        this.content.classList.add("focus-t-con");
        this.obj.appendChild(this.title);
        this.obj.appendChild(this.content);
        //容器
        this.parent = document.querySelector(this.CONFIG.parent) || document.body;
        this.parent.appendChild(this.obj);

        //获得titile content
        this.readData = this.CONFIG.callback;

    }

    /**
     * 显示
     * @private 
     */
    var timeOut = '';
    FocusTip.prototype.show = function () {
        //计时器模式
        if (this.CONFIG.time) {
            if (timeOut) clearTimeout(timeOut);
            var that = this;
            timeOut = setTimeout(function () {

                that.obj.classList.remove("isshow")

            }, this.CONFIG.time);
        }

        this.obj.classList.add("isshow");


    }

    /**
       * 隐藏
       * @private 
       */
    FocusTip.prototype.hide = function () {
        this.obj.classList.remove("isshow");
    }


    /**
     * 设置位置
     * @param {number} top 高度
     * @public
     */

    FocusTip.prototype.setPosition = function (top) {

        //获得容器的的高度
        var bodyHeight = this.parent.scrollHeight;

        //偏移高度
        var objHeight = this.obj.clientHeight;

        if (objHeight + top >= bodyHeight) {
            this.obj.style.top = bodyHeight - objHeight - this.CONFIG.marginBottom + 'px';
        } else {
            this.obj.style.top = top + this.CONFIG.marginTop + 'px';
        }

    }
    /**
     * 设置内容
     * @param {Object} data 内容
     * @param {string} title 标题
     * @param {string=} content 提示
     * @public
     */
    FocusTip.prototype.setContent = function (data) {
        if (!data) return;
        this.title.innerHTML = data.title;
        this.content.innerHTML = data.content;
        this.show();
    }

    /**
    * 触发显示
    * @param {node} obj dom对象
    * @event focus blur
    *@private
    */

    FocusTip.prototype.evenFn = function (obj) {
        var that = this;
        obj.addEventListener("focus", function () {

            //返回title and content
            var data = that.readData(obj)

            that.setContent(data);
            //获得页面位置
            var top = positionBodyHeight(obj);

            that.setPosition(top)

        })

        if (!this.CONFIG.visible) {

            obj.addEventListener("blur", function () {
                that.hide();
            })
        }

        return obj
    }
    /**
     * 获得相对于页面的高度
     * @param {node} dom dom对象
     * @private  
     */

    function positionBodyHeight(dom) {
        var h = 0;
        var obj = dom;
        if (obj.nodeName !== "BODY") {
            h += obj.offsetTop
            obj = obj.offsetParent;
        }

        return h;

    }

    /**
     * 添加事件对象
     * @param {string} str css选择器
     * @public
     */

    FocusTip.prototype.initObj = function (str) {
        var objs = document.querySelectorAll(str);

        for (var i = 0; i < objs.length; i++) {

            this.evenFn(objs[i])
        }

        return objs;
    }

    window.FocusTip = FocusTip;
})()
// AMD Export
if (typeof (module) !== 'undefined') {
    module.exports = window.FocusTip;
}
else if (typeof define === 'function' && define.amd) {
    define([], function () {
        'use strict';
        return window.FocusTip;
    });
}
