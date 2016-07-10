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
    @import '../style/_variables.scss';

    .gallery-container{
        display:flex;
        flex-wrap: wrap;
        height:100%;
        //border: 2px solid $color1;

        .gallery-image{
            flex: 1;
            margin: 8px
        }
    }
</style>