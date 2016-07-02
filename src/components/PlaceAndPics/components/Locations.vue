<script>
    import Location from './Location.vue'
    import State from '../state/state'

    module.exports = {
        components:{ Location },
        data: () => {
            return {
                name: 'locations',
                locations: State.locations
            }
        }
    }
</script>

<template>
    <div class="locations-container">
        <div v-for="location in locations" class="location-block">
            <location :location="location"></location>
        </div>
    </div>
</template>

<style lang="sass">
    .locations-container{
        border: 1px dashed red;
        display:flex;
        flex-direction:column;

        .location-block{
            flex:1;
            margin: 5px;
        }
    }
</style>