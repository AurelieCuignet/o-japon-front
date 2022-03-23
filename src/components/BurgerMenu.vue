<template>

<div class="menu__mobile" v-if="isPanelClose">
  <div class="menu__mobile-left">
    <img src="../assets/images/logo.png">
  </div>
  <div @click ="OpenSidebarPannel" v-if="isPanelClose" class="menu__mobile-right">
    <img src="../assets/images/burger.svg">
  </div>
</div>

<div v-else class="menu__mobile-open" @scroll="notScroll">
  <ul>
    <li @focus="test"><a href="">Accueil</a></li>
    <li><a href="">Le Japon</a></li>
    <li><a href="">Points d'intérêt</a></li>
    <li><a href="">FAQ</a></li>
    <li><a href="">Contact</a></li>
    <li><a href="">Inscription</a></li>
    <router-link to="/login">
      <li class="menu__mobile-open-connect">Se connecter</li>
    </router-link>
  </ul>
  <div class="menu__mobile-open-bottom">
    <div class="menu__mobile-open-bottom-left">
      <img src="../assets/images/logo.png">
    </div>
    <div @click ="CloseSidebarPannel" class="menu__mobile-open-bottom-right">
      <img src="../assets/images/x.svg">
    </div>
  </div>
</div>

</template>

<script>
export default {
    name: 'BurgerMenu',
    methods:{
      OpenSidebarPannel(){
        this.isPanelClose = false
      },
      CloseSidebarPannel(){
        this.isPanelClose = true
      },
      notScroll(){
        window.scrollTo(0,0);
      }

    },
    data(){
      return{
        isPanelClose:true
      }
    },
};
</script>

<style scoped>


.menu__mobile{
    display:none;
}

@media screen and (max-width: 375px){
    .menu__mobile{
        display: flex;
        position: fixed;
        background-color: var(--secondary-color);
        width: 100%;
        left: 0;
        bottom:0;
        border-top: 3px solid var(--primary-color);
        z-index: 5;
        align-items: center;
        justify-content: space-between;
    }

    .menu__mobile-left img{
        width: 54px;
        padding:1.6em;
    }

    .menu__mobile-right img {
        width: 50px;
        padding:1.6em;
    }

    .menu__mobile-open{
      height: 100vh;
      background-color: var(--secondary-color);
      z-index:6;
      position: fixed;
      top:0;
      left:0;
      bottom:0;
      right:0;
      display: grid;
      align-items: center;
    }

    .menu__mobile-open ul{
      list-style: none;
      padding: 0;

    }
    .menu__mobile-open li{
      text-align: center;
      margin-bottom: 3.2em;
    }
    .menu__mobile-open a{
      color:#fff;
      text-decoration: none;
      text-align: center;
      font-family: 'Fellix SemiBold';
      font-size: 1.6em;
    }

    .menu__mobile-open-connect{
      color:var(--primary-color);
      font-size: 1.6em;
    }

    .menu__mobile-open-bottom{
        overflow-y: hidden;
        display: flex;
        position: fixed;
        background-color: var(--secondary-color);
        width: 100%;
        left: 0;
        bottom:0;
        border-top: 3px solid var(--primary-color);
        z-index: 5;
        align-items: center;
        justify-content: space-between;
    }

    .menu__mobile-open-bottom-left img{
      width: 54px;
      padding:1.6em;
    }
    .menu__mobile-open-bottom-right img {
      width: 50px;
      padding:1.6em;
    }

}

</style>