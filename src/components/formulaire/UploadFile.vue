<template>
  <div>
        <div class="errors" v-if="errors.length > 0">
            <p v-for="error in errors" :key="error">{{ error }}</p>
        </div>
        <div v-if="success">
            <img v-if="newFileInfo.media_type == 'image'" v-bind:src="newFileInfo.media_details.sizes.medium.source_url" />
        </div>
        <div v-else>
            <div class="upload_container">
                <label for="file">Choisissez un fichier</label>
                <input :disabled="loading" @change="upload($event)" name="file" id="file" placeholder="Choose a file..." type="file" :accept="fileTypes" class="container__inputText-content">
                <label for="title">Titre de votre fichier</label> 
                <InputText :disabled="loading" name="title" id="title" placeholder="Titre du fichier" type="text" @inputChange="updateInputValue" /> 
            </div>

            <div class="center-button">
                <img src="../../assets/images/upload.svg" v-on:click="uploadFile" />
                
                <div class="loader" v-if="loading"></div>
        </div>
        </div>
        
  </div>
</template>

<script>
import InputText from '@/components/formulaire/InputText.vue';
import UploadMediaService from '@/services/UploadMediaService.js';

export default {
    name: 'UploadFile',
    props: {
        fileTypes: {
            default:'image/*,.pdf',
            type: String
        }
    },
    components: {
        InputText
    },
    data () {
        return {
            errors: [],
            success: null,
            loading: false,
            newFileInfo: null,
            dataForm: new FormData(),
            file: File,
            fileId: null,
            title: null
        }
    },
    methods: {
        /**
         * Updates parent's data with child component data passed through $emit
         */
        updateInputValue: function (value) {
            this[value.name] = value.value
        },
        /**
         * File info are updated in component's data when the file is selected by user
         */
        upload: function (event) {
            this.file = event.target.files[0];
            this.dataForm.append('file', this.file);
        },
        /**
         * Calls service to add media to WP library and then displays the file to the user if this is an image
         * ID of the new inserted media is sent to the parent (can then be used as a part of a form with several other form elements)
         */
        uploadFile() {
            // toggles the loader
            this.loading = true;
            if(this.title) this.dataForm.append('title', this.title);
            // call to api
            console.log('uploadImg et call to api');
            UploadMediaService.uploadMedia(this.dataForm, (data) => {
                // I check the type of response and I display
                // the message accordingly
                if(data.type === "success") {
                    this.success = data.message;
                    this.newFileInfo = data.newFileInfo;
                    this.$emit('uploadComplete', {
                        fileId: this.newFileInfo.id
                    });
                } else {
                    this.errors.push(data.message);
                }
                // hides the loader
                this.loading = false;
            });
        }
    }
}
</script>

<style>
/* todo version responsive et style de l'image bouton */
.container__inputText-content{
    padding-left: 2.4em;
    padding-top: 1.6em;
    padding-bottom: 1.6em; 
    border-radius: 5px;
    border:none;
    background-color:#F1F1F1 ;
    color: var(--secondary-color);
    font-size: 1.6em;
    font-family: 'Fellix Medium';
    font-weight: 500;
    width: 100%;
    box-sizing: border-box; 
}

.container__inputText-content::placeholder{
    color:var(--regular-black);
    font-weight: 500;
}

.upload_container {
    font-size: 0.9em;
}

.loader{  
    position: absolute;
    top:0px;
    right:0px;
    width:100%;
    height:100%;
    background-color:#1d1d1d;
    background-image: url('../../assets/images/loader.gif');
    background-size: 50px;
    background-repeat:no-repeat;
    background-position:center;
    z-index:10000000;
    opacity: 0.4;
    filter: alpha(opacity=40);
}

.center-button {
    padding: 1em;
}

</style>