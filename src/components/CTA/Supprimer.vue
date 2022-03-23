<template>
<div class="delete">
  <div class="delete__element">
      <img alt="delete element" src="@/assets/trash.svg">
  </div>
</div>
</template>

<script>

export default {
    name: 'Supprimer',
    props:{
        key: Number
    },
}
</script>

<style>
@import url('../../assets/css/style.css');

    .delete{
        display:inline-block;
        position: absolute;
        top:-2.5em;
        right:0;
        z-index: 3;
    }

    .delete__element {
        height: 5em;
        width: 5em;
        border-radius: 50%;
        background-color: var(--primary-color);
        display: flex;
        justify-content: center;
        align-items: center;
        transition-property: margin-top;
        transition-duration: 0.2s;
        transition-delay: 0.5ms;
    }

    .delete__element:hover{
        margin-top: 1.2em;
    }

    .delete__element img {
        height: 2.2em;
    }

</style>