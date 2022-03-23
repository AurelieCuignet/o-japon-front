<template>
    <NavbarConnected v-if="this.$store.state.token"/>
    <HeaderLayout v-else />
    <RegistrationForm/>
    <BurgerMenu />

  
</template>

<script>
import HeaderLayout from '@/components/HeaderLayout.vue';
import NavbarConnected from '@/components/NavbarConnected.vue';
import RegistrationForm from '@/components/RegistrationForm.vue';
import BurgerMenu from '@/components/BurgerMenu.vue';


export default {
    name: 'RegisterLayout',
    components: {
        HeaderLayout,
        NavbarConnected,
        RegistrationForm,
        BurgerMenu
        
    }

}
</script>

<style>

</style>
