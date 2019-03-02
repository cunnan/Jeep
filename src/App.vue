<template>
    <div id="app">
    <router-view/>
    </div>
</template>
<script>
    export default {
        name: 'App'
    }
</script>
<style lang="scss"scoped>
    //项目
    //顶部节点#app
    //设置#app不同宽度屏幕下的宽度
    // #app{
    //     @media (max-width: 1560px) {
    //         min-width: 1480px;
    //     }

    //     @media (max-width: 1200px) {
    //         min-width: 1140px;
    //     }
    
    //     @media (max-width: 992px) {
    //         min-width: 960px;
    //     }
    
    //     @media (max-width: 768px) {
    //         min-width: 720px;
    //     }

    //     @media (max-width: 576px) {
    //         min-width: 540px;
    //     }
    // }
    //设置#app的非空后代节点为弹性布局,并设置文本不可选
    #app :not(:empty){
        display: flex;
        user-select:none;
    }
    //设置#app的非空子节点弹性布局主轴方向垂直
    #app > :not(:empty){
        flex-direction:column;
    }
</style>

