import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import loadingReducer from './reducers/loadingReducers';
import messageReducer from './reducers/messageReducer';
import categoryReducers from './reducers/categoryReducers';

const initialState = {};
const middleware = [thunk];

const store = configureStore(
  {
    reducer: {
      loading: loadingReducer,
      messages: messageReducer,
      categories: categoryReducers,
    },
  },
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
