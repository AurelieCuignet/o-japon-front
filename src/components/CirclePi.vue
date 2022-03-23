<template>

        <div class="card__pi">
            <div class="card__pi__left"><img src="../assets/images/circlepi1.png"></div>
            <div class="card__pi__right">
            <span class="card__pi__right-tag">{{localisationPI}} {{RoleMember}}</span>
            <span class="card__pi__right-name">{{namePI}} {{TeamMember}} {{ JapaneseName }}</span>
            </div>
        </div>

</template>

<script>
export default {
    name: "CirclePI",
    props:{
        localisationPI: String,
        namePI: String,
        TeamMember: String,
        JapaneseName: String,
        RoleMember: String,
        ImgUrl: String
       
        
        
         
    }
}
</script>

<style>
@import url('../assets/css/style.css');


.card__pi{
    display:flex;
    align-items: center;
}

.card__pi__right{
    margin-left: 2.4em
}

.card__pi__right-tag{
    display:block;
    font-size: 1.6em;
    color: #fff;
    font-family: 'Fellix Light';
}

.card__pi__right-name{
    display: block;
    font-size: 1.8em;
    color: #fff;
    font-family: 'Fellix SemiBold';
}

@media screen and (max-width: 375px){
    .card__pi{
        display: none;
    }
}

</style>