<template>

    <div class="main_container">
        <NavbarConnected v-if="this.$store.state.token"/>
        <HeaderLayout v-else />
    </div>

    <div class="main_container">
      <div class="poi" id="poi-list">
        <h2>Que faire, que voir au Japon ?</h2>
        <p class="resultats" v-if="maxPage != null">{{totalPoi }} points d'intérêt recensés (page {{ currentPage }} / {{ maxPage }})</p>
          <div class="poi__card__container">
            <Card 
              v-for="poi in poiList" v-bind:key="poi.title" 
              v-bind:name="poi.title.rendered" 
              v-bind:localisation="poi._embedded['wp:term'][0][0].name" 
              v-bind:genres="poi._embedded['wp:term'] ? poi._embedded['wp:term'][1] : []" 
              v-bind:image="poi._embedded['wp:featuredmedia'] ? poi._embedded['wp:featuredmedia'][0].source_url : defaultImg" 
              v-bind:currentId="poi.id"
            />

            <!-- v-bind:tag="poi._embedded['wp:term'] ? poi._embedded['wp:term'][1].name : ''" -->
            
          </div>
          <div class="pagination">
            <Button btnName="Précédent" v-if="(currentPage-1) >= 1" @click="getNextPoiPage(currentPage-1) "/>
            <Button btnName="Suivant" v-if="(currentPage+1) <= maxPage" @click="getNextPoiPage(currentPage+1) "/>
          </div>
          
 
      </div>
    </div>

</template>

<script>
// import axios from 'axios'
import HeaderLayout from '@/components/HeaderLayout.vue'
import NavbarConnected from '@/components/NavbarConnected.vue'
import Card from '@/components/Card.vue'
import Button from '@/components/Button.vue'
import PointsInteret from '@/services/POIService.js'
import defaultImg from '@/assets/images/header_background.jpg'

export default {
    name: 'PointsInteretView',
    components: {
        HeaderLayout,
        NavbarConnected,
        Card,
        Button
    },
    data() {
        return {
            poiList:null,
            defaultImg,
            totalPoi: null,
            currentPage: 1,
            maxPage: null
        }
    },
    mounted() {
      PointsInteret.findAll().then(
        (response) => {
          console.log('ALL POI', response);
          this.totalPoi = response.headers['x-wp-total'];
          this.maxPage = response.headers['x-wp-totalpages'];
          this.poiList = response.data;
        }
      )
    },
    methods: {
      getNextPoiPage: function(pageNb) {
        PointsInteret.findAll(pageNb).then(
        (response) => {
          this.poiList = response.data;
          this.currentPage = pageNb;
          window.scrollTo(0, 0);
        }
      )
      }
    }
}
</script>

<style>
@import url('../assets/css/style.css');
@import url('../assets/css/frontpi.css');



</style>