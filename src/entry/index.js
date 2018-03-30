import 'assets/css/react.scss'
import 'assets/css/index.scss'
//引入jq
import $ from "jquery"
//引入
import filters from 'assets/js/filters'

//引入jQ

//vue 多页  jq 使用
$(function () {
  function fn(){
    console.log("jQuery load");
  }
 $("body").on("click",fn);
})
//工具方法
import {scrollFn} from 'assets/js/common'
scrollFn("fieldset")

//自适应方案
import Rem from 'assets/js/rem'

new Rem();


//引入 vue
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from 'views/app.vue'

Vue.use(ElementUI)
new Vue({
  el: '#app',
  render: h => h(App)
})

