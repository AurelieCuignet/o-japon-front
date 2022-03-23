<template>

      <!-- <a href="" class="button-content">{{ btnName }}</a> -->
      <button class="button-content" v-html="btnName"></button>

</template>

<script>
export default {
    name: 'Button',
    props: {
      btnName: String
    }


}
</script>

<style>
@import url('../assets/css/style.css');

.button-content{
  background-color: var(--primary-color);
  color:#fff;
  padding: 1em 2em;
  font-size: 1.8em;
  text-decoration: none;
  font-family: 'Fellix Bold';
  border-radius: 10px;
  border: 0;
}

.button-content:hover{
  background-color: #fff;
  color: var(--primary-color);
  transition: 0.5s;
}

  

</style>