<template>
    <div class="j-banner">
        <ul>
            <li><a href="#"><img src="@/assets/images/banner/banner1.jpg" alt=""></a></li>
            <li><a href="#"><img src="@/assets/images/banner/banner2.jpg" alt=""></a></li>
            <li><a href="#"><img src="@/assets/images/banner/banner3.jpg" alt=""></a></li>
            <li><a href="#"><img src="@/assets/images/banner/banner4.jpg" alt=""></a></li>
            <li><a href="#"><img src="@/assets/images/banner/banner5.jpg" alt=""></a></li>
            <li><a href="#"><img src="@/assets/images/banner/banner6.jpg" alt=""></a></li>
        </ul>
        <ul>
            <li><a href="javascript:;"></a></li>
            <li><a href="javascript:;" class="pointer"></a></li>
            <li><a href="javascript:;"></a></li>
            <li><a href="javascript:;"></a></li>
            <li><a href="javascript:;"></a></li>
            <li><a href="javascript:;"></a></li>
        </ul>
    </div>
</template>
<script>
    // window.onresize=function(){
    //     console.log(innerHeight,innerWidth)
    // }
    export default {
        
    }
</script>
<style lang="scss" scoped>
    .j-banner{
        display: flex;
        overflow: hidden;
        position: relative;
    }
    .j-banner :not(:empty){
        display: flex;
        flex:1 0 auto;
    }
    .j-banner ul:last-child{
        position: absolute;
        bottom: 0;
        width: 100%;
        justify-content: center;
        
    }
    .j-banner ul:last-child li{
        flex: 0 0 auto;
    }
    .j-banner ul:last-child a{
        width: 1rem;
        height: 1rem;
        margin: 1.2rem 0.6rem;
        background:#FDFCFC;
        border-radius: 50%;
    }
    .j-banner ul:last-child a.pointer{
        background: #FFB300;
    }
</style>
