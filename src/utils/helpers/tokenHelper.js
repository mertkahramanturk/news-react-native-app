import jwtDecode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';

function accessToken() {
  const accessToken = AsyncStorage.getItem('accessToken');
  return accessToken;
}

function refreshToken() {
  const refreshToken = AsyncStorage.getItem('refreshToken');
  return refreshToken;
}

export function getAccessToken() {
  return accessToken();
}

export function getRefreshToken() {
  return refreshToken();
}

export function getDecodedAccessToken() {
  return jwtDecode(accessToken());
}

export function getDecodedRefreshToken() {
  return jwtDecode(refreshToken());
}

export function getAccessTokenExp() {
  return getDecodedAccessToken().exp;
}

export function getRefreshTokenExp() {
  return getDecodedRefreshToken().exp;
}

export function createAccessToken(res) {
  AsyncStorage.setItem('accessToken', res);
}

export function createRefreshToken(res) {
  AsyncStorage.setItem('refreshToken', res);
}

export function removeAccessToken() {
  AsyncStorage.removeItem('accessToken');
}

export function removeRefreshToken() {
  AsyncStorage.removeItem('refreshToken');
}

export function removeTokens() {
  AsyncStorage.removeItem('accessToken');
  // localStorage.removeItem('refreshToken');
  
}