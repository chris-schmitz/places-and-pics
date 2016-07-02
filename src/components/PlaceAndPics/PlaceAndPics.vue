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
                <locations></locations>
                <map></map>
            </div>
        </div>
        <div class="well">
            <ul>
                <li><locations></locations></li>
                <li><map></map></li>
            </ul>
        </div>
        <div class="panel panel-primary">
            <div class="panel-heading">
                test
            </div>
        </div>
        <div class="panel panel-success">
            <div class="panel-heading">
                test
            </div>
        </div>
        <div class="panel panel-warning">
            <div class="panel-heading">
                test
            </div>
        </div>
        <div class="panel panel-danger">
            <div class="panel-heading">
                test
            </div>
        </div>
        <div class="panel panel-info">
            <div class="panel-heading">
                test
            </div>
        </div>
    </div>
</template>

<style lang="sass">
    .place-and-pics-container{
        margin-top:40px;
    }
</style>