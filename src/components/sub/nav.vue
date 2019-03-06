<template>
   <div class="j-nav fixed" :class="fixed">
       <div class="nav">
           <div class="nav-child">
               <router-link to="javascript:;" @mouseenter.native="dropnav1" class="item logo"><img :src="logo.url" alt="" class="img"></router-link>
               <router-link @mouseenter.native="dropnav" :class="drops" to="javascript:;" class="item ">{{dropdown.nav}}</router-link>
               <router-link to="javascript:;" @mouseenter.native="dropnav1" class="item leftText" v-for="item in leftText" :key="item.id">{{item.nav}}</router-link>
           </div>
           <div class="nav-child">
               <router-link to="javascript:;" class="item rightText" v-for="item in rightText" :key="item.id">{{item.nav}}</router-link>
               <router-link to="javascript:;" class="item rightPic" v-for="item in rightPic" :key="item.id"><img :src="item.url" alt="" class="img"></router-link>
           </div>
           <!-- dropdown -->
           <div class="box" :class="show" @mouseleave="dropnav1">
               <div class="left">
                   <router-link @mouseenter.native="carinfo" :data-id="item.id" class="item" to="javascript:;" v-for="item in navlist" :key="item.id"><img class="dropImg" :src="item.imgurl" alt=""></router-link>
               </div>
               <div class="right">
                   <div class="rightBigpic">
                        <router-link class="item" to="javascript:;"><img class="dropImg" :src="infourl" alt=""></router-link>
                   </div>
                   <div class="rightNav">
                        <router-link class="item" to="javascript:;" v-for="item in navfunc" :key="item.id"><img class="dropImg" :src="item.imgurl" alt=""></router-link>
                    </div>
               </div>
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
                rightPic:[],
                fixed:'',
                navlist:[],
                navfunc:[],
                // 下拉
                bool:false,
               show:{},
               drops:{},
                //carinfo
                infourl:''  
            }
        },
        watched:{
            fixed(){
               
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
             // 获取导航列表数据getNavList()
            getNavList(){
                var url=`http://127.0.0.1:5050/index/navlist`
                this.axios.get(url).then((res)=>{
                    this.navlist = res.data.data.navlist;
                    this.navfunc = res.data.data.navFunc;
                })
            },
            // 下拉
            dropnav(){       
               if(this.bool==false){
                    this.bool=true;  
               }
               this.drops={dropdown:this.bool}
               this.show={show:this.bool}
               this.infourl=this.navlist[0].infourl
            },
            dropnav1(){       
               if(this.bool==true){
                    this.bool=false;  
               }
               this.drops={dropdown:this.bool}
               this.show={show:this.bool}
            },
            // carinfo
            carinfo(){
                for(var item of this.navlist){
                    if(item.id == parseInt(event.target.dataset.id)){
                        if(typeof item.infourl!='object'){
                            this.infourl=item.infourl
                        }
                    }
                }
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
            },
        },
        created() {
            this.getNav();
            this.getNavList();
            onscroll=()=>{
                var scrollTop=document.body.scrollTop||document.documentElement.scrollTop
                if(scrollTop){
                    this.fixed='fixed'
                }else{
                    this.fixed=''
                }
            } 
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
        width: 80%;
        justify-content:space-between;
        position: relative;
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
    .j-nav .item.dropdown{
        background:#fff;
        color:#000;
    }
    .j-nav.fixed{
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1;
        transition:1s;
    }
    // dropdown
    .j-nav .nav .box{
        z-index: 1;
        background: #fff;
        position: absolute;
        top: 100%;
        left: 0;
        display: none!important;
        height:800%;
    }
    .j-nav .nav .box.show{
        display: flex!important;
    }
     .j-nav .nav .box a{
         padding: 0;
     }
    .j-nav .box .left{
        flex:0 0 40%;
        flex-wrap: wrap;
        overflow-y: auto;
    }
    .j-nav .box .right{
        flex:0 0 60%;
        flex-direction: column;
    }
    .j-nav .box .left .item{
        flex:0 0 50%;
       height: 20%;
    }
    .j-nav .box .left .item:hover{
        background: rgba(0,0,0,0.1);
    }
    .j-nav .box .left .item:not(:last-child){
        border-bottom:1px solid #ccc;
    }
    .j-nav .box .rightBigpic{
        height: 70%;
    }
    .j-nav .box .rightNav{
        height: 30%;
    }
    .j-nav .dropImg{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
     .j-nav .box .right .dropImg{
         object-fit: cover;
    }
    .j-nav .box .rightBigpic .item{
         flex:0 0 100%;
    }
    .j-nav .box .rightNav .item{
         flex:0 0 50%;
    }
    
</style>


