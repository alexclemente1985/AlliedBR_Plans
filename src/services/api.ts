import axios from 'axios';
import Constants from '../Constants';

const api = axios.create({
    baseURL: Constants.API_PATH,
});

export default api;
