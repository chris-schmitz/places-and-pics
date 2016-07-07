<script>
    import Dropzone from 'Dropzone'
    Dropzone.autoDiscover = false

    module.exports = {
        props:['location'],
        data: () => {
            return {
                dropzone: null
            }
        },
        computed:{
            dropzoneId: function (){
                return `dropzone-${this._uid}`
            }
        },
        ready: function (){
            this.dropzone = new Dropzone(`#${this.dropzoneId}`, {
                url: 'images/',
                method: 'POST',
                acceptedFiles: 'image/png,image/jpg',
                // thumbnailWidth: '100',
                // thumbnailHeight: null
            })
            this.dropzone.on('sending', this.attachMetaData)
        },
        methods:{
            attachMetaData: function (file, xhr, formData){
                formData.append('locationId', this.location._id)
            }
        }
    }
</script>

<template>
    <form id="{{dropzoneId}}" class="dropzone-container dropzone" enctype="multipart/form-data">
    </form>
</template>

<style lang="sass">
    //$image-size:100px;
    @import '~dropzone/src/dropzone.scss';

    .dropzone-container{
        height:100%;
        padding: 10px;
        overflow-y: scroll;
        overflow-x: hidden;
    }
</style>