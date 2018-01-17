import 'assets/css/react.scss'
import 'assets/css/index.scss'
import $ from "jquery"
import filters from 'assets/js/filters'

//引入jQ

//vue 多页  jq 使用
$(function () {
  console.log('jquery1')
})

//vue
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from 'views/app.vue'

import Common from 'assets/js/common';

console.log(Common.winHref);

Vue.use(ElementUI)
new Vue({
  el: '#app',
  render: h => h(App)
})


