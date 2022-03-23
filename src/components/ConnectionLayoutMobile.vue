<template>
<section class="ConnectionLayoutMobile">
<div class="main_container">
    <div class="connexion">
            <h1>Connectez-vous à votre compte</h1>
        </div>
        <div class="email_mdp">
            <p class="email">Votre email:</p>
            <div class="input_top">
            <input  type="text" name="inputText" id="inputText" placeholder="*******" class="inputText">
        </div>
            <p class="mdp">Votre mot de passe:</p>
            <div class="input_bottom">
            <input type="text" name="inputText" id="inputText" placeholder="*******" class="inputText">
        </div>
        </div>
        
        
        
        
        
        
        <div class="text_mdp">
             <p>Mot de passe oublié ?</p>
        </div>
        <div class="button">
            <a href="#" class="btn_connexion">Se connecter</a>
        </div>

        
        <div class="inscription">
            <a href="#" class="inscription">Pas encore de compte ?</a>
        </div>

</div>
</section>
</template>

<script>
export default {
   
}
</script>

<style scoped>

.ConnectionLayoutMobile {
    width: 23.438em;
    height: 41.688em;
    background-color: white;
}

.connexion {
    text-align: left;
    margin-left: 2.250em;
    padding-top: 2.500em;
    margin-bottom: 1.500em;
    font-family: "Fellix SemiBold";
    font-size: 1.500em;
    color: black;
}

.email {
    text-align: left;
    margin-left: 2.250em;
    font-weight: bold;
    font-family: "Fellix SemiBold";
    font-size: 1.125em;
    color: black;
}

.input_top {
    height: 3.063em;
    background: var(--unnamed-color-f1f1f1) 0% 0% no-repeat padding-box;
    background: #F1F1F1 0% 0% no-repeat padding-box;
    border-radius: 0.313em;
    opacity: 1;
    display: flex;
    margin-left: 2.250em;
    margin-right: 2.313em;
   
}

.mdp {
    text-align: left;
    margin-left: 2.250em;
    font-family: "Fellix SemiBold";
    font-size: 1.125em;
    color: black;

}

.input_bottom {
    height: 3.063em;
    background: var(--unnamed-color-f1f1f1) 0% 0% no-repeat padding-box;
    background: #F1F1F1 0% 0% no-repeat padding-box;
    border-radius: 0.313em;
    opacity: 1;
    display: flex;
    margin-left: 2.250em;
    margin-right: 2.313em;
}
.inputText {
    top: 15.938em;
    left: 2.250em;
    width: 21.8em;
    height: 3.063em;
/* UI Properties */
    background: var(--unnamed-color-f1f1f1) 0% 0% no-repeat padding-box;
    background: #F1F1F1 0% 0% no-repeat padding-box;
    border-radius: 0.313em;
    opacity: 1;

}
.inputText::placeholder{
    color:#ADADAD;
    font-weight: 500;
}

.text_mdp {
    text-align: right;
    margin-right: 2.313em;
    margin-top: 0.5em;
    font-weight: bold;
}

.button {
   width: 9.750em;
    height: 3.375em;
    line-height: 3.375em;
    background-color: #CE1137;
    /* padding: 16px 24px; */
    border-radius: 0.625em;
    font-weight: bold;
    /* font-size: 18px; */
    text-decoration: none;
    color: #fff;
    margin-left: 6.875em;
    margin-top: 2.188em;
    margin-bottom: 2.5em;
}

.btn_connexion {
    
    border: 0.063em solid #CE1137;
    color: white;
    transition: 400ms ease-in-out;
    text-decoration: none;
}

.inscription {
    text-align: left;
    margin-left: 1.25em;
    font-family: "Fellix SemiBold";
    color: black;
    font-size: 1.0em;
    text-decoration: none;
}

</style>

