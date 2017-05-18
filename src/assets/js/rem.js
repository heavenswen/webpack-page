//避开谷歌下最小12px的问题 ，尺寸320下5%，640下10%
class init {
    constructor() {
        const docEl = document.documentElement
        const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
        function recalc() {
            docEl.style.fontSize = 100 * (docEl.clientWidth / 640) + 'px';
        }
        //绑定浏览器旋转与加载 时
        window.addEventListener(resizeEvt, recalc, false);
        document.addEventListener('DOMContentLoaded', recalc, false);
    }
}

module.exports = init