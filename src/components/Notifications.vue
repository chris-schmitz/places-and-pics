<script>
    module.exports = {
        data: () => {
            return {
                show: false,
                type: null,
                message: null
            }
        },
        computed: {
            alertType: function (){
                return `alert-${this.type}`
            }
        },
        events:{
            showNotification: 'showNotification'
        },
        methods:{
            showNotification: function (type = 'info', message = 'Unknown error.'){
                window.scrollTo(0,0)
                this.message = message
                this.type = type
                this.show = true
            },
            hideNotification: function (){
                this.show = false
            }
        }
    }
</script>

<template>
    <div class="container notification-container">
        <div v-show="show" transition="flip" class="alert animated" :class="alertType">
        <button @click="hideNotification" type="button" class="close"><span>&times;</span></button>
            <span class="message">{{ message }}</span>
        </div>
    </div>
</template>

<style lang="sass">
    .notification-container{
        margin-top: 20px;

        .message{
            font-weight: bold;
            font-size:14pt;
        }
    }
</style>