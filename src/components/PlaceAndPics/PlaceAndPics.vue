<script>
    require('./style/main.scss')
    import Locations from './components/Locations.vue'
    import Map from './components/Map.vue'

    module.exports = {
        components:{Locations, Map},
        data: () => {
            return {
                msg: 'placeandpics root'
            }
        }
    }
</script>

<template>
    <div class="place-and-pics-container container">
        <div class="panel panel-primary">
            <div class="panel-heading"><h2>Places and Pics</h2></div>
            <div class="panel-body">
                <locations class="left-column"></locations>
                <map class="right-column"></map>
            </div>
        </div>
    </div>
</template>

<style lang="sass">
    .place-and-pics-container{
        margin-top:40px;

        .panel-body{
            display:flex;
            flex-direction: row;
        }
    }
    .left-column{
        flex: 1;
    }
    .right-column{
        flex: 3;
    }
</style>