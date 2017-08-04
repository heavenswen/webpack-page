// 底层
<template>
    <div id="app" refs="app">
        <!--内容过渡层 appear 开始执行过渡-->
        <transition name="load" mode="out-in" appear>
            <router-view ref="con"></router-view>
        </transition>
        <!--全局加载-->
        <transition name="show" mode="out-in">
            <section v-if="mask" class="mask" @click="maskHide">
                <div class="mask-tip">
                    <section class='mask-icon'>
                        <i></i>
                        <i></i>
                        <i></i>
                    </section>
                    <!-- 数据加载中... -->
                </div>
            </section>
        </transition>
    </div>
</template>
<script>

//axios
import Axios from "axios"
import 'assets/css/mask-tip.scss'

//计时器
let maskTimeout
export default {
    data() {
        return { mask: false, maskNum: 0, }
    },
    created() {

    },
    // watch:{
    //监控data变化
    // },
    methods: {
        //通用方法

        // $root.[name] 调用 
        //this.$root.$children[0].[name] 下级调用
        //加载等待
        maskHide() {
            //直接关闭
            return this.mask = false;
        },
        searchParams(data) {
            //处理 application / x-www-form-urlencoded格式 (axios)
            let params = new URLSearchParams()
            for (let k in data) {
                params.append(k, data[k])
            }

            return params
        },
        maskRemove() {
            this.maskNum--
            if (!this.maskNum) this.maskHide()
        },
        //ajax 显示 等待
        ajax(mode = 'get', url = '#', data = {}, thenfun, catchfun) {
            let that = this
            this.maskNum++
            this.mask = true

            let params = mode == 'get' ? { params: data } : this.searchParams(data)

            Axios[mode](url, params).then((json) => {
                this.maskRemove()
                //callback
                if (thenfun) thenfun(json)
            }).catch((e) => {
                this.maskRemove()
                if (thenfun) catchfun(e)

            })


        },

    },
    // components: { VMark }
}
</script>