<template>
   <div class="j-nav">
     <ul class="nav">
         <li class="left">
            <span><a href="#"><img :src="nav" alt=""></a></span>
            <div>
                <a class="dropdown"href="#">品牌车型▼</a>
                <a href="#">品牌车型▼</a>
                <a href="#">品牌车型▼</a>
                <a href="#">品牌车型▼</a>
                <a href="#">品牌车型▼</a>
            </div>
         </li>
         <li class="right">
            <a href="#">品牌车型▼</a>
            <a href="#">品牌车型▼</a>
            <a href="#"><img :src="nav" alt=""></a>
            <a href="#"><img :src="nav" alt=""></a>
            <a href="#"><img :src="nav" alt=""></a>
         </li>
     </ul>
  </div>  
</template>
<script>
    export default {
        data(){
            return {
                nav:''
            }
        },
        methods:{
            test(){
                var url=`http://127.0.0.1:5050/index/nav`
                this.axios.get(url).then((res)=>{
                   this.nav='http://127.0.0.1:5050'+res.data[0].url
                   console.log(this.nav)
                })
            }
        },
        created() {
            this.test()
        },
    }
    
</script>
<style lang="scss"scoped>
    .j-nav{
         justify-content: center;
         background:#000;
    }
    .j-nav .nav{
        width:80%;
        height:4.5rem;
        justify-content:space-between;
    }
    .j-nav a{
        padding: 0 1rem;
        align-items: center;
        flex:1 0 auto;
        color:#fff;
    }
    .j-nav img{
        height:1.5rem;
    }
    .j-nav .left span{
        padding-right: 2rem;
    }
    .j-nav .dropdown:hover{
        background:#fff;
        color:#000;
    }
</style>


