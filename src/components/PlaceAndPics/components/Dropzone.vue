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
            // this.dropzone.on('success', this.clearFile)
        },
        events:{
            clearFiles: 'clearFiles'
        },
        methods:{
            attachMetaData: function (file, xhr, formData){
                formData.append('locationId', this.location._id)
            },
            clearFile: function (file){
                this.dropzone.removeFile(file)
            },
            clearFiles: function (){
                this.dropzone.removeAllFiles()
            }
        }
    }
</script>

<template>
    <form id="{{dropzoneId}}" class="dropzone-container dropzone" enctype="multipart/form-data">
        <button type="button" @click="clearFiles" class="clear">Clear</button>
    </form>
</template>

<style lang="sass">
    //$image-size:100px;
    @import '~dropzone/src/dropzone.scss';

    .dropzone-container{
        //height:130px;
        padding: 10px;
        overflow-y: hidden;
        //overflow-y: scroll;
        overflow-x: hidden;
    }
</style>