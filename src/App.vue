<template>
    <div class="app-container">
        <place-and-pics></place-and-pics>
    </div>
</template>

<script>
    import PlaceAndPics from "./components/PlaceAndPics/PlaceAndPics.vue"

    export default {
        components:{
            PlaceAndPics
        },
        data () {
            return {
            }
        }
    }
</script>

<style>
    body {
        font-family: Helvetica, sans-serif;
    }
</style>
