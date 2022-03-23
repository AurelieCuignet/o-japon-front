<template>
  <div class="container">
      <img src="../assets/logo.png" alt="logo">
      <input id="toggle" type="checkbox">

        <label for="toggle" class="hamburger">
        <div class="top-bun"></div>
        <div class="meat"></div>
        <div class="bottom-bun"></div>
        </label>

    <div class="nav">
        <div class="nav-wrapper">
            <nav>
                <router-link v-for="link in links" :key="link.name" :to="link.route">{{ link.name }}</router-link>

            </nav>
        </div>
    </div>
  </div>


</template>

<script>

export default {
    name: 'HeaderLayoutMobile',
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
                    },
                     {
                        name: 'Inscription',
                        route: '/register'
                    },
                     {
                        name: 'SeConnecter',
                        route: '/login'
                    }
                    
                    
                ]
            }
        }
    
}
</script>

<style scoped>

#toggle{
    display:none;
}
/**
  Hamburger
**/
.hamburger {
  position: absolute;
  top: 4em;
  left: 18em;
  margin-left: -2em;
  margin-top: -45px;
  width: 2em;
  height: 45px;
  z-index: 5;
}

.hamburger div {
  position: relative;
  width: 5em;
  height: 10px;
  border-radius: 3px;
  background-color: white;
  margin-top: 8px;
  transition: all 0.3s ease-in-out;
}

/**
Nav Styles
**/
.nav {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: black;
  top: -100%; left: 0; right: 0; bottom: 0;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.nav-wrapper {
  position: relative;
  overflow: hidden;
  overflow-y: auto;
  height: 100%;
}
nav {
  text-align: left;
  margin-left: 25%;
  display: flex;
  flex-direction: column;

}
nav a {
  position: relative;
  text-decoration: none;
  color: #ce1137;
  font-size: 1em;
  display: inline-block;
  margin-top: 1.25em;
  transition: color 0.2s ease-in-out;
  letter-spacing: 1px;
}
nav a:before {
  content: '';
  height: 0;
  position: absolute;
  width: 0.25em;
  background-color: white;
  left: -0.5em;
  transition: all 0.2s ease-in-out;
}
nav a:hover {
  color: white;
}
nav a:hover:before {
  height: 100%;
}

/**
Animations
**/
#toggle:checked + .hamburger .top-bun {
  transform: rotate(-45deg);
  margin-top: 25px;
}
#toggle:checked + .hamburger .bottom-bun {
  opacity: 0;
  transform: rotate(45deg);
}
#toggle:checked + .hamburger .meat {
  transform: rotate(45deg);
  margin-top: -7px;
}

#toggle:checked + .hamburger + .nav {
  top: 0;
  transform: scale(1);
}
/**
others
**/
.container {
  width: 360px;
  position:fixed;
  top: 36em;
  border-top: #ce1137 solid;
}
img {
  position: relative;
  width: 75px;
  right: 8em;
  top: 0.5em;
}

</style>