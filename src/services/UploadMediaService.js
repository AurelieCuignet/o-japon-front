import axios from 'axios';
import store from '../store/index.js'; // store is needed for token

// Setting API connection
const apiClient = axios.create({
    baseURL: 'http://ojapon.local/wp-json/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 10000
});

export default {
    /**
     * Sends a File to WordPress media library
     * @param {File} data a File from an &lt;input type="file"&gt;
     * @param {Function} callback the function to execute when the Promise is fulfilled 
     * or rejected, defined in UploadFile component
     */
    uploadMedia(data, callback) {
        /* "Producing code" : may take some time 
        The Promise state is "pending" */
        apiClient.post('/wp/v2/media', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer ' + store.state.token
            }
        })
        /* "Consuming code" : runs only when Promise is fulfilled and something went wrong.
        The Promise state is "rejected".
        Error is caught and sent back to the component with type "error", 
        used to display the error container in component */
        .catch(
            (error) => {
                callback({
                    type: 'error',
                    message: error.response.data.message
                });
            }
        )
        /* "Consuming Code" : runs only when Promise is fulfilled with no error 
        and sends response to the component
        The Promise state is "fulfilled" */
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
