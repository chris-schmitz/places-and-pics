<script>
    module.exports = {
        props:['image'],
        data: () => {
            return {
            }
        },
        methods:{
            enlarge: function (){
                this.$router.go({
                    path: '/image',
                    params: {
                        src: this.image.src
                    }
                })
            }
        }
    }
</script>

<template>
    <div @click="enlarge" class="image-container">
        <img :src="image.src">
    </div>
</template>

<style lang="sass">
    @import "../style/_variables.scss";
    .image-container{
        img{
            width: 150px;
            outline: 2px solid $color3;
            outline-offset: 5px;
        }
    }
</style>