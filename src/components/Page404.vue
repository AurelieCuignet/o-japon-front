<template>
  <div class="container">
    <div class="error-page-wrap">
      <article class="error-page gradient">
        <hgroup>
          <h1>404</h1>
          <h2>oops! page not found</h2>
        </hgroup>
        <a href="/" title="Back to site" class="error-back">Retour Accueil</a>
      </article>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Page404'
}
</script>

<style scoped>
.container{
  background-color: white;
  width: 35%;
  height: 37em;
  margin: 0 auto;
}
*, *:after, *:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box; }

html {
  background: #ccc;
  font: bold 14px/20px "Trajan Pro", "Times New Roman", Times, serif;
  color: #430400;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.15); }

.error-page-wrap {
  width: 310px;
  height: 310px;
  margin: 155px auto; }
  .error-page-wrap:before {
    
    width: 310px;
    height: 310px;
    border-radius: 50%;
    position: relative;
    z-index: -1;
    content: '';
    display: block; }

.error-page {
  width: 310px;
  height: 310px;
  border-radius: 50%;
  top: -280px;
  position: relative;
  text-align: center;
  background: #d36242;
  background: -moz-linear-gradient(top, #d36242 0%, darkred 100%);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #d36242), color-stop(100%, darkred));
  background: -webkit-linear-gradient(top, #d36242 0%, darkred 100%);
  background: -o-linear-gradient(top, #d36242 0%, darkred 100%);
  background: -ms-linear-gradient(top, #d36242 0%, darkred 100%);
  background: linear-gradient(to bottom, #d36242 0%, darkred 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='$firstColor', endColorstr='$secondColor',GradientType=0 ); }
  .error-page:before {
    width: 63px;
    height: 63px;
    border-radius: 50%;
    box-shadow: 3px 25px 0 5px #C95439;
    content: '';
    z-index: -1;
    display: block;
    position: relative;
    top: -19px;
    left: 44px; }
  .error-page:after {
    width: 310px;
    height: 17px;
    margin: 0 auto;
    top: 25px;
    content: '';
    z-index: -1;
    display: block;
    position: relative;
     }
  .error-page h1 {
    color: rgba(255, 255, 255, 0.94);
    font-size: 100px;
    margin: 0px auto 0 auto;
    text-shadow: 0px 0 7px rgba(0, 0, 0, 0.5); }
    .error-page h1:before {
      width: 260px;
      height: 1px;
      position: relative;
      margin: 0 auto;
      top: 70px;
      content: '';
      display: block;
       }
    .error-page h1:after {
      width: 260px;
      height: 1px;
      content: '';
      display: block;
      opacity: 0.2;
      margin: 0 auto;
      top: 50px;
      position: relative;
 }
  .error-page h2 {
    margin: 0px 0 15px 0;
    font-size: 24px; }
    .error-page h2:before {
      width: 130px;
      height: 1px;
      position: relative;
      margin: 0 auto;
      top: 31px;
      content: '';
      display: block;
 }
    .error-page h2:after {
      width: 130px;
      height: 1px;
      content: '';
      display: block;
      opacity: 0.2;
      margin: 0 auto;
      top: 11px;
      position: relative;
 }

.error-back {
  text-decoration: none;
  color: black;
  font-size: 3em;
  animation: clignote 2s linear infinite;
  text-shadow: 0 0 3px white;
   }
  .error-back:hover {
    color: white;
    text-shadow: 0 0 6px black;
    
   }
   @keyframes clignote {  
  50% { opacity: 0; }
}




</style>