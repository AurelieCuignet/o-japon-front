import axios from 'axios';
import store from '../store/index.js';

// preparation de la connexion à l'API
const apiClient = axios.create({
    baseURL: 'http://ojapon.local/wp-json/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 10000
});

export default {
    uploadMedia(data, callback) {
        apiClient.post('/wp/v2/media', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer ' + store.state.token
            }
        })
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
    }
}

