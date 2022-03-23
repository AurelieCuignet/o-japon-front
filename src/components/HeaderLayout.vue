<template>

<div class="main_container">
      <nav class="header">
      <div class="header-left"><router-link :to="'/'"><img src="../assets/logo.png" alt="logo"></router-link></div>
      <div class="header__center">
          <ul>
              <li class="header__center-item"><router-link v-for="link in links" :key="link.name" :to="link.route">{{ link.name }}</router-link></li>
              <!-- <li class="header__center-item"><router-link v-for="link in links" :key="link.name" :to="{ path: link.route, hash: link.hash }">{{ link.name }}</router-link></li> -->

          </ul>
      </div>
      <div class="header__right">
          <ul>
              <li class="header__right-inscription">
                  <router-link to="/register">
                      Inscription
                  </router-link>
                  </li>
              <li>
                  <router-link to="/login">
                        <Button btnName="Se connecter"/>
                  </router-link>
            </li>
          </ul>
      </div>
  </nav>
</div>

  
</template>

<script>
import Button from '@/components/Button.vue'
export default {
    name:'HeaderLayout',
    components: {
        Button
    },
    data () {
            return {
                links: [
                    {
                        name: 'Accueil',
                        route: '/'
                    },
                    {
                        name: 'Le Japon',
                        route: '/home#japon',
                        hash: '#japon'
                    },
                    {
                        name: 'Points d\'intérêt',
                        route: '/pointsinteret'
                    },
                   /*  {
                        name: 'Blogs des Voyageurs',
                        route: '/blogs'
                    }, */
                    {
                        name: 'FAQ',
                        route: '/faq'
                    },
                      {
                        name: 'Team',
                        route: '/team'
                    },
                    {
                        name: 'Contact',
                        route: '/',
                        hash: '#contact'
                    }
                ]
            }
        }
     
}
</script>

<style scoped>
@import url('../assets/css/style.css');

.header{
    display:flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}


.header__center{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.header__center ul{
    list-style: none;
}

.header__center-item a{
    font-size: 1.6em;
    font-family: 'Fellix SemiBold';
    color: #fff;
    text-decoration: none;
    margin-left: 2.4em;
}

.header__right ul{
    display:flex;
    align-items: center;
    white-space: nowrap;
    list-style: none;
}

.header__right-inscription a{
    text-decoration: none;
    color:#fff;
    font-size: 1.6em;
    font-family: 'Fellix Bold';
    margin-right: 3.2em;
}

.header__right-inscription a:hover{
    color:var(--primary-color);
    transition: 0.5s;
}

@media screen and (max-width: 375px){
    .header{
        display: none;
    }
}

</style>