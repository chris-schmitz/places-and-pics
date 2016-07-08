<script>
    import Dropzone from './Dropzone.vue'
    import Gallery from './Gallery.vue'

    module.exports = {
        props:['location'],
        components: { Dropzone, Gallery},
        data: () => {
            return {}
        },
        events:{
            createInfoWindow: 'createInfoWindow'
        },
        methods:{
            onInfoWindowButtonClick: function (){
                console.log('firing this method from the info window vue instance :)')
            },
            createInfoWindow: function (triggerLocation, google, map){
                // there _has to be_ a better way of handling this. If
                // this is what we determine we're going to use to decide
                // if we have the correct location or not, it means we're
                // going to end up calling this method for the total number
                // of markers for _each marker_.
                // Is there a better way of pinpoint calling just the marker we
                // want?
                if(this.location !== triggerLocation){
                    return
                }
                let infoWindow = new google.maps.InfoWindow({
                    content: this.$el
                })
                this.location.marker.addListener('click', () => infoWindow.open(map, this.location.marker))
            }
        }
    }
</script>

<template>
    <div class="info-container">
        <div class="title">
            <h4>{{ location.name }}</h4>
        </div>
        <div class="content">
            <div class="gallery-block">
                <gallery :location="location"></gallery>
            </div>
            <div class="dropzone-block">
                <!-- <button class="btn btn-dark" @click="onInfoWindowButtonClick">clickme</button> -->
                <dropzone :location="location"></dropzone>
            </div>
        </div>
    </div>
</template>

<style lang="sass">
    .info-container{
        display: flex;
        flex-direction: column;
        width: 600px;
        height: 500px;

        .content{
            display: flex;
            flex-direction: row;
            flex:1;

            .gallery-block{
                flex: 2;
                align-items:stretch;
            }
            .dropzone-block{
                flex: 1;
                align-items:center;
                display:flex;
            }
        }
    }

</style>