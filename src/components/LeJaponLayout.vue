<template>
  <div>
      <span class="letter_japan">日本の歴史</span>
      <main class="container">
          
        <div class="container__japan">
          <div class="container__japan__content-left">
              
            <img src="../assets/card-japan.jpg" alt="logo" class="photo1">
          </div>
          <div class="container__japan__content-right">
            <h2>Découvrez le Japon</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed vestibulum est, ut mattis est. Aliquam 
            viverra, orci nec consectetur gravida, turpis orci semper ex, porttitor faucibus quam diam mollis lacus. Nam 
            blandit nisl eget elit gravida, quis cursus urna condimentum. Nullam auctor et felis sit amet imperdiet. 
            Curabitur varius rutrum vehicula. Phasellus eu varius purus. Pellentesque dignissim fermentum nibh, at 
            porttitor purus posuere a. Morbi nec lacinia nisi, non pellentesque mi. Cras sagittis congue velit, a aliquam 
            nisl. Phasellus gravida felis convallis, congue ipsum feugiat, pretium turpis.<br><br><br>

            </p>
            <ul class="readmore_button">
                <li>En savoir plus</li>
            </ul>
            <img src="../assets/card-japan.jpg" alt="logo" class="photo2">
            
          </div>
        </div>
      </main>


  </div>
</template>

<script>
export default {
    name: 'LeJaponLayout'
}
</script>

<style scoped>
@import url('../assets/css/style.css');
.container {
    max-width: 1642px;
    margin: 0 auto;
    margin-top: 56px;
}
.container__japan{
    display:flex;
    width: 100%;
    justify-content: center;
}

.container__japan__content-right {
    text-align:left;
    margin-left: 56px;
    padding-right: 20px;
    width: 100%;
    
}
.container__japan__content-right h2{
    text-align: left;
    margin-left: 16px;
    
    
}
.photo1{
    display:block;
    width: 674px;
    height: 831px;
    margin-left: 26px;
}
.photo2{
    display:block;
    width: 810px;
    height: 541px;
    margin-left: 24px;
}
/*
*/
h1 {
    color: #ce1137;
    font-size:100px;
    height: 150px;
    position: absolute;
    z-index: 1;
    bottom:700px;
}
h2 {
    color: white;
    font-family: "Fellix SemiBold";
    font-size: 4.75em;
  
}
p {
    color:white;
    width: 886px;
    height: 341px;
    padding-left: 16px;
    padding-right: 16px;
    font-family: "Fellix Medium";
    font-size: 2.25em;
    
}
.letter_japan {
    font-size: 150px;
    -webkit-text-stroke: 2px #ce1137;
    z-index: -1;
    color:black;
    position: relative;
    top: 140px;
    right: 550px;
}
.readmore_button{
    background-color: #ce1137;
    color: white;
    list-style-type : none;
    padding: 16px 24px 16px 24px;
    border-radius: 10px;
    width: 150px;
    font-size: 20px;
    text-align: center;
    margin-left: 16px;
    margin-bottom: 150px;
    font-family: "Fellix Bold";
}
@media (max-width: 375px) {

    .container {
    max-width: 50em;
    margin: 0 auto;
    margin-top: 8em;
    }
    .container__japan{
    display:flex;
    width: 100%;
    flex-direction: column;
    }
    .container__japan__content-left{
        width: 50rem;
    }
    .container__japan__content-right {
    text-align:left;
    margin-left: 4em;
    padding-right: 2em;
    width: 100%;
    
    }
    h2{
        font-size: 3.5em;
    }
    p{
        font-size: 2em;
        width: 15em;
    }


    .letter_japan{
        display: block;
        width: 5em;
        font-size: 5em;
        -webkit-text-stroke: 2px #ce1137;
        z-index: -1;
        color:black;
        position:relative;
        left: 0.7em;
        top: 2.1em;
        

    }
    .photo1{
        width: 31em;
        height: 30em;
       margin-left: 5.5em;

    }
    .photo2{
        display: none;

    }
    .readmore_button{
        font-family: "Fellix Bold";
        margin-top: 10em;
    }
    
}

</style>