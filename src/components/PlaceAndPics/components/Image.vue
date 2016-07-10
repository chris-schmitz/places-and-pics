<script>
    module.exports = {
        props:['image'],
        data: () => {
            return {
                enlarged: false
            }
        },
        methods:{
            enlarge: function (){
                this.enlarged = true
            },
            shrink: function (){
                this.enlarged = false
            }
        }
    }
</script>

<template>
    <div @click="enlarge" class="image-container">
        <img :src="image.src" :class="{'enlarged': enlarged}">
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

        .enlarged{
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(0,0,0, .5);
        }
    }
</style>