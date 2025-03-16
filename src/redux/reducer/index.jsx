import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./product";
import cartReducer from "./cart";
export const rootreducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
});
