import 'assets/css/react.scss' //公共
import 'assets/css/login.scss'//当前
import "assets/css/demo.css"
import Rem from "assets/js/rem.js"

//jquery 写法
import $ from "jquery"
window.$ = $
window.jQuery = $
var load = require("assets/js/jq-load.js");

//font rem
new Rem();
//jquery
(function ($) {

  var jq = "jquery 引入";
  $('body').append(jq)
  new $.demo()

  document.querySelector('img').addEventListener("click", function (e) {
    console.log(e.bubbles)
  }, false)

})($)

