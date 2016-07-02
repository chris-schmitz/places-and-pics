<script>
    module.exports = {
        props:['location'],
        data: () => {
            return {
            }
        }
    }
</script>

<template>
    <div class="location-container">
        <button type="button"  class="btn btn-primary location-button">
            {{ location.name }}
        </button>
    </div>
</template>

<style lang="sass">
    .location-container{
        border: 1px dashed red;
        text-align: center;

        .location-button{
            width: 100%;
            height: 100%;
        }
    }
</style>