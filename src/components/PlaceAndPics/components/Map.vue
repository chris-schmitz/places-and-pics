<script>
    import Info from './Info.vue'
    let keys = require('../../../../keys.js')
    let googleMapsLoader = require('google-maps')

    module.exports = {
        components:{ Info },
        data: () => {
            return {
                apiKey: keys.google.maps,
                map: null
            }
        },
        ready: function (){
            let vm = this
            let map = this.$el.querySelector('#map')
            googleMapsLoader.KEY = this.apiKey
            googleMapsLoader.LIBRARIES = ['places']

            googleMapsLoader.load(function (google){
                vm.map = new google.maps.Map(map, {
                    center: {lat: 38.627003, lng: -90.199404},
                    zoom: 8
                })
                vm.mapReady()
            })
        },
        methods:{
            mapReady: function (){
                debugger
            }
        }
    }
</script>

<template>
    <div class="map-container">
        <div id="map" class="map">
            <info></info>
        </div>
    </div>
</template>

<style lang="sass">
    .map-container{
        border: 1px dashed red;
        display: flex;

        .map{
            margin: 5px;
            border: 1px dashed red;
            flex: 1;
            text-align: center;
            display:flex;
            align-items: center;
            justify-content: center;

            span{
                display: inline-block;
            }
        }
    }
</style>