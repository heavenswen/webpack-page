import 'assets/css/react.scss' //公共
import 'assets/css/login.scss'//当前
import "assets/css/demo.css"
import Rem from "assets/js/rem.js"

//jquery 写法
import $ from "jquery"

//jquery
(function ($) {

  //font rem
  new Rem();

  window.$ = $
  window.jQuery = $
  var load = require("assets/js/jq-load.js");
  var jq = "jquery 引入";
  $('body').append(jq)
 
 //jquery类
  new $.demo()

  document.querySelector('img').addEventListener("click", function (e) {
    console.log(e.bubbles)
  })

})($)

