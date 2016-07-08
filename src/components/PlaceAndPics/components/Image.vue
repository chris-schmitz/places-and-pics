<script>
    module.exports = {
        props:['image'],
        data: () => {
            return {
            }
        }
    }
</script>

<template>
    <div class="image-container">
        <img :src="image.src">
    </div>
</template>

<style lang="sass">
    .image-container{
        img{
            width: 250px;
        }
    }
</style>