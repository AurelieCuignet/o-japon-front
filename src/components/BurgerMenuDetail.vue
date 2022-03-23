<template>
  <div class="menu__detail">
      <ul>
        <li><a href="#">Accueil</a></li>
        <li><a href="#">Le Japon</a></li>
        <li><a href="#">Points d'intérêt</a></li>
        <li><a href="#">Blogs voyageurs</a></li>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">S'inscrire</a></li>
        <li><Button btnName="Se connecter" /></li>
      </ul>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
export default {
    components:{
        Button
    }
}
</script>

<style>

</style>