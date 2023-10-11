/*
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
*/

import { getAccessToken } from "../../helpers/tokenHelper";

const onRequest = (config) => {
  config.headers["Authorization"] = getAccessToken ? `Bearer ${getAccessToken()}` : null;

  return config;
};

const onRequestError = (error) => {
  return Promise.reject(error);
};

const onResponse = (response) => {
  if (response.status === 205) {
    window.location.href = '/auth/logout';
  }
  return response;
};

const onResponseError = async (error) => {
  if (error?.response?.data?.error) {
    if (error.response.status === 205) {
      window.location.href = '/auth/logout';
    }
  }
  return Promise.reject(error);
};

export const setupInterceptorsTo = (
  axiosInstance
) => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
};