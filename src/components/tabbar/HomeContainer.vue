<template>

<!--    轮播图区域-->
    <div>
        <van-swipe :autoplay="3000" indicator-color="white">
<!--            在组件中，使用v-for循环的话，一定要使用key-->
            <van-swipe-item v-for="item in lunbotuList" :key="item.id">
                <img :src="item.img" alt="">
            </van-swipe-item>
        </van-swipe>

        <van-grid :column-num="3" :border="false" square>
<!--          <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" > </van-grid-item>-->
            <van-grid-item v-for="value in imageList" :key="value.id"  text="文字" ><img :src="value.img" alt=""> <div class="van-grid-item__text">{{ value.title }}</div></van-grid-item>
        </van-grid>

    </div>
</template>

<script>
    import { Toast } from 'vant';

    export default {
        name: "HomeContainer",
        data(){
            return {
                //保存轮播图的数组
                lunbotuList: [{"id":1,"url":"http://www.itcast.cn/subject/phoneweb/index.html", "img":"https://img.moegirl.org/common/d/dc/%E8%B7%AF%E4%BA%BA%E5%A5%B3%E4%B8%BB%E7%9A%84%E5%85%BB%E6%88%90%E6%96%B9%E6%B3%95_%E8%A7%92%E8%89%B2%E6%AD%8CCD1.jpg"},
                    {"id":2,"url":"http://www.itcast.cn/subject/phoneweb/index.html","img":"https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=4decf874748b4710da22f59ea2a7a898/a1ec08fa513d2697aea3080853fbb2fb4316d877.jpg"},
                    {"id":3,"url":"http://www.itcast.cn/subject/phoneweb/index.html","img":"http://www.005.tv/uploads/allimg/160708/1F13HI7-6.jpg"}],
                imageList: [
                    {'id':1, 'img': 'src/images/menu1.png', 'title': '新闻资讯'},
                    {'id':2, 'img': 'src/images/menu2.png', 'title': '图片分享'},
                    {'id':3, 'img': 'src/images/menu3.png', 'title': '商品购买'},
                    {'id':4, 'img': 'src/images/menu4.png', 'title': '留言反馈'},
                    {'id':5, 'img': 'src/images/menu5.png', 'title': '视频专区'},
                    {'id':6, 'img': 'src/images/menu6.png', 'title': '联系我们'},
                ]
            }
        },
        created(){
            // 获取网络数据，注释后使用本地数据
          // this.getLunbotu()
        },
        methods: {
            getLunbotu(){
                this.$http.get('getlunbo').then(result => {
                    if(result.data.status === 0){
                        this.lunbotuList = result.data.message;
                    } else {
                        Toast('轮播图获取失败')
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .van-swipe{
        height: 350px;
    }
.van-swipe-item{
    background-color: #269abc;
}
    img{
        width: 100%;
        height: 100%;
    }
</style>