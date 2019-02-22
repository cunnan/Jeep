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
    #app,#app :not(:empty){
        display: flex;
        flex-direction: column;
    }
    #app :not(:empty){
        flex:1 0 auto;
    }
</style>

