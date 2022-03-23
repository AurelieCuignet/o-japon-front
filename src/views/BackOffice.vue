<template>

 <div class="main_container">
    <NavbarConnected v-if="this.$store.state.token"/>
    <HeaderLayout v-else />
    <BurgerMenu />
</div>

<section class="backoffice">
    <div class="main_container">
        <div class="backoffice-title">
            <h2>Bonjour <span>{{ username }}</span></h2>
            <h3>Vous souhaitez :</h3>
        </div>
        <div class="backoffice__card">
            <div class="backoffice__card-content">
                <router-link to="/createguide">
                <ButtonBack linkContent="Créer votre guide de voyage"/>
                </router-link>
            </div>
            <div class="backoffice__card-content">
                <router-link to="/backoffice/poi/add">
                <ButtonBack linkContent="Créer un point d'intérêt"/>
                </router-link>
            </div>
            <div class="backoffice__card-content">
                <router-link to="/listeguidesdevoyages">
                <ButtonBack linkContent="Accéder à mes guides de voyage"/>
                </router-link>
            </div>
            <!-- <div class="backoffice__card-content">
                <router-link to="/test-comments">
                <ButtonBack linkContent="Test des commentaires"/>
                </router-link>
            </div> -->
        </div>
    </div>
 </section>

  
</template>

<script>

import HeaderLayout from '@/components/HeaderLayout.vue'
import NavbarConnected from '@/components/NavbarConnected.vue'
import BurgerMenu from '@/components/BurgerMenu.vue'
import ButtonBack from '@/components/CTA/ButtonBack.vue'

// import UsersService from '@/services/UsersService.js'

export default {
    name: 'BackOffice',
    components: {
        HeaderLayout,
        NavbarConnected,
        ButtonBack, 
        BurgerMenu
        // FooterLayoutMobile
    },
    data(){
        return{
            username: this.$store.state.userName
        }
    }
}

</script>


<style>
@import url('../assets/css/style.css');
@import url('../assets/css/backoffice.css');

a{
    text-decoration: none;
}


</style>