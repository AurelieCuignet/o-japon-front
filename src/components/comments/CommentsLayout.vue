<template>
    <div class="comments-container">
        <h4>Commentaires</h4>
        <div v-if="comments.length >0">
            <CommentLayout 
                @deleted_comment="updateCommentsList" 
                v-for="comment in comments" :key="comment.id" 
                v-bind:id="comment.id" 
                v-bind:author="comment.author_name" 
                v-bind:date="comment.date" 
                v-bind:content="comment.content.rendered" 
            />
        </div>
        <div v-else>
            <p class="comments-container-nocomment">Aucun commentaire pour l'instant</p>
            </div>
        <div class="singlepoidetail-separator"></div>

        <NewCommentLayout @new_comment="updateCommentsList" v-if="this.$store.state.token"/>
    </div>
</template>

<script>
import NewCommentLayout from '@/components/comments/NewCommentLayout.vue';
import CommentLayout from '@/components/comments/CommentLayout.vue';
//import CommentsService from '@/services/CommentsService.js';
import POIService from '@/services/POIService.js';

export default {
    name: "CommentsLayout",
    data() {
        return {
            errors: [],
            comments: [],
        }
    },
    components: {
        NewCommentLayout,
        CommentLayout
    },
    methods: {
        getComments() {
            // this.$route.params.id --> à la place de l'id en dur
            const poiId = this.$route.params.idpoi;
            console.log('ICI',this.$route.params.idpoi)
            POIService.findById(poiId).then(
                (response) => {
                    console.log('RESPONSE COMMENTS LAYOUT', response.data);
                    this.comments = response.data._embedded.replies ? response.data._embedded.replies[0] : [];
                    console.log('COMMENTAIRES', this.comments);
                }
            )
        },
        updateCommentsList() {
            this.getComments();
            console.log('laaaa',this.comments.length)
        }
    },
    mounted() {
        this.getComments();
        // Executer la requete pour recuperer la liste des commentaires
    }
}


</script>

<style scoped>
    .comments-container {
        margin-bottom: 5em;
    }

    .comments-container h4{
        font-size: 2em;
        color: var(--secondary-color);
        font-family: 'Fellix SemiBold';
    }

    .comments-container-nocomment{
        font-size: 1.8em;
        font-family: 'Fellix Italic';
    }

    .singlepoidetail-separator{
        height: 2px;
        width: 100%;
        background-color: var(--light-black);
        margin-top: 2.4em;
        margin-bottom: 2.4em;
    }
    
</style>