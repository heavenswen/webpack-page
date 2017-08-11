// 底层
<template>
    <div id="app">
        <!--内容过渡层 appear 开始执行过渡-->
        <transition name='show' mode="out-in" appear >
            <router-view ></router-view>
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
import 'assets/css/spa.scss'

//计时器
let maskTimeout
export default {
    data() {
        return {
            //加载等待
            mask: false,
            maskNum: 0,
        }
    },

    methods: {


        //通用方法
        //this.$root.$children[0] 调用当前下的方法 
        //加载等待
        maskshow() {

            return this.mask = true;
        },
        maskAdd() {
            //添加一个任务记数
            this.maskNum++;
            return this.maskshow();

        },
        maskRemove() {
            //减少一个任务记数
            this.maskNum--;
            //当0是关闭
            if (!this.maskNum) this.maskHide()
        },
        maskHide() {
            //直接关闭
            return this.mask = false;
        },
        ajax(mode = 'get', url = '#', thenfun, catchfun) {
            this.maskAdd();
            let that = this

            Axios[mode].then((json) => {
                //减少一个任务计数
                that.maskRemove();
                //callback
                if (thenfun) thenfun(json)
            }).catch((e) => {
                //减少一个任务计数                
                that.maskRemove();
                if (thenfun) catchfun(e)

            })


        },

    },
    // components: { VMark }
}
</script>
