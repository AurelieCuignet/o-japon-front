<template>
  <NavbarConnected v-if="this.$store.state.token"/>
  <HeaderLayout v-else />
  <ConnectionLayout/>
  <BurgerMenu />
</template>

<script>
import HeaderLayout from '@/components/HeaderLayout.vue';
import NavbarConnected from '@/components/NavbarConnected.vue';
import ConnectionLayout from '@/components/ConnectionLayout.vue';
import BurgerMenu from '@/components/BurgerMenu.vue';

export default {
    name: 'LoginView',
    components: {
        HeaderLayout,
        ConnectionLayout,
        NavbarConnected,
        BurgerMenu
    }

}
</script>

<style>

</style>