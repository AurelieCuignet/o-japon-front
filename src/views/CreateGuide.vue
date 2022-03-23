<template>
      <div class="main_container">
          <NavbarConnected />
          <BurgerMenu />
        </div>

  <section class="createguide">
      <div class="main_container">
          <router-link to='/backoffice'>
            <Retour textBtn="Retour" />
          </router-link>
          <div class="createguide-title">
              <h2>Créer votre <span>guide de voyage</span></h2>
              <h3>Personnaliser votre experience :</h3>
          </div>
        <!-- <FormBackCreateGuide /> -->
        <p v-if="errors.length" class="createguide-error">
            <b>Merci de corriger ces erreurs : </b>
            <ul>
                <li v-for="error in errors" :key="error"> {{error}}</li>
            </ul>
        </p>
        <fieldset>
            <label class="mdp_cmdp" for="nameguide">Nom du guide de voyage :</label> 
            <InputText name="nameguide" id="nameguide" placeholder="Mon voyage.." type="text" @inputChange="updateInputValue" /> 
        </fieldset>   
        <div class="uploadfile-img">
            <UploadFile fileTypes="image/*" @uploadComplete="getFileId"/>
        </div>

        <br><br><br><br>

        <Button v-on:click="sendForm(), goToListGuide()" btnName="Créer le guide"/>
      </div>
  </section>
</template>

<script>
import Retour from '@/components/CTA/Retour.vue'
import NavbarConnected from '@/components/NavbarConnected.vue';
import Button from '@/components/Button.vue'
import BurgerMenu from '@/components/BurgerMenu.vue'
import InputText from '@/components/formulaire/InputText.vue';
import UploadFile from '@/components/formulaire/UploadFile.vue';
import GuidesService from '@/services/GuidesService.js';
// import FormBackCreateGuide from '@/components/formulaire/FormBackCreateGuide.vue'


export default {
    name: 'CreateGuide',
    components: {
        NavbarConnected,
        InputText,
        UploadFile,
        Button,
        BurgerMenu,
        Retour
        // FormBackCreateGuide

    },
        data () {
        return {
            errors: [],
            success: null,
            formData: {
                attachmentId: null,
                nameguide: null
            }     
        }
    },
        methods: {
        getFileId: function (value) {
            this.formData.attachmentId = value.fileId
        },
        /**
         * Updates paren
         * t's data with child component data passed through $emit
         */
        updateInputValue: function (value) {
            this.formData[value.name] = value.value
        },
        sendForm() {
            //we start by emptying the error table (in the event of a second submit following an error, there is at least one element in it, and we want to avoid duplicate error messages)
            this.errors.length = 0;
            //retrieve all form data
                // we already have them in data...
            // validate this data
            if(!this.formData.attachmentId) {
                this.errors.push('Il manque une image');
            } 
            if(!this.formData.nameguide) {
                this.errors.push('Le nom de votre guide ne peut être vide');
            }
            
            // return error messages in case of non-validation
            // run an asynchronous request to register a new user
            if (this.errors.length > 0) {
                console.log("Ça va pas du tout, fais ça correctement stp !");

                console.log(this.errors);
            } else {
                GuidesService.insert({
                    title : this.formData.nameguide,
                    featured_media : this.formData.attachmentId,
                    status: 'publish'

                }, (data) => {
                    // I check the type of response and I display
                    // the message accordingly
                    if(data.type === "success") {
                        this.success = data.message;
                    } else {
                        this.errors.push(data.message);
                    }
                });
                
            }
        },
        goToListGuide(){
            if(this.errors.length <= 0){
                this.$router.push('/listeguidesdevoyages')
            }
         }
    }

}
</script>

<style>
@import url('../assets/css/style.css');
@import url('../assets/css/createguide.css');

</style>