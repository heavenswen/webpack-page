import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './app.vue'
import 'element-ui/lib/theme-default/index.css'
import 'assets/css/react.scss'
import "assets/css/demo.css"

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})

