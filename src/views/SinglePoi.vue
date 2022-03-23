<template>
    <div class="main_container">
        <NavbarConnected v-if="this.$store.state.token"/>
        <HeaderLayout v-else />
    </div>
    <section class="singlepoi">
        <div class="main_container">
            <router-link to="/pointsinteret">
                <Retour textBtn="Retour à la liste" />
            </router-link>
            <SinglePoiDetailLayout v-if="singlepoi" v-bind:name="singlepoi.title.rendered" v-bind:description="singlepoi.content.rendered" v-bind:image="singlepoi._embedded['wp:featuredmedia'][0].source_url" v-bind:saisons="singlepoi._embedded['wp:term'][2]" v-bind:localisations="singlepoi._embedded['wp:term'][0]" v-bind:genres="singlepoi._embedded['wp:term'][1]"   />
            <CommentsLayout />
        </div>
    </section>

</template>

<script>
import NavbarConnected from '@/components/NavbarConnected.vue'
import HeaderLayout from '@/components/HeaderLayout.vue'
import SinglePoiDetailLayout from '@/components/SinglePoiDetailLayout.vue'
import Retour from '@/components/CTA/Retour.vue'
import POIService from '@/services/POIService.js'
import CommentsLayout from '@/components/comments/CommentsLayout.vue'
export default {
    components:{
        NavbarConnected,
        HeaderLayout,
        Retour,
        SinglePoiDetailLayout,
        CommentsLayout
    },
    data(){
        return{
            idpoi: this.$route.params.idpoi,
            singlepoi: null
        }
    },
    mounted(){
        POIService.findById(this.$route.params.idpoi).then(
            (response) => {
                console.log('FIND BY ID', response.data);
                this.singlepoi = response.data
            }
        )
    }
}
</script>

<style>
@import url('../assets/css/style.css');
@import url('../assets/css/singlepoi.css');

.singlepoi a {
    text-decoration: none;
}

</style>