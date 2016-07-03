<script>
    import Info from './Info.vue'
    let keys = require('../../../../keys.js')
    let googleMapsLoader = require('google-maps')
    let state = require('../state/state.js')

    module.exports = {
        components:{ Info },
        data: () => {
            return {
                dev: state.dev,
                apiKey: keys.google.maps,
                mapOptions: state.mapOptions,
                locations: state.locations,
                google: null,
                map: null
            }
        },
        ready: function (){
            let vm = this
            let map = this.$el.querySelector('#map')
            googleMapsLoader.KEY = this.apiKey
            googleMapsLoader.LIBRARIES = ['places']

            googleMapsLoader.load(function (google){
                vm.google = google
                vm.map = new google.maps.Map(map, {
                    center: vm.mapOptions.center,
                    zoom: vm.mapOptions.zoom
                })
                vm.mapReady()
            })
        },
        methods:{
            mapReady: function (){
                let vm = this
                this.locations.forEach(function (location){
                    vm.placePin(location)
                })
            },
            placePin: function (location){
                location.marker = new this.google.maps.Marker({
                    title: location.name,
                    position: location.coordinates,
                    map: this.map,
                    animation: this.google.maps.Animation.DROP,
                })
                // see note in `Info.vue` regarding whether or not this is the
                // best way of creating the info windows.
                this.$broadcast('createInfoWindow', location, this.google, this.map)
            },
        }
    }
</script>

<template>
    <div class="map-container">
        <div id="map" class="map" :class="{'outline-edges': this.dev.showEdges}">
            <info v-for="location in locations" :location="location"></info>
        </div>
    </div>
</template>

<style lang="sass">
    .map-container{
        display: flex;

        .map{
            margin: 5px;
            height:500px;
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