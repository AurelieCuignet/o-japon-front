<template>
<div class="main_container">
      <NavbarConnected />
</div>
  <section class="singleguide">
      <div class="main_container">
        <router-link to="/listeguidesdevoyages">
        <Retour textBtn="Retour à la liste des guides" />
        </router-link>
        <div class="errors" v-if="errors.length > 0">
            <p v-for="error in errors" :key="error">{{ error }}</p>
        </div>
        <SingleGuideDetailLayout v-if="nameguidesingle" v-bind:name="nameguidesingle.title.rendered" />
        <div class="poi__back__card__container">
            <Card 
              v-for="poi in poiList" v-bind:key="poi.title" 
              v-bind:name="poi.title.rendered" 
              v-bind:localisation="poi._embedded['wp:term'][0][0].name" 
              v-bind:genres="poi._embedded['wp:term'] ? poi._embedded['wp:term'][1] : []" 
              v-bind:image="poi._embedded['wp:featuredmedia'] ? poi._embedded['wp:featuredmedia'][0].source_url : defaultImg" 
              v-bind:currentId="poi.id"
              @removePoiFromGuideEvent="removePoiFromGuide"
            />
          </div>
      </div>
  </section>
</template>

<script>
import NavbarConnected from '@/components/NavbarConnected.vue'
import Retour from '@/components/CTA/Retour.vue'
import SingleGuideDetailLayout from '@/components/SingleGuideDetailLayout.vue'
import Card from '@/components/Card.vue';
import GuidesService from '@/services/GuidesService.js'
import POIService from '@/services/POIService.js'
import defaultImg from '@/assets/images/header_background.jpg';

export default {
    components:{
        NavbarConnected,
        Retour,
        SingleGuideDetailLayout,
        Card
    },
    data(){
        return{
            errors: [],
            success: null,
            nameguidesingle: null,
            currentId: this.$route.params.id,
            poiList:null,
            defaultImg,
        }
    },
    mounted(){
        GuidesService.findById(this.$route.params.id).then(
            (response) => {
                console.log('RESPONSE', response.data);
                this.nameguidesingle = response.data;
                POIService.findAllPoiByGuideId(this.currentId, (response) => {
                    // I check the type of response and I display
                    // the message accordingly
                    if(response.type === "success") {
                        console.log('findAllPoiByGuideId response', response);
                        this.poiList = response.message.data;
                    } else {
                        this.errors.push(response.data.message);
                        console.log("KO !", response.data.message);
                    }
                });
            }
        )
    },
    methods: {
        removePoiFromGuide: function (value) {
            //console.log('I want to remove POI ' + value.poiId + ' from Guide ' +this.currentId);
            POIService.removePoiFromGuide({
                guideId: this.currentId,
                poiId: value.poiId
            }, (data) => {
                // I check the type of response and I display
                // the message accordingly
                if(data.type === "success") {
                    this.success = data.message;
                    console.log("OK !", data.message);
                    //this.$router.push('/listeguidesdevoyages/'+this.currentId);
                    this.refreshList(value.poiId);
                } else {
                    this.errors.push(data.message);
                    console.log("KO !", data.message);
                }
            }); 
        },
        refreshList: function(id){
            this.poiList = this.poiList.filter(poiList => {
            return poiList.id !== id
            })
        }
    }
}
</script>

<style>
@import url('../assets/css/style.css');
@import url('../assets/css/singleguide.css');


</style>