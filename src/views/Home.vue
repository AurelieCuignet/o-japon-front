<template>
  <div class="home">
    <HeaderLayout/>
    <ConnectionLayout/>
    <FooterLayout/>
    <img alt="Vue logo" src="../assets/logo.png">

    <h1>On a plus qu'à bosser les copains :D</h1>
  </div>
</template>

<script>
// @ is an alias to /src

import HeaderLayout from '@/components/Headerlayout.vue'
import ConnectionLayout from '@/components/ConnectionLayout.vue'
import FooterLayout from '@/components/FooterLayoutMobile.vue'

export default {
  name: 'Home',
  components: { 
    FooterLayout,
    ConnectionLayout,
    HeaderLayout



  }
}
</script>