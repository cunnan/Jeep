<template>
   <div class="j-nav">
      <ul><li><a href="#"><img  class="logo" :src="logo" alt=""></a></li></ul>
      <ul>
          <li><a href="#" class="dropdown">品牌车型▼</a></li>
          <li><a href="#">Jeep&nbsp;Life</a></li>
          <li><a href="#">购车支持</a></li>
          <li><a href="#">Jeep全境界</a></li>
          <li><a href="#">品牌信息</a></li>
      </ul>
      <ul>
          <li><a href="#">查询经销商</a></li>
          <li><a href="#">预约试驾</a></li>
          <li><a href="#"><img src="" alt=""></a></li>
          <li><a href="#"><img src="" alt=""></a></li>
          <li><a href="#"><img :src="dt" alt=""></a></li>
      </ul>
  </div>  
</template>
<script>
    export default {
        data(){
            return {
                logo:'',
                nav:[],
                dt:''
            }
        },
        created() {
            this.test()
            this.test2()
        },
        methods:{
            test(){
                var url=`http://127.0.0.1:5050/index/nav`
                this.axios.get(url).then((res)=>{
                   console.log(res.data)
                })
            },
            test2(){
                var num1=2;
                var num2=22;
                var test=this.qs.stringify({
                    num1,
                    num2
                })
                var url='http://127.0.0.1:5050/index/nav2'
                this.axios.post(url,test).then(res=>{
                  // console.log(res.data)
                })
            }
        }
    }
    
</script>
<style lang="scss"scoped>
    .j-nav,.j-nav :not(:empty){
        @extend .flex-direction-row;
    }
    .j-nav{
        background: $color-1;
        justify-content: center;
        height: 4.5rem;
    }
    .j-nav a{
        align-items: center;
        padding: 0 1.2rem;
        color: $color-2;
    }
    .j-nav .logo{
        height: 1.5rem;
    }
    .j-nav .dropdown:hover{
        background: $color-2;
        color:$color-1;
    }
    .j-nav ul:last-child{
       padding-left: 8.5rem;
    }
</style>


