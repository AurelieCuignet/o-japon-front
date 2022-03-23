<template>

      <input type="text" name="searchbar" id="searchbar" placeholder="Ou voulez-vous aller" class="container__inputSearch-content">

</template>

<script>
export default {

}
</script>

<style>
@import url('../../assets/css/style.css');

.container__inputSearch-content{
    padding: 0.8em;
    border-radius: 10px;
    border:none;
    background-color:#F1F1F1 ;
    color: var(--secondary-color);
    font-size: 1.6em;
    font-weight: 500;
    width: 100%;
    box-sizing: border-box; 
    font-family: 'Fellix Medium';
}

.searchbar input::placeholder{
    color:var(--regular-black);
    font-weight: 500;
}


</style>