/* eslint-disable no-useless-computed-key */

import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { createAccessToken } from '../../../utils/helpers/tokenHelper';
import { createUser } from '../../../utils/helpers/userHelper';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

// configLang();

function request() {
  return {
    type: 'LOGIN_REQUEST',
  };
}

function success() {
  return {
    type: 'LOGIN_SUCCESS',
  };
}

function failure() {
  return {
    type: 'LOGIN_FAILURE',
  };
}

const apiUrl = Constants.manifest.extra.REACT_APP_API_USER_SERVICE; 

export function login(values, navigation) { 

  return async (dispatch) => {
    dispatch(request());
    try {
      const res = await axios.get(`${apiUrl}/users/${values}`);
      if (res.data.errorCode) {
        dispatch(failure());
        return;
      }
      if (res.data) {
      } else {
        dispatch(failure());
        return;
      }
      //Token olduğunda kullanılacak kısım decode işlemleri
      // const accessToken = res.data.access;
      // const decoded = jwtDecode(res.data.access);
      // createAccessToken(accessToken);
      // createUser(decoded);
        AsyncStorage.setItem('user', JSON.stringify(res?.data?.id))
      dispatch(success());
    } catch (error) {
      console.error(error);
      dispatch(failure());
    }
  };
}
