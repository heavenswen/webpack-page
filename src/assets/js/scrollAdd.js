/**
 * @file 滚动下来设置加载 
 * @author qiu（423822728@qq.com）
 * 场景：懒加载图片，滚动添加样式
 */
; (function () {
    class ScrollAdd {
        /**
         * @param {string} target css选择器
         * @param {String} modal  img,src为图片懒加载 获得data-*的值
         * @param {number} ad 提前量 
         * @param {Function} scrollTarget 执行滚动到目标的触发({obj,top,value})
         */
        constructor({ target, ad = 10, modal, scrollFn }) {
            //操作对象集合
            let data = this.getDomTop(target)
            //模式
            this.modal = modal
            this.scrollFn = scrollFn
            this.ad = ad
            this.isDataFn(data)
        }
        /**
         * 添加触发对象
         * @param {string} css 选择器
         * @public
         */
        add(target) {
            let data = this.datas.concat(this.getDomTop(target))
            this.isDataFn(data)
        }
        /**
         * 图片懒加载
         */
        setImageScroll(data) {
            // 执行缓存图片
            var img = new Image();
            //缓存图片
            img.src = data.val;
            //加载成功设置图片
            img.onload = function () {
                obj['obj'].src = data.val;
                if (this.scrollTarget) this.scrollTarget(data);
            };
            img.onerror = function () {
                // console.log(obj);
            }
        }

        /**
        * 执行匹配
        * @event Select#scroll
        *@private
        */
        targetFn() {
            let winT = document.documentElement.scrollTop || document.body.scrollTop
            //当前高度
            winT += window.innerHeight
            let arr = []
            for (let val of that.datas) {
                if (winT > val.top - that.ad) {
                    //执行fn
                    if (that.modal == "img" || that.modal == "src") {
                        that.setImageScroll(val)
                    } else {
                        //普通模式
                        if (that.scrollFn) that.scrollFn(val)
                    }
                } else {
                    // 获得未触发数据
                    arr.push(val);
                }
            }
            //循环结束刷新对象数组
            that.isDataFn(arr)
        }
        /**
         * 判断数据状态，并执行
         */
        isDataFn(data) {
            this.datas = data
            /**
             * 执行匹配
             * @event Select#scroll
             *@private
            */
            let that = this
            let targetFn = function() {
                let winT = document.documentElement.scrollTop || document.body.scrollTop
                //当前高度
                winT += window.innerHeight
                let arr = []
                for (let val of that.datas) {
                    if (winT > val.top - that.ad) {
                        //执行fn
                        if (that.modal == "img" || that.modal == "src") {
                            that.setImageScroll(val)
                        } else {
                            //普通模式
                            if (that.scrollFn) that.scrollFn(val)
                        }
                    } else {
                        // 获得未触发数据
                        arr.push(val);
                    }
                }
                //循环结束刷新对象数组
                that.isDataFn(arr)
            }

            if (this.datas.length && !this.isScroll) {
                //主动检测
                this.isScroll = true;
                window.addEventListener("scroll", targetFn, false)
                targetFn()
            }else
            if(!this.datas.length){
                //（无效）每次执行当前方法时 targetFn 会被重新声明，因此执行remove方法的时候 targetFn !== 原有的方法了
                // this.isScroll = false;
                // window.removeEventListener("scroll", targetFn, false)
            }

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

            for (let obj of objs) {
                //对象参数
                let objData = {};
                //距离顶部高度
                objData.top = this.getDomOffset(obj)

                if (this.modal) {
                    // 懒加载
                    if (!obj.dataset[this.modal]) continue;
                    objData.value = obj.dataset[this.modal]
                    obj.dataset[this.modal] = '';
                }
                objData['obj'] = obj
                data.push(objData)
            }

            return data;
        }

        //get position absolute
        getDomOffset(obj) {
            let top = 0;
            //遍历到body下高度
            while (obj.offsetParent) {
                top += obj.offsetTop
                obj = obj.offsetParent
            }
            return top;
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