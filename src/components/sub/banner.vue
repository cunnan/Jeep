<template>
    <div class="j-banner">
        <div class="pics">
            <a href=""><img src="../../assets/images/banner/banner1.jpg" alt=""></a>
            <a href=""><img src="../../assets/images/banner/banner2.jpg" alt=""></a>
            <a href=""><img src="../../assets/images/banner/banner3.jpg" alt=""></a>
            <a href=""><img src="../../assets/images/banner/banner4.jpg" alt=""></a>
            <a href=""><img src="../../assets/images/banner/banner5.jpg" alt=""></a>
            <a href=""><img src="../../assets/images/banner/banner6.jpg" alt=""></a>
        </div>
        <div class="zsq">
            <span></span>
            <span class="active"></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style lang="scss" scoped>
    // 轮播盒子
    .j-banner{
       height: 50rem;
       overflow:hidden;
       position: relative;
       justify-content:center;
   }
    // 轮播条
    .j-banner .pics,.j-banner .pics a,.j-banner .pics img{
        width: 100%;
    }
    .j-banner .pics a{
        flex:0 0 100%;
    }
    // 指示器
    .j-banner .zsq{
        position: absolute;
        bottom:2rem;
    }
    .j-banner .zsq span{
        width: 1rem;
        height: 1rem;
        background: #fff;
        margin: 0 1rem;
        border-radius: 50%;
    }
    .j-banner .zsq .active{
        background: #ffb300;
    }
    .j-banner .pics{
        animation:loops 50s linear infinite alternate;
    }
     @keyframes loops{
        20%{
            transform:translate(-100%)
        }
        40%{
        transform:translate(-200%)
        }
        60%{
            transform:translate(-300%)
        }
       80%{
            transform:translate(-400%)
        }
        100%{
            transform:translate(-500%)
        }
       }
</style>
