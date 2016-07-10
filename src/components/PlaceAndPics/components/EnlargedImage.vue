<script>
    module.exports = {
        data: () => {
            return {
                image:{
                    src: 'https://placekitten.com/1000/1000',
                    height: 0,
                    width:0
                }
            }
        },
        ready: function (){
            let vm = this
            this.$el.querySelector('img').addEventListener('load', function (){
                vm.image.height = this.naturalHeight
                vm.image.width = this.naturalWidth
            })
        }
    }
</script>

<template>
    <div class="enlarged-image-container">
        <div class="image-wrapper">
            <img :src="image.src">
        </div>
    </div>
</template>

<style lang="sass">
    @import "../style/_variables.scss";
    .enlarged-image-container{
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right:0;
        z-index:10000;
        color: white;
        background-color: rgba(0,0,0, .5);
        display: flex;
        justify-content: center;
        align-items: center;

        .image-wrapper{
            background-color: $color1;
            height:90%;
            //width:90%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding:5px;

            img{
                height: 100%;
            }
        }
    }
</style>