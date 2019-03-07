<template>
  <div class="j-index">
    <j-nav-one :navList="navList"></j-nav-one>
    <router-view></router-view>
  </div>
</template>
<script>
import  jNavOne  from "@/components/sub/NavOne";
export default {
   data(){
     return {
       navList:['navList','navitemText','navitemImg']
     }
   },
    components:{jNavOne}
}
</script>
<style lang="scss"scoped>

</style>