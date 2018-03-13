// 主内容容器
<template>
    <section class="main">
        <h1 class="text--center">page main</h1>
        <transition :name='aniamte' mode="out-in" appear>
            <router-view></router-view>
        </transition>
    </section>
</template>
<script>
export default {
  data() {
    return {
      //过渡效果
      aniamte: "swiper",
      //当前路由
      path: "/"
    };
  },
  //创建完成时执行
  created() {
      // console.log(this.$store.state.title )
    this.$store.commit("setTitle", "set title");
    //统一网络请求接口
    this.$store
      .dispatch("ajax", {
        params: {
          params: {
            ID: 12345
          }
        }
      })
      .then(function(json) {

      });
  },
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当钩子执行前，组件实例还没被创建
    let reg = new RegExp(from.path, "ig");

    next();
  }
};
</script>
