import 'assets/css/react.scss'

//ios history

const test = document.querySelector("textarea")

const location = window.location.href
setTimeout(getHistory, 500)
// getHistory();
document.querySelector("button").addEventListener("click", function () {
    test.focus();
})
function getHistory() {
    test.focus();
    var state = {
        title: document.title,
        url: location
    };

    window.history.pushState(state, document.title, location.href);

    test.value = `history.state`

    window.addEventListener && window.addEventListener("popstate", function (e) {

        test.value = "我监听到了浏览器的返回按钮事件啦";//根据自己的需求实现自己的功能 
        e.stopPropagation();

    })//触发历史事件时执行

}

