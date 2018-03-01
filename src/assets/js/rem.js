/**
 * @file rem适配方案 ie9+
 * @author qiu(423822728@qq.com) 
 */
; (function () {

    /**
     * @param designWidth 设计稿宽度
     * @param maxWidth 制作稿的最大宽度值，需要根据实际设置
     * @param sacle rem缩放比例
     */
    const Rom = function (designWidth = 750, maxWidth = 750,sacle = 100) {
        
        //兼容
        let resize = 'orientationchange' in window ? 'orientationchange' : 'resize'

        let doc = document
        let docEl = document.documentElement
        let tid

        function refreshRem() {
            //获得 页面实际大小 getBoundingClientRect 矩阵尺寸
            var width = docEl.getBoundingClientRect().width;
            //大于设计稿时
            if (designWidth < width) width = designWidth ;
            var rem = width * sacle / designWidth;
            docEl.style.fontSize = rem + 'px';
        }

        //要等 wiewport 设置好后才能执行 refreshRem，不然 refreshRem 会执行2次；
        // refreshRem();

        // win.addEventListener(resize, function () {
        //     clearTimeout(tid); //防止执行两次
        //     tid = setTimeout(refreshRem, 300);
        // }, false);

        // win.addEventListener("pageshow", function (e) {
        //     if (e.persisted) { // 浏览器后退的时候重新计算
        //         clearTimeout(tid);
        //         tid = setTimeout(refreshRem, 300);
        //     }
        // }, false);
     
        //绑定浏览器旋转与加载 时
        window.addEventListener(resize, refreshRem, false)
        document.addEventListener('DOMContentLoaded', refreshRem, false)

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