<template>
<div class="main_container">
  <NavbarConnected />
  <BurgerMenu />
</div>
<section class="listguide">
  <div class="main_container">
    <router-link to="/backoffice">
      <Retour textBtn="Retour backoffice" />
    </router-link>
    <div class="listguide__menu">
      <div class="listguide__menu-left">
        <h2>Liste des <span>guides de voyage</span></h2>
      </div>
      <div class="listguide__menu-right">
        <router-link to="/createguide">
        <Button btnName="Créer un nouveau guide" />
        </router-link>
      </div>
    </div>
    <div class="listguide__card__container">
        <CardGuide v-bind:name="nameGuide.title.rendered"
           v-for="nameGuide in nameGuides" v-bind:key="nameGuide.id" v-bind:image="nameGuide._embedded['wp:featuredmedia'][0].source_url" @onDeleteCardGuide="RefreshList(nameGuide.id)" v-bind:id="nameGuide.id" />
      </div>
  </div>
</section>

</template>

<script>
import NavbarConnected from '@/components/NavbarConnected.vue'
import BurgerMenu from '@/components/BurgerMenu.vue'
import Retour from '@/components/CTA/Retour.vue'
import Button from '@/components/Button.vue'
import CardGuide from '@/components/CardGuide.vue'
import GuidesService from '@/services/GuidesService.js'



export default {
    name: 'ListeGuidesDeVoyages',
    components: {
      NavbarConnected,
      BurgerMenu,
      Retour,
      Button,
      CardGuide
    },
    data(){
      return {
        nameGuides: null,
      }
    },

    mounted(){
      GuidesService.findAllByAuthor(this.$store.state.userID).then(
        (response) => {
          console.log('View', response.data);
          console.log(this.$store.state.userID)
          this.nameGuides = response.data
        }
      );
    },
    methods:{
      RefreshList: function(id){
        this.nameGuides = this.nameGuides.filter(nameGuide => {
          return nameGuide.id !== id
        })
      }
    }
}

</script>

<style>
@import url('../assets/css/style.css');
@import url('../assets/css/listguide.css');



</style>