<template>
    <section>
        {{totalPoi }} points d'intérêt recensés : affichage de la page {{ currentPage }} sur {{ maxPage }}
        <Button btnName="Précédent" v-if="(currentPage-1) >= 1" @click="handleClick(currentPage-1) "/>
        <Button btnName="Suivant" v-if="(currentPage+1) <= maxPage" @click="handleClick(currentPage+1) "/>
    </section>
</template>

<script>
import Button from '@/assets/Button.vue';

export default {
    name: 'Pagination',
    components: {
        Button
    },
    props: {
        currentPage: Number,
        totalPoi: Number,
        maxPage: Number

    },
    data() {
        return {
            previousPage: null,
            nextPage: null
        }
    },
    methods: {
        handleClick(pageNb) {
            console.log('goto ', pageNb);
            this.$emit('', {
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

</style>