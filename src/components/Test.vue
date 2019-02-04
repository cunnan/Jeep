<template>
    <div class="test">
        <h3>this is Jeep</h3>
        <ul>
            <li>4a1</li>
            <li>4a2</li>
            <li>4a3</li>
        </ul>
    </div>
</template>
<script>
export default {
    created(){
        $(function(){
            alert('this is Jeep')
        })
    }
}
</script>
<style lang="scss" scoped>
    $color1:red;
    .test{
        border: 1px solid #000;
        color:$color1;
    }
</style>
