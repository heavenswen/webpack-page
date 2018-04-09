// 底层
<template>
    <div id="app">
        <!--content 内容过渡层 appear 开始执行过渡-->
        <router-link to="/page">go to page</router-link>
        <router-link to="/404">go to 404</router-link>
        <transition :name='transitionName' mode="out-in" >
            <!--keep-alive 如果把切换出去的组件保留在内存中，可以保留它的状态或避免重新渲染。 -->
            <keep-alive>
                <router-view ></router-view>
            </keep-alive>
        </transition>
        <!-- content end -->
        <!--全局加载-->
        <transition name="fade" mode="out-in">
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
        <!--全局加载 end-->
    </div>
</template>
<script>
//axios
import Axios from "axios";
import InputDate from "components/inputDate.vue";
import "assets/css/mask-tip.scss";
import "assets/css/spa.scss";
// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapState } from "vuex";

//计时器
let maskTimeout;
export default {
  data() {
    return {
      //过渡效果
      transitionName: "slide-left"
    };
  },
  created(){
   //创建完成时执行
  },
  //计算属性
  computed:
    //直接从$store 获得并返回给容器
    // 辅助函数 少写几个字符
    mapState({
      //mapstate show
      // 箭头函数可使代码更简练
      title: state => state.title,

      // 传字符串参数 'count' 等同于 `state => state.count`
      countAlias: "title",

      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      //等待层
      mask(state) {
        if (state.axios) {
          return true;
        } else {
          return false;
        }
      }
    }),
  // 当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。
  // 映射 this.count 为 store.state.count
  // computed: mapState([
  //   // 映射 this.count 为 store.state.count
  //   'count'
  // ])

  methods: {
    //通用方法
    //this.$root.$children[0] 调用当前下的方法
    //加载等待
    maskHide() {
      //直接关闭
      return this.$store.commit("axiosClean");
    }
  },
  //监控 参数并响应 Object.set
  watch: {
    //基于当前路由与目标路由的变化关系，动态设置过渡效果：
    $route(to, from) {
     
    }
  },
  beforeRouteUpdate(to, from, next) {
    //调用同一个组件时触发
    console.log(to,form)
    const toDepth = to.path.split("/").length;
    const fromDepth = from.path.split("/").length;
    this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    next();
  },
  components: { InputDate }
};
</script>
