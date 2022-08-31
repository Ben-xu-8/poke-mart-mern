import { ADD_CART } from '../constants/cartConstant';

export const addToCart = (product) => async (dispatch) => {
  const cart = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [];

  const duplicate = cart.filter((cartItem) => cartItem._id === product._id);
  if (duplicate.length === 0) {
    const productAdd = {
      ...product,
      count: 1,
    };
    cart.push(productAdd);

    localStorage.setItem('cart', JSON.stringify(cart));

    dispatch({
      type: ADD_CART,
      payload: cart,
    });
  }
};
