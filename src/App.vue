<template>
    <div class="app-container">
        <notifications></notifications>
        <place-and-pics></place-and-pics>
    </div>
</template>

<script>
    import PlaceAndPics from "./components/PlaceAndPics/PlaceAndPics.vue"
    import Notifications from "./components/Notifications.vue"

    export default {
        components:{
            PlaceAndPics,
            Notifications
        },
        events:{
            showNotification: function (...payload){
                this.$broadcast('showNotification', ...payload)
            }
        }
    }
</script>

<style>
    body {
        font-family: Helvetica, sans-serif;
    }
    .app-container{
        height:98%;
        min-height:98%;
    }
</style>
