<template>
    <vueshowpdf @closepdf="closepdf" v-model="isshowpdf" :pdfurl="pdfurls" @pdferr="pdferr" :maxscale='4' :minscale='0.6' :scale='1.1'>
    </vueshowpdf>
</template>
<script>
import vueshowpdf from 'vueshowpdf'
export default {
    data(){
        return{
            pdfurls: 'http://www.chang-su.com.cn/Uploads/201707/595c45fd4e7c3.pdf',
            isshowpdf: true
        }

    },
    methods: {
        closepdf() {
            this.isshowpdf = false
        },
        pdferr(errurl) {
            console.log(errurl);
        }
    },
    components: {
        vueshowpdf
    }

}
</script>
