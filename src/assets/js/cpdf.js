/**
 * @file 用于dom生成pdf
 * @author qiu(423822728@qq.com)
 * 依赖 html2canvas jsPdf
 */

; (function () {


    //创建pdf对象
    var pdf = new jsPDF('', 'pt', 'a4');

    /**
     * pdf 的尺寸 （a4）
     * @const
     * @type {Object}
     * @type {nember} w 页面宽度
     * @type {nember} h 页面高度
     * @type {number=} m 间隔
     */
    var CONFIG = {
        w: 595.28,
        h: 841.89,
        m: 10,
    };
    var state = 0;
    // 页面便宜
    var position = 0;
    //触发事件
    var targets = document.querySelector(".pdf-wrapper");
    document.querySelector(".sub").addEventListener("click", function () {

        addPdfDom(targets[state]);
    })
    //多对象，合并到单个pdf中
    function addPdfDom(obj) {
        //背景无时显示为黑色
        obj.style.backgroundColor = "#fff";
        //溢出隐藏部分无法显示
        obj.style.overflow = 'initial';
        obj.style.height = "auto";
        console.log(obj)

        addPdfpage(obj).then(function () {

            if (state >= targets.length - 1) {
                //生产pdf
                pdf.save('pdf.pdf');

            } else {
                //异步添加
                state++;
                addPdfDom(targets[state]);
            }

        });
    }

    //生成画布 ，并分割出多页
    function addPdfpage(obj) {

        return new html2canvas(obj).then(function (canvas) {
            var contentWidth = canvas.width;
            var contentHeight = canvas.height;

            //一页pdf显示html页面生成的canvas高度;
            var pageHeight = contentWidth / CONFIG.w * CONFIG.h;
            //未生成pdf的html页面高度
            var leftHeight = contentHeight;
            //pdf页面偏移

            //a4纸的尺寸[CONFIG.w,CONFIG.h]，html页面生成的canvas在pdf中图片的宽高
            var imgWidth = CONFIG.w - CONFIG.m * 2; //间隔
            var imgHeight = (CONFIG.w - CONFIG.m * 2) / contentWidth * contentHeight;

            var pageData = canvas.toDataURL('image/jpeg', 1);
            position = position > 0 ? position : 0;
            //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(CONFIG.h)
            //当内容未超过pdf一页显示的范围，无需分页
            if (leftHeight < pageHeight && !position) {

                pdf.addImage(pageData, 'JPEG', CONFIG.m, CONFIG.m, imgWidth, imgHeight);
                position = CONFIG.h;
            } else {
                while (leftHeight > 0) {
                    console.log(position)
                    pdf.addImage(pageData, 'JPEG', CONFIG.m, position, imgWidth, imgHeight)
                    leftHeight -= pageHeight;
                    position -= CONFIG.h;

                    //避免添加空白页
                    if (leftHeight > 0) {
                        pdf.addPage();
                    }
                }
            }
            return new Promise(function (resolve) {
                resolve(pdf);
            });
        })

    }



})()
