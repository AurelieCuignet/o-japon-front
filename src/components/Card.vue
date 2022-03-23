<template>
        <div class="card">
            <Ajouter v-if="showComponent == 'add'" @click="addPoiToGuide"/>
            <Supprimer v-if="showComponent == 'del'" @click="removePoiFromGuide"/>
            <div class="card__top">
                <div class="card__top-img">
                     <img :src="image">
                </div>
            </div>

            <div class="card__bottom">
                <h3 v-html="name"></h3>
                <div class="card__bottom-localisation">
                    <img src="../assets/map-pin.svg">
                    <p v-html="localisation"></p>
                </div>
                <ul class="genres-list">
                    <!-- The first <li> only displays when no tags have been set on the POI -->
                    <li v-if="genres.length == 0" class="card__bottom-tag">À voir</li>
                    <li v-else v-for="genre in genres" :key="genre.slug" v-html="genre.name" class="card__bottom-tag"></li>
                </ul>
                <router-link :to="{name:'SinglePOI', params:{idpoi:currentId}}">
                    <p class="card__bottom-link">En savoir plus</p>
                </router-link>
            </div>
        </div>

</template>

<script>
import Ajouter from '@/components/CTA/Ajouter.vue'
import Supprimer from '@/components/CTA/Supprimer.vue'

export default {
    name: 'Card',
    components:{
        Ajouter,
        Supprimer
    },
    props: {
        name: String,
        localisation: String,
        url: String,
        image: String,
        genres: Object,
        // POI id
        currentId: Number
    },
    computed: {
        showComponent(){
            const subPath = this.$route.path.substring(this.$route.path.lastIndexOf('/')+1);
            //console.log('subPath :', subPath);
            
            const guideId = this.$route.params.id; // undefined si on est sur le front
            //console.log('Guide id (params id) : ',guideId)
            // Page /listeguidesdevoyages/00/poi --> liste des POI back --> on veut afficher Ajouter (subPath == 'poi' et guide id != undefined) --> return add
            // Page /listeguidesdevoyages/00 --> détail d'un guide back --> on veut afficher Supprimer (subPath == Guide id) --> return del
            // Page /pointsinteret --> liste des POI front --> on n'affiche rien (subPath = pointsinteret et guide id == undefined) --> return none
            if(guideId !== 'undefined') { 
                if(subPath == 'poi') {
                    return 'add';
                } else if (subPath == guideId) {
                    return 'del';
                } else {
                    return 'none';
                }           
            }
            return 'none';
        }
    },
    methods: {
        addPoiToGuide() {
            console.log('CARD to add ', this.currentId);
            this.$emit('addPoiToGuideEvent', {
                poiId: this.currentId
            });
        },
        removePoiFromGuide() {
            console.log('CARD to remove', this.currentId);
            this.$emit('removePoiFromGuideEvent', {
                poiId: this.currentId
            });
        }
    }
}
</script>

<style>

@import url('../assets/css/style.css');

.card{
    width: 31%;
    margin-bottom: 3.2em;
    position: relative;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    
}

.card__top{
    position: relative;
    width: 100%;
    padding-bottom: 50%;
}

.card__top-img img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index:2;
}

.card__bottom{
    padding-top: 2.4em;
    padding-left: 2.4em;
    padding-bottom: 2.4em;
    background-color: #fff;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

.card__bottom h3{
    color: var(--secondary-color);
    font-size: 2.4em;
    font-family: 'Fellix SemiBold';
    margin: 0;
}

.card__bottom-localisation{
    display: flex;
    align-items: center;
}

.card__bottom-localisation p {
    color: var(--regular-black);
    margin: 0.8em;
    font-size: 1.8em;
    font-family: 'Fellix Regular';
}

.card__bottom-tag{
    font-family: 'Fellix Regular';
    font-size: 1.6em;
    color: var(--secondary-color);
}
.card__bottom-tag::after {
    content: ", ";
    padding-right: 0.2em;
}
.card__bottom-tag:last-child::after {
    content: "";
}

.genres-list {
    list-style-type: none;
    display: flex;
    padding-left: 0;
}

.card__bottom a{
    color: var(--primary-color);
    text-decoration: none;
    font-size: 1.6em;
    font-family: 'Fellix SemiBold';
}

</style>