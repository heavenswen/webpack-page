//遮罩提醒
const mask = 'mask'
class init {
    constructor({ id, className }) {
        let html = `
            <div class="mask-main">
                <h4 class="mask-t">
                    成功签到</h4>
                <div class="mask-con">
                    <p>恭喜你，获得了10积分</p>
                    <a class="btn">确&emsp;定</a>
                </div>
            </div>
        `

        let section = document.createElement("section")
        section.className = `mask ${className ? className : mask}`
        section.innerHTML = html
        document.body.appendChild(section)
        this.t //时间
        this.obj = section

        let that = this
        //隐藏
        this.hide = function () {
            if (that.t) clearTimeout(that.t)
            that.obj.dataset.show = 'false'
        }

        //click 隐藏
        this.obj.querySelector(".btn").addEventListener("click", function () {
            that.hide();
        })
    }
    show({ title, content }) {
        //显示
        this.obj.querySelector(".mask-t").innerHTML = title
        this.obj.querySelector(".mask-con>p").innerHTML = content
        this.obj.dataset.show = 'true'
    }
    setTime({ title, content, time }) {
        //计时器
        let that = this

        time = time ? time : 3000
        if (this.t) clearTimeout(that.t)
        this.show({ title, content })
        this.t = setTimeout(that.hide, time)
    }
}
module.exports = init