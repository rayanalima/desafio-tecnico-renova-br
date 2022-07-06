import axios from 'axios';

const api = axios.create({
    baseURL: 'https://desenvolvimento.renovabr.org/api/v1'
});

export default api;