<template>
    <textarea :name="name" :id="id" v-on:blur="handleBlur" :placeholder="placeholder" class="container__textarea-content"></textarea>
</template>

<script>
export default {
    name: 'TextArea',
    props: {
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
        handleBlur: function (event) {
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

 /* .container__textarea{
    max-width: 748px;
    height: 180px;
}  */

.container__textarea-content{
    padding-top: 3.2em;
    padding-left: 2.4em;
    padding-bottom: 3.2em;
    width: 100%;
    height: 100%;
    resize: none;
    font-size: 1.5em;
    font-family: 'Fellix Medium';
    color: var(--secondary-color);
    border-radius: 5px;
    box-sizing: border-box;
}

.container__textarea-content::placeholder{
    font-family: 'Fellix Medium';
}


@media screen and (max-width: 375px){

    .container__textarea-content{
        padding-top: 2.4em;
        padding-left: 1.6em;
        padding-bottom: 2.4em;
    }
}

</style>