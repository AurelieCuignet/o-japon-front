import axios from 'axios';
import store from '../store/index.js';

const apiClient = axios.create({
    baseURL: 'http://ojapon.local/wp-json/wp/v2',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    timeout: 10000
});

export default {
    findAll(pageNb = 1) {
        return apiClient.get('/poi?_embed&per_page=9&page='+pageNb);
    },
    findById(poiId) {
        return apiClient.get(`/poi/${poiId}?_embed`);
    },
    add(data, callback) {
        let arrayToString = JSON.stringify(Object.assign({}, data));  // convert array to string
        //let stringToJsonObject = JSON.parse(arrayToString);  // convert string to json object
        console.log(arrayToString);
        apiClient.post('/poi', arrayToString, {
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
                    message: response.statusText
                });
            }
        );
    },
    addPoiToGuide(data, callback) {
        apiClient.post(`/travelguide/${data.guideId}/poi/${data.poiId}`, data, {
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
                    message: response.statusText
                });
            }
        );
    },
    removePoiFromGuide(data, callback) {
        apiClient.delete(`/travelguide/${data.guideId}/poi/${data.poiId}`, data, {
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
                    message: response.statusText
                });
            }
        );
    },
    findAllPoiByGuideId(guideId, callback) {
        apiClient.get(`/travelguide/${guideId}/poi`)
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
                    message: response
                });
            }
        );
    }
};