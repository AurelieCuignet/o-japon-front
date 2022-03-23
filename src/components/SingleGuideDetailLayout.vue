<template>
  <div class="main_container">
      <div class="singleguidedetail__menu">
          <div class="singleguidedetail__menu-left">
              <h2>{{ name }}</h2>
          </div>
          <div class="singleguidedetail__menu-right">
              <router-link :to="{name: 'GuideDeVoyagePOIList', params : {currentId:currentId}}">
              <Button btnName="Ajouter des POI" />
              </router-link>
          </div>
      </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
    name:'SingleGuideDetailLayout',
    components: {
        Button
    },
    props:{
        name: String,
        currentId: Number
    }
}
</script>

<style scoped>
@import url('../assets/css/style.css');

.singleguidedetail__menu{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 4em;
}

.singleguidedetail__menu-left h2{
    color: var(--primary-color);
    font-size: 5.4em;
    font-family: 'Fellix Bold';
    padding:0;
}




</style>