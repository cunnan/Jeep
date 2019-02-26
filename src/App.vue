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
    #app{
        @extend .media;
    }
    #app :not(:empty){
        display: flex;
    }
    #app > :not(:empty){
        flex-direction:column;
    }
</style>

