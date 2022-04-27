<template>

        <div class="card__pi">
            <div class="card__pi__left"><img class="card__pi__img" :src="ImgUrl" width="100"></div>
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
.card__pi__img {
    border: 2px dashed #fff;
    padding: 8px;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    margin-right: 15px;
    box-sizing: border-box;
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

/* PARTIE RESPONSIVE */

@media screen and (max-width: 1366px){
    .card__pi__img{
        width: 120px;
        height: 120px;
    }
}

@media screen and (max-width: 375px){
    .card__pi{
        display: none;
    }
}


</style>