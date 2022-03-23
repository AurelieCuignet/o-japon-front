<template>
      <input :type="type" :name="name" :id="id" v-on:blur="handleChange" v-on:change="handleChange" :placeholder="placeholder" class="container__inputText-content">
</template>

<script>
export default {
    name: 'InputText',
    props: {
        type: String,
        name: String,
        id: String,
        placeholder: String
    },
    data () {
        return {
            localInputValue: ''
        }
    },
    methods: {
        handleChange: function (event) {
        this.$emit('inputChange', {
            name: this.name,
            value: event.target.value
        })
        }
    }
}
</script>

<style>
@import url('../../assets/css/style.css');


.container__inputText-content{
    padding-left: 2.4em;
    padding-top: 1.6em;
    padding-bottom: 1.6em; 
    border-radius: 5px;
    border:none;
    background-color:#F1F1F1 ;
    color: var(--secondary-color);
    font-size: 1.5em;
    font-family: 'Fellix Medium';
    font-weight: 500;
    width: 100%;
    box-sizing: border-box; 
}

.container__inputText-content::placeholder{
    color:var(--regular-black);
    font-weight: 500;
}

 @media screen and (max-width: 375px){

    .container__inputText-content{
        padding: 1.6em;
    }
} 


</style>