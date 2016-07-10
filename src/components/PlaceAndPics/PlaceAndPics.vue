<script>
    require('./style/main.scss')
    import Locations from './components/Locations.vue'
    import Map from './components/Map.vue'
    import state from './state/state.js'
    import EnlargedImage from './components/EnlargedImage.vue'

    module.exports = {
        components:{Locations, Map, EnlargedImage},
        data: () => {
            return {
                state: state
            }
        },
        ready: function (){
            this.setupSocket()
            this.loadLocations()
        },
        methods:{
            setupSocket: function (){
                console.log('socketed')
                var socket = io()
                let vm = this
                socket.on('newimage', function (newImage){
                    let location = vm.state.locations.filter((location) => {
                        return location._id === newImage.locationId
                    })
                    if(location.length === 1){
                        location[0].images.push({date: null, src: newImage.path})
                        vm.$dispatch('showNotification', 'info', `New image(s) added for ${location[0].name}.`)
                    }
                })
                socket.on('error.newimage', function (payload){
                    debugger
                    vm.$dispatch('showNotification', 'danger', payload.message)
                })
            },
            loadLocations: function (){
                let vm = this
                this.$http({
                    url: '/locations'
                }).then((res) => {
                    res.data.locations.forEach(location => {
                        vm.state.locations.push(location)
                    })
                }).catch((res) => {
                    alert('broke!')
                })
            }
        }
    }
</script>

<template>
    <div class="place-and-pics-container">
        <enlarged-image></enlarged-image>
        <locations class="left-column"></locations>
        <map class="right-column"></map>
    </div>
<!--     <div class="place-and-pics-container container">
        <div class="panel panel-primary">
            <div class="panel-heading"><h2>Places and Pics</h2></div>
            <div class="panel-body">
                <locations class="left-column"></locations>
                <map class="right-column"></map>
            </div>
        </div>
    </div> -->
</template>

<style lang="sass">
    .place-and-pics-container{
        display:flex;
        flex-direction: row;
        flex-wrap: wrap-reverse;
        height:100%;
        min-height:100%;

    }
    .left-column{
        //flex: 1;
        flex-basis:200px;
    }
    .right-column{
        flex: 3;
        flex-basis:500px;
    }
    .outline-edges{
        border: 1px dashed blue !important;
    }

</style>