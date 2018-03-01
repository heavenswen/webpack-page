/**
 * @file rem/viewport 适配方案 ie9+/pc 火狐无效
 * @author qiu(423822728@qq.com) 
 */
; (function () {

    /**
     * @param {Object}  config 配置
     * @param {number}  config.designWidth 设计稿宽度
     * @param {number}  config.maxWidth 制作稿的最大宽度值，需要根据实际设置
     * @param {number}  config.sacle rem缩放比例
     */
    const Rom = function (config = { designWidth: 750, sacle: 100, mode: 'rem' }) {

        //兼容
        let resize = 'orientationchange' in window ? 'orientationchange' : 'resize'

        let doc = document
        /**element html */
        let docEl = document.documentElement

        function resizePage() {
            /**页面实际大小 getBoundingClientRect 矩阵尺寸*/
            var width = docEl.getBoundingClientRect().width;
            //大于设计稿时
            if (config.designWidth < width) width = config.designWidth
            //惰性函数 页面尺寸处理 只判断一次
            return (function () {

                if (config.mode == 'rem') {
                    // 视口改变时触发
                    window.addEventListener(resize, resizePage, false)
                    return function () {
                        var rem = width * config.sacle / config.designWidth;
                        docEl.style.fontSize = rem + 'px';
                    }
                } else {

                    /*视口*/
                    let metaTag = document.querySelector("meta[name='viewport']");
                    if (!metaTag) {
                        let head = document.querySelector('head')[0]
                        /** @创建meta*/
                        metaTag = document.createElement('meta');
                        metaTag.setAttribute('name', 'viewport');
                        document.querySelector('head').appendChild(metaTag);
                    }
                    return function () {
                        
                        /**设计稿缩放比*/
                        let scale = width / Number(config.designWidth)
                        /**
                         * device-width - 设备的宽度
                        *initial-scale - 初始的缩放比例  
                        *minimum-scale - 允许用户缩放到的最小比例   
                        *maximum-scale - 允许用户缩放到的最大比例  
                        *user-scalable - 用户是否可以手动缩放 
                         */
                        metaTag.setAttribute('content', `width=device-width,initial-scale=${scale},maximum-scale=${scale},user-scalable=no`);
                    }
                }

            })()()

        }
        //绑定浏览器旋转与加载 时
        
        document.addEventListener('DOMContentLoaded', resizePage, false)

    };
    window.Rom = Rom;
})()
// AMD Export
if (typeof (module) !== 'undefined') {
    module.exports = window.Rom;
}
else if (typeof define === 'function' && define.amd) {
    define([], function () {
        'use strict';
        return window.Rom;
    });
}