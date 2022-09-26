import {
  GET_CATEGORIES,
  CREATE_CATEGORIES,
} from '../constants/categoryConstants';

const INITIAL_STATE = {
  categories: [],
};

const categoryReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case CREATE_CATEGORIES:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    default:
      return state;
  }
};

export default categoryReducers;
