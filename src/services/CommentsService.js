import axios from 'axios';
import store from '../store/index.js';

const apiClient = axios.create({
    baseURL: 'http://ojapon.local/wp-json',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
        //'Authorization': 'Bearer ' + sessionStorage.getItem('token')
    },
    timeout: 10000
});

export default {
    insert(data, callback) {
        let arrayToString = JSON.stringify(Object.assign({}, data));
        apiClient.post('/ojapon_plugin/v1/comments', arrayToString, {
            headers: {
                'Authorization': 'Bearer ' + store.state.token
            }
        })
        .catch(
            (error) => {
                console.log(error);
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
                    message: response.data.message
                });
            }
        )
    }
}