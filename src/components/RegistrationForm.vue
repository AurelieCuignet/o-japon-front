<template>
<section>
    <div class="main_container">
        <div class="titre-principal">
            <h1>Inscrivez-vous</h1>
        </div>
        <div class="createguide-error" v-if="errors.length > 0">
            <b>Merci de corriger ces erreurs : </b>
            <ul>
                <li v-for="error in errors" :key="error"> {{error}}</li>
            </ul>
        </div>
        <div class="success" v-if="success">
            <p>{{ success }}</p>
        </div>
        <!-- <p>Résultat : {{ formData }}</p> -->
        <fieldset>
            <label class="mdp_cmdp" for="username">Votre nom d'utilisateur *</label> 
            <InputText name="username" id="username" placeholder="johndoe" type="text" @inputChange="updateInputValue" /> 
        </fieldset>   
            
        <fieldset>  
            <label class="mdp_cmdp" for="email">Votre email * :</label>
            <InputText name="email" id="email" placeholder="email@ojapon.com" type="text" @inputChange="updateInputValue" /> 
        </fieldset>
            
        <fieldset>
            <label class="mdp_cmdp" for="password">Votre mot de passe *</label>
            <InputText name="password" id="password" placeholder="******" type="password" @inputChange="updateInputValue" /> 
        </fieldset>
        <fieldset>
            <label class="mdp_cmdp" for="password_check">Confirmez votre mot de passe *</label>
            <InputText name="password_check" id="password_check" placeholder="*****" type="password" @inputChange="updateInputValue" /> 
        </fieldset>

        <div class="btn-submit-register">
            <Button v-on:click="sendForm" btnName="Créez un compte"/>
        </div>
        

       
        <h2 class="titre-principal">Vous avez déjà un compte ?</h2>

        <div class="btn-submit-login">
            <router-link to="/login">
            <Button btnName="Se connecter"/>
            </router-link>
        </div>

    </div>

</section>
</template>

<script>
import InputText from '@/components/formulaire/InputText.vue';
import Button from '@/components/Button.vue';
import UsersService from '@/services/UsersService.js';

export default {
    name: "RegistrationForm",
    components: {
        InputText,
        Button,
    
    },
    data () {
        return {
            errors: [],
            success: null,
            formData: {
                email: null,
                username: null,
                password: null,
                password_check: null,
                role: "traveler"
            }
        }
    },
    methods: {
        updateInputValue: function (value) {
            this.formData[value.name] = value.value
        },
        sendForm() {
            //we start by emptying the error table (in the event of a second submit following an error, there is at least one element in it, and we want to avoid duplicate error messages)
            this.errors.length = 0;
            //retrieve all form data
                // we already have them in data...
            // validate this data
            if(!this.formData.email) {
                this.errors.push('L\'email ne peut pas être vide');
            } else {
                // we check that it is a valid email
                const regex = new RegExp(/^[^\W][a-zA-Z0-9\-._]+[^\W]@[^\W][a-zA-Z0-9\-._]+[^\W]\.[a-zA-Z]{2,6}$/gm);
                if(!regex.test(this.formData.email)) {
                    this.errors.push('Le format de l\'email est invalide');
                }
            }
            if(!this.formData.username) {
                this.errors.push('Le nom d\'utilisateur ne peut pas être vide');
            }
            if(!this.formData.password || !this.formData.password_check) {
                this.errors.push('Le mot de passe et sa confirmation ne peuvent pas être vides');
            } else {
                if (this.formData.password != this.formData.password_check) {
                    this.errors.push('Les mots de passe ne correspondent pas');
                }
            }
            
            // return error messages in case of non-validation
            // run an asynchronous request to register a new user
            if (this.errors.length > 0) {
                console.log("Ça va pas du tout, fais ça correctement stp !");
                console.log(this.errors);
            } else {
                UsersService.register({
                    username: this.formData.username,
                    email: this.formData.email,
                    password: this.formData.password,
                    role: this.formData.role
                }, (data) => {
                    // I check the type of response and I display
                    // the message accordingly
                    if(data.type === "success") {
                        this.success = data.message;
                        this.$router.push('/login');
                    } else {
                        this.errors.push(data.message);
                    }
                });
                
            }
        }
    }

}
</script>

<style scoped>
 @import url('../assets/css/style.css');
/* @import url('../assets/css/createguide.css');  */

.main_container {
    max-width: 102.625em;
    margin: 0 auto;
    background-color: white;
    padding: 0 5em 15em; 
}

/* .center-button {
    display: flex;
    flex-direction: column;
    align-items: center;
} */

fieldset {
    border: 0;
    margin-bottom: 2em;
}


.mdp_cmdp {
    display: flex;
    font-weight: bold;
    color: black;
    font-family: "Fellix SemiBold";
    font-size: 1.500em;
    margin-bottom: 10px;
}

label.mdp_cmdp {
    font-size: 2.2em;
}

.titre-principal h1, h2 {
    text-align: center;
    color: black;
    padding: 1.125em 0;
    margin-top: 1.188em;
    font-family: "Fellix SemiBold";
    font-size: 3.375em;
}

.btn-submit-register {
    width: 25%;
    margin: 0 auto;
    
}

.btn-submit-login{
    width: 22%;
    margin: 0 auto;
    
}

   @media screen and (max-width: 375px) {

    /* .container_inputText{
    width: 18.875em;
    margin: 0 auto;
    }

    .inputText{
    padding: 1.000em;
    }
     */
    .titre-principal h1, h2 {
        text-align: center;
        font-size: 2.5em;
        margin-top: -1em;
        padding: 2.5em 0 0;
        
    }

    .btn-submit-register {
        width: 75%;
    }

    .btn-submit-login {
        width: 68%;
    }


 

}

</style>



