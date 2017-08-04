import Vue from 'vue'
//路由
import VueRouter from 'vue-router'
import routes from 'assets/js/routes'
import App from 'components/index.vue'

import ElementUi from 'element-ui'
import "element-ui/lib/theme-default/index.css"
//css
import 'assets/css/react.scss'

Vue.use(ElementUi)
//路由配置
var router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        // return { x: 0, y: 0 }期望滚动到哪个的位置
        //仅当 popstate 导航 可用
        //滚动锚点
        if (to.hash) {
            return {
                selector: to.hash
            }
        }
    },

    //mode: 'history',
});

//全局插件
Vue.use(VueRouter)
Vue.use(VueRouter)

const app = new Vue({
    router,
    watch: {
        //监控
    },
    render: h => h(App)
}).$mount('#app')