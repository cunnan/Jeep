<template>
    <div class="j-nav-one">
        <j-nav-item-text :text="navList[1]"></j-nav-item-text>
        <j-nav-item-img :img="navList[2]"></j-nav-item-img>
    </div>
</template>
<script>
import jNavItemText from "@/components/sub/NavItemText";
import jNavItemImg from "@/components/sub/NavItemImg";
export default {
    props:['navList'],
    components:{jNavItemText,jNavItemImg},

}
</script>
<style lang="sass" scoped>

</style>
