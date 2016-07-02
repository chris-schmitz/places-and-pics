<script>
    import Dropzone from './Dropzone.vue'
    import Gallery from './Gallery.vue'

    module.exports = {
        components: { Dropzone, Gallery},
        data: () => {
            return { name: 'info'}
        }
    }
</script>

<template>
    <div class="info-container">
        <gallery></gallery>
        <dropzone></dropzone>
    </div>
</template>

<style lang="sass">
    .info-container{
        border: 1px dashed red;
    }
</style>