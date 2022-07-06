import axios from 'axios';

const apiUser = axios.create({
    baseURL: 'https://desenvolvimento.renovabr.org/api/v1/users'
});

export default apiUser;