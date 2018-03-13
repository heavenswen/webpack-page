// 底层
<template>
    <div id="app">
        <!--content 内容过渡层 appear 开始执行过渡-->
        <transition name='show' mode="out-in" appear >
            <!-- 如果把切换出去的组件保留在内存中，可以保留它的状态或避免重新渲染。 -->
            <keep-alive>
                <router-view ></router-view>
            </keep-alive>
        </transition>
        <!-- content end -->
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
      //加载等待
      mask: false,
      maskNum: 0,
      test: "test props"
    };
  },
  //计算属性
  computed:
    //直接从$store 获得并返回给容器
    // title() {
    //   return this.$store.state.title;
    // },}
    // 辅助函数 少写几个字符
    mapState({
      //mapstate show
      // 箭头函数可使代码更简练
      title: state => state.title,

      // 传字符串参数 'count' 等同于 `state => state.count`
      countAlias: "title",

      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      countPlusLocalState(state) {
        return state.title + this.localCount;
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
    maskshow() {
      return (this.mask = true);
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
      if (!this.maskNum) this.maskHide();
    },
    maskHide() {
      //直接关闭
      return (this.mask = false);
    },
    ajax(mode = "get", url = "#", thenfun, catchfun) {
      this.maskAdd();
      let that = this;

      Axios[mode]
        .then(json => {
          //减少一个任务计数
          that.maskRemove();
          //callback
          if (thenfun) thenfun(json);
        })
        .catch(e => {
          //减少一个任务计数
          that.maskRemove();
          if (thenfun) catchfun(e);
        });
    }
  },
  //监控 参数并响应 Object.set
  watch: {},
  components: { InputDate }
};
</script>
