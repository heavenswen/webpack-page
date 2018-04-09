// 主内容容器
<template>
    <section class="main">
        <h1 class="text--center">main</h1>
    </section>
</template>
<script>
export default {
  data() {
    return {
      //过渡效果
      transitionName: "swiper",
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
      .then(function(json) {});
  },
  beforeRouteUpdate(to, from, next) {
    // 当同个组件被调用时触发 但不会触发过渡
    // 不！能！获取组件实例 `this`
    // 因为当钩子执行前，组件实例还没被创建
    // if (to.path == from.path) {
    //   let path = `/s404?`;
    //   let n = 0;
    //   for (let k in to.query) {
    //     if (n > 0) {
    //       path += "&";
    //     }
    //     path += `${k}=${to.query[k]}`;
    //     n++;
    //   }

    //   // this.$router.push(path);
    // }
    next();
  },
  // watch: {
  //   //基于当前路由与目标路由的变化关系，动态设置过渡效果：
  //   $route(to, from) {
  //     const toDepth = to.path.split("/").length;
  //     const fromDepth = from.path.split("/").length;
  //     //对比层级
  //     this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
  //   }
  // }
};
</script>
