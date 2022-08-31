import axios from 'axios';
import { START_LOADING, STOP_LOADING } from '../constants/loadingConstants';
import {
  SHOW_ERROR_MESSAGE,
  SHOW_SUCCESS_MESSAGE,
} from '../constants/messageConstants';
import { GET_NEW_PRODUCTS } from '../constants/filterConstants';
import { GET_PRODUCTS } from '../constants/productConstants';

export const getNewProducts =
  (sortBy = 'desc', limit = 3) =>
  async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const response = await axios.get(
        `/api/filter?sortBy=${sortBy}&lmit=${limit}`
      );
      dispatch({ type: STOP_LOADING });
      dispatch({
        type: GET_NEW_PRODUCTS,
        payload: response.data.newProducts,
      });
    } catch (err) {
      console.log('Get New Product API Error', err);
      dispatch({ type: STOP_LOADING });
      // dispatch({
      //   type: SHOW_ERROR_MESSAGE,
      //   payload: err.response.data.errorMessage,
      // });
    }
  };

export const getProductsByFilter = (ar) => async (dispatch) => {
  try {
    const response = await axios.post('/api/filter/search', ar);
    dispatch({
      type: GET_PRODUCTS,
      payload: response.data.products,
    });
  } catch (err) {
    console.log('Get Product API Error', err);
    dispatch({ type: STOP_LOADING });
    // dispatch({
    //   type: SHOW_ERROR_MESSAGE,
    //   payload: err.response.data.errorMessage,
    // });
  }
};
