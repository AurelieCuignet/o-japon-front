<template>
  <div class="main_container">
        <h1>Test upload API</h1>
        <p>Attention, ce formulaire n'est pas fonctionnel, à part pour le composant UploadFile !! </p>
        <p>Les autres champs sont uniquement des copier/coller du formulaire d'inscription, sans traitement derrière.</p>
        <fieldset>
            <label class="mdp_cmdp" for="username">Votre nom d'utilisateur :</label> 
            <InputText name="username" id="username" placeholder="johndoe" type="text" @inputChange="updateInputValue" /> 
        </fieldset>   
            
        <fieldset>  
            <label class="mdp_cmdp" for="email">Votre email :</label>
            <InputText name="email" id="email" placeholder="email@ojapon.com" type="text" @inputChange="updateInputValue" /> 
        </fieldset>
            
        <fieldset>
            <label class="mdp_cmdp" for="password">Votre mot de passe:</label>
            <InputText name="password" id="password" placeholder="******" type="password" @inputChange="updateInputValue" /> 
        </fieldset>
        <fieldset>
            <label class="mdp_cmdp" for="password_check">Confirmez votre mot de passe:</label>
            <InputText name="password_check" id="password_check" placeholder="*****" type="password" @inputChange="updateInputValue" /> 
        </fieldset>

        <UploadFile @uploadComplete="getFileId"/>
        
  </div>
</template>

<script>
import UploadFile from '@/components/formulaire/UploadFile.vue';
import InputText from '@/components/formulaire/InputText.vue';

export default {
    name: 'TestUploadView',
    components: {
        InputText,
        UploadFile
    },
    data () {
        return {
            errors: [],
            success: null,
            formData: {
                attachmentId: null
            }
            /* dataForm: new FormData(),
            file: File*/
        } 
    },
    methods: {
        getFileId: function (value) {
            this.formData.attachmentId = value.fileId
        }
        /* upload: function (event) {
            this.file = event.target.files[0];
            this.dataForm.append('file', this.file);
        },
        uploadImg() {
            // call to api
            console.log('uploadImg et call to api');
            UploadMediaService.uploadMedia(this.dataForm, (data) => {
                    // I check the type of response and I display
                    // the message accordingly
                    if(data.type === "success") {
                        this.success = data.message;
                    } else {
                        this.errors.push(data.message);
                    }
                });
        } */
    }
}
</script>

<style scoped>
.main_container {
    background-color: #fff;
}
p, label {
    font-size: 1.8em;
}
</style>