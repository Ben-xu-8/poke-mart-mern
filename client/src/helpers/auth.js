import { setCookie, getCookie } from './cookies';
import { setLocalStorage, getLocalStorage } from './localStorage';

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
