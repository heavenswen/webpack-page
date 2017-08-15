// PDFJS+Swiperjs 组件
<template>
    <s-pdf :url='pdfUrl'></s-pdf>
</template>
<script>
import SPdf from 'components/swiperPdf.vue'

export default {
    data() {
        return {
            pdfUrl: "../assets/img/2.pdf",
        }
    },
    components:{SPdf}

}
</script>
