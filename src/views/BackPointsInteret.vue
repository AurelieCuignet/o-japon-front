<template>

    <div class="main_container">
        <NavbarConnected v-if="this.$store.state.token"/>
    </div>
    <div class="poi__back-background">
      <div class="main_container">
        <router-link :to="{name:'GuideDeVoyageDetail', params:{currentId:currentId}}">
          <Retour textBtn="Retour à mon guide" />
        </router-link>
      <div class="poi__back">

        <h2>Liste des points d'intérêt</h2>
         <p class="resultats" v-if="maxPage != null">{{totalPoi }} points d'intérêt recensés (page {{ currentPage }} / {{ maxPage }})</p>
        <div class="errors" v-if="errors.length > 0">
            <p v-for="error in errors" :key="error">{{ error }}</p>
        </div>
          <div class="poi__back__card__container">
            <Card 
              v-for="poi in poiList" v-bind:key="poi.title" 
              v-bind:name="poi.title.rendered" 
              v-bind:localisation="poi._embedded['wp:term'][0][0].name" 
              v-bind:genres="poi._embedded['wp:term'] ? poi._embedded['wp:term'][1] : []" 
              v-bind:image="poi._embedded['wp:featuredmedia'] ? poi._embedded['wp:featuredmedia'][0].source_url : defaultImg" 
              v-bind:currentId="poi.id"
              @addPoiToGuideEvent="addPoiToGuide"
            />
          </div>
          <div class="pagination">
            <Button btnName="Précédent" v-if="(currentPage-1) >= 1" @click="getNextPoiPage(currentPage-1) "/>
            <Button btnName="Suivant" v-if="(currentPage+1) <= maxPage" @click="getNextPoiPage(currentPage+1) "/>
          </div>
      </div>

      </div>
    </div>

</template>

<script>
import NavbarConnected from '@/components/NavbarConnected.vue';
import Card from '@/components/Card.vue';
import Button from '@/components/Button.vue';
import PointsInteret from '@/services/POIService.js';
import Retour from '@/components/CTA/Retour.vue';
import defaultImg from '@/assets/images/header_background.jpg';
import POIService from '@/services/POIService.js';

export default {
  components:{
    NavbarConnected,
    Card,
    Button,
    Retour
  },
  data(){
    return{
      errors: [],
      success: null,
      poiList:null,
      defaultImg,
      currentId: this.$route.params.id,
      totalPoi: null,
      currentPage: 1,
      maxPage: null
    }
  },
  mounted(){
    PointsInteret.findAll().then(
      (response) => {
        this.totalPoi = response.headers['x-wp-total'];
        this.maxPage = response.headers['x-wp-totalpages'];
        this.poiList = response.data;
        console.log(this.poiList);
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
      },
    addPoiToGuide: function (value) {
        //console.log('I want to add POI ' + value.poiId + ' to Guide ' +this.currentId);
        POIService.addPoiToGuide({
            guideId: this.currentId,
            poiId: value.poiId
        }, (data) => {
            // I check the type of response and I display
            // the message accordingly
            if(data.type === "success") {
                this.success = data.message;
                console.log("OK !", data.message);
                this.$router.push('/listeguidesdevoyages/'+this.currentId);
            } else {
                this.errors.push(data.message);
                console.log("KO !", data.message);
            }
        }); 
    }
  }
}
</script>

<style>
@import url('../assets/css/style.css');
@import url('../assets/css/backpoi.css');

</style>