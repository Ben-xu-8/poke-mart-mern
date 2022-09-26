import axios from 'axios';

export const createProduct = async (data) => {
  const response = await axios.post('/api/product', data);
  return response;
};

export const updateProduct = async (productId, formData) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
  const response = await axios.put(
    `/api/product/${productId}`,
    formData,
    config
  );

  return response;
};
