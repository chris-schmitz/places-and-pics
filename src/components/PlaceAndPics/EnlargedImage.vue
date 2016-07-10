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
        },
        methods:{
            close: function (){
                this.$router.go('/')
            }
        }
    }
</script>

<template>
    <div class="enlarged-image-container">
        <div class="image-wrapper">
            <img :src="image.src">
            <button @click="close" type="button" class="btn btn-danger">&times;</button>
        </div>
    </div>
</template>

<style lang="sass">
    @import "./style/_variables.scss";
    $image-padding: 5px;
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
            padding:$image-padding;
            position: relative;

            img{
                height: 100%;
            }
            button{
                float: right;
                position: absolute;
                right: $image-padding;
                top: $image-padding;
                border-radius: 0px;
            }
        }
    }
</style>