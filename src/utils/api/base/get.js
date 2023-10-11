import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default async (url, params) => {
  try {
    const token = await AsyncStorage.getItem('accessToken');
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return await axios.get(url, { ...params, ...config });
  } catch (e) {
    if (!e || !e.response || e.response.status !== 401) throw e;
    await AsyncStorage.setItem('url', `${url}`);
    try {
      const token = await AsyncStorage.getItem('accessToken');
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return axios.get(url, { ...params, ...config });
    } catch (err) {
      return null;
    }
  }
};
