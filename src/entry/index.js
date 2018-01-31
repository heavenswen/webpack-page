import 'assets/css/react.scss'
import 'assets/css/index.scss'
import $ from "jquery"
import filters from 'assets/js/filters'

//引入jQ

//vue 多页  jq 使用
$(function () {
  function fn(){
    console.log("jQuery load");
  }
 $("body").on("click",fn);
})

//vue
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from 'views/app.vue'

import Q from 'assets/js/common';

import S from 'assets/js/scrollAdd';



Vue.use(ElementUI)
new Vue({
  el: '#app',
  render: h => h(App)
})

let fn =  function(){
  console.log("a")
  document.removeEventListener("scroll",fn,false)
}
document.addEventListener("scroll",fn,false)

let s = new S({
  target:"li",
  scrollFn(data){
    console.log(data)
  }
});

s.add(".dd");