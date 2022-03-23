<template>

<a href="#" class="card__back">
    <div class="card__back__content">
        <div class="card__back__content-left">
            <p>{{linkContent}}</p>
        </div>
        <div class="card__back__content-right">
            <img alt="arrow right" src="@/assets/images/long_arrow.svg">
        </div>
    </div>
</a>

</template>

<script>
export default {
    name: 'ButtonBack',
    props: {
        linkContent: String
    }

}
</script>

<style scoped>
@import url('../../assets/css/style.css');


.card__back{
    width: 100%;
    text-decoration: none;
}

.card__back__content{
    background-color: var(--primary-color);
    padding: 4em;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.card__back__content-left p{
    color:#fff;
    font-family: 'Fellix SemiBold';
    font-size: 2.4em;
}

</style>