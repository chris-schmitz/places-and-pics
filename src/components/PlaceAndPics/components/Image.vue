<script>
    module.exports = {
        data: () => {
            return {
                name: 'image'
            }
        },
        ready: () => {
            console.log('image ready')
        }
    }
</script>

<template>
    <div class="image-container">
        {{ name }}
    </div>
</template>

<style lang="">
</style>