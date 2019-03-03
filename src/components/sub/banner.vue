<template>
    <div class="j-banner">
        <div class="pics" :style="trans">
            <router-link to="javscript:;" class="pic" v-for="item in banners" :key="item.id"><img class="img" :src="item.imgurl" alt=""></router-link>
        </div>
        <div class="zsqs">
           <span class="zsq" @click="zsqBanner" v-for="(item,index) in banners" :data-zsq="index" :key="item.id"></span>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                url:'http://127.0.0.1:5050/index/banner',//轮播图数据请求url
                banners:[],//轮播图
                trans:'',//style
                i:0,//轮播图下标
                step:1,//位移步长和方向
                zsq:[],//指示器数组
                n:'',//定时器
            }
        },
        watch:{
           
        },
        methods:{
             // 获取轮播图getBanner()
            getBanner(){
                this.axios.get(this.url).then((res)=>{
                  this.banners=res.data
                })
            },
            // 轮播
            translate(){
                this.zsq=document.querySelectorAll('.zsq');
                this.zsq[this.i].classList.add('active')
                this.n=setTimeout(()=>{
                    if(this.i==this.banners.length-1){
                        this.step=-1;
                    }
                    if(this.i==0){
                        this.step=1;
                    }
                    this.zsq[this.i].classList.remove('active')
                    this.i+=this.step;
                    this.trans=`transform:translate(-${this.i}00%)`;
                },3000)
            },
            //单击指示器
            zsqBanner(e){    
                if(this.i==parseInt(e.target.dataset.zsq)) return;
                clearTimeout(this.n);
                this.zsq[this.i].classList.remove('active');
                if(this.i<parseInt(e.target.dataset.zsq)){
                    this.step=1;
                }else{
                    this.step=-1
                }
                this.i=parseInt(e.target.dataset.zsq);
                this.trans=`transform:translate(-${this.i}00%)`;
            }
        },
        created(){
            this.getBanner();
           
        },
        updated(){
            this.translate();
        }
    }
</script>
<style lang="scss" scoped>
    // 轮播图
    // 顶部节点.j-banner
    // 设置.j-banner高度
    $w:100%;
    $h:9*$w/16;
    .j-banner{
        height: $h;
        position: relative;
        justify-content: center;
        overflow: hidden;
        transition: 1s;
    }
    //设置.pics宽度
    .j-banner .pics{
        width: 100%;
        transition: 1s;
    }
    // 设置.pic宽度
    .pic{
        flex: 0 0  100%;
    }
    //设置.zsqs绝对定位
    .j-banner .zsqs{
        position: absolute;
        bottom: 0;
    }
    // 设置.zsq
    .j-banner .zsq{
        margin: 2rem 1rem;
        padding: 0.5rem;
        border-radius: 50%;
        background: #ffffff;
    }
    // 设置.img
    .j-banner .img{
        object-fit: cover;
    }
    .j-banner .active{
        background: $color-3;
    }
</style>
