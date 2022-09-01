import { ADD_CART, DELETE_CART_ITEM } from '../constants/cartConstant';

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

export const deleteCartItem = (product) => async (dispatch) => {
  const cart = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [];

  const updatedCart = cart.filter((cartItem) => cartItem._id !== product._id);
  localStorage.setItem('cart', JSON.stringify(updatedCart));

  dispatch({
    type: DELETE_CART_ITEM,
    payload: updatedCart,
  });
};
