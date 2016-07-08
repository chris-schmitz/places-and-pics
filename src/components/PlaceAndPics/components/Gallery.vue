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
        <gallery-image class="gallery-image" v-for="image in location.images" :image="image"></gallery-image>
    </div>
</template>

<style lang="sass">
    .gallery-container{
        display:flex;
        flex-wrap: wrap;
        height:100%;
        overlfow-y: scroll;
        overflow-x: hidden;

        .gallery-image{
            flex: 1;
        }
    }
</style>