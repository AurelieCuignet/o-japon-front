<template>
  <div>
      <footer>
          <div class="container">
              <img class="logo" src="../assets/images/logo.png" alt="logo">
              <nav class="desktop">
                  <router-link v-for="link in links" :key="link.name" :to="link.route">{{ link.name }}</router-link>
              </nav>
              <ul class="login">
                  <li class="connect">Se Connecter</li>
              </ul>
          </div>
      </footer>
      
  </div>
</template>

<script>
export default {
    name:'FooterLayout',
    data () {
            return {
                links: [
                    {
                        name: 'Accueil',
                        route: '/'
                    },
                    {
                        name: 'LeJapon',
                        route: '/lejapon'
                    },
                    {
                        name: 'PointsInteret',
                        route: '/pointsinteret'
                    },
                    {
                        name: 'BlogsVoyageurs',
                        route: '/blogs'
                    },
                    {
                        name: 'FAQ',
                        route: '/faq'
                    },
                    {
                        name: 'Contact',
                        route: '/contact'
                    }
                    
                ]
            }
        }

}
</script>

<style scoped>

.container {

    display: flex;
    background-color: black;
    top: 1600px;
    left: 0px;
    width: 100%;
    height: 180px;
    /* UI Properties */
    background: var(--unnamed-color-1d1d1d) 0% 0% no-repeat padding-box;
    background: #1D1D1D 0% 0% no-repeat padding-box;
    opacity: 1;
    
}

a {
    margin: 1em;
    color: white;
}

ul {
    display: inline-flex;
    list-style-type: none;
    padding-top: 48px;
    padding-left: 300px;
    

}
li {
    color: white;
    /* UI Properties */
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-19) var(--unnamed-font-family-fellix);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-ffffff);
    text-align: left;
    font: normal normal medium 16px/19px Fellix;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    
 

    

     
}

.connect {
    background-color: #ce1137;
    border-radius: 8%;
    padding: 0.5em;
    margin-top: 10px;
    height: 1rem;
    
}
nav {
    margin-left: 350px;
    margin-top: 80px;
    padding-bottom: 81px;
}

.logo {
    /* Layout Properties */
    
    top: 1517px;
    left: 140px;
    width: 100px;
    height: 100px;
    /* UI Properties */
    opacity: 1;
    padding-top: 40px;
    padding-left: 140px;
    padding-bottom: 40px;
}

</style>