//路由
import Vue from 'vue'
// 路由导航
import VueRouter from 'vue-router'
import routes from 'assets/js/routes'
//状态管理
import Vuex from "vuex"
import store from 'assets/js/store'
//首页组件
import App from 'views/index.vue'
//css
import 'assets/css/react.scss'

//路由配置
const router = new VueRouter({
    //导航
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

//导航激活回调
router.beforeEach((to, from, next) => {
    // to 和 from 都是 路由信息对象
    //next 继续导航
    next();
})

router.afterEach((to, from) => {
    //获得当前地址to
    let nowPath = to.fullPath
    //路由状态
    let data = router.app.$store
    //触发路由时改变vuex状态 
    data.commit("setNowPath", nowPath)
    
})
//全局插件
Vue.use(VueRouter)

Vue.use(Vuex)


const app = new Vue({
    data:{
        g:0,
    },
    store,
    router,
    watch: {
        //监控
    },
    render: h => h(App)
}).$mount('#app')