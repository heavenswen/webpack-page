import 'assets/css/react.scss' //公共
import 'assets/css/login.scss'//当前
import "assets/css/demo.css"
//jquery 写法
import $ from "jquery"
window.$ = $
window.jQuery = $
var load =  require("assets/js/jq-load.js")

(function($){
  //jquery
  var jq = "jquery 引入";
  $('body').append(jq)
  new $.demo(`调用jq组件`)  

})($)

