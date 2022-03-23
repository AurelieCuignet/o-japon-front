<template>


<section class="createguide">
    <div class="main_container" v-if="!success">
        <router-link to='/backoffice'>
            <Retour textBtn="Retour" />
        </router-link>
        <div class="createguide-title">
            <h2>Créer un <span>point d'intérêt</span></h2>
        </div>

        <div class="errors" v-if="errors.length > 0">
            <p v-for="error in errors" :key="error">{{ error }}</p>
        </div>
        <div>
            <fieldset>
                <label class="mdp_cmdp" for="title">Nom :</label>
                <InputText name="title" id="title" placeholder="Osaka" type="text" @inputChange="updateInputValue" />
            </fieldset>
            <UploadFile fileTypes="image/*" @uploadComplete="getFileId"/>
            <fieldset>
                <label class="mdp_cmdp" for="title">Description :</label>
                <TextArea name="content" id="content" placeholder="Description du point d'intérêt : privilégiez une description objective, indépendante de votre expérience personnelle..." @inputChange="updateInputValue" />
            </fieldset>
            <div>
                <p>Localisation (plusieurs choix possibles)</p>
                <SearchAutocomplete :items="locations" @itemSelected="updateLocation"/>
                <div class="container_selected_taxonomie" v-for="locSelected in locationsSelected" :key="locSelected.id">
                    <input class="checkbox_selected" type="checkbox" :id="locSelected.id" :name="locSelected.name" checked>
                    <label class="checkbox_label" for="locSelected" v-html="locSelected.name"></label>
                </div>
            </div>
            <div>
                <p>Genres (plusieurs choix possibles)</p>
                <SearchAutocomplete :items="genres" @itemSelected="updateGenre"/>
                <div class="container_selected_taxonomie" v-for="genreSelected in genresSelected" :key="genreSelected.id">
                    <input class="checkbox_selected" type="checkbox" :id="genreSelected.id" :name="genreSelected.name" checked>
                    <label class="checkbox_label" for="genreSelected" v-html="genreSelected.name"></label>
                </div>
            </div>
            <div>
                <p>Seasons (plusieurs choix possibles)</p>
                <SearchAutocomplete :items="seasons" @itemSelected="updateSeason"/>
                <div class="container_selected_taxonomie" v-for="seasonSelected in seasonsSelected" :key="seasonSelected.id">
                    <input class="checkbox_selected" type="checkbox" :id="seasonSelected.id" :name="seasonSelected.name" checked>
                    <label class="checkbox_label" for="seasonSelected.name" v-html="seasonSelected.name"></label>
                </div>
            </div>
            <Button v-on:click="sendForm" btnName="Créez votre Point d'intérêt"/>
        </div>
    </div>
    <div class="main_container" v-else>
        <router-link to='/backoffice'>
            <Retour textBtn="Accueil back office" />
        </router-link>
        <div class="createguide-title center-button">
            <div class="check__element">
                <img alt="check element" src="@/assets/images/check.svg">
            </div>
            <h3>Votre <span>point d'intérêt</span> a bien été créé</h3>
            <router-link to="/backoffice">
                <Button btnName="Retourner au back office"/>
            </router-link>
        </div>
    </div>
  </section>



</template>

<script>
import InputText from '@/components/formulaire/InputText.vue';
import Retour from '@/components/CTA/Retour.vue';
import TextArea from '@/components/formulaire/TextArea.vue';
import UploadFile from '@/components/formulaire/UploadFile.vue';
import Button from '@/components/Button.vue';
import SearchAutocomplete from '@/components/formulaire/SearchAutocomplete.vue';
import TaxonomiesService from '@/services/TaxonomiesService.js';
import POIService from '@/services/POIService.js';

export default {
    name: "PoiForm",
    components: {
        InputText,
        Retour,
        UploadFile,
        TextArea,
        Button,
        SearchAutocomplete

    },
    data () {
        return {
            errors: [],
            success: null,
            locations: [],
            genres: [],
            seasons: [],
            formData: {
                title: null,
                content: null,
                attachmentId: null
            },
            userID : this.$store.state.userID,
            locationsSelected: [],
            idLocationsSelected: [],
            genresSelected: [],
            idGenresSelected: [],
            seasonsSelected: [],
            idSeasonsSelected: [],
        }
    },
    mounted() {
        // call to API to get taxonomies
        // Attention, on ne traite pas pour l'instant les cas d'erreurs
        TaxonomiesService.getTerms('locations').then(
            // Executer le code qui permet de recuperer le résultat de ma requete
            // Permet de garder le contexte et de recuperer response
            (response) => {
                console.log(response.data);
                const localisations = response.data;
                for(const location of localisations) {
                    this.locations.push({
                        id: location.id,
                        name: location.name
                    } );
                    /*
                    location.id.toString()*/
                }
                //this.locations = response.data;
            }
        );
        TaxonomiesService.getTerms('genres').then(
            // Executer le code qui permet de recuperer le résultat de ma requete
            // Permet de garder le contexte et de recuperer response
            (response) => {
                console.log(response.data);
                const genres = response.data;
                for(const genre of genres) {
                    this.genres.push({
                        id: genre.id,
                        name: genre.name
                    } );
                    /*
                    location.id.toString()*/
                }
                //this.locations = response.data;
            }
        );
        TaxonomiesService.getTerms('seasons').then(
            // Executer le code qui permet de recuperer le résultat de ma requete
            // Permet de garder le contexte et de recuperer response
            (response) => {
                console.log(response.data);
                const seasons = response.data;
                for(const season of seasons) {
                    this.seasons.push({
                        id: season.id,
                        name: season.name
                    } );
                    /*
                    location.id.toString()*/
                }
                //this.locations = response.data;
            }
        );


    },
    methods: {
        updateInputValue: function (value) {
            this.formData[value.name] = value.value
        },
        updateLocation: function (value) {
            console.log(value);
            this.locationsSelected.push(value);
            this.idLocationsSelected.push(value.id);
        },
        updateGenre: function (value) {
            console.log(value);
            this.genresSelected.push(value);
            this.idGenresSelected.push(value.id);
        },
        updateSeason: function (value) {
            console.log(value);
            this.seasonsSelected.push(value);
            this.idSeasonsSelected.push(value.id);
        },

        getFileId: function (value) {
            this.formData.attachmentId = value.fileId
        },
        sendForm() {
            //we start by emptying the error table (in the event of a second submit following an error, there is at least one element in it, and we want to avoid duplicate error messages)
            this.errors.length = 0;
            //retrieve all form data
                // we already have them in data...
            // validate this data
            if(!this.formData.title) {
                this.errors.push('Comment avez-vous dit que votre point d\'intérêt s\'appelait, déjà ?');
            }
            if(!this.formData.content) {
                this.errors.push('Pensez à nous dire ce qui fait de cet endroit un endroit intéressant !');
            }
            if(!this.formData.attachmentId) {
                this.errors.push('Une image serait du plus bel effet, vous ne pensez pas ? :)');
            }

            // return error messages in case of non-validation
            // run an asynchronous request to register a new user
            if (this.errors.length > 0) {
                console.log("Ça va pas du tout, fais ça correctement stp !");
                console.log(this.errors);
            } else {
                // call to PoiServices
                POIService.add({
                    title: this.formData.title,
                    content: this.formData.content,
                    status: 'publish',
                    featured_media: this.formData.attachmentId,
                    author: this.userID,
                    locations: this.idLocationsSelected,
                    genres: this.idGenresSelected,
                    seasons: this.idSeasonsSelected
                }, (data) => {
                    // I check the type of response and I display
                    // the message accordingly
                    if(data.type === "success") {
                        this.success = data.message;
                        console.log("OK !", data.message);
                    } else {
                        this.errors.push(data.message);
                        console.log("KO !", data.message);
                    }
                });
            }
        }
    }
}
</script>

<style scoped>

@import url('../assets/css/createguide.css');

.main_container {
    max-width: 1642px;
    margin: 0 auto;
    background-color: white;
    padding: 2em 5em;

}

.titre-principal {
    text-align: left;
    color: black;
    padding-left: 3.5em;
    padding-top: 3.125em;
    margin-top: 2.188em;
    font-family: "Fellix SemiBold";
    font-size: 2.0em;
}

.Connection {
   text-align: left;
    margin-left: 3.7em;
    margin-top: 6.063em;
    margin-bottom: 3.375em;
    font-family: "Fellix SemiBold";
    font-size: 2em;
    color: black;
}

.prenom_email {
    display: flex;
    font-weight: bold;
    color: black;
    font-family: "Fellix SemiBold";
    font-size: 1.500em;
}

.prenom {
    margin-left: 5em;
}

.email {
    margin: auto;
    padding-right: 6em;
}

.container_inputText {
    display: flex;
}

.container__inputText-content {
    padding-left: 1.500em;
    padding-top: 2.000em;
    padding-bottom: 2.000em;
    border-radius: 0.625em;
    border: 0.063em solid #F1F1F1;
    background-color:#F1F1F1 ;
    color: #1d1d1d;
    font-size: 1.000em;
    font-weight: 500;
    width: 100%;
    box-sizing: border-box;
}

/* .input_top_left {
    border-radius: 0.625em;
    border: 0.063em solid #F1F1F1;
    background-color:#F1F1F1 ;
    color: #1d1d1d;
    font-size: 1.000em;
    font-weight: 500;
    width: 100%;
    box-sizing: border-box;
    margin-left: 7.250em;
    margin-right: 1.125em;
}

.input_top_right {
    border-radius: 0.625em;
    border: 0.063em solid #F1F1F1;
    background-color:#F1F1F1 ;
    color: #1d1d1d;
    font-size: 1.000em;
    font-weight: 500;
    width: 100%;
    box-sizing: border-box;
    margin-right: 8.750em;
} */



.mdp_cmdp, p {
    display: flex;
    font-weight: bold;
    color: black;
    font-family: "Fellix SemiBold";
    font-size: 2.2em;
    margin-bottom: 10px;
}

/* .mdp {
    margin-left: 5em;
    padding-top: 2.5em;
}

.cmdp {
    margin: auto;
    padding-top: 2.5em;

} */

.container_selected_taxonomie {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    width: 100%;
    margin-bottom: 2em;
}

.checkbox_selected {
    display: block;
    height: 1em;
    margin: 0;
    width: 10%;
}

.checkbox_label {
    font-size: 1.5em;
}

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

/* .container_inputText_bottom {
    display: flex;
} */

/* .container_bottom_left {
    border-radius: 0.625em;
    border: 0.063em solid #F1F1F1;
    background-color:#F1F1F1 ;
    color: #1d1d1d;
    font-size: 1.000em;
    font-weight: 500;
    width: 100%;
    box-sizing: border-box;
    margin-left: 7.250em;
    margin-right: 1.125em;
}

.container_bottom_right {
    border-radius: 0.625em;
    border: 0.063em solid #F1F1F1;
    background-color:#F1F1F1 ;
    color: #1d1d1d;
    font-size: 1.000em;
    font-weight: 500;
    width: 100%;
    box-sizing: border-box;
    margin-right: 8.750em;
} */

/* .button_top {
    width: 180px;
    height: 3.375em;
    line-height: 3.375em;
    background-color: #CE1137;
    /* padding: 16px 24px;
    border-radius: 0.625em;
    font-weight: bold;
    font-size: 18px;
    text-decoration: none;
    color: #fff;
    margin-left: 7.5em;
    margin-top: 2.188em;
    margin-bottom: 2.5em;
} */

/* .btn_connexion {

    border: 0.750em solid #CE1137;
    color: white;
    transition: 400ms ease-in-out;
    text-decoration: none;
} */


/* .button_bottom {
    width: 7.813em;
    height: 3.375em;
    line-height: 3.375em;
    background-color: #CE1137;
    /* padding: 16px 24px;
    border-radius: 0.625em;
    font-weight: bold;
    font-size: 18px;
    text-decoration: none;
    color: #fff;
    margin-left: 7.625em;
    margin-top: 2.188em;
    font-family: "Fellix Bold";
} */

/* .btn_create {
    border: 0.750em solid #CE1137;
    color: white;
    transition: 400ms ease-in-out;
    text-decoration: none;

} */


.center-button {
    display: flex;
    flex-direction: column;
    align-items: center;
}

fieldset {
    border: 0;
    margin-bottom: 2em;
}

/* .check{
    display:inline-block;
    position: absolute;
    top:-2.5em;
    right:0;
    z-index: 3;
}

.check__element {
    height: 5em;
    width: 5em;
    border-radius: 50%;
    background-color: var(--primary-color);
    display: flex;
    justify-content: center;
    align-items: center;
} */

@media screen and (max-width: 375px){

    .createguide {
        padding: 4em 0;
    }

    .createguide-title h2 {
        font-size: 3.8em;
    }

    .createguide-title h3 {
        font-size: 2.8em;
    }

    .createguide label {
        font-size: 2em;
    }

    .main_container button {
        margin-bottom: 6em;
    }

    #content {
        font-size: 1em;
    }

    p {
        font-size: 2em;
    }


}


</style>



