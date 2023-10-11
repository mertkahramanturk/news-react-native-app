import axios from 'axios';
import { setupInterceptorsTo } from './interceptors';
import Constants from 'expo-constants';

const apiUrl = Constants.manifest.extra.REACT_APP_API_URL; 

const api = setupInterceptorsTo(
  axios.create({
    baseURL: apiUrl,
    headers: {
      "Content-Type": "application/json",
    },
  })
);

export default api;


