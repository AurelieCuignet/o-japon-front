import axios from 'axios';

// preparation de la connexion à l'API
const apiClient = axios.create({
    baseURL: 'http://ojapon.local/wp-json/wp/v2/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 10000
});

export default {
    getTerms(taxonomyName) {
        return apiClient.get('/' + taxonomyName + '?per_page=100');
    }
}

