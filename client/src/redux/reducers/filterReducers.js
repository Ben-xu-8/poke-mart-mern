import { GET_NEW_PRODUCTS } from '../constants/filterConstants';

const INITIAL_STATE = {
  newProducts: [],
};

const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_NEW_PRODUCTS:
      return {
        newProducts: [...action.payload],
      };
    default:
      return state;
  }
};

export default filterReducer;
