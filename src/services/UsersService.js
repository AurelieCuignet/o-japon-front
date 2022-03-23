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
    register(data, callback) {
        apiClient.post('/wp/v2/users/register', data)
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
                callback({
                    type: 'success',
                    message: response.data.message
                });
            }
        );
    },
    connect(data, callback) {
        console.log(data);
        // data est envoyé comme multipart dans la requête
        return apiClient.post('/jwt-auth/v1/token', data)
        .catch(
            (error) => {
                callback({
                    type: 'error',
                    message: error.response.data.code
                });
            }
        )
        .then(
            (response) => {
                console.log("Login succesful ", response);
                // on met à jour la donnée via un commit
                //param 1 : le nom de la mutation
                // param 2 : la data
                store.commit('setToken', response.data.data.token);
                store.commit('setUserID', response.data.data.id);
                store.commit('setUserName', response.data.data.displayName);
                store.commit('setUserRole', response.data.data.roles);
                callback({
                    type: 'success',
                    message: response.data.message
                });
            }
        );
    },
    disconnect() {
        store.commit('setToken', null);
        store.commit('setUserID', null);
        store.commit('setUserName', null);
        store.commit('setUserRole', null);
        return 'You have successfully been logged out';
    }
}

