<template>
    <div class="j-nav-item-text">
        <a href="#">{{text}}</a>
    </div>
</template>
<script>
export default {
     props:['text'],
}
</script>
<style lang="sass" scoped>
.j-nav-item-text{
    dispaly:flex;
}
.j-nav-item-text a{
    flex:0 0 auto;
    padding:0.6rem 1.2rem;
}
</style>
