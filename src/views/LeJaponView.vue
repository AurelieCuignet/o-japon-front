<template>
   <div class="main_container">
    <NavbarConnected v-if="this.$store.state.token"/>
    <HeaderLayout v-else />
</div>
  <LeJaponLayout/>
</template>

<script>

import LeJaponLayout from '@/components/LeJaponLayout.vue';
import HeaderLayout from '@/components/HeaderLayout.vue';
import NavbarConnected from '@/components/NavbarConnected.vue';

export default {
    name: 'LeJaponView',
    components: {
    NavbarConnected,
    HeaderLayout,
    LeJaponLayout
  }

}
</script>

<style>

</style>