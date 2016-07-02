<script>
    // import Image from './components/Image.vue'

    module.exports = {
        data: () => {
            return {
                name: 'gallery'
            }
        }
    }
</script>

<template>
    <div class="gallery-container">
        {{ name }}
    </div>
</template>

<style lang="sass">
    .gallery-container{
                border: 1px dashed red;

    }
</style>