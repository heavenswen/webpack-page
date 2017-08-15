import 'assets/css/react.scss'
import 'assets/css/index.scss'
import $ from "jquery"
import filters from 'assets/js/filters'

//引入jQ
$(function () {
  console.log('jquery')
})

//vue
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from 'views/app.vue'
Vue.use(ElementUI)
new Vue({
  el: '#app',
  render: h => h(App)
})


