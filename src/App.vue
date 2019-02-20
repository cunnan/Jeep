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
    @media (max-width: 1560px) {
        min-width: 1340px;
    }

    @media (max-width: 1200px) {
        min-width: 1140px;
    }
   
    @media (max-width: 992px) {
        min-width: 960px;
    }
   
    @media (max-width: 768px) {
        min-width: 720px;
    }

    @media (max-width: 576px) {
        min-width: 540px;
    }
}

</style>

