<template>
  <div>
      <img src="../assets/images/logo.png" alt="logo">
      <input id="toggle" type="checkbox">

<label for="toggle" class="hamburger">
  <div class="top-bun"></div>
  <div class="meat"></div>
  <div class="bottom-bun"></div>
</label>

<div class="nav">
  <div class="nav-wrapper">
    <nav>
        
      <a href="#">Accueil</a><br>
      <a href="#">Le Japon</a><br>
      <a href="#">Points d'Intérêts</a><br>
      <a href="#">Blogs Voyageurs</a><br>
      <a href="#">FAQ</a><br>
      <a href="#">Contact</a>
      <ul class="login">
        <li class="inscription">Inscription</li>
        <li class="connect">Se Connecter</li>
    </ul>
    </nav>
  </div>
</div>
  </div>


</template>

<script>

export default {
    name: 'FooterLayoutMobile',
    
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
  top: 130em;
  left: 70em;
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
}
nav a {
  position: relative;
  text-decoration: none;
  color: #ce1137;
  font-size: 4em;
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
.connect {
    background-color: #ce1137;
    border-radius: 10px;
    width: 7em;
    font-size: 80px;
    text-align: center;
    margin-top: 16px;
    padding-top: 16px;
    padding-bottom:16px;
    padding-left: 24px;
    padding-right:24px;
}
.inscription{
    color: white;
    font-size: 80px;
    margin-bottom: 40px;
}
.login {
    color: white;
    list-style-type: none;
}
img {
    position:relative;
    top: 109em;
}
ul {
    margin-top: 48px;
}

</style>