<template>
  
<div>
    <form action="">
            <fieldset>
                <label for="nameguide">Nom de votre guide de voyage</label>
                <input v-model="title" type="text" name="nameguide" id=""
                placeholder="Votre nom de guide de voyage..">
            </fieldset>

            <fieldset>
                <label for="image">Importer une image</label>
                <input type="text" name="image" id="" placeholder="Choisissez une image">
            </fieldset>
<!-- 
            <fieldset>
                <label for="startguide">Date de début</label>
                <input v-model="startguide" type="text" name="startguide" id="" placeholder="01 janvier 2022">
            </fieldset>

            <fieldset>
                <label for="endguide">Date de fin</label>
                <input v-model="endguide" type="text" name="endguide" id="" placeholder="08 janvier 2022">
            </fieldset> -->
        </form>
        <Button btnName="Créer mon guide" @click="createGuide" />
</div>


</template>

<script>
import Button from '@/components/Button.vue'
// import CreateGuide from'@/services/CreateGuide.js'
export default {
    name: 'FormBackCreateGuide',
    components: {
        Button
    },
        data(){
        return{
            error: [],
            status: 'publish',
            title: null,
            startguide:null,
            endguide:null

        }
    },
    // methods: {
    //     createGuide(){
    //         CreateGuide.insert({
    //             title: this.title,
    //             startguide: this.startguide,
    //             endguide: this.endguide,
    //             status: 'publish'
    //         },() => {
    //             this.$emit('new_guide', true)
    //             console.log('Guide de voyage ajoutée');
    //         })
    //     }
    // }
    
}
</script>

<style>
@import url('../../assets/css/style.css');


</style>