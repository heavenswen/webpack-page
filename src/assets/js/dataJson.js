/**
 * @file 对象数据处理
 * @author qiu(423822728@qq.com)
 */
; (function () {

    /**
     * 
     * @class 
     * @param {object} data 对象数据
     */
    var InitData = function (data) {
        /**
         * @type {object}
         * @public
         */
        this.data = data;
    }

    /**
     * 在对象原有的基础上合并对象，相同则覆盖
     *@type {object} json 要合并的对象
     *@public   
     */
    initData.prototype.exend = function (json) {

        for (var key in json) {
            this.data[key] = json[key]
        }

        return this.data;
    }

    /**
     * @param {object} data 对象数据
     */
    function dataFn(data) {
        return new InitData(data);
    }

    window.DataJson = dataFn;
})()


// AMD Export
if (typeof (module) !== 'undefined') {
    module.exports = window.DataJson;
}
else if (typeof define === 'function' && define.amd) {
    define([], function () {
        'use strict';
        return window.DataJson;
    });
}