<script>
    import Location from './Location.vue'
    import State from '../state/state'

    module.exports = {
        components:{ Location },
        data: () => {
            return {
                dev: State.dev,
                locations: State.locations
            }
        }
    }
</script>

<template>
    <div class="locations-container" :class="{'outline-edges': this.dev.showEdges}">
        <div v-for="location in locations" class="location-block">
            <location :location="location"></location>
        </div>
    </div>
</template>

<style lang="sass">
    .locations-container{
        display:flex;
        flex-direction:column;


        .location-block{
            margin: 5px;
        }
    }
</style>