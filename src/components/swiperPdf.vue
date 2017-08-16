// PDFJS+Swiperjs 组件
//先用pdfjs 读取 pdf 并转换成图片 再用swiper做出轮播效果 
//细节 再读取第1次时获取总数，用总算生成swiper 再依次读取pdf
<template>
    <div class="pdf-container">
        <!-- 视图块 -->
        <header class='pdf-head'>
            {{pageNow}}/{{pageNum}}(读取数{{page}})
        </header>
        <section class="pdf-view">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <!-- 根据页面数生成dom 比 依次读取页面后生成 快 -->
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
    props: {
        //pdf资源链接 无法跨域利用nginx代理到你应用的地址应该可以， 或者后端服务读取远程文件给pdf.js
        url: {
            type: String,
        }
    },
    data() {
        return {
            //按照实际尺寸读取
            scale: 1.5,
            //页面总数
            pageNum: 0,
            //读取完毕的页面数
            page: 0,
            //转换后的pdf img
            imgs: [],
            //当前页数
            pageNow: 0,
            //swiper
            mySwiper: null
        }
    },
    methods: {
        initPdf(el, callback) {
            //初始化 PDF
            let that = this
       
            //读取pdf数据
            PDFJS.getDocument(this.url).then((pdf) => {
                //numpages 页面数
                that.pageNum = pdf.numPages
                //读取pdf转换成图片
                function getPic(page) {
                    //读取页数比例
                    var viewport = page.getViewport(that.scale);

                    // Prepare canvas using PDF page dimensions.
                    var canvas = el.querySelector('.canvas');
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
                        if (that.page == 1 && callback) {
                            callback()
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

        },
        initSwiper() {
            let that = this
            return new Swiper('.swiper-container', {
                //按键激活
                keyboardControl: true,
                //初始化执行
                onInit: function (swiper) {
                    //当前第1页
                    that.pageNow = 1
                },
                //滑动后执行
                onTransitionStart(swiper) {
                    //设置当前页数 页数是从1开始 ，index 从0开始
                    that.pageNow = swiper.activeIndex + 1
                }
            })

        }

    },
    mounted() {
        //dom生产完毕
        //加载层
        this.$root.$children[0].maskAdd();

        //dom生成后执行
        const el = this.$el

        let that = this

        //获取pdf页数 从1开始
        this.initPdf(el, function () {
            //隐藏加载层
            that.$root.$children[0].maskRemove();
            //初始化 swiper
            that.mySwiper =  that.initSwiper();

        })

    }

}
</script>
