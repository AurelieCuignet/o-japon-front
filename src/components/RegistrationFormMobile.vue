<template>
    <section>
        <div class="main_container">
            <div class="inscription">
            <h1>Inscrivez-vous</h1>
                <div class="errors" v-if="errors.length > 0">
                    <p v-for="error in errors" :key="error">{{ error }}</p>
                </div>
                <div class="success" v-if="success">
                    <p>{{ success }}</p>
                </div>
        </div>
        <p class="prenom">Votre prénom:</p>
        <input type="text" name="inputText" id="inputText" placeholder="Votre texte" class="container__inputText-content">
        <p class="email">Votre email:</p>
        <input type="text" name="inputText" id="inputText" placeholder="Votre texte" class="container__inputText-content">
        <p class="mdp">Votre mot de passe:</p>
        <input type="text" name="inputText" id="inputText" placeholder="Votre texte" class="container__inputText-content">
        <p class="cmdp">Confirmez votre mot de passe:</p>
        <input type="text" name="inputText" id="inputText" placeholder="Votre texte" class="container__inputText-content">
        <div class="button">
            <a href="#" class="btn_connexion">Créez mon compte</a>
        </div>

        </div>

    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>

    .main_container {
    width: 23.438em;
    height: 41.688em;
    background-color: white;
}

.inscription {
    text-align: left;
    margin-left: 1.2em;
    padding-top: 2.500em;
    margin-bottom: 1.500em;
    font-family: "Fellix SemiBold";
    font-size: 1.500em;
    color: black;
}

.prenom {
    text-align: left;
    margin-left: 2.25em;
    font-weight: bold;
    font-family: "Fellix SemiBold";
    font-size: 1.125em;
    color: black;
}

.email {
    text-align: left;
    margin-left: 2.25em;
    font-weight: bold;
    font-family: "Fellix SemiBold";
    font-size: 1.125em;
    color: black;
}

.mdp {
    text-align: left;
    margin-left: 2.25em;
    font-weight: bold;
    font-family: "Fellix SemiBold";
    font-size: 1.125em;
    color: black;
}

.cmdp {
    text-align: left;
    margin-left: 2.25em;
    font-weight: bold;
    font-family: "Fellix SemiBold";
    font-size: 1.125em;
    color: black;
}

.container__inputText-content {
    height: 3.063em;
    background: var(--unnamed-color-f1f1f1) 0% 0% no-repeat padding-box;
    background: #F1F1F1 0% 0% no-repeat padding-box;
    border-radius: 0.313em;
    opacity: 1;
    display: flex;
    margin-left: 2.250em;
    margin-right: 2.313em;
    width: 18.875em;
}

.container__inputText-content::placeholder{
    color:#ADADAD;
    font-weight: 500;
}

.button {
 width: 180px;
    height: 3.375em;
    line-height: 3.375em;
    background-color: #CE1137;
    /* padding: 16px 24px; */
    border-radius: 0.625em;
    font-weight: bold;
    /* font-size: 18px; */
    text-decoration: none;
    color: #fff;
    margin-left: 2.250em;
    margin-top: 1.625em;
    /* margin-bottom: 2.5em; */
    padding-left: 1.875em;
}

.btn_connexion {
    
    border: 0.063em solid #CE1137;
    color: white;
    transition: 400ms ease-in-out;
    text-decoration: none;
}

</style>