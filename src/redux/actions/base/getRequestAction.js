import axios from 'axios';
import { get } from '../../../utils/api/base/index';
import { getUser } from '../../../utils/helpers/userHelper';
import Constants from 'expo-constants';


function request(namespace) {
  return {
    type: `${namespace}/GET_REQUEST_REQUEST`,
  };
}

function success(namespace, data) {
  return {
    type: `${namespace}/GET_REQUEST_SUCCESS`,
    data,
  };
}

function failure(namespace, error) {
  return {
    type: `${namespace}/GET_REQUEST_FAILURE`,
    error,
  };
}

function reset(namespace) {
  return {
    type: `${namespace}/GET_REQUEST_RESET`,
  };
}

export const getRequest = (namespace, size) => async (dispatch, getState) => {
  const apiUrl = Constants.manifest.extra.REACT_APP_API_URL;
  const apiKey = Constants.manifest.extra.API_KEY;
  
  try {
    dispatch(request(namespace));
    const res = getUser() ? await get(`${apiUrl}/${namespace}?limit=${size}&apiKey=${apiKey}`)
      : await axios.get(`${apiUrl}/${namespace}?apiKey=${apiKey}`)
    if (res.data.errorCode) {
          console.error(res.data.errorCode);
    } else {
      dispatch(success(namespace, res.data));
    }
  } catch (error) {
    dispatch(failure(namespace, error));
    console.error(error);

    if (error.response !== undefined) {
    } else {
    }
    throw error;
  }
}

export const resetList = (namespace) => async (dispatch) => {
  try {
    dispatch(reset(namespace));
  } catch (error) {
    throw error;
  }
}