import { ADD_CART, DELETE_CART_ITEM } from '../constants/cartConstant';

let INITIAL_STATE = {
  cart: [],
};

if (localStorage.getItem('cart')) {
  INITIAL_STATE.cart = JSON.parse(localStorage.getItem('cart'));
} else {
  INITIAL_STATE.cart = [];
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CART:
      return {
        cart: [...action.payload],
      };
    case DELETE_CART_ITEM:
      return {
        cart: [...action.payload],
      };
    default:
      return state;
  }
};

export default cartReducer;
