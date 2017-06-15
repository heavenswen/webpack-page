import Vue from 'vue'
import ElementUI from 'element-ui'
import Rem from 'assets/js/rem.js'
import 'assets/css/react.scss'
import App from './app.vue'
import 'element-ui/lib/theme-default/index.css'
import "assets/css/index.scss"

//直接调用
var demo =  require("assets/js/demo.js")  //加载
//rem font
new Rem()

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})

window.demo();//全局方法