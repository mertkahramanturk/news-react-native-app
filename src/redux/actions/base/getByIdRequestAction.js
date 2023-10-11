/* eslint-disable array-callback-return */

import axios from 'axios';
import Constants from 'expo-constants';

function request(namespace) {
  return {
    type: `${namespace}/GET_BY_ID_REQUEST_REQUEST`,
  };
}

function success(namespace, data) {
  return {
    type: `${namespace}/GET_BY_ID_REQUEST_SUCCESS`,
    data,
  };
}
function reset(namespace) {
  return {
    type: `${namespace}/GET_BY_ID_REQUEST_RESET`,
  };
}


export const resetList = (namespace) => async (dispatch) => {
  try {
    dispatch(reset(namespace));
  } catch (error) {
    throw error;
  }
}

export const getByIdRequest = (namespace, id) => async (dispatch, getState) => {

apiUrl = Constants.manifest.extra.REACT_APP_API_USER_SERVICE; 
  try {
    dispatch(request(namespace));
   const res = await axios.get(`${apiUrl}/users/${id}`);
       if (res.data.errorCode) {
    } else {
      dispatch(success(namespace, res.data));
    }
  } catch (error) {
    if (error.response !== undefined) {
    } else {
    }
    throw error;
  }
}

