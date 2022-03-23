<template>

<body class="black_color">
  <div class="header__desktop">
          <NavbarConnected v-if="this.$store.state.token"/>
          <HeaderLayout v-else />
          <BurgerMenu />

        <div class="main_container">

          <div class="header__desktop-title">
            <span>日本</span>
            <h1>Japan</h1>
          </div>

          <div class="header__desktop__action">
            <div class="header__desktop__action__container-search">
              <!-- <InputSearch />-->
            </div>
            <div class="header__desktop__action__container-btn">
               <!--<Button btnName="Rechercher" />-->
            </div>
          </div> -->

          <div class="header__desktop-pi">
            <CirclePi localisationPI="Localisation" namePI="Nom du point d'intérêt" /><CirclePi localisationPI="Localisation" namePI="Nom du point d'intérêt" /><CirclePi localisationPI="Localisation" namePI="Nom du point d'intérêt" />
          </div> 
        </div>
  </div>

<div class="main_container" id="japon">
  <div class="lejapon_word">日本の歴史</div>
  <section class="lejapon">
    <!-- <div class="lejapon-word">日本の歴史</div> -->
    <div class="lejapon__content-left">
      <img src="../assets/card-japan.jpg" alt="">
    </div>

    <div class="lejapon__content-right">
          <div class="lejapon__content__right-text">
            <h2>Découvrez le Japon</h2>
            <p><b>Le Japon</b> (en japonais : 日本, Nihon, /ɲihoꜜɴ/ Écouter ou Nippon, /ɲippoꜜɴ/ Écouter) est un <b>pays insulaire</b> de l'Asie de l'Est, situé entre l'océan Pacifique et la mer du Japon, à l'est de la Chine, de la Corée du Sud, de la Corée du Nord et de la Russie, et au nord de Taïwan. Étymologiquement, <b>les kanjis</b> (caractères chinois) qui composent le nom du Japon signifient « pays (国, koku) d'origine (本, hon) du Soleil (日, ni) » ; c'est ainsi que le Japon est désigné comme le <b>« pays du soleil levant »</b>.
            <br><br>
            <span class="lejapon__text-mobile">Le Japon forme, depuis 1945, un <b>archipel de 6 852 îles</b> (de plus de 100 m2), dont les quatre plus grandes sont Hokkaidō, Honshū, Shikoku et Kyūshū, représentant à elles seules 95 % de la superficie terrestre du pays. L'archipel s'étend sur plus de <b>trois mille kilomètres</b>. La plupart des îles sont montagneuses, parfois volcaniques. Ainsi, le plus haut sommet du Japon, le mont Fuji (3 776 m), est un volcan dont la dernière éruption a eu lieu en 1707. Le Japon est le onzième pays le plus peuplé du monde.</span></p>
            <Button btnName="En savoir plus"/>
         </div>
         <div class="lejapon__content__right-img">
           <img src="../assets/card-japan.jpg" alt="">
         </div>
    </div>

  </section>
</div>

<div class="main_container" id="pi">
  <section class="pi">
    <div class="pi__content">
      <div class="pi__content-title">
        <h2>Parcourez nos lieux insolites</h2>
      </div>
      <div class="content-btn">
        <Button btnName="Afficher tout" />
      </div>
    </div>
    <p>Découvrez les points d'intérêt sélectionnés par l'équipe O'Japon. Vous pouvez accéder aux informations des différents P.I en cliquant dessus. Alors n'hésitez pas :-)</p>

    <div class="pi__list__top">
      <div class="pi__list__top-left"><span>Osaka</span></div>
      <div class="pi__list__top-center"></div>
      <div class="pi__list__top-right"><span>Matsumoto</span></div>
    </div>

    <div class="pi__list__bottom">
      <div class="pi__list__bottom-right"></div>
      <div class="pi__list__bottom-center"><span>Mont Fuji</span></div>
      <div class="pi__list__bottom-left"></div>
    </div>

  </section>
</div>

  <div class="main_container">
    <section class="personnaliser__experience">
      <h2 class="personnaliser__experience-title">Personnaliser votre voyage
<br>ou partager votre expérience</h2>
<p>L'écosystème de notre site internet est axé sur deux fonctionnalités principales : <br>le partage d'expérience et la personnalisation d'expérience, un seul mot d'ordre : la collaboration</p>
<div class="personnaliser__experience-action">
    <a href="#">Personnaliser mon voyage</a>
    <Button btnName="Créer mon expérience" />
</div>

    </section>
  </div>




<div class="main_container" id="galerie">
  <section class="galerie">
    <div class="galerie-word">
      <span class="galerie-word-1">ギャラリー</span>
      <span class="galerie-word-2">ギャラリー</span>
    </div>
    <div class="galerie-text">
      <h2>La galerie</h2>
      <p>Découvrez les différentes photos que l'équipe O'Japon a selectionné pour vous.<br> Elles représentent les plus beaux endroits que nous avons pu visiter durant nos différents voyages.</p>
    </div>
    <div class="galerie__img">
        <div class="galerie__img-1">
          <img src="../assets/images/galerie1.png">
          </div>
        <div class="galerie__img-2">
          <img src="../assets/images/galerie2.png">
          <img src="../assets/images/galerie1.png">
          </div>
        <div class="galerie__img-2">
          <img src="../assets/images/galerie3.png">
          <img src="../assets/images/galerie1.png">
          <img src="../assets/images/galerie3.png">
          </div>
        <div class="galerie__img-3">
          <img src="../assets/images/galerie2.png">
          </div>
    </div>

  </section>
</div>

<div class="main_container" id="contact">
  <section class="contact">

      <div class="contact__content-left">
        <img src="../assets/images/header_background.jpg">
      </div>

      <div class="contact__content__right">
        <h2>Contactez-nous</h2>
        <form action="" class="contact__content__right-form">
          <label for="username">Votre nom et prénom :</label>
          <InputText placeholder="John Doe" name="username" type="text"/>

           <label for="email">Votre email :</label>
          <InputText type="email" placeholder="john@gmail.com" name="email"/>

          <label for="message">Votre message :</label>
          <TextArea name="message"/>

          <Button btnName="Envoyez" type="submit"/>
        </form>
      </div>

  </section>
</div>


<div class="main_container">
  <footer class="footer">
    <NavbarConnected v-if="this.$store.state.token"/>
    <HeaderLayout v-else />
    <div class="footer-separator"></div>
    <div class="footer-bottom">
      <span>Mentions Légales</span>
      <span>Copyright O'Japon 2020</span>
    </div>
  </footer>
</div>

</body>




</template>

<script>
// @ is an alias to /src

import HeaderLayout from '@/components/HeaderLayout.vue'
import NavbarConnected from '@/components/NavbarConnected.vue'
import BurgerMenu from '@/components/BurgerMenu.vue'
/* import InputSearch from '@/components/formulaire/InputSearch.vue' */
import Button from '@/components/Button.vue'
import CirclePi from '@/components/CirclePi.vue'
import InputText from '@/components/formulaire/InputText.vue'
import TextArea from '@/components/formulaire/TextArea.vue'


export default {
  name: 'HomeView',
  components: {
    NavbarConnected,
    HeaderLayout,
    BurgerMenu,
    /* InputSearch, */
    Button,
    CirclePi,
    InputText,
    TextArea

  }
}
</script>

<style>
@import url('../assets/css/style.css');
@import url('../assets/css/homepage.css');
</style>