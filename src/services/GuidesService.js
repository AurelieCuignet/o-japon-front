import axios from 'axios';
import store from '../store/index.js'

const apiClient = axios.create({
    baseURL: 'http://ojapon.local/wp-json/wp/v2',
    headers: {
        Accept: 'application/json',
        'Authorization': 'Bearer' + store.state.token
    },
    timeout: 10000
})

export default {
    insert(data, callback){
        apiClient.post('/travelguide', data,)
        .catch(
            (error) => {
                callback({
                    type: 'error',
                    message: error.response.data.message
                });
            }
        )
        .then(
            (response) => {
                console.log(response);
                callback({
                    type: 'success',
                    message: 'Le fichier a été téléchargé avec succès',
                    newFileInfo: response.data
                });
            }
        );
    },

    findAllByAuthor(authorID){
        return apiClient.get('/travelguide?_embed&author='+authorID)
    },

    delete(idGuide){
        return apiClient.delete('/travelguide/'+ idGuide)
    },

    findById(idSingleGuide){
        return apiClient.get(`/travelguide/${idSingleGuide}?_embed`)
    }
}
