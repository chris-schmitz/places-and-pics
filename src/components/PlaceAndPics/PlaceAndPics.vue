<script>
    require('./style/main.scss')
    import Dropzone from './components/Dropzone.vue'
    import Gallery from './components/Gallery.vue'
    import Location from './components/Location.vue'
    import Locations from './components/Locations.vue'
    import Map from './components/Map.vue'
    import Image from './components/Image.vue'

    module.exports = {
        components:{Dropzone, Gallery, 'pp-image':Image, Location, Locations, Map},
        data: () => {
            return {
                msg: 'placeandpics root'
            }
        }
    }
</script>

<template>
    <div class="place-and-pics-container">
        <ul>
            <li><dropzone></dropzone></li>
            <li><gallery></gallery></li>
            <li><location></location></li>
            <li><locations></locations></li>
            <li><pp-image></pp-image></li>
            <li><map></map></li>
        </ul>
    </div>
</template>

<style lang="">
</style>