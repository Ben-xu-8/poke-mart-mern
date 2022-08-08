import axios from 'axios';

export const register = (data) => {
  try {
    const response = axios.post('/api/auth/register', data, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response;
  } catch (err) {
    console.log('error error', err);
  }
};
