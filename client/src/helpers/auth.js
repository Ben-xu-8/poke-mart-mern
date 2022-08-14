import { setCookie, getCookie, deleteCookie } from './cookies';
import {
  setLocalStorage,
  getLocalStorage,
  deleteLocalStorage,
} from './localStorage';

export const setAuth = (token, user) => {
  setCookie('token', token);
  setLocalStorage('user', user);
};

export const isAuth = () => {
  if (getCookie('token') && getLocalStorage('user')) {
    return getLocalStorage('user');
  } else {
    return false;
  }
};

export const logout = (next) => {
  deleteCookie('token');
  deleteLocalStorage('user');
  next();
};
