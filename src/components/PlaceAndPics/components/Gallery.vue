<script>
    import GalleryImage from './Image.vue'

    module.exports = {
        props:['location'],
        components:{GalleryImage},
        ready: function (){
        }
    }
</script>

<template>
    <div class="gallery-container">
        <gallery-image v-for="image in location.images" :image="image"></gallery-image>
    </div>
</template>

<style lang="sass">
    .gallery-container{
        height:100%;
        overlfow-y: scroll;
        overflow-x: hidden;
    }
</style>