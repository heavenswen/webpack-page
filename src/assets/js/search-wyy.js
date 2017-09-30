//仿网易云搜索
//搜索详情框会添加到 目标元素的父级中，一绝对定位的形式展现
var searchWYY = function (obj) {
    this.dom = document.querySelector(obj);
    this.parent = this.dom.offsetParent;
    // 获得目标参数
    this.xy = {
        h: this.dom.clientHeight,
        //作为显示栏宽度
        w: this.dom.clientWidth,
        //get xy relative to parent
        y: this.dom.offsetTop,
        x: this.dom.offsetLeft
    };
    //content dom 展示框
    this.htm = document.createElement("section");
    //添加样式组
    this.htm.classList.add("search-com");

    //生成展示框 (查询的值,数据) 
    function addHtmFn(value, json) {
        let htm = '<p class="search-tip">搜索“' + value + '”相关内容</p>';
        let reg = RegExp(value, 'ig');
        //class
        for (let k in json) {
            //item
            let cls = json[k];
            let ul = '';
            //获得详情
            for (let i = 0; i < cls['list'].length; i++) {
                let li = cls['list'][i]
                let content = li['value'];
                //标记关键字
                content = content.replace(reg, "<span class='search-keys'>" + value + "</span>");
                ul += " <li><a href = '" + li['href'] + "'>" + content + "</a></li>"

            }

            htm += "<div class=\"search-item\">"
                +
                "<h4 class='search-tit'><a href='" + cls['href'] + "'>" + cls['title'] + "</a></h4><ul class='search-cell'>" +
                ul
                + "</ul></div>";

        }

        return htm;

    };
    //trigger 生成 搜索框
    this.append = function (value, json) {
        this.htm.style.width = this.xy.w + "px";
        this.htm.style.top = Number(this.xy.y + this.xy.h) + "px";
        this.htm.style.left = Number(this.xy.x) + "px";
        this.htm.innerHTML = addHtmFn(value, json)
        //添加dom
        this.parent.appendChild(this.htm)
    }
    //删除 搜索框            
    this.remove = function () {
        this.htm.remove();
    }

}