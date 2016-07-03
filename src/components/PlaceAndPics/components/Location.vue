<script>
    import state from '../state/state.js'

    module.exports = {
        props:['location'],
        data: () => {
            return {
                dev: state.dev
            }
        }
    }
</script>

<template>
    <div class="location-container">
        <button type="button" :class="{'outline-edges': this.dev.showEdges}"  class="btn btn-primary location-button">
            {{ location.name }}
        </button>
    </div>
</template>

<style lang="sass">
    .location-container{
        text-align: center;

        .location-button{
            width: 100%;
            height: 100%;
        }
    }
</style>