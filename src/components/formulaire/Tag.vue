<template>
    <div class="container__tag">
        <label for="tag" class="container__tag-label">{{TagContent}}</label>
        <input type="checkbox" name="tag" id="tag" class="container__tag-input">
</div>


</template>

<script>

export default {
    props:{
        TagContent: String
    }
}
</script>

<style>
@import url('../../assets/css/style.css');

.container__tag{
    display:flex;
    align-items: center;
    width: 100%;
}

.container__tag-label{
    color: var(--regular-black);
    font-size: 2.4em;
    font-family: 'Fellix SemiBold';
    margin-right: 0.8em;
}

.container__tag-input{
    height: 2.4em;
    width: 2.4em;
}


</style>