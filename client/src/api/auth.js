import axios from 'axios';

export const register = async (data) => {
  const response = await axios.post('/api/auth/register', data, {
    headers: { 'Content-Type': 'application/json' },
  });
  return response;
};
