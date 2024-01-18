import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers, createStore } from 'redux';
import amountReducer from '../features/amount';
import goodsReducer from '../features/goods';
import positionReducer from '../features/position';
import { configureStore } from '@reduxjs/toolkit';

const reducer = combineReducers({
  amount: amountReducer,
  goods: goodsReducer,
  position: positionReducer,
});
const store = configureStore({reducer});

export type RootSate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
