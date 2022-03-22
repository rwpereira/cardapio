import axios from 'axios';

const URL = 'https://ronaldo-burger-api.herokuapp.com/';
//const URL = 'http://localhost:3000';

const api = axios.create({
    baseURL: URL
});

export default api;