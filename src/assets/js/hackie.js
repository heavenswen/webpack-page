/**
 * @file 兼容方案
 * @author qiu(423822728)
 * classList(ie10) dataset(ie11) 对象兼容到ie9
 * Object.defineProperty（ie9） 目标兼容 ie9
 */
;(function(){
      // classList对象 兼容 ie9+
      if (!("classL" in document.documentElement)) {
        Object.defineProperty(HTMLElement.prototype, 'classL', {
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
                console.log(classes.length)
                if(classes.length == 1&&classes[0] == '')classes = [];
                function update(fn) {
                    // 暴露接口
                    return function (value) {
                        //当前index
                        let index = classes.indexOf(value);
                        //type 处理
                        fn(index, value);
                        //合并数组classname
                        if (classes) obj.className = classes.join(" ");
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
                            if (classes.length == 1 && classes[0] == '') classes = [];
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
                            if (~index) {
                                classes.splice(index, 1);
                            }
                            else {
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
    //dataset对象 兼容 ie9+
    if (!("dataset" in document.documentElement)) {
        Object.defineProperty(HTMLElement.prototype, 'dataset', {
            get() {
                //获得当前DOM节点
                let obj = this
                let datasetObj = obj.attributes
                /**
                 * dataset 对象
                 * @namespace
                 */
                let dataset = {};
                for (let value of datasetObj) {
                    let key = value.nodeName
                    if (/^data-\w+$/.test(key)) {
                        setObj(value)
                    }
                }
                /**
                 * dataset 对象
                 * 生成双向绑定对象
                 * @param {DOM} value 内容节点 
                 */
                function setObj(value) {
                    //获得键名
                    let name =  value.nodeName.match(/^data-(\w+)/)[1]
                    Object.defineProperty(dataset, name, {
                        enumerable:true,
                        get() {
                            return value.nodeValue
                        },
                        set(v) {
                            value.nodeValue = v;
                        }
                    })
                }

                return dataset
            }


        })
    }


})()