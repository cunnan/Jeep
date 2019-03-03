<template>
   <div class="j-nav">
       <div class="nav">
           <div class="nav-child">
               <router-link to="javascript:;" class="item logo"><img :src="logo.url" alt="" class="img"></router-link>
               <router-link to="javascript:;" class="item dropdown">{{dropdown.nav}}</router-link>
               <router-link to="javascript:;" class="item leftText" v-for="item in leftText" :key="item.id">{{item.nav}}</router-link>
           </div>
           <div class="nav-child">
               <router-link to="javascript:;" class="item rightText" v-for="item in rightText" :key="item.id">{{item.nav}}</router-link>
               <router-link to="javascript:;" class="item rightPic" v-for="item in rightPic" :key="item.id"><img :src="item.url" alt="" class="img"></router-link>
           </div>
       </div>
   </div>
</template>
<script>
    export default {
        data(){
            return {
                // 导航数据
                logo:{},
                dropdown:{},
                leftText:[],
                rightText:[],
                rightPic:[]
            }
        },
        methods:{
            // 获取导航数据getNav()
            getNav(){
                var url=`http://127.0.0.1:5050/index/nav`
                this.axios.get(url).then((res)=>{
                   this.logo=res.data[0];
                   this.dropdown=res.data[1];
                   this.leftText=res.data.slice(2,6)
                   this.rightText=res.data.slice(6,8)
                   this.rightPic=res.data.slice(-3)
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
        },
        created() {
            this.getNav()
        },
    }
    
</script>
<style lang="scss"scoped>
    //导航
    //顶部节点.j-nav
    //设置.j-nav的背景颜色,其子节点.nav水平居中
    .j-nav{
        background:#000;
        justify-content:center;
    }
    //设置.nav宽度,并且子节点.nav-child两端对齐
    .j-nav .nav{
        width: 80%;;
        justify-content:space-between;
    }
    //设置.nav-child的子节点.item固定宽度,内边距,字体
    .j-nav .item{
        flex:0 0 auto;
        padding:1.5rem 1rem;
        font-size:1rem;
        color:#fff;
    }
    //设置.item的子节点.img高度
    .j-nav .img{
        height:1.5rem;
    }
    // 设置分类选择器.item.logo的右内边距
    .j-nav .item.logo{
        padding-right:2rem;
    }
    // 设置分类选择器.item.dropdown:hover背景颜色,字体颜色
    .j-nav .item.dropdown:hover{
        background:#fff;
        color:#000;
    }
</style>


