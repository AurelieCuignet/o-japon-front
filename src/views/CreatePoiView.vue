<template>
    
        <NavbarConnected v-if="this.$store.state.token"/>
        <BurgerMenu />
    
        <PoiForm/>
        
    
    
</template>

<script>
// import HeaderLayout from '@/components/HeaderLayout.vue';
import NavbarConnected from '@/components/NavbarConnected.vue';
import BurgerMenu from '@/components/BurgerMenu';
import PoiForm from '@/components/PoiForm.vue';


export default {
    name: 'CreatePoiView',
    components: {
        // HeaderLayout,
        NavbarConnected,
        BurgerMenu,
        PoiForm
        
    }

}
</script>

<style>
@import url('../assets/css/style.css');
@import url('../assets/css/createguide.css');

</style>