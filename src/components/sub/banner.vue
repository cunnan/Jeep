<template>
    <div class="j-banner">
        <div class="pics">
            <a href=""><img src="../../assets/images/banner/banner1.jpg" alt=""></a>
            <a href=""><img src="../../assets/images/banner/banner1.jpg" alt=""></a>
            <a href=""><img src="../../assets/images/banner/banner1.jpg" alt=""></a>
            <a href=""><img src="../../assets/images/banner/banner1.jpg" alt=""></a>
            <a href=""><img src="../../assets/images/banner/banner1.jpg" alt=""></a>
            <a href=""><img src="../../assets/images/banner/banner1.jpg" alt=""></a>
        </div>
        <div class="zsq">
            <span></span>
            <span></span>
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
       height: 40rem;
       overflow: hidden;
   }
    // 轮播条
    .j-banner .pics{
        width: 100%;
        flex-grow: 0 0 auto;
    }
    .j-banner img{
      
    }
    // 指示器
    

</style>
