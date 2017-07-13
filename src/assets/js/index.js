import 'assets/css/react.scss'
import 'assets/css/index.scss'

import $ from "jquery"

//引入jQ
$(function () {
    console.log('jquery')
})


import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from '../../components/app.vue'
Vue.use(ElementUI)
new Vue({
  el: '#app',
  render: h => h(App)
})
