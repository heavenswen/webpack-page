<template>
    <section class='page page404' @click='back'>
        <div class='text-center'>
            <h1>404</h1>
            <p>页面不见了ヾ(;ﾟ;Д;ﾟ;)ﾉﾞ</p>
            <p class='small'>点击返回</p>
        </div>
    </section>
</template>

<script>
// import "assets/css/404.scss"
export default {
    watch: {

    },
    methods: {
        //触发路由上1page
        back() {
            history.go(-1);
        }
    }
}
</script>

