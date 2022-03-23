<template>
  <article class="comment">
      <p>Posté par <span v-html="author"></span> le <span>{{ formattedDate }}</span></p>
      <div class="comment-content" v-html="content"></div>
  </article>
</template>

<script>
//import CommentsService from '@/services/CommentsService.js';

export default {
    name: "CommentLayout",
    props: {
        author: String,
        content: String,
        date: String,
        id: Number
    },
    data() {
        return {
            formattedDate: null
        }
    },
    mounted() {
        
        const customDate = new Date(this.date);
        this.formattedDate = customDate.getDate() +"-" + (customDate.getMonth()+1) + "-" + customDate.getFullYear();
        
    }
}
</script>

<style scoped>
    .comment{
        background-color: var(--light-black);
        padding: 1.6em;
        margin-bottom: 1.6em;
        border-radius: 5px;
        font-size: 1.4em;
    }

    .comment p{
        font-family: 'Fellix Regular';
    }
    .comment span{
        color:var(--primary-color);
        font-family: 'Fellix SemiBold';
    }

    .comment-content{
        font-family: 'Fellix Regular';
    }
</style>