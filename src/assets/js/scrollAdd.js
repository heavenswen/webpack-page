/**
 * @file 滚动下来设置加载 
 * @author qiu（423822728@qq.com）
 * 场景：懒加载图片，添加样式
 */

; (function () {
    class ScrollAdd {
        /**
         * @param {string} target css选择器
         * @param {String} modal  img图片懒加载
         * @param {string} filter 过滤以免重复执行 
         */
        constructor({target,modal = 'img',filter}) {
            //操作对象集合
            this.datas = this.getDomTop
        }
        /**
         * 获得节点距离顶部的距离
         * @param {string} target css选择器
         */
        getDomTop(target) {
            let objs = document.querySelectorAll(target)
            /**
             * 操作对象
             * @namespace
             */
            let data = []

            for(let obj of objs){
                //对象参数
                let objData = {};
                //距离顶部高度
                objData.top = obj.getBoundingClientRect().top
                
                if(modal == 'img'){
                    // 懒加载
                    if(!obj.dataset[modal])continue;
                    objData.value = obj.dataset[modal]
                    obj.dataset[modal] = '';
                    let val = obj.dataset[modal];
                }else{

                }
                data.push(objData)
            }

            return data;
        }

    }


    window.ScrollAdd = ScrollAdd;
})()
// AMD Export
if (typeof (module) !== 'undefined') {
    module.exports = window.ScrollAdd;
}
else if (typeof define === 'function' && define.amd) {
    define([], function () {
        'use strict';
        return window.ScrollAdd;
    });
}