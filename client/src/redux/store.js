import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import loadingReducer from './reducers/loadingReducers';
import messageReducer from './reducers/messageReducer';
import categoryReducers from './reducers/categoryReducers';
import productReducer from './reducers/productReducers';
import filterReducer from './reducers/filterReducers';
import cartReducer from './reducers/cartReducers';

const initialState = {};
const middleware = [thunk];

const store = configureStore(
  {
    reducer: {
      loading: loadingReducer,
      messages: messageReducer,
      categories: categoryReducers,
      products: productReducer,
      filters: filterReducer,
      cart: cartReducer,
    },
  },
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
