// PDFJS+Swiperjs 组件
<template>
    <div>
        <h4>pdf</h4>
        <s-pdf :url='pdfUrl'></s-pdf>
    </div>
</template>
<script>
import SPdf from '../lib/vue-pdf-swiper/'

export default {
    data() {
        return {
            pdfUrl: "../assets/img/2.pdf",
        }
    },
    components:{SPdf}

}
</script>
