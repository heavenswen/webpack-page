<template>
    <div class="pdf-container">
        <!-- 视图块 -->
        <header class='pdf-head'>
            {{pageNow}}/{{pageNum}}(读取数{{page}})
        </header>
        <section class="pdf-view">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="i in pageNum" :key="i.index">
                        <img v-if="imgs[i-1]" :src="imgs[i-1]">
                    </div>
                </div>
            </div>
        </section>
        <!-- 读取用 -->
        <canvas class="canvas"></canvas>
    </div>
</template>
<script>
import PDFJS from 'assets/js/pdf.min.js'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import 'assets/css/pdf.scss'

export default {
    data() {
        return {
            scale: 1,
            pdfUrl: "../assets/img/2.pdf",
            pageNum: 0,
            page: 0,
            imgs: [],
            pageNow: 0,
            mySwiper: null
        }
    },
    methods: {


    },
    mounted() {
        //加载层
        this.$root.$children[0].maskAdd();

        //dom生成后执行
        const el = this.$el

        let that = this
        //获取pdf页数 从1开始

        //读取pdf数据
        PDFJS.getDocument(this.pdfUrl).then((pdf) => {
            that.pageNum = pdf.numPages
            //读取pdf转换成图片
            function getPic(page) {
                //读取页数比例
                var viewport = page.getViewport(that.scale);

                // Prepare canvas using PDF page dimensions.
                var canvas = document.querySelector('.canvas');
                var context = canvas.getContext('2d');

                //
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                // Render PDF page into canvas context.
                var renderContext = {
                    canvasContext: context,
                    viewport: viewport
                };

                //canvans输出
                page.render(renderContext).then(() => {
                    //转换成图片
                    let img = canvas.toDataURL("image/jpg")
                    that.imgs.push(img)
                    //关闭等待层

                    //init swiper
                    if (that.page == 1) {
                        that.$root.$children[0].maskRemove();
                        that.mySwiper = new Swiper('.swiper-container', {
                            keyboardControl: true,
                            onInit: function (swiper) {
                                that.pageNow = 1
                            },
                            onTransitionEnd(swiper) {
                                that.pageNow = swiper.activeIndex + 1
                            }
                        })
                    }
                    if (that.page + 1 <= that.pageNum) {
                        //依次读取
                        getPdf();
                    }
                });
            }
            //获取单页pdf 的内容
            function getPdf() {
                if (that.page <= that.pageNum) {
                    that.page++;
                    //pdf 的页数是从1开始
                    pdf.getPage(that.page).then(getPic);
                }
            }

            //init
            getPdf();


        })

    }

}
</script>
