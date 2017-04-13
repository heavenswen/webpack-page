import Vue from 'vue'
import ElementUI from 'element-ui'
import 'assets/css/react.scss'
import App from './app.vue'
import 'element-ui/lib/theme-default/index.css'
import "assets/css/index.scss"

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})

